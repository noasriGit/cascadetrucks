import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { buildMetadata } from "@/lib/metadata";
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

      <CallToActionBar />
    </>
  );
}
