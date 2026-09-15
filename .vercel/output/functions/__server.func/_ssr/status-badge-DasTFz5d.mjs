import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Badge } from "./badge-DRa7bwmj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-DasTFz5d.js
var import_jsx_runtime = require_jsx_runtime();
var map = {
	"on-target": {
		label: "On target",
		variant: "success"
	},
	"at-risk": {
		label: "At risk",
		variant: "warning"
	},
	miss: {
		label: "Miss",
		variant: "danger"
	},
	dormant: {
		label: "Dormant",
		variant: "muted"
	},
	baseline: {
		label: "Baseline",
		variant: "default"
	}
};
function StatusBadge({ status }) {
	const m = map[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: m.variant,
		children: m.label
	});
}
function HealthDot({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-1.5 rounded-full ${status === "on-target" ? "bg-success" : status === "at-risk" ? "bg-warning" : status === "miss" ? "bg-danger" : "bg-muted-foreground/50"}` });
}
function stageHealth(statuses) {
	if (statuses.includes("miss")) return "miss";
	if (statuses.includes("at-risk")) return "at-risk";
	if (statuses.every((s) => s === "dormant" || s === "baseline")) return statuses.includes("baseline") ? "baseline" : "dormant";
	return "on-target";
}
//#endregion
export { StatusBadge as n, stageHealth as r, HealthDot as t };
