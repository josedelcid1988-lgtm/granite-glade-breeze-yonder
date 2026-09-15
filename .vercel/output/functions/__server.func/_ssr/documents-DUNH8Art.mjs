import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { S as allDocuments, o as Input } from "./router-vGhTjsjz.mjs";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-DfxBnaS8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-DUNH8Art.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var types = [
	"all",
	"manual",
	"procedure",
	"sop",
	"form"
];
function DocumentsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("all");
	const rows = (0, import_react.useMemo)(() => {
		return allDocuments.filter((d) => {
			if (type !== "all" && d.type !== type) return false;
			if (!q.trim()) return true;
			return `${d.number} ${d.title} ${d.purpose} ${d.owner}`.toLowerCase().includes(q.toLowerCase());
		});
	}, [q, type]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "P-750 · Levels I–IV"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Document control"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "PDM is the system of record. This index is the map — open a document for how-to, related SOPs and forms, and a Jira change ticket."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Filter by number, title, owner…",
					className: "sm:max-w-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
					value: type,
					onValueChange: (v) => setType(v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, { children: types.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: t,
						className: "capitalize",
						children: t
					}, t)) })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border rounded-xl border border-border bg-card",
				children: rows.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/documents/$docId",
					params: { docId: d.id },
					className: "flex flex-col gap-1 px-4 py-3 hover:bg-accent/40 sm:flex-row sm:items-center sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-28 shrink-0 font-mono text-xs text-primary",
							children: d.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-sm",
							children: d.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs capitalize text-muted-foreground",
							children: d.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: ["Rev ", d.rev]
						})
					]
				}) }, d.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [rows.length, " documents"]
			})
		]
	});
}
//#endregion
export { DocumentsPage as component };
