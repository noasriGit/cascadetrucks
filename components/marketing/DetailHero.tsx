import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface DetailHeroProps {
  breadcrumbs?: ReactNode;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  /** Buttons / call-to-action row rendered under the copy. */
  actions?: ReactNode;
  /** Right-hand content: an image, quote form, etc. */
  aside?: ReactNode;
}

export function DetailHero({ breadcrumbs, eyebrow, headline, subheadline, actions, aside }: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-900/0 via-brand-900/0 to-brand-950/60" />

      <Container className="relative py-12 sm:py-16">
        {breadcrumbs ? <div className="mb-6">{breadcrumbs}</div> : null}
        <div className={aside ? "grid items-center gap-10 lg:grid-cols-2" : "max-w-3xl"}>
          <div>
            {eyebrow ? <Eyebrow invert>{eyebrow}</Eyebrow> : null}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">{headline}</h1>
            {subheadline ? <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">{subheadline}</p> : null}
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          </div>
          {aside ? <div className="lg:pl-4">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
