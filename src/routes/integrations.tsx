import { createFileRoute } from "@tanstack/react-router";
import { integrations } from "@/data/ops";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBms } from "@/lib/store";
import { jiraBoardUrl } from "@/lib/jira";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/integrations")({ component: IntegrationsPage });

function IntegrationsPage() {
  const store = useBms();
  const urlFor: Record<string, { value: string; set: (v: string) => void }> = {
    jira: { value: store.jiraBaseUrl, set: store.setJiraBaseUrl },
    pdm: { value: store.pdmUrl, set: store.setPdmUrl },
    netsuite: { value: store.netsuiteUrl, set: store.setNetsuiteUrl },
    polarion: { value: store.polarionUrl, set: store.setPolarionUrl },
    git: { value: store.gitUrl, set: store.setGitUrl },
    ukg: { value: store.ukgUrl, set: store.setUkgUrl },
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">QM-001 Table 4</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Systems of record</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          The deployed version of each tool is recorded under P-750 and verified at management review. Set your site URL once — Create ticket and Open PDM use it.
        </p>
      </header>
      <div className="space-y-4">
        {integrations.map((item) => {
          const url = urlFor[item.id];
          return (
            <article id={item.id} key={item.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-semibold">{item.name}</h2>
                  <p className="text-xs text-muted-foreground">{item.system}</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={url?.value ?? item.defaultUrl} target="_blank" rel="noreferrer">
                    Open
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.purpose}</p>
              <ol className="mt-3 space-y-1.5 text-sm">
                {item.howTo.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-mono text-xs text-primary">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.records.map((r) => (
                  <span key={r} className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {r}
                  </span>
                ))}
              </div>
              {url ? (
                <div className="mt-4 max-w-xl space-y-1.5">
                  <Label htmlFor={`url-${item.id}`}>Base URL</Label>
                  <Input
                    id={`url-${item.id}`}
                    value={url.value}
                    onChange={(e) => url.set(e.target.value)}
                  />
                </div>
              ) : null}
              {item.jiraBoards && url ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.jiraBoards.map((b) => (
                    <Button key={b.path} size="sm" variant="secondary" asChild>
                      <a href={jiraBoardUrl(url.value, b.path)} target="_blank" rel="noreferrer">
                        {b.name}
                      </a>
                    </Button>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
