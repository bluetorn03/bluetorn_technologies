export function SectionEyebrow({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${tone === "light" ? "text-teal" : "text-teal"}`}>
      <span className="h-px w-8 bg-teal/60" />
      {children}
    </div>
  );
}
