import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SitemapAzIndex } from "@/components/sitemap/SitemapAzIndex";
import { SitemapSearch } from "@/components/sitemap/SitemapSearch";
import { SitemapSectionBlock } from "@/components/sitemap/SitemapSection";
import { buildMetadata } from "@/lib/metadata";
import { buildAzIndex } from "@/lib/sitemap/az-index";
import {
  getIndexableSitemapEntries,
  toSearchRecords,
} from "@/lib/sitemap/registry";
import { sitemapPageSchema } from "@/lib/sitemap/schema";
import { buildSitemapSections } from "@/lib/sitemap/sections";
import { site } from "@/data/site";

const path = "/sitemap";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Sitemap",
    description: `Browse every page on the ${site.brandName} website, including coverage, industries, vehicles, locations, and resources.`,
    path,
  });
}

export default function SitemapPage() {
  const entries = getIndexableSitemapEntries();
  const sections = buildSitemapSections();
  const azGroups = buildAzIndex(entries);
  const searchRecords = toSearchRecords(entries);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Sitemap", path },
  ];

  return (
    <>
      <JsonLd data={sitemapPageSchema(entries, path)} />

      <Hero
        eyebrow="Sitemap"
        headline="Browse all pages"
        subheadline={`A complete index of ${entries.length} pages on ${site.brandName}, organized by coverage, industries, vehicles, locations, and resources.`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      <Section ariaLabelledby="sitemap-search-heading">
        <h2 id="sitemap-search-heading" className="sr-only">
          Search sitemap
        </h2>
        <SitemapSearch records={searchRecords} />
      </Section>

      <Section tone="soft" ariaLabelledby="sitemap-sections-heading">
        <h2 id="sitemap-sections-heading" className="sr-only">
          Sitemap sections
        </h2>
        <div className="space-y-16">
          {sections.map((section) => (
            <SitemapSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </Section>

      {azGroups.length > 0 ? (
        <Section ariaLabelledby="sitemap-az-heading">
          <SitemapAzIndex groups={azGroups} />
        </Section>
      ) : null}
    </>
  );
}
