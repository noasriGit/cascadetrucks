"use server";

import { redirect } from "next/navigation";
import { sendQuoteLeadEmail } from "@/lib/email/quote-lead";
import type { QuoteFormState } from "@/lib/quote";
import { QUOTE_CONFIRMATION_PATH } from "@/lib/quote";
import { site } from "@/data/site";

function asString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  // Honeypot: ignore bots that fill the hidden field.
  if (asString(formData.get("company_website"))) {
    redirect(QUOTE_CONFIRMATION_PATH);
  }

  const name = asString(formData.get("name"));
  const phone = asString(formData.get("phone"));
  const email = asString(formData.get("email"));
  const coverage = asString(formData.get("coverage"));
  const city = asString(formData.get("city"));
  const vehicles = asString(formData.get("vehicles"));
  const message = asString(formData.get("message"));

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!phone) errors.phone = "Please enter a phone number.";
  if (email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!coverage) errors.coverage = "Please select a coverage type.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const receivedAt = new Date().toISOString();
  const lead = { name, phone, email, coverage, city, vehicles, message, receivedAt };

  const result = await sendQuoteLeadEmail(lead);
  if (!result.ok) {
    console.error("[quote-request] email delivery failed", { error: result.error, lead });
    return {
      status: "error",
      message: `We couldn't send your request. Please call us at ${site.phoneDisplay}.`,
      errors: {},
    };
  }

  console.info("[quote-request] lead emailed", { name, coverage, receivedAt });

  redirect(QUOTE_CONFIRMATION_PATH);
}
