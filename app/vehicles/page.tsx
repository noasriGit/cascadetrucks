import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedHubs } from "@/components/marketing/RelatedHubs";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { vehicles, vehiclesByGroup } from "@/data/vehicles";
import type { VehicleType } from "@/lib/types";

const path = "/vehicles";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Commercial Vehicle Types We Insure in Virginia",
    description:
      "Browse commercial vehicle types insured by Cascade Truck Insurance in Virginia: trucks, trailers, vans, buses, and debris removal. Request a quote today.",
    path,
  });
}

const groups: { id: string; label: string; vehicles: VehicleType[] }[] = [
  { id: "trucks", label: "Trucks", vehicles: vehiclesByGroup.truck },
  { id: "trailers", label: "Trailers", vehicles: vehiclesByGroup.trailer },
  { id: "cars-vans", label: "Cars & Vans", vehicles: vehiclesByGroup["car-van"] },
  { id: "buses", label: "Buses & Motor Homes", vehicles: vehiclesByGroup["bus-motorhome"] },
  { id: "debris", label: "Debris Removal", vehicles: vehiclesByGroup.debris },
];

export default function VehiclesPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: "Commercial Vehicles We Insure in Virginia",
          description:
            "Browse all commercial vehicle types insured by Cascade Truck Insurance in Virginia, trucks, trailers, vans, buses, and debris removal vehicles.",
          path,
          items: vehicles.map((v) => ({ name: v.name, url: `/vehicles/${v.slug}` })),
        })}
      />
      <Hero
        eyebrow="Vehicle Types"
        headline="Commercial Vehicles We Insure in Virginia"
        subheadline="From box trucks and flatbeds to cargo vans, buses, and roll-off trucks, if you use it for business in Virginia, we can insure it."
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Vehicle Types", path },
            ]}
          />
        }
      />

      <Section tone="soft" ariaLabelledby="vehicles-pillars-heading">
        <SectionHeading
          id="vehicles-pillars-heading"
          eyebrow="Coverage"
          title="Start with the right policy type"
          description="Vehicle coverage usually sits under commercial auto, fleet, or industry-specific programs."
        />
        <div className="mt-10">
          <RelatedHubs
            hubs={[
              {
                label: "Commercial Auto Insurance",
                href: "/coverage/commercial-auto-insurance",
                description: "Core liability and physical damage for business vehicles.",
              },
              {
                label: "Commercial Fleet Insurance",
                href: "/coverage/commercial-fleet-insurance",
                description: "Combined coverage when you run two or more vehicles.",
              },
              {
                label: "Industries",
                href: "/industries",
                description: "Industry programs for dump, tow, contractor, and construction fleets.",
              },
            ]}
          />
        </div>
      </Section>

      <Section ariaLabelledby="vehicles-groups-nav-heading">
        <h2 id="vehicles-groups-nav-heading" className="sr-only">
          Jump to a vehicle group
        </h2>
        <nav aria-label="Vehicle groups" className="flex flex-wrap gap-3">
          {groups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300 hover:text-brand-600"
            >
              {group.label}
            </Link>
          ))}
        </nav>
      </Section>

      {groups.map((group) => (
        <Section key={group.id} id={group.id} ariaLabelledby={`${group.id}-heading`}>
          <SectionHeading id={`${group.id}-heading`} eyebrow="Vehicle Type" title={group.label} />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.vehicles.map((vehicle) => (
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
        </Section>
      ))}

      <Section tone="soft" ariaLabelledby="vehicles-related-hubs-heading">
        <SectionHeading id="vehicles-related-hubs-heading" eyebrow="Explore More" title="Related hubs" />
        <div className="mt-10">
          <RelatedHubs
            hubs={[
              {
                label: "Coverage Types",
                href: "/coverage",
                description: "Compare commercial auto, fleet, and Uber Black coverage.",
              },
              {
                label: "Service Areas",
                href: "/locations",
                description: "Commercial vehicle insurance across Virginia markets.",
              },
              {
                label: "Resources",
                href: "/resources",
                description: "Guides that explain coverage and Virginia requirements.",
              },
            ]}
          />
        </div>
      </Section>

      <CallToActionBar />
    </>
  );
}
