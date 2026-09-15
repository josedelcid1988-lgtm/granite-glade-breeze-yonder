import { createFileRoute, Link } from "@tanstack/react-router";
import { MetricCard } from "@/components/metric-card";
import { Badge } from "@/components/ui/badge";
import { stages } from "@/data/stages";
import { allMetrics, capaRecords, audits, qmsMetrics } from "@/data/ops";
import { stageHealth } from "@/components/status-badge";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const metrics = allMetrics();
  const onTarget = metrics.filter((m) => m.status === "on-target").length;
  const atRisk = metrics.filter((m) => m.status === "at-risk").length;
  const dormant = metrics.filter((m) => m.status === "dormant" || m.status === "baseline").length;
  const openCapa = capaRecords.filter((c) => c.status !== "closed").length;
  const upcoming = audits.filter((a) => a.status !== "closed");

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">Management review pack</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Quality dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Stage metrics from QM-001 §7 and QMS metrics from §13.1. A miss for three consecutive months raises P-1000. Dormant is not a miss.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="On target" value={String(onTarget)} hint={`${metrics.length} objectives`} />
        <Kpi label="At risk" value={String(atRisk)} hint="Need action" />
        <Kpi label="Dormant / baseline" value={String(dormant)} hint="First flight or first delivery" />
        <Kpi label="Open NCR / CAPA" value={String(openCapa)} hint="Jira QMS board" />
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">Stage health</h2>
        <div className="grid gap-2 sm:grid-cols-3">
          {stages.map((s) => {
            const health = stageHealth(s.metrics.map((m) => m.status));
            return (
              <Link
                key={s.id}
                to="/stages/$stageId"
                params={{ stageId: s.id }}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40"
              >
                <span>
                  <span className="block font-mono text-2xs uppercase tracking-wider text-primary">
                    Stage {s.number}
                  </span>
                  <span className="text-sm">{s.shortName}</span>
                </span>
                <Badge
                  variant={
                    health === "on-target"
                      ? "success"
                      : health === "at-risk"
                        ? "warning"
                        : health === "miss"
                          ? "danger"
                          : "muted"
                  }
                >
                  {health}
                </Badge>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">QMS metrics</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {qmsMetrics.map((m) => (
            <MetricCard key={m.id} metric={m} owner="Quality Manager" />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-lg font-semibold">Stage metrics</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {stages.flatMap((s) =>
            s.metrics.map((m) => <MetricCard key={m.id} metric={m} owner={`Stage ${s.number} · ${s.owner}`} />),
          )}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">Open records</h2>
          <ul className="space-y-2">
            {capaRecords
              .filter((c) => c.status !== "closed")
              .map((c) => (
                <li key={c.id}>
                  <Link
                    to="/capa"
                    className="block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40"
                  >
                    <span className="font-mono text-xs text-primary">{c.jiraKey}</span>
                    <span className="mt-1 block text-sm">{c.title}</span>
                    <span className="text-xs text-muted-foreground">Due {c.due}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold">Audit calendar</h2>
          <ul className="space-y-2">
            {upcoming.map((a) => (
              <li key={a.id}>
                <Link
                  to="/audits"
                  className="block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40"
                >
                  <span className="text-sm">{a.title}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {a.date} · {a.lead}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-3xl font-semibold tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
