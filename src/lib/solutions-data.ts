import {
  Rocket, Building, RefreshCcw, BrainCircuit, Cloud, ShieldCheck, Boxes, Users,
  type LucideIcon,
} from "lucide-react";

export type SolutionDef = {
  slug: string;
  icon: LucideIcon;
  name: string;
  eyebrow: string;
  hero: string;
  overview: string;
  problems: { t: string; d: string }[];
  architecture: { n: string; t: string; d: string }[];
  implementation: { n: string; t: string; d: string }[];
  benefits: { t: string; d: string }[];
  industries: string[];
};

const commonImpl = [
  { n: "01", t: "Assess", d: "Current-state audit of tech, data, processes and org readiness." },
  { n: "02", t: "Design", d: "Target architecture, migration plan and rollout sequencing." },
  { n: "03", t: "Build", d: "Parallel engineering across streams with weekly executive review." },
  { n: "04", t: "Adopt", d: "Training, change management and phased cutover with rollback plans." },
];

export const solutions: SolutionDef[] = [
  {
    slug: "startup-mvp",
    icon: Rocket,
    name: "Startup MVP",
    eyebrow: "For Founders",
    hero: "Zero to paying customers in weeks — engineered like it'll scale.",
    overview:
      "For founders who need to ship a real product fast without carrying tech debt into year two. We compress discovery, design and build into 8–12 weeks and give you a foundation that scales past the first thousand users.",
    problems: [
      { t: "Runway is short", d: "You can't spend 9 months in build mode before customer signal." },
      { t: "Tech debt kills v2", d: "Cheap early builds usually get rewritten within a year." },
      { t: "Founder-led everything", d: "You need a partner that takes real ownership of engineering decisions." },
    ],
    architecture: [
      { n: "01", t: "Product frame", d: "10 core user journeys — nothing else in v1." },
      { n: "02", t: "Modular stack", d: "Next.js + typed API + Postgres — boring, proven, extendable." },
      { n: "03", t: "Auth & billing", d: "Auth, subscriptions and admin console built once, right." },
      { n: "04", t: "Analytics day one", d: "Event schema and product analytics wired before launch." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "Ship in 8–12 weeks", d: "Real product, real users, real revenue signal — inside a single quarter." },
      { t: "No throwaway code", d: "The MVP is the foundation of v2 — not a prototype you throw away." },
      { t: "Investor-ready", d: "Clean architecture, docs and metrics that hold up in technical DD." },
    ],
    industries: ["SaaS", "Fintech", "HealthTech", "EdTech", "PropTech"],
  },
  {
    slug: "enterprise-platform",
    icon: Building,
    name: "Enterprise Platform",
    eyebrow: "For Enterprises",
    hero: "Mission-critical software for organisations that measure downtime in lakhs per hour.",
    overview:
      "For enterprises replacing 3–7 fragmented legacy systems with one modern, modular platform — with the security, audit and reliability that enterprise procurement and IT actually demand.",
    problems: [
      { t: "Legacy sprawl", d: "5+ systems doing overlapping work, integrated with fragile scripts." },
      { t: "Slow change", d: "Even small features take quarters because change is scary." },
      { t: "Audit fatigue", d: "Every audit means weeks of manual evidence gathering." },
    ],
    architecture: [
      { n: "01", t: "Modular monolith", d: "Bounded contexts, clear domain boundaries, one deployable when it should be." },
      { n: "02", t: "Event bus", d: "Domain events tie modules together — no tight coupling." },
      { n: "03", t: "RBAC + audit", d: "Role-based access and signed audit trails on every mutation." },
      { n: "04", t: "Observability", d: "Traces, logs, metrics unified — incidents diagnosed in minutes." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "One platform", d: "5 legacy tools consolidated into one modular system your team owns." },
      { t: "Ship weekly", d: "Modernised delivery means new features monthly, not yearly." },
      { t: "Audit-ready", d: "Compliance evidence generated automatically, not gathered manually." },
    ],
    industries: ["Manufacturing", "Finance", "Healthcare", "Insurance", "Logistics"],
  },
  {
    slug: "digital-transformation",
    icon: RefreshCcw,
    name: "Digital Transformation",
    eyebrow: "For Modernisation",
    hero: "Modernise legacy systems without a big-bang rewrite that never ships.",
    overview:
      "For businesses running on ageing ERP, .NET or PHP systems that can't move at market speed. We modernise incrementally — new capabilities alongside the old, with a phased path off legacy.",
    problems: [
      { t: "Frozen roadmap", d: "The old system can't take new features without breaking somewhere else." },
      { t: "Talent risk", d: "Fewer engineers want to touch legacy stacks every year." },
      { t: "Data trapped", d: "Reporting requires overnight exports and manual reconciliation." },
    ],
    architecture: [
      { n: "01", t: "Strangler pattern", d: "New capabilities built alongside legacy; the old system shrinks over time." },
      { n: "02", t: "API gateway", d: "One clean API layer over old and new — clients don't care which is answering." },
      { n: "03", t: "Change-data capture", d: "Data streamed from legacy to modern in real time, no big-bang migration." },
      { n: "04", t: "Decommission plan", d: "Each phase ends with a legacy module retired — not just wrapped." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "Zero downtime", d: "Business runs the whole way through the transformation." },
      { t: "Value in phase 1", d: "First measurable business win within 90 days — not 18 months out." },
      { t: "Reduced risk", d: "Incremental cutover means each phase can be rolled back independently." },
    ],
    industries: ["Manufacturing", "Banking", "Insurance", "Government", "Utilities"],
  },
  {
    slug: "ai-integration",
    icon: BrainCircuit,
    name: "AI Integration",
    eyebrow: "For AI-First Ops",
    hero: "Embed AI where it actually moves the number — with guardrails and measured ROI.",
    overview:
      "For teams past the AI-demo stage and ready to put practical AI into production — grounded on their own data, measured against baselines, and governed by real guardrails.",
    problems: [
      { t: "Demos ≠ production", d: "AI features that impress in a meeting fall over in the wild." },
      { t: "Hallucination risk", d: "General-purpose LLMs make up plausible answers on your data." },
      { t: "No measurable ROI", d: "Nobody knows if the AI feature actually saved time or improved conversion." },
    ],
    architecture: [
      { n: "01", t: "Retrieval layer", d: "Your data indexed with embeddings and metadata — LLMs cite it, not invent." },
      { n: "02", t: "Agent orchestration", d: "Tool-use, planning and human-in-loop for anything with side effects." },
      { n: "03", t: "Evals & guardrails", d: "Regression suites, PII redaction and prompt-injection defence per feature." },
      { n: "04", t: "Cost & latency", d: "Model routing per query so 80% of traffic runs on cheap models." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "Grounded answers", d: "Answers with citations, confidence and traceable retrieval — not black-box outputs." },
      { t: "Measured impact", d: "Every AI feature ships with a baseline number and a target it must beat." },
      { t: "Safe for production", d: "PII redaction, evals and audit trails so AI can touch real workflows." },
    ],
    industries: ["Finance", "Healthcare", "Legal", "E-Commerce", "SaaS"],
  },
  {
    slug: "cloud-migration",
    icon: Cloud,
    name: "Cloud Migration",
    eyebrow: "For Infrastructure",
    hero: "Move to the cloud with cost, uptime and DR done right the first time.",
    overview:
      "For teams migrating from on-prem or ageing hosting to modern cloud infrastructure — with the IaC, observability and disaster recovery that make cloud actually cheaper and more reliable.",
    problems: [
      { t: "Lift-and-shift trap", d: "Moving VMs to EC2 without refactoring makes cloud more expensive than on-prem." },
      { t: "Fragile deploys", d: "Manual deployment steps that break on Fridays." },
      { t: "No DR plan", d: "Backups exist; nobody has restored from them in 18 months." },
    ],
    architecture: [
      { n: "01", t: "Landing zone", d: "Multi-account, VPC, IAM and org policies designed before workloads move." },
      { n: "02", t: "Terraform everything", d: "Every resource defined in code — no click-ops in production." },
      { n: "03", t: "CI/CD & canaries", d: "Blue-green and canary deploys with automatic rollback on error budgets." },
      { n: "04", t: "DR & backups tested", d: "Restore drills quarterly; RTO/RPO defined and honoured." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "40–60% cost reduction", d: "Rightsized workloads, spot compute and reserved commitments — not lift-and-shift bills." },
      { t: "Deploy 10× faster", d: "One-click deploys with automated rollback replace multi-hour maintenance windows." },
      { t: "DR that actually works", d: "RTO and RPO tested — not assumed." },
    ],
    industries: ["SaaS", "Manufacturing", "Finance", "Healthcare", "E-Commerce"],
  },
  {
    slug: "cybersecurity",
    icon: ShieldCheck,
    name: "Cybersecurity & Compliance",
    eyebrow: "For Security Posture",
    hero: "Security engineered in — not bolted on before an audit.",
    overview:
      "For businesses that hold regulated data or serve enterprise customers who ask for security artefacts. We harden your stack, help you pass SOC 2 / ISO 27001 / DPDP and set up the practices that keep it that way.",
    problems: [
      { t: "Audit-driven security", d: "Controls that get set up two weeks before the audit and drift after." },
      { t: "Unclear posture", d: "Nobody in the org can honestly answer 'are we secure?'" },
      { t: "Slow enterprise sales", d: "Every enterprise deal stalls on a 200-question security review." },
    ],
    architecture: [
      { n: "01", t: "Identity & access", d: "SSO, SCIM, MFA and least-privilege access as defaults." },
      { n: "02", t: "Secure SDLC", d: "SAST, DAST, dependency scanning and signed builds on every PR." },
      { n: "03", t: "Data protection", d: "Encryption at rest and in transit, tokenisation and DPDP-aligned data handling." },
      { n: "04", t: "Incident response", d: "Runbooks, alerts and drills so the first real incident isn't the first rehearsal." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "SOC 2 / ISO / DPDP ready", d: "Controls, evidence and documentation aligned to the frameworks your buyers ask for." },
      { t: "Fewer breaches", d: "Real defence-in-depth — not a checkbox exercise." },
      { t: "Faster enterprise deals", d: "Security review packs ready before the buyer asks." },
    ],
    industries: ["Fintech", "Healthcare", "SaaS", "Government", "Legal"],
  },
  {
    slug: "saas-launch",
    icon: Boxes,
    name: "SaaS Launch",
    eyebrow: "For B2B SaaS",
    hero: "From idea to paying B2B tenants — with multi-tenancy done right from day one.",
    overview:
      "For teams building a new SaaS product and refusing to spend v2 rewriting multi-tenancy, billing and admin. We deliver a launch-ready platform that handles tenants, plans, entitlements and enterprise buyers.",
    problems: [
      { t: "Multi-tenancy done wrong", d: "Getting isolation, per-tenant config and data export right after launch is painful." },
      { t: "Billing chaos", d: "Custom invoices, trials, seat pricing and proration are easy to underestimate." },
      { t: "No admin surface", d: "Support and sales end up running the product from the database console." },
    ],
    architecture: [
      { n: "01", t: "Tenant model", d: "Row-level or schema-per-tenant isolation — chosen for your data profile." },
      { n: "02", t: "Billing plane", d: "Stripe / Paddle with trials, metering, dunning and proration end-to-end." },
      { n: "03", t: "Feature flags", d: "Plan-based entitlements and gradual rollouts as first-class product primitives." },
      { n: "04", t: "Admin console", d: "Impersonation, refunds, override flags and audit trails as a real product surface." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "Launch in 12 weeks", d: "MVP with real tenants and real billing inside a quarter." },
      { t: "Enterprise-ready path", d: "SSO, SCIM and audit ready when your first enterprise buyer asks." },
      { t: "Ops that scale", d: "Support and finance teams operate through the product, not the database." },
    ],
    industries: ["Fintech", "MarTech", "HRTech", "HealthTech", "EdTech"],
  },
  {
    slug: "internal-tools",
    icon: Users,
    name: "Internal Tools & Ops",
    eyebrow: "For Ops Teams",
    hero: "Give ops teams their week back with internal tools built for the way they actually work.",
    overview:
      "For fast-growing companies whose internal ops still runs on spreadsheets, Google Forms and Slack. We replace the sticky-tape with production-grade internal tools that scale with the team.",
    problems: [
      { t: "Spreadsheet chaos", d: "Critical workflows depend on 5 Google Sheets nobody wants to touch." },
      { t: "No approvals", d: "Discounts, refunds and access requests happen over DM." },
      { t: "Reporting is manual", d: "Every leadership review triggers a scramble to build the same charts again." },
    ],
    architecture: [
      { n: "01", t: "Central data layer", d: "One source of truth for orders, customers and users — the tools query this." },
      { n: "02", t: "Modular internal apps", d: "Each ops team gets a focused tool — refunds, KYC review, onboarding, etc." },
      { n: "03", t: "Approvals & audit", d: "Every write action passes through approval rules and lands in an audit trail." },
      { n: "04", t: "Reporting layer", d: "Metabase / Superset dashboards on the same underlying data." },
    ],
    implementation: commonImpl,
    benefits: [
      { t: "Ops week reclaimed", d: "Repetitive manual work replaced by 3–5 clicks in a purpose-built tool." },
      { t: "Errors drop", d: "Guardrails, validations and audit stop the copy-paste mistakes." },
      { t: "Real visibility", d: "Leadership dashboards refresh live — no more Monday scramble." },
    ],
    industries: ["Fintech", "E-Commerce", "Logistics", "Healthcare", "Insurance"],
  },
];

export const solutionsBySlug: Record<string, SolutionDef> = Object.fromEntries(
  solutions.map((s) => [s.slug, s]),
);
