import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as useBms, j as Button, m as audits } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audits-Bk6xWjnR.js
var import_jsx_runtime = require_jsx_runtime();
function AuditsPage() {
	const openJira = useBms((s) => s.openJira);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "P-920 · 21.137(l)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Audit program"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Covers every AS9100D clause and every 14 CFR 21.137 element across the cycle. Audits measure the QMS; stage metrics measure process performance."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: audits.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					id: a.id,
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: a.status === "closed" ? "muted" : a.status === "in-progress" ? "warning" : "default",
								children: a.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: a.type
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-lg font-semibold",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs text-primary",
							children: a.clause
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: a.notes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								a.date,
								" · ",
								a.area,
								" · ",
								a.lead,
								a.findings ? ` · ${a.findings} findings (${a.majors} major / ${a.minors} minor)` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => openJira({
									issueType: "Audit Finding",
									summary: `${a.title} — finding `,
									description: `Audit: ${a.title}\nClause: ${a.clause}\nArea: ${a.area}\nDate: ${a.date}\n\nFinding:\nRequirement:\nEvidence:\n`,
									source: a.title
								}),
								children: "Raise finding"
							})
						})
					]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"Walk an auditor through a stage using the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guidance",
						className: "text-primary hover:underline",
						children: "guidance playbook"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { AuditsPage as component };
