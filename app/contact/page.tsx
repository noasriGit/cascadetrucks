import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { ClickToCall } from "@/components/layout/ClickToCall";
import { PhoneLink } from "@/components/layout/PhoneLink";
import { DetailHero } from "@/components/marketing/DetailHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { buildMetadata } from "@/lib/metadata";
import { media } from "@/data/media";
import { site } from "@/data/site";

const path = "/contact";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Contact Cascade Trucks Insurance",
    description:
      "Contact Cascade Trucks Insurance for Virginia commercial vehicle and trucking insurance. Call, email, or request a quote online.",
    path,
  });
}

export default function ContactPage() {
  return (
    <>
      <DetailHero
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path }]} />}
        eyebrow="Contact"
        headline="Contact us"
        subheadline="Reach a licensed Cascade advisor about commercial vehicle insurance anywhere in Virginia."
      />

      <Section ariaLabelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact details and quote request
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <figure className="mb-8 overflow-hidden rounded-2xl shadow-card ring-1 ring-line">
              <Image
                src={media.officePhoto.src}
                alt={media.officePhoto.alt}
                width={media.officePhoto.width}
                height={media.officePhoto.height}
                className="h-auto w-full object-cover"
              />
            </figure>
            <h3 className="text-xl font-bold text-brand-800">Get in touch</h3>
            <dl className="mt-6 space-y-5 text-base">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">Phone</dt>
                <dd className="mt-1">
                  <PhoneLink className="font-semibold text-brand-800 hover:underline">
                    {site.phoneDisplay}
                  </PhoneLink>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-brand-800 hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">Office</dt>
                <dd className="mt-1 not-italic text-muted">
                  <address className="not-italic">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.regionCode} {site.address.postalCode}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-brand-600">Hours</dt>
                <dd className="mt-1 text-muted">Monday&ndash;Friday 8am&ndash;6pm, Saturday 9am&ndash;1pm</dd>
              </div>
            </dl>
            <div className="mt-8">
              <ClickToCall variant="solid" />
            </div>
          </div>

          <div>
            <QuoteForm heading="Send us a message" description="We'll respond promptly during business hours." />
          </div>
        </div>
      </Section>
    </>
  );
}
