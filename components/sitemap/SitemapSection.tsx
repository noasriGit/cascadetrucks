import Link from "next/link";
import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";
import type { SitemapSection } from "@/lib/sitemap/types";

export function SitemapSectionBlock({ section }: { section: SitemapSection }) {
  const hasSubsections = section.subsections && section.subsections.length > 0;
  const hasEntries = section.entries.length > 0;

  if (!section.hub && !hasEntries && !hasSubsections) return null;

  return (
    <section aria-labelledby={`sitemap-${section.id}-heading`} className="scroll-mt-28">
      <div className="max-w-3xl">
        <h2 id={`sitemap-${section.id}-heading`} className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {section.title}
        </h2>
        {section.description ? (
          <p className="mt-3 text-base leading-relaxed text-muted">{section.description}</p>
        ) : null}
      </div>

      {section.hub ? (
        <div className="mt-6">
          <Link
            href={section.hub.path}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            {section.hub.title}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}

      {hasEntries ? (
        <SitemapEntryList entries={section.entries} showDates={section.id === "recent"} />
      ) : null}

      {hasSubsections ? (
        <div className="mt-8 space-y-10">
          {section.subsections!.map((subsection) => (
            <div key={subsection.id}>
              <h3
                id={`sitemap-${section.id}-${subsection.id}-heading`}
                className="text-lg font-semibold text-ink"
              >
                {subsection.title}
              </h3>
              <SitemapEntryList entries={subsection.entries} compact />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
