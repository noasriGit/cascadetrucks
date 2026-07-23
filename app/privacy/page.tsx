import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

const path = "/privacy";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Privacy Policy",
    description: `How ${site.brandName} and ${site.parentName} collect, use, and protect information submitted through this website.`,
    path,
  });
}

export default function PrivacyPage() {
  return (
    <>
      <Section tone="brand" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path }]} />
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy policy</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-100">
            This policy explains how {site.brandName}, a commercial vehicle specialty of {site.parentName} (
            {site.legalName}), handles information you share with us online.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="privacy-who-heading">
        <SectionHeading id="privacy-who-heading" eyebrow="Who we are" title="Contact for privacy questions" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            {site.brandName} operates this website from {site.address.street}, {site.address.city},{" "}
            {site.address.regionCode} {site.address.postalCode}. For privacy questions, email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${site.phoneHref}`} className="font-medium text-brand-700 hover:underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="privacy-collect-heading">
        <SectionHeading
          id="privacy-collect-heading"
          eyebrow="Information we collect"
          title="What you provide and what we receive automatically"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>When you request a quote or contact us, you may provide:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Name, phone number, email address, and business details</li>
            <li>Vehicle, driver, and coverage information needed to shop insurance</li>
            <li>Other details you choose to include in a message or form</li>
          </ul>
          <p>
            Like most websites, we and our service providers may collect technical information such as IP address,
            browser type, device information, and pages viewed. We use analytics and advertising tools (including
            Google Tag Manager, Google Ads, and Ahrefs analytics) that may set cookies or similar technologies.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="privacy-use-heading">
        <SectionHeading id="privacy-use-heading" eyebrow="How we use information" title="Why we collect data" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>We use information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to quote requests and questions</li>
            <li>Compare coverage options with insurance carriers and underwriters</li>
            <li>Operate, secure, and improve this website</li>
            <li>Measure marketing performance and reach people who may need commercial vehicle insurance</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
          <p>
            We do not sell your personal information. We may share information with insurance carriers, underwriting
            partners, and service providers who help us quote, bind, or service coverage, and when required by law.
          </p>
        </div>
      </Section>

      <Section tone="soft" ariaLabelledby="privacy-choices-heading">
        <SectionHeading id="privacy-choices-heading" eyebrow="Your choices" title="Access and questions" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            You can ask us to update contact details we hold about you, or to limit marketing communications, by
            emailing or calling us. Browser settings also let you block or delete cookies; some site features may
            not work as intended if you do.
          </p>
          <p>
            This website is intended for people seeking commercial vehicle insurance information in Virginia. It is
            not directed to children under 13.
          </p>
          <p className="text-sm">
            Last updated: July 2026. Related pages:{" "}
            <Link href="/terms" className="font-medium text-brand-700 hover:underline">
              Terms of use
            </Link>
            ,{" "}
            <Link href="/contact" className="font-medium text-brand-700 hover:underline">
              Contact
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
