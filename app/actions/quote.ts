"use server";

import type { QuoteFormState } from "@/lib/quote";

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
    return { status: "success", message: "Thanks! We'll be in touch shortly.", errors: {} };
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

  // TODO: deliver this lead to a real destination (CRM, email via Resend/SMTP,
  // or a webhook). For now we validate and log on the server.
  console.info("[quote-request] new lead", {
    name,
    phone,
    email,
    coverage,
    city,
    vehicles,
    message,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Thanks! A licensed Cascade advisor will contact you shortly.",
    errors: {},
  };
}
