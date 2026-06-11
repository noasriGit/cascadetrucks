import { Check } from "lucide-react";
import type { ContentSection } from "@/lib/types";

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-2xl font-bold tracking-tight text-ink">{section.heading}</h2>
          {section.body.map((paragraph, i) => (
            <p key={i} className="mt-3 text-base leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-ink">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
