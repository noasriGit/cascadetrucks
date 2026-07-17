import type { MetadataRoute } from "next";
import { getIndexableSitemapEntries } from "@/lib/sitemap/registry";
import { getStaticSitemapPage } from "@/lib/sitemap/static-pages";
import { absoluteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getIndexableSitemapEntries().map((entry) => {
    const staticConfig = getStaticSitemapPage(entry.path);
    const lastModifiedSource = entry.updated ?? entry.published;

    return {
      url: absoluteUrl(entry.path),
      lastModified: lastModifiedSource ? new Date(lastModifiedSource) : now,
      changeFrequency:
        staticConfig?.xmlChangeFrequency ??
        (entry.contentType === "page" ? "yearly" : "monthly"),
      priority:
        staticConfig?.xmlPriority ??
        (entry.contentType === "coverage" || entry.contentType === "industry"
          ? 0.8
          : entry.contentType === "location"
            ? 0.7
            : entry.contentType === "vehicle"
              ? 0.75
              : entry.contentType === "resource"
                ? 0.6
                : 0.5),
    };
  });
}
