import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { stages, supportProcesses } from "@/data/stages";
import type { ProcessBox, Stage } from "@/data/types";
import { HealthDot, stageHealth } from "@/components/status-badge";
import { ProcessPanel } from "@/components/process-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function ProcessMap() {
  const [selected, setSelected] = useState<{ stage: Stage; process: ProcessBox } | null>(null);

  return (
    <>
      <Tabs defaultValue="lifecycle">
        <TabsList>
          <TabsTrigger value="lifecycle">Nine stages</TabsTrigger>
          <TabsTrigger value="map">Process map</TabsTrigger>
        </TabsList>
        <TabsContent value="lifecycle">
          <LifecycleGrid
            onProcess={(stage, process) => setSelected({ stage, process })}
          />
        </TabsContent>
        <TabsContent value="map">
          <DetailedMap onProcess={(stage, process) => setSelected({ stage, process })} />
        </TabsContent>
      </Tabs>
      <ProcessPanel
        open={Boolean(selected)}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
        stage={selected?.stage ?? null}
        process={selected?.process ?? null}
      />
    </>
  );
}

function LifecycleGrid({
  onProcess,
}: {
  onProcess: (stage: Stage, process: ProcessBox) => void;
}) {
  return (
    <div className="mt-4">
      <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
        Figure 2 of QM-001 Rev G. Click a process inside a stage for the procedure, SOP, form and a Jira ticket. Feedback from flight test and in-service returns to Product Development.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {stages.map((stage, i) => {
          const health = stageHealth(stage.metrics.map((m) => m.status));
          return (
            <article
              key={stage.id}
              className="stagger-in rounded-xl border border-border bg-card p-4 shadow-border"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-2xs uppercase tracking-mark text-primary">
                    Stage {stage.number}
                  </p>
                  <h2 className="font-display text-lg font-semibold leading-tight">{stage.name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{stage.owner}</p>
                </div>
                <HealthDot status={health} />
              </div>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{stage.intent}</p>
              <ul className="space-y-1">
                {stage.processes.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onProcess(stage, p)}
                      className="flex w-full items-center rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent"
                    >
                      <span className="truncate">{p.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                to="/stages/$stageId"
                params={{ stageId: stage.id }}
                className="mt-3 inline-flex text-xs font-medium text-primary hover:underline"
              >
                Open workspace
              </Link>
            </article>
          );
        })}
      </div>
      <SupportRail />
    </div>
  );
}

function DetailedMap({
  onProcess,
}: {
  onProcess: (stage: Stage, process: ProcessBox) => void;
}) {
  return (
    <div className="mt-4">
      <p className="mb-3 max-w-2xl text-sm text-muted-foreground">
        Swimlane map. Scroll sideways. Process owners sit on top; click any box for the procedure, SOP, form and Jira action.
      </p>
      <div className="horizon-grid -mx-4 overflow-x-auto px-4 pb-4 md:-mx-0 md:px-0">
        <div className="flex min-w-max gap-3">
          {stages.map((stage) => {
            const health = stageHealth(stage.metrics.map((m) => m.status));
            return (
              <div key={stage.id} className="flex w-52 shrink-0 flex-col gap-2">
                <div className="rounded-lg bg-secondary px-3 py-2">
                  <p className="text-2xs uppercase tracking-wider text-muted-foreground">{stage.owner}</p>
                  <Link
                    to="/stages/$stageId"
                    params={{ stageId: stage.id }}
                    className="flex items-center gap-2 font-display text-sm font-semibold"
                  >
                    <HealthDot status={health} />
                    <span>
                      {stage.number}. {stage.shortName}
                    </span>
                  </Link>
                </div>
                {stage.processes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onProcess(stage, p)}
                    className={cn(
                      "rounded-lg border border-border bg-card px-3 py-2.5 text-left text-sm leading-snug shadow-border",
                      "hover:border-primary/50 hover:shadow-border-hover",
                    )}
                  >
                    <span className="block font-medium">{p.name}</span>
                    <span className="mt-1 block font-mono text-2xs uppercase tracking-wider text-primary">
                      {p.procedureIds.join(" · ")}
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <SupportRail />
    </div>
  );
}

function SupportRail() {
  return (
    <div className="mt-8">
      <p className="mb-2 font-mono text-2xs uppercase tracking-mark text-muted-foreground">
        Support processes — act across every stage
      </p>
      <div className="flex flex-wrap gap-2">
        {supportProcesses.map((s) => (
          <Link
            key={s.id}
            to="/documents/$docId"
            params={{ docId: s.procedureIds[0] ?? "p-750" }}
            className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm hover:border-primary/40"
          >
            <span className="block">{s.name}</span>
            <span className="font-mono text-2xs uppercase tracking-wider text-primary">
              {s.procedureIds.join(" · ")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
