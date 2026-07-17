import type { SitemapEntry } from "@/lib/sitemap/types";

const ARTICLE_PREFIX = /^(a|an|the)\s+/i;

function sortLetter(title: string): string {
  const normalized = title.trim().replace(ARTICLE_PREFIX, "");
  const letter = normalized.charAt(0).toUpperCase();
  return /[A-Z]/.test(letter) ? letter : "#";
}

export interface AzIndexGroup {
  letter: string;
  entries: SitemapEntry[];
}

export function buildAzIndex(entries: SitemapEntry[]): AzIndexGroup[] {
  const groups = new Map<string, SitemapEntry[]>();

  for (const entry of entries) {
    const letter = sortLetter(entry.title);
    const bucket = groups.get(letter) ?? [];
    bucket.push(entry);
    groups.set(letter, bucket);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b);
    })
    .map(([letter, letterEntries]) => ({
      letter,
      entries: [...letterEntries].sort((a, b) => a.title.localeCompare(b.title, "en")),
    }));
}
