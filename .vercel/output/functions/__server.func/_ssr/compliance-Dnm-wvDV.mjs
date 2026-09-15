import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { T as getDocument, g as complianceMatrix } from "./router-vGhTjsjz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compliance-Dnm-wvDV.js
var import_jsx_runtime = require_jsx_runtime();
function CompliancePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-mark text-primary",
					children: "QM-001 Appendix A"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "AS9100D and 14 CFR Part 21"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Skyryse is an applicant for or holder of a PMA under 14 CFR part 21 subpart K. The quality system required by 21.307 is described in QM-001 as required by 21.308. Certificate of registration is issued by Perry Johnson Registrars, Inc. under a campus scheme."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-secondary text-xs uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "AS9100D"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "14 CFR 21.137"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "QMS document"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: complianceMatrix.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top",
								children: row.as9100
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top text-muted-foreground",
								children: row.cfr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: row.documents.map((id) => {
										const d = getDocument(id);
										return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/documents/$docId",
											params: { docId: id },
											className: "font-mono text-xs text-primary hover:underline",
											children: d.number
										}, id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs",
											children: id
										}, id);
									})
								})
							})
						]
					}, row.as9100)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Appendix B — certificate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: "The AS9100D certificate of registration issued by Perry Johnson Registrars, Inc. is held in PDM with QM-001. Page 2 lists sites under the campus scheme. The certificate is valid only while surveillance is maintained. A change in status is notified to customers within two business days of receiving notification from the registrar (QM-001 §11.4)."
				})]
			})
		]
	});
}
//#endregion
export { CompliancePage as component };
