import type { ContentSection, Location } from "@/lib/types";

const PAGE_LOCATIONS = [
  "fairfax-va",
  "arlington-va",
  "chantilly-va",
  "stafford-va",
  "fredericksburg-va",
  "winchester-va",
  "richmond-va",
];

function nearby(slug: string): string[] {
  return PAGE_LOCATIONS.filter((s) => s !== slug).slice(0, 4);
}

function image(slug: string, alt: string) {
  return { src: `/images/locations/${slug}.svg`, alt, width: 1200, height: 800 };
}

interface LocationSeed {
  slug: string;
  city: string;
  region: string;
  hasPage: boolean;
  geo?: { latitude: number; longitude: number };
}

const seeds: LocationSeed[] = [
  { slug: "fairfax-va", city: "Fairfax", region: "Northern Virginia", hasPage: true, geo: { latitude: 38.8462, longitude: -77.3064 } },
  { slug: "arlington-va", city: "Arlington", region: "Northern Virginia", hasPage: true, geo: { latitude: 38.8799, longitude: -77.1068 } },
  { slug: "chantilly-va", city: "Chantilly", region: "Northern Virginia", hasPage: true, geo: { latitude: 38.8943, longitude: -77.4311 } },
  { slug: "stafford-va", city: "Stafford", region: "Northern Virginia", hasPage: true, geo: { latitude: 38.4221, longitude: -77.4083 } },
  { slug: "fredericksburg-va", city: "Fredericksburg", region: "Central Virginia", hasPage: true, geo: { latitude: 38.3032, longitude: -77.4605 } },
  { slug: "winchester-va", city: "Winchester", region: "Shenandoah Valley", hasPage: true, geo: { latitude: 39.1857, longitude: -78.1633 } },
  { slug: "richmond-va", city: "Richmond", region: "Central Virginia", hasPage: true, geo: { latitude: 37.5407, longitude: -77.436 } },
  { slug: "alexandria-va", city: "Alexandria", region: "Northern Virginia", hasPage: false },
  { slug: "reston-va", city: "Reston", region: "Northern Virginia", hasPage: false },
  { slug: "ashburn-va", city: "Ashburn", region: "Northern Virginia", hasPage: false },
  { slug: "leesburg-va", city: "Leesburg", region: "Northern Virginia", hasPage: false },
  { slug: "manassas-va", city: "Manassas", region: "Northern Virginia", hasPage: false },
  { slug: "woodbridge-va", city: "Woodbridge", region: "Northern Virginia", hasPage: false },
];

interface LocationContent {
  heroSubheadline: string;
  shortDescription: string;
  semanticEntities: string[];
  sections: ContentSection[];
}

// Each page-city below is authored individually. No section body is shared
// across cities, to avoid thin or duplicate location content.
const pageContent: Record<string, LocationContent> = {
  "fairfax-va": {
    heroSubheadline:
      "From government contractor fleets to trade vans and dump trucks, we insure the commercial vehicles that keep Fairfax County working, all from our office just up Route 28 in Manassas.",
    shortDescription:
      "Commercial truck and vehicle insurance in Fairfax, VA. Coverage for contractors, fleets, and trucking businesses across Fairfax County, from licensed advisors in nearby Manassas.",
    semanticEntities: ["Fairfax", "Fairfax County", "government contractor fleets", "Route 50", "I-66", "commercial auto"],
    sections: [
      {
        heading: "Commercial Vehicles in Fairfax County",
        body: [
          "Fairfax is one of the busiest commercial vehicle markets in Virginia. Between Beltway construction, the steady work along the I-66 and Route 50 corridors, and the county's large base of government and federal contractors, the roads here are full of work trucks, service vans, and fleets.",
          "That density also means heavier traffic and higher accident exposure than rural parts of the state, which is exactly why Fairfax operators tend to carry liability limits above the Virginia minimum. We help local businesses set coverage that matches how and where they actually drive.",
        ],
        bullets: [
          "Dump and construction trucks for county and commercial projects",
          "Contractor and service vans for the trades",
          "Commercial fleets for contractors and delivery operations",
        ],
      },
      {
        heading: "Coverage for Fairfax Contractors and Fleet Operators",
        body: [
          "Contractors working Fairfax job sites often need proof of specific liability limits and additional-insured status before they can start, and we issue those certificates routinely. For trades hauling tools and equipment, we pair commercial auto with tools and equipment coverage so the gear in the van is protected too.",
          "Operators running several vehicles benefit from a commercial fleet policy that combines everything under one program. Whether you run dump trucks, work vans, or a mixed fleet, we tailor coverage to your operation.",
        ],
      },
      {
        heading: "Serving Fairfax from Nearby Manassas",
        body: [
          "Cascade Trucks Insurance is based in Manassas, a short drive down Route 28 from Fairfax, so we know this market firsthand. As an independent agency, we compare multiple carriers to find competitive, right-sized coverage rather than quoting a single rate.",
          "Call (703) 551-2000 to speak with a licensed advisor who understands Fairfax County operating conditions.",
        ],
      },
    ],
  },
  "arlington-va": {
    heroSubheadline:
      "Arlington's dense, urban roads and its busy black-car and corporate fleet activity call for commercial coverage built for the risk. We insure livery operators, fleets, and work vehicles across the county.",
    shortDescription:
      "Commercial vehicle and livery insurance in Arlington, VA. Coverage for Uber Black operators, corporate fleets, and work trucks near Reagan National, from licensed Virginia advisors.",
    semanticEntities: ["Arlington", "Reagan National Airport", "livery", "Uber Black", "corporate fleets", "urban commercial auto"],
    sections: [
      {
        heading: "Commercial Driving in Urban Arlington",
        body: [
          "Arlington is among the most densely populated areas in Virginia, and its commercial vehicle mix reflects that. Black-car and livery operators serve Reagan National Airport and the Rosslyn-Ballston corridor, while corporate fleets and delivery vehicles navigate tight, congested streets every day.",
          "Urban driving concentrates risk: more vehicles, more pedestrians, and more chances for a fender-bender to become a serious claim. Arlington operators generally carry higher liability limits as a result, and we help them right-size that protection.",
        ],
        bullets: [
          "Uber Black and livery vehicles for airport and corporate service",
          "Corporate and delivery fleets working the urban core",
          "Contractor and service vehicles for Arlington job sites",
        ],
      },
      {
        heading: "Livery and Black-Car Coverage in Arlington",
        body: [
          "Arlington has one of the region's strongest markets for Uber Black and professional black-car service. Uber Black operates under Virginia's Transportation Network Company (TNC) rules using a personal vehicle, not as a traditional for-hire motor carrier. It requires commercial or TNC-compatible coverage with limits that satisfy Virginia TNC insurance requirements and the platform.",
          "We write coverage for TNC and traditional livery operators that keeps Arlington drivers compliant and earning, and we cover the corporate and delivery fleets that move through the county. For drivers, our Uber Black insurance page explains the coverage in detail.",
        ],
      },
      {
        heading: "Local Service from Across the River",
        body: [
          "From our Manassas office, our licensed advisors serve Arlington operators with coverage suited to dense, high-traffic routes. As an independent agency, we shop multiple carriers to find the right fit.",
          "Call (703) 551-2000 to talk through coverage for your Arlington vehicles or fleet.",
        ],
      },
    ],
  },
  "chantilly-va": {
    heroSubheadline:
      "At the heart of the Dulles Tech Corridor, Chantilly runs on logistics, warehousing, and construction. We insure the trucks, vans, and fleets moving along the Route 28 and Route 50 corridors.",
    shortDescription:
      "Commercial vehicle insurance in Chantilly, VA. Coverage for logistics, warehouse, and construction fleets in the Dulles corridor, from licensed advisors in nearby Manassas.",
    semanticEntities: ["Chantilly", "Dulles Tech Corridor", "Route 28", "logistics", "warehousing", "Dulles Airport"],
    sections: [
      {
        heading: "Commercial Vehicles in the Dulles Corridor",
        body: [
          "Chantilly sits at the intersection of Route 28 and Route 50, one of Northern Virginia's busiest commercial hubs. The area's growth around Dulles International Airport has fueled heavy logistics, warehouse, and construction activity, putting box trucks, delivery vans, and construction fleets on the road in volume.",
          "This is freight-and-build country, and the vehicles here work hard. We tailor coverage for operations that run regular routes between warehouses, job sites, and the airport.",
        ],
        bullets: [
          "Box trucks and delivery vans for logistics operations",
          "Construction and dump trucks for corridor development",
          "Commercial fleets for warehousing and distribution",
        ],
      },
      {
        heading: "Coverage for Chantilly Logistics and Construction Fleets",
        body: [
          "Logistics and distribution operators often need motor truck cargo coverage alongside their commercial auto liability, and growing fleets benefit from combining vehicles on a single fleet policy. Construction operators working the corridor's many projects frequently need higher limits and additional-insured certificates.",
          "We build coverage around the specific mix of vehicles your Chantilly operation runs, from a single delivery van to a full distribution fleet.",
        ],
      },
      {
        heading: "Serving Chantilly from Manassas",
        body: [
          "Our Manassas office is a short trip from Chantilly, and our advisors work with operators throughout the Dulles corridor. As an independent agency, we compare carriers to find competitive coverage.",
          "Call (703) 551-2000 to discuss coverage for your Chantilly vehicles or fleet.",
        ],
      },
    ],
  },
  "stafford-va": {
    heroSubheadline:
      "Stafford's rapid growth along I-95 has put more contractor and construction vehicles on the road than ever. We insure the trades and trucking businesses building out this part of Virginia.",
    shortDescription:
      "Commercial truck and vehicle insurance in Stafford, VA. Coverage for contractors, construction, and trucking businesses along the I-95 corridor, from licensed Virginia advisors.",
    semanticEntities: ["Stafford", "Stafford County", "I-95 corridor", "construction", "Quantico", "contractor vehicles"],
    sections: [
      {
        heading: "A Growing I-95 Commercial Market",
        body: [
          "Stafford County has been one of the fastest-growing areas along the I-95 corridor, and that growth shows on the roads. Residential and commercial development has driven strong demand for contractor, construction, and dump truck operators, and the proximity to Quantico adds steady work for the trades.",
          "Operators here often run between Stafford job sites and projects further north or south along I-95, which means real highway miles and the exposure that comes with them. We size coverage to match that kind of operation.",
        ],
        bullets: [
          "Dump and construction trucks for new development",
          "Contractor and service vans for the building trades",
          "Commercial fleets for growing local businesses",
        ],
      },
      {
        heading: "Coverage for Stafford Contractors and Builders",
        body: [
          "With so much active construction, Stafford contractors regularly face contract requirements for specific liability limits and additional-insured status. We issue those certificates and structure limits to keep you eligible for the work.",
          "For trades carrying valuable tools, we add tools and equipment coverage, and operators running multiple trucks can combine them on a fleet policy for simpler administration and better pricing.",
        ],
      },
      {
        heading: "Local Service Along the Corridor",
        body: [
          "From our Manassas office, our licensed advisors serve Stafford operators who work the I-95 corridor every day. As an independent agency, we shop multiple carriers to find the right coverage.",
          "Call (703) 551-2000 to talk through coverage for your Stafford operation.",
        ],
      },
    ],
  },
  "fredericksburg-va": {
    heroSubheadline:
      "Positioned between Northern Virginia and Richmond, Fredericksburg's trades and haulers work both markets. We insure the commercial vehicles serving this busy I-95 and Route 1 hub.",
    shortDescription:
      "Commercial vehicle insurance in Fredericksburg, VA. Coverage for contractors, haulers, and fleets working the I-95 and Route 1 corridor, from licensed Virginia advisors.",
    semanticEntities: ["Fredericksburg", "Central Virginia", "I-95", "Route 1", "commuter belt", "construction"],
    sections: [
      {
        heading: "Commercial Vehicles in the Fredericksburg Area",
        body: [
          "Fredericksburg anchors a stretch of Central Virginia where the I-95 and Route 1 corridors carry constant commercial traffic. Many local contractors and haulers serve both the Northern Virginia and Richmond markets, putting significant highway miles on their trucks and vans.",
          "That dual-market reach is the defining feature here. A Fredericksburg operator might pour concrete in Stafford one day and haul to Richmond the next, so coverage needs to account for a wider radius than a single-city business.",
        ],
        bullets: [
          "Dump and construction trucks for regional projects",
          "Contractor and service vans serving two markets",
          "Commercial fleets running the I-95 corridor",
        ],
      },
      {
        heading: "Coverage for Fredericksburg Contractors and Haulers",
        body: [
          "Operators who run between markets often need broader radius-of-operation coverage and, for haulers, motor truck cargo for the materials they carry. Contractors working area job sites need the liability limits and certificates their contracts require.",
          "We tailor coverage to the reach of your work, whether you stay local or run the corridor in both directions, and combine multiple vehicles on a fleet policy when it makes sense.",
        ],
      },
      {
        heading: "Serving Central Virginia from Manassas",
        body: [
          "Our Manassas office keeps us close to the Fredericksburg market, and our advisors understand operators who work both ends of the corridor. As an independent agency, we compare carriers for the best fit.",
          "Call (703) 551-2000 to discuss coverage for your Fredericksburg-area business.",
        ],
      },
    ],
  },
  "winchester-va": {
    heroSubheadline:
      "In the Shenandoah Valley, Winchester's commercial vehicles run the I-81 and Route 7 corridors and the region's agricultural and distribution work. We insure the trucks and fleets that keep the Valley moving.",
    shortDescription:
      "Commercial truck and vehicle insurance in Winchester, VA. Coverage for Shenandoah Valley haulers, fleets, and trades along I-81 and Route 7, from licensed Virginia advisors.",
    semanticEntities: ["Winchester", "Shenandoah Valley", "I-81 corridor", "Route 7", "agriculture", "distribution"],
    sections: [
      {
        heading: "Commercial Vehicle Insurance in the Shenandoah Valley",
        body: [
          "Winchester is the commercial hub of Virginia's northern Shenandoah Valley, where the I-81 and Route 7 corridors carry freight, agricultural transport, and distribution traffic. The area's apple industry, warehousing, and trades all rely on commercial vehicles to operate.",
          "Valley driving brings its own conditions. Mountain grades and weather along I-81 add real physical-damage exposure, and long-haul routes mean more miles than a typical suburban operation. We factor those realities into the coverage we recommend.",
        ],
        bullets: [
          "Trucks and trailers for agricultural and freight hauling",
          "Contractor and service vehicles for Valley trades",
          "Commercial fleets running the I-81 corridor",
        ],
      },
      {
        heading: "Coverage for Winchester and Frederick County Operators",
        body: [
          "Haulers running I-81 often need motor truck cargo coverage and limits suited to long-haul work, while local trades need commercial auto paired with tools and equipment coverage. Physical damage is especially worth carrying given mountain terrain and Valley weather.",
          "We build coverage around the routes and cargo your Winchester-area operation actually handles, from a single truck to a regional fleet.",
        ],
      },
      {
        heading: "Statewide Reach from Manassas",
        body: [
          "Though we are based in Manassas, our licensed advisors write coverage throughout Virginia, including the Shenandoah Valley. As an independent agency, we compare carriers to find competitive, right-sized protection.",
          "Call (703) 551-2000 to talk through coverage for your Winchester-area business.",
        ],
      },
    ],
  },
  "richmond-va": {
    heroSubheadline:
      "As the state capital and a major I-95 distribution hub, Richmond runs a diverse commercial vehicle market. We insure trucking businesses, contractors, and fleets across the metro and Central Virginia.",
    shortDescription:
      "Commercial truck and vehicle insurance in Richmond, VA. Coverage for haulers, contractors, and fleets in the I-95 distribution hub, from licensed Virginia advisors.",
    semanticEntities: ["Richmond", "Central Virginia", "I-95 distribution hub", "Port of Virginia", "fleets", "commercial auto"],
    sections: [
      {
        heading: "Richmond's Diverse Commercial Vehicle Market",
        body: [
          "Richmond combines the activity of a state capital with its role as a major distribution hub on the I-95 corridor. The result is one of Virginia's most varied commercial vehicle markets: long-haul trucking and freight, large private and government fleets, construction tied to ongoing development, and the trades that support a growing metro.",
          "Port-related logistics and the convergence of I-95, I-64, and I-295 keep heavy commercial traffic moving through the region. We cover operators across that full spectrum, from owner-operators to sizable fleets.",
        ],
        bullets: [
          "Trucking and freight haulers on the I-95 corridor",
          "Dump and construction trucks for metro development",
          "Commercial and government fleets across the region",
        ],
      },
      {
        heading: "Coverage for Richmond Trucking and Fleet Operators",
        body: [
          "Freight and haul operators often need motor truck cargo coverage and, for interstate work, federal filings such as the MCS-90 endorsement. Larger operations benefit from a fleet policy that combines vehicles and can be experience-rated to reward a strong safety record.",
          "We structure coverage for the way Richmond businesses operate, whether that means a single truck running regional routes or a mixed fleet serving the metro and beyond.",
        ],
      },
      {
        heading: "Serving Richmond and Central Virginia",
        body: [
          "Our Manassas office serves the entire Commonwealth, and our advisors regularly write coverage for Richmond-area operators. As an independent agency, we shop multiple carriers to match your operation with the right policy.",
          "Call (703) 551-2000 to discuss coverage for your Richmond business or fleet.",
        ],
      },
    ],
  },
};

function fallbackContent(city: string, region: string): LocationContent {
  return {
    heroSubheadline: `Commercial truck and vehicle insurance for ${city} and the surrounding ${region} area, from licensed advisors at Cascade Trucks Insurance in Manassas.`,
    shortDescription: `Commercial truck and vehicle insurance for ${city}, ${region}. Coverage for contractors, trucking businesses, and fleets from licensed Virginia advisors.`,
    semanticEntities: [city, region, "commercial auto", "trucking insurance", "Virginia DMV"],
    sections: [
      {
        heading: `Commercial Vehicle Coverage for ${city} Businesses`,
        body: [
          `Cascade Trucks Insurance writes commercial auto, trucking, and fleet coverage for businesses in ${city} and across ${region}. From dump trucks and contractor vans to multi-vehicle fleets, we tailor coverage to how you operate.`,
          `As an independent agency based in Manassas, we compare multiple carriers to find competitive, right-sized protection. Call (703) 551-2000 or request a quote online to get started.`,
        ],
      },
    ],
  };
}

export const locations: Location[] = seeds.map((seed) => {
  const content = pageContent[seed.slug] ?? fallbackContent(seed.city, seed.region);
  return {
    slug: seed.slug,
    city: seed.city,
    region: seed.region,
    hasPage: seed.hasPage,
    headline: `Commercial Truck Insurance in ${seed.city}, VA`,
    heroSubheadline: content.heroSubheadline,
    shortDescription: content.shortDescription,
    semanticEntities: content.semanticEntities,
    sections: content.sections,
    faqIds: ["location-service", "location-local-rules", "general-cost", "general-requirements"],
    relatedServiceSlugs: [
      "dump-truck-insurance",
      "tow-truck-insurance",
      "contractor-vehicle-insurance",
      "commercial-fleet-insurance",
      "commercial-auto-insurance",
    ],
    nearbyLocationSlugs: nearby(seed.slug),
    image: image(seed.slug, `${seed.city}, Virginia commercial vehicles`),
    geo: seed.geo,
    updated: "2026-06-08",
  };
});

const locationMap = new Map(locations.map((l) => [l.slug, l]));

export function getLocation(slug: string): Location | undefined {
  return locationMap.get(slug);
}

export function getLocations(slugs: string[]): Location[] {
  return slugs.map((s) => locationMap.get(s)).filter((l): l is Location => Boolean(l));
}

export const pageLocations = locations.filter((l) => l.hasPage);
