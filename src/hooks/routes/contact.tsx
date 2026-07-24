import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Briefcase, Building2, Clock, GraduationCap, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BLUETORN Technologies — Navi Mumbai, India" },
      { name: "description", content: "Get in touch with BLUETORN Technologies. Business: info@bluetorn.com / +91 77889 96579. General: contact@bluetorn.com / +91 7788996549." },
      { property: "og:title", content: "Contact BLUETORN Technologies" },
      { property: "og:description", content: "General, business, project or career enquiries — reach the right team fast." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type InquiryType = "general" | "business" | "project" | "career";

const inquiryTypes: { id: InquiryType; label: string; desc: string; icon: typeof MessageSquare }[] = [
  { id: "general",  label: "General",  desc: "Questions, media, partnerships.", icon: MessageSquare },
  { id: "business", label: "Business", desc: "Enterprise & B2B enquiries.",     icon: Building2 },
  { id: "project",  label: "Project",  desc: "Scope, budget and timelines.",    icon: Briefcase },
  { id: "career",   label: "Career",   desc: "Join the engineering team.",      icon: GraduationCap },
];

const countries = [
  { code: "+91",  name: "India" },
  { code: "+1",   name: "USA / Canada" },
  { code: "+44",  name: "UK" },
  { code: "+61",  name: "Australia" },
  { code: "+65",  name: "Singapore" },
  { code: "+971", name: "UAE" },
  { code: "+49",  name: "Germany" },
  { code: "+33",  name: "France" },
  { code: "+81",  name: "Japan" },
  { code: "+27",  name: "South Africa" },
];

function Contact() {
  const [type, setType] = useState<InquiryType>("business");
  const [sending, setSending] = useState(false);
  const [country, setCountry] = useState("India");
  const [dial, setDial] = useState("+91");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success(
      type === "career" ? "Application received"
      : type === "project" ? "Project brief received"
      : "Message received",
      { description: "Our team will reply within one working day." },
    );
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
            Choose the right form for your enquiry — general, business, project or career — and our
            team will reply within one working day.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Info */}
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <Logo className="h-12 w-12" />
                <h2 className="mt-6 font-display text-2xl font-semibold">BLUETORN Technologies</h2>
                <p className="mt-2 text-sm text-muted-foreground">Smarter Technology. Stronger Future.</p>
                <div className="mt-8 space-y-6 text-sm">
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
                  <div className="rounded-2xl border border-border/80 bg-secondary/50 p-4 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-teal">Business Enquiry</div>
                    <a href="mailto:info@bluetorn.com" className="flex items-center gap-3 text-foreground hover:text-teal transition-colors">
                      <Mail className="h-4 w-4 shrink-0 text-teal" />
                      <div>
                        <div className="text-xs text-muted-foreground">Business Email</div>
                        <div className="font-medium">info@bluetorn.com</div>
                      </div>
                    </a>
                    <a href="tel:+917788996579" className="flex items-center gap-3 text-foreground hover:text-teal transition-colors">
                      <Phone className="h-4 w-4 shrink-0 text-teal" />
                      <div>
                        <div className="text-xs text-muted-foreground">Business Phone</div>
                        <div className="font-medium">+91 77889 96579</div>
                      </div>
                    </a>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-secondary/50 p-4 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-teal">General Enquiry</div>
                    <a href="mailto:contact@bluetorn.com" className="flex items-center gap-3 text-foreground hover:text-teal transition-colors">
                      <Mail className="h-4 w-4 shrink-0 text-teal" />
                      <div>
                        <div className="text-xs text-muted-foreground">General Email</div>
                        <div className="font-medium">contact@bluetorn.com</div>
                      </div>
                    </a>
                    <a href="tel:+917788996549" className="flex items-center gap-3 text-foreground hover:text-teal transition-colors">
                      <Phone className="h-4 w-4 shrink-0 text-teal" />
                      <div>
                        <div className="text-xs text-muted-foreground">General Phone</div>
                        <div className="font-medium">+91 7788996549</div>
                      </div>
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-1">
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
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
                {/* Inquiry selector */}
                <div className="grid gap-3 sm:grid-cols-4">
                  {inquiryTypes.map((t) => {
                    const Icon = t.icon;
                    const active = type === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setType(t.id)}
                        className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all ${
                          active
                            ? "border-teal bg-teal/10 shadow-[0_20px_40px_-25px_oklch(0.72_0.13_190/0.5)]"
                            : "border-border bg-background hover:border-teal/50"
                        }`}
                      >
                        <div className={`grid h-9 w-9 place-items-center rounded-lg ${active ? "bg-teal text-white" : "bg-teal/10 text-teal"}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{t.label}</div>
                          <div className="text-[0.7rem] text-muted-foreground">{t.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={onSubmit} className="mt-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label={type === "career" ? "Personal email" : "Work email"} name="email" type="email" required />
                    {type !== "career" && <Field label="Company" name="company" required={type === "business" || type === "project"} />}
                    {type === "career" && <Field label="Current role / title" name="role" />}
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Phone
                      </label>
                      <div className="grid grid-cols-[120px_1fr] gap-3">
                        <select
                          name="dial"
                          value={dial}
                          onChange={(e) => setDial(e.target.value)}
                          className="rounded-2xl border border-border bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-teal"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code}>{c.code} {c.name}</option>
                          ))}
                        </select>
                        <input
                          name="phone"
                          type="tel"
                          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Country
                      </label>
                      <select
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                      >
                        {countries.map((c) => <option key={c.name}>{c.name}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Type-specific fields */}
                  {type === "project" && (
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <SelectField label="Service of interest" name="service" options={[
                        "Custom Software", "Web Development", "Mobile App", "AI Solutions",
                        "ERP", "CRM", "SaaS", "Cloud & DevOps", "UI/UX Design", "Maintenance", "E-Commerce",
                      ]} />
                      <SelectField label="Budget range (USD)" name="budget" options={[
                        "Under $10k", "$10k – $25k", "$25k – $75k", "$75k – $200k", "$200k+",
                      ]} />
                      <SelectField label="Timeline" name="timeline" options={[
                        "ASAP (< 4 weeks)", "1 – 3 months", "3 – 6 months", "6 – 12 months", "Exploring",
                      ]} />
                      <SelectField label="Project stage" name="stage" options={[
                        "Concept / idea", "Discovery / planning", "In development", "Rebuild / migration",
                      ]} />
                    </div>
                  )}

                  {type === "business" && (
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <SelectField label="Company size" name="size" options={[
                        "1 – 10", "11 – 50", "51 – 200", "201 – 1000", "1000+",
                      ]} />
                      <SelectField label="Industry" name="industry" options={[
                        "Manufacturing", "Healthcare", "Finance", "Retail", "E-Commerce", "Logistics",
                        "Real Estate", "Hospitality", "Insurance", "Construction", "Education", "Other",
                      ]} />
                    </div>
                  )}

                  {type === "career" && (
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <SelectField label="Position of interest" name="position" options={[
                        "Frontend Engineer", "Backend Engineer", "Full-stack Engineer",
                        "Mobile Engineer", "AI / ML Engineer", "DevOps Engineer",
                        "Product Designer", "QA Engineer", "Engineering Manager", "Internship", "Other",
                      ]} />
                      <SelectField label="Experience" name="experience" options={[
                        "0 – 1 year", "1 – 3 years", "3 – 5 years", "5 – 10 years", "10+ years",
                      ]} />
                      <Field label="Portfolio / LinkedIn URL" name="portfolio" type="url" />
                      <Field label="Resume link (Drive / Dropbox)" name="resume" type="url" />
                    </div>
                  )}

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {type === "career" ? "Tell us about yourself" : "Project details"}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={type === "career"
                        ? "What excites you about BLUETORN? Highlight projects you're proud of…"
                        : "Tell us about your goals, timelines and any current systems…"}
                      className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all hover:bg-teal hover:text-ink disabled:opacity-70"
                  >
                    {sending ? "Sending…" : type === "career" ? "Submit application" : "Send message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
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

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
