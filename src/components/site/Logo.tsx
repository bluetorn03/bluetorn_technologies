import logoAsset from "@/assets/bluetorn-logo.png.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="BLUETORN Technologies"
      width={72}
      height={72}
      className={`${className} rounded-lg object-cover`}
    />
  );
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-2.5">
      <Logo className="h-9 w-9" />
      <span
        className={`font-display text-[1.1rem] font-bold tracking-[0.16em] leading-none ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        BLUETORN
      </span>
    </div>
  );
}
