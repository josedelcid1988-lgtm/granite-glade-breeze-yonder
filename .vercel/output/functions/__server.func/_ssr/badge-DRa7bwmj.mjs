import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { I as cn } from "./router-vGhTjsjz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DRa7bwmj.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary/15 text-primary",
		outline: "border-border text-muted-foreground",
		success: "border-transparent bg-success/15 text-success",
		warning: "border-transparent bg-warning/15 text-warning",
		danger: "border-transparent bg-danger/15 text-danger",
		muted: "border-transparent bg-secondary text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
