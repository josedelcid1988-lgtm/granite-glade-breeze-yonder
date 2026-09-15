import type { JiraIssueType } from "@/data/types";

export function jiraCreateUrl(baseUrl: string, summary: string) {
  const base = baseUrl.replace(/\/$/, "");
  const params = new URLSearchParams();
  params.set("summary", summary);
  return `${base}/secure/CreateIssue!default.jspa?${params.toString()}`;
}

export function jiraBoardUrl(baseUrl: string, path: string) {
  const base = baseUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatTicketBody(opts: {
  issueType: JiraIssueType;
  summary: string;
  description: string;
  source: string;
}) {
  return [
    `*Type:* ${opts.issueType}`,
    `*Summary:* ${opts.summary}`,
    `*Source:* ${opts.source}`,
    `*Raised from:* Skyryse BMS (QM-001 Rev G)`,
    "",
    opts.description,
    "",
    "---",
    "Follow P-870 for nonconformances, P-1000 for corrective action, P-750 for document changes.",
  ].join("\n");
}
