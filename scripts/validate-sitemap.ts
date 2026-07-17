import { validateSitemapRegistry } from "../lib/sitemap/validate";

const result = validateSitemapRegistry();

if (!result.valid) {
  console.error("Sitemap validation failed:");
  for (const issue of result.issues) {
    console.error(`- [${issue.code}] ${issue.message}`);
  }
  process.exit(1);
}

console.log(
  `Sitemap validation passed: ${result.entryCount} indexable entries, ${result.excludedCount} excluded.`,
);
