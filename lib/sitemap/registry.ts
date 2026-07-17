import { pageLocations } from "@/data/locations";
import { resources } from "@/data/resources";
import { coverageServices, industryServices, services } from "@/data/services";
import { vehicles, vehiclesByGroup } from "@/data/vehicles";
import type { VehicleGroup } from "@/lib/types";
import { excludedSitemapPaths, staticSitemapPages } from "@/lib/sitemap/static-pages";
import type { SitemapContentType, SitemapEntry } from "@/lib/sitemap/types";

const VEHICLE_GROUP_LABELS: Record<VehicleGroup, string> = {
  truck: "Trucks",
  trailer: "Trailers",
  "car-van": "Cars & Vans",
  "bus-motorhome": "Buses & Motor Homes",
  debris: "Debris Removal",
};

const VEHICLE_GROUP_ORDER: VehicleGroup[] = [
  "truck",
  "trailer",
  "car-van",
  "bus-motorhome",
  "debris",
];

function isExcludedPath(path: string): boolean {
  return excludedSitemapPaths.includes(path);
}

function staticEntries(): SitemapEntry[] {
  return staticSitemapPages.map((page) => ({
    id: `page:${page.path}`,
    title: page.title,
    path: page.path,
    description: page.description,
    contentType: page.contentType ?? "page",
    category: page.category,
    indexable: !isExcludedPath(page.path),
    featured: page.featured,
    sortPriority: page.sortPriority,
  }));
}

function serviceEntries(): SitemapEntry[] {
  return services.map((service) => {
    const contentType: SitemapContentType =
      service.category === "coverage" ? "coverage" : "industry";
    const parentPath = service.category === "coverage" ? "/coverage" : "/industries";

    return {
      id: `${contentType}:${service.slug}`,
      title: service.name,
      path: `/coverage/${service.slug}`,
      description: service.shortDescription,
      contentType,
      category: service.category === "coverage" ? "Coverage Types" : "Industries",
      updated: service.updated,
      indexable: true,
      parentPath,
    };
  });
}

function locationEntries(): SitemapEntry[] {
  return pageLocations.map((location) => ({
    id: `location:${location.slug}`,
    title: `${location.city}, ${location.region}`,
    path: `/locations/${location.slug}`,
    description: location.shortDescription,
    contentType: "location" as const,
    category: "Service Areas",
    updated: location.updated,
    indexable: location.hasPage,
    parentPath: "/locations",
  }));
}

function resourceEntries(): SitemapEntry[] {
  return resources.map((resource) => ({
    id: `resource:${resource.slug}`,
    title: resource.title,
    path: `/resources/${resource.slug}`,
    description: resource.excerpt,
    contentType: "resource" as const,
    category: "Guides & Resources",
    published: resource.published,
    updated: resource.updated,
    indexable: true,
    parentPath: "/resources",
  }));
}

function vehicleEntries(): SitemapEntry[] {
  return vehicles.map((vehicle) => ({
    id: `vehicle:${vehicle.slug}`,
    title: vehicle.name,
    path: `/vehicles/${vehicle.slug}`,
    description: vehicle.shortDescription,
    contentType: "vehicle" as const,
    category: "Vehicle Types",
    subcategory: VEHICLE_GROUP_LABELS[vehicle.vehicleGroup],
    updated: vehicle.updated,
    indexable: true,
    parentPath: "/vehicles",
  }));
}

let cachedRegistry: SitemapEntry[] | null = null;

/** Returns every sitemap record, including non-indexable entries used for validation. */
export function buildSitemapRegistry(): SitemapEntry[] {
  if (!cachedRegistry) {
    cachedRegistry = [
      ...staticEntries(),
      ...serviceEntries(),
      ...locationEntries(),
      ...resourceEntries(),
      ...vehicleEntries(),
    ];
  }
  return cachedRegistry;
}

/** Indexable, canonical pages only. */
export function getIndexableSitemapEntries(): SitemapEntry[] {
  return buildSitemapRegistry().filter((entry) => entry.indexable);
}

export function getFeaturedSitemapEntries(): SitemapEntry[] {
  return getIndexableSitemapEntries()
    .filter((entry) => entry.featured)
    .sort((a, b) => (a.sortPriority ?? 99) - (b.sortPriority ?? 99));
}

export function getRecentSitemapEntries(limit = 10): SitemapEntry[] {
  return getIndexableSitemapEntries()
    .filter((entry) => entry.published)
    .sort((a, b) => Date.parse(b.published!) - Date.parse(a.published!))
    .slice(0, limit);
}

export function getSitemapEntriesByContentType(
  contentType: SitemapContentType,
): SitemapEntry[] {
  return getIndexableSitemapEntries().filter((entry) => entry.contentType === contentType);
}

export function getCoverageSitemapEntries(): SitemapEntry[] {
  const slugs = new Set(coverageServices.map((service) => service.slug));
  return getIndexableSitemapEntries().filter(
    (entry) => entry.contentType === "coverage" && slugs.has(entry.path.split("/").pop()!),
  );
}

export function getIndustrySitemapEntries(): SitemapEntry[] {
  const slugs = new Set(industryServices.map((service) => service.slug));
  return getIndexableSitemapEntries().filter(
    (entry) => entry.contentType === "industry" && slugs.has(entry.path.split("/").pop()!),
  );
}

export function getVehicleSitemapSubsections() {
  return VEHICLE_GROUP_ORDER.map((group) => ({
    id: group,
    title: VEHICLE_GROUP_LABELS[group],
    entries: vehiclesByGroup[group].map((vehicle) => {
      const entry = getIndexableSitemapEntries().find((item) => item.id === `vehicle:${vehicle.slug}`);
      if (!entry) {
        throw new Error(`Missing sitemap entry for vehicle: ${vehicle.slug}`);
      }
      return entry;
    }),
  })).filter((subsection) => subsection.entries.length > 0);
}

export function toSearchRecords(entries: SitemapEntry[]) {
  return entries.map(
    (entry): import("@/lib/sitemap/types").SitemapSearchRecord => ({
      id: entry.id,
      title: entry.title,
      path: entry.path,
      description: entry.description,
      contentType: entry.contentType,
      category: entry.category,
    }),
  );
}

export function getExcludedSitemapEntries(): SitemapEntry[] {
  return buildSitemapRegistry().filter((entry) => !entry.indexable);
}
