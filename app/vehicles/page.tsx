import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallToActionBar } from "@/components/marketing/CallToActionBar";
import { buildMetadata } from "@/lib/metadata";
import { vehiclesByGroup } from "@/data/vehicles";
import type { VehicleType } from "@/lib/types";

const path = "/vehicles";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Commercial Vehicle Types We Insure in Virginia",
    description:
      "Browse all commercial vehicle types insured by Cascade Truck Insurance in Virginia, trucks, trailers, vans, buses, and debris removal vehicles. Get a quote from licensed advisors.",
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

      {groups.map((group) => (
        <Section key={group.id} ariaLabelledby={`${group.id}-heading`}>
          <SectionHeading
            id={`${group.id}-heading`}
            eyebrow="Vehicle Type"
            title={group.label}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.vehicles.map((vehicle) => (
              <li key={vehicle.slug}>
                <Link
                  href={`/vehicles/${vehicle.slug}`}
                  className="flex items-center justify-between rounded-xl border border-line bg-surface p-4 shadow-card transition-shadow hover:shadow-elevated"
                >
                  <span className="text-sm font-medium text-ink">{vehicle.name}</span>
                  <span className="ml-2 flex-none text-brand-500" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <CallToActionBar />
    </>
  );
}
