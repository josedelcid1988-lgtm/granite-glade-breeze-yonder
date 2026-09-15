import { Line, LineChart, ResponsiveContainer } from "recharts";
import type { Metric } from "@/data/types";
import { StatusBadge } from "@/components/status-badge";

export function MetricCard({ metric, owner }: { metric: Metric; owner?: string }) {
  const data = metric.series.map((p) => ({ ...p, value: p.value ?? undefined }));
  const hasLine = metric.series.some((p) => p.value !== null);

  return (
    <article className="rounded-xl border border-border bg-card p-4 shadow-border">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium leading-snug">{metric.name}</h3>
          {owner ? <p className="mt-1 text-xs text-muted-foreground">{owner}</p> : null}
        </div>
        <StatusBadge status={metric.status} />
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-3xl font-semibold tabular-nums tracking-tight">
            {metric.current === null ? "—" : `${metric.current}${metric.unit === "%" ? "%" : ""}`}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Target {metric.target}</p>
        </div>
        {hasLine ? (
          <div className="h-12 w-28">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-primary)"
                  strokeWidth={1.5}
                  dot={false}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">Not yet active</p>
        )}
      </div>
      {metric.note ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{metric.note}</p> : null}
      <p className="mt-2 font-mono text-2xs uppercase tracking-wider text-muted-foreground">
        {metric.frequency} · {metric.source}
      </p>
    </article>
  );
}
