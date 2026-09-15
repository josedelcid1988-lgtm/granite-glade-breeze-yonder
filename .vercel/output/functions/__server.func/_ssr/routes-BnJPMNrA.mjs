import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as supportProcesses, I as cn, M as SkyryseMark, P as stages, c as DialogContent, d as DialogTitle, f as useBms, j as Button, l as DialogDescription, s as Dialog, u as DialogHeader, x as qualityPolicy } from "./router-vGhTjsjz.mjs";
import { r as stageHealth, t as HealthDot } from "./status-badge-DasTFz5d.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DfxBnaS8.mjs";
import { t as ProcessPanel } from "./process-panel-DkjJhpeo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BnJPMNrA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProcessMap() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
		defaultValue: "lifecycle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
				value: "lifecycle",
				children: "Nine stages"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
				value: "map",
				children: "Process map"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "lifecycle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifecycleGrid, { onProcess: (stage, process) => setSelected({
					stage,
					process
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "map",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailedMap, { onProcess: (stage, process) => setSelected({
					stage,
					process
				}) })
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessPanel, {
		open: Boolean(selected),
		onOpenChange: (o) => {
			if (!o) setSelected(null);
		},
		stage: selected?.stage ?? null,
		process: selected?.process ?? null
	})] });
}
function LifecycleGrid({ onProcess }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 max-w-2xl text-sm text-muted-foreground",
				children: "Figure 2 of QM-001 Rev G. Click a process inside a stage for the procedure, SOP, form and a Jira ticket. Feedback from flight test and in-service returns to Product Development."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: stages.map((stage, i) => {
					const health = stageHealth(stage.metrics.map((m) => m.status));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "stagger-in rounded-xl border border-border bg-card p-4 shadow-border",
						style: { animationDelay: `${i * 40}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-2xs uppercase tracking-mark text-primary",
										children: ["Stage ", stage.number]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg font-semibold leading-tight",
										children: stage.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: stage.owner
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthDot, { status: health })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-sm leading-relaxed text-muted-foreground",
								children: stage.intent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: stage.processes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onProcess(stage, p),
									className: "flex w-full items-center rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: p.name
									})
								}) }, p.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/stages/$stageId",
								params: { stageId: stage.id },
								className: "mt-3 inline-flex text-xs font-medium text-primary hover:underline",
								children: "Open workspace"
							})
						]
					}, stage.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportRail, {})
		]
	});
}
function DetailedMap({ onProcess }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 max-w-2xl text-sm text-muted-foreground",
				children: "Swimlane map. Scroll sideways. Process owners sit on top; click any box for the procedure, SOP, form and Jira action."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "horizon-grid -mx-4 overflow-x-auto px-4 pb-4 md:-mx-0 md:px-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-max gap-3",
					children: stages.map((stage) => {
						const health = stageHealth(stage.metrics.map((m) => m.status));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-52 shrink-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-secondary px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xs uppercase tracking-wider text-muted-foreground",
									children: stage.owner
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/stages/$stageId",
									params: { stageId: stage.id },
									className: "flex items-center gap-2 font-display text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthDot, { status: health }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										stage.number,
										". ",
										stage.shortName
									] })]
								})]
							}), stage.processes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onProcess(stage, p),
								className: cn("rounded-lg border border-border bg-card px-3 py-2.5 text-left text-sm leading-snug shadow-border", "hover:border-primary/50 hover:shadow-border-hover"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-mono text-2xs uppercase tracking-wider text-primary",
									children: p.procedureIds.join(" · ")
								})]
							}, p.id))]
						}, stage.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportRail, {})
		]
	});
}
function SupportRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 font-mono text-2xs uppercase tracking-mark text-muted-foreground",
			children: "Support processes — act across every stage"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: supportProcesses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/documents/$docId",
				params: { docId: s.procedureIds[0] ?? "p-750" },
				className: "rounded-lg border border-border bg-secondary px-3 py-2 text-sm hover:border-primary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: s.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-2xs uppercase tracking-wider text-primary",
					children: s.procedureIds.join(" · ")
				})]
			}, s.id))
		})]
	});
}
function Welcome() {
	const { tourDone, setTourDone, setChatOpen } = useBms();
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: ready && !tourDone,
		onOpenChange: (o) => {
			if (!o) setTourDone(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyryseMark, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Skyryse BMS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Interactive Quality Management System aligned to QM-001 Rev G, AS9100D and 14 CFR Part 21 Subpart K." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Click any process box for the procedure, SOP, form and a Jira ticket." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dashboard carries the live stage metrics — dormant means not yet first delivery or first flight release, not a miss." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The assistant answers from this QMS. PDM remains the system of record." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setTourDone(true),
							children: "Start on the map"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							onClick: () => setTourDone(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/guidance",
								children: "Open guidance"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => {
								setTourDone(true);
								setChatOpen(true);
							},
							children: "Ask the assistant"
						})
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "QM-001 Rev G · Figure 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl",
					children: "Primary business processes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base",
					children: "Nine stages. One owner each. Click a box for the procedure, SOP, form, and a Jira ticket pre-filled from this process."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-4 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground",
					children: qualityPolicy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "text-primary hover:underline",
							children: "Stage metrics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guidance",
							className: "text-primary hover:underline",
							children: "How to use this BMS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manual",
							className: "text-primary hover:underline",
							children: "Quality manual"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessMap, {})
	] });
}
//#endregion
export { Home as component };
