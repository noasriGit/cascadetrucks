import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";
import { formatLeadText, type QuoteLead } from "@/lib/email/quote-lead";
import { QUOTE_CONFIRMATION_PATH } from "@/lib/quote";
import { processQuoteRequest } from "@/lib/quote-submission";

function validForm(overrides: Record<string, string> = {}) {
  const values = {
    name: "Test Person",
    phone: "703-555-0100",
    email: "test@example.com",
    coverage: "Heavy Trucks & Haulers",
    city: "Manassas",
    vehicles: "2",
    message: "Test submission only",
    source_path: "/coverage/excavation-contractor-insurance",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "excavation-va",
    specific_service_slug: "excavation-contractor-insurance",
    specific_vehicle_slug: "",
    ...overrides,
  };
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) formData.set(key, value);
  return formData;
}

function mockLogger() {
  const entries: unknown[][] = [];
  return {
    entries,
    logger: {
      info: (...args: unknown[]) => entries.push(args),
      error: (...args: unknown[]) => entries.push(args),
    },
  };
}

describe("quote submission", () => {
  it("mocks delivery while retaining broad coverage and specific landing context", async () => {
    const delivered: QuoteLead[] = [];
    const { entries, logger } = mockLogger();
    const result = await processQuoteRequest(
      validForm(),
      async (lead) => {
        delivered.push(lead);
        return { ok: true };
      },
      logger
    );

    assert.deepEqual(result, { type: "redirect", path: QUOTE_CONFIRMATION_PATH });
    assert.equal(delivered.length, 1);
    assert.equal(delivered[0].coverage, "Heavy Trucks & Haulers");
    assert.equal(delivered[0].attribution.serviceSlug, "excavation-contractor-insurance");
    assert.equal(delivered[0].attribution.sourcePath, "/coverage/excavation-contractor-insurance");
    const emailText = formatLeadText(delivered[0]);
    assert.match(emailText, /Specific service: excavation-contractor-insurance/);
    assert.match(emailText, /UTM source: google/);
    assert.match(emailText, /UTM medium: cpc/);
    assert.match(emailText, /UTM campaign: excavation-va/);

    const logged = JSON.stringify(entries);
    for (const privateValue of [
      "Test Person",
      "703-555-0100",
      "test@example.com",
      "Test submission only",
    ]) {
      assert.equal(logged.includes(privateValue), false);
    }
  });

  it("distinguishes dump-truck attribution without changing broad classification", async () => {
    let delivered: QuoteLead | undefined;
    const { logger } = mockLogger();
    await processQuoteRequest(
      validForm({
        source_path: "/coverage/dump-truck-insurance",
        specific_service_slug: "dump-truck-insurance",
      }),
      async (lead) => {
        delivered = lead;
        return { ok: true };
      },
      logger
    );

    assert.equal(delivered?.coverage, "Heavy Trucks & Haulers");
    assert.equal(delivered?.attribution.serviceSlug, "dump-truck-insurance");
  });

  it("does not call the email provider for honeypot submissions", async () => {
    let calls = 0;
    const { logger } = mockLogger();
    const result = await processQuoteRequest(
      validForm({ company_website: "spam.example" }),
      async () => {
        calls += 1;
        return { ok: true };
      },
      logger
    );

    assert.equal(calls, 0);
    assert.deepEqual(result, { type: "redirect", path: QUOTE_CONFIRMATION_PATH });
  });

  it("does not log lead PII or provider error details when delivery fails", async () => {
    const { entries, logger } = mockLogger();
    const result = await processQuoteRequest(
      validForm(),
      async () => ({ ok: false, error: "provider echoed test@example.com" }),
      logger
    );

    assert.equal(result.type, "state");
    const logged = JSON.stringify(entries);
    assert.equal(logged.includes("test@example.com"), false);
    assert.equal(logged.includes("Test Person"), false);
    assert.match(logged, /deliveryError/);
  });

  it("preserves the existing Google Ads confirmation conversion", async () => {
    const confirmationSource = await readFile(
      new URL("../app/quote/confirmation/page.tsx", import.meta.url),
      "utf8"
    );
    assert.match(confirmationSource, /gtag\('event', 'conversion'/);
    assert.match(confirmationSource, /AW-18231331009\/gRQpCNn1qMAcEMGRsPVD/);
    assert.equal(QUOTE_CONFIRMATION_PATH, "/quote/confirmation");
  });
});
