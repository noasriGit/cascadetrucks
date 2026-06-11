import Link from "next/link";

export interface LinkItem {
  label: string;
  href: string;
}

export interface LinkGroup {
  heading: string;
  links: LinkItem[];
}

export function RelatedLinks({ groups }: { groups: LinkGroup[] }) {
  const visible = groups.filter((g) => g.links.length > 0);
  if (visible.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {visible.map((group) => (
        <nav
          key={group.heading}
          aria-label={group.heading}
          className="rounded-2xl border border-line bg-surface p-6 shadow-card"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">{group.heading}</h3>
          <ul className="mt-4 space-y-2.5">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-brand-800 transition-colors hover:text-brand-600 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
