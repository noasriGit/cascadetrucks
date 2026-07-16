import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { DetailHero } from "@/components/marketing/DetailHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustIndicators } from "@/components/marketing/TrustIndicators";
import { Faq } from "@/components/marketing/Faq";
import { buildMetadata } from "@/lib/metadata";
import { getFaqs } from "@/data/faqs";
import { site } from "@/data/site";

const path = "/quote";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Request a Commercial Vehicle Insurance Quote",
    description:
      "Get a fast, no-obligation commercial truck and vehicle insurance quote in Virginia from Cascade Truck Insurance.",
    path,
  });
}

const faqs = getFaqs(["general-quote-speed", "general-cost", "general-requirements", "general-multi-vehicle"]);

export default function QuotePage() {
  return (
    <>
      <DetailHero
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path }]} />}
        eyebrow="Free quote"
        headline="Request your Virginia commercial vehicle insurance quote"
        subheadline="Share a few details about your vehicles and operation. A licensed Cascade advisor will follow up with competitive, no-obligation pricing."
        actions={
          <div>
            <ClickToCall variant="solid" />
            <p className="mt-3 text-sm text-brand-200">Prefer to talk now? Call {site.phoneDisplay}.</p>
          </div>
        }
        backgroundImage={{ src: "/images/hero-banner.png" }}
        aside={<QuoteForm heading="Get your free quote" description="It only takes a minute." />}
      />

      <Section tone="soft" ariaLabelledby="quote-trust-heading">
        <h2 id="quote-trust-heading" className="sr-only">
          Why choose Cascade
        </h2>
        <TrustIndicators />
      </Section>

      <Section ariaLabelledby="quote-faq-heading">
        <SectionHeading id="quote-faq-heading" eyebrow="FAQ" title="Quote questions" />
        <div className="mt-10">
          <Faq faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
