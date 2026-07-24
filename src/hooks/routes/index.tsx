import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers,
  LineChart,
  Lock,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Typewriter } from "@/components/site/Typewriter";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { TechMarquee } from "@/components/site/TechMarquee";
import { industries as industriesData } from "@/lib/industries-data";
import heroVideo from "@/assets/images/3D_hero_animation_premium_design.mp4";
import teamCollab from "@/assets/images/businessman-thinking.webp";
import cloudInfra from "@/assets/images/claud-computing.webp";
import dashboard from "@/assets/images/data_analesys.webp";
import developer from "@/assets/images/react_developer.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
      {
        name: "description",
        content:
          "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India.",
      },
      { property: "og:title", content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { slug: "software-development", icon: Code2, title: "Custom Software", desc: "Bespoke engineering for mission-critical business logic and scale.", tags: ["Architecture", "APIs", "Security"] },
  { slug: "web-development", icon: Layers, title: "Web Development", desc: "Corporate sites, dashboards and web apps engineered for speed and SEO.", tags: ["Next.js", "React", "PWA"] },
  { slug: "mobile-development", icon: Smartphone, title: "Mobile Apps", desc: "iOS, Android and cross-platform apps with native-grade UX.", tags: ["Flutter", "React Native", "Swift"] },
  { slug: "ai-solutions", icon: BrainCircuit, title: "AI Solutions", desc: "LLM agents, RAG systems and AI automations tailored to your data.", tags: ["OpenAI", "LangChain", "RAG"] },
  { slug: "erp-solutions", icon: Database, title: "ERP Solutions", desc: "Manufacturing, hospital, school and inventory ERP with role-based access.", tags: ["Workflow", "RBAC", "Reporting"] },
  { slug: "crm-development", icon: Workflow, title: "CRM Development", desc: "Sales, service and lead-management CRMs built around your process.", tags: ["Pipelines", "Automation", "Insights"] },
  { slug: "saas-development", icon: Boxes, title: "SaaS Platforms", desc: "Multi-tenant, subscription-ready SaaS products from MVP to scale.", tags: ["Multi-tenant", "Billing", "Auth"] },
  { slug: "cloud-devops", icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP infrastructure, cloud migration and CI/CD pipelines.", tags: ["AWS", "Docker", "CI/CD"] },
  { slug: "ui-ux-design", icon: Palette, title: "UI / UX Design", desc: "Product, dashboard and mobile design systems built for conversion.", tags: ["Product", "Design Systems", "Research"] },
];

const process = [
  { n: "01", title: "Discovery", desc: "We map goals, users and constraints — then align on outcomes, KPIs and success metrics before writing a single line of code." },
  { n: "02", title: "Design", desc: "Wireframes, prototypes and high-fidelity interfaces with a componentized design system your engineers can build against." },
  { n: "03", title: "Engineering", desc: "Two-week sprints, code reviews, automated tests and observability baked in from day one. You see progress every week." },
  { n: "04", title: "Launch & Scale", desc: "Blue/green deploys, performance tuning and 24×7 monitoring. We stay on as a long-term engineering partner, not a vendor." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="hero-video h-full w-full object-cover scale-[1.03]"
            style={{
              transform: "translateZ(0) scale(1.03)",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
          {/* Refined dark overlays — reduced opacity for ~35-40% video visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/45" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.19_0.03_200/0.5),oklch(0.13_0.025_200/0.7)_90%)]" />
          <div className="absolute inset-0 grid-fade opacity-30" />
          {/* Subtle vignette for depth — guides eyes toward center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 45%, oklch(0.12 0.025 200 / 0.55) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-8 md:pt-36 md:pb-24">
          <div className="max-w-3xl">
            <div>
              <Reveal>
                <SectionEyebrow>Official Website</SectionEyebrow>
              </Reveal>

              <Reveal i={1}>
                <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] text-balance md:text-7xl lg:text-[5.25rem]">
                  Engineering
                  <br />
                  <Typewriter
                    words={[
                      "AI-First Software.",
                      "Custom Software.",
                      "Digital Transformation.",
                      "Enterprise Solutions.",
                      "Cloud & AI Innovation.",
                    ]}
                  />
                </h1>
              </Reveal>

              <Reveal i={2}>
                <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/70">
                  BLUETORN Technologies designs, engineers and deploys high-trust software —
                  ERP systems, AI platforms and web architectures — for startups, SMEs and
                  enterprises building the next decade of business.
                </p>
              </Reveal>

              <Reveal i={3}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <MagneticButton to="/portfolio" variant="primary">
                    Explore Case Studies <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton to="/contact" variant="ghost">
                    Start a Project
                  </MagneticButton>
                </div>
              </Reveal>

              <Reveal i={4}>
                <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-teal" />
                    Enterprise-grade security
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Zap className="h-4 w-4 text-teal" />
                    Blazing-fast performance
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Lock className="h-4 w-4 text-teal" />
                    Long-term partnership
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-24">
          <Reveal>
            <div>
              <SectionEyebrow>Bluetorn Technologies</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-semibold text-balance md:text-4xl">
                Clean, performance engineering for businesses that refuse to feel ordinary.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Founded in 2026 in Navi Mumbai, BLUETORN is a boutique software engineering studio
                built for enterprises that value craft, security and long-term partnership over
                shortcuts.
              </p>
              <div className="mt-8">
                <MagneticButton to="/about" variant="outline">
                  Learn More About Us <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
          <Reveal i={1}>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={developer} alt="Software engineer at work" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal><SectionEyebrow>Our Services</SectionEyebrow></Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-5xl">
                Bespoke software services, engineered for outcomes.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 text-muted-foreground">
                One integrated team across engineering, design and AI — building the systems that
                move your business forward.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} i={i % 3}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="card-hover group block h-full rounded-3xl border border-border bg-card p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MagneticButton to="/services" variant="outline">
              View All Services <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="sticky top-32">
                <SectionEyebrow>How We Build</SectionEyebrow>
                <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-5xl">
                  A disciplined process, tuned for enterprise trust.
                </h2>
                <p className="mt-5 max-w-md text-white/60">
                  Every engagement runs on the same battle-tested framework — the reason our clients
                  come back for their next platform, not just their next feature.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {process.map((p, i) => (
                <Reveal key={p.n} i={i}>
                  <div className="group flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-teal/40 hover:bg-white/[0.05]">
                    <div className="font-display text-3xl font-semibold text-teal">{p.n}</div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP / SHOWCASE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>Flagship Work</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl">
                Software that moves the needle.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A selection of the platforms we design and engineer — from ERP systems and AI copilots
              to conversion-focused corporate websites.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { img: dashboard, tag: "ERP Platform", title: "Enterprise ERP Suite", desc: "Modular ERP for manufacturing — inventory, HR, finance and reporting in one system." },
              { img: teamCollab, tag: "SaaS Product", title: "Customer CRM Cloud", desc: "Multi-tenant SaaS CRM with pipelines, automations and role-based access control." },
              { img: cloudInfra, tag: "Cloud & AI", title: "AI Operations Console", desc: "LLM-powered internal console with RAG on private data and workflow automation." },
            ].map((c, i) => (
              <Reveal key={c.title} i={i}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-ink">
                      {c.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MagneticButton to="/portfolio" variant="outline">
              View All Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* TECH STACK — dual marquee */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <Reveal>
            <div className="text-center">
              <SectionEyebrow>Technology Stack</SectionEyebrow>
              <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                Modern tools. Rigorously chosen. Engineered to last.
              </h3>
              <p className="mt-4 text-muted-foreground">Hover to pause.</p>
            </div>
          </Reveal>
          <div className="mt-14">
            <TechMarquee />
          </div>
        </div>
      </section>

      {/* INDUSTRIES — real icons per sector */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionEyebrow>Industries</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-5xl">
                Deep experience across the industries that build India.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                From regulated healthcare and finance to fast-moving retail and logistics, our teams
                bring domain fluency to every engagement.
              </p>
              <div className="mt-8">
                <MagneticButton to="/industries" variant="outline">
                  Explore Industries <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industriesData.slice(0, 12).map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <Reveal key={ind.slug} i={i % 6}>
                    <Link to="/industries/$slug" params={{ slug: ind.slug }} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_20px_40px_-25px_oklch(0.72_0.13_190/0.4)]">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{ind.name}</span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* WHY BLUETORN */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Why BLUETORN</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl">
              A boutique studio, engineered like an enterprise partner.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Rocket, title: "Senior teams only", desc: "Every engagement is led by senior engineers — no junior handoffs, no offshore surprises." },
              { icon: ShieldCheck, title: "Security-first", desc: "JWT, OAuth 2.0, SSL/TLS, RBAC and 2FA baked into every architecture we ship." },
              { icon: LineChart, title: "Outcomes over output", desc: "We measure ourselves on business KPIs, not tickets closed. Growth is the deliverable." },
              { icon: Sparkles, title: "Long-term partnership", desc: "80% of our clients return for a second and third project. We build for the decade ahead." },
            ].map((v, i) => (
              <Reveal key={v.title} i={i}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 card-hover">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-teal">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal/20 blur-[120px]" />
          <div className="absolute -right-24 top-1/3 h-[500px] w-[500px] rounded-full bg-teal-glow/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-8 md:py-32">
          <Reveal><SectionEyebrow>Let&apos;s Build</SectionEyebrow></Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Let&apos;s craft something premium, together.
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Talk to our team about your software, AI or digital transformation program. We reply
              within one working day.
            </p>
          </Reveal>
          <Reveal i={3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="primary">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/portfolio" variant="ghost">
                See Our Work
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
