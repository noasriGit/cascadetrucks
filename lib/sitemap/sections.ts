import {
  getCoverageSitemapEntries,
  getFeaturedSitemapEntries,
  getIndexableSitemapEntries,
  getIndustrySitemapEntries,
  getRecentSitemapEntries,
  getSitemapEntriesByContentType,
  getVehicleSitemapSubsections,
} from "@/lib/sitemap/registry";
import type { SitemapEntry, SitemapSection } from "@/lib/sitemap/types";

function findHub(path: string): SitemapEntry | undefined {
  return getIndexableSitemapEntries().find((entry) => entry.path === path);
}

function sortByTitle(entries: SitemapEntry[]): SitemapEntry[] {
  return [...entries].sort((a, b) => a.title.localeCompare(b.title, "en"));
}

export function buildSitemapSections(): SitemapSection[] {
  const sections: SitemapSection[] = [];

  const featured = getFeaturedSitemapEntries();
  if (featured.length > 0) {
    sections.push({
      id: "featured",
      title: "Start here",
      description: "Key pages for coverage, vehicles, quotes, and service areas across Virginia.",
      entries: featured,
    });
  }

  const recent = getRecentSitemapEntries(20);
  if (recent.length > 0) {
    sections.push({
      id: "recent",
      title: "Recently published guides",
      description: "Newest insurance guides and resources.",
      entries: recent,
    });
  }

  const coverageHub = findHub("/coverage");
  const coverageEntries = sortByTitle(getCoverageSitemapEntries());
  if (coverageHub || coverageEntries.length > 0) {
    sections.push({
      id: "coverage",
      title: "Coverage",
      description: "Commercial auto, fleet, and specialty coverage pages.",
      hub: coverageHub,
      entries: coverageEntries,
    });
  }

  const industriesHub = findHub("/industries");
  const industryEntries = sortByTitle(getIndustrySitemapEntries());
  if (industriesHub || industryEntries.length > 0) {
    sections.push({
      id: "industries",
      title: "Industries",
      description: "Insurance for dump trucks, contractors, tow operators, and more.",
      hub: industriesHub,
      entries: industryEntries,
    });
  }

  const vehiclesHub = findHub("/vehicles");
  const vehicleSubsections = getVehicleSitemapSubsections();
  if (vehiclesHub || vehicleSubsections.length > 0) {
    sections.push({
      id: "vehicles",
      title: "Vehicles",
      description: "Commercial trucks, trailers, vans, buses, and specialty vehicles.",
      hub: vehiclesHub,
      entries: [],
      subsections: vehicleSubsections,
    });
  }

  const locationsHub = findHub("/locations");
  const locationEntries = sortByTitle(getSitemapEntriesByContentType("location"));
  if (locationsHub || locationEntries.length > 0) {
    sections.push({
      id: "locations",
      title: "Locations",
      description: "Virginia cities and regions we serve.",
      hub: locationsHub,
      entries: locationEntries,
    });
  }

  const resourcesHub = findHub("/resources");
  const resourceEntries = sortByTitle(getSitemapEntriesByContentType("resource"));
  if (resourcesHub || resourceEntries.length > 0) {
    sections.push({
      id: "resources",
      title: "Resources",
      description: "In-depth articles on Virginia commercial vehicle insurance.",
      hub: resourcesHub,
      entries: resourceEntries,
    });
  }

  const companyEntries = sortByTitle(
    getIndexableSitemapEntries().filter(
      (entry) =>
        entry.category === "Company" && !entry.featured && entry.path !== "/sitemap",
    ),
  );
  if (companyEntries.length > 0) {
    sections.push({
      id: "company",
      title: "Company",
      description: "About Cascade Truck Insurance, contact details, and policies.",
      entries: companyEntries,
    });
  }

  return sections;
}
