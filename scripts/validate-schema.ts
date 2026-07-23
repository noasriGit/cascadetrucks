import { validateSchemas } from "../lib/schema/validate";

const result = validateSchemas();

if (!result.valid) {
  console.error("Schema validation failed:");
  for (const issue of result.issues) {
    const suffix = issue.path ? ` (${issue.path})` : "";
    console.error(`- [${issue.code}] ${issue.message}${suffix}`);
  }
  process.exit(1);
}

console.log("Schema validation passed.");
