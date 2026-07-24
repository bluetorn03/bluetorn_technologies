import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { industriesBySlug, industries, type IndustryDef } from "@/lib/industries-data";
import { servicesBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industriesBySlug[params.slug];
    if (!industry) throw notFound();
    return industry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Industry not found | BLUETORN" }, { name: "robots", content: "noindex" }] };
    const i = loaderData;
    return {
      meta: [
        { title: `${i.name} Software Solutions | BLUETORN Technologies` },
        { name: "description", content: i.hero },
        { property: "og:title", content: `${i.name} Solutions | BLUETORN` },
        { property: "og:description", content: i.hero },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/industries/${i.slug}` }],
    };
  },
  component: IndustryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-semibold">Industry not found</h1>
        <div className="mt-8 flex justify-center">
          <MagneticButton to="/industries" variant="primary">All industries</MagneticButton>
        </div>
      </section>
    </SiteLayout>
  ),
});

function IndustryPage() {
  const i = Route.useLoaderData() as IndustryDef;
  const Icon = i.icon;
  const related = industries.filter((x) => x.slug !== i.slug).slice(0, 4);

  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-40 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>Industry</SectionEyebrow>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/15 text-teal">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">BLUETORN Industries</div>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            Software for <span className="text-teal-grad">{i.name}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">{i.hero}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-8">
          <Reveal>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Domain-fluent engineering.</h2>
          </Reveal>
          <Reveal i={1}>
            <p className="text-lg leading-relaxed text-muted-foreground">{i.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Industry Challenges</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">The problems we see over and over.</h2>
              <div className="mt-8 space-y-4">
                {i.challenges.map((c) => (
                  <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-lg font-semibold">{c.t}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionEyebrow>Digital Transformation</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">What good looks like.</h2>
              <div className="mt-8 grid gap-3">
                {i.transformation.map((t) => (
                  <div key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <SectionEyebrow>Benefits</SectionEyebrow>
                <div className="mt-4 flex flex-wrap gap-2">
                  {i.benefits.map((b) => (
                    <span key={b} className="rounded-full bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionEyebrow>Solutions we deliver</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Purpose-built for {i.name.toLowerCase()}.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {i.solutions.map((s, idx) => (
              <Reveal key={s.t} i={idx}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 card-hover">
                  <div className="text-xs font-semibold uppercase tracking-widest text-teal">Solution {idx + 1}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Recommended Services</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Services we typically deliver for {i.name.toLowerCase()}.</h2>
              <div className="mt-8 grid gap-3">
                {i.recommendedServices.map((slug) => {
                  const svc = servicesBySlug[slug];
                  if (!svc) return null;
                  const SIcon = svc.icon;
                  return (
                    <Link key={slug} to="/services/$slug" params={{ slug }} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-teal/50">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal">
                        <SIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-base font-semibold">{svc.title}</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-teal" />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <SectionEyebrow>Technologies</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Stack we favour.</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {i.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal">{i.caseStudy.tag}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{i.caseStudy.title}</h3>
                <p className="mt-4 font-display text-xl leading-snug text-teal-glow">&ldquo;{i.caseStudy.result}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Other industries</h3>
            <Link to="/industries" className="text-sm font-semibold text-teal hover:underline">All industries →</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {related.map((r) => {
              const RI = r.icon;
              return (
                <Link key={r.slug} to="/industries/$slug" params={{ slug: r.slug }} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-teal">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white">
                    <RI className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{r.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Building for {i.name.toLowerCase()}? Let&apos;s talk.</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Start a Project <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
