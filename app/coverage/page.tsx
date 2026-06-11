import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { Faq } from "@/components/marketing/Faq";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { buildMetadata } from "@/lib/metadata";
import { coverageServices, industryServices } from "@/data/services";
import { getFaqs } from "@/data/faqs";

const path = "/coverage";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Commercial Vehicle Insurance Coverage in Virginia",
    description:
      "Explore commercial truck and vehicle insurance coverage types from Cascade Trucks Insurance, serving businesses across Virginia.",
    path,
  });
}

const faqs = getFaqs(["general-requirements", "general-cost", "general-multi-vehicle", "general-quote-speed"]);

export default function CoveragePage() {
  return (
    <>
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
