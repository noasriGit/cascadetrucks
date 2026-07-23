import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CoverageGrid } from "@/components/marketing/CoverageGrid";
import { ServiceAreaGrid } from "@/components/marketing/ServiceAreaGrid";
import { CarrierLogos } from "@/components/marketing/CarrierLogos";
import { Faq } from "@/components/marketing/Faq";
import { Reviews } from "@/components/marketing/Reviews";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { ParallaxQuote } from "@/components/marketing/ParallaxQuote";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services, coverageServices, industryServices } from "@/data/services";
import { locations } from "@/data/locations";
import { getVehicles } from "@/data/vehicles";
import { getResources } from "@/data/resources";
import { getFaqs } from "@/data/faqs";
import { site } from "@/data/site";
import { media } from "@/data/media";

const homeFaqs = getFaqs([
  "general-cost",
  "general-requirements",
  "general-quote-speed",
  "general-multi-vehicle",
]);

const featuredVehicleSlugs = [
  "dump-trailer-insurance",
  "box-truck-insurance",
  "cargo-van-insurance",
  "truck-tractor-insurance",
  "flatbed-truck-insurance",
  "car-carrier-insurance",
  "commercial-pickup-insurance",
  "cement-mixer-truck-insurance",
  "limousine-insurance",
];

const featuredResourceSlugs = [
  "virginia-commercial-auto-insurance-guide",
  "how-dump-truck-insurance-works",
  "commercial-fleet-insurance-guide",
];

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
  const featuredVehicles = getVehicles(featuredVehicleSlugs);
  const featuredResources = getResources(featuredResourceSlugs);

  return (
    <>
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
        backgroundImage={{ src: "/images/hero-banner.png" }}
        aside={<QuoteForm />}
      />

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
        quote="Your fleet is your livelihood. Every mile on the road is a mile your business depends on, make sure it's covered."
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

      <Section ariaLabelledby="vehicles-heading">
        <SectionHeading
          id="vehicles-heading"
          eyebrow="Vehicle Types"
          title="Commercial vehicles we insure"
          description="From dump trailers and box trucks to cargo vans and livery vehicles, browse the equipment we cover across Virginia."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <li key={vehicle.slug}>
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className="flex items-center justify-between rounded-xl border border-line bg-surface p-4 shadow-card transition-shadow hover:shadow-elevated"
              >
                <span className="text-sm font-medium text-ink">{vehicle.name}</span>
                <span className="ml-2 flex-none text-brand-500" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          <Link href="/vehicles" className="font-semibold text-brand-600 hover:underline">
            View all vehicle types <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      <Section tone="brand" ariaLabelledby="about-preview-heading">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow invert>Our Team</Eyebrow>
            <h2
              id="about-preview-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Virginia-licensed advisors who know commercial trucking
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              {site.brandName} is the commercial vehicle specialty of {site.parentName}, an independent
              agency based in Manassas, VA. Our licensed team compares options across multiple
              carrier partners to find coverage built around how your operation actually runs.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50"
            >
              Meet our team <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-white/10">
            <Image
              src={media.teamPhoto.src}
              alt={media.teamPhoto.alt}
              width={media.teamPhoto.width}
              height={media.teamPhoto.height}
              className="h-auto w-full object-cover"
            />
          </figure>
        </div>
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
            View all Virginia service areas <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      <Section tone="soft" ariaLabelledby="resources-heading">
        <SectionHeading
          id="resources-heading"
          eyebrow="Resources"
          title="Guides for Virginia commercial operators"
          description="Plain-language explainers on coverage, requirements, and how to choose the right policy."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <li key={resource.slug}>
              <Link
                href={`/resources/${resource.slug}`}
                className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h3 className="text-lg font-semibold text-brand-800">{resource.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{resource.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-brand-600">
                  Read guide <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          <Link href="/resources" className="font-semibold text-brand-600 hover:underline">
            Browse all resources <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Section>

      <Section ariaLabelledby="reviews-heading">
        <SectionHeading
          id="reviews-heading"
          eyebrow="Customer reviews"
          title="What clients say about Cascade"
          description="A selection of reviews from Virginia customers who worked with our parent agency."
        />
        <div className="mt-10">
          <Reviews />
        </div>
      </Section>

      <Section ariaLabelledby="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow={`A division of ${site.parentName}`}
          title={`Why choose ${site.brandName}`}
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {whyCascade.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
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
