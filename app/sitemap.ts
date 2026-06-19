import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { pageLocations } from "@/data/locations";
import { resources } from "@/data/resources";
import { vehicles } from "@/data/vehicles";
import { absoluteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/coverage", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" },
    { path: "/vehicles", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/quote", priority: 0.9, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.4, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/coverage/${s.slug}`),
    lastModified: new Date(s.updated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = pageLocations.map((l) => ({
    url: absoluteUrl(`/locations/${l.slug}`),
    lastModified: new Date(l.updated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourceEntries: MetadataRoute.Sitemap = resources.map((r) => ({
    url: absoluteUrl(`/resources/${r.slug}`),
    lastModified: new Date(r.updated),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const vehicleEntries: MetadataRoute.Sitemap = vehicles.map((v) => ({
    url: absoluteUrl(`/vehicles/${v.slug}`),
    lastModified: new Date(v.updated),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...serviceEntries, ...locationEntries, ...resourceEntries, ...vehicleEntries];
}
