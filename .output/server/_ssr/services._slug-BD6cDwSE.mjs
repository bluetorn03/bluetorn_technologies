import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BD6cDwSE.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "mx-auto max-w-3xl px-6 py-40 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold",
			children: "Service not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "The service you're looking for doesn't exist."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
				to: "/services",
				variant: "primary",
				children: "Back to services"
			})
		})
	]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
