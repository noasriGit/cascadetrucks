import { excludedSitemapPaths } from "@/lib/sitemap/static-pages";
import {
  buildSitemapRegistry,
  getExcludedSitemapEntries,
  getIndexableSitemapEntries,
} from "@/lib/sitemap/registry";
import type { SitemapValidationIssue, SitemapValidationResult } from "@/lib/sitemap/types";

const PATH_PATTERN = /^\/[a-z0-9\-/]*$/;

function isValidPath(path: string): boolean {
  if (path === "/") return true;
  return PATH_PATTERN.test(path) && !path.endsWith("/");
}

export function validateSitemapRegistry(): SitemapValidationResult {
  const issues: SitemapValidationIssue[] = [];
  const allEntries = buildSitemapRegistry();
  const indexableEntries = getIndexableSitemapEntries();
  const excludedEntries = getExcludedSitemapEntries();

  const ids = new Map<string, string>();
  const paths = new Map<string, string>();

  for (const entry of allEntries) {
    if (!entry.id) {
      issues.push({ code: "missing-id", message: "Entry is missing an id.", path: entry.path });
    } else if (ids.has(entry.id)) {
      issues.push({
        code: "duplicate-id",
        message: `Duplicate id "${entry.id}" (also used by ${ids.get(entry.id)}).`,
        entryId: entry.id,
        path: entry.path,
      });
    } else {
      ids.set(entry.id, entry.path);
    }

    if (!entry.title?.trim()) {
      issues.push({ code: "missing-title", message: "Entry is missing a title.", entryId: entry.id, path: entry.path });
    }

    if (!entry.path) {
      issues.push({ code: "missing-path", message: "Entry is missing a path.", entryId: entry.id });
      continue;
    }

    if (!isValidPath(entry.path)) {
      issues.push({
        code: "invalid-path",
        message: `Invalid path "${entry.path}". Paths must be lowercase, slash-prefixed, and must not end with a trailing slash.`,
        entryId: entry.id,
        path: entry.path,
      });
    }

    if (paths.has(entry.path)) {
      issues.push({
        code: "duplicate-path",
        message: `Duplicate path "${entry.path}" (also used by ${paths.get(entry.path)}).`,
        entryId: entry.id,
        path: entry.path,
      });
    } else {
      paths.set(entry.path, entry.id);
    }

    if (entry.indexable && excludedSitemapPaths.includes(entry.path)) {
      issues.push({
        code: "noindex-leakage",
        message: `Indexable entry uses an excluded path: ${entry.path}`,
        entryId: entry.id,
        path: entry.path,
      });
    }

  }

  const knownPaths = new Set(allEntries.map((entry) => entry.path));
  for (const entry of allEntries) {
    if (entry.indexable && entry.parentPath && !knownPaths.has(entry.parentPath)) {
      issues.push({
        code: "missing-parent",
        message: `Parent path "${entry.parentPath}" was not found in the registry.`,
        entryId: entry.id,
        path: entry.path,
      });
    }
  }

  for (const excludedPath of excludedSitemapPaths) {
    const leaked = indexableEntries.find((entry) => entry.path === excludedPath);
    if (leaked) {
      issues.push({
        code: "excluded-path-indexable",
        message: `Excluded path "${excludedPath}" is marked indexable.`,
        entryId: leaked.id,
        path: excludedPath,
      });
    }
  }

  const indexableTitles = indexableEntries.map((entry) => entry.title.trim().toLowerCase());
  const duplicateTitleCount = indexableTitles.length - new Set(indexableTitles).size;
  if (duplicateTitleCount > 0) {
    issues.push({
      code: "duplicate-titles",
      message: `${duplicateTitleCount} duplicate display titles found among indexable entries.`,
    });
  }

  if (indexableEntries.length === 0) {
    issues.push({ code: "empty-sitemap", message: "No indexable sitemap entries were generated." });
  }

  return {
    valid: issues.length === 0,
    entryCount: indexableEntries.length,
    excludedCount: excludedEntries.length,
    issues,
  };
}
