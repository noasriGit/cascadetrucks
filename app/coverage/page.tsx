import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { RelatedHubs } from "@/components/marketing/RelatedHubs";
import { Faq } from "@/components/marketing/Faq";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { coverageServices, industryServices, services } from "@/data/services";
import { getFaqs } from "@/data/faqs";

const path = "/coverage";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Commercial Vehicle Insurance Coverage in Virginia",
    description:
      "Explore commercial truck and vehicle insurance coverage types from Cascade Truck Insurance, serving businesses across Virginia.",
    path,
  });
}

const faqs = getFaqs(["general-requirements", "general-cost", "general-multi-vehicle", "general-quote-speed"]);

export default function CoveragePage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Virginia Commercial Vehicle Insurance Coverage",
          description:
            "Explore commercial truck and vehicle insurance coverage types from Cascade Truck Insurance, serving businesses across Virginia.",
          path,
          items: services.map((s) => ({ name: s.name, url: `/coverage/${s.slug}` })),
        })}
      />
      <Hero
        eyebrow="Coverage Types"
        headline="Virginia Commercial Vehicle Insurance Coverage"
        subheadline="Compare coverage built for trucking and commercial vehicle businesses, from single trucks to full fleets."
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Coverage", path }]} />}
      />

      <Section ariaLabelledby="coverage-types-heading">
        <SectionHeading id="coverage-types-heading" eyebrow="Coverage Types" title="Core commercial vehicle coverage" />
        <div className="mt-10">
          <CoverageGrid services={coverageServices} />
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="coverage-industries-heading">
        <SectionHeading
          id="coverage-industries-heading"
          eyebrow="Industries"
          title="Industry-specific vehicle coverage"
        />
        <div className="mt-10">
          <CoverageGrid services={industryServices} />
        </div>
      </Section>

      <Section ariaLabelledby="coverage-related-hubs-heading">
        <SectionHeading
          id="coverage-related-hubs-heading"
          eyebrow="Explore More"
          title="Related coverage areas"
          description="Browse vehicle types, service areas, and guides that connect to our coverage options."
        />
        <div className="mt-10">
          <RelatedHubs
            hubs={[
              {
                label: "Vehicle Types",
                href: "/vehicles",
                description: "See every commercial vehicle type we insure across Virginia.",
              },
              {
                label: "Service Areas",
                href: "/locations",
                description: "Find commercial vehicle insurance near you throughout Virginia.",
              },
              {
                label: "Resources",
                href: "/resources",
                description: "Read guides on commercial auto, fleets, dump trucks, and more.",
              },
            ]}
          />
        </div>
      </Section>

      <Section ariaLabelledby="coverage-faq-heading">
        <SectionHeading id="coverage-faq-heading" eyebrow="FAQ" title="Coverage questions" />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
