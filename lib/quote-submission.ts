import { services } from "@/data/services";
import { vehicles } from "@/data/vehicles";
import type { QuoteFormState } from "@/lib/quote";
import { QUOTE_CONFIRMATION_PATH } from "@/lib/quote";
import {
  validateLeadAttribution,
  type LeadAttributionInput,
} from "@/lib/lead-attribution";
import type { QuoteLead } from "@/lib/email/quote-lead";
import { getIndexableSitemapEntries } from "@/lib/sitemap/registry";
import { site } from "@/data/site";

type EmailResult = { ok: true } | { ok: false; error: string };
type SendQuoteLead = (lead: QuoteLead) => Promise<EmailResult>;
type QuoteLogger = Pick<Console, "info" | "error">;

export type QuoteSubmissionResult =
  | { type: "redirect"; path: typeof QUOTE_CONFIRMATION_PATH }
  | { type: "state"; state: QuoteFormState };

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validAttributionSlugs = {
  paths: new Set(getIndexableSitemapEntries().map(({ path }) => path)),
  services: new Set(services.map(({ slug }) => slug)),
  vehicles: new Set(vehicles.map(({ slug }) => slug)),
};

export function buildQuoteLogContext(lead: QuoteLead) {
  return {
    coverage: lead.coverage,
    receivedAt: lead.receivedAt,
    sourcePath: lead.attribution.sourcePath,
    serviceSlug: lead.attribution.serviceSlug,
    vehicleSlug: lead.attribution.vehicleSlug,
  };
}

export async function processQuoteRequest(
  formData: FormData,
  sendQuoteLead: SendQuoteLead,
  logger: QuoteLogger
): Promise<QuoteSubmissionResult> {
  if (asString(formData.get("company_website"))) {
    return { type: "redirect", path: QUOTE_CONFIRMATION_PATH };
  }

  const name = asString(formData.get("name"));
  const phone = asString(formData.get("phone"));
  const email = asString(formData.get("email"));
  const coverage = asString(formData.get("coverage"));
  const city = asString(formData.get("city"));
  const vehiclesCount = asString(formData.get("vehicles"));
  const message = asString(formData.get("message"));

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!phone) errors.phone = "Please enter a phone number.";
  if (email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!coverage) errors.coverage = "Please select a coverage type.";

  if (Object.keys(errors).length > 0) {
    return {
      type: "state",
      state: { status: "error", message: "Please fix the highlighted fields.", errors },
    };
  }

  const attributionInput: LeadAttributionInput = {
    sourcePath: formData.get("source_path"),
    utmSource: formData.get("utm_source"),
    utmMedium: formData.get("utm_medium"),
    utmCampaign: formData.get("utm_campaign"),
    serviceSlug: formData.get("specific_service_slug"),
    vehicleSlug: formData.get("specific_vehicle_slug"),
  };
  const lead: QuoteLead = {
    name,
    phone,
    email,
    coverage,
    city,
    vehicles: vehiclesCount,
    message,
    receivedAt: new Date().toISOString(),
    attribution: validateLeadAttribution(attributionInput, validAttributionSlugs),
  };
  const logContext = buildQuoteLogContext(lead);
  const result = await sendQuoteLead(lead);

  if (!result.ok) {
    logger.error("[quote-request] email delivery failed", {
      ...logContext,
      deliveryError: true,
    });
    return {
      type: "state",
      state: {
        status: "error",
        message: `We couldn't send your request. Please call us at ${site.phoneDisplay}.`,
        errors: {},
      },
    };
  }

  logger.info("[quote-request] lead emailed", logContext);
  return { type: "redirect", path: QUOTE_CONFIRMATION_PATH };
}
