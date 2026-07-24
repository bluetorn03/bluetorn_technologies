import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Software, AI, ERP, CRM, SaaS & Cloud | BLUETORN" },
      { name: "description", content: "Custom software, web and mobile development, AI, ERP, CRM, SaaS, cloud, UI/UX, automation and maintenance — engineered for enterprise outcomes." },
      { property: "og:title", content: "BLUETORN Services" },
      { property: "og:description", content: "Full-stack engineering services across software, AI, ERP, CRM, cloud and more." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

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
          <SectionEyebrow>Services & Capabilities</SectionEyebrow>
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
            {services.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.slug} i={i % 3}>
                  <Link to="/services/$slug" params={{ slug: g.slug }} className="group block h-full rounded-3xl border border-border bg-card p-7 card-hover">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold">{g.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{g.hero}</p>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {g.features.slice(0, 3).map((f) => (
                        <span key={f} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.65rem] font-medium text-muted-foreground">{f}</span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                      Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
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
