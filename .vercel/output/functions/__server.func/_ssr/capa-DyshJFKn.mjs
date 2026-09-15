import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { N as getStage, f as useBms, h as capaRecords, j as Button } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capa-DyshJFKn.js
var import_jsx_runtime = require_jsx_runtime();
var statusVariant = {
	open: "warning",
	mrb: "danger",
	"in-progress": "default",
	verification: "success",
	closed: "muted"
};
function CapaPage() {
	const { openJira, drafts } = useBms();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-mark text-primary",
						children: "P-870 · P-1000 · Jira QMS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "NCR, MRB and CAPA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted-foreground",
						children: "Jira is the system of record. Identify, segregate, disposition. Scrap is rendered unusable. Escapes notify customers in 48–72 hours."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => openJira({
						issueType: "Internal Discrepancy",
						summary: "",
						description: "What is nonconforming:\nAgainst which released drawing / MWI:\nSerial / lot / WO:\nWhere found:\nContainment:\nProduct safety effect: Yes / No\n",
						source: "NCR / CAPA board"
					}),
					children: "Raise NCR"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: capaRecords.map((c) => {
					const stage = getStage(c.stageId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: c.id,
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-primary",
										children: c.jiraKey
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: c.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: statusVariant[c.status] ?? "muted",
										children: c.status
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: c.severity === "major" || c.severity === "critical" ? "danger" : "muted",
										children: c.severity
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-lg font-semibold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: c.description
							}),
							c.disposition ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: c.disposition
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: [
									stage ? `Stage ${stage.number} ${stage.name}` : c.stageId,
									" · ",
									c.owner,
									" · Opened ",
									c.opened,
									" · Due ",
									c.due,
									" · ",
									c.source
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => openJira({
										issueType: c.type === "CA" || c.type === "Escape" ? "Corrective Action" : c.type === "DCR" ? "Document Change" : "Internal Discrepancy",
										summary: `${c.jiraKey} follow-up — ${c.title}`,
										description: `Existing record ${c.jiraKey}\n${c.description}\n\nUpdate:\n`,
										source: c.jiraKey
									}),
									children: "Follow-up ticket"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/documents/$docId",
										params: { docId: c.procedureId },
										children: "Open procedure"
									})
								})]
							})
						]
					}, c.id);
				})
			}),
			drafts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Local drafts from this BMS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: drafts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border bg-secondary px-3 py-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-primary",
							children: d.issueType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: d.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: d.source
						})
					]
				}, d.id))
			})] }) : null
		]
	});
}
//#endregion
export { CapaPage as component };
