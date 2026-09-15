import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { allDocuments } from "@/data/documents";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/documents")({ component: DocumentsPage });

const types = ["all", "manual", "procedure", "sop", "form"] as const;

function DocumentsPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof types)[number]>("all");

  const rows = useMemo(() => {
    return allDocuments.filter((d) => {
      if (type !== "all" && d.type !== type) return false;
      if (!q.trim()) return true;
      const hay = `${d.number} ${d.title} ${d.purpose} ${d.owner}`.toLowerCase();
      return hay.includes(q.toLowerCase());
    });
  }, [q, type]);

  return (
    <div className="space-y-6">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">P-750 · Levels I–IV</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Document control</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          PDM is the system of record. This index is the map — open a document for how-to, related SOPs and forms, and a Jira change ticket.
        </p>
      </header>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by number, title, owner…"
          className="sm:max-w-sm"
        />
        <Tabs value={type} onValueChange={(v) => setType(v as (typeof types)[number])}>
          <TabsList>
            {types.map((t) => (
              <TabsTrigger key={t} value={t} className="capitalize">
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <ul className="divide-y divide-border rounded-xl border border-border bg-card">
        {rows.map((d) => (
          <li key={d.id}>
            <Link
              to="/documents/$docId"
              params={{ docId: d.id }}
              className="flex flex-col gap-1 px-4 py-3 hover:bg-accent/40 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="w-28 shrink-0 font-mono text-xs text-primary">{d.number}</span>
              <span className="flex-1 text-sm">{d.title}</span>
              <span className="text-xs capitalize text-muted-foreground">{d.type}</span>
              <span className="font-mono text-xs text-muted-foreground">Rev {d.rev}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">{rows.length} documents</p>
    </div>
  );
}
