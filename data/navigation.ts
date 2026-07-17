import type { NavItem } from "@/lib/types";
import { coverageServices, industryServices } from "@/data/services";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Coverage Types", href: "/coverage" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface MenuLink {
  label: string;
  href: string;
}

export interface MainNavEntry {
  label: string;
  href: string;
  /** When present, the entry renders as a dropdown of related links. */
  menu?: {
    overview: MenuLink;
    items: MenuLink[];
  };
}

export const mainNav: MainNavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "Coverage Types",
    href: "/coverage",
    menu: {
      overview: { label: "All coverage types", href: "/coverage" },
      items: coverageServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
    },
  },
  {
    label: "Industries",
    href: "/industries",
    menu: {
      overview: { label: "All industries", href: "/industries" },
      items: industryServices.map((s) => ({ label: s.name, href: `/coverage/${s.slug}` })),
    },
  },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaNav: NavItem = { label: "Request a Quote", href: "/quote" };

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Coverage Types",
    items: [
      { label: "Coverage Overview", href: "/coverage" },
      { label: "Commercial Auto Insurance", href: "/coverage/commercial-auto-insurance" },
      { label: "Commercial Fleet Insurance", href: "/coverage/commercial-fleet-insurance" },
      { label: "Uber Black Insurance", href: "/coverage/uber-black-insurance" },
      { label: "All Vehicle Types", href: "/vehicles" },
    ],
  },
  {
    heading: "Industries",
    items: [
      { label: "Dump Truck Insurance", href: "/coverage/dump-truck-insurance" },
      { label: "Semi Truck Insurance", href: "/coverage/semi-truck-insurance" },
      { label: "Tow Truck Insurance", href: "/coverage/tow-truck-insurance" },
      { label: "Contractor Vehicle Insurance", href: "/coverage/contractor-vehicle-insurance" },
      { label: "Plumbing Vehicle Insurance", href: "/coverage/plumbing-vehicle-insurance" },
      { label: "HVAC Vehicle Insurance", href: "/coverage/hvac-vehicle-insurance" },
      { label: "Landscaping Vehicle Insurance", href: "/coverage/landscaping-vehicle-insurance" },
      { label: "Construction Vehicle Insurance", href: "/coverage/construction-vehicle-insurance" },
    ],
  },
  {
    heading: "Locations",
    items: [
      { label: "All Service Areas", href: "/locations" },
      { label: "Manassas, VA", href: "/locations/manassas-va" },
      { label: "Fairfax, VA", href: "/locations/fairfax-va" },
      { label: "Arlington, VA", href: "/locations/arlington-va" },
      { label: "Alexandria, VA", href: "/locations/alexandria-va" },
      { label: "Tysons, VA", href: "/locations/tysons-va" },
      { label: "Chantilly, VA", href: "/locations/chantilly-va" },
      { label: "Richmond, VA", href: "/locations/richmond-va" },
      { label: "Henrico, VA", href: "/locations/henrico-va" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
