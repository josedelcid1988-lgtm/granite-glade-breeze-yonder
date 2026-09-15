import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as ExternalLink, i as Star } from "../_libs/lucide-react.mjs";
import { C as childrenOf, N as getStage, T as getDocument, f as useBms, j as Button, r as Route$1 } from "./router-vGhTjsjz.mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents._docId-CYfqyFLN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DocumentPage() {
	const { docId } = Route$1.useParams();
	const doc = getDocument(docId);
	const openJira = useBms((s) => s.openJira);
	const pdmUrl = useBms((s) => s.pdmUrl);
	const toggleFavorite = useBms((s) => s.toggleFavorite);
	const favorites = useBms((s) => s.favorites);
	const pushRecent = useBms((s) => s.pushRecent);
	(0, import_react.useEffect)(() => {
		if (doc) pushRecent(doc.id);
	}, [doc, pushRecent]);
	if (!doc) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-muted-foreground",
		children: [
			"Unknown document. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/documents",
				children: "Back to the index"
			}),
			"."
		]
	});
	const kids = childrenOf(doc.id);
	const parent = doc.parentId ? getDocument(doc.parentId) : void 0;
	const related = doc.relatedIds.map(getDocument).filter(Boolean);
	const fav = favorites.includes(doc.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: [
						doc.type,
						" · Rev ",
						doc.rev,
						" · ",
						doc.date
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-3xl font-semibold tracking-tight",
						children: [
							doc.number,
							" ",
							doc.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => toggleFavorite(doc.id),
						"aria-label": "Favorite",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: fav ? "fill-primary text-primary" : "" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: doc.purpose
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Owner:"
						}),
						" ",
						doc.owner
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-xs text-muted-foreground",
					children: doc.pdmPath
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-mono text-2xs uppercase tracking-wider text-primary",
					children: "Scope"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: doc.scope
				})]
			}),
			doc.sections.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: sec.heading
				}),
				sec.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: p
				}, p)),
				sec.steps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 max-w-3xl space-y-2",
					children: sec.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-2xs text-primary",
							children: i + 1
						}), step]
					}, step))
				}) : null
			] }, sec.heading)),
			kids.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "SOPs and forms under this document"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: kids.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/documents/$docId",
					params: { docId: k.id },
					className: "block rounded-lg border border-border bg-card px-3 py-3 hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-primary",
						children: k.number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm",
						children: k.title
					})]
				}) }, k.id))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-wrap gap-2",
				children: [parent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/documents/$docId",
						params: { docId: parent.id },
						children: ["Parent ", parent.number]
					})
				}) : null, related.map((r) => r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/documents/$docId",
						params: { docId: r.id },
						children: r.number
					})
				}, r.id) : null)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-display text-lg font-semibold",
					children: "Stages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: doc.stageIds.map((id) => {
						const s = getStage(id);
						return s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stages/$stageId",
							params: { stageId: id },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								children: [
									s.number,
									". ",
									s.shortName
								]
							})
						}, id) : null;
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [doc.as9100.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "muted",
						children: ["AS9100D ", c]
					}, c)), doc.cfr.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "muted",
						children: ["14 CFR ", c]
					}, c))]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => openJira({
						issueType: doc.jiraType ?? "Document Change",
						summary: `${doc.number} — `,
						description: `Document: ${doc.number} ${doc.title} Rev ${doc.rev}\nPDM: ${doc.pdmPath}\nOwner: ${doc.owner}\n\nChange / issue:\n`,
						source: `${doc.number} ${doc.title}`
					}),
					children: ["Create ", doc.jiraType ?? "Document Change"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: pdmUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open PDM", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
					})
				})]
			})
		]
	});
}
//#endregion
export { DocumentPage as component };
