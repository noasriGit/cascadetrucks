import { mainNav, footerNav } from "@/data/navigation";
import { services } from "@/data/services";
import { pageLocations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { resources } from "@/data/resources";
import { buildSitemapRegistry, getIndexableSitemapEntries } from "@/lib/sitemap/registry";

export interface InternalLinkIssue {
  code: string;
  message: string;
  path?: string;
}

export interface InternalLinkValidationResult {
  valid: boolean;
  pageCount: number;
  maxDepth: number;
  issues: InternalLinkIssue[];
}

const HOME_FEATURED_VEHICLES = [
  "dump-trailer-insurance",
  "box-truck-insurance",
  "cargo-van-insurance",
  "truck-tractor-insurance",
  "flatbed-truck-insurance",
  "car-carrier-insurance",
  "commercial-pickup-insurance",
  "cement-mixer-truck-insurance",
  "limousine-insurance",
];

function addEdge(graph: Map<string, Set<string>>, from: string, to: string) {
  if (!graph.has(from)) graph.set(from, new Set());
  graph.get(from)!.add(to);
}

function buildLinkGraph(): Map<string, Set<string>> {
  const graph = new Map<string, Set<string>>();

  for (const entry of mainNav) {
    addEdge(graph, "/", entry.href);
    if (entry.menu) {
      addEdge(graph, "/", entry.menu.overview.href);
      for (const item of entry.menu.items) addEdge(graph, "/", item.href);
    }
  }

  for (const column of footerNav) {
    for (const item of column.items) addEdge(graph, "/", item.href);
  }

  // Homepage content links
  for (const service of services) addEdge(graph, "/", `/coverage/${service.slug}`);
  for (const location of pageLocations) addEdge(graph, "/", `/locations/${location.slug}`);
  addEdge(graph, "/", "/vehicles");
  addEdge(graph, "/", "/resources");
  addEdge(graph, "/", "/about");
  for (const slug of HOME_FEATURED_VEHICLES) addEdge(graph, "/", `/vehicles/${slug}`);
  for (const resource of resources.slice(0, 3)) addEdge(graph, "/", `/resources/${resource.slug}`);

  // Hubs → children
  for (const service of services) {
    const hub = service.category === "industry" ? "/industries" : "/coverage";
    addEdge(graph, hub, `/coverage/${service.slug}`);
    addEdge(graph, "/coverage", `/coverage/${service.slug}`);
  }
  for (const location of pageLocations) addEdge(graph, "/locations", `/locations/${location.slug}`);
  for (const vehicle of vehicles) addEdge(graph, "/vehicles", `/vehicles/${vehicle.slug}`);
  for (const resource of resources) addEdge(graph, "/resources", `/resources/${resource.slug}`);

  // Related graphs
  for (const service of services) {
    const from = `/coverage/${service.slug}`;
    for (const slug of service.relatedServiceSlugs) addEdge(graph, from, `/coverage/${slug}`);
    for (const slug of service.relatedLocationSlugs) addEdge(graph, from, `/locations/${slug}`);
    for (const slug of service.relatedResourceSlugs) addEdge(graph, from, `/resources/${slug}`);
    for (const slug of service.relatedVehicleSlugs ?? []) addEdge(graph, from, `/vehicles/${slug}`);
  }

  for (const location of pageLocations) {
    const from = `/locations/${location.slug}`;
    for (const slug of location.relatedServiceSlugs) addEdge(graph, from, `/coverage/${slug}`);
    for (const slug of location.relatedVehicleSlugs) addEdge(graph, from, `/vehicles/${slug}`);
    for (const slug of location.relatedResourceSlugs) addEdge(graph, from, `/resources/${slug}`);
    for (const slug of location.nearbyLocationSlugs) addEdge(graph, from, `/locations/${slug}`);
  }

  for (const vehicle of vehicles) {
    const from = `/vehicles/${vehicle.slug}`;
    for (const slug of vehicle.relatedVehicleSlugs) addEdge(graph, from, `/vehicles/${slug}`);
    for (const slug of vehicle.relatedServiceSlugs) addEdge(graph, from, `/coverage/${slug}`);
    for (const slug of vehicle.relatedLocationSlugs) addEdge(graph, from, `/locations/${slug}`);
    for (const slug of vehicle.relatedResourceSlugs) addEdge(graph, from, `/resources/${slug}`);
  }

  for (const resource of resources) {
    const from = `/resources/${resource.slug}`;
    for (const slug of resource.relatedServiceSlugs) addEdge(graph, from, `/coverage/${slug}`);
    for (const slug of resource.relatedResourceSlugs) addEdge(graph, from, `/resources/${slug}`);
  }

  return graph;
}

function crawlDepths(graph: Map<string, Set<string>>, start = "/"): Map<string, number> {
  const depths = new Map<string, number>([[start, 0]]);
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const depth = depths.get(current)!;
    for (const next of graph.get(current) ?? []) {
      if (!depths.has(next)) {
        depths.set(next, depth + 1);
        queue.push(next);
      }
    }
  }

  return depths;
}

export function validateInternalLinks(): InternalLinkValidationResult {
  const issues: InternalLinkIssue[] = [];
  const indexable = getIndexableSitemapEntries();
  const indexablePaths = new Set(indexable.map((entry) => entry.path));
  const graph = buildLinkGraph();
  const depths = crawlDepths(graph);

  let maxDepth = 0;
  for (const path of indexablePaths) {
    const depth = depths.get(path);
    if (depth === undefined) {
      issues.push({
        code: "orphan",
        message: `Indexable page is not reachable from the homepage via the internal link graph.`,
        path,
      });
      continue;
    }
    if (depth > maxDepth) maxDepth = depth;
    if (depth > 3) {
      issues.push({
        code: "depth-exceeded",
        message: `Page is ${depth} clicks from the homepage (max 3).`,
        path,
      });
    }
  }

  // Vehicles hub must be in primary nav
  if (!mainNav.some((entry) => entry.href === "/vehicles")) {
    issues.push({
      code: "missing-nav",
      message: "Vehicle Types (/vehicles) is missing from mainNav.",
      path: "/vehicles",
    });
  }

  // Business auto in footer
  const footerHrefs = footerNav.flatMap((column) => column.items.map((item) => item.href));
  if (!footerHrefs.includes("/coverage/business-auto-insurance")) {
    issues.push({
      code: "missing-footer",
      message: "Business Auto Insurance is missing from the footer.",
      path: "/coverage/business-auto-insurance",
    });
  }

  // Every vehicle needs ≥1 topical inbound from services, locations, or homepage featured set
  const vehicleInbound = new Map<string, number>();
  for (const vehicle of vehicles) {
    vehicleInbound.set(vehicle.slug, HOME_FEATURED_VEHICLES.includes(vehicle.slug) ? 1 : 0);
  }
  for (const service of services) {
    for (const slug of service.relatedVehicleSlugs ?? []) {
      vehicleInbound.set(slug, (vehicleInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const location of pageLocations) {
    for (const slug of location.relatedVehicleSlugs) {
      vehicleInbound.set(slug, (vehicleInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const [slug, count] of vehicleInbound) {
    if (count < 1) {
      issues.push({
        code: "thin-vehicle",
        message: `Vehicle has no topical inbound links from services, locations, or homepage featured set.`,
        path: `/vehicles/${slug}`,
      });
    }
  }

  // Nearby locations should not be identical for every city (geo check)
  const nearbySignatures = pageLocations.map((location) => location.nearbyLocationSlugs.join(","));
  if (new Set(nearbySignatures).size < 5) {
    issues.push({
      code: "nearby-not-geo",
      message: "Nearby location sets look too uniform; expected geo-based variation across cities.",
    });
  }

  // Specialty guides should have multiple inbound refs
  const resourceInbound = new Map<string, number>();
  for (const resource of resources) resourceInbound.set(resource.slug, 0);
  for (const service of services) {
    for (const slug of service.relatedResourceSlugs) {
      resourceInbound.set(slug, (resourceInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const location of pageLocations) {
    for (const slug of location.relatedResourceSlugs) {
      resourceInbound.set(slug, (resourceInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const vehicle of vehicles) {
    for (const slug of vehicle.relatedResourceSlugs) {
      resourceInbound.set(slug, (resourceInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const resource of resources) {
    for (const slug of resource.relatedResourceSlugs) {
      resourceInbound.set(slug, (resourceInbound.get(slug) ?? 0) + 1);
    }
  }
  for (const [slug, count] of resourceInbound) {
    if (count < 2) {
      issues.push({
        code: "thin-resource",
        message: `Resource guide has fewer than 2 inbound related links (found ${count}).`,
        path: `/resources/${slug}`,
      });
    }
  }

  // Registry still builds (sanity)
  const registry = buildSitemapRegistry();
  if (registry.length === 0) {
    issues.push({ code: "empty-registry", message: "Sitemap registry is empty." });
  }

  return {
    valid: issues.length === 0,
    pageCount: indexablePaths.size,
    maxDepth,
    issues,
  };
}
