import { validateInternalLinks } from "../lib/internal-links/validate";

const result = validateInternalLinks();

if (!result.valid) {
  console.error("Internal link validation failed:");
  for (const issue of result.issues) {
    const suffix = issue.path ? ` (${issue.path})` : "";
    console.error(`- [${issue.code}] ${issue.message}${suffix}`);
  }
  process.exit(1);
}

console.log(
  `Internal link validation passed: ${result.pageCount} indexable pages, max crawl depth ${result.maxDepth}.`,
);
