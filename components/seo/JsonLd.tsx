type JsonValue = Record<string, unknown> | Record<string, unknown>[];

/**
 * Renders structured data as an inline JSON-LD script.
 * `<` is escaped to its unicode equivalent to prevent XSS, per Next.js guidance.
 */
export function JsonLd({ data }: { data: JsonValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
