import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Faq as FaqType } from "@/lib/types";

export function Faq({ faqs, withSchema = true }: { faqs: FaqType[]; withSchema?: boolean }) {
  if (faqs.length === 0) return null;

  return (
    <div className="mx-auto max-w-3xl">
      {withSchema ? <JsonLd data={faqSchema(faqs)} /> : null}
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="group rounded-2xl border border-line bg-surface px-6 shadow-card transition-colors open:border-brand-200 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left">
              <span className="text-base font-semibold text-ink">{faq.question}</span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45"
              >
                <Plus className="h-4 w-4" />
              </span>
            </summary>
            <div className="animate-[details-reveal_180ms_ease-out] pb-5 text-sm leading-6 text-muted">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
