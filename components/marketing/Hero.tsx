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
  backgroundImage?: { src: string };
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
  // On mobile when both an aside and a background image are present, the image
  // is scoped to the text column so it fills and crops to that area only.
  // The aside gets a solid blue background instead.
  const mobileImageMode = !!(aside && backgroundImage);

  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      {/* Banner photo: full-bleed on desktop; on mobile it moves inside the text column. */}
      {backgroundImage ? (
        <div aria-hidden="true" className={`absolute inset-0 ${mobileImageMode ? "hidden lg:block" : ""}`}>
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
          {/* Left-to-right scrim keeps the headline readable over the photo. */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 from-[30%] via-brand-900/60 via-[52%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/15 via-transparent to-brand-950/40" />
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

      {/*
        mobileImageMode: Container has no mobile padding; the text column owns it so
        the image (absolute inset-0 inside the text column) covers from the very top
        of the section down to the bottom of the text content.
      */}
      <Container className={`relative ${
        mobileImageMode
          ? "lg:py-24"
          : aside
            ? "pt-14 sm:pt-18 lg:py-24"
            : "py-14 sm:py-18 lg:py-24"
      }`}>
        {breadcrumbs ? <div className="mb-6">{breadcrumbs}</div> : null}
        <div className="grid items-center gap-0 lg:gap-10 lg:grid-cols-2">
          <div className={mobileImageMode ? "relative pt-14 sm:pt-18 pb-8 lg:pt-0 lg:pb-0" : ""}>
            {/* Mobile-only: image scoped to this column so it fills and crops to this area. */}
            {mobileImageMode ? (
              <div aria-hidden="true" className="absolute inset-y-0 -left-4 -right-4 sm:-left-6 sm:-right-6 lg:hidden">
                <Image
                  src={backgroundImage.src}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-[72%_center]"
                />
                {/* Flat tint for even lighting across the full image on mobile. */}
                <div className="absolute inset-0 bg-brand-900/50" />
                {/* Fade the top and bottom edges into the surrounding blue. */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-transparent to-brand-900" />
              </div>
            ) : null}
            <div className={mobileImageMode ? "relative" : ""}>
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
          </div>

          {aside ? (
            <div className="-mx-4 sm:-mx-6 lg:mx-0 bg-brand-900 lg:bg-transparent px-4 sm:px-6 lg:px-0 lg:pl-4 pt-10 lg:pt-0 pb-14 sm:pb-18 lg:pb-0">
              {aside}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
