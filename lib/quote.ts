export interface QuoteFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Record<string, string>;
}

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  message: "",
  errors: {},
};

export const quoteCoverageCategories = [
  "Heavy Trucks & Haulers",
  "Vans & Light Commercial",
  "Trailers",
  "Fleet (Multiple Vehicles)",
  "Other / Not sure",
] as const;

export type QuoteCoverageCategory = (typeof quoteCoverageCategories)[number];

/** Maps a specific service or vehicle name to a broad quote category. */
export function resolveQuoteCoverageCategory(specific?: string): QuoteCoverageCategory | "" {
  if (!specific) return "";

  const lower = specific.toLowerCase();

  if (lower.includes("fleet")) return "Fleet (Multiple Vehicles)";
  if (lower.includes("trailer")) return "Trailers";

  if (
    lower.includes("dump") ||
    lower.includes("tow") ||
    lower.includes("garbage") ||
    lower.includes("cement") ||
    lower.includes("flatbed truck") ||
    lower.includes("roll-off") ||
    lower.includes("bucket") ||
    lower.includes("tank truck") ||
    lower.includes("tractor") ||
    lower.includes("construction") ||
    lower.includes("debris") ||
    lower.includes("front loader") ||
    lower.includes("hotshot") ||
    lower.includes("stake body") ||
    lower.includes("pump truck") ||
    lower.includes("car carrier")
  ) {
    return "Heavy Trucks & Haulers";
  }

  if (quoteCoverageCategories.includes(specific as QuoteCoverageCategory)) {
    return specific as QuoteCoverageCategory;
  }

  return "Vans & Light Commercial";
}
