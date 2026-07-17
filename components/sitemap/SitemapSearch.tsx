"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { SitemapSearchRecord } from "@/lib/sitemap/types";

function matchesQuery(record: SitemapSearchRecord, query: string): boolean {
  const haystack = [record.title, record.description, record.category, record.contentType]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function SitemapSearch({ records }: { records: SitemapSearchRecord[] }) {
  const inputId = useId();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return records
      .filter((record) => matchesQuery(record, normalized))
      .sort((a, b) => a.title.localeCompare(b.title, "en"))
      .slice(0, 20);
  }, [query, records]);

  const showResults = query.trim().length > 0;

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
      <label htmlFor={inputId} className="text-sm font-semibold text-ink">
        Search the sitemap
      </label>
      <div className="relative mt-3">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, category, or topic"
          autoComplete="off"
          className="w-full rounded-xl border border-line bg-white py-3 pl-10 pr-4 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <p className="mt-2 text-xs text-muted">
        All links remain available below. Search only filters this list.
      </p>

      {showResults ? (
        <div className="mt-5" role="region" aria-live="polite" aria-label="Search results">
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((record) => (
                <li key={record.id}>
                  <Link
                    href={record.path}
                    className="block rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-line hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    <span className="block text-sm font-semibold text-ink">{record.title}</span>
                    {record.category ? (
                      <span className="mt-1 block text-xs text-muted">{record.category}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">No pages matched your search.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
