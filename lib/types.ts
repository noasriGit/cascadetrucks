export type ServiceCategory = "coverage" | "industry";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export interface Carrier {
  id: string;
  name: string;
  logo: string;
}

export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  image: string;
}

export interface ServiceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  navLabel: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  /** Semantic entities reinforced on the page for topical relevance. */
  semanticEntities: string[];
  /** Body sections rendered in the page template. */
  sections: ContentSection[];
  coverageHighlights: string[];
  faqIds: string[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  relatedResourceSlugs: string[];
  image: ServiceImage;
  updated: string;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface Location {
  slug: string;
  city: string;
  region: string;
  /** True for the subset that currently has a dedicated page. */
  hasPage: boolean;
  headline: string;
  heroSubheadline: string;
  shortDescription: string;
  semanticEntities: string[];
  sections: ContentSection[];
  faqIds: string[];
  relatedServiceSlugs: string[];
  nearbyLocationSlugs: string[];
  image: ServiceImage;
  geo?: GeoPoint;
  updated: string;
}

export interface Resource {
  slug: string;
  title: string;
  excerpt: string;
  authorId: string;
  semanticEntities: string[];
  sections: ContentSection[];
  faqIds: string[];
  relatedServiceSlugs: string[];
  relatedResourceSlugs: string[];
  published: string;
  updated: string;
  image: ServiceImage;
}

export interface ContentSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface SiteConfig {
  brandName: string;
  legalName: string;
  parentName: string;
  tagline: string;
  description: string;
  url: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    regionCode: string;
    postalCode: string;
    country: string;
  };
  geo: GeoPoint;
  hours: string[];
  socials: string[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
  logo: string;
}
