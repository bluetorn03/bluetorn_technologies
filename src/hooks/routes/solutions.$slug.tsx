import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { solutionsBySlug, solutions, type SolutionDef } from "@/lib/solutions-data";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = solutionsBySlug[params.slug];
    if (!solution) throw notFound();
    return solution;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Solution not found | BLUETORN" }, { name: "robots", content: "noindex" }] };
    const s = loaderData;
    return {
      meta: [
        { title: `${s.name} — Solution | BLUETORN Technologies` },
        { name: "description", content: s.hero },
        { property: "og:title", content: `${s.name} Solution | BLUETORN` },
        { property: "og:description", content: s.hero },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/solutions/${s.slug}` }],
    };
  },
  component: SolutionPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-semibold">Solution not found</h1>
        <div className="mt-8 flex justify-center">
          <MagneticButton to="/solutions" variant="primary">All solutions</MagneticButton>
        </div>
      </section>
    </SiteLayout>
  ),
});

function SolutionPage() {
  const s = Route.useLoaderData() as SolutionDef;
  const Icon = s.icon;
  const related = solutions.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-32 h-[500px] w-[500px] rounded-full bg-teal/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <SectionEyebrow>{s.eyebrow}</SectionEyebrow>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/15 text-teal">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">BLUETORN Solutions</div>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            {s.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">{s.hero}</p>
          <div className="mt-10">
            <MagneticButton to="/contact" variant="primary">Discuss this solution <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-8">
          <Reveal>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">The shape of this engagement.</h2>
          </Reveal>
          <Reveal i={1}>
            <p className="text-lg leading-relaxed text-muted-foreground">{s.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionEyebrow>Business problems this solves</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Common triggers for this engagement.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {s.problems.map((p, i) => (
              <Reveal key={p.t} i={i}>
                <div className="h-full rounded-3xl border border-border bg-card p-7">
                  <div className="text-xs font-semibold uppercase tracking-widest text-teal">Problem {i + 1}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionEyebrow>Solution Architecture</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">How we build it.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {s.architecture.map((a, i) => (
              <Reveal key={a.n} i={i}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="font-display text-3xl font-semibold text-teal">{a.n}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{a.t}</h3>
                  <p className="mt-2 text-sm text-white/65">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionEyebrow>Implementation flow</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">From day zero to production.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {s.implementation.map((im, i) => (
              <div key={im.n} className="relative rounded-3xl border border-border bg-card p-7">
                <div className="font-display text-3xl font-semibold text-teal">{im.n}</div>
                <h3 className="mt-4 font-display text-lg font-semibold">{im.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{im.d}</p>
                {i < s.implementation.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-teal md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionEyebrow>Benefits</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">What you take away.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal key={b.t} i={i}>
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

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionEyebrow>Best fit for</SectionEyebrow>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.industries.map((ind) => (
                  <span key={ind} className="rounded-full bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal">{ind}</span>
                ))}
              </div>
            </div>
            <div>
              <SectionEyebrow>Other solutions</SectionEyebrow>
              <div className="mt-4 grid gap-3">
                {related.map((r) => {
                  const RI = r.icon;
                  return (
                    <Link key={r.slug} to="/solutions/$slug" params={{ slug: r.slug }} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-teal">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white">
                        <RI className="h-4 w-4" />
                      </div>
                      <span className="flex-1 text-sm font-semibold">{r.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-teal" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Ready to start this program?</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Talk to an engineer <ArrowRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
