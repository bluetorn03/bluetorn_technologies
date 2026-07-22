import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Heart, Layers, Shield, Sparkles, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import teamCollab from "@/assets/images/businessman-thinking.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BLUETORN Technologies — Our Story, Mission & Values" },
      { name: "description", content: "BLUETORN is a premium software engineering studio founded in 2026 in Navi Mumbai. Learn about our mission, vision, values and how we build software." },
      { property: "og:title", content: "About BLUETORN Technologies" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, t: "Innovation" }, { icon: Shield, t: "Security" },
  { icon: CheckCircle2, t: "Quality" }, { icon: Heart, t: "Integrity" },
  { icon: Compass, t: "Transparency" }, { icon: Target, t: "Performance" },
  { icon: Layers, t: "Reliability" }, { icon: Sparkles, t: "Customer Success" },
  { icon: Heart, t: "Long-Term Partnership" }, { icon: Compass, t: "Continuous Improvement" },
];

function About() {
  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:px-8 md:pt-48">
          <Reveal><SectionEyebrow>About BLUETORN</SectionEyebrow></Reveal>
          <Reveal i={1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
              Software engineering, treated as a <span className="text-teal-grad">craft</span>.
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-8 max-w-2xl text-lg text-white/70">
              BLUETORN Technologies is a premium software engineering and digital transformation
              company based in Navi Mumbai, founded in 2026 by Chandan Kumar and Pratik Koli. We help
              startups, SMEs and enterprises ship secure, scalable, modern digital products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={teamCollab} alt="BLUETORN team collaborating" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <div>
              <SectionEyebrow>Our Story</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Built by engineers, for engineering-led businesses.</h2>
              <p className="mt-5 text-muted-foreground">
                BLUETORN was founded in 2026 out of a simple observation — enterprise software in
                India deserves the same craft, security and design fluency you&apos;d expect from the
                world&apos;s best product companies. We assembled a senior team across engineering,
                design and AI to build exactly that.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today we partner with businesses across manufacturing, healthcare, finance,
                education, logistics and retail — engineering the software that quietly runs their
                operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-10">
              <SectionEyebrow>Mission</SectionEyebrow>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                Empower businesses with innovative, scalable, reliable software.
              </h3>
              <p className="mt-4 text-muted-foreground">
                We exist to drive digital transformation, improve productivity and create long-term
                business value for the organizations we partner with.
              </p>
            </div>
          </Reveal>
          <Reveal i={1}>
            <div id="vision" className="h-full rounded-3xl border border-border bg-card p-10">
              <SectionEyebrow>Vision</SectionEyebrow>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                Become one of India&apos;s most trusted software engineering companies.
              </h3>
              <p className="mt-4 text-muted-foreground">
                Delivering world-class technology with innovation, quality and customer satisfaction
                at the core of everything we ship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="values" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Core Values</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">The principles we build on.</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.t} i={i % 5}>
                <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 card-hover">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal">
                    <v.icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-base font-semibold">{v.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Development Process</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">From discovery to long-term partnership.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Discover", d: "Workshops, user research, technical audits and success metrics." },
              { n: "02", t: "Design", d: "Design system, prototypes and validated flows before code." },
              { n: "03", t: "Build", d: "Two-week sprints, CI/CD, code reviews and automated testing." },
              { n: "04", t: "Scale", d: "Monitoring, performance tuning and long-term evolution." },
            ].map((p, i) => (
              <Reveal key={p.n} i={i}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="font-display text-3xl font-semibold text-teal">{p.n}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="qa" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-8">
          <div>
            <SectionEyebrow>Quality Assurance</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Testing is not the last step. It&apos;s the first.</h2>
            <p className="mt-5 text-muted-foreground">
              Automated unit, integration and end-to-end tests run on every commit. Security scans,
              performance budgets and accessibility audits are enforced at merge time — not
              retrofitted after launch.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Automated Testing", "Code Reviews", "Static Analysis", "Performance Budgets",
              "Security Scanning", "Accessibility Audits", "Load Testing", "Monitoring & Alerts",
            ].map((q) => (
              <div key={q} className="rounded-2xl border border-border bg-card p-4 text-sm font-medium">
                <CheckCircle2 className="mb-2 h-4 w-4 text-teal" />
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Work with a team that treats software like craft.</h2>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
