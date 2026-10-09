import { Resend } from "resend";
import { site } from "@/data/site";
import type { LeadAttribution } from "@/lib/lead-attribution";

export interface QuoteLead {
  name: string;
  phone: string;
  email: string;
  coverage: string;
  city: string;
  vehicles: string;
  message: string;
  receivedAt: string;
  attribution: LeadAttribution;
}

const DEFAULT_FROM = `${site.brandName} <quotes@cascadetruckinsurance.com>`;

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export function formatLeadText(lead: QuoteLead): string {
  const attributionLines = [
    lead.attribution.sourcePath && `Source path: ${lead.attribution.sourcePath}`,
    lead.attribution.serviceSlug && `Specific service: ${lead.attribution.serviceSlug}`,
    lead.attribution.vehicleSlug && `Specific vehicle: ${lead.attribution.vehicleSlug}`,
    lead.attribution.utmSource && `UTM source: ${lead.attribution.utmSource}`,
    lead.attribution.utmMedium && `UTM medium: ${lead.attribution.utmMedium}`,
    lead.attribution.utmCampaign && `UTM campaign: ${lead.attribution.utmCampaign}`,
  ].filter((line): line is string => Boolean(line));
  const lines = [
    "New quote request from cascadetruckinsurance.com",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "(not provided)"}`,
    `Coverage type: ${lead.coverage}`,
    `City: ${lead.city || "(not provided)"}`,
    `Number of vehicles: ${lead.vehicles || "(not provided)"}`,
    "",
    "Additional details:",
    lead.message || "(none)",
    "",
    "Lead attribution:",
    ...(attributionLines.length > 0 ? attributionLines : ["(not available)"]),
    "",
    `Submitted: ${lead.receivedAt}`,
  ];
  return lines.join("\n");
}

export async function sendQuoteLeadEmail(lead: QuoteLead): Promise<{ ok: true } | { ok: false; error: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { ok: false, error: "RESEND_API_KEY is not configured" };
  }

  const to = process.env.QUOTE_LEAD_TO_EMAIL ?? site.email;
  const from = process.env.QUOTE_LEAD_FROM_EMAIL ?? DEFAULT_FROM;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email || undefined,
    subject: `Quote request: ${lead.name} (${lead.coverage})`,
    text: formatLeadText(lead),
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
