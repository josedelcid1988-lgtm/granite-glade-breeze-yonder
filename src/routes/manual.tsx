import { createFileRoute, Link } from "@tanstack/react-router";
import { manualSections } from "@/data/manual";
import { qualityPolicy, mission } from "@/data/ops";

export const Route = createFileRoute("/manual")({ component: ManualPage });

function ManualPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-mark text-primary">Level I · QM-001 Rev G · 03 Sep 2026</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Quality Manual</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Originator Jose Del Cid. Full revision against AS9100D and 14 CFR Part 21 Subpart K. This reading copy is for navigation — SolidWorks PDM holds the released original.
        </p>
        <blockquote className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed">{qualityPolicy}</blockquote>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mission}</p>
      </header>
      <nav className="flex flex-wrap gap-2">
        {manualSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            {s.number} {s.title}
          </a>
        ))}
      </nav>
      {manualSections.map((s) => (
        <section id={s.id} key={s.id} className="max-w-3xl scroll-mt-20">
          <h2 className="font-display text-xl font-semibold">
            {s.number}. {s.title}
          </h2>
          {s.paragraphs.map((p) => (
            <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="text-sm">
        <Link to="/" className="text-primary hover:underline">
          Open Figure 2 — the nine-stage map
        </Link>
        {" · "}
        <Link to="/compliance" className="text-primary hover:underline">
          Appendix A compliance matrix
        </Link>
      </p>
    </div>
  );
}
