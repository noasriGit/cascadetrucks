import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { TrustIndicators } from "@/components/marketing/TrustIndicators";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { ServiceAreaGrid } from "@/components/marketing/ServiceAreaGrid";
import { CarrierLogos } from "@/components/marketing/CarrierLogos";
import { Reviews } from "@/components/marketing/Reviews";
import { Faq } from "@/components/marketing/Faq";
import { StatStrip } from "@/components/marketing/StatStrip";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { ParallaxQuote } from "@/components/marketing/ParallaxQuote";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { insuranceAgencySchema } from "@/lib/schema";
import { services, coverageServices, industryServices } from "@/data/services";
import { locations } from "@/data/locations";
import { getFaqs } from "@/data/faqs";
import { site } from "@/data/site";

const homeFaqs = getFaqs([
  "general-cost",
  "general-requirements",
  "general-quote-speed",
  "general-multi-vehicle",
]);

const whyCascade = [
  {
    title: "Trucking & commercial vehicle focus",
    body: "We specialize in dump trucks, tow trucks, contractor vehicles, and fleets across Virginia.",
  },
  {
    title: "Multiple carrier partners",
    body: "As an independent agency, we compare options to find competitive, right-sized coverage.",
  },
  {
    title: "Local Virginia service",
    body: "Licensed advisors who understand Northern Virginia and statewide operating conditions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Re-enable withReviews once real, attributable reviews are added to data/reviews.ts. */}
      <JsonLd data={insuranceAgencySchema()} />

      <Hero
        eyebrow={site.tagline}
        headline="Virginia Commercial Truck & Vehicle Insurance"
        subheadline="Fast quotes and dependable coverage for dump trucks, tow trucks, contractor vehicles, fleets, and more, across Northern Virginia and statewide."
        bullets={[
          "Dump, tow & construction trucks",
          "Contractor & service vans",
          "Commercial fleets",
          "Uber Black & livery",
        ]}
        backgroundImage={{
          src: "/images/hero-banner.png",
          alt: "Commercial trucks on a Virginia highway",
        }}
        aside={<QuoteForm />}
      />

      <Section tone="soft" ariaLabelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">
          Why businesses trust {site.brandName}
        </h2>
        <TrustIndicators />
      </Section>

      <Section ariaLabelledby="coverage-heading">
        <SectionHeading
          id="coverage-heading"
          eyebrow="Coverage Types"
          title="Commercial vehicle insurance we offer"
          description="Explore our coverage categories built for Virginia trucking and commercial vehicle businesses."
        />
        <div className="mt-10">
          <CoverageGrid services={coverageServices} />
        </div>
      </Section>

      <ParallaxQuote
        quote="Cascade had our dump truck fleet covered in less than a day. The whole process was painless and the pricing beat every other agency we called."
        author="Mike R."
        detail="Owner, R&amp;R Excavation — Fairfax, VA"
        rating={5}
        imageSrc="/images/hero-banner.png"
        imagePosition="object-[65%_center]"
      />

      <Section tone="soft" ariaLabelledby="industries-heading">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Industry-specific vehicle coverage"
          description="Tailored protection for the trades and operators we serve every day."
        />
        <div className="mt-10">
          <CoverageGrid services={industryServices} />
        </div>
      </Section>

      <Section tone="brand" ariaLabelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Cascade by the numbers
        </h2>
        <StatStrip
          stats={[
            { value: `${site.aggregateRating.ratingValue}/5`, label: "Average review rating" },
            { value: `${site.aggregateRating.reviewCount}+`, label: "Client reviews" },
            { value: `${services.length}`, label: "Coverage types" },
            { value: "VA", label: "Statewide service" },
          ]}
        />
      </Section>

      <Section ariaLabelledby="areas-heading">
        <SectionHeading
          id="areas-heading"
          eyebrow="Service Areas"
          title="Serving businesses across Virginia"
          description="From Northern Virginia to Richmond, we write commercial vehicle policies statewide."
        />
        <div className="mt-10">
          <ServiceAreaGrid locations={locations} />
        </div>
        <p className="mt-6 text-sm text-muted">
          <Link href="/locations" className="font-semibold text-brand-600 hover:underline">
            View all service areas &rarr;
          </Link>
        </p>
      </Section>

      <Section tone="soft" ariaLabelledby="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow={`A division of ${site.parentName}`}
          title={`Why choose ${site.brandName}`}
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {whyCascade.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover">
              <h3 className="text-lg font-semibold text-brand-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section ariaLabelledby="carriers-heading">
        <SectionHeading
          id="carriers-heading"
          eyebrow="Carrier Partners"
          title="Backed by trusted insurance carriers"
          description="We compare coverage across multiple carrier partners to fit your operation."
        />
        <div className="mt-10">
          <CarrierLogos />
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="reviews-heading">
        <SectionHeading id="reviews-heading" eyebrow="Reviews" title="What Virginia businesses say" />
        <div className="mt-8">
          <Reviews />
        </div>
      </Section>

      <Section ariaLabelledby="faq-heading">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="Commercial vehicle insurance questions" />
        <div className="mt-10">
          <Faq faqs={homeFaqs} />
        </div>
      </Section>

      <CallToActionBar />

      <Section ariaLabelledby="explore-heading">
        <h2 id="explore-heading" className="sr-only">
          Explore all coverage and locations
        </h2>
        <Container className="px-0">
          <div className="grid gap-8 md:grid-cols-2">
            <nav aria-label="All coverage types">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-600">All coverage</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/coverage/${s.slug}`} className="text-sm text-brand-800 hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="All locations">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-600">Locations</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {locations
                  .filter((l) => l.hasPage)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link href={`/locations/${l.slug}`} className="text-sm text-brand-800 hover:underline">
                        {l.city}, VA
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </Container>
      </Section>
    </>
  );
}
