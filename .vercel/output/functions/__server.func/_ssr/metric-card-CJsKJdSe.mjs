import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as StatusBadge } from "./status-badge-DasTFz5d.mjs";
import { n as Line, r as ResponsiveContainer, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metric-card-CJsKJdSe.js
var import_jsx_runtime = require_jsx_runtime();
function MetricCard({ metric, owner }) {
	const data = metric.series.map((p) => ({
		...p,
		value: p.value ?? void 0
	}));
	const hasLine = metric.series.some((p) => p.value !== null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-card p-4 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium leading-snug",
					children: metric.name
				}), owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: owner
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: metric.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold tabular-nums tracking-tight",
					children: metric.current === null ? "—" : `${metric.current}${metric.unit === "%" ? "%" : ""}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: ["Target ", metric.target]
				})] }), hasLine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-12 w-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChart, {
							data,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "value",
								stroke: "var(--color-primary)",
								strokeWidth: 1.5,
								dot: false,
								connectNulls: false
							})
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Not yet active"
				})]
			}),
			metric.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted-foreground",
				children: metric.note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-2xs uppercase tracking-wider text-muted-foreground",
				children: [
					metric.frequency,
					" · ",
					metric.source
				]
			})
		]
	});
}
//#endregion
export { MetricCard as t };
