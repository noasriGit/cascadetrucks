import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  captureLeadAttribution,
  sanitizeSourcePath,
  validateLeadAttribution,
} from "@/lib/lead-attribution";

const validSlugs = {
  paths: new Set([
    "/coverage/dump-truck-insurance",
    "/coverage/excavation-contractor-insurance",
    "/vehicles/dump-trailer-insurance",
  ]),
  services: new Set(["dump-truck-insurance", "excavation-contractor-insurance"]),
  vehicles: new Set(["dump-trailer-insurance"]),
};

describe("lead attribution", () => {
  it("captures only the allowlisted UTM fields and a query-free source path", () => {
    const result = captureLeadAttribution(
      {
        pathname: "/coverage/excavation-contractor-insurance",
        search:
          "?utm_source=google&utm_medium=cpc&utm_campaign=excavation-va&utm_term=private-search&email=person%40example.com&referrer=google",
      },
      { serviceSlug: "excavation-contractor-insurance" }
    );

    assert.deepEqual(result, {
      sourcePath: "/coverage/excavation-contractor-insurance",
      utmSource: "google",
      utmMedium: "cpc",
      utmCampaign: "excavation-va",
      serviceSlug: "excavation-contractor-insurance",
      vehicleSlug: undefined,
    });
    assert.equal("utmTerm" in result, false);
    assert.equal("referrer" in result, false);
  });

  it("strips query and fragment data and rejects external or protocol-relative URLs", () => {
    assert.equal(
      sanitizeSourcePath("/coverage/dump-truck-insurance?email=person@example.com#private"),
      "/coverage/dump-truck-insurance"
    );
    assert.equal(sanitizeSourcePath("https://evil.example/coverage/dump-truck-insurance"), undefined);
    assert.equal(sanitizeSourcePath("//evil.example/coverage/dump-truck-insurance"), undefined);
  });

  it("keeps verified excavation and dump-truck contexts distinct", () => {
    const excavation = validateLeadAttribution(
      {
        sourcePath: "/coverage/excavation-contractor-insurance",
        serviceSlug: "excavation-contractor-insurance",
      },
      validSlugs
    );
    const dumpTruck = validateLeadAttribution(
      {
        sourcePath: "/coverage/dump-truck-insurance",
        serviceSlug: "dump-truck-insurance",
      },
      validSlugs
    );

    assert.equal(excavation.serviceSlug, "excavation-contractor-insurance");
    assert.equal(dumpTruck.serviceSlug, "dump-truck-insurance");
    assert.notEqual(excavation.serviceSlug, dumpTruck.serviceSlug);
  });

  it("retains a verified vehicle slug only on its matching vehicle route", () => {
    const result = validateLeadAttribution(
      {
        sourcePath: "/vehicles/dump-trailer-insurance",
        vehicleSlug: "dump-trailer-insurance",
      },
      validSlugs
    );
    assert.equal(result.vehicleSlug, "dump-trailer-insurance");
    assert.equal(result.serviceSlug, undefined);
  });

  it("drops unknown, mismatched, ambiguous, and unsafe values", () => {
    const result = validateLeadAttribution(
      {
        sourcePath: "/coverage/dump-truck-insurance",
        serviceSlug: "unknown-service",
        vehicleSlug: "dump-trailer-insurance",
        utmSource: "person@example.com",
        utmMedium: "paid search",
        utmCampaign: "x".repeat(81),
      },
      validSlugs
    );

    assert.deepEqual(result, {
      sourcePath: "/coverage/dump-truck-insurance",
      utmSource: undefined,
      utmMedium: undefined,
      utmCampaign: undefined,
      serviceSlug: undefined,
      vehicleSlug: undefined,
    });
  });

  it("drops a syntactically safe path that is not a known public route", () => {
    const result = validateLeadAttribution(
      { sourcePath: "/private/person-name", utmSource: "google" },
      validSlugs
    );
    assert.equal(result.sourcePath, undefined);
    assert.equal(result.utmSource, undefined);
  });
});
