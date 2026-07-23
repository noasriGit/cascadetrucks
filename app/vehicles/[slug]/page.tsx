import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { DetailHero } from "@/components/marketing/DetailHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContentSections } from "@/components/marketing/ContentSections";
import { Faq } from "@/components/marketing/Faq";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { AuthorBio } from "@/components/marketing/AuthorBio";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { vehicleTypeSchema } from "@/lib/schema";
import { vehicles, getVehicle, getVehicles } from "@/data/vehicles";
import { getLocations } from "@/data/locations";
import { getResources } from "@/data/resources";
import { getServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { authors } from "@/data/authors";
import { site } from "@/data/site";
import { getHeroImage } from "@/data/hero-images";

export const dynamicParams = false;

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata(props: PageProps<"/vehicles/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return {};
  return buildMetadata({
    title: `${vehicle.name} in Virginia`,
    description: vehicle.metaDescription,
    path: `/vehicles/${vehicle.slug}`,
    image: { src: vehicle.image.src, alt: vehicle.image.alt },
  });
}

const GROUP_LABELS: Record<string, string> = {
  truck: "Trucks",
  trailer: "Trailers",
  "car-van": "Cars & Vans",
  "bus-motorhome": "Buses & Motor Homes",
  debris: "Debris Removal Vehicles",
};

export default async function VehiclePage(props: PageProps<"/vehicles/[slug]">) {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const path = `/vehicles/${vehicle.slug}`;
  const faqs = getFaqs(vehicle.faqIds);
  const relatedVehicles = getVehicles(vehicle.relatedVehicleSlugs);
  const relatedServices = getServices(vehicle.relatedServiceSlugs);
  const relatedLocations = getLocations(vehicle.relatedLocationSlugs).filter((l) => l.hasPage);
  const relatedResources = getResources(vehicle.relatedResourceSlugs);
  const author = authors[0];

  return (
    <>
      <JsonLd data={vehicleTypeSchema(vehicle, path)} />

      <DetailHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Vehicle Types", path: "/vehicles" },
              { name: vehicle.name, path },
            ]}
          />
        }
        eyebrow={GROUP_LABELS[vehicle.vehicleGroup] ?? "Vehicle Type"}
        headline={vehicle.heroHeadline}
        subheadline={vehicle.heroSubheadline}
        actions={<ClickToCall variant="solid" />}
        backgroundImage={getHeroImage(vehicle.slug)}
        aside={
          <QuoteForm
            defaultCoverage={vehicle.name}
            heading="Get your free quote"
            description="Tell us about your vehicles and we'll follow up fast."
          />
        }
      />

      <Section ariaLabelledby="vehicle-overview-heading">
        <h2 id="vehicle-overview-heading" className="sr-only">
          {vehicle.name} overview
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContentSections sections={vehicle.sections} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface-soft p-6 shadow-card">
              <h3 className="text-base font-semibold text-brand-800">Coverage highlights</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink">
                {vehicle.coverageHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-brand-700 p-6 text-white shadow-card">
              <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50" />
              <div className="relative">
                <p className="text-base font-semibold">Talk to a Virginia advisor</p>
                <p className="mt-1 text-sm text-brand-100">{site.phoneDisplay}</p>
                <div className="mt-4">
                  <ClickToCall variant="solid" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="vehicle-faq-heading">
        <SectionHeading id="vehicle-faq-heading" eyebrow="FAQ" title={`${vehicle.name} FAQs`} />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
        {author ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <AuthorBio author={author} reviewedDate={vehicle.updated} />
          </div>
        ) : null}
      </Section>

      <Section ariaLabelledby="vehicle-related-heading">
        <SectionHeading id="vehicle-related-heading" eyebrow="Explore More" title="Related vehicles & coverage" />
        <div className="mt-10">
          <RelatedLinks
            groups={[
              {
                heading: "Related vehicle types",
                links: relatedVehicles.map((v) => ({ label: v.name, href: `/vehicles/${v.slug}` })),
              },
              {
                heading: "Coverage & insurance",
                links: relatedServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
              },
              {
                heading: "Service areas",
                links: relatedLocations.map((l) => ({ label: `${l.city}, VA`, href: `/locations/${l.slug}` })),
              },
              {
                heading: "Guides",
                links: relatedResources.map((r) => ({ label: r.title, href: `/resources/${r.slug}` })),
              },
            ]}
          />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
