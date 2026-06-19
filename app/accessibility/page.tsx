import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "/accessibility";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Accessibility Statement",
    description: `${site.brandName} is working to make this website accessible and usable. Contact us if you experience difficulty accessing any content.`,
    path,
  });
}

export default function AccessibilityPage() {
  return (
    <>
      <Section tone="brand" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Accessibility", path }]} />
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Accessibility statement</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            {site.brandName} is committed to making our website accessible and usable for as many people as
            possible. We aim to follow generally recognized accessibility standards, including WCAG 2.1 AA and
            WCAG 2.2 AA where practical.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="accessibility-commitment-heading">
        <SectionHeading
          id="accessibility-commitment-heading"
          eyebrow="Our commitment"
          title="What we are doing"
        />
        <div className="prose-accessibility mt-8 max-w-3xl space-y-6 text-base leading-7 text-muted">
          <p>
            We review this website for accessibility on an ongoing basis. Our work includes semantic page
            structure, keyboard-friendly navigation, visible focus indicators, descriptive link and button
            labels, form labels and error messaging, and support for reduced motion preferences.
          </p>
          <p>
            This statement describes our current efforts. It is not a guarantee that every page or feature meets
            every accessibility requirement. Some areas may still need improvement or manual review.
          </p>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="accessibility-feedback-heading">
        <SectionHeading
          id="accessibility-feedback-heading"
          eyebrow="Need assistance?"
          title="Report a barrier"
        />
        <div className="mt-8 max-w-3xl space-y-6 text-base leading-7 text-muted">
          <p>
            If you experience difficulty accessing any part of this website, please contact us so we can assist
            you and work to address the issue.
          </p>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold text-ink">Email: </span>
              <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Phone: </span>
              <a href={`tel:${site.phoneHref}`} className="font-medium text-brand-700 hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Contact page: </span>
              <Link href="/contact" className="font-medium text-brand-700 hover:underline">
                Contact {site.brandName}
              </Link>
            </li>
          </ul>
          <p className="text-sm">
            When you reach out, please include the page URL, a brief description of the issue, and the browser or
            assistive technology you were using if possible.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ClickToCall variant="solid" />
            <Button href="/contact" variant="secondary" size="lg">
              Contact us online
            </Button>
          </div>
        </div>
      </Section>

      <Section ariaLabelledby="accessibility-review-heading">
        <SectionHeading
          id="accessibility-review-heading"
          eyebrow="Additional review"
          title="Items that may need separate review"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            Some third-party services, embedded content, or carrier-provided tools linked from this site may not
            be fully under our control. Those experiences may require separate accessibility review by their
            providers.
          </p>
          <p className="text-sm">
            Last updated: June 2026. We will update this page as we continue accessibility improvements.
          </p>
        </div>
      </Section>
    </>
  );
}
