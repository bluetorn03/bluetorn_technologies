import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Filter,
  Layers,
  Megaphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { PortfolioCarousel } from "@/components/site/PortfolioCarousel";

// 1. Specified New Images
import charterBusImg from "@/assets/images/mobile-first-charter-bus-booking-system.webp";
import mentalWellnessImg from "@/assets/images/mental-wellness-emotional-support-app.webp";
import dataAnalyticsImg from "@/assets/images/data-analetics.webp";
import tourenImg from "@/assets/images/Dribbble_Touren.webp";
import programmingWorkflowImg from "@/assets/images/programing_workflow.webp";

// 2. NEW Digital Marketing Images
import socialMediaImg from "@/assets/images/social-media-campaign-dashboard.png";
import seoAnalyticsImg from "@/assets/images/seo-analytics-dashboard.png";
import googleAdsImg from "@/assets/images/google-ads-dashboard.png";
import marketingAutoImg from "@/assets/images/marketing-automation-platform.png";
import emailMarketingImg from "@/assets/images/email-marketing-platform.png";
import brandPerformanceImg from "@/assets/images/brand-performance-dashboard.png";

// 3. Additional Unique Enterprise Images
import biometricSecurityImg from "@/assets/images/biomatric-access.webp";
import fintechImg from "@/assets/images/investment-platform-finance-professionals-profitability.webp";
import aiAssistantImg from "@/assets/images/introducing-chatgpt.webp";
import edtechImg from "@/assets/images/learning.webp";
import cyberSecurityImg from "@/assets/images/cyber-security.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — BLUETORN Technologies" },
      {
        name: "description",
        content:
          "Explore BLUETORN's enterprise software projects and digital marketing campaigns — custom ERPs, AI engines, mobile apps, SEO analytics, and performance growth.",
      },
      { property: "og:title", content: "BLUETORN Portfolio & Case Studies" },
      {
        property: "og:description",
        content: "Real software products and growth campaigns engineered for clients worldwide.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

interface ProjectItem {
  id: string;
  img: string;
  tag: string;
  category: "all" | "software" | "marketing" | "ai-cloud" | "mobile";
  categoryLabel: string;
  title: string;
  subtitle: string;
  desc: string;
  kpi: string;
  tech: string[];
  heightClass?: string;
}

const allProjects: ProjectItem[] = [
  // Specified New Images Projects
  {
    id: "charter-bus",
    img: charterBusImg,
    tag: "Mobile & Transit",
    category: "mobile",
    categoryLabel: "Mobility & Transit Platform",
    title: "Charter Bus Booking Engine",
    subtitle: "Real-Time Bus Fleet Dispatch & Reservation System",
    desc: "A mobile-first charter bus reservation engine featuring live vehicle geolocation, route optimization, driver assignments, and automated passenger SMS ticketing.",
    kpi: "3.4M Monthly Bookings",
    tech: ["Flutter", "Node.js", "PostGIS", "WebSockets"],
    heightClass: "h-[380px] md:h-[440px]",
  },
  {
    id: "wellness-app",
    img: mentalWellnessImg,
    tag: "Healthcare",
    category: "mobile",
    categoryLabel: "Tele-Health & Wellness",
    title: "MindCare Emotional Support App",
    subtitle: "HIPAA-Compliant Mental Health Platform",
    desc: "Encrypted tele-therapy mobile app with mood tracking algorithms, live video consults, guided meditation pathways, and crisis intervention routing.",
    kpi: "450k Active Users",
    tech: ["React Native", "WebRTC", "Python", "AWS KMS"],
    heightClass: "h-[300px] md:h-[360px]",
  },
  {
    id: "data-analytics",
    img: dataAnalyticsImg,
    tag: "AI & Big Data",
    category: "ai-cloud",
    categoryLabel: "Enterprise Data Platform",
    title: "Apex Big Data Analytics Suite",
    subtitle: "Real-Time Business Intelligence & Predictive Analytics",
    desc: "High-throughput data intelligence console processing multi-source ETL streams, real-time revenue projections, and predictive inventory anomaly detection.",
    kpi: "< 50ms Query Response",
    tech: ["ClickHouse", "Apache Spark", "Next.js", "Python"],
    heightClass: "h-[360px] md:h-[420px]",
  },
  {
    id: "touren-travel",
    img: tourenImg,
    tag: "Travel & SaaS",
    category: "software",
    categoryLabel: "Hospitality & Travel",
    title: "Touren Global Travel Marketplace",
    subtitle: "Multi-Currency Experience Booking Platform",
    desc: "Global travel marketplace connecting tour operators with travelers. Complete with multi-currency checkout, vendor management, and dynamic pricing engines.",
    kpi: "$18M Gross Merchandise Vol",
    tech: ["Next.js", "Stripe Connect", "PostgreSQL", "Redis"],
    heightClass: "h-[320px] md:h-[380px]",
  },
  {
    id: "dev-workflow",
    img: programmingWorkflowImg,
    tag: "Developer Tools",
    category: "software",
    categoryLabel: "DevOps & Cloud Tools",
    title: "Cloud DevWorkflow Suite",
    subtitle: "CI/CD & Microservice Orchestration Platform",
    desc: "Internal developer platform streamlining container deployments, automated pull request environments, and cluster observability for engineering teams.",
    kpi: "65% Faster Release Cycles",
    tech: ["Docker", "Kubernetes", "Go", "GraphQL"],
    heightClass: "h-[350px] md:h-[410px]",
  },

  // NEW Digital Marketing Portfolio Items
  {
    id: "social-media-campaign",
    img: socialMediaImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "Social Performance",
    title: "OmniChannel Social Campaign Dashboard",
    subtitle: "Multi-Platform Audience Engagement & Attribution Engine",
    desc: "Unified marketing intelligence hub tracking cross-platform campaign reach across LinkedIn, Meta, and YouTube with real-time conversion attribution.",
    kpi: "+280% ROAS Improvement",
    tech: ["Meta Graph API", "LinkedIn Ads API", "BigQuery", "Looker"],
    heightClass: "h-[340px] md:h-[400px]",
  },
  {
    id: "seo-analytics",
    img: seoAnalyticsImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "SEO & Growth",
    title: "Enterprise SEO Analytics Platform",
    subtitle: "Keyword Rank Tracking & SERP Visibility Engine",
    desc: "Automated organic search intelligence platform monitoring 100k+ keywords, technical SEO health, backlinks, and organic growth trajectory.",
    kpi: "+420% Organic Traffic",
    tech: ["Python Crawlers", "Search Console API", "Elasticsearch", "React"],
    heightClass: "h-[310px] md:h-[370px]",
  },
  {
    id: "google-ads",
    img: googleAdsImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "PPC & Paid Acquisition",
    title: "Google Ads Performance Hub",
    subtitle: "Automated Bidding & PPC ROI Management",
    desc: "Real-time Google Ads command center utilizing automated bid adjustments, landing page conversion scoring, and click fraud prevention filters.",
    kpi: "38% Lower Cost Per Acquisition",
    tech: ["Google Ads API", "FastAPI", "TypeScript", "Tailwind"],
    heightClass: "h-[370px] md:h-[430px]",
  },
  {
    id: "marketing-auto",
    img: marketingAutoImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "Automation",
    title: "Marketing Automation Engine",
    subtitle: "Behavioral Lead Nurturing & Pipeline Trigger Suite",
    desc: "Visual workflow builder automating lead scoring, drip sequences, CRM contact synchronization, and deal velocity tracking.",
    kpi: "+190% MQL to SQL Ratio",
    tech: ["HubSpot API", "Zapier Webhooks", "Node.js", "Redis"],
    heightClass: "h-[330px] md:h-[390px]",
  },
  {
    id: "email-marketing",
    img: emailMarketingImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "Lifecycle Marketing",
    title: "Enterprise Email Journey Builder",
    subtitle: "Hyper-Personalized Customer Email Platform",
    desc: "High-volume transactional and promotional email platform with dynamic liquid templates, deliverability optimization, and automated A/B testing.",
    kpi: "48% Open Rate / 14% CTR",
    tech: ["SendGrid API", "AWS SES", "Next.js", "Tailwind"],
    heightClass: "h-[360px] md:h-[420px]",
  },
  {
    id: "brand-performance",
    img: brandPerformanceImg,
    tag: "Digital Marketing",
    category: "marketing",
    categoryLabel: "Brand Analytics",
    title: "Brand Performance & Sentiment Console",
    subtitle: "AI-Powered Brand Health & Share of Voice Suite",
    desc: "Executive brand health monitoring platform capturing online brand sentiment, competitor share-of-voice, PR reach, and campaign ROI.",
    kpi: "Real-Time Brand Sentiment Tracking",
    tech: ["NLP Models", "Python", "PostgreSQL", "D3.js"],
    heightClass: "h-[320px] md:h-[380px]",
  },

  // Additional Enterprise Software Projects
  {
    id: "biometric-security",
    img: biometricSecurityImg,
    tag: "Cyber Security",
    category: "software",
    categoryLabel: "Identity & Access Control",
    title: "BioMatrix Access Control Engine",
    subtitle: "Zero-Trust Enterprise Facility Security System",
    desc: "Biometric authentication and physical access control management platform with multi-factor facial recognition and automated audit logging.",
    kpi: "Zero Breach Record",
    tech: ["OpenCV", "Python", "OAuth 2.0", "WebSockets"],
    heightClass: "h-[350px] md:h-[410px]",
  },
  {
    id: "fintech-platform",
    img: fintechImg,
    tag: "FinTech & Banking",
    category: "software",
    categoryLabel: "Financial Systems",
    title: "QuantEdge Investment Platform",
    subtitle: "Institutional Asset Management & Portfolio Terminal",
    desc: "High-frequency investment management software for wealth managers. Features real-time algorithmic portfolio balancing, risk analytics, and trade execution.",
    kpi: "$4.2B Assets Managed",
    tech: ["C++ Core", "React", "Kafka", "PostgreSQL"],
    heightClass: "h-[380px] md:h-[440px]",
  },
  {
    id: "ai-assistant",
    img: aiAssistantImg,
    tag: "AI & LLMs",
    category: "ai-cloud",
    categoryLabel: "Enterprise AI Copilot",
    title: "OmniAI Corporate Knowledge Copilot",
    subtitle: "Private RAG System for Internal Enterprise Data",
    desc: "LLM-driven internal knowledge assistant indexing confidential corporate documentation, policies, and code repos with strict RBAC access controls.",
    kpi: "80% Time Savings on Internal Queries",
    tech: ["OpenAI", "LangChain", "Vector DB", "Pinecone"],
    heightClass: "h-[310px] md:h-[370px]",
  },
  {
    id: "edtech-portal",
    img: edtechImg,
    tag: "EdTech & LMS",
    category: "software",
    categoryLabel: "Learning Management",
    title: "SkillVerse Learning Ecosystem",
    subtitle: "AI-Personalized Corporate Upskilling Platform",
    desc: "Enterprise LMS platform serving 100k+ employees with adaptive learning paths, interactive coding sandboxes, and skill certification tracking.",
    kpi: "94% Course Completion Rate",
    tech: ["Next.js", "GraphQL", "AWS CloudFront", "Tailwind"],
    heightClass: "h-[340px] md:h-[400px]",
  },
  {
    id: "cyber-security",
    img: cyberSecurityImg,
    tag: "Cyber Security",
    category: "ai-cloud",
    categoryLabel: "Threat Intelligence",
    title: "ShieldOps Threat Monitoring Console",
    subtitle: "AI Threat Detection & Incident Response Platform",
    desc: "Real-time SOC threat intelligence platform inspecting network traffic anomalies, automated firewall rule injection, and incident remediation.",
    kpi: "Sub-Second Threat Containment",
    tech: ["eBPF", "Go", "Elasticsearch", "React"],
    heightClass: "h-[360px] md:h-[420px]",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "software" | "marketing" | "ai-cloud" | "mobile"
  >("all");

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const carouselSlides = allProjects.map((p) => ({
    img: p.img,
    title: p.title,
    tag: p.tag,
    category: p.categoryLabel,
    heightClass: p.heightClass,
  }));

  return (
    <SiteLayout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-60 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-12 md:px-8 md:pt-44 md:pb-16">
          <Reveal>
            <SectionEyebrow>BLUETORN Portfolio</SectionEyebrow>
          </Reveal>
          <Reveal i={1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
              The software & growth behind our clients&apos;{" "}
              <span className="text-teal-grad">best years</span>.
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-8 max-w-2xl text-lg text-white/70">
              Explore our real-world software products and digital marketing campaign results engineered for enterprises, SMEs, and fast-growing startups worldwide.
            </p>
          </Reveal>

          {/* Metric Highlights */}
          <Reveal i={3}>
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 text-sm text-white/80">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-teal" />
                <span>100% Custom Product Engineering</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-teal" />
                <span>Zero Reused Mockups / 100% Unique Projects</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4.5 w-4.5 text-teal" />
                <span>Enterprise Growth & Digital Marketing</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* INFINITE HERO GALLERY (Inspired by reference layout) */}
        <div className="relative pt-4 pb-20">
          <div className="mx-auto mb-4 max-w-7xl px-6 md:px-8 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal">
              Featured Gallery Showcase — Infinite Auto Scroll
            </span>
            <span className="hidden sm:block text-xs text-white/50">
              Hover to pause animation
            </span>
          </div>
          <PortfolioCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* FILTERABLE PROJECT GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          {/* Header & Category Filters */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Client Case Studies</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold text-balance md:text-5xl">
                Built for measurable outcomes.
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === "all"
                    ? "bg-ink text-teal shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Filter className="h-3.5 w-3.5" /> All Projects ({allProjects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("software")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === "software"
                    ? "bg-ink text-teal shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code2 className="h-3.5 w-3.5" /> Software & ERP
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("marketing")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === "marketing"
                    ? "bg-ink text-teal shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Megaphone className="h-3.5 w-3.5" /> Digital Marketing
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("ai-cloud")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === "ai-cloud"
                    ? "bg-ink text-teal shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <BrainCircuit className="h-3.5 w-3.5" /> AI & Cloud
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("mobile")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === "mobile"
                    ? "bg-ink text-teal shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" /> Mobile Apps
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, i) => (
              <Reveal key={p.id} i={i % 3}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_30px_70px_-25px_oklch(0.72_0.13_190/0.3)]">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {p.tag}
                    </span>

                    <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/20 px-3 py-1 text-[0.68rem] font-bold text-teal-glow backdrop-blur-md">
                      <BarChart3 className="h-3 w-3 text-teal" />
                      {p.kpi}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-teal">
                          {p.categoryLabel}
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-teal transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-white/60">
                        {p.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING HIGHLIGHT BANNER */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div>
                <SectionEyebrow>Digital Growth Division</SectionEyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                  Data-driven digital marketing campaigns with proven ROI.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  We don&apos;t just engineer software — our digital marketing division executes high-performance SEO, Google Ads, social media automation, and lifecycle lead nurturing campaigns that fill pipelines and accelerate MRR growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="primary">
                    Request Growth Strategy <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "SEO Rankings", stat: "+420%", icon: BarChart3 },
                { label: "Ad Campaign ROAS", stat: "3.8x Avg", icon: Sparkles },
                { label: "CPA Reduction", stat: "-38%", icon: ShieldCheck },
                { label: "Lead Conversion", stat: "+190%", icon: Building2 },
                { label: "Organic Reach", stat: "1.2M+", icon: Megaphone },
                { label: "Pipeline Value", stat: "$14M+", icon: Layers },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} i={idx % 3}>
                    <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-teal/40">
                      <Icon className="h-5 w-5 text-teal" />
                      <div className="mt-3 font-display text-2xl font-bold text-foreground">
                        {item.stat}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground font-medium">
                        {item.label}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <Reveal>
            <SectionEyebrow>Start Your Engagement</SectionEyebrow>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">
              Your software platform or digital campaign, next on this list.
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Partner with BLUETORN to design, engineer, and scale your digital products with enterprise-grade craft and measurable business growth.
            </p>
          </Reveal>
          <Reveal i={3}>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact" variant="primary">
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
