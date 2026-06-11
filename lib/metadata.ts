import type { Metadata } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/url";

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/coverage/dump-truck-insurance". */
  path: string;
  image?: { src: string; alt: string };
  type?: "website" | "article";
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? { url: absoluteUrl(image.src), alt: image.alt }
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      locale: "en_US",
      type,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage.url] : undefined,
    },
  };
}
