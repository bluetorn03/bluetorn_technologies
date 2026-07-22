import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { PortfolioCarousel } from "@/components/site/PortfolioCarousel";
import teamCollab from "@/assets/team-collab.jpg";
import cloudInfra from "@/assets/cloud-infra.jpg";
import dashboard from "@/assets/dashboard.jpg";
import developer from "@/assets/developer.jpg";
import heroWave from "@/assets/hero-wave.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Case Studies & Flagship Projects | BLUETORN" },
      { name: "description", content: "Selected work from BLUETORN Technologies — ERP systems, SaaS platforms, AI copilots and enterprise web architectures." },
      { property: "og:title", content: "BLUETORN Portfolio" },
      { property: "og:description", content: "Case studies across ERP, SaaS, AI, mobile and web." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const carousel = [
  { img: dashboard, tag: "ERP", title: "Manufacturing ERP Suite" },
  { img: teamCollab, tag: "SaaS", title: "Customer CRM Cloud" },
  { img: cloudInfra, tag: "Cloud & AI", title: "AI Operations Console" },
  { img: developer, tag: "Web", title: "Enterprise Corporate Web" },
  { img: heroWave, tag: "Mobile", title: "Field Operations App" },
  { img: dashboard, tag: "Analytics", title: "Retail Insights Platform" },
  { img: teamCollab, tag: "Product", title: "B2B SaaS Launch" },
];

const projects = [
  { img: dashboard, tag: "ERP", title: "Manufacturing ERP Suite", desc: "Inventory, HR, finance and shop-floor reporting unified in one modular platform.", tech: ["React", "Node.js", "PostgreSQL"] },
  { img: teamCollab, tag: "SaaS", title: "Customer CRM Cloud", desc: "Multi-tenant CRM with role-based access, automations and real-time dashboards.", tech: ["Next.js", "TypeScript", "AWS"] },
  { img: cloudInfra, tag: "Cloud & AI", title: "AI Operations Console", desc: "LLM-powered internal console with RAG on private data and workflow automation.", tech: ["OpenAI", "LangChain", "Redis"] },
  { img: developer, tag: "Web", title: "Enterprise Corporate Web", desc: "High-performance corporate website with SEO, CMS and analytics-driven personalization.", tech: ["Next.js", "Tailwind", "Cloudflare"] },
  { img: heroWave, tag: "Mobile", title: "Field Operations App", desc: "Cross-platform mobile app for field agents with offline-first sync and geofencing.", tech: ["Flutter", "Firebase", "Node.js"] },
  { img: dashboard, tag: "Analytics", title: "Retail Insights Platform", desc: "Real-time retail analytics with forecasting models and anomaly detection.", tech: ["Python", "FastAPI", "PostgreSQL"] },
];

function Portfolio() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-16 md:px-8 md:pt-48">
          <SectionEyebrow>Portfolio</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            The software behind our clients&apos; <span className="text-teal-grad">best years</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            A selection of platforms, products and internal systems we&apos;ve designed and engineered
            for teams across manufacturing, retail, healthcare and beyond.
          </p>
        </div>

        <div className="relative pb-24">
          <PortfolioCarousel slides={carousel} />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title + i} i={i % 2}>
                <article className="group overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-ink">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Your platform, next on this list.</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Start a Project</MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
