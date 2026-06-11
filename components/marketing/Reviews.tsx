import { Star } from "lucide-react";
import { reviews as allReviews } from "@/data/reviews";
import { site } from "@/data/site";
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

export function Reviews({ reviews = allReviews }: { reviews?: Review[] }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card">
        <Stars rating={Math.round(site.aggregateRating.ratingValue)} />
        <p className="text-sm font-semibold text-ink">
          {site.aggregateRating.ratingValue} average from {site.aggregateRating.reviewCount}+ reviews
        </p>
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <Stars rating={review.rating} />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">&ldquo;{review.text}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-brand-700">{review.author}</p>
            {review.location ? <p className="text-xs text-muted">{review.location}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
