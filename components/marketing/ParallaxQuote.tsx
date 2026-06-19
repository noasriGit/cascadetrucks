"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

interface ParallaxQuoteProps {
  quote: string;
  author?: string;
  detail?: string;
  rating?: number;
  imageSrc: string;
  /** Tailwind object-position for the bg image, e.g. "object-[60%_40%]" */
  imagePosition?: string;
  className?: string;
}

export function ParallaxQuote({
  quote,
  author,
  detail,
  rating = 0,
  imageSrc,
  imagePosition = "object-center",
  className,
}: ParallaxQuoteProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height / 2);
        const offset = progress * 40;
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <figure
      className={cn(
        "relative h-64 overflow-hidden sm:h-72 lg:h-80",
        className,
      )}
    >
      <div
        ref={imgRef}
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-10 -top-10 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          className={cn("h-full w-full object-cover", imagePosition)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-950/50" />
        <div className="absolute inset-0 bg-brand-950/30" />
      </div>

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {rating > 0 ? (
              <div className="mb-4 flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" aria-hidden="true" />
                ))}
              </div>
            ) : null}
            <blockquote className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
            {author ? (
              <figcaption className="mt-4">
                <span className="block text-sm font-bold text-accent-400">{author}</span>
                {detail ? (
                  <span className="block text-sm text-brand-200">{detail}</span>
                ) : null}
              </figcaption>
            ) : null}
          </div>
        </div>
      </div>
    </figure>
  );
}
