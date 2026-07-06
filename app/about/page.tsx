import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroBrandLogo } from "@/components/layout/Logo";
import { TrustIndicators } from "@/components/marketing/TrustIndicators";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { PhoneLink } from "@/components/layout/PhoneLink";
import { buildMetadata } from "@/lib/metadata";
import { media } from "@/data/media";
import { site } from "@/data/site";

const path = "/about";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `About ${site.brandName}`,
    description: `${site.brandName} is the commercial vehicle insurance division of ${site.parentName}, serving Virginia trucking and commercial vehicle businesses from Manassas, VA.`,
    path,
    image: { src: media.teamPhoto.src, alt: media.teamPhoto.alt },
  });
}

const sections = [
  {
    heading: `A trucking insurance brand built on ${site.parentName}`,
    body: `${site.brandName} is the commercial vehicle and trucking specialty of ${site.parentName}, an independent agency with licensed advisors who focus on dump trucks, tow trucks, contractor vehicles, and fleets across Virginia.`,
  },
  {
    heading: "Local Virginia expertise",
    body: `From our office at ${site.address.street} in ${site.address.city}, we serve Northern Virginia and businesses statewide with coverage tailored to how you actually operate.`,
  },
  {
    heading: "An independent, client-first approach",
    body: "As an independent agency, we compare options from carriers like Progressive, Erie, Cincinnati, National General, Foremost, and Agency Insurance Company to find competitive, right-sized protection for your operation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={`A division of ${site.parentName}`}
        headline={`About ${site.brandName}`}
        subheadline="Virginia's commercial truck and vehicle insurance specialists, backed by an established, well-reviewed agency."
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path }]} />}
        showQuoteButton
        aside={<HeroBrandLogo />}
      />

      <Section ariaLabelledby="about-story-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="about-story-heading" eyebrow="Our Story" title="Who we are" />
            <div className="mt-8 space-y-8">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-xl font-bold text-ink">{s.heading}</h3>
                  <p className="mt-2 text-base leading-7 text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-line">
            <Image
              src={media.teamPhoto.src}
              alt={media.teamPhoto.alt}
              width={media.teamPhoto.width}
              height={media.teamPhoto.height}
              className="h-auto w-full object-cover"
              priority
            />
            <figcaption className="bg-surface-soft px-4 py-3 text-sm text-muted">
              Our licensed commercial lines team at {site.parentName}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="about-trust-heading">
        <h2 id="about-trust-heading" className="sr-only">
          Why clients trust us
        </h2>
        <TrustIndicators />
      </Section>

      <Section ariaLabelledby="about-office-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="order-2 overflow-hidden rounded-2xl shadow-elevated ring-1 ring-line lg:order-1">
            <Image
              src={media.officePhoto.src}
              alt={media.officePhoto.alt}
              width={media.officePhoto.width}
              height={media.officePhoto.height}
              className="h-auto w-full object-cover"
            />
            <figcaption className="bg-surface-soft px-4 py-3 text-sm text-muted">
              {site.address.street}, {site.address.city}, {site.address.regionCode} {site.address.postalCode}
            </figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="about-office-heading"
              eyebrow="Visit Us"
              title="Our Manassas office"
              description="Stop by, call, or email, we're here to help Virginia businesses find the right commercial vehicle coverage."
            />
            <address className="mt-6 space-y-1 not-italic text-base leading-7 text-muted">
              <span className="block font-semibold text-ink">{site.parentName}</span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.regionCode} {site.address.postalCode}
            </address>
            <p className="mt-4 text-sm text-muted">
              <PhoneLink className="font-semibold text-brand-700 hover:underline">
                {site.phoneDisplay}
              </PhoneLink>
              {" · "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-700 hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">Monday–Friday 9am–6pm, closed weekends</p>
          </div>
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
