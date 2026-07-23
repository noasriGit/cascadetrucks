import { Star } from "lucide-react";
import { reviews as allReviews } from "@/data/reviews";
import { cn } from "@/lib/cn";
import type { Review } from "@/lib/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("h-5 w-5", i < rating ? "fill-accent-500 text-accent-500" : "fill-brand-100 text-brand-100")}
        />
      ))}
    </div>
  );
}

function formatReviewDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function Reviews({ reviews = allReviews }: { reviews?: Review[] }) {
  if (reviews.length === 0) return null;

  const average =
    Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card">
        <Stars rating={Math.round(average)} />
        <p className="text-sm font-semibold text-ink">
          {average} average from {reviews.length} customer review{reviews.length === 1 ? "" : "s"} shown here
        </p>
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <Stars rating={review.rating} />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">&ldquo;{review.text}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-brand-700">{review.author}</p>
            {review.location ? <p className="text-xs text-muted">{review.location}</p> : null}
            <p className="mt-1 text-xs text-muted">{formatReviewDate(review.date)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
