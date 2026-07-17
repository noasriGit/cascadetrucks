import Link from "next/link";
import type { SitemapEntry } from "@/lib/sitemap/types";

function formatDate(value?: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function SitemapEntryList({
  entries,
  showDates = false,
  compact = false,
}: {
  entries: SitemapEntry[];
  showDates?: boolean;
  compact?: boolean;
}) {
  if (entries.length === 0) return null;

  return (
    <ul className={compact ? "mt-4 space-y-2" : "mt-6 grid gap-3 sm:grid-cols-2"}>
      {entries.map((entry) => {
        const dateLabel = showDates
          ? formatDate(entry.published ?? entry.updated)
          : null;

        return (
          <li key={entry.id}>
            <Link
              href={entry.path}
              className={
                compact
                  ? "group block rounded-lg px-1 py-1 text-sm text-brand-700 hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  : "group flex h-full flex-col rounded-xl border border-line bg-surface p-4 shadow-card transition-shadow hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              }
            >
              <span className={compact ? "font-medium" : "text-sm font-semibold text-ink group-hover:text-brand-700"}>
                {entry.title}
              </span>
              {!compact && entry.description ? (
                <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {entry.description}
                </span>
              ) : null}
              {!compact && dateLabel ? (
                <span className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-500">
                  {entry.published ? "Published" : "Updated"} {dateLabel}
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
