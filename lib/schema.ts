import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { reviews as allReviews } from "@/data/reviews";
import { absoluteUrl } from "@/lib/url";
import type { Author, Faq, Resource, Review, Service } from "@/lib/types";

const ORG_ID = absoluteUrl("/#organization");
const AGENCY_ID = absoluteUrl("/#agency");

type Json = Record<string, unknown>;

function postalAddress(): Json {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.regionCode,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };
}

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.legalName,
    alternateName: site.brandName,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    telephone: site.phoneDisplay,
    email: site.email,
    address: postalAddress(),
    sameAs: site.socials,
  };
}

export function insuranceAgencySchema(options: { withReviews?: boolean } = {}): Json {
  const schema: Json = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": AGENCY_ID,
    name: site.brandName,
    legalName: site.legalName,
    parentOrganization: { "@id": ORG_ID },
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$$",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHours: site.hours,
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${site.address.regionCode}`,
    })),
    sameAs: site.socials,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
    },
  };

  if (options.withReviews) {
    schema.review = reviewSchemaList();
  }

  return schema;
}

export function reviewSchemaList(reviewsToUse: Review[] = allReviews): Json[] {
  return reviewsToUse.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
  }));
}

export function serviceSchema(service: Service, path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.shortDescription,
    url: absoluteUrl(path),
    provider: { "@id": AGENCY_ID },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${site.address.regionCode}`,
    })),
    category: "Commercial Vehicle Insurance",
  };
}

export function locationSchema(
  location: { city: string; shortDescription: string; geo?: { latitude: number; longitude: number } },
  path: string
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${absoluteUrl(path)}#agency`,
    name: `${site.brandName} - ${location.city}, ${site.address.regionCode}`,
    parentOrganization: { "@id": ORG_ID },
    url: absoluteUrl(path),
    image: absoluteUrl(site.logo),
    description: location.shortDescription,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$$",
    address: postalAddress(),
    areaServed: { "@type": "City", name: `${location.city}, ${site.address.regionCode}` },
    geo: location.geo
      ? { "@type": "GeoCoordinates", latitude: location.geo.latitude, longitude: location.geo.longitude }
      : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
    },
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(resource: Resource, author: Author | undefined, path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    url: absoluteUrl(path),
    image: absoluteUrl(resource.image.src),
    datePublished: resource.published,
    dateModified: resource.updated,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.title,
        }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: absoluteUrl(path),
  };
}
