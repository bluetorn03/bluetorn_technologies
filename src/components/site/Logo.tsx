import bluetornLogo from "@/assets/images/BluetornLogo.webp";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={bluetornLogo}
      alt="BLUETORN Technologies"
      width={72}
      height={72}
      className={`${className} object-contain`}
    />
  );
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-3">
      <Logo className="h-9 w-9" />
      <span
        className={`font-display text-[1.15rem] font-bold tracking-[0.18em] leading-none ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        BLUETORN
      </span>
    </div>
  );
}
