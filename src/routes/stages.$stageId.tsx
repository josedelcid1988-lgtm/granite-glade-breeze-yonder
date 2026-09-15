import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getStage } from "@/data/stages";
import { documentsForStage, getDocument } from "@/data/documents";
import { MetricCard } from "@/components/metric-card";
import { ProcessPanel } from "@/components/process-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProcessBox } from "@/data/types";
import { useBms } from "@/lib/store";

export const Route = createFileRoute("/stages/$stageId")({ component: StagePage });

function StagePage() {
  const { stageId } = Route.useParams();
  const stage = getStage(stageId);
  const openJira = useBms((s) => s.openJira);
  const [process, setProcess] = useState<ProcessBox | null>(null);

  if (!stage) {
    return (
      <p className="text-sm text-muted-foreground">
        Unknown stage. <Link to="/">Return to the map</Link>.
      </p>
    );
  }

  const docs = documentsForStage(stage.id);

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">
          Stage {stage.number} · {stage.owner}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">{stage.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{stage.intent}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stage.tools.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        <Block title="Inputs" items={stage.inputs} />
        <Block title="Process" items={stage.process} />
        <Block title="Outputs" items={stage.outputs} />
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">Click a process</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {stage.processes.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setProcess(p)}
              className="rounded-xl border border-border bg-card p-4 text-left hover:border-primary/40"
            >
              <p className="font-medium">{p.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-2 font-mono text-2xs uppercase tracking-wider text-primary">
                {p.procedureIds.join(" · ")}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">Metrics</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {stage.metrics.map((m) => (
            <MetricCard key={m.id} metric={m} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">Requirements</h2>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">AS9100D</p>
          <p className="mb-3 text-sm">{stage.as9100.join(" · ")}</p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">14 CFR</p>
          <p className="text-sm">{stage.cfr.join(" · ")}</p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">Records & competence</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{stage.records}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.competence}</p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">Documents on this stage</h2>
        <ul className="divide-y divide-border rounded-xl border border-border">
          {docs.map((d) => (
            <li key={d.id}>
              <Link
                to="/documents/$docId"
                params={{ docId: d.id }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-accent/40"
              >
                <span className="w-24 shrink-0 font-mono text-xs text-primary">{d.number}</span>
                <span className="text-sm">{d.title}</span>
                <span className="ml-auto text-xs capitalize text-muted-foreground">{d.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-2">
        {stage.procedureIds.map((id) => {
          const d = getDocument(id);
          return d ? (
            <Button
              key={id}
              variant="outline"
              onClick={() =>
                openJira({
                  issueType: d.jiraType ?? "Work Order",
                  summary: `${d.number} — `,
                  description: `Procedure ${d.number} ${d.title}\nStage ${stage.number} ${stage.name}\nOwner ${stage.owner}\n\nWhat happened:\n`,
                  source: `Stage ${stage.number} · ${d.number}`,
                })
              }
            >
              Ticket from {d.number}
            </Button>
          ) : null;
        })}
      </div>

      <ProcessPanel
        open={Boolean(process)}
        onOpenChange={(o) => {
          if (!o) setProcess(null);
        }}
        stage={stage}
        process={process}
      />
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h2 className="mb-2 font-mono text-2xs uppercase tracking-wider text-primary">{title}</h2>
      <ul className="space-y-1.5 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
