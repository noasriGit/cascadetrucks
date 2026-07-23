import Link from "next/link";

export interface HubLink {
  label: string;
  href: string;
  description: string;
}

export function RelatedHubs({ hubs }: { hubs: HubLink[] }) {
  if (hubs.length === 0) return null;

  return (
    <nav aria-label="Related hubs" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {hubs.map((hub) => (
        <Link
          key={hub.href}
          href={hub.href}
          className="rounded-xl border border-line bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
        >
          <span className="text-base font-semibold text-brand-800">{hub.label}</span>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{hub.description}</p>
        </Link>
      ))}
    </nav>
  );
}
