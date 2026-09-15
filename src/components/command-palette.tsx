import { useEffect, useMemo, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Command } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchQms, type SearchHit } from "@/data/search";
import { useBms } from "@/lib/store";

const kindLabel: Record<SearchHit["kind"], string> = {
  stage: "Stage",
  process: "Process",
  document: "Document",
  guidance: "Guide",
  capa: "CAPA",
  audit: "Audit",
  integration: "System",
  support: "Support",
};

export function CommandPalette() {
  const { commandOpen, setCommandOpen, setChatOpen, openJira } = useBms();
  const [q, setQ] = useState("");
  const router = useRouter();
  const hits = useMemo(() => searchQms(q), [q]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen(!commandOpen);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        openJira({
          summary: "",
          description: "",
          issueType: "Internal Discrepancy",
          source: "Command palette",
        });
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        setChatOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [commandOpen, setCommandOpen, setChatOpen, openJira]);

  function go(href: string) {
    setCommandOpen(false);
    setQ("");
    router.history.push(href);
  }

  return (
    <Dialog open={commandOpen} onOpenChange={setCommandOpen}>
      <DialogContent className="max-w-lg p-0">
        <DialogTitle className="sr-only">Search the QMS</DialogTitle>
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Command className="size-4 text-muted-foreground" />
          <Input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search stages, procedures, SOPs, forms, CAPA…"
            className="h-12 border-0 bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {q.length < 2 ? (
            <p className="px-3 py-6 text-sm text-muted-foreground">
              Type at least two characters. Shortcuts: search, Jira ticket, assistant.
            </p>
          ) : hits.length === 0 ? (
            <p className="px-3 py-6 text-sm text-muted-foreground">No matches in the QMS.</p>
          ) : (
            hits.map((h) => (
              <button
                key={`${h.kind}-${h.id}`}
                onClick={() => go(h.href)}
                className="flex w-full items-start gap-3 rounded-md px-3 py-2 text-left hover:bg-accent"
              >
                <span className="mt-0.5 w-16 shrink-0 font-mono text-2xs uppercase tracking-mark text-primary">
                  {kindLabel[h.kind]}
                </span>
                <span>
                  <span className="block text-sm text-foreground">{h.title}</span>
                  <span className="block text-xs text-muted-foreground">{h.subtitle}</span>
                </span>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
