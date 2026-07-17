export type SitemapContentType =
  | "page"
  | "coverage"
  | "industry"
  | "location"
  | "resource"
  | "vehicle";

export interface SitemapEntry {
  /** Stable identifier, typically `{contentType}:{slug}` or `page:{path}`. */
  id: string;
  title: string;
  /** Site-relative path, e.g. `/coverage/dump-truck-insurance`. */
  path: string;
  description?: string;
  contentType: SitemapContentType;
  category?: string;
  subcategory?: string;
  published?: string;
  updated?: string;
  indexable: boolean;
  featured?: boolean;
  parentPath?: string;
  sortPriority?: number;
}

export interface StaticSitemapPageConfig {
  path: string;
  title: string;
  description: string;
  contentType?: SitemapContentType;
  category?: string;
  featured?: boolean;
  sortPriority?: number;
  /** XML sitemap priority (0–1). */
  xmlPriority?: number;
  /** XML sitemap change frequency. */
  xmlChangeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export interface SitemapSection {
  id: string;
  title: string;
  description?: string;
  hub?: SitemapEntry;
  entries: SitemapEntry[];
  subsections?: SitemapSubsection[];
}

export interface SitemapSubsection {
  id: string;
  title: string;
  entries: SitemapEntry[];
}

export interface SitemapSearchRecord {
  id: string;
  title: string;
  path: string;
  description?: string;
  contentType: SitemapContentType;
  category?: string;
}

export interface SitemapValidationIssue {
  code: string;
  message: string;
  entryId?: string;
  path?: string;
}

export interface SitemapValidationResult {
  valid: boolean;
  entryCount: number;
  excludedCount: number;
  issues: SitemapValidationIssue[];
}
