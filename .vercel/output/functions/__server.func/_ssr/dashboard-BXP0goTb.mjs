import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { P as stages, b as qmsMetrics, h as capaRecords, m as audits, p as allMetrics } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
import { r as stageHealth } from "./status-badge-DasTFz5d.mjs";
import { t as MetricCard } from "./metric-card-CJsKJdSe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BXP0goTb.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const metrics = allMetrics();
	const onTarget = metrics.filter((m) => m.status === "on-target").length;
	const atRisk = metrics.filter((m) => m.status === "at-risk").length;
	const dormant = metrics.filter((m) => m.status === "dormant" || m.status === "baseline").length;
	const openCapa = capaRecords.filter((c) => c.status !== "closed").length;
	const upcoming = audits.filter((a) => a.status !== "closed");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "Management review pack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Quality dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Stage metrics from QM-001 §7 and QMS metrics from §13.1. A miss for three consecutive months raises P-1000. Dormant is not a miss."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "On target",
						value: String(onTarget),
						hint: `${metrics.length} objectives`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "At risk",
						value: String(atRisk),
						hint: "Need action"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Dormant / baseline",
						value: String(dormant),
						hint: "First flight or first delivery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Open NCR / CAPA",
						value: String(openCapa),
						hint: "Jira QMS board"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Stage health"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-3",
				children: stages.map((s) => {
					const health = stageHealth(s.metrics.map((m) => m.status));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/stages/$stageId",
						params: { stageId: s.id },
						className: "flex items-center justify-between rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-mono text-2xs uppercase tracking-wider text-primary",
							children: ["Stage ", s.number]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: s.shortName
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: health === "on-target" ? "success" : health === "at-risk" ? "warning" : health === "miss" ? "danger" : "muted",
							children: health
						})]
					}, s.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "QMS metrics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: qmsMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					metric: m,
					owner: "Quality Manager"
				}, m.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Stage metrics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: stages.flatMap((s) => s.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					metric: m,
					owner: `Stage ${s.number} · ${s.owner}`
				}, m.id)))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "Open records"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: capaRecords.filter((c) => c.status !== "closed").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capa",
						className: "block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-primary",
								children: c.jiraKey
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: ["Due ", c.due]
							})
						]
					}) }, c.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "Audit calendar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: upcoming.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/audits",
						className: "block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: [
								a.date,
								" · ",
								a.lead
							]
						})]
					}) }, a.id))
				})] })]
			})
		]
	});
}
function Kpi({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
//#endregion
export { Dashboard as component };
