import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as Label, f as useBms, i as jiraBoardUrl, j as Button, o as Input, v as integrations } from "./router-vGhTjsjz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/integrations-D1oq1JIs.js
var import_jsx_runtime = require_jsx_runtime();
function IntegrationsPage() {
	const store = useBms();
	const urlFor = {
		jira: {
			value: store.jiraBaseUrl,
			set: store.setJiraBaseUrl
		},
		pdm: {
			value: store.pdmUrl,
			set: store.setPdmUrl
		},
		netsuite: {
			value: store.netsuiteUrl,
			set: store.setNetsuiteUrl
		},
		polarion: {
			value: store.polarionUrl,
			set: store.setPolarionUrl
		},
		git: {
			value: store.gitUrl,
			set: store.setGitUrl
		},
		ukg: {
			value: store.ukgUrl,
			set: store.setUkgUrl
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-mark text-primary",
				children: "QM-001 Table 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold tracking-tight",
				children: "Systems of record"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted-foreground",
				children: "The deployed version of each tool is recorded under P-750 and verified at management review. Set your site URL once — Create ticket and Open PDM use it."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: integrations.map((item) => {
				const url = urlFor[item.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: item.id,
					className: "rounded-xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: item.system
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: url?.value ?? item.defaultUrl,
									target: "_blank",
									rel: "noreferrer",
									children: ["Open", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.purpose
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 space-y-1.5 text-sm",
							children: item.howTo.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-primary",
									children: [i + 1, "."]
								}), step]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: item.records.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm bg-secondary px-2 py-0.5 text-xs text-muted-foreground",
								children: r
							}, r))
						}),
						url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 max-w-xl space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `url-${item.id}`,
								children: "Base URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: `url-${item.id}`,
								value: url.value,
								onChange: (e) => url.set(e.target.value)
							})]
						}) : null,
						item.jiraBoards && url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: item.jiraBoards.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: jiraBoardUrl(url.value, b.path),
									target: "_blank",
									rel: "noreferrer",
									children: b.name
								})
							}, b.path))
						}) : null
					]
				}, item.id);
			})
		})]
	});
}
//#endregion
export { IntegrationsPage as component };
