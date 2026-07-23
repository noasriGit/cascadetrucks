import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "/terms";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Terms of Use",
    description: `Terms of use for the ${site.brandName} website operated by ${site.parentName}.`,
    path,
  });
}

export default function TermsPage() {
  return (
    <>
      <Section tone="brand" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Use", path }]} />
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Terms of use</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            By using this website, you agree to these terms. {site.brandName} is a commercial vehicle insurance
            brand of {site.parentName} ({site.legalName}).
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="terms-info-heading">
        <SectionHeading
          id="terms-info-heading"
          eyebrow="Informational content"
          title="This site does not create a policy or contract"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            Guides, coverage descriptions, FAQs, and other materials on this site are for general information
            only. They are not legal advice, underwriting advice, or a promise of coverage. Actual insurance is
            subject to carrier underwriting, policy forms, endorsements, and applicable law.
          </p>
          <p>
            Submitting a quote request does not bind coverage. A licensed advisor may follow up, and any policy is
            issued by the insurance company that accepts the risk.
          </p>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="terms-use-heading">
        <SectionHeading id="terms-use-heading" eyebrow="Acceptable use" title="How you may use this website" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            You may browse and request quotes for legitimate commercial insurance needs. Do not misuse the site,
            attempt to disrupt it, scrape it in a way that harms service, or submit false information for quotes or
            other forms.
          </p>
          <p>
            Content on this site is owned by {site.legalName} or its licensors. You may not copy or republish
            substantial portions for commercial use without permission.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="terms-liability-heading">
        <SectionHeading id="terms-liability-heading" eyebrow="Liability" title="Limits of responsibility" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            We work to keep information accurate and the site available, but we do not warrant that every page is
            complete, current, or error-free. Third-party sites and carrier tools linked from this website have
            their own terms and privacy practices.
          </p>
          <p>
            To the fullest extent permitted by law, {site.legalName} is not liable for indirect or consequential
            damages arising from use of this website. These terms are governed by the laws of the Commonwealth of
            Virginia.
          </p>
          <p className="text-sm">
            Last updated: July 2026. See also our{" "}
            <Link href="/privacy" className="font-medium text-brand-700 hover:underline">
              Privacy policy
            </Link>{" "}
            and{" "}
            <Link href="/editorial-standards" className="font-medium text-brand-700 hover:underline">
              Editorial standards
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
