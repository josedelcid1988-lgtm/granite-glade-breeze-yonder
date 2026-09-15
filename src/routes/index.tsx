import { createFileRoute, Link } from "@tanstack/react-router";
import { ProcessMap } from "@/components/process-map";
import { Welcome } from "@/components/welcome";
import { qualityPolicy } from "@/data/ops";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <Welcome />
      <header className="mb-6 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-mark text-primary">QM-001 Rev G · Figure 2</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Primary business processes
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Nine stages. One owner each. Click a box for the procedure, SOP, form, and a Jira ticket pre-filled from this process.
        </p>
        <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">
          {qualityPolicy}
        </blockquote>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link to="/dashboard" className="text-primary hover:underline">
            Stage metrics
          </Link>
          <Link to="/guidance" className="text-primary hover:underline">
            How to use this BMS
          </Link>
          <Link to="/manual" className="text-primary hover:underline">
            Quality manual
          </Link>
        </div>
      </header>
      <ProcessMap />
    </div>
  );
}
