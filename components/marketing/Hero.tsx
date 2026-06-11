import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ctaNav } from "@/data/navigation";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  bullets?: string[];
  aside?: ReactNode;
  breadcrumbs?: ReactNode;
  showQuoteButton?: boolean;
  backgroundImage?: { src: string; alt: string };
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  bullets,
  aside,
  breadcrumbs,
  showQuoteButton = true,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      {/* Full-bleed banner photo (decorative); subject sits right-of-center. */}
      {backgroundImage ? (
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
          {/* Left-to-right scrim keeps the headline readable over the photo. */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/92 to-brand-900/45 sm:to-brand-900/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/30 via-transparent to-brand-950/70" />
        </div>
      ) : null}

      {/* Layered background: subtle grid + radial glow. */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-900/0 via-brand-900/0 to-brand-950/60"
      />

      <Container className="relative py-14 sm:py-18 lg:py-24">
        {breadcrumbs ? <div className="mb-6">{breadcrumbs}</div> : null}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            {eyebrow ? <Eyebrow invert>{eyebrow}</Eyebrow> : null}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">{subheadline}</p>

            {bullets && bullets.length > 0 ? (
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-brand-50 ring-1 ring-white/10"
                  >
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ClickToCall variant="solid" />
              {showQuoteButton ? (
                <Button href={ctaNav.href} variant="outlineLight" size="lg">
                  {ctaNav.label}
                </Button>
              ) : null}
            </div>
          </div>

          {aside ? <div className="lg:pl-4">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
