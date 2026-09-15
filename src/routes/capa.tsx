import { createFileRoute, Link } from "@tanstack/react-router";
import { capaRecords } from "@/data/ops";
import { getStage } from "@/data/stages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBms } from "@/lib/store";

export const Route = createFileRoute("/capa")({ component: CapaPage });

const statusVariant: Record<string, "success" | "warning" | "danger" | "muted" | "default"> = {
  open: "warning",
  mrb: "danger",
  "in-progress": "default",
  verification: "success",
  closed: "muted",
};

function CapaPage() {
  const { openJira, drafts } = useBms();

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-mark text-primary">P-870 · P-1000 · Jira QMS</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">NCR, MRB and CAPA</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Jira is the system of record. Identify, segregate, disposition. Scrap is rendered unusable. Escapes notify customers in 48–72 hours.
          </p>
        </div>
        <Button
          onClick={() =>
            openJira({
              issueType: "Internal Discrepancy",
              summary: "",
              description:
                "What is nonconforming:\nAgainst which released drawing / MWI:\nSerial / lot / WO:\nWhere found:\nContainment:\nProduct safety effect: Yes / No\n",
              source: "NCR / CAPA board",
            })
          }
        >
          Raise NCR
        </Button>
      </header>

      <ul className="space-y-3">
        {capaRecords.map((c) => {
          const stage = getStage(c.stageId);
          return (
            <li id={c.id} key={c.id} className="rounded-xl border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-primary">{c.jiraKey}</span>
                <Badge variant="outline">{c.type}</Badge>
                <Badge variant={statusVariant[c.status] ?? "muted"}>{c.status}</Badge>
                <Badge variant={c.severity === "major" || c.severity === "critical" ? "danger" : "muted"}>
                  {c.severity}
                </Badge>
              </div>
              <h2 className="mt-2 font-display text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              {c.disposition ? <p className="mt-2 text-sm">{c.disposition}</p> : null}
              <p className="mt-3 text-xs text-muted-foreground">
                {stage ? `Stage ${stage.number} ${stage.name}` : c.stageId} · {c.owner} · Opened {c.opened} · Due {c.due} · {c.source}
              </p>
              <div className="mt-3 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    openJira({
                      issueType: c.type === "CA" || c.type === "Escape" ? "Corrective Action" : c.type === "DCR" ? "Document Change" : "Internal Discrepancy",
                      summary: `${c.jiraKey} follow-up — ${c.title}`,
                      description: `Existing record ${c.jiraKey}\n${c.description}\n\nUpdate:\n`,
                      source: c.jiraKey,
                    })
                  }
                >
                  Follow-up ticket
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <Link to="/documents/$docId" params={{ docId: c.procedureId }}>
                    Open procedure
                  </Link>
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      {drafts.length ? (
        <section>
          <h2 className="mb-3 font-display text-lg font-semibold">Local drafts from this BMS</h2>
          <ul className="space-y-2">
            {drafts.map((d) => (
              <li key={d.id} className="rounded-lg border border-border bg-secondary px-3 py-3 text-sm">
                <span className="font-mono text-xs text-primary">{d.issueType}</span>
                <p className="mt-1">{d.summary}</p>
                <p className="text-xs text-muted-foreground">{d.source}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
