import { Building2, Clock, MapPinned, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";

const indicators: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "Independent agency",
    description: `Backed by ${site.parentName} and multiple carrier partners.`,
  },
  {
    icon: MapPinned,
    title: "Virginia specialists",
    description: "Local expertise in trucking and commercial vehicle coverage.",
  },
  {
    icon: Clock,
    title: "Fast, no-obligation quotes",
    description: "Talk to a licensed advisor and get pricing quickly.",
  },
];

export function TrustIndicators() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {indicators.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 shadow-card">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500/15 text-accent-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-semibold text-brand-700">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
