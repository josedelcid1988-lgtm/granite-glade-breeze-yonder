import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { N as getStage, T as getDocument, f as useBms, j as Button, n as Route, w as documentsForStage } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
import { t as MetricCard } from "./metric-card-CJsKJdSe.mjs";
import { t as ProcessPanel } from "./process-panel-DkjJhpeo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stages._stageId-DTU6jMwT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StagePage() {
	const { stageId } = Route.useParams();
	const stage = getStage(stageId);
	const openJira = useBms((s) => s.openJira);
	const [process, setProcess] = (0, import_react.useState)(null);
	if (!stage) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-muted-foreground",
		children: [
			"Unknown stage. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Return to the map"
			}),
			"."
		]
	});
	const docs = documentsForStage(stage.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: [
						"Stage ",
						stage.number,
						" · ",
						stage.owner
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: stage.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: stage.intent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: stage.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: t
					}, t))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Inputs",
						items: stage.inputs
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Process",
						items: stage.process
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "Outputs",
						items: stage.outputs
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Click a process"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: stage.processes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setProcess(p),
					className: "rounded-xl border border-border bg-card p-4 text-left hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-2xs uppercase tracking-wider text-primary",
							children: p.procedureIds.join(" · ")
						})
					]
				}, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Metrics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: stage.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, { metric: m }, m.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display text-lg font-semibold",
						children: "Requirements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "AS9100D"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm",
						children: stage.as9100.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "14 CFR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: stage.cfr.join(" · ")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display text-lg font-semibold",
						children: "Records & competence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: stage.records
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: stage.competence
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Documents on this stage"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border rounded-xl border border-border",
				children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/documents/$docId",
					params: { docId: d.id },
					className: "flex items-center gap-3 px-4 py-3 hover:bg-accent/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 shrink-0 font-mono text-xs text-primary",
							children: d.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: d.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto text-xs capitalize text-muted-foreground",
							children: d.type
						})
					]
				}) }, d.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: stage.procedureIds.map((id) => {
					const d = getDocument(id);
					return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => openJira({
							issueType: d.jiraType ?? "Work Order",
							summary: `${d.number} — `,
							description: `Procedure ${d.number} ${d.title}\nStage ${stage.number} ${stage.name}\nOwner ${stage.owner}\n\nWhat happened:\n`,
							source: `Stage ${stage.number} · ${d.number}`
						}),
						children: ["Ticket from ", d.number]
					}, id) : null;
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessPanel, {
				open: Boolean(process),
				onOpenChange: (o) => {
					if (!o) setProcess(null);
				},
				stage,
				process
			})
		]
	});
}
function Block({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-2 font-mono text-2xs uppercase tracking-wider text-primary",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1.5 text-sm leading-relaxed",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		})]
	});
}
//#endregion
export { StagePage as component };
