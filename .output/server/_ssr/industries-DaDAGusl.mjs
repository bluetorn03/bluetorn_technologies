import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { nt as ArrowUpRight, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { t as industries } from "./industries-data-CTGHhnIE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DaDAGusl.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-ink text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Industries" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl",
						children: [
							"Domain fluency, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal-grad",
								children: "not just code"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg text-white/70",
						children: "We know the workflows, regulations and gotchas of the industries we serve — so engagements start where domain-agnostic vendors are still asking questions."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: industries.map((ind, i) => {
						const Icon = ind.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: i % 3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/industries/$slug",
								params: { slug: ind.slug },
								className: "group block h-full rounded-3xl border border-border bg-card p-7 card-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 font-display text-xl font-semibold",
										children: ind.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: ind.hero
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal",
										children: ["Explore industry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									})
								]
							})
						}, ind.slug);
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 py-24 text-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold md:text-5xl",
					children: "Your industry, our next engagement."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
						to: "/contact",
						variant: "primary",
						children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			})
		})
	] });
}
//#endregion
export { IndustriesIndex as component };
