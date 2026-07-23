import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { reviews as allReviews } from "@/data/reviews";
import { absoluteUrl } from "@/lib/url";
import type { Author, Faq, Resource, Review, Service, VehicleType } from "@/lib/types";

export const ORG_ID = absoluteUrl("/#organization");
export const AGENCY_ID = absoluteUrl("/#agency");
export const WEBSITE_ID = absoluteUrl("/#website");

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

function openingHoursSpecification(): Json[] {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ];
}

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.parentName,
    legalName: site.legalName,
    alternateName: site.brandName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
    },
    telephone: site.phoneDisplay,
    email: site.email,
    address: postalAddress(),
    sameAs: site.socials,
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.brandName,
    url: absoluteUrl("/"),
    description: site.description,
    publisher: { "@id": AGENCY_ID },
    inLanguage: "en-US",
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
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${site.address.regionCode}`,
    })),
    sameAs: site.socials,
  };

  // AggregateRating and Review entities are only emitted when real, attributable
  // reviews exist. Shipping AggregateRating alone is a Google rich-result policy risk.
  const includeReviews = allReviews.length > 0 && (options.withReviews ?? true);
  if (includeReviews) {
    const ratingSum = allReviews.reduce((sum, review) => sum + review.rating, 0);
    const ratingValue = Math.round((ratingSum / allReviews.length) * 10) / 10;
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: allReviews.length,
      bestRating: 5,
      worstRating: 1,
    };
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

export function vehicleTypeSchema(vehicle: VehicleType, path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: vehicle.name,
    serviceType: vehicle.name,
    description: vehicle.shortDescription,
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
  location: {
    city: string;
    shortDescription: string;
    headline?: string;
    geo?: { latitude: number; longitude: number };
  },
  path: string,
): Json {
  const url = absoluteUrl(path);
  const cityName = `${location.city}, ${site.address.regionCode}`;
  const areaServed: Json = {
    "@type": "City",
    name: cityName,
  };
  if (location.geo) {
    areaServed.geo = {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: location.headline ?? `Commercial Truck Insurance in ${cityName}`,
    description: location.shortDescription,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    about: {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Commercial vehicle insurance in ${cityName}`,
      description: location.shortDescription,
      provider: { "@id": AGENCY_ID },
      areaServed,
      category: "Commercial Vehicle Insurance",
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
  const authorEntity = author
    ? {
        "@type": "Organization",
        "@id": absoluteUrl(`/authors/${author.id}#author`),
        name: author.name,
        description: author.bio,
        url: absoluteUrl(`/authors/${author.id}`),
      }
    : { "@id": ORG_ID };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    url: absoluteUrl(path),
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(resource.image.src),
      width: resource.image.width,
      height: resource.image.height,
    },
    datePublished: resource.published,
    dateModified: resource.updated,
    author: authorEntity,
    publisher: {
      "@id": ORG_ID,
      name: site.parentName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(site.logo),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function aboutPageSchema(path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: `About ${site.brandName}`,
    description: site.description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": AGENCY_ID },
  };
}

export function contactPageSchema(path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: `Contact ${site.brandName}`,
    description: `Contact ${site.brandName} for Virginia commercial vehicle and trucking insurance.`,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": AGENCY_ID },
    significantLink: [absoluteUrl("/quote"), `tel:${site.phoneHref}`],
  };
}

export function collectionPageSchema(options: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}): Json {
  const url = absoluteUrl(options.path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name: options.name,
    description: options.description,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: options.items.length,
      itemListElement: options.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
      })),
    },
  };
}
