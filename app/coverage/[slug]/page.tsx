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
import { serviceSchema } from "@/lib/schema";
import { services, getService, getServices } from "@/data/services";
import { getLocations } from "@/data/locations";
import { getResources } from "@/data/resources";
import { getVehicles } from "@/data/vehicles";
import { getFaqs } from "@/data/faqs";
import { authors } from "@/data/authors";
import { site } from "@/data/site";
import { getHeroImage } from "@/data/hero-images";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/coverage/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Virginia`,
    description: service.shortDescription,
    path: `/coverage/${service.slug}`,
    image: { src: service.image.src, alt: service.image.alt },
  });
}

export default async function ServicePage(props: PageProps<"/coverage/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/coverage/${service.slug}`;
  const faqs = getFaqs(service.faqIds);
  const relatedServices = getServices(service.relatedServiceSlugs);
  const relatedLocations = getLocations(service.relatedLocationSlugs).filter((l) => l.hasPage);
  const relatedResources = getResources(service.relatedResourceSlugs);
  const relatedVehicles = getVehicles(service.relatedVehicleSlugs ?? []);
  const author = authors[0];

  return (
    <>
      <JsonLd data={serviceSchema(service, path)} />

      <DetailHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Coverage", path: "/coverage" },
              { name: service.name, path },
            ]}
          />
        }
        eyebrow={service.category === "industry" ? "Industry Coverage" : "Coverage Type"}
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        actions={<ClickToCall variant="solid" />}
        backgroundImage={getHeroImage(service.slug)}
        aside={
          <QuoteForm
            defaultCoverage={service.name}
            heading="Get your free quote"
            description="Tell us about your operation and we'll follow up fast."
          />
        }
      />

      <Section ariaLabelledby="service-overview-heading">
        <h2 id="service-overview-heading" className="sr-only">
          {service.name} overview
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContentSections sections={service.sections} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface-soft p-6 shadow-card">
              <h3 className="text-base font-semibold text-brand-800">Coverage highlights</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink">
                {service.coverageHighlights.map((h) => (
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

      <Section tone="soft" ariaLabelledby="service-faq-heading">
        <SectionHeading id="service-faq-heading" eyebrow="FAQ" title={`${service.name} FAQs`} />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
        {author ? (
          <div className="mx-auto mt-10 max-w-3xl">
            <AuthorBio author={author} reviewedDate={service.updated} />
          </div>
        ) : null}
      </Section>

      <Section ariaLabelledby="service-related-heading">
        <SectionHeading id="service-related-heading" eyebrow="Explore More" title="Related coverage & locations" />
        <div className="mt-10">
          <RelatedLinks
            groups={[
              {
                heading: "Related coverage",
                links: relatedServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
              },
              {
                heading: "Vehicle types",
                links: relatedVehicles.map((v) => ({ label: v.name, href: `/vehicles/${v.slug}` })),
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
