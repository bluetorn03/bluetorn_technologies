import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Cloud, Code2, Cog, Database, Globe, LineChart, Palette, Plug, ShieldCheck, ShoppingBag, Smartphone, Workflow, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Software, AI, ERP, CRM, SaaS & Cloud | BLUETORN" },
      { name: "description", content: "Custom software, web and mobile development, AI, ERP, CRM, SaaS, cloud, UI/UX, automation and maintenance — engineered for enterprise outcomes." },
      { property: "og:title", content: "BLUETORN Services" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const groups = [
  {
    id: "software", icon: Code2, title: "Software Development",
    desc: "Bespoke enterprise applications, business systems and desktop software.",
    items: ["Custom Software Development", "Enterprise Software", "Business Software", "Desktop Applications"],
  },
  {
    id: "web", icon: Globe, title: "Web Development",
    desc: "Corporate sites, web apps, PWAs, customer portals and admin dashboards.",
    items: ["Corporate Websites", "Web Applications", "Progressive Web Apps", "Customer Portals", "Admin Dashboards"],
  },
  {
    id: "mobile", icon: Smartphone, title: "Mobile Development",
    desc: "Native and cross-platform iOS and Android apps with production-grade UX.",
    items: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    id: "ai", icon: BrainCircuit, title: "AI Solutions",
    desc: "LLM apps, RAG systems, AI agents and business automation.",
    items: ["AI Chatbots", "Generative AI", "AI Automation", "AI Agents", "LLM Integration"],
  },
  {
    id: "erp", icon: Database, title: "ERP Solutions",
    desc: "Vertical-specific ERPs built around your workflows, not generic templates.",
    items: ["Manufacturing ERP", "School ERP", "Hospital ERP", "Inventory ERP", "HR & Payroll", "Accounting"],
  },
  {
    id: "crm", icon: Workflow, title: "CRM Development",
    desc: "Sales, service and lead-management CRMs tailored to your process.",
    items: ["Sales CRM", "Customer CRM", "Lead Management", "Service Management"],
  },
  {
    id: "saas", icon: Cloud, title: "SaaS Platforms",
    desc: "Multi-tenant, subscription-ready cloud products from MVP to scale.",
    items: ["Multi-Tenant SaaS", "Subscription Platforms", "Cloud Products"],
  },
  {
    id: "cloud", icon: Cloud, title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP infrastructure, cloud migration and CI/CD pipelines.",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Cloud Migration", "DevOps"],
  },
  {
    id: "uiux", icon: Palette, title: "UI / UX Design",
    desc: "Product, dashboard and mobile design systems built for conversion.",
    items: ["Website UI", "Mobile UI", "Dashboard Design", "Product Design", "Wireframing", "Prototyping"],
  },
  {
    id: "api", icon: Plug, title: "API Development",
    desc: "REST APIs, third-party integrations and payment/messaging gateways.",
    items: ["REST APIs", "Payment Gateway", "WhatsApp API", "SMS API", "Email API", "Integrations"],
  },
  {
    id: "automation", icon: Cog, title: "Automation",
    desc: "Business process automation, internal tools and robotic workflows.",
    items: ["Business Process Automation", "Workflow Automation", "Internal Tools", "RPA"],
  },
  {
    id: "marketing", icon: LineChart, title: "Digital Marketing",
    desc: "SEO, performance marketing, branding and content strategy.",
    items: ["SEO", "Social Media Marketing", "Performance Marketing", "Branding", "Content Marketing"],
  },
  {
    id: "maintenance", icon: Wrench, title: "Maintenance & Support",
    desc: "Ongoing engineering, security updates, optimization and AMC.",
    items: ["Software Maintenance", "Performance Optimization", "Security Updates", "Technical Support", "AMC"],
  },
  {
    id: "ecommerce", icon: ShoppingBag, title: "E-Commerce",
    desc: "B2B, B2C and multi-vendor commerce platforms with inventory.",
    items: ["B2B Platforms", "B2C Platforms", "Multi-Vendor Marketplace", "Inventory Systems"],
  },
];

const industries = [
  "Manufacturing", "Healthcare", "Education", "Retail", "E-Commerce", "Logistics",
  "Real Estate", "Hospitality", "Finance", "Banking", "Insurance", "Construction",
];

function Services() {
  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>Services & Solutions</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            One engineering partner. <span className="text-teal-grad">Every capability.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            From custom software and AI to ERP, CRM, SaaS and cloud — BLUETORN delivers the full
            engineering stack under one roof, with senior teams and enterprise-grade governance.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.id} i={i % 3}>
                <article id={g.id} className="group h-full rounded-3xl border border-border bg-card p-7 card-hover">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold">{g.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Industries We Serve</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Domain fluency across regulated and fast-moving sectors.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <ShieldCheck className="h-4 w-4 text-teal" />
                <span className="text-sm font-medium">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise" className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Not sure which service fits?</h2>
          <p className="mt-4 text-white/70">Book a 30-minute discovery call. We&apos;ll map the right approach to your goals.</p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">
              Talk to an engineer <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
