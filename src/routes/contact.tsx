import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BLUETORN Technologies — Navi Mumbai, India" },
      { name: "description", content: "Get in touch with BLUETORN Technologies. Office in Ulwe, Navi Mumbai. Email info@bluetorn.com or call +91 77889 96549." },
      { property: "og:title", content: "Contact BLUETORN Technologies" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message received", {
      description: "Our team will reply within one working day.",
    });
  };

  return (
    <SiteLayout>
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-16 md:px-8 md:pt-48">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
            Let&apos;s build something <span className="text-teal-grad">premium</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Tell us about your software, AI or transformation program. Our engineering team replies
            within one working day.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Info */}
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <Logo className="h-12 w-12" />
                <h2 className="mt-6 font-display text-2xl font-semibold">BLUETORN Technologies</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Smarter Technology. Stronger Future.
                </p>

                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div>
                      <div className="font-semibold">Head Office</div>
                      <div className="text-muted-foreground">
                        Office 01 & 02, Sai Sagar Apartment,<br />
                        Ulwe, Navi Mumbai – 410206,<br />
                        Maharashtra, India
                      </div>
                    </div>
                  </div>
                  <a href="mailto:info@bluetorn.com" className="flex items-start gap-3 hover:text-teal">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@bluetorn.com</div>
                    </div>
                  </a>
                  <a href="tel:+917788996549" className="flex items-start gap-3 hover:text-teal">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">+91 77889 96549</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div>
                      <div className="font-semibold">Working Hours</div>
                      <div className="text-muted-foreground">Mon – Sat, 10:00 AM – 7:00 PM (IST)</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal i={1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-border bg-card p-8 md:p-10"
              >
                <h2 className="font-display text-2xl font-semibold">Start a conversation</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details and we&apos;ll route your enquiry to the right team.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company" name="company" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What are you exploring?
                  </label>
                  <select
                    name="topic"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    {[
                      "Custom Software", "Web Development", "Mobile App", "AI Solutions",
                      "ERP", "CRM", "SaaS", "Cloud & DevOps", "UI/UX Design", "Maintenance",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals, timelines and any current systems…"
                    className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal hover:text-ink disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
      />
    </div>
  );
}
