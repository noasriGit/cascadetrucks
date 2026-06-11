import { site } from "@/data/site";

/** Returns an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}
