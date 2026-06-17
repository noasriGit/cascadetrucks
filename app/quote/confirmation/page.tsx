import type { Metadata } from "next";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { PhoneLink } from "@/components/layout/PhoneLink";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { QUOTE_CONFIRMATION_PATH } from "@/lib/quote";
import { site } from "@/data/site";

const path = QUOTE_CONFIRMATION_PATH;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Quote Request Received",
    description: "Thank you for requesting a commercial vehicle insurance quote from Cascade Trucks Insurance.",
    path,
    noIndex: true,
  });
}

export default function QuoteConfirmationPage() {
  return (
    <>
      <Script id="google-ads-lead-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18231331009/gRQpCNn1qMAcEMGRsPVD',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
      <Section tone="brand" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Quote received", path }]} />
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">Thank you!</h1>
          <p className="mt-4 text-lg text-brand-100">
            Your quote request was received. A licensed Cascade advisor will contact you shortly with competitive,
            no-obligation pricing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ClickToCall variant="solid" />
            <Button href="/" variant="outlineLight" size="lg">
              Back to home
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            Need help sooner? Call{" "}
            <PhoneLink className="font-semibold text-white underline-offset-2 hover:underline">
              {site.phoneDisplay}
            </PhoneLink>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-white underline-offset-2 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
