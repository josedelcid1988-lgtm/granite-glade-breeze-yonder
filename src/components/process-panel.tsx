import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getDocument } from "@/data/documents";
import type { ProcessBox, Stage } from "@/data/types";
import { useBms } from "@/lib/store";

export function ProcessPanel({
  open,
  onOpenChange,
  stage,
  process,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  stage: Stage | null;
  process: ProcessBox | null;
}) {
  const openJira = useBms((s) => s.openJira);
  if (!stage || !process) return null;

  const procedures = process.procedureIds.map(getDocument).filter(Boolean);
  const sops = process.sopIds.map(getDocument).filter(Boolean);
  const forms = process.formIds.map(getDocument).filter(Boolean);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full max-w-xl overflow-y-auto">
        <SheetHeader>
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            Stage {stage.number} · {stage.shortName}
          </p>
          <SheetTitle>{process.name}</SheetTitle>
          <SheetDescription>{process.summary}</SheetDescription>
        </SheetHeader>
        <div className="space-y-6 px-6 py-5">
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">How to do this</h3>
            <ol className="space-y-2">
              {process.howTo.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-2xs text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <Separator />

          <DocGroup title="Procedures" docs={procedures} />
          <DocGroup title="SOPs" docs={sops} />
          <DocGroup title="Forms" docs={forms} />

          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              {process.tools.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              onClick={() =>
                openJira({
                  issueType: process.jiraType,
                  summary: `${process.name} — `,
                  description: `Process: ${process.name}\nStage: ${stage.number} ${stage.name}\nOwner: ${stage.owner}\nProcedures: ${process.procedureIds.join(", ")}\n\nWhat happened:\n\nRequirement / document:\n\nSerial / lot / WO:\n\nContainment:`,
                  source: `${stage.name} · ${process.name}`,
                })
              }
            >
              <Ticket className="size-4" />
              Create {process.jiraType}
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/stages/$stageId" params={{ stageId: stage.id }}>
                Open stage workspace
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DocGroup({
  title,
  docs,
}: {
  title: string;
  docs: ReturnType<typeof getDocument>[];
}) {
  if (!docs.length) return null;
  return (
    <div>
      <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</h3>
      <ul className="space-y-1.5">
        {docs.map((d) =>
          d ? (
            <li key={d.id}>
              <Link
                to="/documents/$docId"
                params={{ docId: d.id }}
                className="flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm hover:border-primary/40"
              >
                <FileText className="size-3.5 text-primary" />
                <span className="font-mono text-xs text-primary">{d.number}</span>
                <span className="truncate">{d.title}</span>
                <span className="ml-auto font-mono text-2xs text-muted-foreground">Rev {d.rev}</span>
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}
