import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Instagram, D as Linkedin, I as Github, S as Menu, T as Mail, n as X, nt as ArrowUpRight, q as ChevronDown, w as MapPin, y as Phone, z as Facebook } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-DX5BDkeq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BluetornLogo_default = "/assets/BluetornLogo-aqbH8UbY.webp";
function Logo({ className = "h-9 w-9" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: BluetornLogo_default,
		alt: "BLUETORN Technologies",
		width: 72,
		height: 72,
		className: `${className} object-contain`
	});
}
function Wordmark({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-9 w-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-display text-[1.15rem] font-bold tracking-[0.18em] leading-none ${tone === "light" ? "text-white" : "text-ink"}`,
			children: "BLUETORN"
		})]
	});
}
var base = "btn-magnetic inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight will-change-transform";
var variants = {
	primary: "bg-teal text-ink shadow-[0_10px_40px_-10px_oklch(0.72_0.13_190/0.6)] hover:shadow-[0_20px_60px_-15px_oklch(0.72_0.13_190/0.8)] hover:brightness-110",
	ghost: "text-white/90 border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40",
	outline: "border border-ink/15 text-ink hover:border-teal hover:text-teal bg-transparent"
};
function MagneticButton({ to, href, children, variant = "primary", className = "", onClick }) {
	const ref = (0, import_react.useRef)(null);
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		el.style.transform = `translate(${x * .18}px, ${y * .25}px)`;
	};
	const handleLeave = () => {
		const el = ref.current;
		if (el) el.style.transform = "translate(0,0)";
	};
	const cls = `${base} ${variants[variant]} ${className}`;
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		ref,
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		onClick,
		className: cls,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: href ?? "#",
		ref,
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		onClick,
		className: cls,
		children
	});
}
var nav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Company",
		to: "/about",
		mega: [{
			heading: "About BLUETORN",
			items: [
				{
					title: "Our Story",
					desc: "Founded in 2026, Navi Mumbai.",
					to: "/about"
				},
				{
					title: "Mission",
					desc: "Empower businesses with software.",
					to: "/about#mission"
				},
				{
					title: "Vision",
					desc: "India's most trusted software firm.",
					to: "/about#vision"
				},
				{
					title: "Core Values",
					desc: "10 principles we build on.",
					to: "/about#values"
				}
			]
		}, {
			heading: "How We Work",
			items: [
				{
					title: "Development Process",
					desc: "Discovery to deployment.",
					to: "/about#process"
				},
				{
					title: "Quality Assurance",
					desc: "Rigorous, automated QA.",
					to: "/about#qa"
				},
				{
					title: "Careers",
					desc: "Join a premium engineering team.",
					to: "/contact"
				}
			]
		}]
	},
	{
		label: "Services",
		to: "/services",
		mega: [
			{
				heading: "Engineering",
				items: [
					{
						title: "Software Development",
						to: "/services/software-development"
					},
					{
						title: "Web Development",
						to: "/services/web-development"
					},
					{
						title: "Mobile Apps",
						to: "/services/mobile-development"
					},
					{
						title: "API Integration",
						to: "/services/api-development"
					},
					{
						title: "Automation",
						to: "/services/automation"
					}
				]
			},
			{
				heading: "Platforms",
				items: [
					{
						title: "AI Solutions",
						to: "/services/ai-solutions"
					},
					{
						title: "ERP Solutions",
						to: "/services/erp-solutions"
					},
					{
						title: "CRM Development",
						to: "/services/crm-development"
					},
					{
						title: "SaaS Development",
						to: "/services/saas-development"
					},
					{
						title: "Cloud & DevOps",
						to: "/services/cloud-devops"
					}
				]
			},
			{
				heading: "Experience",
				items: [
					{
						title: "UI/UX Design",
						to: "/services/ui-ux-design"
					},
					{
						title: "Maintenance & Support",
						to: "/services/maintenance-support"
					},
					{
						title: "Digital Marketing",
						to: "/services/digital-marketing"
					},
					{
						title: "E-Commerce",
						to: "/services/e-commerce"
					}
				]
			}
		]
	},
	{
		label: "Solutions",
		to: "/solutions",
		mega: [{
			heading: "By Stage",
			items: [
				{
					title: "Startup MVP",
					desc: "0 → paying customers in weeks.",
					to: "/solutions/startup-mvp"
				},
				{
					title: "Enterprise Platform",
					desc: "Mission-critical software at scale.",
					to: "/solutions/enterprise-platform"
				},
				{
					title: "SaaS Launch",
					desc: "B2B SaaS ready for enterprise buyers.",
					to: "/solutions/saas-launch"
				},
				{
					title: "Internal Tools",
					desc: "Give ops teams their week back.",
					to: "/solutions/internal-tools"
				}
			]
		}, {
			heading: "By Outcome",
			items: [
				{
					title: "Digital Transformation",
					desc: "Modernise legacy — no big bang.",
					to: "/solutions/digital-transformation"
				},
				{
					title: "AI Integration",
					desc: "Production-grade AI with ROI.",
					to: "/solutions/ai-integration"
				},
				{
					title: "Cloud Migration",
					desc: "Cost, uptime and DR done right.",
					to: "/solutions/cloud-migration"
				},
				{
					title: "Cybersecurity",
					desc: "Security engineered in.",
					to: "/solutions/cybersecurity"
				}
			]
		}]
	},
	{
		label: "Industries",
		to: "/industries",
		mega: [{
			heading: "Regulated & Complex",
			items: [
				{
					title: "Healthcare",
					to: "/industries/healthcare"
				},
				{
					title: "Finance",
					to: "/industries/finance"
				},
				{
					title: "Banking",
					to: "/industries/banking"
				},
				{
					title: "Insurance",
					to: "/industries/insurance"
				},
				{
					title: "Manufacturing",
					to: "/industries/manufacturing"
				},
				{
					title: "Education",
					to: "/industries/education"
				}
			]
		}, {
			heading: "Commerce & Services",
			items: [
				{
					title: "Retail",
					to: "/industries/retail"
				},
				{
					title: "E-Commerce",
					to: "/industries/e-commerce"
				},
				{
					title: "Logistics",
					to: "/industries/logistics"
				},
				{
					title: "Real Estate",
					to: "/industries/real-estate"
				},
				{
					title: "Hospitality",
					to: "/industries/hospitality"
				},
				{
					title: "Construction",
					to: "/industries/construction"
				}
			]
		}]
	},
	{
		label: "Portfolio",
		to: "/portfolio"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openIdx, setOpenIdx] = (0, import_react.useState)(null);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto px-4 pt-4 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: -30,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .6,
					ease: [
						.2,
						.7,
						.2,
						1
					]
				},
				className: `mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 ${scrolled ? "border-white/10 bg-[oklch(0.15_0.025_200/0.72)] backdrop-blur-xl shadow-[0_20px_60px_-30px_oklch(0.1_0_0/0.5)]" : "border-white/5 bg-[oklch(0.15_0.025_200/0.35)] backdrop-blur-md"}`,
				onMouseLeave: () => setOpenIdx(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { tone: "light" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setOpenIdx(item.mega ? i : null),
							children: [item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white",
								children: [item.label, item.mega && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 opacity-60" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-white/75 hover:text-white",
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 opacity-60" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openIdx === i && item.mega && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: 8
								},
								transition: {
									duration: .22,
									ease: [
										.2,
										.7,
										.2,
										1
									]
								},
								className: "absolute left-1/2 top-[calc(100%+14px)] -translate-x-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-[560px] rounded-3xl border border-white/10 bg-[oklch(0.17_0.03_200/0.95)] p-6 shadow-[0_40px_80px_-30px_oklch(0_0_0/0.7)] backdrop-blur-2xl",
									style: {
										gridTemplateColumns: `repeat(${item.mega.length}, minmax(0, 1fr))`,
										display: "grid",
										gap: "1.25rem"
									},
									children: item.mega.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal",
										children: sec.heading
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: sec.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: it.to,
											className: "group flex items-start justify-between gap-3 rounded-xl px-3 py-2 text-white/85 transition-colors hover:bg-white/5 hover:text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-medium",
													children: it.title
												}), it.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-white/50",
													children: it.desc
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 translate-y-0.5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" })]
										}) }, it.title))
									})] }, sec.heading))
								})
							}) })]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							to: "/contact",
							variant: "primary",
							children: ["Get in Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Open menu",
						onClick: () => setMobile(true),
						className: "rounded-full border border-white/15 p-2 text-white lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[70] lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-ink/80 backdrop-blur-xl",
				onClick: () => setMobile(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 34
				},
				className: "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-2 bg-[oklch(0.17_0.03_200)] p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { tone: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close menu",
						onClick: () => setMobile(false),
						className: "rounded-full border border-white/15 p-2 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-1 overflow-y-auto pr-1",
					children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to ?? "/",
						onClick: () => setMobile(false),
						className: "rounded-2xl px-4 py-3 text-lg font-medium text-white/90 transition-colors hover:bg-white/5",
						children: n.label
					}, n.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							to: "/contact",
							variant: "primary",
							onClick: () => setMobile(false),
							children: ["Get in Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})]
				})]
			})]
		}) })]
	});
}
var cols = [
	{
		title: "Offerings",
		links: [
			{
				label: "Software Development",
				to: "/services#software"
			},
			{
				label: "Web Development",
				to: "/services#web"
			},
			{
				label: "Mobile Apps",
				to: "/services#mobile"
			},
			{
				label: "AI Solutions",
				to: "/services#ai"
			},
			{
				label: "ERP & CRM",
				to: "/services#erp"
			},
			{
				label: "Cloud & DevOps",
				to: "/services#cloud"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About Us",
				to: "/about"
			},
			{
				label: "Our Process",
				to: "/about#process"
			},
			{
				label: "Portfolio",
				to: "/portfolio"
			},
			{
				label: "Careers",
				to: "/contact"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	},
	{
		title: "Industries",
		links: [
			{
				label: "Healthcare",
				to: "/services#industries"
			},
			{
				label: "Finance",
				to: "/services#industries"
			},
			{
				label: "Manufacturing",
				to: "/services#industries"
			},
			{
				label: "Retail & E-Commerce",
				to: "/services#industries"
			},
			{
				label: "Logistics",
				to: "/services#industries"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t-2 border-teal/25 bg-ink text-white shadow-[0_-30px_80px_-40px_rgba(56,224,208,0.35)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-fade opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-8 md:pt-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { tone: "light" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-white/60",
							children: "BLUETORN Technologies engineers secure, scalable software and digital transformation programs for startups, SMEs and enterprises across India and beyond."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2 text-sm text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Office 01 & 02, Sai Sagar Apartment, Ulwe, Navi Mumbai – 410206, MH, India" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:info@bluetorn.com",
									className: "flex items-center gap-2 hover:text-teal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-teal" }), " info@bluetorn.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+917788996549",
									className: "flex items-center gap-2 hover:text-teal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-teal" }), " +91 77889 96549"]
								})
							]
						})
					] }), cols.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.22em] text-teal",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-white/70 transition-colors hover:text-white",
							children: l.label
						}) }, l.label))
					})] }, col.title))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/50",
						children: "© 2026 BLUETORN Technologies. Smarter Technology. Stronger Future."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3 text-white/70",
						children: [
							Linkedin,
							Github,
							Instagram,
							Facebook
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social link",
							className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:border-teal hover:text-teal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})]
				})]
			})
		]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Wordmark as i, MagneticButton as n, SiteLayout as r, Logo as t };
