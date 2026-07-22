import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BiUVjIOd.js
var import_jsx_runtime = require_jsx_runtime();
function SectionEyebrow({ children, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${tone === "light" ? "text-teal" : "text-teal"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-teal/60" }), children]
	});
}
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			delay: i * .06,
			ease: [
				.2,
				.7,
				.2,
				1
			]
		}
	})
};
function Reveal({ children, i = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		custom: i,
		children
	});
}
//#endregion
export { SectionEyebrow as n, Reveal as t };
