import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "/editorial-standards";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Editorial Standards",
    description: `How ${site.brandName} researches, reviews, and updates commercial vehicle insurance guides for Virginia businesses.`,
    path,
  });
}

export default function EditorialStandardsPage() {
  return (
    <>
      <Section tone="brand" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Editorial Standards", path }]} />
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Editorial standards</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            How we write and maintain insurance guides so Virginia operators get clear, careful information.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="editorial-purpose-heading">
        <SectionHeading
          id="editorial-purpose-heading"
          eyebrow="Purpose"
          title="Informational guides, not legal advice"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            Our resource guides explain commercial vehicle insurance concepts, Virginia requirements we see in
            day-to-day placement work, and questions clients ask often. They are educational. They do not create a
            policy, replace advice from a licensed professional, or bind coverage with any carrier.
          </p>
          <p>
            For a quote or to confirm how a rule applies to your operation,{" "}
            <Link href="/contact" className="font-medium text-brand-700 hover:underline">
              contact a Cascade advisor
            </Link>{" "}
            or request a quote online.
          </p>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="editorial-process-heading">
        <SectionHeading
          id="editorial-process-heading"
          eyebrow="Process"
          title="How we research and update content"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Content is written and reviewed by our commercial lines team at {site.parentName}, based in
              Manassas, Virginia.
            </li>
            <li>
              Regulatory claims are checked against primary sources such as the Code of Virginia, FMCSA rules, and
              Virginia DMV guidance when we cite them. Guides list those sources when available.
            </li>
            <li>
              Each guide shows a last-reviewed date. We update pages when statutes, carrier practices, or our
              placement experience change materially.
            </li>
            <li>
              We do not invent testimonials or credentials. Review markup only reflects reviews we are permitted to
              republish.
            </li>
          </ul>
        </div>
      </Section>

      <Section ariaLabelledby="editorial-corrections-heading">
        <SectionHeading
          id="editorial-corrections-heading"
          eyebrow="Corrections"
          title="Help us keep guides accurate"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            If you spot an error or outdated reference, email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
              {site.email}
            </a>{" "}
            with the page URL and what should be corrected. We will review and update when appropriate.
          </p>
          <p className="text-sm">
            Last updated: July 2026. Related:{" "}
            <Link href="/authors/cascade-commercial-team" className="font-medium text-brand-700 hover:underline">
              About our authors
            </Link>
            ,{" "}
            <Link href="/privacy" className="font-medium text-brand-700 hover:underline">
              Privacy policy
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
