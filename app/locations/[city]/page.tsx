import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { Button } from "@/components/ui/Button";
import { DetailHero } from "@/components/marketing/DetailHero";
import { ContentSections } from "@/components/marketing/ContentSections";
import { Faq } from "@/components/marketing/Faq";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { locationSchema } from "@/lib/schema";
import { pageLocations, getLocation, getLocations } from "@/data/locations";
import { getServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";

export const dynamicParams = false;

export function generateStaticParams() {
  return pageLocations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata(props: PageProps<"/locations/[city]">): Promise<Metadata> {
  const { city } = await props.params;
  const location = getLocation(city);
  if (!location) return {};
  return buildMetadata({
    title: `Commercial Truck Insurance in ${location.city}, VA`,
    description: location.shortDescription,
    path: `/locations/${location.slug}`,
    image: { src: location.image.src, alt: location.image.alt },
  });
}

export default async function LocationPage(props: PageProps<"/locations/[city]">) {
  const { city } = await props.params;
  const location = getLocation(city);
  if (!location || !location.hasPage) notFound();

  const path = `/locations/${location.slug}`;
  const faqs = getFaqs(location.faqIds);
  const relatedServices = getServices(location.relatedServiceSlugs);
  const nearby = getLocations(location.nearbyLocationSlugs).filter((l) => l.hasPage);

  return (
    <>
      <JsonLd data={locationSchema(location, path)} />

      <DetailHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: `${location.city}, VA`, path },
            ]}
          />
        }
        eyebrow={location.region}
        headline={location.headline}
        subheadline={location.heroSubheadline}
        actions={
          <>
            <ClickToCall variant="solid" />
            <Button href="/quote" variant="outlineLight" size="lg">
              Request a Quote
            </Button>
          </>
        }
        aside={
          <div className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-white/10">
            <Image
              src={location.image.src}
              alt={location.image.alt}
              width={location.image.width}
              height={location.image.height}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        }
      />

      <Section ariaLabelledby="location-overview-heading">
        <h2 id="location-overview-heading" className="sr-only">
          Commercial vehicle insurance in {location.city}
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContentSections sections={location.sections} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface-soft p-6 shadow-card">
              <h3 className="text-base font-semibold text-brand-800">Coverage for {location.city}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <a href={`/coverage/${s.slug}`} className="font-medium text-brand-700 transition-colors hover:text-brand-900 hover:underline">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="location-faq-heading">
        <SectionHeading id="location-faq-heading" eyebrow="FAQ" title={`${location.city} insurance FAQs`} />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
      </Section>

      <Section ariaLabelledby="location-related-heading">
        <SectionHeading id="location-related-heading" eyebrow="Explore More" title="Coverage & nearby areas" />
        <div className="mt-10">
          <RelatedLinks
            groups={[
              {
                heading: "Popular coverage",
                links: relatedServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
              },
              {
                heading: "Nearby service areas",
                links: nearby.map((l) => ({ label: `${l.city}, VA`, href: `/locations/${l.slug}` })),
              },
            ]}
          />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
