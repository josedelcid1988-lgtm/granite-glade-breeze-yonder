export type MetricStatus = "on-target" | "at-risk" | "miss" | "dormant" | "baseline";

export type JiraIssueType =
  | "Internal Discrepancy"
  | "Corrective Action"
  | "Document Change"
  | "Supplier Ticket"
  | "Work Order"
  | "Data Requirement"
  | "Audit Finding";

export interface MetricPoint {
  month: string;
  value: number | null;
}

export interface Metric {
  id: string;
  name: string;
  target: string;
  targetValue?: number;
  unit?: string;
  frequency: string;
  source: string;
  current: number | null;
  status: MetricStatus;
  note?: string;
  series: MetricPoint[];
}

export interface ProcessBox {
  id: string;
  name: string;
  procedureIds: string[];
  sopIds: string[];
  formIds: string[];
  tools: string[];
  jiraType: JiraIssueType;
  summary: string;
  howTo: string[];
}

export interface Stage {
  id: string;
  number: number;
  name: string;
  shortName: string;
  owner: string;
  ownerRole: string;
  color: string;
  intent: string;
  inputs: string[];
  process: string[];
  outputs: string[];
  procedureIds: string[];
  tools: string[];
  as9100: string[];
  cfr: string[];
  records: string;
  competence: string;
  metrics: Metric[];
  processes: ProcessBox[];
  next: string[];
  feedbackFrom?: string[];
}

export interface SupportProcess {
  id: string;
  name: string;
  procedureIds: string[];
  tools: string[];
  as9100: string[];
  cfr: string[];
  summary: string;
}

export interface DocSection {
  heading: string;
  paragraphs: string[];
  steps?: string[];
}

export interface QmsDocument {
  id: string;
  number: string;
  title: string;
  type: "manual" | "procedure" | "sop" | "form" | "industry";
  rev: string;
  date: string;
  owner: string;
  purpose: string;
  scope: string;
  stageIds: string[];
  parentId?: string;
  relatedIds: string[];
  as9100: string[];
  cfr: string[];
  tools: string[];
  records: string[];
  jiraType?: JiraIssueType;
  sections: DocSection[];
  pdmPath: string;
}

export interface CapaRecord {
  id: string;
  type: "NCR" | "CA" | "DCR" | "Escape";
  title: string;
  status: "open" | "mrb" | "in-progress" | "verification" | "closed";
  severity: "minor" | "major" | "critical";
  stageId: string;
  procedureId: string;
  owner: string;
  opened: string;
  due: string;
  source: string;
  description: string;
  disposition?: string;
  jiraKey: string;
}

export interface Audit {
  id: string;
  title: string;
  type: "internal" | "registrar" | "faa" | "customer";
  status: "planned" | "in-progress" | "closed";
  clause: string;
  area: string;
  lead: string;
  date: string;
  findings: number;
  minors: number;
  majors: number;
  notes: string;
}

export interface Integration {
  id: string;
  name: string;
  system: string;
  purpose: string;
  records: string[];
  stages: string[];
  defaultUrl: string;
  howTo: string[];
  jiraBoards?: { name: string; path: string }[];
}

export interface GuidanceItem {
  id: string;
  title: string;
  audience: string;
  minutes: number;
  urgency?: "critical" | "normal";
  steps: { title: string; detail: string; link?: string }[];
  relatedIds: string[];
}

export interface Role {
  id: string;
  title: string;
  name?: string;
  duties: string[];
  stages: string[];
}

export interface ManualSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  tables?: { caption: string; headers: string[]; rows: string[][] }[];
}
