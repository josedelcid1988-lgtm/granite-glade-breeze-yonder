import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBms } from "@/lib/store";
import { formatTicketBody, jiraCreateUrl } from "@/lib/jira";
import type { JiraIssueType } from "@/data/types";

const types: JiraIssueType[] = [
  "Internal Discrepancy",
  "Corrective Action",
  "Document Change",
  "Supplier Ticket",
  "Work Order",
  "Data Requirement",
  "Audit Finding",
];

export function JiraDialog() {
  const { jiraModal, closeJira, jiraBaseUrl, addDraft, openJira } = useBms();

  function update<K extends keyof typeof jiraModal>(key: K, value: (typeof jiraModal)[K]) {
    openJira({ ...jiraModal, [key]: value, open: true });
  }

  const body = formatTicketBody(jiraModal);

  async function copyAndOpen() {
    addDraft({
      issueType: jiraModal.issueType,
      summary: jiraModal.summary,
      description: jiraModal.description,
      source: jiraModal.source,
    });
    try {
      await navigator.clipboard.writeText(body);
      toast.success("Ticket copied. Opening Jira to paste.");
    } catch {
      toast.message("Draft saved in the BMS. Paste from the ticket body.");
    }
    window.open(jiraCreateUrl(jiraBaseUrl, jiraModal.summary), "_blank", "noopener,noreferrer");
    closeJira();
  }

  return (
    <Dialog open={jiraModal.open} onOpenChange={(o) => (o ? null : closeJira())}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Create Jira ticket</DialogTitle>
          <DialogDescription>
            Pre-filled from this process. The description is copied, then Jira opens so you can paste.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label>Issue type</Label>
            <Select
              value={jiraModal.issueType}
              onValueChange={(v) => update("issueType", v as JiraIssueType)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {types.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Summary</Label>
            <Input
              value={jiraModal.summary}
              onChange={(e) => update("summary", e.target.value)}
              placeholder="Short, specific, serial if you have one"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              value={jiraModal.description}
              onChange={(e) => update("description", e.target.value)}
              rows={7}
            />
          </div>
          <p className="font-mono text-xs text-muted-foreground">{jiraModal.source}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button onClick={copyAndOpen} disabled={!jiraModal.summary.trim()}>
              Copy and open Jira
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                addDraft({
                  issueType: jiraModal.issueType,
                  summary: jiraModal.summary,
                  description: jiraModal.description,
                  source: jiraModal.source,
                });
                toast.success("Saved as a local draft.");
                closeJira();
              }}
              disabled={!jiraModal.summary.trim()}
            >
              Save draft only
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
