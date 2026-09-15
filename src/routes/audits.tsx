import { createFileRoute, Link } from "@tanstack/react-router";
import { audits } from "@/data/ops";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBms } from "@/lib/store";

export const Route = createFileRoute("/audits")({ component: AuditsPage });

function AuditsPage() {
  const openJira = useBms((s) => s.openJira);

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">P-920 · 21.137(l)</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Audit program</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Covers every AS9100D clause and every 14 CFR 21.137 element across the cycle. Audits measure the QMS; stage metrics measure process performance.
        </p>
      </header>
      <ul className="space-y-3">
        {audits.map((a) => (
          <li id={a.id} key={a.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={a.status === "closed" ? "muted" : a.status === "in-progress" ? "warning" : "default"}>
                {a.status}
              </Badge>
              <Badge variant="outline">{a.type}</Badge>
            </div>
            <h2 className="mt-2 font-display text-lg font-semibold">{a.title}</h2>
            <p className="mt-1 font-mono text-xs text-primary">{a.clause}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a.notes}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {a.date} · {a.area} · {a.lead}
              {a.findings ? ` · ${a.findings} findings (${a.majors} major / ${a.minors} minor)` : ""}
            </p>
            <div className="mt-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  openJira({
                    issueType: "Audit Finding",
                    summary: `${a.title} — finding `,
                    description: `Audit: ${a.title}\nClause: ${a.clause}\nArea: ${a.area}\nDate: ${a.date}\n\nFinding:\nRequirement:\nEvidence:\n`,
                    source: a.title,
                  })
                }
              >
                Raise finding
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">
        Walk an auditor through a stage using the{" "}
        <Link to="/guidance" className="text-primary hover:underline">
          guidance playbook
        </Link>
        .
      </p>
    </div>
  );
}
