import { allDocuments } from "./documents";
import { stages, supportProcesses, getProcess } from "./stages";
import { guidance, capaRecords, audits, integrations } from "./ops";

export type SearchHit = {
  id: string;
  kind: "stage" | "process" | "document" | "guidance" | "capa" | "audit" | "integration" | "support";
  title: string;
  subtitle: string;
  href: string;
  processId?: string;
};

export function searchQms(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];

  for (const s of stages) {
    const hay = `${s.number} ${s.name} ${s.shortName} ${s.owner} ${s.intent} ${s.procedureIds.join(" ")}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        id: s.id,
        kind: "stage",
        title: `Stage ${s.number} · ${s.name}`,
        subtitle: s.owner,
        href: `/stages/${s.id}`,
      });
    }
    for (const p of s.processes) {
      const ph = `${p.name} ${p.summary} ${p.procedureIds.join(" ")}`.toLowerCase();
      if (ph.includes(q)) {
        hits.push({
          id: p.id,
          kind: "process",
          title: p.name,
          subtitle: `Stage ${s.number} · ${s.name}`,
          href: `/stages/${s.id}?process=${p.id}`,
          processId: p.id,
        });
      }
    }
  }

  for (const d of allDocuments) {
    const hay = `${d.number} ${d.title} ${d.purpose} ${d.owner}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        id: d.id,
        kind: "document",
        title: `${d.number} ${d.title}`,
        subtitle: `${d.type.toUpperCase()} · Rev ${d.rev}`,
        href: `/documents/${d.id}`,
      });
    }
  }

  for (const g of guidance) {
    if (`${g.title} ${g.audience}`.toLowerCase().includes(q)) {
      hits.push({
        id: g.id,
        kind: "guidance",
        title: g.title,
        subtitle: g.audience,
        href: `/guidance#${g.id}`,
      });
    }
  }

  for (const c of capaRecords) {
    if (`${c.id} ${c.title} ${c.jiraKey}`.toLowerCase().includes(q)) {
      hits.push({
        id: c.id,
        kind: "capa",
        title: `${c.id.toUpperCase()} · ${c.title}`,
        subtitle: c.jiraKey,
        href: `/capa#${c.id}`,
      });
    }
  }

  for (const a of audits) {
    if (`${a.title} ${a.clause} ${a.area}`.toLowerCase().includes(q)) {
      hits.push({
        id: a.id,
        kind: "audit",
        title: a.title,
        subtitle: a.clause,
        href: `/audits#${a.id}`,
      });
    }
  }

  for (const i of integrations) {
    if (`${i.name} ${i.purpose}`.toLowerCase().includes(q)) {
      hits.push({
        id: i.id,
        kind: "integration",
        title: i.name,
        subtitle: i.purpose,
        href: `/integrations#${i.id}`,
      });
    }
  }

  for (const s of supportProcesses) {
    if (`${s.name} ${s.summary}`.toLowerCase().includes(q)) {
      hits.push({
        id: s.id,
        kind: "support",
        title: s.name,
        subtitle: s.procedureIds.join(", "),
        href: `/documents/${s.procedureIds[0]}`,
      });
    }
  }

  return hits.slice(0, 20);
}

export function retrieveContext(question: string): string {
  const hits = searchQms(question);
  const extra = question.toLowerCase();
  const bits: string[] = [];

  if (hits.length === 0) {
    const fallback = allDocuments.slice(0, 4);
    for (const d of fallback) {
      bits.push(`${d.number} ${d.title}: ${d.purpose}`);
    }
  }

  for (const h of hits.slice(0, 8)) {
    if (h.kind === "stage") {
      const s = stages.find((x) => x.id === h.id);
      if (s) {
        bits.push(
          `Stage ${s.number} ${s.name} (owner ${s.owner}): ${s.intent} Procedures: ${s.procedureIds.join(", ")}. Inputs: ${s.inputs.join("; ")}. Outputs: ${s.outputs.join("; ")}.`,
        );
      }
    } else if (h.kind === "document") {
      const d = allDocuments.find((x) => x.id === h.id);
      if (d) {
        const steps = d.sections.flatMap((sec) => sec.steps ?? []).slice(0, 6);
        bits.push(
          `${d.number} ${d.title} (Rev ${d.rev}, owner ${d.owner}): ${d.purpose} Scope: ${d.scope}. Steps: ${steps.join(" | ")}`,
        );
      }
    } else if (h.kind === "process" && h.processId) {
      const found = getProcess(h.processId);
      if (found) {
        bits.push(
          `Process ${found.process.name} in Stage ${found.stage.number}: ${found.process.summary} How: ${found.process.howTo.join(" | ")}`,
        );
      }
    } else if (h.kind === "guidance") {
      const g = guidance.find((x) => x.id === h.id);
      if (g) bits.push(`Guidance "${g.title}": ${g.steps.map((s) => s.title + " — " + s.detail).join(" | ")}`);
    } else if (h.kind === "capa") {
      const c = capaRecords.find((x) => x.id === h.id);
      if (c) bits.push(`Record ${c.id}: ${c.title}. ${c.description}`);
    }
  }

  if (extra.includes("escape") || extra.includes("48") || extra.includes("notify")) {
    bits.push(
      "Quality escape rule (QM-001 §11.4): notify affected customers within 48–72 hours of discovery; FAA where applicable. Procedure P-870 / SOP-870-003 / F-870-003.",
    );
  }
  if (extra.includes("policy")) {
    bits.push(
      "Quality Policy: Skyryse and its employees are committed to meeting customer and legal requirements in order to achieve customer satisfaction. We will strive to provide quality products on time and continually improve our Quality Management System.",
    );
  }

  return bits.join("\n\n").slice(0, 6000);
}
