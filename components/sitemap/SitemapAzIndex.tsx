import type { AzIndexGroup } from "@/lib/sitemap/az-index";
import { SitemapEntryList } from "@/components/sitemap/SitemapEntryList";

export function SitemapAzIndex({ groups }: { groups: AzIndexGroup[] }) {
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="sitemap-az-heading" className="scroll-mt-28">
      <div className="max-w-3xl">
        <h2 id="sitemap-az-heading" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          A–Z index
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Jump to pages alphabetically by title.
        </p>
      </div>

      <nav aria-label="Alphabetical index" className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {groups.map((group) => (
            <li key={group.letter}>
              <a
                href={`#sitemap-letter-${group.letter}`}
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-line bg-surface px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {group.letter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <div key={group.letter} id={`sitemap-letter-${group.letter}`} className="scroll-mt-28">
            <h3 className="text-lg font-semibold text-ink">{group.letter}</h3>
            <SitemapEntryList entries={group.entries} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
