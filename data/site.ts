import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  brandName: "Cascade Trucks Insurance",
  legalName: "Cascade Insurance Group",
  parentName: "Cascade Insurance Group",
  tagline: "Virginia Commercial Truck & Vehicle Insurance",
  description:
    "Cascade Trucks Insurance helps Virginia businesses insure dump trucks, tow trucks, contractor vehicles, and commercial fleets. Get fast quotes from licensed advisors in Manassas, VA.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cascadetruckinsurance.com",
  phoneDisplay: "(703) 551-2000",
  phoneHref: "+17035512000",
  email: "David@Cascadeig.com",
  address: {
    street: "9815 Godwin Drive",
    city: "Manassas",
    region: "Virginia",
    regionCode: "VA",
    postalCode: "20110",
    country: "US",
  },
  geo: { latitude: 38.7422, longitude: -77.5203 },
  hours: ["Mo-Fr 09:00-18:00"],
  socials: [
    "https://www.facebook.com/cascadeinsurancegroup",
    "https://www.linkedin.com/company/cascade-insurance-group",
  ],
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 40,
  },
  logo: "/images/cascadelogo.png",
};
