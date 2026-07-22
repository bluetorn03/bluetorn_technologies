import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { industries } from "@/lib/industries-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Software for Every Sector | BLUETORN" },
      { name: "description", content: "Domain-fluent software for manufacturing, healthcare, finance, retail, logistics, education, real estate, hospitality, insurance and construction." },
      { property: "og:title", content: "BLUETORN Industries" },
      { property: "og:description", content: "Deep experience across regulated and fast-moving industries." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>Industries</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            Domain fluency, <span className="text-teal-grad">not just code</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            We know the workflows, regulations and gotchas of the industries we serve — so engagements start where domain-agnostic vendors are still asking questions.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.slug} i={i % 3}>
                  <Link to="/industries/$slug" params={{ slug: ind.slug }} className="group block h-full rounded-3xl border border-border bg-card p-7 card-hover">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold">{ind.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{ind.hero}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                      Explore industry <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Your industry, our next engagement.</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Start a Project <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
