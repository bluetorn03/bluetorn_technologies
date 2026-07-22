import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export type PortfolioSlide = {
  img: string;
  title: string;
  tag: string;
  category?: string;
  heightClass?: string; // Varied heights like the reference layout
};

interface PortfolioCarouselProps {
  slides: PortfolioSlide[];
  onSelectSlide?: (slide: PortfolioSlide) => void;
}

export function PortfolioCarousel({ slides }: PortfolioCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate slides array to create a seamless infinite loop
  const infiniteSlides = [...slides, ...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Top and Bottom subtle gradients for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-ink to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-ink to-transparent"
      />

      {/* Side edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-r from-ink via-ink/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-l from-ink via-ink/80 to-transparent"
      />

      {/* Main Marquee Track */}
      <div
        className="flex w-max items-center gap-6 md:gap-8 hover:[animation-play-state:paused]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: "portfolio-marquee 45s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {infiniteSlides.map((slide, index) => {
          // Preset varied card heights for a dynamic layout inspired by the reference
          const heightClasses = [
            "h-[340px] md:h-[400px]",
            "h-[290px] md:h-[350px]",
            "h-[380px] md:h-[440px]",
            "h-[310px] md:h-[370px]",
            "h-[360px] md:h-[420px]",
          ];
          const heightClass =
            slide.heightClass || heightClasses[index % heightClasses.length];

          return (
            <div
              key={`${slide.title}-${index}`}
              className={`group relative w-[260px] sm:w-[300px] md:w-[340px] shrink-0 overflow-hidden rounded-[2.25rem] border border-white/15 bg-card/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:border-teal/50 hover:shadow-[0_30px_70px_-20px_rgba(56,224,208,0.4)] ${heightClass}`}
            >
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:from-ink/95 group-hover:via-ink/40" />

              {/* Top Tag Badge */}
              <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/70 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-wide text-white backdrop-blur-md transition-all group-hover:border-teal/50 group-hover:text-teal-glow">
                <Sparkles className="h-3 w-3 text-teal" />
                {slide.tag}
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6 text-white transition-transform duration-300">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-teal">
                    {slide.category || "Case Study"}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug md:text-xl text-white group-hover:text-teal-glow transition-colors">
                  {slide.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Marquee Animation Keyframes injected in inline style */}
      <style>{`
        @keyframes portfolio-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
    </div>
  );
}
