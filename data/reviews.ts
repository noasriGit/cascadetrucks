import type { Review } from "@/lib/types";

// Individual reviews must be real, attributable, and used with the customer's
// permission, since they are surfaced in JSON-LD review schema. Placeholder
// review text is intentionally NOT shipped: fabricated reviews are a YMYL/E-E-A-T
// risk and can trigger a structured-data manual action.
//
// To add reviews, paste real Google reviews here, e.g.:
//   { id: "review-1", author: "Jane D.", rating: 5, text: "...", date: "2025-11-02", location: "Fairfax, VA" }
//
// Once at least a few real reviews are present, re-enable review schema by
// passing `{ withReviews: true }` to insuranceAgencySchema() on the homepage.
// The aggregate rating shown on the site comes from data/site.ts and reflects
// the agency's real Google rating, independent of this list.
export const reviews: Review[] = [];
