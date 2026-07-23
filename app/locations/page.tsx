import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceAreaGrid } from "@/components/marketing/ServiceAreaGrid";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { locations, pageLocations } from "@/data/locations";

const path = "/locations";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Commercial Vehicle Insurance Service Areas in Virginia",
    description:
      "Cascade Truck Insurance serves commercial vehicle and trucking businesses across Northern Virginia, Richmond, and statewide.",
    path,
  });
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Virginia Commercial Vehicle Insurance Service Areas",
          description:
            "Cascade Truck Insurance serves commercial vehicle and trucking businesses across Northern Virginia, Richmond, and statewide.",
          path,
          items: pageLocations.map((l) => ({
            name: `${l.city}, VA`,
            url: `/locations/${l.slug}`,
          })),
        })}
      />
      <Hero
        eyebrow="Locations"
        headline="Virginia Commercial Vehicle Insurance Near You"
        subheadline="We write commercial truck and vehicle policies across Northern Virginia and the Commonwealth. Find your area below."
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Locations", path }]} />}
      />

      <Section ariaLabelledby="areas-list-heading">
        <SectionHeading
          id="areas-list-heading"
          eyebrow="Service Areas"
          title="Where we serve"
          description="Linked cities have a dedicated page. Don't see your city? We likely still cover it, just reach out."
        />
        <div className="mt-10">
          <ServiceAreaGrid locations={locations} />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
