import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Location } from "@/lib/types";

export function ServiceAreaGrid({ locations }: { locations: Location[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {locations.map((location) => {
        const label = `${location.city}, VA`;
        if (location.hasPage) {
          return (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-brand-700 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-900 hover:shadow-card-hover"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-none text-brand-400" aria-hidden="true" />
                  {label}
                </span>
                <ArrowRight
                  className="h-4 w-4 flex-none text-brand-400 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        }
        return (
          <li key={location.slug}>
            <span className="flex items-center gap-2 rounded-xl border border-dashed border-line bg-surface-soft px-4 py-3 text-sm font-medium text-muted">
              <MapPin className="h-4 w-4 flex-none text-slate-400" aria-hidden="true" />
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
