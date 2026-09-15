import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { childrenOf, getDocument } from "@/data/documents";
import { getStage } from "@/data/stages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBms } from "@/lib/store";
import { ExternalLink, Star } from "lucide-react";

export const Route = createFileRoute("/documents/$docId")({ component: DocumentPage });

function DocumentPage() {
  const { docId } = Route.useParams();
  const doc = getDocument(docId);
  const openJira = useBms((s) => s.openJira);
  const pdmUrl = useBms((s) => s.pdmUrl);
  const toggleFavorite = useBms((s) => s.toggleFavorite);
  const favorites = useBms((s) => s.favorites);
  const pushRecent = useBms((s) => s.pushRecent);

  useEffect(() => {
    if (doc) pushRecent(doc.id);
  }, [doc, pushRecent]);

  if (!doc) {
    return (
      <p className="text-sm text-muted-foreground">
        Unknown document. <Link to="/documents">Back to the index</Link>.
      </p>
    );
  }

  const kids = childrenOf(doc.id);
  const parent = doc.parentId ? getDocument(doc.parentId) : undefined;
  const related = doc.relatedIds.map(getDocument).filter(Boolean);
  const fav = favorites.includes(doc.id);

  return (
    <article className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">
          {doc.type} · Rev {doc.rev} · {doc.date}
        </p>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {doc.number} {doc.title}
          </h1>
          <Button variant="ghost" size="icon" onClick={() => toggleFavorite(doc.id)} aria-label="Favorite">
            <Star className={fav ? "fill-primary text-primary" : ""} />
          </Button>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{doc.purpose}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="text-foreground">Owner:</span> {doc.owner}
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{doc.pdmPath}</p>
      </header>

      <section className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-mono text-2xs uppercase tracking-wider text-primary">Scope</h2>
        <p className="mt-2 text-sm leading-relaxed">{doc.scope}</p>
      </section>

      {doc.sections.map((sec) => (
        <section key={sec.heading}>
          <h2 className="font-display text-lg font-semibold">{sec.heading}</h2>
          {sec.paragraphs.map((p) => (
            <p key={p} className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {sec.steps ? (
            <ol className="mt-3 max-w-3xl space-y-2">
              {sec.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-2xs text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}

      {kids.length ? (
        <section>
          <h2 className="mb-3 font-display text-lg font-semibold">SOPs and forms under this document</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {kids.map((k) => (
              <li key={k.id}>
                <Link
                  to="/documents/$docId"
                  params={{ docId: k.id }}
                  className="block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40"
                >
                  <span className="font-mono text-xs text-primary">{k.number}</span>
                  <span className="mt-1 block text-sm">{k.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="flex flex-wrap gap-2">
        {parent ? (
          <Button variant="secondary" asChild>
            <Link to="/documents/$docId" params={{ docId: parent.id }}>
              Parent {parent.number}
            </Link>
          </Button>
        ) : null}
        {related.map((r) =>
          r ? (
            <Button key={r.id} variant="outline" asChild>
              <Link to="/documents/$docId" params={{ docId: r.id }}>
                {r.number}
              </Link>
            </Button>
          ) : null,
        )}
      </section>

      <section>
        <h2 className="mb-2 font-display text-lg font-semibold">Stages</h2>
        <div className="flex flex-wrap gap-2">
          {doc.stageIds.map((id) => {
            const s = getStage(id);
            return s ? (
              <Link key={id} to="/stages/$stageId" params={{ stageId: id }}>
                <Badge variant="outline">
                  {s.number}. {s.shortName}
                </Badge>
              </Link>
            ) : null;
          })}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {doc.as9100.map((c) => (
            <Badge key={c} variant="muted">
              AS9100D {c}
            </Badge>
          ))}
          {doc.cfr.map((c) => (
            <Badge key={c} variant="muted">
              14 CFR {c}
            </Badge>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            openJira({
              issueType: doc.jiraType ?? "Document Change",
              summary: `${doc.number} — `,
              description: `Document: ${doc.number} ${doc.title} Rev ${doc.rev}\nPDM: ${doc.pdmPath}\nOwner: ${doc.owner}\n\nChange / issue:\n`,
              source: `${doc.number} ${doc.title}`,
            })
          }
        >
          Create {doc.jiraType ?? "Document Change"}
        </Button>
        <Button variant="outline" asChild>
          <a href={pdmUrl} target="_blank" rel="noreferrer">
            Open PDM
            <ExternalLink className="size-3.5" />
          </a>
        </Button>
      </div>
    </article>
  );
}
