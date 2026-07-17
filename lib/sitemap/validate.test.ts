import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildAzIndex } from "@/lib/sitemap/az-index";
import {
  buildSitemapRegistry,
  getFeaturedSitemapEntries,
  getIndexableSitemapEntries,
  getRecentSitemapEntries,
} from "@/lib/sitemap/registry";
import { buildSitemapSections } from "@/lib/sitemap/sections";
import { validateSitemapRegistry } from "@/lib/sitemap/validate";

describe("sitemap registry", () => {
  it("includes only indexable public pages", () => {
    const entries = getIndexableSitemapEntries();
    assert.ok(entries.length >= 100);
    assert.ok(!entries.some((entry) => entry.path === "/quote/confirmation"));
    assert.ok(entries.some((entry) => entry.path === "/sitemap"));
  });

  it("has unique ids and paths", () => {
    const entries = buildSitemapRegistry();
    const ids = new Set(entries.map((entry) => entry.id));
    const paths = new Set(entries.map((entry) => entry.path));
    assert.equal(ids.size, entries.length);
    assert.equal(paths.size, entries.length);
  });

  it("surfaces featured and recent content conservatively", () => {
    const featured = getFeaturedSitemapEntries();
    const recent = getRecentSitemapEntries();

    assert.ok(featured.some((entry) => entry.path === "/"));
    assert.ok(featured.some((entry) => entry.path === "/quote"));
    assert.equal(recent.length, 5);
    assert.ok(recent.every((entry) => entry.published));
  });

  it("builds non-empty categorized sections", () => {
    const sections = buildSitemapSections();
    assert.ok(sections.length >= 6);
    assert.ok(sections.every((section) => section.hub || section.entries.length > 0 || section.subsections?.length));
  });

  it("creates an A–Z index without empty letters", () => {
    const groups = buildAzIndex(getIndexableSitemapEntries());
    assert.ok(groups.length > 10);
    assert.ok(groups.every((group) => group.entries.length > 0));
  });

  it("passes validation", () => {
    const result = validateSitemapRegistry();
    if (!result.valid) {
      console.error(result.issues);
    }
    assert.equal(result.valid, true);
    assert.equal(result.entryCount, getIndexableSitemapEntries().length);
  });
});
