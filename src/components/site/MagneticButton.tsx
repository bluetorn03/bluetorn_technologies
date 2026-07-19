import { Link } from "@tanstack/react-router";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

interface Props {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

const base =
  "btn-magnetic inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-ink shadow-[0_10px_40px_-10px_oklch(0.72_0.13_190/0.6)] hover:shadow-[0_20px_60px_-15px_oklch(0.72_0.13_190/0.8)] hover:brightness-110",
  ghost:
    "text-white/90 border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40",
  outline:
    "border border-ink/15 text-ink hover:border-teal hover:text-teal bg-transparent",
};

export function MagneticButton({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        ref={ref as never}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        className={cls}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href ?? "#"}
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={cls}
    >
      {children}
    </a>
  );
}
