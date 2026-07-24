import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { servicesBySlug, services, type ServiceDef } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicesBySlug[params.slug];
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found | BLUETORN" }, { name: "robots", content: "noindex" }] };
    const s = loaderData;
    return {
      meta: [
        { title: `${s.title} | BLUETORN Technologies` },
        { name: "description", content: s.hero },
        { property: "og:title", content: `${s.title} | BLUETORN` },
        { property: "og:description", content: s.hero },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-semibold">Service not found</h1>
        <p className="mt-4 text-muted-foreground">The service you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-8 flex justify-center">
          <MagneticButton to="/services" variant="primary">Back to services</MagneticButton>
        </div>
      </section>
    </SiteLayout>
  ),
});

function ServicePage() {
  const s = Route.useLoaderData() as ServiceDef;
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-32 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>{s.eyebrow}</SectionEyebrow>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/15 text-teal">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">BLUETORN Services</div>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            {s.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">{s.hero}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton to="/contact" variant="primary">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton to="/services" variant="ghost">All services</MagneticButton>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-8">
          <Reveal>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Engineered for outcomes, not tickets.</h2>
          </Reveal>
          <Reveal i={1}>
            <p className="text-lg leading-relaxed text-muted-foreground">{s.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Business Benefits</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Why teams choose BLUETORN for this.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {s.benefits.map((b, i) => (
              <Reveal key={b.t} i={i % 2}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 card-hover">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionEyebrow>Development Process</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold text-balance md:text-5xl">
                A disciplined path from idea to production.
              </h2>
            </div>
            <div className="space-y-4">
              {s.process.map((p, i) => (
                <Reveal key={p.n} i={i}>
                  <div className="flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-teal/40">
                    <div className="font-display text-3xl font-semibold text-teal">{p.n}</div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{p.t}</h3>
                      <p className="mt-2 text-sm text-white/65">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features + Technologies */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-8">
          <div>
            <SectionEyebrow>Features</SectionEyebrow>
            <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">What you get out of the box.</h3>
            <div className="mt-8 grid gap-3">
              {s.features.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionEyebrow>Technologies</SectionEyebrow>
            <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Modern tools, rigorously chosen.</h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {s.technologies.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-10">
              <SectionEyebrow>Industries</SectionEyebrow>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.industries.map((ind) => (
                  <span key={ind} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal">{s.caseStudy.tag}</div>
              <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{s.caseStudy.title}</h3>
              <p className="mt-6 font-display text-2xl leading-snug text-teal md:text-3xl">
                &ldquo;{s.caseStudy.result}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-px w-10 bg-teal" />
                Client case study — outcomes may vary.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-8">
          <div className="text-center">
            <SectionEyebrow>Frequently Asked</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Questions we hear often.</h2>
          </div>
          <div className="mt-12 space-y-3">
            {s.faqs.map((f, i) => (
              <details key={i} className="group rounded-3xl border border-border bg-card p-6 open:shadow-[0_20px_50px_-30px_oklch(0.19_0.03_200/0.25)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-lg font-semibold">{f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-teal transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Related services</h3>
            <Link to="/services" className="text-sm font-semibold text-teal hover:underline">All services →</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((r) => {
              const RI = r.icon;
              return (
                <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group rounded-3xl border border-border bg-card p-7 card-hover">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <RI className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold">{r.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{r.hero}</div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Ready to build with BLUETORN?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Book a 30-minute discovery call. We&apos;ll map the right approach to your goals.</p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Talk to an engineer <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
