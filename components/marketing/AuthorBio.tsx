import Image from "next/image";
import type { Author } from "@/lib/types";

export function AuthorBio({ author, reviewedDate }: { author: Author; reviewedDate?: string }) {
  return (
    <aside aria-label="About the author" className="flex flex-col gap-4 rounded-2xl border border-line bg-surface-soft p-6 shadow-card sm:flex-row sm:items-start">
      <Image
        src={author.image}
        alt={`${author.name} avatar`}
        width={72}
        height={72}
        className="h-16 w-16 flex-none rounded-full object-cover"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Written &amp; reviewed by
        </p>
        <p className="mt-1 text-base font-bold text-ink">{author.name}</p>
        <p className="text-sm text-muted">{author.title}</p>
        <p className="mt-2 text-sm text-muted">{author.bio}</p>
        {author.credentials.length > 0 ? (
          <ul className="mt-2 flex flex-wrap gap-2">
            {author.credentials.map((c) => (
              <li key={c} className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                {c}
              </li>
            ))}
          </ul>
        ) : null}
        {reviewedDate ? (
          <p className="mt-3 text-xs text-muted">Last reviewed: {reviewedDate}</p>
        ) : null}
      </div>
    </aside>
  );
}
