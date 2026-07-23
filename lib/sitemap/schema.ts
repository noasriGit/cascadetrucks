import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/url";
import type { SitemapEntry } from "@/lib/sitemap/types";
import { WEBSITE_ID } from "@/lib/schema";

type Json = Record<string, unknown>;

export function sitemapPageSchema(entries: SitemapEntry[], path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sitemap",
    description: `Browse all pages on the ${site.brandName} website.`,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entries.length,
      itemListElement: entries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.title,
        url: absoluteUrl(entry.path),
      })),
    },
  };
}
