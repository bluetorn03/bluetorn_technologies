import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as CircleCheck, nt as ArrowUpRight, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { t as industries } from "./industries-data-CTGHhnIE.mjs";
import { t as Route } from "./industries._slug-C1iz6iBF.mjs";
import { n as servicesBySlug } from "./services-data-Ca5PnO-D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries._slug-poD5gMiX.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const i = Route.useLoaderData();
	const Icon = i.icon;
	const related = industries.filter((x) => x.slug !== i.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-ink text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Industry" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-teal/15 text-teal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-white/50",
								children: "BLUETORN Industries"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl",
							children: ["Software for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal-grad",
								children: i.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg text-white/70",
							children: i.hero
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
					children: "Domain-fluent engineering."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					i: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: i.overview
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Industry Challenges" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: "The problems we see over and over."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-4",
							children: i.challenges.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-semibold",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: c.d
								})]
							}, c.t))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Digital Transformation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: "What good looks like."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3",
							children: i.transformation.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: t
								})]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Benefits" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: i.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal",
									children: b
								}, b))
							})]
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Solutions we deliver" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl font-semibold md:text-5xl",
						children: [
							"Purpose-built for ",
							i.name.toLowerCase(),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-3",
						children: i.solutions.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: idx,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full rounded-3xl border border-border bg-card p-7 card-hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold uppercase tracking-widest text-teal",
										children: ["Solution ", idx + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl font-semibold",
										children: s.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: s.d
									})
								]
							})
						}, s.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Recommended Services" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: [
								"Services we typically deliver for ",
								i.name.toLowerCase(),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3",
							children: i.recommendedServices.map((slug) => {
								const svc = servicesBySlug[slug];
								if (!svc) return null;
								const SIcon = svc.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/$slug",
									params: { slug },
									className: "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-teal/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SIcon, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-base font-semibold",
												children: svc.title
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-white/40 group-hover:text-teal" })
									]
								}, slug);
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Technologies" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: "Stack we favour."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: i.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal",
									children: i.caseStudy.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl font-semibold",
									children: i.caseStudy.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 font-display text-xl leading-snug text-teal-glow",
									children: [
										"“",
										i.caseStudy.result,
										"”"
									]
								})
							]
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold md:text-3xl",
						children: "Other industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/industries",
						className: "text-sm font-semibold text-teal hover:underline",
						children: "All industries →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-4",
					children: related.map((r) => {
						const RI = r.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/industries/$slug",
							params: { slug: r.slug },
							className: "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RI, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: r.name
							})]
						}, r.slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 py-24 text-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-semibold md:text-5xl",
					children: [
						"Building for ",
						i.name.toLowerCase(),
						"? Let's talk."
					]
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
export { IndustryPage as component };
