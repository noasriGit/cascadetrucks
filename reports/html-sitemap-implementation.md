# HTML Sitemap Implementation Report

## 1. Preflight findings

| Area | Finding |
|------|---------|
| Framework | Next.js 16.2.6, React 19, App Router |
| Routing | File-based App Router with SSG dynamic routes (`generateStaticParams`, `dynamicParams = false`) |
| XML sitemap | `app/sitemap.ts` served at `/sitemap.xml` |
| HTML sitemap (before) | None |
| Content sources | TypeScript data modules in `data/` (no CMS) |
| Indexability | `buildMetadata()` canonical URLs; `noIndex` on `/quote/confirmation` and 404 |
| robots.txt | `app/robots.ts` allows `/`, references `/sitemap.xml` |
| Trailing slashes | Default Next.js behavior (no trailing slash) |
| Tests (before) | None |

### How indexable pages are defined

Indexable pages are derived from authoritative content registries (`data/services.ts`, `data/locations.ts`, `data/resources.ts`, `data/vehicles.ts`) plus a typed static-page configuration (`lib/sitemap/static-pages.ts`). Pages are excluded when listed in `excludedSitemapPaths` or when `Location.hasPage` is false.

### Proposed architecture (implemented)

- Shared typed registry in `lib/sitemap/`
- Main HTML sitemap at `/sitemap`
- XML sitemap refactored to consume the same registry
- No category pagination (largest group is 51 vehicle pages, shown in subsections)
- Lightweight client-side search (104 entries)
- A–Z index for full discovery
- Featured and recently published sections

## 2. Existing content sources used

| Source | Entries | Route pattern |
|--------|---------|---------------|
| `lib/sitemap/static-pages.ts` | 11 hub/company pages | `/`, `/coverage`, `/about`, etc. |
| `data/services.ts` | 12 | `/coverage/[slug]` |
| `data/locations.ts` (`pageLocations`) | 25 | `/locations/[city]` |
| `data/resources.ts` | 5 | `/resources/[slug]` |
| `data/vehicles.ts` | 51 | `/vehicles/[slug]` |

## 3. Sitemap architecture implemented

```
/sitemap                    Main HTML sitemap (all sections)
/sitemap.xml                XML sitemap (unchanged route, shared data)
```

No category sitemap sub-routes or pagination were added.

## 4. Included content types

- Primary/hub pages
- Coverage types (3)
- Industries (9)
- Service areas / locations (25)
- Guides & resources (5)
- Vehicle types (51), grouped by `vehicleGroup`
- Company pages (about, contact, accessibility, sitemap)

## 5. Exclusion rules

| Rule | Pages affected |
|------|----------------|
| Explicit `excludedSitemapPaths` | `/quote/confirmation` |
| `Location.hasPage === false` | 0 (all current locations have pages) |
| API / admin / preview routes | None present |

## 6. Category and pagination decisions

- Sections mirror site IA: coverage, industries, locations, resources, vehicles, company
- Vehicle types use five subsections (trucks, trailers, cars & vans, buses, debris)
- Pagination not implemented (max subsection size: 21 entries)

## 7. Recently published logic

- Uses `Resource.published` from `data/resources.ts`
- Sorted descending by publication date
- Shows all 5 guides (site has fewer than the 10–20 target maximum)

## 8. Featured-content logic

- `featured: true` on hub pages and `/quote` in `static-pages.ts`
- Section labeled "Start here" (no popularity claims)

## 9. A–Z logic

- All 104 indexable entries grouped by first letter of title
- Leading articles ("A", "An", "The") stripped for sort letter
- Jump links for populated letters only
- Non-alpha titles grouped under `#` (none currently)

## 10. Search implementation

- Client component `SitemapSearch` with compact index (title, path, description, category, content type)
- Server-rendered full link lists preserved below search
- Max 20 results shown; keyboard accessible with visible focus states

## 11. SEO and structured-data implementation

- Unique title and meta description via `buildMetadata()`
- Self-referencing canonical at `/sitemap`
- JSON-LD: `BreadcrumbList`, `CollectionPage` with nested `ItemList`
- `/sitemap` added to XML sitemap at priority 0.3
- Open Graph/Twitter inherited from `buildMetadata()`

## 12. Accessibility and responsive results

- Semantic `<section>`, `<nav>`, and list markup
- Single H1 in Hero; logical H2/H3 hierarchy in sections
- Breadcrumbs with `aria-label`
- A–Z jump links with `min-h-10 min-w-10` touch targets
- Focus-visible rings on interactive elements
- Responsive grids (`sm:grid-cols-2`) and compact mobile lists
- Search uses labeled input with `aria-live` results region
- Dark-mode compatible via existing design tokens

## 13. Performance considerations

- Fully static generation (no client data fetching)
- Search index is a minimal JSON prop (~104 lightweight records)
- Registry cached in memory at module level
- No images or third-party libraries added for sitemap

## 14. Validation results

| Check | Result |
|-------|--------|
| `npm run test` | 6/6 passed |
| `npm run validate:sitemap` | Passed (104 indexable entries) |
| `npm run lint` | 0 errors (4 pre-existing warnings) |
| `npm run build` | Success (112 static pages) |

Validation covers: duplicate IDs/paths, missing titles, invalid paths, noindex leakage, missing parents, empty sitemap.

## 15. Exact files changed

### Added
- `lib/sitemap/types.ts`
- `lib/sitemap/static-pages.ts`
- `lib/sitemap/registry.ts`
- `lib/sitemap/sections.ts`
- `lib/sitemap/az-index.ts`
- `lib/sitemap/validate.ts`
- `lib/sitemap/validate.test.ts`
- `lib/sitemap/schema.ts`
- `components/sitemap/SitemapEntryList.tsx`
- `components/sitemap/SitemapSection.tsx`
- `components/sitemap/SitemapAzIndex.tsx`
- `components/sitemap/SitemapSearch.tsx`
- `app/sitemap/page.tsx`
- `scripts/validate-sitemap.ts`
- `reports/html-sitemap-implementation.md`

### Modified
- `app/sitemap.ts` (refactored to use shared registry)
- `data/navigation.ts` (footer sitemap link)
- `package.json` (test and validate scripts; tsx devDependency)

## 16. Known limitations

- No runtime redirect or HTTP status checks for destination URLs (static data site; routes are build-validated)
- Resource "recently published" section shows all guides because only five exist
- Vehicle and location display titles may share words but have unique paths
- Search is client-side only; all links remain in server HTML
- `footerNav` location links remain a partial manual subset (pre-existing)
