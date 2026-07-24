import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as BrainCircuit, C as Megaphone, K as CircleCheck, L as Funnel, O as Layers, U as CodeXml, Y as ChartColumn, Z as Building2, l as Sparkles, m as ShieldCheck, nt as ArrowUpRight, u as Smartphone } from "../_libs/lucide-react.mjs";
import { i as Wordmark, n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$8 } from "./industries._slug-C1iz6iBF.mjs";
import { t as Route$9 } from "./services._slug-Dhqf6BwU.mjs";
import { t as Route$10 } from "./solutions._slug-BzNbOfNy.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-rk5RPVIa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BalYCIqL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { tone: "dark" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
			{
				name: "description",
				content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India."
			},
			{
				name: "author",
				content: "BLUETORN Technologies"
			},
			{
				property: "og:title",
				content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation"
			},
			{
				property: "og:description",
				content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India."
			},
			{
				property: "og:site_name",
				content: "BLUETORN Technologies"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation"
			},
			{
				name: "twitter:description",
				content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ee0f63fb-3c90-4d7e-a9b5-821e3d7e4e42"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ee0f63fb-3c90-4d7e-a9b5-821e3d7e4e42"
			}
		],
		script: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				"name": "BLUETORN Technologies",
				"url": "https://bluetorn.com",
				"logo": "https://bluetorn.com/BluetornLogo.webp",
				"email": "info@bluetorn.com",
				"telephone": "+91 77889 96579",
				"contactPoint": [{
					"@type": "ContactPoint",
					"telephone": "+91 77889 96579",
					"contactType": "sales",
					"email": "info@bluetorn.com"
				}, {
					"@type": "ContactPoint",
					"telephone": "+91 7788996549",
					"contactType": "customer service",
					"email": "contact@bluetorn.com"
				}]
			})
		}],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/webp",
				href: "/BluetornLogo.webp"
			},
			{
				rel: "shortcut icon",
				href: "/BluetornLogo.webp"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "bottom-right",
			theme: "dark",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DM-MLCu0.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
			{
				name: "description",
				content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India."
			},
			{
				property: "og:title",
				content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-CslpopIg.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About BLUETORN Technologies — Our Story, Mission & Values" },
			{
				name: "description",
				content: "BLUETORN is a premium software engineering studio founded in 2026 in Navi Mumbai. Learn about our mission, vision, values and how we build software."
			},
			{
				property: "og:title",
				content: "About BLUETORN Technologies"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-BuwFspsV.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact BLUETORN Technologies — Navi Mumbai, India" },
			{
				name: "description",
				content: "Get in touch with BLUETORN Technologies. Business: info@bluetorn.com / +91 77889 96579. General: contact@bluetorn.com / +91 7788996549."
			},
			{
				property: "og:title",
				content: "Contact BLUETORN Technologies"
			},
			{
				property: "og:description",
				content: "General, business, project or career enquiries — reach the right team fast."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		script: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				"name": "BLUETORN Technologies",
				"url": "https://bluetorn.com",
				"logo": "https://bluetorn.com/BluetornLogo.webp",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Office 01 & 02, Sai Sagar Apartment, Ulwe",
					"addressLocality": "Navi Mumbai",
					"addressRegion": "Maharashtra",
					"postalCode": "410206",
					"addressCountry": "IN"
				},
				"contactPoint": [{
					"@type": "ContactPoint",
					"telephone": "+91-77889-96579",
					"contactType": "sales",
					"email": "info@bluetorn.com",
					"areaServed": "IN",
					"availableLanguage": ["English", "Hindi"]
				}, {
					"@type": "ContactPoint",
					"telephone": "+91-7788996549",
					"contactType": "customer service",
					"email": "contact@bluetorn.com",
					"areaServed": "IN",
					"availableLanguage": ["English", "Hindi"]
				}]
			})
		}],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./industries-DaDAGusl.mjs");
var Route$3 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: "Industries — Software for Every Sector | BLUETORN" },
			{
				name: "description",
				content: "Domain-fluent software for manufacturing, healthcare, finance, retail, logistics, education, real estate, hospitality, insurance and construction."
			},
			{
				property: "og:title",
				content: "BLUETORN Industries"
			},
			{
				property: "og:description",
				content: "Deep experience across regulated and fast-moving industries."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
function PortfolioCarousel({ slides }) {
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const infiniteSlides = [
		...slides,
		...slides,
		...slides
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full overflow-hidden py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-ink to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-ink to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-r from-ink via-ink/80 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-l from-ink via-ink/80 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max items-center gap-6 md:gap-8 hover:[animation-play-state:paused]",
				onMouseEnter: () => setIsPaused(true),
				onMouseLeave: () => setIsPaused(false),
				style: {
					animation: "portfolio-marquee 45s linear infinite",
					animationPlayState: isPaused ? "paused" : "running"
				},
				children: infiniteSlides.map((slide, index) => {
					const heightClasses = [
						"h-[340px] md:h-[400px]",
						"h-[290px] md:h-[350px]",
						"h-[380px] md:h-[440px]",
						"h-[310px] md:h-[370px]",
						"h-[360px] md:h-[420px]"
					];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group relative w-[260px] sm:w-[300px] md:w-[340px] shrink-0 overflow-hidden rounded-[2.25rem] border border-white/15 bg-card/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:border-teal/50 hover:shadow-[0_30px_70px_-20px_rgba(56,224,208,0.4)] ${slide.heightClass || heightClasses[index % heightClasses.length]}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: slide.img,
								alt: slide.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:from-ink/95 group-hover:via-ink/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/70 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-wide text-white backdrop-blur-md transition-all group-hover:border-teal/50 group-hover:text-teal-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-teal" }), slide.tag]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 z-10 p-5 md:p-6 text-white transition-transform duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.72rem] font-semibold uppercase tracking-wider text-teal",
										children: slide.category || "Case Study"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 font-display text-lg font-semibold leading-snug md:text-xl text-white group-hover:text-teal-glow transition-colors",
									children: slide.title
								})]
							})
						]
					}, `${slide.title}-${index}`);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes portfolio-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
      ` })
		]
	});
}
var mobile_first_charter_bus_booking_system_default = "/assets/mobile-first-charter-bus-booking-system-CUw10fq3.webp";
var mental_wellness_emotional_support_app_default = "/assets/mental-wellness-emotional-support-app-CoXhLKlt.webp";
var data_analetics_default = "/assets/data-analetics-t5uWFES6.webp";
var Dribbble_Touren_default = "/assets/Dribbble_Touren-Cjlr-OFv.webp";
var programing_workflow_default = "/assets/programing_workflow-CV5drXiA.webp";
var social_media_campaign_dashboard_default = "/assets/social-media-campaign-dashboard-js_vCSVs.png";
var seo_analytics_dashboard_default = "/assets/seo-analytics-dashboard-Bv_nyRs-.png";
var google_ads_dashboard_default = "/assets/google-ads-dashboard-ClqroRl4.png";
var marketing_automation_platform_default = "/assets/marketing-automation-platform-CYyp8RB1.png";
var email_marketing_platform_default = "/assets/email-marketing-platform-CMcFcywk.png";
var brand_performance_dashboard_default = "/assets/brand-performance-dashboard-CPLEya5-.png";
var biomatric_access_default = "/assets/biomatric-access-BrNvyCIj.webp";
var investment_platform_finance_professionals_profitability_default = "/assets/investment-platform-finance-professionals-profitability-DI_g9xrh.webp";
var introducing_chatgpt_default = "/assets/introducing-chatgpt-DcY_OpwU.webp";
var learning_default = "/assets/learning-ADkZRtIL.webp";
var cyber_security_default = "/assets/cyber-security-Dkq04oEy.webp";
var Route$2 = createFileRoute("/portfolio")({
	head: () => ({
		meta: [
			{ title: "Portfolio & Case Studies — BLUETORN Technologies" },
			{
				name: "description",
				content: "Explore BLUETORN's enterprise software projects and digital marketing campaigns — custom ERPs, AI engines, mobile apps, SEO analytics, and performance growth."
			},
			{
				property: "og:title",
				content: "BLUETORN Portfolio & Case Studies"
			},
			{
				property: "og:description",
				content: "Real software products and growth campaigns engineered for clients worldwide."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	}),
	component: Portfolio
});
var allProjects = [
	{
		id: "charter-bus",
		img: mobile_first_charter_bus_booking_system_default,
		tag: "Mobile & Transit",
		category: "mobile",
		categoryLabel: "Mobility & Transit Platform",
		title: "Charter Bus Booking Engine",
		subtitle: "Real-Time Bus Fleet Dispatch & Reservation System",
		desc: "A mobile-first charter bus reservation engine featuring live vehicle geolocation, route optimization, driver assignments, and automated passenger SMS ticketing.",
		kpi: "3.4M Monthly Bookings",
		tech: [
			"Flutter",
			"Node.js",
			"PostGIS",
			"WebSockets"
		],
		heightClass: "h-[380px] md:h-[440px]"
	},
	{
		id: "wellness-app",
		img: mental_wellness_emotional_support_app_default,
		tag: "Healthcare",
		category: "mobile",
		categoryLabel: "Tele-Health & Wellness",
		title: "MindCare Emotional Support App",
		subtitle: "HIPAA-Compliant Mental Health Platform",
		desc: "Encrypted tele-therapy mobile app with mood tracking algorithms, live video consults, guided meditation pathways, and crisis intervention routing.",
		kpi: "450k Active Users",
		tech: [
			"React Native",
			"WebRTC",
			"Python",
			"AWS KMS"
		],
		heightClass: "h-[300px] md:h-[360px]"
	},
	{
		id: "data-analytics",
		img: data_analetics_default,
		tag: "AI & Big Data",
		category: "ai-cloud",
		categoryLabel: "Enterprise Data Platform",
		title: "Apex Big Data Analytics Suite",
		subtitle: "Real-Time Business Intelligence & Predictive Analytics",
		desc: "High-throughput data intelligence console processing multi-source ETL streams, real-time revenue projections, and predictive inventory anomaly detection.",
		kpi: "< 50ms Query Response",
		tech: [
			"ClickHouse",
			"Apache Spark",
			"Next.js",
			"Python"
		],
		heightClass: "h-[360px] md:h-[420px]"
	},
	{
		id: "touren-travel",
		img: Dribbble_Touren_default,
		tag: "Travel & SaaS",
		category: "software",
		categoryLabel: "Hospitality & Travel",
		title: "Touren Global Travel Marketplace",
		subtitle: "Multi-Currency Experience Booking Platform",
		desc: "Global travel marketplace connecting tour operators with travelers. Complete with multi-currency checkout, vendor management, and dynamic pricing engines.",
		kpi: "$18M Gross Merchandise Vol",
		tech: [
			"Next.js",
			"Stripe Connect",
			"PostgreSQL",
			"Redis"
		],
		heightClass: "h-[320px] md:h-[380px]"
	},
	{
		id: "dev-workflow",
		img: programing_workflow_default,
		tag: "Developer Tools",
		category: "software",
		categoryLabel: "DevOps & Cloud Tools",
		title: "Cloud DevWorkflow Suite",
		subtitle: "CI/CD & Microservice Orchestration Platform",
		desc: "Internal developer platform streamlining container deployments, automated pull request environments, and cluster observability for engineering teams.",
		kpi: "65% Faster Release Cycles",
		tech: [
			"Docker",
			"Kubernetes",
			"Go",
			"GraphQL"
		],
		heightClass: "h-[350px] md:h-[410px]"
	},
	{
		id: "social-media-campaign",
		img: social_media_campaign_dashboard_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "Social Performance",
		title: "OmniChannel Social Campaign Dashboard",
		subtitle: "Multi-Platform Audience Engagement & Attribution Engine",
		desc: "Unified marketing intelligence hub tracking cross-platform campaign reach across LinkedIn, Meta, and YouTube with real-time conversion attribution.",
		kpi: "+280% ROAS Improvement",
		tech: [
			"Meta Graph API",
			"LinkedIn Ads API",
			"BigQuery",
			"Looker"
		],
		heightClass: "h-[340px] md:h-[400px]"
	},
	{
		id: "seo-analytics",
		img: seo_analytics_dashboard_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "SEO & Growth",
		title: "Enterprise SEO Analytics Platform",
		subtitle: "Keyword Rank Tracking & SERP Visibility Engine",
		desc: "Automated organic search intelligence platform monitoring 100k+ keywords, technical SEO health, backlinks, and organic growth trajectory.",
		kpi: "+420% Organic Traffic",
		tech: [
			"Python Crawlers",
			"Search Console API",
			"Elasticsearch",
			"React"
		],
		heightClass: "h-[310px] md:h-[370px]"
	},
	{
		id: "google-ads",
		img: google_ads_dashboard_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "PPC & Paid Acquisition",
		title: "Google Ads Performance Hub",
		subtitle: "Automated Bidding & PPC ROI Management",
		desc: "Real-time Google Ads command center utilizing automated bid adjustments, landing page conversion scoring, and click fraud prevention filters.",
		kpi: "38% Lower Cost Per Acquisition",
		tech: [
			"Google Ads API",
			"FastAPI",
			"TypeScript",
			"Tailwind"
		],
		heightClass: "h-[370px] md:h-[430px]"
	},
	{
		id: "marketing-auto",
		img: marketing_automation_platform_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "Automation",
		title: "Marketing Automation Engine",
		subtitle: "Behavioral Lead Nurturing & Pipeline Trigger Suite",
		desc: "Visual workflow builder automating lead scoring, drip sequences, CRM contact synchronization, and deal velocity tracking.",
		kpi: "+190% MQL to SQL Ratio",
		tech: [
			"HubSpot API",
			"Zapier Webhooks",
			"Node.js",
			"Redis"
		],
		heightClass: "h-[330px] md:h-[390px]"
	},
	{
		id: "email-marketing",
		img: email_marketing_platform_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "Lifecycle Marketing",
		title: "Enterprise Email Journey Builder",
		subtitle: "Hyper-Personalized Customer Email Platform",
		desc: "High-volume transactional and promotional email platform with dynamic liquid templates, deliverability optimization, and automated A/B testing.",
		kpi: "48% Open Rate / 14% CTR",
		tech: [
			"SendGrid API",
			"AWS SES",
			"Next.js",
			"Tailwind"
		],
		heightClass: "h-[360px] md:h-[420px]"
	},
	{
		id: "brand-performance",
		img: brand_performance_dashboard_default,
		tag: "Digital Marketing",
		category: "marketing",
		categoryLabel: "Brand Analytics",
		title: "Brand Performance & Sentiment Console",
		subtitle: "AI-Powered Brand Health & Share of Voice Suite",
		desc: "Executive brand health monitoring platform capturing online brand sentiment, competitor share-of-voice, PR reach, and campaign ROI.",
		kpi: "Real-Time Brand Sentiment Tracking",
		tech: [
			"NLP Models",
			"Python",
			"PostgreSQL",
			"D3.js"
		],
		heightClass: "h-[320px] md:h-[380px]"
	},
	{
		id: "biometric-security",
		img: biomatric_access_default,
		tag: "Cyber Security",
		category: "software",
		categoryLabel: "Identity & Access Control",
		title: "BioMatrix Access Control Engine",
		subtitle: "Zero-Trust Enterprise Facility Security System",
		desc: "Biometric authentication and physical access control management platform with multi-factor facial recognition and automated audit logging.",
		kpi: "Zero Breach Record",
		tech: [
			"OpenCV",
			"Python",
			"OAuth 2.0",
			"WebSockets"
		],
		heightClass: "h-[350px] md:h-[410px]"
	},
	{
		id: "fintech-platform",
		img: investment_platform_finance_professionals_profitability_default,
		tag: "FinTech & Banking",
		category: "software",
		categoryLabel: "Financial Systems",
		title: "QuantEdge Investment Platform",
		subtitle: "Institutional Asset Management & Portfolio Terminal",
		desc: "High-frequency investment management software for wealth managers. Features real-time algorithmic portfolio balancing, risk analytics, and trade execution.",
		kpi: "$4.2B Assets Managed",
		tech: [
			"C++ Core",
			"React",
			"Kafka",
			"PostgreSQL"
		],
		heightClass: "h-[380px] md:h-[440px]"
	},
	{
		id: "ai-assistant",
		img: introducing_chatgpt_default,
		tag: "AI & LLMs",
		category: "ai-cloud",
		categoryLabel: "Enterprise AI Copilot",
		title: "OmniAI Corporate Knowledge Copilot",
		subtitle: "Private RAG System for Internal Enterprise Data",
		desc: "LLM-driven internal knowledge assistant indexing confidential corporate documentation, policies, and code repos with strict RBAC access controls.",
		kpi: "80% Time Savings on Internal Queries",
		tech: [
			"OpenAI",
			"LangChain",
			"Vector DB",
			"Pinecone"
		],
		heightClass: "h-[310px] md:h-[370px]"
	},
	{
		id: "edtech-portal",
		img: learning_default,
		tag: "EdTech & LMS",
		category: "software",
		categoryLabel: "Learning Management",
		title: "SkillVerse Learning Ecosystem",
		subtitle: "AI-Personalized Corporate Upskilling Platform",
		desc: "Enterprise LMS platform serving 100k+ employees with adaptive learning paths, interactive coding sandboxes, and skill certification tracking.",
		kpi: "94% Course Completion Rate",
		tech: [
			"Next.js",
			"GraphQL",
			"AWS CloudFront",
			"Tailwind"
		],
		heightClass: "h-[340px] md:h-[400px]"
	},
	{
		id: "cyber-security",
		img: cyber_security_default,
		tag: "Cyber Security",
		category: "ai-cloud",
		categoryLabel: "Threat Intelligence",
		title: "ShieldOps Threat Monitoring Console",
		subtitle: "AI Threat Detection & Incident Response Platform",
		desc: "Real-time SOC threat intelligence platform inspecting network traffic anomalies, automated firewall rule injection, and incident remediation.",
		kpi: "Sub-Second Threat Containment",
		tech: [
			"eBPF",
			"Go",
			"Elasticsearch",
			"React"
		],
		heightClass: "h-[360px] md:h-[420px]"
	}
];
function Portfolio() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const filteredProjects = activeCategory === "all" ? allProjects : allProjects.filter((p) => p.category === activeCategory);
	const carouselSlides = allProjects.map((p) => ({
		img: p.img,
		title: p.title,
		tag: p.tag,
		category: p.categoryLabel,
		heightClass: p.heightClass
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ink text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-60 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 pt-36 pb-12 md:px-8 md:pt-44 md:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "BLUETORN Portfolio" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl",
								children: [
									"The software & growth behind our clients'",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-teal-grad",
										children: "best years"
									}),
									"."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-2xl text-lg text-white/70",
								children: "Explore our real-world software products and digital marketing campaign results engineered for enterprises, SMEs, and fast-growing startups worldwide."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 text-sm text-white/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4.5 w-4.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Custom Product Engineering" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4.5 w-4.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zero Reused Mockups / 100% Unique Projects" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4.5 w-4.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enterprise Growth & Digital Marketing" })]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pt-4 pb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-4 max-w-7xl px-6 md:px-8 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-widest text-teal",
							children: "Featured Gallery Showcase — Infinite Auto Scroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:block text-xs text-white/50",
							children: "Hover to pause animation"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCarousel, { slides: carouselSlides })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Client Case Studies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-semibold text-balance md:text-5xl",
						children: "Built for measurable outcomes."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCategory("all"),
								className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${activeCategory === "all" ? "bg-ink text-teal shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }),
									" All Projects (",
									allProjects.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCategory("software"),
								className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${activeCategory === "software" ? "bg-ink text-teal shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3.5 w-3.5" }), " Software & ERP"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCategory("marketing"),
								className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${activeCategory === "marketing" ? "bg-ink text-teal shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-3.5 w-3.5" }), " Digital Marketing"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCategory("ai-cloud"),
								className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${activeCategory === "ai-cloud" ? "bg-ink text-teal shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-3.5 w-3.5" }), " AI & Cloud"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCategory("mobile"),
								className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${activeCategory === "mobile" ? "bg-ink text-teal shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-3.5 w-3.5" }), " Mobile Apps"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: filteredProjects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: i % 3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_30px_70px_-25px_oklch(0.72_0.13_190/0.3)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden bg-slate-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-4 top-4 rounded-full border border-white/20 bg-ink/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/20 px-3 py-1 text-[0.68rem] font-bold text-teal-glow backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3 w-3 text-teal" }), p.kpi]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-between p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[0.72rem] font-semibold uppercase tracking-wider text-teal",
											children: p.categoryLabel
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl font-semibold leading-snug group-hover:text-teal transition-colors",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-medium text-white/60",
										children: p.subtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: p.desc
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-border/60 pt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground",
											children: t
										}, t))
									})
								})]
							})]
						})
					}, p.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Digital Growth Division" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: "Data-driven digital marketing campaigns with proven ROI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "We don't just engineer software — our digital marketing division executes high-performance SEO, Google Ads, social media automation, and lifecycle lead nurturing campaigns that fill pipelines and accelerate MRR growth."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								to: "/contact",
								variant: "primary",
								children: ["Request Growth Strategy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
						children: [
							{
								label: "SEO Rankings",
								stat: "+420%",
								icon: ChartColumn
							},
							{
								label: "Ad Campaign ROAS",
								stat: "3.8x Avg",
								icon: Sparkles
							},
							{
								label: "CPA Reduction",
								stat: "-38%",
								icon: ShieldCheck
							},
							{
								label: "Lead Conversion",
								stat: "+190%",
								icon: Building2
							},
							{
								label: "Organic Reach",
								stat: "1.2M+",
								icon: Megaphone
							},
							{
								label: "Pipeline Value",
								stat: "$14M+",
								icon: Layers
							}
						].map((item, idx) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								i: idx % 3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-5 transition-all hover:border-teal/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-teal" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 font-display text-2xl font-bold text-foreground",
											children: item.stat
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs text-muted-foreground font-medium",
											children: item.label
										})
									]
								})
							}, item.label);
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 py-24 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Start Your Engagement" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-semibold md:text-5xl",
							children: "Your software platform or digital campaign, next on this list."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-xl text-white/70",
							children: "Partner with BLUETORN to design, engineer, and scale your digital products with enterprise-grade craft and measurable business growth."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								to: "/contact",
								variant: "primary",
								children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					})
				]
			})
		})
	] });
}
var $$splitComponentImporter$1 = () => import("./services-DLP0zOmd.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Software, AI, ERP, CRM, SaaS & Cloud | BLUETORN" },
			{
				name: "description",
				content: "Custom software, web and mobile development, AI, ERP, CRM, SaaS, cloud, UI/UX, automation and maintenance — engineered for enterprise outcomes."
			},
			{
				property: "og:title",
				content: "BLUETORN Services"
			},
			{
				property: "og:description",
				content: "Full-stack engineering services across software, AI, ERP, CRM, cloud and more."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./solutions-DpSftb8R.mjs");
var Route = createFileRoute("/solutions")({
	head: () => ({
		meta: [
			{ title: "Solutions — MVPs, Enterprise & AI Programs | BLUETORN" },
			{
				name: "description",
				content: "Programmatic engagements from startup MVPs to enterprise platforms, digital transformation, AI integration, cloud migration and SaaS launches."
			},
			{
				property: "og:title",
				content: "BLUETORN Solutions"
			},
			{
				property: "og:description",
				content: "Programmatic solutions for founders, enterprises and modernisation programs."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/solutions"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var IndustriesRoute = Route$3.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$7
});
var PortfolioRoute = Route$2.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$7
});
var ServicesRoute = Route$1.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$7
});
var SolutionsRoute = Route.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$7
});
var IndustriesSlugRoute = Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => IndustriesRoute
});
var ServicesSlugRoute = Route$9.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var SolutionsSlugRoute = Route$10.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SolutionsRoute
});
var IndustriesRouteChildren = { IndustriesSlugRoute };
var IndustriesRouteWithChildren = IndustriesRoute._addFileChildren(IndustriesRouteChildren);
var ServicesRouteChildren = { ServicesSlugRoute };
var ServicesRouteWithChildren = ServicesRoute._addFileChildren(ServicesRouteChildren);
var SolutionsRouteChildren = { SolutionsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	IndustriesRoute: IndustriesRouteWithChildren,
	PortfolioRoute,
	ServicesRoute: ServicesRouteWithChildren,
	SolutionsRoute: SolutionsRoute._addFileChildren(SolutionsRouteChildren)
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
