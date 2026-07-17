import { QUOTE_CONFIRMATION_PATH } from "@/lib/quote";
import type { StaticSitemapPageConfig } from "@/lib/sitemap/types";

/** Paths that must never appear in the HTML or XML sitemaps. */
export const excludedSitemapPaths: readonly string[] = [QUOTE_CONFIRMATION_PATH];

export const staticSitemapPages: StaticSitemapPageConfig[] = [
  {
    path: "/",
    title: "Home",
    description: "Commercial truck and fleet insurance for Virginia businesses.",
    featured: true,
    sortPriority: 1,
    xmlPriority: 1,
    xmlChangeFrequency: "weekly",
  },
  {
    path: "/coverage",
    title: "Coverage Types",
    description: "Commercial auto, fleet, and specialty coverage options for Virginia operators.",
    category: "Coverage",
    featured: true,
    sortPriority: 2,
    xmlPriority: 0.9,
    xmlChangeFrequency: "monthly",
  },
  {
    path: "/industries",
    title: "Industries",
    description: "Insurance for dump trucks, tow trucks, contractors, and other commercial operators.",
    category: "Industries",
    featured: true,
    sortPriority: 3,
    xmlPriority: 0.9,
    xmlChangeFrequency: "monthly",
  },
  {
    path: "/locations",
    title: "Service Areas",
    description: "Virginia cities and regions served by Cascade Truck Insurance.",
    category: "Locations",
    featured: true,
    sortPriority: 4,
    xmlPriority: 0.9,
    xmlChangeFrequency: "monthly",
  },
  {
    path: "/resources",
    title: "Resources & Guides",
    description: "Plain-language guides on Virginia commercial vehicle insurance.",
    category: "Resources",
    featured: true,
    sortPriority: 5,
    xmlPriority: 0.8,
    xmlChangeFrequency: "monthly",
  },
  {
    path: "/vehicles",
    title: "Vehicle Types",
    description: "Commercial trucks, trailers, vans, buses, and specialty vehicles we insure.",
    category: "Vehicles",
    sortPriority: 6,
    xmlPriority: 0.7,
    xmlChangeFrequency: "monthly",
  },
  {
    path: "/quote",
    title: "Request a Quote",
    description: "Get a commercial vehicle insurance quote from licensed Virginia advisors.",
    category: "Company",
    featured: true,
    sortPriority: 7,
    xmlPriority: 0.9,
    xmlChangeFrequency: "yearly",
  },
  {
    path: "/about",
    title: "About",
    description: "Learn about Cascade Truck Insurance and our parent agency in Manassas, VA.",
    category: "Company",
    sortPriority: 8,
    xmlPriority: 0.6,
    xmlChangeFrequency: "yearly",
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Call, email, or visit Cascade Truck Insurance in Manassas, Virginia.",
    category: "Company",
    sortPriority: 9,
    xmlPriority: 0.7,
    xmlChangeFrequency: "yearly",
  },
  {
    path: "/accessibility",
    title: "Accessibility Statement",
    description: "Our commitment to an accessible website and how to report barriers.",
    category: "Company",
    sortPriority: 10,
    xmlPriority: 0.4,
    xmlChangeFrequency: "yearly",
  },
  {
    path: "/sitemap",
    title: "Sitemap",
    description: "Browse all pages on the Cascade Truck Insurance website.",
    category: "Company",
    sortPriority: 11,
    xmlPriority: 0.3,
    xmlChangeFrequency: "monthly",
  },
];

export function getStaticSitemapPage(path: string): StaticSitemapPageConfig | undefined {
  return staticSitemapPages.find((page) => page.path === path);
}
