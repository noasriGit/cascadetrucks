import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { RelatedHubs } from "@/components/marketing/RelatedHubs";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { industryServices } from "@/data/services";

const path = "/industries";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Industry Vehicle Insurance in Virginia",
    description:
      "Commercial vehicle insurance for Virginia contractors, plumbers, HVAC, landscaping, construction, towing, and dump truck operators.",
    path,
  });
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Vehicle Insurance for Virginia Industries",
          description:
            "Commercial vehicle insurance for Virginia contractors, plumbers, HVAC, landscaping, construction, towing, and dump truck operators.",
          path,
          items: industryServices.map((s) => ({ name: s.name, url: `/coverage/${s.slug}` })),
        })}
      />
      <Hero
        eyebrow="Industries"
        headline="Vehicle Insurance for Virginia Industries"
        subheadline="Coverage tailored to the trades and operators we serve, from contractors and service vans to dump and tow trucks."
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Industries", path }]} />}
      />

      <Section ariaLabelledby="industries-list-heading">
        <SectionHeading
          id="industries-list-heading"
          eyebrow="By Industry"
          title="Find coverage for your operation"
          description="Each industry has unique exposures. Choose your business type to learn what coverage fits."
        />
        <div className="mt-10">
          <CoverageGrid services={industryServices} />
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="industries-related-hubs-heading">
        <SectionHeading
          id="industries-related-hubs-heading"
          eyebrow="Explore More"
          title="Related coverage areas"
          description="Pair industry coverage with vehicle types, locations, and guides."
        />
        <div className="mt-10">
          <RelatedHubs
            hubs={[
              {
                label: "Coverage Types",
                href: "/coverage",
                description: "Compare commercial auto, fleet, and Uber Black coverage options.",
              },
              {
                label: "Vehicle Types",
                href: "/vehicles",
                description: "Browse trucks, trailers, vans, and specialty vehicles we insure.",
              },
              {
                label: "Resources",
                href: "/resources",
                description: "Guides on dump truck, tow, fleet, and commercial auto insurance.",
              },
            ]}
          />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
