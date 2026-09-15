import { createFileRoute, Link } from "@tanstack/react-router";
import { guidance } from "@/data/ops";
import { getDocument } from "@/data/documents";
import { Badge } from "@/components/ui/badge";
import { useBms } from "@/lib/store";

export const Route = createFileRoute("/guidance")({ component: GuidancePage });

function GuidancePage() {
  const setChatOpen = useBms((s) => s.setChatOpen);

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">Playbooks</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">How to use this QMS</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Short, real sequences. If you are in a hurry, start with a quality escape or an NCR. The assistant can walk you through the same steps.
        </p>
        <button type="button" onClick={() => setChatOpen(true)} className="mt-3 text-sm text-primary hover:underline">
          Ask the quality assistant
        </button>
      </header>
      <div className="space-y-4">
        {guidance.map((g) => (
          <article id={g.id} key={g.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-lg font-semibold">{g.title}</h2>
              {g.urgency === "critical" ? <Badge variant="danger">Time critical</Badge> : null}
              <Badge variant="muted">{g.minutes} min</Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{g.audience}</p>
            <ol className="mt-4 space-y-3">
              {g.steps.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                    {step.link ? (
                      <Link to={step.link as "/capa"} className="mt-1 inline-block text-xs text-primary hover:underline">
                        Open in the BMS
                      </Link>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.relatedIds.map((id) => {
                const d = getDocument(id);
                return d ? (
                  <Link
                    key={id}
                    to="/documents/$docId"
                    params={{ docId: id }}
                    className="font-mono text-xs text-primary hover:underline"
                  >
                    {d.number}
                  </Link>
                ) : null;
              })}
            </div>
          </article>
        ))}
      </div>
      <section className="rounded-xl border border-border bg-secondary p-5 text-sm">
        <h2 className="font-display text-lg font-semibold">Shortcuts</h2>
        <ul className="mt-2 space-y-1 text-muted-foreground">
          <li>
            <kbd className="font-mono text-xs text-foreground">⌘K</kbd> search the QMS
          </li>
          <li>
            <kbd className="font-mono text-xs text-foreground">⌘J</kbd> create a Jira ticket
          </li>
          <li>
            <kbd className="font-mono text-xs text-foreground">⌘/</kbd> quality assistant
          </li>
        </ul>
      </section>
    </div>
  );
}
