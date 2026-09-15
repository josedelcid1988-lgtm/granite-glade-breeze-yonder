import { Badge } from "@/components/ui/badge";
import type { MetricStatus } from "@/data/types";

const map: Record<MetricStatus, { label: string; variant: "success" | "warning" | "danger" | "muted" | "default" }> = {
  "on-target": { label: "On target", variant: "success" },
  "at-risk": { label: "At risk", variant: "warning" },
  miss: { label: "Miss", variant: "danger" },
  dormant: { label: "Dormant", variant: "muted" },
  baseline: { label: "Baseline", variant: "default" },
};

export function StatusBadge({ status }: { status: MetricStatus }) {
  const m = map[status];
  return <Badge variant={m.variant}>{m.label}</Badge>;
}

export function HealthDot({ status }: { status: MetricStatus }) {
  const color =
    status === "on-target"
      ? "bg-success"
      : status === "at-risk"
        ? "bg-warning"
        : status === "miss"
          ? "bg-danger"
          : "bg-muted-foreground/50";
  return <span className={`inline-block size-1.5 rounded-full ${color}`} />;
}

export function stageHealth(statuses: MetricStatus[]): MetricStatus {
  if (statuses.includes("miss")) return "miss";
  if (statuses.includes("at-risk")) return "at-risk";
  if (statuses.every((s) => s === "dormant" || s === "baseline")) {
    return statuses.includes("baseline") ? "baseline" : "dormant";
  }
  return "on-target";
}
