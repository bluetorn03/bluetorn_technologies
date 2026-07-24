import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { G as Clock, P as GraduationCap, Q as Briefcase, T as Mail, Z as Building2, h as Send, w as MapPin, x as MessageSquare, y as Phone } from "../_libs/lucide-react.mjs";
import { r as SiteLayout, t as Logo } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BuwFspsV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inquiryTypes = [
	{
		id: "general",
		label: "General",
		desc: "Questions, media, partnerships.",
		icon: MessageSquare
	},
	{
		id: "business",
		label: "Business",
		desc: "Enterprise & B2B enquiries.",
		icon: Building2
	},
	{
		id: "project",
		label: "Project",
		desc: "Scope, budget and timelines.",
		icon: Briefcase
	},
	{
		id: "career",
		label: "Career",
		desc: "Join the engineering team.",
		icon: GraduationCap
	}
];
var countries = [
	{
		code: "+91",
		name: "India"
	},
	{
		code: "+1",
		name: "USA / Canada"
	},
	{
		code: "+44",
		name: "UK"
	},
	{
		code: "+61",
		name: "Australia"
	},
	{
		code: "+65",
		name: "Singapore"
	},
	{
		code: "+971",
		name: "UAE"
	},
	{
		code: "+49",
		name: "Germany"
	},
	{
		code: "+33",
		name: "France"
	},
	{
		code: "+81",
		name: "Japan"
	},
	{
		code: "+27",
		name: "South Africa"
	}
];
function Contact() {
	const [type, setType] = (0, import_react.useState)("business");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [country, setCountry] = (0, import_react.useState)("India");
	const [dial, setDial] = (0, import_react.useState)("+91");
	const onSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		await new Promise((r) => setTimeout(r, 700));
		setSending(false);
		e.target.reset();
		toast.success(type === "career" ? "Application received" : type === "project" ? "Project brief received" : "Message received", { description: "Our team will reply within one working day." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-ink text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 pt-40 pb-16 md:px-8 md:pt-48",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl",
					children: [
						"Let's build something ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal-grad",
							children: "premium"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-lg text-white/70",
					children: "Choose the right form for your enquiry — general, business, project or career — and our team will reply within one working day."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-20 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-3xl border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12 w-12" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-2xl font-semibold",
							children: "BLUETORN Technologies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Smarter Technology. Stronger Future."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "Head Office"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-muted-foreground",
										children: [
											"Office 01 & 02, Sai Sagar Apartment,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Ulwe, Navi Mumbai – 410206,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Maharashtra, India"
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/80 bg-secondary/50 p-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-wider text-teal",
											children: "Business Enquiry"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:info@bluetorn.com",
											className: "flex items-center gap-3 text-foreground hover:text-teal transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "Business Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "info@bluetorn.com"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+917788996579",
											className: "flex items-center gap-3 text-foreground hover:text-teal transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "Business Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "+91 77889 96579"
											})] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/80 bg-secondary/50 p-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-wider text-teal",
											children: "General Enquiry"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:contact@bluetorn.com",
											className: "flex items-center gap-3 text-foreground hover:text-teal transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "General Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "contact@bluetorn.com"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+917788996549",
											className: "flex items-center gap-3 text-foreground hover:text-teal transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "General Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: "+91 7788996549"
											})] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-5 w-5 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "Working Hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Mon – Sat, 10:00 AM – 7:00 PM (IST)"
									})] })]
								})
							]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					i: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-8 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-4",
							children: inquiryTypes.map((t) => {
								const Icon = t.icon;
								const active = type === t.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setType(t.id),
									className: `flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all ${active ? "border-teal bg-teal/10 shadow-[0_20px_40px_-25px_oklch(0.72_0.13_190/0.5)]" : "border-border bg-background hover:border-teal/50"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-9 w-9 place-items-center rounded-lg ${active ? "bg-teal text-white" : "bg-teal/10 text-teal"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold",
										children: t.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[0.7rem] text-muted-foreground",
										children: t.desc
									})] })]
								}, t.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 md:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Full name",
											name: "name",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: type === "career" ? "Personal email" : "Work email",
											name: "email",
											type: "email",
											required: true
										}),
										type !== "career" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Company",
											name: "company",
											required: type === "business" || type === "project"
										}),
										type === "career" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Current role / title",
											name: "role"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
												children: "Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-[120px_1fr] gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													name: "dial",
													value: dial,
													onChange: (e) => setDial(e.target.value),
													className: "rounded-2xl border border-border bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-teal",
													children: countries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
														value: c.code,
														children: [
															c.code,
															" ",
															c.name
														]
													}, c.code))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													name: "phone",
													type: "tel",
													className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
												children: "Country"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												name: "country",
												value: country,
												onChange: (e) => setCountry(e.target.value),
												className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal",
												children: countries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.name }, c.name))
											})]
										})
									]
								}),
								type === "project" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-5 md:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Service of interest",
											name: "service",
											options: [
												"Custom Software",
												"Web Development",
												"Mobile App",
												"AI Solutions",
												"ERP",
												"CRM",
												"SaaS",
												"Cloud & DevOps",
												"UI/UX Design",
												"Maintenance",
												"E-Commerce"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Budget range (USD)",
											name: "budget",
											options: [
												"Under $10k",
												"$10k – $25k",
												"$25k – $75k",
												"$75k – $200k",
												"$200k+"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Timeline",
											name: "timeline",
											options: [
												"ASAP (< 4 weeks)",
												"1 – 3 months",
												"3 – 6 months",
												"6 – 12 months",
												"Exploring"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Project stage",
											name: "stage",
											options: [
												"Concept / idea",
												"Discovery / planning",
												"In development",
												"Rebuild / migration"
											]
										})
									]
								}),
								type === "business" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-5 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "Company size",
										name: "size",
										options: [
											"1 – 10",
											"11 – 50",
											"51 – 200",
											"201 – 1000",
											"1000+"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "Industry",
										name: "industry",
										options: [
											"Manufacturing",
											"Healthcare",
											"Finance",
											"Retail",
											"E-Commerce",
											"Logistics",
											"Real Estate",
											"Hospitality",
											"Insurance",
											"Construction",
											"Education",
											"Other"
										]
									})]
								}),
								type === "career" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-5 md:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Position of interest",
											name: "position",
											options: [
												"Frontend Engineer",
												"Backend Engineer",
												"Full-stack Engineer",
												"Mobile Engineer",
												"AI / ML Engineer",
												"DevOps Engineer",
												"Product Designer",
												"QA Engineer",
												"Engineering Manager",
												"Internship",
												"Other"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: "Experience",
											name: "experience",
											options: [
												"0 – 1 year",
												"1 – 3 years",
												"3 – 5 years",
												"5 – 10 years",
												"10+ years"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Portfolio / LinkedIn URL",
											name: "portfolio",
											type: "url"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Resume link (Drive / Dropbox)",
											name: "resume",
											type: "url"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: type === "career" ? "Tell us about yourself" : "Project details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										required: true,
										rows: 5,
										placeholder: type === "career" ? "What excites you about BLUETORN? Highlight projects you're proud of…" : "Tell us about your goals, timelines and any current systems…",
										className: "w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: sending,
									className: "btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal hover:text-ink disabled:opacity-70",
									children: [sending ? "Sending…" : type === "career" ? "Submit application" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
								})
							]
						})]
					})
				})]
			})
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
	})] });
}
function SelectField({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		name,
		defaultValue: "",
		className: "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			disabled: true,
			children: "Select…"
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
	})] });
}
//#endregion
export { Contact as component };
