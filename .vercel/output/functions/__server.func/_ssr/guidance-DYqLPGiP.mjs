import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as getDocument, _ as guidance, f as useBms } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guidance-DYqLPGiP.js
var import_jsx_runtime = require_jsx_runtime();
function GuidancePage() {
	const setChatOpen = useBms((s) => s.setChatOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "Playbooks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "How to use this QMS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Short, real sequences. If you are in a hurry, start with a quality escape or an NCR. The assistant can walk you through the same steps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setChatOpen(true),
					className: "mt-3 text-sm text-primary hover:underline",
					children: "Ask the quality assistant"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: guidance.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: g.id,
					className: "rounded-xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg font-semibold",
									children: g.title
								}),
								g.urgency === "critical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "danger",
									children: "Time critical"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "muted",
									children: [g.minutes, " min"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: g.audience
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-3",
							children: g.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs text-primary",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm leading-relaxed text-muted-foreground",
										children: step.detail
									}),
									step.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: step.link,
										className: "mt-1 inline-block text-xs text-primary hover:underline",
										children: "Open in the BMS"
									}) : null
								] })]
							}, step.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.relatedIds.map((id) => {
								const d = getDocument(id);
								return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/documents/$docId",
									params: { docId: id },
									className: "font-mono text-xs text-primary hover:underline",
									children: d.number
								}, id) : null;
							})
						})
					]
				}, g.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-secondary p-5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Shortcuts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 space-y-1 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "font-mono text-xs text-foreground",
							children: "⌘K"
						}), " search the QMS"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "font-mono text-xs text-foreground",
							children: "⌘J"
						}), " create a Jira ticket"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "font-mono text-xs text-foreground",
							children: "⌘/"
						}), " quality assistant"] })
					]
				})]
			})
		]
	});
}
//#endregion
export { GuidancePage as component };
