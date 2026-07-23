import { reviews } from "@/data/reviews";
import { services, coverageServices, industryServices } from "@/data/services";
import { pageLocations } from "@/data/locations";
import { vehicles } from "@/data/vehicles";
import { resources } from "@/data/resources";
import { authors } from "@/data/authors";
import { getIndexableSitemapEntries } from "@/lib/sitemap/registry";
import { sitemapPageSchema } from "@/lib/sitemap/schema";
import {
  AGENCY_ID,
  ORG_ID,
  WEBSITE_ID,
  aboutPageSchema,
  articleSchema,
  collectionPageSchema,
  contactPageSchema,
  insuranceAgencySchema,
  locationSchema,
  organizationSchema,
  serviceSchema,
  vehicleTypeSchema,
  websiteSchema,
} from "@/lib/schema";

export interface SchemaValidationIssue {
  code: string;
  message: string;
  path?: string;
}

export interface SchemaValidationResult {
  valid: boolean;
  issues: SchemaValidationIssue[];
}

type Json = Record<string, unknown>;

function collectTypes(value: unknown, types: Set<string>) {
  if (Array.isArray(value)) {
    for (const item of value) collectTypes(item, types);
    return;
  }
  if (!value || typeof value !== "object") return;
  const record = value as Json;
  const type = record["@type"];
  if (typeof type === "string") types.add(type);
  if (Array.isArray(type)) {
    for (const t of type) if (typeof t === "string") types.add(t);
  }
  for (const nested of Object.values(record)) collectTypes(nested, types);
}

function hasKeyDeep(value: unknown, key: string): boolean {
  if (Array.isArray(value)) return value.some((item) => hasKeyDeep(item, key));
  if (!value || typeof value !== "object") return false;
  const record = value as Json;
  if (key in record) return true;
  return Object.values(record).some((nested) => hasKeyDeep(nested, key));
}

export function validateSchemas(): SchemaValidationResult {
  const issues: SchemaValidationIssue[] = [];

  const org = organizationSchema();
  const agency = insuranceAgencySchema();
  const website = websiteSchema();

  if (org["@type"] !== "Organization" || org["@id"] !== ORG_ID) {
    issues.push({ code: "org-invalid", message: "Organization schema missing expected @type or @id." });
  }
  if (agency["@type"] !== "InsuranceAgency" || agency["@id"] !== AGENCY_ID) {
    issues.push({ code: "agency-invalid", message: "InsuranceAgency schema missing expected @type or @id." });
  }
  if (website["@type"] !== "WebSite" || website["@id"] !== WEBSITE_ID) {
    issues.push({
      code: "website-invalid",
      message: "WebSite schema missing expected @type or @id.",
      path: "/#website",
    });
  }

  if (!agency.openingHoursSpecification) {
    issues.push({
      code: "hours-missing",
      message: "InsuranceAgency should use openingHoursSpecification.",
    });
  }
  if (agency.openingHours) {
    issues.push({
      code: "hours-legacy",
      message: "InsuranceAgency still uses legacy openingHours string field.",
    });
  }

  if (reviews.length === 0) {
    if (hasKeyDeep(agency, "aggregateRating")) {
      issues.push({
        code: "aggregate-without-reviews",
        message: "AggregateRating must not be emitted while reviews[] is empty.",
      });
    }
    if (hasKeyDeep(agency, "review")) {
      issues.push({
        code: "reviews-without-data",
        message: "Review entities must not be emitted while reviews[] is empty.",
      });
    }
  }

  const sampleService = services[0];
  const sampleIndustry = industryServices[0];
  const sampleVehicle = vehicles[0];
  const sampleLocation = pageLocations[0];
  const sampleResource = resources[0];

  if (sampleService) {
    const schema = serviceSchema(sampleService, `/coverage/${sampleService.slug}`);
    if (schema["@type"] !== "Service") {
      issues.push({ code: "service-type", message: "Coverage pages must emit Service schema.", path: `/coverage/${sampleService.slug}` });
    }
  }

  if (sampleIndustry) {
    const schema = serviceSchema(sampleIndustry, `/coverage/${sampleIndustry.slug}`);
    if (schema["@type"] !== "Service") {
      issues.push({
        code: "industry-service-type",
        message: "Industry coverage pages must emit Service schema.",
        path: `/coverage/${sampleIndustry.slug}`,
      });
    }
  }

  if (sampleVehicle) {
    const schema = vehicleTypeSchema(sampleVehicle, `/vehicles/${sampleVehicle.slug}`);
    if (schema["@type"] !== "Service") {
      issues.push({
        code: "vehicle-service-type",
        message: "Vehicle pages must emit Service schema.",
        path: `/vehicles/${sampleVehicle.slug}`,
      });
    }
  }

  if (sampleLocation) {
    const schema = locationSchema(sampleLocation, `/locations/${sampleLocation.slug}`);
    if (schema["@type"] !== "WebPage") {
      issues.push({
        code: "location-not-webpage",
        message: "Location pages must emit WebPage (not InsuranceAgency).",
        path: `/locations/${sampleLocation.slug}`,
      });
    }
    if (schema["@type"] === "InsuranceAgency") {
      issues.push({
        code: "location-agency",
        message: "Location pages must not be typed as InsuranceAgency.",
        path: `/locations/${sampleLocation.slug}`,
      });
    }
    if (hasKeyDeep(schema, "streetAddress")) {
      issues.push({
        code: "location-street-address",
        message: "Location pages must not include HQ street address NAP.",
        path: `/locations/${sampleLocation.slug}`,
      });
    }
    if (hasKeyDeep(schema, "aggregateRating")) {
      issues.push({
        code: "location-aggregate",
        message: "Location pages must not emit AggregateRating.",
        path: `/locations/${sampleLocation.slug}`,
      });
    }
    const about = schema.about as Json | undefined;
    if (!about || about["@type"] !== "Service") {
      issues.push({
        code: "location-about-service",
        message: "Location WebPage must include about Service with areaServed.",
        path: `/locations/${sampleLocation.slug}`,
      });
    }
  }

  if (sampleResource) {
    const schema = articleSchema(sampleResource, authors[0], `/resources/${sampleResource.slug}`);
    if (schema["@type"] !== "Article") {
      issues.push({
        code: "article-type",
        message: "Resource guides must emit Article schema.",
        path: `/resources/${sampleResource.slug}`,
      });
    }
    const authorNode = schema.author as Json | undefined;
    if (authors[0] && authorNode?.["@type"] !== "Organization") {
      issues.push({
        code: "article-author-org",
        message: "Team-authored guides must use Organization (not Person) as Article author.",
        path: `/resources/${sampleResource.slug}`,
      });
    }
  }

  const about = aboutPageSchema("/about");
  if (about["@type"] !== "AboutPage") {
    issues.push({ code: "about-type", message: "About page must emit AboutPage schema.", path: "/about" });
  }

  const contact = contactPageSchema("/contact");
  if (contact["@type"] !== "ContactPage") {
    issues.push({ code: "contact-type", message: "Contact page must emit ContactPage schema.", path: "/contact" });
  }

  const hubs = [
    collectionPageSchema({
      name: "Coverage",
      description: "Coverage hub",
      path: "/coverage",
      items: coverageServices.map((s) => ({ name: s.name, url: `/coverage/${s.slug}` })),
    }),
    collectionPageSchema({
      name: "Industries",
      description: "Industries hub",
      path: "/industries",
      items: industryServices.map((s) => ({ name: s.name, url: `/coverage/${s.slug}` })),
    }),
    collectionPageSchema({
      name: "Vehicles",
      description: "Vehicles hub",
      path: "/vehicles",
      items: vehicles.slice(0, 5).map((v) => ({ name: v.name, url: `/vehicles/${v.slug}` })),
    }),
    collectionPageSchema({
      name: "Locations",
      description: "Locations hub",
      path: "/locations",
      items: pageLocations.slice(0, 5).map((l) => ({ name: l.city, url: `/locations/${l.slug}` })),
    }),
    collectionPageSchema({
      name: "Resources",
      description: "Resources hub",
      path: "/resources",
      items: resources.map((r) => ({ name: r.title, url: `/resources/${r.slug}` })),
    }),
  ];

  for (const hub of hubs) {
    if (hub["@type"] !== "CollectionPage") {
      issues.push({
        code: "hub-collection",
        message: "Hub pages must emit CollectionPage schema.",
        path: typeof hub.url === "string" ? hub.url : undefined,
      });
    }
    const main = hub.mainEntity as Json | undefined;
    if (!main || main["@type"] !== "ItemList") {
      issues.push({
        code: "hub-itemlist",
        message: "Hub CollectionPage must include ItemList mainEntity.",
        path: typeof hub.url === "string" ? hub.url : undefined,
      });
    }
  }

  const sitemap = sitemapPageSchema(getIndexableSitemapEntries(), "/sitemap");
  if (sitemap["@type"] !== "CollectionPage") {
    issues.push({ code: "sitemap-collection", message: "Sitemap page must emit CollectionPage.", path: "/sitemap" });
  }
  const sitemapPartOf = sitemap.isPartOf as Json | undefined;
  if (!sitemapPartOf || sitemapPartOf["@id"] !== WEBSITE_ID) {
    issues.push({
      code: "sitemap-website-ref",
      message: "Sitemap CollectionPage must reference sitewide WebSite @id.",
      path: "/sitemap",
    });
  }

  const allDocs: unknown[] = [
    org,
    agency,
    website,
    about,
    contact,
    ...hubs,
    sitemap,
    sampleService ? serviceSchema(sampleService, `/coverage/${sampleService.slug}`) : null,
    sampleVehicle ? vehicleTypeSchema(sampleVehicle, `/vehicles/${sampleVehicle.slug}`) : null,
    sampleLocation ? locationSchema(sampleLocation, `/locations/${sampleLocation.slug}`) : null,
    sampleResource ? articleSchema(sampleResource, authors[0], `/resources/${sampleResource.slug}`) : null,
  ].filter(Boolean);

  const types = new Set<string>();
  for (const doc of allDocs) collectTypes(doc, types);

  if (types.has("Product")) {
    issues.push({ code: "forbidden-product", message: "Product schema must not be emitted for insurance services." });
  }
  if (types.has("SoftwareApplication")) {
    issues.push({
      code: "forbidden-software",
      message: "SoftwareApplication schema must not be emitted on this site.",
    });
  }

  return { valid: issues.length === 0, issues };
}
