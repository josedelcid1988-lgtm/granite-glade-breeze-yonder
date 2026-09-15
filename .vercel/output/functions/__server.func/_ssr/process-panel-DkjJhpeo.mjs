import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { S as ArrowUpRight, m as FileText, r as Ticket } from "../_libs/lucide-react.mjs";
import { A as SheetTitle, D as SheetContent, E as Sheet, I as cn, O as SheetDescription, T as getDocument, f as useBms, j as Button, k as SheetHeader } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-panel-DkjJhpeo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root.displayName;
function ProcessPanel({ open, onOpenChange, stage, process }) {
	const openJira = useBms((s) => s.openJira);
	if (!stage || !process) return null;
	const procedures = process.procedureIds.map(getDocument).filter(Boolean);
	const sops = process.sopIds.map(getDocument).filter(Boolean);
	const forms = process.formIds.map(getDocument).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "w-full max-w-xl overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-wider text-primary",
					children: [
						"Stage ",
						stage.number,
						" · ",
						stage.shortName
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: process.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: process.summary })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 px-6 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: "How to do this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2",
						children: process.howTo.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-2xs text-primary",
								children: i + 1
							}), step]
						}, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocGroup, {
						title: "Procedures",
						docs: procedures
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocGroup, {
						title: "SOPs",
						docs: sops
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocGroup, {
						title: "Forms",
						docs: forms
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: "Tools"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: process.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: t
						}, t))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => openJira({
								issueType: process.jiraType,
								summary: `${process.name} — `,
								description: `Process: ${process.name}\nStage: ${stage.number} ${stage.name}\nOwner: ${stage.owner}\nProcedures: ${process.procedureIds.join(", ")}\n\nWhat happened:\n\nRequirement / document:\n\nSerial / lot / WO:\n\nContainment:`,
								source: `${stage.name} · ${process.name}`
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "size-4" }),
								"Create ",
								process.jiraType
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/stages/$stageId",
								params: { stageId: stage.id },
								children: ["Open stage workspace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						})]
					})
				]
			})]
		})
	});
}
function DocGroup({ title, docs }) {
	if (!docs.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-1.5",
		children: docs.map((d) => d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/documents/$docId",
			params: { docId: d.id },
			className: "flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm hover:border-primary/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-primary",
					children: d.number
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: d.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto font-mono text-2xs text-muted-foreground",
					children: ["Rev ", d.rev]
				})
			]
		}) }, d.id) : null)
	})] });
}
//#endregion
export { ProcessPanel as t };
