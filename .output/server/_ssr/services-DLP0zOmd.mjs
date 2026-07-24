import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ShieldCheck, nt as ArrowUpRight, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { t as services } from "./services-data-Ca5PnO-D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DLP0zOmd.js
var import_jsx_runtime = require_jsx_runtime();
var industries = [
	"Manufacturing",
	"Healthcare",
	"Education",
	"Retail",
	"E-Commerce",
	"Logistics",
	"Real Estate",
	"Hospitality",
	"Finance",
	"Banking",
	"Insurance",
	"Construction"
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-ink text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Services & Capabilities" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl",
						children: ["One engineering partner. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal-grad",
							children: "Every capability."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg text-white/70",
						children: "From custom software and AI to ERP, CRM, SaaS and cloud — BLUETORN delivers the full engineering stack under one roof, with senior teams and enterprise-grade governance."
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
					children: services.map((g, i) => {
						const Icon = g.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: i % 3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: g.slug },
								className: "group block h-full rounded-3xl border border-border bg-card p-7 card-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 font-display text-xl font-semibold",
										children: g.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: g.hero
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-1.5",
										children: g.features.slice(0, 3).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground",
											children: f
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal",
										children: ["Explore service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									})
								]
							})
						}, g.slug);
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "industries",
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Industries We Serve" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-semibold md:text-5xl",
						children: "Domain fluency across regulated and fast-moving sectors."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
					children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: ind
						})]
					}, ind))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "enterprise",
			className: "bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 py-24 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold md:text-5xl",
						children: "Not sure which service fits?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/70",
						children: "Book a 30-minute discovery call. We'll map the right approach to your goals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							to: "/contact",
							variant: "primary",
							children: ["Talk to an engineer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Services as component };
