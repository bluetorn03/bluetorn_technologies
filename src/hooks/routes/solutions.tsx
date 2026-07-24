import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { solutions } from "@/lib/solutions-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — MVPs, Enterprise & AI Programs | BLUETORN" },
      { name: "description", content: "Programmatic engagements from startup MVPs to enterprise platforms, digital transformation, AI integration, cloud migration and SaaS launches." },
      { property: "og:title", content: "BLUETORN Solutions" },
      { property: "og:description", content: "Programmatic solutions for founders, enterprises and modernisation programs." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            Programs, not <span className="text-teal-grad">projects</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Outcome-shaped engagements — from launching an MVP to running an enterprise-wide
            modernisation. Each solution below is a complete program with defined scope, architecture and success criteria.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} i={i % 3}>
                  <Link to="/solutions/$slug" params={{ slug: s.slug }} className="group block h-full rounded-3xl border border-border bg-card p-7 card-hover">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{s.eyebrow}</span>
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold">{s.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{s.hero}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                      Explore program <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Which program fits your quarter?</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Talk to us <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
