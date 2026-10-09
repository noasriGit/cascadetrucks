"use server";

import { redirect } from "next/navigation";
import { sendQuoteLeadEmail } from "@/lib/email/quote-lead";
import type { QuoteFormState } from "@/lib/quote";
import { processQuoteRequest } from "@/lib/quote-submission";

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const result = await processQuoteRequest(formData, sendQuoteLeadEmail, console);
  if (result.type === "redirect") redirect(result.path);
  return result.state;
}
