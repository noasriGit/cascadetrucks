import type { VehicleType } from "@/lib/types";
import {
  NOVA_LOCATIONS,
  RICHMOND_LOCATIONS,
  STATEWIDE_CORE,
  LOUDOUN_LOCATIONS,
  CENTRAL_CORRIDOR,
} from "@/data/location-sets";

const DEFAULT_LOCATIONS = [...STATEWIDE_CORE];
const NOVA = [...NOVA_LOCATIONS];
const RICHMOND = [...RICHMOND_LOCATIONS];
const LOUDOUN = [...LOUDOUN_LOCATIONS];
const CORRIDOR = [...CENTRAL_CORRIDOR];

function image(slug: string, alt: string) {
  return { src: `/images/vehicles/${slug}.svg`, alt, width: 1200, height: 800 };
}

export const vehicles: VehicleType[] = [
  // ─── TRUCKS ───────────────────────────────────────────────────────────────
  {
    slug: "box-truck-insurance",
    name: "Box Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Box truck insurance for Virginia businesses hauling goods, making deliveries, or moving equipment. Commercial auto liability, physical damage, and motor truck cargo coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Box Truck Insurance",
    heroSubheadline:
      "Box trucks and straight trucks power last-mile delivery, moving operations, and equipment transport across Virginia. We insure them with coverage built around your gross vehicle weight, cargo type, and haul radius.",
    semanticEntities: [
      "box truck",
      "straight truck",
      "motor truck cargo",
      "commercial auto liability",
      "Virginia DMV",
      "delivery operations",
    ],
    sections: [
      {
        heading: "What Box Truck Insurance Covers in Virginia",
        body: [
          "A box truck policy starts with commercial auto liability to cover bodily injury and property damage you cause to others on Virginia roads. Because box trucks carry enclosed cargo and operate in traffic-heavy delivery corridors, liability is the exposure that matters most.",
          "Physical damage coverage protects the truck itself from collision and comprehensive losses. Motor truck cargo coverage pays for the goods inside when a load is damaged, stolen, or destroyed. Many operators also add hired and non-owned auto for rented box trucks or employee-driven units.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: collision and comprehensive",
          "Motor truck cargo for the load you carry",
          "Hired and non-owned auto for rentals and borrowed units",
        ],
      },
      {
        heading: "Box Truck Configurations and GVW Classes",
        body: [
          "Box trucks, also called straight trucks or cube trucks, span Class 3 through Class 7 under the federal GVWR system, typically from about 10,001 lbs to 33,000 lbs. The weight class determines insurance requirements, federal filing thresholds, and the type of cargo you can legally haul.",
          "We insure standard dry-freight box trucks, refrigerated box trucks used for food and pharmaceutical delivery, liftgate-equipped units, and moving trucks. Whether you run one unit or a delivery fleet, we match coverage to your actual configuration.",
        ],
      },
      {
        heading: "Virginia and Federal Requirements for Box Trucks",
        body: [
          "Virginia requires commercial auto liability on every registered vehicle. Box trucks operating in interstate commerce with a GVW over 10,001 lbs are subject to FMCSA regulations and may require a DOT number and operating authority depending on the cargo and crossing of state lines.",
          "For-hire carriers subject to FMCSA financial responsibility rules typically need an MCS-90 endorsement. Intrastate-only operations generally need just Virginia liability coverage, though cargo limits are set by contract rather than regulation.",
        ],
      },
      {
        heading: "What Affects Your Box Truck Premium",
        body: [
          "GVW, the radius and frequency of operation, cargo type, driver records, and loss history all factor into your rate. Food-grade and pharmaceutical refrigerated units often carry higher cargo values and may price differently than dry-freight haulers.",
          "We compare your operation across multiple carriers to find competitive pricing whether you run a single unit or a mixed delivery fleet.",
        ],
        bullets: [
          "Gross vehicle weight and truck class",
          "Haul radius and operating territory",
          "Cargo type and declared value",
          "Driver experience and MVR history",
        ],
      },
      {
        heading: "How to Get a Box Truck Insurance Quote",
        body: [
          "Have your truck details (year, make, model, VIN, GVW), driver license information, haul radius, cargo description, and any prior loss history ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will review your operation and walk you through your options.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
      "Motor truck cargo",
      "Hired & non-owned auto",
    ],
    faqIds: ["general-requirements", "general-cost", "general-quote-speed"],
    relatedVehicleSlugs: [
      "delivery-van-insurance",
      "refrigerated-truck-insurance",
      "stake-body-truck-insurance",
      "flatbed-truck-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance", "business-auto-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "virginia-commercial-auto-insurance-guide"],
    image: image("box-truck-insurance", "Box truck on a Virginia highway"),
    updated: "2026-06-11",
  },
  {
    slug: "bucket-truck-insurance",
    name: "Bucket Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Bucket truck insurance for Virginia utility, tree service, and telecom operators. Commercial auto liability, aerial work platform coverage, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Bucket Truck Insurance",
    heroSubheadline:
      "Bucket trucks put workers in the air over live lines, roads, and structures. We write coverage for Virginia utility contractors, tree services, and telecom crews that reflects the real risk of aerial operations.",
    semanticEntities: [
      "bucket truck",
      "aerial work platform",
      "utility contractor",
      "aerial lift",
      "Virginia DMV",
      "OSHA aerial operations",
    ],
    sections: [
      {
        heading: "What Bucket Truck Insurance Covers in Virginia",
        body: [
          "Bucket truck coverage starts with commercial auto liability for on-road travel, but the aerial work platform component is equally important. General liability or inland marine coverage may be needed for the boom and bucket when the truck is stationary and a worker is elevated, pure commercial auto does not cover that exposure.",
          "Physical damage covers the truck and the attached aerial unit against collision and comprehensive losses. We build a package that addresses both the drive to the job and the work at height.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage for truck and aerial unit",
          "Coverage guidance for stationary aerial operations",
          "Hired and non-owned auto for rented lifts",
        ],
      },
      {
        heading: "Types of Bucket Trucks We Insure",
        body: [
          "We insure articulating and telescoping boom trucks, digger derricks, cable placers, and aerial work platforms across the full range of working heights. These units range from single-axle Class 5 trucks with 40-foot booms to tandem-axle Class 8 rigs capable of reaching 100 feet or more.",
          "Virginia utility contractors, electrical contractors, tree service companies, sign maintenance crews, and telecom technicians all rely on bucket trucks. We write coverage for all of these operations.",
        ],
      },
      {
        heading: "Virginia and Federal Requirements",
        body: [
          "Bucket trucks over 10,001 lbs GVW in interstate commerce are subject to FMCSA and typically require a DOT number. Virginia also has specific requirements for aerial work platform operations, and many local government and utility contracts specify minimum liability limits of $1 million or more.",
          "Our advisors verify that your policy limits and endorsements satisfy your contracts and any relevant Virginia Corporation Commission or utility franchise requirements.",
        ],
      },
      {
        heading: "What Affects Your Bucket Truck Premium",
        body: [
          "Working height, the type of work performed (live electrical versus tree trimming versus signage), driver qualifications, and the truck's age and value all affect pricing. Operations near high-voltage lines are rated differently than general maintenance work.",
        ],
        bullets: [
          "Boom working height and configuration",
          "Type of work: utility, tree, telecom, signage",
          "Driver qualifications and aerial certifications",
          "Proximity to energized lines",
        ],
      },
      {
        heading: "How to Get a Bucket Truck Insurance Quote",
        body: [
          "Have your truck details, boom specifications, the type of work you perform, your driver qualifications, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online to speak with a licensed advisor who understands aerial operations.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: truck and aerial unit",
      "Coverage for stationary aerial work",
      "Contractor-grade limits",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "stake-body-truck-insurance",
      "pump-truck-insurance",
      "box-truck-insurance",
    ],
    relatedServiceSlugs: ["contractor-vehicle-insurance", "construction-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("bucket-truck-insurance", "Bucket truck at a Virginia utility job site"),
    updated: "2026-06-11",
  },
  {
    slug: "car-carrier-insurance",
    name: "Car Carrier Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Car carrier and rollback insurance for Virginia auto haulers, towing companies, and dealership transport. Commercial auto liability, on-hook coverage, and garagekeepers legal liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Car Carrier and Rollback Insurance",
    heroSubheadline:
      "Car carriers and rollbacks move other people's vehicles, which means you're responsible for every car on the deck. We write coverage for Virginia auto haulers and towing operators that protects the vehicles in your care.",
    semanticEntities: [
      "car carrier",
      "rollback",
      "auto hauler",
      "on-hook towing",
      "garagekeepers",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Car Carrier Insurance Covers in Virginia",
        body: [
          "Car carrier insurance combines standard commercial auto liability with on-hook towing coverage, which pays for damage to vehicles you're hauling or loading if they're damaged in transit. Without on-hook coverage, damage to a customer's vehicle during transport is typically not covered by basic commercial auto.",
          "Physical damage covers the carrier itself. Garagekeepers legal liability is also relevant for dealers, auction transporters, and body shops that regularly move other parties' vehicles.",
        ],
        bullets: [
          "Commercial auto liability",
          "On-hook towing / in-transit vehicle coverage",
          "Physical damage for the carrier",
          "Garagekeepers legal liability",
        ],
      },
      {
        heading: "Car Carrier Types and Configurations",
        body: [
          "We insure single-car rollbacks and flatbed wreckers, multi-car open carriers hauling 3–10 vehicles, enclosed enclosed transport trailers, and drive-away operations. Single-unit rollbacks used for repossession or dealership moves are different exposures from an interstate auto hauler running 9 cars to a port.",
          "We match the coverage structure to your actual operation, whether you run a local repo fleet or haul vehicles for auctions and dealers.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements for Auto Haulers",
        body: [
          "Auto haulers operating in interstate commerce typically need FMCSA operating authority and must file proof of liability with FMCSA. Because transported vehicles contain fuel systems classified as hazardous materials under federal rules, interstate auto haulers generally need at least $1,000,000 in public liability coverage.",
          "Intrastate car carriers operating only within Virginia work under Virginia DMV requirements. Our advisors verify which filings apply to your specific operation.",
        ],
      },
      {
        heading: "What Affects Your Car Carrier Premium",
        body: [
          "The number of vehicles you haul per load, whether you operate locally or interstate, the value of vehicles you typically transport, and your MVR history all drive pricing. Repossession operations carry different risk profiles than dealer transport.",
        ],
        bullets: [
          "Load capacity: single vehicle vs. multi-car rig",
          "Interstate vs. intrastate operations",
          "Vehicle values in transit",
          "Repossession vs. dealer/auction transport",
        ],
      },
      {
        heading: "How to Get a Car Carrier Insurance Quote",
        body: [
          "Have your carrier details, the types of vehicles you haul, your operating territory, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online for a same-day response from a licensed advisor.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "On-hook towing coverage",
      "Physical damage for the carrier",
      "Garagekeepers legal liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "auto-hauler-trailer-insurance",
      "flatbed-truck-insurance",
      "flatbed-trailer-insurance",
    ],
    relatedServiceSlugs: ["tow-truck-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["tow-truck-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    image: image("car-carrier-insurance", "Car carrier rollback on a Virginia road"),
    updated: "2026-06-11",
  },
  {
    slug: "catering-truck-insurance",
    name: "Catering Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Catering truck and food truck insurance for Virginia food service operators. Commercial auto liability, equipment breakdown, and product liability coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Catering Truck Insurance",
    heroSubheadline:
      "Catering trucks and food trucks are rolling kitchens and commercial vehicles at the same time. We write Virginia coverage that addresses both the road risk and the food service exposure in a single package.",
    semanticEntities: [
      "catering truck",
      "food truck",
      "mobile food service",
      "commercial auto liability",
      "product liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Catering Truck Insurance Covers in Virginia",
        body: [
          "Catering truck coverage starts with commercial auto liability for on-road travel. When the truck is parked and serving, general liability or a commercial property endorsement covers the cooking equipment, food inventory, and the customer interaction risk that commercial auto alone doesn't touch.",
          "Physical damage covers the vehicle and installed equipment. Many Virginia operators also need product liability for food-borne illness claims and equipment breakdown coverage for refrigeration and cooking systems.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage for vehicle and installed equipment",
          "Product liability for food service",
          "Equipment breakdown for refrigeration and cooking systems",
        ],
      },
      {
        heading: "Types of Catering Vehicles We Insure",
        body: [
          "We insure step vans and cube trucks converted for food service, purpose-built catering trucks, ice cream trucks, food trailer configurations, and mobile catering vans serving corporate campuses, construction sites, and events.",
          "If your operation includes a trailer as well as a truck, we can combine both under the same policy for a cleaner coverage structure.",
        ],
      },
      {
        heading: "Virginia Requirements for Mobile Food Operations",
        body: [
          "Virginia requires commercial auto liability on the vehicle. Your county or city may also require a health permit, commissary agreement, and liability limits specified in a vending permit. Many event contracts and catering agreements require $1 million in general liability.",
          "We make sure the commercial auto side is properly structured while flagging where you also need general liability from a separate policy.",
        ],
      },
      {
        heading: "What Affects Your Catering Truck Premium",
        body: [
          "The vehicle's value, the equipment installed, the type of food prepared (open flame vs. cold foods vs. prepared food only), and your operating territory all affect pricing.",
        ],
        bullets: [
          "Vehicle and equipment value",
          "Open flame versus cold food operations",
          "Operating territory: events, fixed routes, corporate campuses",
          "Prior loss history",
        ],
      },
      {
        heading: "How to Get a Catering Truck Insurance Quote",
        body: [
          "Have your vehicle details, a description of the cooking equipment installed, your operating area, and prior insurance history ready.",
          "Call (703) 551-2000 or request a quote online for a licensed advisor who understands mobile food service coverage.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage for vehicle and equipment",
      "Product liability coverage",
      "Equipment breakdown protection",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "delivery-van-insurance",
      "commercial-minivan-insurance",
      "concession-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("catering-truck-insurance", "Catering truck serving at a Virginia event"),
    updated: "2026-06-11",
  },
  {
    slug: "cement-mixer-truck-insurance",
    name: "Cement Mixer Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Cement mixer truck insurance for Virginia concrete contractors and ready-mix haulers. Commercial auto liability, physical damage, and motor truck cargo coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Cement Mixer Truck Insurance",
    heroSubheadline:
      "Ready-mix trucks carry heavy, time-sensitive loads on tight delivery windows. We insure Virginia cement mixer operations with coverage built around the weight, radius, and cargo characteristics of concrete hauling.",
    semanticEntities: [
      "cement mixer",
      "ready-mix truck",
      "concrete hauling",
      "commercial auto liability",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Cement Mixer Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability is the foundation, covering bodily injury and property damage your mixer causes while operating on Virginia roads. Ready-mix trucks are among the heaviest vehicles on public roads, which means their liability exposures are significant.",
          "Physical damage covers the truck and the rotating drum. Motor truck cargo coverage applies to the ready-mix load itself, though most cement haulers focus more on liability and physical damage given concrete's limited per-load dollar value. We build your policy around where the real risk sits.",
        ],
        bullets: [
          "Commercial auto liability for on-road operations",
          "Physical damage for truck and drum assembly",
          "Motor truck cargo (optional, for declared load value)",
          "Hired and non-owned auto for additional units",
        ],
      },
      {
        heading: "Cement Mixer Configurations We Insure",
        body: [
          "We insure standard rear-discharge front-loading mixers, front-discharge mixers for tight urban pours, volumetric concrete mixers that batch on the job site, and short-load transit mixers used on smaller jobs. These range from single-axle units to tri-axle and quad-axle configurations.",
          "Whether you run a single truck for a small concrete business or a fleet of ready-mix units for a regional plant, we match the coverage to the operation.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements for Ready-Mix Haulers",
        body: [
          "Fully loaded tri-axle and quad-axle mixers can reach gross weights up to 80,000 lbs on interstate routes, subject to federal bridge formula limits, which puts them within FMCSA jurisdiction when operating in interstate commerce. Virginia also enforces specific axle weight and permit requirements for overweight operations.",
          "For-hire ready-mix carriers operating in interstate commerce need FMCSA operating authority and must maintain the required financial responsibility filings. Our advisors confirm which federal and state requirements apply to your specific routes.",
        ],
      },
      {
        heading: "What Affects Your Cement Mixer Premium",
        body: [
          "Truck weight class, number of axles, the radius of your pours, driver records, and loss history all factor into pricing. Urban operations with more traffic exposure typically rate differently than suburban or rural jobs.",
        ],
        bullets: [
          "GVW and axle configuration",
          "Urban vs. suburban/rural operating territory",
          "Driver MVR history",
          "Fleet size and prior loss experience",
        ],
      },
      {
        heading: "How to Get a Cement Mixer Insurance Quote",
        body: [
          "Have your truck schedule (including drum size and GVW), your operating radius, driver information, and prior insurance and loss history ready.",
          "Call (703) 551-2000 or request a quote online. Cement mixer policies are typically quoted the same day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: truck and drum",
      "Heavy haul limits",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "pump-truck-insurance",
      "dump-trailer-insurance",
      "stake-body-truck-insurance",
    ],
    relatedServiceSlugs: ["construction-vehicle-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["how-dump-truck-insurance-works", "virginia-commercial-auto-insurance-guide"],
    image: image("cement-mixer-truck-insurance", "Cement mixer truck at a Virginia construction site"),
    updated: "2026-06-11",
  },
  {
    slug: "delivery-van-insurance",
    name: "Delivery Van Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Delivery van and step van insurance for Virginia last-mile carriers, route drivers, and service technicians. Commercial auto liability, cargo coverage, and hired and non-owned auto from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Delivery Van Insurance",
    heroSubheadline:
      "Delivery vans and step vans make dozens of stops a day in congested Virginia traffic. We write coverage built for the high-frequency exposure of route delivery, parcel service, and field service operations.",
    semanticEntities: [
      "delivery van",
      "step van",
      "last-mile delivery",
      "route delivery",
      "cargo van",
      "commercial auto liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Delivery Van Insurance Covers in Virginia",
        body: [
          "Commercial auto liability is the primary coverage, paying for bodily injury and property damage caused during delivery runs. Motor truck cargo coverage protects the packages and goods you carry. Because delivery vans make frequent stops in traffic, liability and cargo are the two exposures that matter most.",
          "Physical damage covers the van itself. Hired and non-owned auto is essential for operations that use independent contractors, leased vehicles, or employees' personal vans for deliveries.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo for deliveries",
          "Physical damage: collision and comprehensive",
          "Hired and non-owned auto",
        ],
      },
      {
        heading: "Delivery and Step Van Types We Insure",
        body: [
          "We insure P-series step vans (Grumman, Morgan Olson), cargo conversion vans, Sprinter-style high-roof vans, and purpose-built parcel delivery units. These range from Class 1 and 2 cargo vans up to Class 5 walk-in step vans at 19,500 lbs GVWR.",
          "Route delivery for grocery, beverage, linen, uniform, and parcel operations each have slightly different risk profiles. We understand the distinctions and write accordingly.",
        ],
      },
      {
        heading: "Virginia Requirements for Delivery Operations",
        body: [
          "Virginia requires commercial auto liability on every business vehicle. Delivery vans operating interstate may be subject to FMCSA if the GVW exceeds 10,001 lbs. Last-mile delivery contractors working for larger carriers often need specific liability limits required by contract.",
          "Our advisors review your contracts and routes to confirm you carry the right limits and endorsements.",
        ],
      },
      {
        heading: "What Affects Your Delivery Van Premium",
        body: [
          "Number of stops per day, whether drivers are employees or contractors, the type of cargo (high-value electronics vs. routine parcels), operating territory, and driver records all affect pricing.",
        ],
        bullets: [
          "Daily stop count and route density",
          "Employee vs. contractor drivers",
          "Cargo type and declared value",
          "Urban vs. suburban operating territory",
        ],
      },
      {
        heading: "How to Get a Delivery Van Insurance Quote",
        body: [
          "Have your van schedule, driver list, cargo description, delivery territory, and prior insurance history ready.",
          "Call (703) 551-2000 or request a quote online for same-day coverage options.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo",
      "Hired & non-owned auto",
      "Physical damage",
    ],
    faqIds: ["general-requirements", "general-cost", "general-quote-speed"],
    relatedVehicleSlugs: [
      "box-truck-insurance",
      "cargo-van-insurance",
      "refrigerated-truck-insurance",
      "passenger-van-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "virginia-commercial-auto-insurance-guide"],
    image: image("delivery-van-insurance", "Delivery van making stops in a Virginia neighborhood"),
    updated: "2026-06-11",
  },
  {
    slug: "flatbed-truck-insurance",
    name: "Flatbed Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Flatbed truck insurance for Virginia carriers hauling steel, lumber, machinery, and oversized freight. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Flatbed Truck Insurance",
    heroSubheadline:
      "Flatbed haulers carry exposed freight on open decks, often oversized, often heavy. We insure Virginia flatbed operations with coverage that addresses load securement liability, cargo value, and the weight class of your rig.",
    semanticEntities: [
      "flatbed truck",
      "open-deck freight",
      "oversized load",
      "motor truck cargo",
      "FMCSA authority",
      "Virginia DMV",
      "flatbed hauling",
    ],
    sections: [
      {
        heading: "What Flatbed Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability covers bodily injury and property damage you cause while operating on Virginia roads. For flatbed haulers, load securement failures are a major liability exposure, if a shifting or falling load damages another vehicle or injures someone, your liability coverage responds.",
          "Motor truck cargo covers the freight on your deck. Physical damage covers the truck and, in some policies, the trailer. Flatbed operators hauling oversized or high-value loads should confirm that their cargo limits match the actual replacement cost of what they carry.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo: open-deck freight",
          "Physical damage for truck and trailer",
          "Load securement liability protection",
        ],
      },
      {
        heading: "Flatbed Operations and Cargo Types We Insure",
        body: [
          "We insure standard flatbeds hauling steel coils, plate, and structural steel; lumber and building materials; machinery and heavy equipment; concrete products; and oversized loads requiring pilot cars or permits. Step-deck and double-drop configurations are also covered.",
          "Virginia flatbed carriers operating to/from ports, construction sites, and manufacturing plants each have distinct routing and cargo risk profiles. We write coverage that reflects your actual freight mix.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements for Flatbed Haulers",
        body: [
          "Interstate flatbed carriers operating in for-hire commerce need FMCSA operating authority and must file proof of financial responsibility, including an MCS-90 endorsement on the liability policy. The standard minimum for general freight is $750,000.",
          "Oversize and overweight hauling permits are issued separately through Virginia DMV, but carriers should verify their cargo limits are adequate for the value of oversized loads before accepting a load.",
        ],
      },
      {
        heading: "What Affects Your Flatbed Premium",
        body: [
          "Cargo type and value, haul radius, whether you run oversize loads, driver qualifications, and loss history all shape your rate. Steel and machinery haulers typically see different rates than carriers hauling building materials.",
        ],
        bullets: [
          "Cargo type: steel, machinery, building materials",
          "Oversize and overweight operations",
          "Haul radius: regional vs. interstate",
          "Driver CDL experience and MVR",
        ],
      },
      {
        heading: "How to Get a Flatbed Truck Insurance Quote",
        body: [
          "Have your truck details, trailer configuration, typical cargo types, haul radius, driver information, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online. Many flatbed policies can be quoted same-day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo: open-deck freight",
      "Physical damage for truck and trailer",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "flatbed-trailer-insurance",
      "hotshot-truck-insurance",
      "truck-tractor-insurance",
      "lowboy-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("flatbed-truck-insurance", "Flatbed truck hauling steel on a Virginia interstate"),
    updated: "2026-06-11",
  },
  {
    slug: "hotshot-truck-insurance",
    name: "Hotshot Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Hotshot truck insurance for Virginia owner-operators using a pickup with a fifth wheel or gooseneck trailer for expedited freight. Commercial auto liability, motor truck cargo, and FMCSA filing support from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Hotshot Truck Insurance",
    heroSubheadline:
      "Hotshot operators move time-sensitive freight fast, often crossing state lines with a loaded gooseneck behind a dually. We write Virginia hotshot coverage built for the owner-operator who needs the right filings and the right cargo limits.",
    semanticEntities: [
      "hotshot trucking",
      "hotshot truck",
      "pickup with fifth wheel",
      "expedited freight",
      "gooseneck trailer",
      "FMCSA authority",
      "owner-operator",
    ],
    sections: [
      {
        heading: "What Hotshot Truck Insurance Covers in Virginia",
        body: [
          "Hotshot operations use a heavy-duty pickup, typically a one-ton dually, with a fifth-wheel hitch or gooseneck to pull loaded trailers. Commercial auto liability is required for the truck, and motor truck cargo covers the freight on the trailer.",
          "Physical damage covers both the truck and trailer. Because most hotshot operators cross state lines as for-hire carriers, FMCSA operating authority and an MCS-90 endorsement are typically required. A personal pickup policy will not cover this exposure.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo for time-sensitive freight",
          "Physical damage: truck and trailer",
          "FMCSA MCS-90 endorsement",
        ],
      },
      {
        heading: "Hotshot Operations We Insure",
        body: [
          "We insure pickup-and-trailer hotshot operations hauling oilfield equipment, machinery parts, construction materials, and general expedited freight. Load boards, direct contracts, and broker relationships all create the same insurance need.",
          "Virginia-based hotshot operators heading to the Carolinas, Ohio, Pennsylvania, or further west are typical of what we see. We write coverage that travels with you.",
        ],
      },
      {
        heading: "FMCSA Requirements for Hotshot Operators",
        body: [
          "Hotshot trucks operating in interstate for-hire commerce with a GVW or combined vehicle weight over 10,001 lbs need a USDOT number and, if carrying regulated freight for hire, MC operating authority. The MCS-90 endorsement guarantees public liability up to FMCSA minimums.",
          "Many hotshot operators also need a BOC-3 process agent filing and must maintain drug and alcohol testing compliance. We walk you through these requirements so you stay legal from day one.",
        ],
      },
      {
        heading: "What Affects Your Hotshot Insurance Premium",
        body: [
          "The trailer type and size, the commodity you haul, your haul radius, and your CDL status (if applicable) all affect pricing. Operators with a newer truck, clean MVR, and documented loss history price better than those just starting out.",
        ],
        bullets: [
          "Trailer type: flatbed, gooseneck, dovetail",
          "Commodity: oilfield, machinery, general freight",
          "Interstate radius and typical run length",
          "Driver MVR and prior trucking experience",
        ],
      },
      {
        heading: "How to Get a Hotshot Insurance Quote",
        body: [
          "Have your truck and trailer details, your USDOT and MC numbers if already obtained, a description of the freight you haul, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online. We can often get a hotshot policy bound the same day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo",
      "MCS-90 endorsement",
      "Physical damage: truck and trailer",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "flatbed-truck-insurance",
      "gooseneck-trailer-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("hotshot-truck-insurance", "Hotshot pickup truck with loaded gooseneck trailer in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "pump-truck-insurance",
    name: "Pump Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Pump truck insurance for Virginia concrete pump operators and grout pump contractors. Commercial auto liability, equipment coverage, and third-party property damage coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Pump Truck Insurance",
    heroSubheadline:
      "Concrete boom pumps and trailer pumps extend your reach on job sites but also extend your liability exposure. We write Virginia pump truck coverage that protects the equipment and the liability created by high-pressure pumping operations.",
    semanticEntities: [
      "pump truck",
      "concrete pump",
      "boom pump",
      "trailer pump",
      "grout pump",
      "Virginia DMV",
      "construction equipment",
    ],
    sections: [
      {
        heading: "What Pump Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability covers the pump truck while it's traveling on Virginia roads. When the truck is deployed on a job site with the boom extended, the exposure shifts to general liability and inland marine, coverages that are separate from the auto policy.",
          "Physical damage covers the chassis and the pump assembly against collision and comprehensive losses. We help you understand where the commercial auto coverage ends and where you need a separate policy for the boom and pump equipment.",
        ],
        bullets: [
          "Commercial auto liability for road travel",
          "Physical damage: chassis and pump assembly",
          "Coverage guidance for on-site pumping operations",
          "Hired and non-owned auto for leased pump units",
        ],
      },
      {
        heading: "Pump Truck Types We Insure",
        body: [
          "We insure truck-mounted boom pumps (typically 28- to 60-meter reach), trailer-mounted concrete pumps, line pumps for smaller pours, grout and shotcrete pumps, and specialty pump trucks used in tunneling and deep foundation work.",
          "Pump trucks range from Class 8 chassis configurations with separate pump bodies to trailer-mounted units towed by a standard truck. We write coverage for all of these configurations.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "Pump trucks over 26,001 lbs GVWR require a CDL for the driver. Interstate operation in for-hire commerce triggers FMCSA requirements. Virginia also has hauling permit requirements for oversize pump trucks with extended boom assemblies.",
        ],
      },
      {
        heading: "What Affects Your Pump Truck Premium",
        body: [
          "Boom length, the type of material pumped (concrete, grout, shotcrete), operating territory, driver qualifications, and prior loss history all drive pricing.",
        ],
        bullets: [
          "Boom reach and pump capacity",
          "Material type: concrete, grout, shotcrete",
          "Driver CDL and pump operator certifications",
          "Prior claims: spills, equipment damage, third-party property",
        ],
      },
      {
        heading: "How to Get a Pump Truck Insurance Quote",
        body: [
          "Have your pump truck details, boom specifications, the types of jobs you do, driver qualifications, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online to speak with an advisor who understands pumping operations.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: chassis and pump assembly",
      "Coverage for deployed boom operations",
      "Contractor-grade limits",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "cement-mixer-truck-insurance",
      "bucket-truck-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["construction-vehicle-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("pump-truck-insurance", "Concrete pump truck at a Virginia job site"),
    updated: "2026-06-11",
  },
  {
    slug: "refrigerated-truck-insurance",
    name: "Refrigerated Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Refrigerated truck insurance for Virginia food, pharmaceutical, and temperature-sensitive cargo carriers. Commercial auto liability, reefer breakdown coverage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Refrigerated Truck Insurance",
    heroSubheadline:
      "Reefer trucks carry cargo that can spoil in minutes if the refrigeration unit fails. We write Virginia coverage that addresses both the road liability and the cargo loss exposure unique to temperature-controlled hauling.",
    semanticEntities: [
      "refrigerated truck",
      "reefer truck",
      "temperature-controlled cargo",
      "motor truck cargo",
      "reefer breakdown",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Refrigerated Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability is the foundation. Motor truck cargo with a reefer breakdown endorsement is critical for refrigerated operations, without it, spoilage from a mechanical failure of the refrigeration unit is typically excluded. Physical damage covers both the truck and the refrigeration unit.",
          "Carriers hauling food, pharmaceuticals, or other high-value temperature-sensitive cargo should confirm their cargo limits match the actual value of what they carry, since a single lost load can exceed basic cargo limits.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo with reefer breakdown coverage",
          "Physical damage for truck and reefer unit",
          "High-value cargo endorsements if needed",
        ],
      },
      {
        heading: "Refrigerated Truck Configurations We Insure",
        body: [
          "We insure Class 6–8 refrigerated straight trucks, refrigerated box trucks for route delivery, truck-tractor and reefer trailer combinations, and multi-temperature units with separate compartments. We write both food-grade and pharmaceutical-grade refrigerated operations.",
          "Virginia's role as a major corridor between the Southeast and Northeast means a large proportion of refrigerated carriers operate interstate, and FMCSA compliance is the norm.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "Interstate refrigerated carriers typically need FMCSA operating authority and the MCS-90 endorsement. Carriers hauling certain FDA-regulated commodities may have additional documentation requirements under the Food Safety Modernization Act.",
          "Our advisors confirm which federal and state requirements apply and help you maintain compliant coverage.",
        ],
      },
      {
        heading: "What Affects Your Reefer Truck Premium",
        body: [
          "Cargo type and value (grocery vs. pharmaceutical), whether you haul multi-temperature loads, reefer unit age and maintenance record, haul radius, and driver history all influence pricing.",
        ],
        bullets: [
          "Cargo type: grocery, food service, pharma, floral",
          "Reefer unit age and maintenance history",
          "Multi-temperature vs. single-zone operations",
          "Haul radius: local, regional, interstate",
        ],
      },
      {
        heading: "How to Get a Refrigerated Truck Insurance Quote",
        body: [
          "Have your truck and reefer unit details, cargo type and typical load value, haul territory, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online for a same-day response.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo with reefer breakdown",
      "Physical damage: truck and reefer unit",
      "High-value cargo options",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "refrigerated-trailer-insurance",
      "box-truck-insurance",
      "truck-tractor-insurance",
      "dry-freight-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "virginia-commercial-auto-insurance-guide"],
    image: image("refrigerated-truck-insurance", "Refrigerated truck on a Virginia highway"),
    updated: "2026-06-11",
  },
  {
    slug: "stake-body-truck-insurance",
    name: "Stake Body Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Stake body truck insurance for Virginia landscapers, nurseries, contractors, and material haulers. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Stake Body Truck Insurance",
    heroSubheadline:
      "Stake body trucks are the workhorses of landscaping, nursery, and light construction hauling. We write Virginia coverage for the operators who depend on them every day.",
    semanticEntities: [
      "stake body truck",
      "stake truck",
      "flatbed stake",
      "landscaping truck",
      "contractor vehicle",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Stake Body Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability is the core coverage, protecting against bodily injury and property damage claims arising from your truck operations. Physical damage covers the stake body and chassis against collision, theft, and weather losses.",
          "Motor truck cargo covers the materials, plants, or equipment you haul. Contractors who frequently carry other parties' tools or equipment may also want to add hired and non-owned auto for rented units.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage for truck and stake body",
          "Motor truck cargo for materials and equipment",
          "Hired and non-owned auto",
        ],
      },
      {
        heading: "Stake Body Truck Uses We Insure",
        body: [
          "Stake body trucks are widely used in Virginia for landscaping and nursery work, light lumber and material delivery, debris removal, nursery transport, and general contractor hauling. The open sides and removable stakes make them versatile but also mean the load is exposed.",
          "We insure single-axle units for light-duty work and tandem-axle configurations for heavier material hauling.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Stake body trucks over 26,001 lbs GVW require a CDL. Most Virginia operators running lighter stake bodies for landscaping or contractor work fall under standard commercial auto.",
        ],
      },
      {
        heading: "What Affects Your Stake Body Premium",
        body: [
          "The type of work you do, what you haul, truck weight class, and driver records all affect pricing. Landscaping and nursery operators often price differently than construction material haulers.",
        ],
        bullets: [
          "Industry: landscaping, construction, delivery",
          "Cargo type and load exposure",
          "Truck weight class and age",
          "Driver MVR history",
        ],
      },
      {
        heading: "How to Get a Stake Body Truck Insurance Quote",
        body: [
          "Have your truck details, a description of what you haul, operating territory, and prior insurance history ready.",
          "Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Motor truck cargo",
      "Hired & non-owned auto",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "bucket-truck-insurance",
      "delivery-van-insurance",
      "flatbed-truck-insurance",
      "dump-trailer-insurance",
    ],
    relatedServiceSlugs: ["landscaping-vehicle-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("stake-body-truck-insurance", "Stake body truck at a Virginia landscaping job"),
    updated: "2026-06-11",
  },
  {
    slug: "tank-truck-insurance",
    name: "Tank Truck Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Tank truck insurance for Virginia fuel haulers, liquid waste carriers, and water transport operators. Commercial auto liability, FMCSA filings, and hazmat endorsements from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Tank Truck Insurance",
    heroSubheadline:
      "Tank trucks haul liquids that can cause significant environmental and public safety damage if something goes wrong. We write Virginia coverage for fuel, water, and liquid waste operations with the liability limits and filings your business requires.",
    semanticEntities: [
      "tank truck",
      "fuel hauler",
      "liquid cargo",
      "hazmat",
      "FMCSA",
      "motor truck cargo",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Tank Truck Insurance Covers in Virginia",
        body: [
          "Commercial auto liability is the foundation. Because tank trucks often carry flammable, corrosive, or environmentally hazardous liquids, the liability exposure from a spill or rollover is significant. Physical damage covers the chassis and tank assembly.",
          "Motor truck cargo covers the liquid load. Hazmat endorsements and environmental impairment liability may be required depending on what you haul. We build the policy to match the commodity.",
        ],
        bullets: [
          "Commercial auto liability with adequate limits",
          "Physical damage: chassis and tank",
          "Motor truck cargo for liquid loads",
          "Hazmat endorsement and environmental coverage options",
        ],
      },
      {
        heading: "Tank Truck Types and Commodities We Insure",
        body: [
          "We insure fuel oil and petroleum tankers, potable water trucks, liquid waste and septic haulers, chemical tankers, agricultural liquid tankers, and vacuum trucks. Tank configurations include DOT 406/407/412 spec tanks and non-code tanks for non-regulated commodities.",
          "Virginia's mix of rural septic and agricultural operations alongside urban fuel delivery creates a wide range of tank truck insurance needs that we address routinely.",
        ],
      },
      {
        heading: "FMCSA and Virginia Hazmat Requirements",
        body: [
          "Tank trucks hauling certain high-risk hazardous materials in interstate commerce need a Hazmat Safety Permit and must maintain FMCSA operating authority with higher financial responsibility minimums (up to $5,000,000 for certain hazardous materials). Virginia also restricts hazmat travel through select state-owned tunnels and designated truck routes.",
          "Our advisors confirm which placard classes apply to your commodity and what insurance and permit requirements follow.",
        ],
      },
      {
        heading: "What Affects Your Tank Truck Premium",
        body: [
          "The commodity you haul, whether it is regulated as hazardous material, tank size and age, operating territory, and driver CDL endorsements all affect your rate. Fuel haulers and chemical tankers typically carry higher liability limits than water truck operators.",
        ],
        bullets: [
          "Commodity: fuel, water, hazmat, liquid waste",
          "Hazmat placard class if applicable",
          "Tank size and age",
          "Driver CDL with tanker and hazmat endorsements",
        ],
      },
      {
        heading: "How to Get a Tank Truck Insurance Quote",
        body: [
          "Have your truck and tank details, the commodity you haul, your USDOT and MC numbers, and prior loss history ready.",
          "Call (703) 551-2000 or request a quote online for same-day coverage options.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: chassis and tank",
      "Motor truck cargo for liquid loads",
      "Hazmat endorsement support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "tank-trailer-insurance",
      "bulk-commodity-trailer-insurance",
      "truck-tractor-insurance",
      "garbage-truck-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("tank-truck-insurance", "Tank truck on a Virginia highway"),
    updated: "2026-06-11",
  },
  {
    slug: "truck-tractor-insurance",
    name: "Truck Tractor Insurance",
    vehicleGroup: "truck",
    shortDescription:
      "Truck tractor and semi-truck insurance for Virginia owner-operators and motor carriers. Commercial auto liability, physical damage, and FMCSA filing support from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Truck Tractor Insurance",
    heroSubheadline:
      "A truck tractor is the power unit behind every Class 8 haul. We write Virginia coverage for owner-operators and motor carriers running day cabs and sleepers, with the liability limits and federal filings your authority requires.",
    semanticEntities: [
      "truck tractor",
      "semi-truck",
      "Class 8",
      "owner-operator",
      "motor carrier",
      "FMCSA",
      "primary liability",
      "physical damage",
    ],
    sections: [
      {
        heading: "What Truck Tractor Insurance Covers in Virginia",
        body: [
          "Primary liability is the core coverage for a truck tractor, protecting against bodily injury and property damage you cause to others while hauling. For FMCSA-regulated interstate carriers, the minimum primary liability is $750,000 for general freight, higher for hazardous materials.",
          "Physical damage covers the tractor itself: collision, comprehensive, and in many cases fire, theft, and glass. Motor truck cargo covers the freight in the trailer. Unladen tractor coverage and bobtail liability are separate coverages that matter for owner-operators who lease to carriers.",
        ],
        bullets: [
          "Primary auto liability meeting FMCSA minimums",
          "Physical damage: collision and comprehensive",
          "Motor truck cargo for the trailer load",
          "Bobtail liability for unladen travel",
        ],
      },
      {
        heading: "Truck Tractor Configurations We Insure",
        body: [
          "We insure day cabs and sleeper cabs, single-axle and tandem-axle tractors, straight-axle and tag-axle configurations, and specialty tractors for lowboy and heavy haul operations. Owner-operators leasing to a motor carrier and carriers running their own authority both have different coverage structures that we navigate routinely.",
        ],
      },
      {
        heading: "FMCSA Requirements for Truck Tractors",
        body: [
          "Every interstate for-hire motor carrier operating a truck tractor needs FMCSA operating authority, a USDOT number, and a BOC-3 process agent filing. The MCS-90 endorsement guarantees public liability. Primary liability minimums depend on commodity: $750,000 for general freight, $1 million for oil, $5 million for certain hazmat.",
          "Owner-operators leased to a carrier operate under the carrier's authority but should confirm whether their own policy or the carrier's policy is primary during loaded, empty, and bobtail miles.",
        ],
      },
      {
        heading: "What Affects Your Truck Tractor Premium",
        body: [
          "The tractor's value, haul radius, commodity class, driver CDL experience, MVR history, and whether the tractor is operated under a lease or the operator's own authority all affect pricing.",
        ],
        bullets: [
          "Tractor value and configuration",
          "Commodity: general freight, hazmat, heavy haul",
          "Owned authority vs. lease arrangement",
          "Driver CDL class and MVR history",
        ],
      },
      {
        heading: "How to Get a Truck Tractor Insurance Quote",
        body: [
          "Have your tractor's year, make, model, and VIN; your USDOT and MC numbers; the commodity you haul; and any prior loss history ready.",
          "Call (703) 551-2000 or request a quote online. We quote trucking liability the same day in most cases.",
        ],
      },
    ],
    coverageHighlights: [
      "Primary auto liability",
      "Physical damage",
      "MCS-90 endorsement",
      "Bobtail liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "flatbed-truck-insurance",
      "refrigerated-truck-insurance",
      "lowboy-trailer-insurance",
      "dry-freight-trailer-insurance",
    ],
    relatedServiceSlugs: ["semi-truck-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "virginia-commercial-auto-insurance-guide"],
    image: image("truck-tractor-insurance", "Semi-truck tractor on a Virginia interstate"),
    updated: "2026-06-11",
  },

  // ─── TRAILERS ─────────────────────────────────────────────────────────────
  {
    slug: "auto-hauler-trailer-insurance",
    name: "Auto Hauler Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Auto hauler trailer insurance for Virginia multi-car transport operators. On-hook coverage, trailer physical damage, and FMCSA liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Auto Hauler Trailer Insurance",
    heroSubheadline:
      "Multi-car hauler trailers carry significant cargo value on every load. We write Virginia coverage for open and enclosed auto transport trailers that protects both the trailer and the vehicles on it.",
    semanticEntities: [
      "auto hauler trailer",
      "car transport trailer",
      "on-hook coverage",
      "multi-car transport",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Auto Hauler Trailer Insurance Covers",
        body: [
          "An auto hauler trailer policy combines trailer physical damage with on-hook coverage, which pays for damage to vehicles on the trailer while in transit. Standard commercial auto liability covers the combination unit on the road.",
          "Auto hauler operations are regulated at the federal level. Interstate for-hire carriers must maintain FMCSA operating authority and minimum financial responsibility, typically $750,000 for non-hazardous freight or $1,000,000 when transporting fueled vehicles. Many auto auction and manufacturer contracts require higher limits.",
        ],
        bullets: [
          "Trailer physical damage",
          "On-hook coverage for vehicles in transit",
          "Commercial auto liability for the combination unit",
          "FMCSA compliance support",
        ],
      },
      {
        heading: "Auto Hauler Trailer Types We Insure",
        body: [
          "We insure 2–3 car open trailers for local dealer moves, 7–10 car full-size open auto haulers for interstate transport, enclosed auto transport trailers for classic and high-value vehicles, and drive-away trailer configurations.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements",
        body: [
          "Interstate for-hire auto haulers generally need FMCSA operating authority. FMCSA treats transported vehicles as hazardous materials because they contain fuel, which typically requires $1,000,000 in public liability. Enclosed carriers transporting high-value vehicles for hire may carry higher cargo limits per load by contract.",
        ],
      },
      {
        heading: "What Affects Your Auto Hauler Premium",
        body: [
          "The number of vehicles per load, vehicle values in transit, whether loads are open or enclosed, operating territory, and driver history all shape pricing.",
        ],
      },
      {
        heading: "How to Get an Auto Hauler Trailer Quote",
        body: [
          "Have your trailer details, load capacity, typical vehicle values, operating territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "On-hook coverage",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "car-carrier-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["tow-truck-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    image: image("auto-hauler-trailer-insurance", "Auto hauler trailer loaded with vehicles in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "dump-trailer-insurance",
    name: "Dump Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Dump trailer insurance for Virginia operators hauling dirt, gravel, and aggregate with bottom or side dump trailers. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Dump Trailer Insurance",
    heroSubheadline:
      "Bottom and side dump trailers haul large volumes of bulk material on construction sites and highway projects across Virginia. We write coverage for the trailer and the combination unit.",
    semanticEntities: [
      "dump trailer",
      "bottom dump",
      "side dump",
      "bulk material hauling",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Dump Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the dump body against collision and comprehensive losses. Motor truck cargo covers the material in the trailer. Commercial auto liability for the combination unit (tractor plus trailer) must meet FMCSA minimums for interstate for-hire carriers.",
          "Bottom and side dump trailers often operate at high GVW in train configurations, and the liability exposure reflects that.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for bulk material",
          "Commercial auto liability",
          "FMCSA filing support",
        ],
      },
      {
        heading: "Dump Trailer Configurations We Insure",
        body: [
          "We insure bottom dump (belly dump) trailers for high-speed aggregate discharge, side dump trailers for wider spreading operations, and live-bottom trailers with moving floors. Both single-trailer and double-trailer (B-train) configurations are covered.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire bulk carriers operating interstate need FMCSA authority and MCS-90 endorsement. Virginia for-hire property carriers with vehicles over 10,000 pounds GVWR must carry $750,000 in liability, and every registered vehicle must meet Virginia's current minimum liability limits (50/100/25 as of January 1, 2025). Overweight loads require hauling permits through Virginia DMV.",
        ],
      },
      {
        heading: "What Affects Your Dump Trailer Premium",
        body: [
          "Trailer age and configuration, the material hauled, operating territory, and the power unit's MVR history all factor into pricing.",
        ],
      },
      {
        heading: "How to Get a Dump Trailer Quote",
        body: [
          "Have your trailer details, material type, haul territory, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "transfer-dump-trailer-insurance",
      "bulk-commodity-trailer-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["dump-truck-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["how-dump-truck-insurance-works", "virginia-commercial-auto-insurance-guide"],
    image: image("dump-trailer-insurance", "Bottom dump trailer on a Virginia highway project"),
    updated: "2026-06-11",
  },
  {
    slug: "bulk-commodity-trailer-insurance",
    name: "Bulk Commodity Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Bulk commodity trailer insurance for Virginia carriers hauling grain, feed, plastic pellets, cement, and dry bulk materials. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Bulk Commodity Trailer Insurance",
    heroSubheadline:
      "Bulk commodity trailers move agricultural goods, industrial dry materials, and processed products across Virginia. We write coverage that accounts for the commodity, the load value, and the FMCSA requirements of for-hire dry bulk operations.",
    semanticEntities: [
      "bulk commodity trailer",
      "dry bulk trailer",
      "grain trailer",
      "pneumatic trailer",
      "FMCSA",
      "motor truck cargo",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Bulk Commodity Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the bulk trailer against collision and comprehensive losses. Motor truck cargo covers the commodity inside. Commercial auto liability for the combination unit must meet FMCSA minimums for interstate for-hire carriers.",
          "Pneumatic trailers used for dry bulk discharge may have specific equipment endorsements depending on the pressurized delivery system.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for dry bulk loads",
          "Commercial auto liability",
          "FMCSA compliance",
        ],
      },
      {
        heading: "Bulk Commodity Trailer Types We Insure",
        body: [
          "We insure open-top grain trailers, closed pneumatic bulk trailers for cement and plastic pellets, feed trailers, mineral and sand trailers, and specialty bulk configurations for industrial materials.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire interstate dry bulk carriers need FMCSA authority and MCS-90 endorsement. Agricultural commodity haulers may have exemptions for certain intrastate operations under Virginia's farm vehicle rules.",
        ],
      },
      {
        heading: "What Affects Your Bulk Commodity Trailer Premium",
        body: [
          "Commodity type, load value, trailer age, operating territory, and driver MVR history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Bulk Commodity Trailer Quote",
        body: [
          "Have your trailer details, commodity type, haul territory, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "dump-trailer-insurance",
      "tank-trailer-insurance",
      "truck-tractor-insurance",
      "dry-freight-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("bulk-commodity-trailer-insurance", "Bulk commodity trailer at a Virginia loading facility"),
    updated: "2026-06-11",
  },
  {
    slug: "concession-trailer-insurance",
    name: "Concession Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Concession trailer insurance for Virginia food vendors, fair operators, and mobile catering businesses. Commercial auto liability for the tow vehicle, trailer physical damage, and product liability coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Concession Trailer Insurance",
    heroSubheadline:
      "Concession trailers travel from fair to fair and event to event, which means they need coverage both on the road and at the venue. We write Virginia coverage that addresses both exposures.",
    semanticEntities: [
      "concession trailer",
      "food concession",
      "mobile food trailer",
      "special event vendor",
      "product liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Concession Trailer Insurance Covers",
        body: [
          "Coverage for a concession trailer involves two distinct phases: on the road behind a tow vehicle, and deployed at an event or fair. Commercial auto liability and trailer physical damage cover the transit phase. When the trailer is stationary, general liability and product liability are the relevant coverages for the food service and customer interaction exposure.",
          "We help you structure both sides of the coverage so you're not relying solely on an auto policy that stops protecting you the moment you open the service window.",
        ],
        bullets: [
          "Trailer physical damage",
          "Commercial auto liability for tow vehicle and trailer",
          "Product liability for food service",
          "General liability for deployed operations",
        ],
      },
      {
        heading: "Types of Concession Trailers We Insure",
        body: [
          "We insure open-air BBQ trailers, enclosed food service trailers with full kitchens, dessert and ice cream trailers, specialty concession units, and mobile bar trailers for events. Sizes range from small 10-foot trailers to 40-foot kitchen-equipped units.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "The tow vehicle needs commercial auto liability. The trailer needs physical damage coverage and, when in use at events, general liability and product liability per most event contracts. Virginia Department of Health permits are required for food service.",
        ],
      },
      {
        heading: "What Affects Your Concession Trailer Premium",
        body: [
          "Trailer value, the type of food prepared, open flame operations, operating territory, and whether you serve alcohol all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Concession Trailer Quote",
        body: [
          "Have your trailer details, tow vehicle information, type of food or beverage served, and event territories ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Commercial auto for tow vehicle",
      "Product liability",
      "General liability for events",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "catering-truck-insurance",
      "commercial-travel-trailer-insurance",
      "utility-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("concession-trailer-insurance", "Concession trailer at a Virginia county fair"),
    updated: "2026-06-11",
  },
  {
    slug: "dry-freight-trailer-insurance",
    name: "Dry Freight Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Dry freight trailer insurance for Virginia van trailer operators hauling general merchandise, packaged goods, and palletized freight. Trailer physical damage, motor truck cargo, and FMCSA compliance from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Dry Freight Trailer Insurance",
    heroSubheadline:
      "Dry van trailers are the backbone of freight transport. We write Virginia coverage for the standard 53-foot van, the 48-foot regional trailer, and everything in between.",
    semanticEntities: [
      "dry freight trailer",
      "dry van trailer",
      "van trailer",
      "motor truck cargo",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Dry Freight Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the dry van against collision, fire, theft, and other covered losses. Motor truck cargo covers the freight inside. Commercial auto liability for the combination unit must meet FMCSA minimums for interstate for-hire carriers.",
          "Many carriers insure trailers on a separate trailer-interchange or non-owned trailer policy when operating under a lease arrangement with a motor carrier.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for palletized and general freight",
          "Commercial auto liability",
          "Trailer interchange coverage",
        ],
      },
      {
        heading: "Dry Van Configurations We Insure",
        body: [
          "We insure 53-foot standard dry vans, 48-foot regional trailers, lift-gate-equipped trailers, roller-floor trailers for heavy loads, and food-grade dry van trailers. Both leased and owned trailers are covered.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements",
        body: [
          "For-hire interstate dry freight carriers need FMCSA operating authority and financial responsibility at a minimum of $750,000. Trailers used in trailer interchange must carry trailer-interchange coverage under the motor carrier's policy or separately.",
        ],
      },
      {
        heading: "What Affects Your Dry Freight Trailer Premium",
        body: [
          "Trailer age and declared value, freight type and value, haul territory, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Dry Freight Trailer Quote",
        body: [
          "Have your trailer details, freight type, haul territory, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
      "Trailer interchange option",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "refrigerated-trailer-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
      "bulk-commodity-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("dry-freight-trailer-insurance", "Dry freight trailer at a Virginia distribution center"),
    updated: "2026-06-11",
  },
  {
    slug: "transfer-dump-trailer-insurance",
    name: "Transfer Dump Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Transfer dump and dump body trailer insurance for Virginia aggregate haulers and earth-moving operations. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Transfer Dump Trailer Insurance",
    heroSubheadline:
      "Transfer dump trailers increase payload on highway projects and aggregate operations without adding a second power unit. We write Virginia coverage for transfer dump configurations and dump body trailers.",
    semanticEntities: [
      "transfer dump trailer",
      "dump body trailer",
      "aggregate hauling",
      "earth moving",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Transfer Dump Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the transfer dump body. Motor truck cargo covers the aggregate or earth material. Commercial auto liability for the tractor-trailer combination must meet FMCSA minimums for interstate for-hire carriers.",
          "Transfer dump operations often run at maximum legal weight, and the liability exposure from a braking or handling incident with that mass is substantial.",
        ],
        bullets: [
          "Trailer/transfer body physical damage",
          "Motor truck cargo for aggregate and earth material",
          "Commercial auto liability",
          "FMCSA filing support",
        ],
      },
      {
        heading: "Transfer Dump Configurations We Insure",
        body: [
          "We insure standard transfer dump trailers (separate trailer with dump body), belly dumps used in transfer configurations, and pup trailer combinations used to maximize aggregate payload. Both aluminum and steel dump body construction are covered.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire aggregate carriers operating interstate need FMCSA authority and MCS-90 endorsement. Overweight operations require DMV hauling permits. Virginia intrastate dump truck and trailer operations are regulated under state commercial vehicle rules.",
        ],
      },
      {
        heading: "What Affects Your Transfer Dump Premium",
        body: [
          "Material type, operating territory, truck and trailer age, driver MVR history, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Transfer Dump Quote",
        body: [
          "Have your trailer and truck details, material type, haul territory, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "dump-trailer-insurance",
      "bulk-commodity-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["dump-truck-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["how-dump-truck-insurance-works", "virginia-commercial-auto-insurance-guide"],
    image: image("transfer-dump-trailer-insurance", "Transfer dump trailer on a Virginia highway project"),
    updated: "2026-06-11",
  },
  {
    slug: "pole-trailer-insurance",
    name: "Pole Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Pole trailer insurance for Virginia log, pipe, and structural steel haulers. Commercial auto liability, motor truck cargo, and physical damage for long-load configurations from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Pole Trailer Insurance",
    heroSubheadline:
      "Pole trailers carry long, rigid loads that extend beyond the tractor, lumber, logs, pipe, and structural steel. We write Virginia coverage built for the oversize and overweight risks of long-load hauling.",
    semanticEntities: [
      "pole trailer",
      "log hauling",
      "pipe hauling",
      "long load",
      "oversize permit",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Pole Trailer Insurance Covers",
        body: [
          "Commercial auto liability covers the tractor and pole trailer combination on the road. Motor truck cargo covers the logs, lumber, pipe, or structural steel. Physical damage covers the trailer assembly itself.",
          "Pole trailer loads are frequently oversize and may require pilot cars, which creates additional liability exposure that your policy must address.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo: logs, lumber, pipe, steel",
          "Trailer physical damage",
          "Oversize load coverage",
        ],
      },
      {
        heading: "Pole Trailer Operations We Insure",
        body: [
          "We insure log haulers running to Virginia mills, pipe and conduit carriers for utility and construction projects, structural steel haulers for bridge and building projects, and long-length lumber transport operations.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "Pole trailers operating interstate in for-hire commerce need FMCSA authority. Oversize loads require DMV hauling permits. Log hauling may be subject to specific Virginia forestry transport regulations.",
        ],
      },
      {
        heading: "What Affects Your Pole Trailer Premium",
        body: [
          "Cargo type (logs, pipe, steel), load length and overhang, whether oversize permits are required, operating territory, and driver MVR history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Pole Trailer Quote",
        body: [
          "Have your trailer details, cargo type, typical load length, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo",
      "Trailer physical damage",
      "Oversize load coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "logging-trailer-insurance",
      "flatbed-trailer-insurance",
      "lowboy-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("pole-trailer-insurance", "Pole trailer hauling logs in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "refrigerated-trailer-insurance",
    name: "Refrigerated Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Refrigerated trailer insurance for Virginia reefer carriers hauling food, pharmaceuticals, and temperature-sensitive freight. Trailer physical damage, motor truck cargo with reefer breakdown, and FMCSA compliance from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Refrigerated Trailer Insurance",
    heroSubheadline:
      "Reefer trailer breakdowns cause load losses that can run into six figures. We write Virginia coverage with reefer breakdown protection built in so a mechanical failure doesn't become an uncovered loss.",
    semanticEntities: [
      "refrigerated trailer",
      "reefer trailer",
      "temperature-controlled freight",
      "reefer breakdown",
      "motor truck cargo",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Refrigerated Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the refrigerated trailer and the reefer unit attached to it. Motor truck cargo with a reefer breakdown endorsement covers the load if it spoils due to a mechanical failure of the refrigeration system, not just due to a collision or comprehensive loss.",
          "Without a reefer breakdown endorsement, cargo claims arising purely from refrigeration unit failure are typically excluded from standard motor truck cargo policies.",
        ],
        bullets: [
          "Trailer physical damage including reefer unit",
          "Motor truck cargo with reefer breakdown",
          "Commercial auto liability",
          "High-value cargo limit options",
        ],
      },
      {
        heading: "Reefer Trailer Configurations We Insure",
        body: [
          "We insure standard 53-foot refrigerated trailers, shorter 48-foot regional reefer units, multi-temperature split trailers, and pharmaceutical-grade temperature-controlled trailers. Trailer-mounted Thermo King and Carrier reefer units are both covered.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements",
        body: [
          "For-hire interstate reefer carriers need FMCSA operating authority and MCS-90 endorsement. Pharmaceutical shippers may require GDP-aligned carrier qualifications and higher contractual cargo limits.",
        ],
      },
      {
        heading: "What Affects Your Reefer Trailer Premium",
        body: [
          "Cargo type and value, reefer unit age and maintenance record, haul territory, and driver history all affect pricing. Pharmaceutical loads typically carry higher cargo limits than grocery freight.",
        ],
      },
      {
        heading: "How to Get a Reefer Trailer Quote",
        body: [
          "Have your trailer details, reefer unit specifications, cargo type and value, haul territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage with reefer unit",
      "Motor truck cargo with reefer breakdown",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "refrigerated-truck-insurance",
      "dry-freight-trailer-insurance",
      "truck-tractor-insurance",
      "bulk-commodity-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("refrigerated-trailer-insurance", "Refrigerated trailer at a Virginia distribution dock"),
    updated: "2026-06-11",
  },
  {
    slug: "tank-trailer-insurance",
    name: "Tank Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Tank trailer insurance for Virginia liquid and dry bulk carriers. Trailer physical damage, motor truck cargo, hazmat endorsements, and FMCSA filing support from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Tank Trailer Insurance",
    heroSubheadline:
      "Tank trailers carry liquids that can create major environmental and public safety liability. We write Virginia coverage for petroleum, chemical, and liquid food-grade trailer operations with the limits and filings regulators require.",
    semanticEntities: [
      "tank trailer",
      "liquid cargo trailer",
      "petroleum trailer",
      "chemical trailer",
      "hazmat",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Tank Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the tank trailer structure and valving. Motor truck cargo covers the liquid load. Commercial auto liability for the tractor-trailer combination must meet FMCSA financial responsibility minimums, which are higher for carriers hauling hazardous materials.",
          "Environmental impairment liability may be needed separately for operations hauling pollutants, as standard cargo policies typically exclude pollution cleanup costs.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for liquid loads",
          "Commercial auto liability",
          "Hazmat endorsement and environmental coverage options",
        ],
      },
      {
        heading: "Tank Trailer Types We Insure",
        body: [
          "We insure DOT 406/407/412 petroleum trailers, stainless food-grade tankers, dry bulk pneumatic trailers, chemical tankers, and agricultural liquid fertilizer trailers. Stainless, aluminum, and carbon steel construction are all covered.",
        ],
      },
      {
        heading: "FMCSA and Hazmat Requirements",
        body: [
          "Tank trailer carriers hauling hazmat need FMCSA authority with elevated financial responsibility ($1M–$5M depending on hazmat class) and may need a Hazmat Safety Permit for certain materials. Virginia tunnel restrictions and designated truck routes may also apply to certain hazmat moves.",
        ],
      },
      {
        heading: "What Affects Your Tank Trailer Premium",
        body: [
          "Commodity type and hazmat classification, tank age and DOT spec, haul territory, driver CDL endorsements (tanker, hazmat), and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Tank Trailer Quote",
        body: [
          "Have your trailer details, commodity type, hazmat classification if applicable, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Hazmat endorsement options",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "tank-truck-insurance",
      "bulk-commodity-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("tank-trailer-insurance", "Tank trailer at a Virginia loading terminal"),
    updated: "2026-06-11",
  },
  {
    slug: "rag-top-trailer-insurance",
    name: "Rag Top Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Rag top trailer insurance for Virginia carriers hauling oversized or tall cargo requiring a roll-open roof. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Rag Top Trailer Insurance",
    heroSubheadline:
      "Rag top trailers are designed for tall or awkward cargo that won't fit inside a standard dry van. We write Virginia coverage for roll-roof and open-top trailer operations hauling dimensional and oversized loads.",
    semanticEntities: [
      "rag top trailer",
      "roll-top trailer",
      "open-top trailer",
      "dimensional freight",
      "oversized cargo",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Rag Top Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the trailer body and flexible roof system. Motor truck cargo covers the freight inside, which is often dimensional or project cargo that can't be loaded through standard trailer doors. Commercial auto liability covers the combination unit.",
        ],
        bullets: [
          "Trailer physical damage including roof system",
          "Motor truck cargo for dimensional freight",
          "Commercial auto liability",
        ],
      },
      {
        heading: "Rag Top Trailer Operations We Insure",
        body: [
          "We insure Virginia carriers hauling large machinery, industrial equipment, structural components, and other oversize loads that require top-loading. Rag top trailers are common in manufacturing, energy, and construction freight.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "Oversize cargo hauls may require Virginia DMV hauling permits. For-hire interstate carriers need FMCSA authority and MCS-90 endorsement.",
        ],
      },
      {
        heading: "What Affects Your Rag Top Trailer Premium",
        body: [
          "Cargo type and value, whether oversize permits are required, trailer age, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Rag Top Trailer Quote",
        body: [
          "Have your trailer details, typical cargo type, operating territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "flatbed-trailer-insurance",
      "lowboy-trailer-insurance",
      "dry-freight-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("rag-top-trailer-insurance", "Rag top trailer loaded with industrial equipment in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "flatbed-trailer-insurance",
    name: "Flatbed Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Flatbed trailer insurance for Virginia carriers hauling steel, lumber, equipment, and open-deck freight. Trailer physical damage, motor truck cargo, and commercial auto liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Flatbed Trailer Insurance",
    heroSubheadline:
      "Flatbed trailers carry exposed cargo that must be properly secured. We write Virginia coverage for standard, step-deck, and double-drop flatbeds hauling everything from structural steel to construction equipment.",
    semanticEntities: [
      "flatbed trailer",
      "step-deck trailer",
      "open-deck freight",
      "load securement",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Flatbed Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the flatbed trailer structure against collision and comprehensive losses. Motor truck cargo covers the freight on the deck. Load securement failures are a significant liability exposure for flatbed haulers, and commercial auto liability must be adequate to handle those claims.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for open-deck freight",
          "Commercial auto liability",
          "FMCSA filing support",
        ],
      },
      {
        heading: "Flatbed Trailer Configurations We Insure",
        body: [
          "We insure 48-foot and 53-foot standard flatbeds, step-deck (drop-deck) trailers for taller loads, double-drop lowboys for heavy equipment, and stretched flatbeds for oversized loads.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements",
        body: [
          "For-hire interstate flatbed carriers need FMCSA operating authority and MCS-90 endorsement. Oversize and overweight loads require Virginia DMV hauling permits. Load securement regulations under 49 CFR 393 apply to all flatbed operations.",
        ],
      },
      {
        heading: "What Affects Your Flatbed Trailer Premium",
        body: [
          "Cargo type (steel, machinery, lumber), whether oversize loads are common, trailer age, operating territory, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Flatbed Trailer Quote",
        body: [
          "Have your trailer details, cargo type, haul territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "flatbed-truck-insurance",
      "lowboy-trailer-insurance",
      "pole-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("flatbed-trailer-insurance", "Flatbed trailer with steel load on a Virginia interstate"),
    updated: "2026-06-11",
  },
  {
    slug: "gooseneck-trailer-insurance",
    name: "Gooseneck Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Gooseneck trailer insurance for Virginia contractors, equipment dealers, and machinery haulers. Trailer physical damage, motor truck cargo, and commercial auto liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Gooseneck Trailer Insurance",
    heroSubheadline:
      "Gooseneck trailers move the heavy equipment Virginia contractors and dealers depend on. We write coverage for standard and hydraulic-neck gooseneck trailers and the equipment they haul.",
    semanticEntities: [
      "gooseneck trailer",
      "equipment trailer",
      "heavy equipment hauling",
      "machinery transport",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Gooseneck Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the gooseneck trailer structure, ramps, and hydraulic systems. Motor truck cargo covers the equipment loaded on the trailer. Commercial auto liability must be adequate given the weight and value of construction equipment typically hauled.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for equipment",
          "Commercial auto liability",
          "FMCSA filing support",
        ],
      },
      {
        heading: "Gooseneck Trailer Types We Insure",
        body: [
          "We insure fixed-neck gooseneck trailers for equipment, hydraulic detachable neck (RGN) trailers for self-propelled machinery, multi-axle heavy haul goosenecks, and construction equipment transport trailers up to 80,000 lbs GVW and beyond with oversize permits.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "Equipment haulers operating interstate in for-hire commerce need FMCSA authority and MCS-90 endorsement. Overweight and oversize loads require Virginia DMV hauling permits. Equipment values often require higher cargo limits than standard motor truck cargo policies provide by default.",
        ],
      },
      {
        heading: "What Affects Your Gooseneck Trailer Premium",
        body: [
          "Equipment type and value, GVW, whether oversize permits are routine, trailer age, and driver qualifications all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Gooseneck Trailer Quote",
        body: [
          "Have your trailer details, typical equipment hauled, operating territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo for heavy equipment",
      "Commercial auto liability",
      "Oversize/overweight coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "lowboy-trailer-insurance",
      "flatbed-trailer-insurance",
      "hotshot-truck-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["construction-vehicle-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("gooseneck-trailer-insurance", "Gooseneck trailer hauling excavator in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "horse-trailer-insurance",
    name: "Horse Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Horse trailer insurance for Virginia equine operations, trainers, and show competitors. Trailer physical damage, livestock mortality options, and commercial auto liability for the tow vehicle from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Horse Trailer Insurance",
    heroSubheadline:
      "Horse trailers carry animals whose value can run into six figures. We write Virginia commercial coverage for equine transport businesses and operations that regularly haul horses for hire.",
    semanticEntities: [
      "horse trailer",
      "equine transport",
      "livestock hauling",
      "animal mortality",
      "Virginia equestrian",
    ],
    sections: [
      {
        heading: "What Horse Trailer Insurance Covers",
        body: [
          "Commercial auto liability covers the tow vehicle and trailer combination on the road. Trailer physical damage covers the trailer structure. For equine transport businesses hauling horses for others, on-hook or animal mortality coverage may be needed to protect the animals in your care.",
          "Private owners hauling their own horses may use personal auto plus trailer coverage; businesses hauling horses for a fee need commercial coverage.",
        ],
        bullets: [
          "Commercial auto liability for tow vehicle",
          "Trailer physical damage",
          "Animal mortality options for in-transit horses",
          "Hired and non-owned auto",
        ],
      },
      {
        heading: "Horse Trailer Operations We Insure",
        body: [
          "We insure equine transport businesses moving horses between farms, competitions, and clinics; trainers and farms hauling horses for clients; and organizations running regular horse transport routes in Virginia.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability for business-use tow vehicles. Interstate horse transport must meet importing state animal health entry requirements, including certificates of veterinary inspection where required. Virginia Horse Center and major competition venues typically require minimum liability limits in vendor and hauler contracts.",
        ],
      },
      {
        heading: "What Affects Your Horse Trailer Premium",
        body: [
          "Number of horses per load, value of animals typically transported, operating territory, and the age and value of the trailer affect pricing.",
        ],
      },
      {
        heading: "How to Get a Horse Trailer Quote",
        body: [
          "Have your trailer details, tow vehicle information, a description of the horses you transport and their values, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Trailer physical damage",
      "Animal mortality options",
      "For-hire equine transport coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "livestock-trailer-insurance",
      "commercial-travel-trailer-insurance",
      "gooseneck-trailer-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("horse-trailer-insurance", "Horse trailer on a Virginia rural road"),
    updated: "2026-06-11",
  },
  {
    slug: "livestock-trailer-insurance",
    name: "Livestock Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Livestock trailer insurance for Virginia cattle, hog, and poultry haulers. Commercial auto liability, animal mortality coverage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Livestock Trailer Insurance",
    heroSubheadline:
      "Livestock haulers carry perishable cargo that can perish from heat, stress, or accident. We write Virginia coverage for cattle, hog, and poultry transport operations built around agricultural hauling realities.",
    semanticEntities: [
      "livestock trailer",
      "cattle hauling",
      "hog transport",
      "poultry hauling",
      "agricultural hauling",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Livestock Trailer Insurance Covers",
        body: [
          "Commercial auto liability is the primary road coverage. Motor truck cargo or a livestock mortality rider covers the animals themselves during transport. Trailer physical damage covers the trailer body, dividers, and ventilation systems.",
          "Livestock transport is regulated under the federal Twenty-Eight Hour Law, which limits consecutive confinement on interstate hauls and affects rest, feed, and water planning.",
        ],
        bullets: [
          "Commercial auto liability",
          "Livestock/animal mortality coverage",
          "Trailer physical damage",
          "FMCSA compliance",
        ],
      },
      {
        heading: "Livestock Trailer Operations We Insure",
        body: [
          "We insure cattle haulers running between Virginia farms and auction houses, hog transport for swine operations, poultry haulers for broiler operations, and mixed livestock transport across Virginia's Shenandoah Valley and Southside farming regions.",
        ],
      },
      {
        heading: "FMCSA and Virginia Agricultural Requirements",
        body: [
          "For-hire interstate livestock haulers with a combined GVWR over 10,001 pounds typically need FMCSA operating authority and MCS-90 endorsement. Virginia also has agricultural inspection requirements for animals entering the state. Agricultural vehicle exemptions apply to some intrastate farm-to-farm moves.",
        ],
      },
      {
        heading: "What Affects Your Livestock Trailer Premium",
        body: [
          "Species and average animal value per load, haul distance, operating territory, driver history, and prior losses all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Livestock Trailer Quote",
        body: [
          "Have your trailer details, the species you haul, your typical load value, operating territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Livestock mortality coverage",
      "Trailer physical damage",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "horse-trailer-insurance",
      "bulk-commodity-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("livestock-trailer-insurance", "Livestock trailer on a Virginia farm road"),
    updated: "2026-06-11",
  },
  {
    slug: "logging-trailer-insurance",
    name: "Logging Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Logging trailer insurance for Virginia timber haulers and forestry operations. Commercial auto liability, motor truck cargo for timber, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Logging Trailer Insurance",
    heroSubheadline:
      "Log trailers haul some of the heaviest and most difficult cargo on Virginia's rural roads. We write coverage for logging trailers built around the specific risks of timber transport.",
    semanticEntities: [
      "logging trailer",
      "timber hauling",
      "log truck",
      "forestry transport",
      "Virginia forestry",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Logging Trailer Insurance Covers",
        body: [
          "Commercial auto liability covers the tractor and trailer on Virginia roads. Motor truck cargo covers the timber load, softwood, hardwood, pulpwood, or chips. Trailer physical damage covers the bolster trailer and bunk structures.",
          "Log load securement failures are one of the most dangerous freight incidents on public roads, and liability limits should reflect the catastrophic potential of a shifted log load.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo for timber and logs",
          "Trailer physical damage",
          "FMCSA filing support",
        ],
      },
      {
        heading: "Logging Trailer Operations We Insure",
        body: [
          "We insure long log trailers (shortwood and tree-length), pulpwood and chip trailers, and combination log/chip configurations. Virginia's forestry operations are concentrated in the western counties and Southside, and we write coverage for operations running in those regions.",
        ],
      },
      {
        heading: "FMCSA and Virginia Forestry Transport Requirements",
        body: [
          "For-hire interstate log haulers with a combined GVWR over 10,001 pounds typically need FMCSA operating authority and MCS-90 endorsement. Virginia enforces specific log truck regulations including forest product overweight permits and tree-length log length permits.",
        ],
      },
      {
        heading: "What Affects Your Logging Trailer Premium",
        body: [
          "Timber species and average load value, haul radius, road type (paved vs. forest road), driver history, and prior losses all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Logging Trailer Quote",
        body: [
          "Have your trailer details, typical timber load, haul territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo for timber",
      "Trailer physical damage",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "pole-trailer-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("logging-trailer-insurance", "Logging trailer loaded with timber in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "lowboy-trailer-insurance",
    name: "Lowboy Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Lowboy trailer insurance for Virginia heavy equipment transporters and construction operations. Commercial auto liability, physical damage for the trailer, and high-value cargo coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Lowboy Trailer Insurance",
    heroSubheadline:
      "Lowboy trailers move the heaviest equipment on Virginia roads, excavators, cranes, bulldozers, and compactors. We write coverage for the trailer and the machinery on it, including oversize and overweight operations.",
    semanticEntities: [
      "lowboy trailer",
      "heavy haul",
      "oversized load",
      "heavy equipment transport",
      "FMCSA",
      "Virginia DMV",
      "DMV hauling permit",
    ],
    sections: [
      {
        heading: "What Lowboy Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the lowboy trailer structure, axles, and removable neck components. Motor truck cargo covers the heavy equipment loaded on the trailer, often construction machinery worth hundreds of thousands of dollars. Commercial auto liability for the combination unit must be adequate for the mass involved.",
          "Oversize and overweight operations require DMV hauling permits, and carriers should confirm their liability limits satisfy both state requirements and equipment owner contracts.",
        ],
        bullets: [
          "Trailer physical damage including removable neck",
          "Motor truck cargo for heavy equipment",
          "Commercial auto liability",
          "Oversize/overweight load coverage",
        ],
      },
      {
        heading: "Lowboy Trailer Operations We Insure",
        body: [
          "We insure 2-axle to 7-axle lowboy trailers for highway transport, hydraulic RGN trailers for self-propelled machinery, and multi-axle heavy-haul combinations. Virginia's active road and bridge construction programs and large contractor base create consistent demand for lowboy transport coverage.",
        ],
      },
      {
        heading: "FMCSA and Virginia Heavy Haul Requirements",
        body: [
          "For-hire heavy haulers operating interstate with a combined GVWR over 10,001 pounds typically need FMCSA operating authority and MCS-90 endorsement. Oversize and overweight loads require DMV hauling permits, and configurations exceeding routine weight allowances may require superload review with VDOT structure and bridge analysis. Cargo limits should reflect the actual replacement value of the equipment.",
        ],
      },
      {
        heading: "What Affects Your Lowboy Trailer Premium",
        body: [
          "Equipment value, GVW and axle configuration, whether oversize permits are routine, driver CDL class, and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Lowboy Trailer Quote",
        body: [
          "Have your trailer details, the types of equipment you haul and their values, your operating territory, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "High-value machinery cargo coverage",
      "Commercial auto liability",
      "Oversize load coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "gooseneck-trailer-insurance",
      "flatbed-trailer-insurance",
      "truck-tractor-insurance",
      "rag-top-trailer-insurance",
    ],
    relatedServiceSlugs: ["construction-vehicle-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("lowboy-trailer-insurance", "Lowboy trailer hauling excavator on a Virginia highway"),
    updated: "2026-06-11",
  },
  {
    slug: "tilt-trailer-insurance",
    name: "Tilt Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Tilt trailer insurance for Virginia equipment dealers, contractors, and landscapers hauling skid steers, mini excavators, and small equipment. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Tilt Trailer Insurance",
    heroSubheadline:
      "Tilt trailers load and unload without a ramp, making them the go-to choice for contractors and equipment dealers hauling small machines. We write Virginia coverage for tilt trailers and the equipment they carry.",
    semanticEntities: [
      "tilt trailer",
      "equipment trailer",
      "skid steer trailer",
      "mini excavator transport",
      "contractor trailer",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Tilt Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the tilt frame, hydraulic or mechanical tilt mechanism, and tie-down points. Motor truck cargo covers the equipment on the trailer. Commercial auto liability covers the tow vehicle and trailer on the road.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for equipment",
          "Commercial auto liability",
        ],
      },
      {
        heading: "Tilt Trailer Uses We Insure",
        body: [
          "We insure tilt trailers used by Virginia landscapers and lawn care companies hauling mowers, contractors transporting mini excavators and skid steers, equipment dealers delivering rental machines, and plumbing and HVAC contractors moving compact equipment to job sites.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability for the tow vehicle. Equipment loaded on the trailer may need separate inland marine or contractor's equipment coverage for loss when the trailer is at rest.",
        ],
      },
      {
        heading: "What Affects Your Tilt Trailer Premium",
        body: [
          "Equipment value, trailer age, operating territory, and driver MVR history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Tilt Trailer Quote",
        body: [
          "Have your trailer and tow vehicle details, a description of the equipment you haul, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo for equipment",
      "Commercial auto liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "gooseneck-trailer-insurance",
      "utility-trailer-insurance",
      "large-utility-trailer-insurance",
    ],
    relatedServiceSlugs: ["contractor-vehicle-insurance", "landscaping-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("tilt-trailer-insurance", "Tilt trailer loaded with skid steer in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-travel-trailer-insurance",
    name: "Commercial Travel Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Commercial travel trailer insurance for Virginia businesses using trailers as mobile offices, command units, or project support. Commercial auto liability and trailer physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Travel Trailer Insurance",
    heroSubheadline:
      "Travel trailers repurposed for mobile offices, job site accommodations, or event support need commercial coverage, not a personal RV policy. We write Virginia coverage for commercial travel trailer operations.",
    semanticEntities: [
      "travel trailer",
      "mobile office trailer",
      "commercial RV",
      "job site trailer",
      "special event trailer",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Commercial Travel Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the trailer structure and installed equipment. Commercial auto liability covers the tow vehicle and trailer on the road. When the trailer is deployed as a mobile office or accommodations unit, inland marine or commercial property coverage may be needed for the equipment inside.",
        ],
        bullets: [
          "Trailer physical damage",
          "Commercial auto liability for tow vehicle",
          "Coverage for commercial modifications and equipment",
        ],
      },
      {
        heading: "Commercial Travel Trailer Uses We Insure",
        body: [
          "We insure travel trailers used as mobile project offices, field crew accommodations, event production support units, mobile showrooms, and command centers. If the trailer is used for business, it needs commercial coverage.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on the tow vehicle. Travel trailers used commercially need commercial property coverage for their contents separate from a personal RV policy.",
        ],
      },
      {
        heading: "What Affects Your Commercial Travel Trailer Premium",
        body: [
          "Trailer value and modifications, the type of commercial use, operating territory, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Commercial Travel Trailer Quote",
        body: [
          "Have your trailer details, a description of its commercial use, tow vehicle information, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Commercial auto liability",
      "Coverage for commercial modifications",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "concession-trailer-insurance",
      "utility-trailer-insurance",
      "commercial-motorhome-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("commercial-travel-trailer-insurance", "Commercial travel trailer serving as a mobile office in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "utility-trailer-insurance",
    name: "Utility Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Small utility trailer insurance for Virginia contractors, landscapers, and tradespeople hauling equipment and materials. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Utility Trailer Insurance",
    heroSubheadline:
      "Small utility trailers are hauled every day across Virginia by contractors, landscapers, and tradespeople. They're simple, but they still need commercial coverage when used for business.",
    semanticEntities: [
      "utility trailer",
      "small trailer",
      "contractor trailer",
      "open trailer",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Utility Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the trailer against collision, theft, and weather losses. Commercial auto liability for the tow vehicle covers bodily injury and property damage on the road. When equipment is loaded, motor truck cargo or inland marine coverage may be added for high-value tools.",
        ],
        bullets: [
          "Trailer physical damage",
          "Commercial auto liability for tow vehicle",
          "Optional cargo coverage for equipment",
        ],
      },
      {
        heading: "Small Utility Trailer Uses We Insure",
        body: [
          "We insure small open utility trailers used by Virginia plumbers, electricians, HVAC technicians, landscapers, painters, and general contractors to haul tools, materials, and light equipment. Trailers from 4x8 up to 7x14 open decks are covered.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires liability coverage on the tow vehicle. Every trailer must be registered separately before it is operated on a Virginia highway.",
        ],
      },
      {
        heading: "What Affects Your Utility Trailer Premium",
        body: [
          "Trailer value, the equipment hauled, and the tow vehicle's rating all affect pricing for combined coverage.",
        ],
      },
      {
        heading: "How to Get a Utility Trailer Quote",
        body: [
          "Have your trailer details, tow vehicle information, and a description of the equipment you haul ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Commercial auto liability",
      "Optional equipment cargo coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "large-utility-trailer-insurance",
      "tilt-trailer-insurance",
      "gooseneck-trailer-insurance",
    ],
    relatedServiceSlugs: ["contractor-vehicle-insurance", "landscaping-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("utility-trailer-insurance", "Small utility trailer behind a contractor truck in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "large-utility-trailer-insurance",
    name: "Large Utility Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Large utility trailer insurance for Virginia contractors, equipment operators, and material haulers needing heavier capacity than a small utility trailer. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Large Utility Trailer Insurance",
    heroSubheadline:
      "Large utility trailers bridge the gap between a small contractor trailer and a full gooseneck. We write Virginia coverage for contractors and equipment operators depending on heavier, larger open trailers for daily operations.",
    semanticEntities: [
      "large utility trailer",
      "equipment trailer",
      "contractor trailer",
      "heavy-duty open trailer",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Large Utility Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the trailer against collision, theft, and comprehensive losses. Motor truck cargo covers the equipment or materials loaded. Commercial auto liability covers the tow vehicle and trailer on Virginia roads.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for equipment and materials",
          "Commercial auto liability",
        ],
      },
      {
        heading: "Large Utility Trailer Uses We Insure",
        body: [
          "We insure large open trailers used by Virginia contractors, HVAC companies, landscapers, equipment dealers, and government contractors hauling everything from heavy tools to compact equipment. These 14- to 20-foot trailers typically run behind a pickup or medium-duty truck.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires liability coverage on the tow vehicle and separate registration for the trailer. Trailers over 10,001 lbs GVWR used in interstate for-hire commerce may also fall under FMCSA financial responsibility rules.",
        ],
      },
      {
        heading: "What Affects Your Large Utility Trailer Premium",
        body: [
          "Trailer value, load type and value, tow vehicle rating, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Large Utility Trailer Quote",
        body: [
          "Have your trailer details, tow vehicle information, and a description of typical loads ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "utility-trailer-insurance",
      "tilt-trailer-insurance",
      "gooseneck-trailer-insurance",
      "flatbed-trailer-insurance",
    ],
    relatedServiceSlugs: ["contractor-vehicle-insurance", "construction-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("large-utility-trailer-insurance", "Large utility trailer behind a contractor pickup in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "wedge-trailer-insurance",
    name: "Wedge Trailer Insurance",
    vehicleGroup: "trailer",
    shortDescription:
      "Wedge trailer insurance for Virginia carriers hauling light bulk materials, landscaping supplies, and aggregate. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Wedge Trailer Insurance",
    heroSubheadline:
      "Wedge trailers are used for light aggregate, mulch, and bulk material hauling across Virginia. We write coverage for the trailer and its loads.",
    semanticEntities: [
      "wedge trailer",
      "bulk trailer",
      "aggregate trailer",
      "light hauling",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Wedge Trailer Insurance Covers",
        body: [
          "Trailer physical damage covers the wedge trailer structure. Motor truck cargo covers the bulk material. Commercial auto liability covers the tow vehicle and trailer on Virginia roads.",
        ],
        bullets: [
          "Trailer physical damage",
          "Motor truck cargo for bulk material",
          "Commercial auto liability",
        ],
      },
      {
        heading: "Wedge Trailer Uses We Insure",
        body: [
          "We insure wedge trailers used for mulch and bark delivery, topsoil and compost hauling, light aggregate, and landscaping supply transport. These trailers are commonly used by landscaping companies and small aggregate dealers across Virginia.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on the tow vehicle. Wedge trailers used for commercial hauling need trailer physical damage coverage and cargo coverage appropriate to the material.",
        ],
      },
      {
        heading: "What Affects Your Wedge Trailer Premium",
        body: [
          "Material type, trailer age, operating territory, and driver history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Wedge Trailer Quote",
        body: [
          "Have your trailer details, tow vehicle information, and a description of what you haul ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Trailer physical damage",
      "Motor truck cargo",
      "Commercial auto liability",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "dump-trailer-insurance",
      "utility-trailer-insurance",
      "bulk-commodity-trailer-insurance",
    ],
    relatedServiceSlugs: ["landscaping-vehicle-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("wedge-trailer-insurance", "Wedge trailer loaded with mulch at a Virginia landscaping job"),
    updated: "2026-06-11",
  },

  // ─── CARS AND VANS ────────────────────────────────────────────────────────
  {
    slug: "business-passenger-car-insurance",
    name: "Business Passenger Car Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Business use passenger car insurance for Virginia companies with sedans, coupes, and standard cars used for work. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Business Passenger Car Insurance",
    heroSubheadline:
      "A personal auto policy won't cover your employees driving company sedans to client meetings or sales calls. We write Virginia commercial auto coverage for passenger cars used for business.",
    semanticEntities: [
      "business use vehicle",
      "company car",
      "passenger car insurance",
      "commercial auto liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Business Passenger Car Insurance Covers",
        body: [
          "Commercial auto liability is the key coverage, paying for bodily injury and property damage caused during business driving. Physical damage covers the car itself. Hired and non-owned auto extends coverage to rented cars and employees' personal vehicles used for business.",
          "Company cars driven by employees need to be on the commercial policy, not on individual employees' personal policies, to ensure consistent coverage.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: collision and comprehensive",
          "Hired and non-owned auto",
          "Medical payments",
        ],
      },
      {
        heading: "Business Car Uses We Insure",
        body: [
          "We insure Virginia companies with passenger cars used by sales teams, insurance agents, real estate professionals, consultants, healthcare providers, and government contractors. Any vehicle that an employee drives to a client site, sales call, or business meeting needs commercial coverage.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. As of January 1, 2025, the state minimum is 50/100/25. Most Virginia businesses carry higher limits to protect company assets.",
        ],
      },
      {
        heading: "What Affects Your Business Car Premium",
        body: [
          "Vehicle value, driver MVR records, annual business mileage, and the number of drivers listed all affect pricing.",
        ],
        bullets: [
          "Vehicle year, make, and value",
          "Driver ages and MVR records",
          "Annual business miles",
          "Number of listed drivers",
        ],
      },
      {
        heading: "How to Get a Business Car Insurance Quote",
        body: [
          "Have your vehicle schedule, driver list with license numbers, annual mileage estimate, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Hired & non-owned auto",
      "Medical payments",
    ],
    faqIds: ["general-requirements", "general-cost", "general-quote-speed"],
    relatedVehicleSlugs: [
      "commercial-pickup-insurance",
      "commercial-suv-insurance",
      "cargo-van-insurance",
      "luxury-suv-insurance",
    ],
    relatedServiceSlugs: ["business-auto-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("business-passenger-car-insurance", "Business sedan in a Virginia parking lot"),
    updated: "2026-06-11",
  },
  {
    slug: "cargo-van-insurance",
    name: "Cargo Van Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Cargo van insurance for Virginia service companies, contractors, and delivery operators. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Cargo Van Insurance",
    heroSubheadline:
      "Cargo vans carry tools, equipment, parts, and goods across Virginia every day. We write commercial coverage for Sprinters, Transits, Promasters, and express vans used for work.",
    semanticEntities: [
      "cargo van",
      "Sprinter van",
      "Transit van",
      "Promaster",
      "commercial van",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Cargo Van Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage on the road. Motor truck cargo covers the tools, equipment, or goods inside the van. Physical damage covers the van itself. Hired and non-owned auto is important for operations that use multiple vans, including employee-owned vehicles.",
        ],
        bullets: [
          "Commercial auto liability",
          "Motor truck cargo for tools and goods",
          "Physical damage",
          "Hired and non-owned auto",
        ],
      },
      {
        heading: "Cargo Van Types We Insure",
        body: [
          "We insure high-roof Sprinters and Transits used by plumbers, electricians, and HVAC technicians; standard cargo vans for last-mile delivery; express vans for courier and medical supply routes; and custom-upfitted service vans for mobile businesses.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Cargo vans operating interstate over 10,001 lbs GVW may be subject to FMCSA requirements.",
        ],
      },
      {
        heading: "What Affects Your Cargo Van Premium",
        body: [
          "Van type and value, what you carry, operating territory, driver records, and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Cargo Van Insurance Quote",
        body: [
          "Have your van details, driver list, a description of what you carry, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Motor truck cargo",
      "Physical damage",
      "Hired & non-owned auto",
    ],
    faqIds: ["general-requirements", "general-cost", "general-quote-speed"],
    relatedVehicleSlugs: [
      "delivery-van-insurance",
      "passenger-van-insurance",
      "commercial-minivan-insurance",
      "box-truck-insurance",
    ],
    relatedServiceSlugs: ["business-auto-insurance", "commercial-auto-insurance", "contractor-vehicle-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("cargo-van-insurance", "Cargo van parked at a Virginia service job"),
    updated: "2026-06-11",
  },
  {
    slug: "hearse-insurance",
    name: "Hearse Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Hearse and funeral vehicle insurance for Virginia funeral homes and mortuary services. Commercial auto liability, physical damage, and specialized limousine-class coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Hearse Insurance",
    heroSubheadline:
      "Hearses are specialized commercial vehicles that carry significant reputational and liability risk for funeral operations. We write Virginia commercial coverage for hearses and funeral coach fleets.",
    semanticEntities: [
      "hearse insurance",
      "funeral vehicle",
      "funeral coach",
      "funeral home",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Hearse Insurance Covers",
        body: [
          "Commercial auto liability is the foundation, covering bodily injury and property damage during funeral processions and transfer runs. Physical damage covers the hearse body and chassis. Because hearses carry human remains, liability claims can have significant emotional damages components beyond standard vehicle accidents.",
          "Some funeral homes also need garage liability or bailee coverage for vehicles in their care during the preparation process.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage for hearse and funeral coach",
          "Procession and transfer run coverage",
          "Fleet options for multiple vehicles",
        ],
      },
      {
        heading: "Funeral Vehicle Types We Insure",
        body: [
          "We insure traditional full-size hearses, hearse-ambulance combinations, flower cars, first-call removal vehicles, and limousine-style funeral coaches. Both Cadillac and Lincoln chassis conversions are covered.",
        ],
      },
      {
        heading: "Virginia Requirements for Funeral Vehicles",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Funeral escorts and processions are governed by Virginia Code and local ordinances. For-hire funeral transport may require a Virginia for-hire vehicle registration.",
          "Note: for-hire livery is restricted in some states under Progressive's program; our advisors confirm Virginia-specific availability.",
        ],
      },
      {
        heading: "What Affects Your Hearse Premium",
        body: [
          "Vehicle value, mileage, driver history, number of units in the fleet, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Hearse Insurance Quote",
        body: [
          "Have your vehicle schedule, driver list, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Fleet options",
      "Procession coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "limousine-insurance",
      "luxury-suv-insurance",
      "passenger-van-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "uber-black-insurance", "business-auto-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["uber-black-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    image: image("hearse-insurance", "Hearse at a Virginia funeral home"),
    updated: "2026-06-11",
  },
  {
    slug: "limousine-insurance",
    name: "Limousine Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Limousine insurance for Virginia livery operators, limo companies, and black-car services. Commercial livery liability, physical damage, and for-hire compliance coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Limousine Insurance",
    heroSubheadline:
      "Traditional limousine and stretch limo operations are classified as contract passenger carriers in Virginia, requiring commercial coverage that a personal policy can't provide. We write coverage that keeps Virginia limo operators compliant and protected.",
    semanticEntities: [
      "limousine insurance",
      "livery insurance",
      "stretch limo",
      "for-hire livery",
      "Virginia DMV",
      "limo company",
    ],
    sections: [
      {
        heading: "What Limousine Insurance Covers",
        body: [
          "Commercial livery liability is the core coverage, paying for bodily injury and property damage during for-hire passenger transport. Physical damage covers the limousine body and chassis. Uninsured and underinsured motorist coverage protects passengers injured by uninsured drivers.",
          "Virginia classifies traditional limousine service as contract passenger carrier transportation, which requires intrastate operating authority, minimum liability limits based on seating capacity, and for-hire vehicle registration. Note: for-hire passenger carrier availability may vary by state under Progressive's program.",
        ],
        bullets: [
          "Commercial livery liability",
          "Physical damage",
          "Uninsured/underinsured motorist",
          "For-hire compliance support",
        ],
      },
      {
        heading: "Limousine Types We Insure",
        body: [
          "We insure traditional stretch limousines, SUV limousines, exotic car conversions used for special events, party buses categorized as limos, and standard sedans operated as for-hire livery.",
        ],
      },
      {
        heading: "Virginia Requirements for Livery Operations",
        body: [
          "Contract passenger carriers and other for-hire motor carriers in Virginia need intrastate operating authority, for-hire vehicle registration, and minimum commercial liability limits based on vehicle seating capacity. Platform-based premium rideshare such as Uber Black follows Virginia's separate TNC rules instead.",
        ],
      },
      {
        heading: "What Affects Your Limousine Premium",
        body: [
          "Vehicle value, type (standard sedan vs. stretch), number of passengers, operating territory, driver history, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Limousine Insurance Quote",
        body: [
          "Have your vehicle details, driver list, your for-hire registration, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial livery liability",
      "Physical damage",
      "Uninsured motorist coverage",
      "For-hire compliance support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "hearse-insurance",
      "luxury-suv-insurance",
      "passenger-van-insurance",
      "wheelchair-van-insurance",
    ],
    relatedServiceSlugs: ["uber-black-insurance", "commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: ["fairfax-va", "arlington-va", "richmond-va"],
    relatedResourceSlugs: ["uber-black-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    image: image("limousine-insurance", "Stretch limousine at a Virginia event venue"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-minivan-insurance",
    name: "Commercial Minivan Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Commercial minivan insurance for Virginia businesses using minivans for service calls, transportation, and light delivery. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Minivan Insurance",
    heroSubheadline:
      "Minivans are used across Virginia for everything from home health care transport to contractor supply runs. A commercial policy ensures they're covered when they're working.",
    semanticEntities: [
      "minivan insurance",
      "commercial minivan",
      "business use vehicle",
      "van insurance",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Commercial Minivan Insurance Covers",
        body: [
          "Commercial auto liability is the foundation. Physical damage covers the minivan against collision and comprehensive losses. Hired and non-owned auto extends coverage to rental minivans and employees' personal minivans used for business.",
          "Minivans used to transport clients or passengers for a fee may need livery or for-hire coverage rather than standard commercial auto.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage",
          "Hired and non-owned auto",
          "Passenger transport options if applicable",
        ],
      },
      {
        heading: "Commercial Minivan Uses We Insure",
        body: [
          "We insure Virginia businesses using minivans for home health aide transportation, medical equipment delivery, small business deliveries, shuttle services, contractor supply runs, and real estate agent use.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Minivans used to transport passengers for compensation need for-hire coverage and a Virginia for-hire vehicle registration.",
        ],
      },
      {
        heading: "What Affects Your Commercial Minivan Premium",
        body: [
          "Vehicle value, use type, driver history, and annual mileage all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Commercial Minivan Quote",
        body: [
          "Have your vehicle details, driver list, and a description of the business use ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Hired & non-owned auto",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "cargo-van-insurance",
      "passenger-van-insurance",
      "commercial-pickup-insurance",
      "business-passenger-car-insurance",
    ],
    relatedServiceSlugs: ["business-auto-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("commercial-minivan-insurance", "Commercial minivan at a Virginia service location"),
    updated: "2026-06-11",
  },
  {
    slug: "passenger-van-insurance",
    name: "Passenger Van Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Passenger van insurance for Virginia shuttle operators, group transportation services, and businesses transporting employees. Commercial auto liability, physical damage, and for-hire options from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Passenger Van Insurance",
    heroSubheadline:
      "Passenger vans carry multiple people at once, which means liability exposure multiplies with each person on board. We write Virginia commercial coverage for employer shuttles, group transportation, and for-hire van services.",
    semanticEntities: [
      "passenger van",
      "shuttle van",
      "group transportation",
      "for-hire van",
      "Virginia DMV",
      "commercial auto liability",
    ],
    sections: [
      {
        heading: "What Passenger Van Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during passenger transport. Carrying multiple passengers amplifies the injury exposure from any accident, and liability limits should reflect the number of occupants and their potential injury claims.",
          "Physical damage covers the van. Uninsured and underinsured motorist coverage protects your passengers when another driver is at fault and underinsured.",
        ],
        bullets: [
          "Commercial auto liability with multi-passenger limits",
          "Physical damage",
          "Uninsured/underinsured motorist",
          "For-hire passenger transport options",
        ],
      },
      {
        heading: "Passenger Van Uses We Insure",
        body: [
          "We insure Virginia employers running employee shuttle services, hotels and resorts providing airport transfers, nonprofits transporting clients, senior care facilities moving residents, and for-hire shuttle and group transportation services.",
        ],
      },
      {
        heading: "Virginia Requirements for Passenger Transport",
        body: [
          "Passenger vans operating for hire in Virginia need intrastate operating authority, for-hire vehicle registration, and minimum liability limits based on seating capacity. FMCSA regulates interstate for-hire passenger carriers under Parts 365 and 387, including vans designed to transport 9 to 15 passengers for compensation. Church and nonprofit vans transporting members may follow separate permit rules under Virginia law.",
        ],
      },
      {
        heading: "What Affects Your Passenger Van Premium",
        body: [
          "Seating capacity, for-hire vs. employee-only use, driver history, operating territory, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Passenger Van Quote",
        body: [
          "Have your van details, seating capacity, driver list, use description, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Uninsured motorist coverage",
      "For-hire passenger transport options",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "wheelchair-van-insurance",
      "wheelchair-bus-insurance",
      "cargo-van-insurance",
      "bus-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("passenger-van-insurance", "Passenger van at a Virginia shuttle stop"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-pickup-insurance",
    name: "Commercial Pickup Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Commercial pickup truck insurance for Virginia contractors, tradespeople, and businesses using pickups for work. Commercial auto liability, physical damage, and tools coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Pickup Insurance",
    heroSubheadline:
      "A pickup truck used for work needs commercial coverage. We write Virginia commercial auto policies for contractors, tradespeople, and business owners who drive pickups every day on the job.",
    semanticEntities: [
      "commercial pickup truck",
      "work truck",
      "contractor pickup",
      "business use pickup",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Commercial Pickup Insurance Covers",
        body: [
          "Commercial auto liability is the core coverage, protecting against bodily injury and property damage during work use. Physical damage covers the pickup against collision, theft, and weather. Tools and equipment coverage can be added for the tools typically carried in the bed or cab.",
          "A personal auto policy will usually exclude claims that happen while the truck is being used for business, making commercial coverage essential for Virginia contractors and tradespeople.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: collision and comprehensive",
          "Hired and non-owned auto",
          "Tools and equipment coverage option",
        ],
      },
      {
        heading: "Commercial Pickup Uses We Insure",
        body: [
          "We insure Virginia plumbers, electricians, HVAC technicians, carpenters, roofers, general contractors, landscapers, and any business owner driving a pickup to job sites, supplier yards, or client locations for work purposes.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Pickup trucks towing trailers need the combined GVW of truck and trailer to determine applicable commercial vehicle regulations.",
        ],
      },
      {
        heading: "What Affects Your Commercial Pickup Premium",
        body: [
          "Truck age and value, type of work, towing activity, driver history, and whether you carry expensive tools or equipment all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Commercial Pickup Quote",
        body: [
          "Have your truck details, a description of your work, driver information, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Hired & non-owned auto",
      "Tools and equipment option",
    ],
    faqIds: ["general-requirements", "general-cost", "general-quote-speed"],
    relatedVehicleSlugs: [
      "cargo-van-insurance",
      "commercial-suv-insurance",
      "stake-body-truck-insurance",
      "hotshot-truck-insurance",
    ],
    relatedServiceSlugs: ["business-auto-insurance", "contractor-vehicle-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("commercial-pickup-insurance", "Contractor pickup truck at a Virginia job site"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-suv-insurance",
    name: "Commercial SUV Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Commercial SUV insurance for Virginia businesses using sport utility vehicles for client transport, sales, and field work. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial SUV Insurance",
    heroSubheadline:
      "SUVs used for business need commercial coverage, not a personal policy. We write Virginia commercial auto for the full range of SUVs in business use, from compact crossovers to full-size company SUVs.",
    semanticEntities: [
      "commercial SUV",
      "company SUV",
      "business SUV",
      "commercial auto liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Commercial SUV Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during business driving. Physical damage covers the SUV against collision and comprehensive losses. Hired and non-owned auto extends coverage to rental SUVs and employees' personal SUVs used for business.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage",
          "Hired and non-owned auto",
          "Medical payments",
        ],
      },
      {
        heading: "Commercial SUV Uses We Insure",
        body: [
          "We insure Virginia real estate agents, insurance adjusters, property managers, consulting firms, government contractors, and sales organizations with SUVs used for client visits, field inspections, and daily business travel.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. As of January 1, 2025, the state minimum is 50/100/25. Business owners should carry higher limits to protect company assets.",
        ],
      },
      {
        heading: "What Affects Your Commercial SUV Premium",
        body: [
          "Vehicle value, driver history, annual business mileage, and the number of drivers listed all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Commercial SUV Quote",
        body: [
          "Have your vehicle details, driver list, and annual mileage estimate ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Hired & non-owned auto",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "luxury-suv-insurance",
      "commercial-pickup-insurance",
      "business-passenger-car-insurance",
    ],
    relatedServiceSlugs: ["business-auto-insurance", "commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("commercial-suv-insurance", "Commercial SUV at a Virginia business park"),
    updated: "2026-06-11",
  },
  {
    slug: "wheelchair-van-insurance",
    name: "Wheelchair Van Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Wheelchair van insurance for Virginia NEMT providers, home health agencies, and care facilities transporting mobility-impaired passengers. Commercial auto liability, WAV endorsements, and for-hire transport coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Wheelchair Van Insurance",
    heroSubheadline:
      "Wheelchair accessible vans transport Virginia's most vulnerable passengers. We write commercial coverage built for NEMT providers, senior care facilities, and accessible transportation companies.",
    semanticEntities: [
      "wheelchair van",
      "wheelchair accessible vehicle",
      "NEMT",
      "non-emergency medical transport",
      "accessible transportation",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Wheelchair Van Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during passenger transport, including boarding and alighting. Physical damage covers the van and the wheelchair lift or ramp assembly. Uninsured and underinsured motorist coverage protects passengers when another driver causes an accident.",
          "NEMT operators may need additional general liability and professional liability coverage beyond commercial auto, depending on the nature of services provided.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage including lift/ramp equipment",
          "Uninsured/underinsured motorist",
          "For-hire transport coverage",
        ],
      },
      {
        heading: "Wheelchair Van Operations We Insure",
        body: [
          "We insure Virginia NEMT companies, home health agencies, adult day care programs, senior living facilities, and private accessible transportation providers using WAVs for Medicaid and private-pay clients.",
        ],
      },
      {
        heading: "Virginia and Federal Requirements",
        body: [
          "NEMT providers in Virginia operating under Medicaid contracts must carry minimum liability limits per DMAS requirements. For-hire accessible transport requires Virginia for-hire vehicle registration. ADA-compliance doesn't create insurance requirements, but passenger injury exposure requires adequate limits.",
        ],
      },
      {
        heading: "What Affects Your Wheelchair Van Premium",
        body: [
          "Number of vans, type of client (Medicaid vs. private pay), driver training, operating territory, and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Wheelchair Van Quote",
        body: [
          "Have your van details, lift or ramp specifications, driver list, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage with lift coverage",
      "Uninsured motorist",
      "NEMT compliance support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "wheelchair-bus-insurance",
      "passenger-van-insurance",
      "commercial-minivan-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("wheelchair-van-insurance", "Wheelchair accessible van at a Virginia care facility"),
    updated: "2026-06-11",
  },
  {
    slug: "luxury-suv-insurance",
    name: "Luxury SUV Insurance",
    vehicleGroup: "car-van",
    shortDescription:
      "Commercial luxury SUV insurance for Virginia executive transport, livery services, and high-value company vehicles. Commercial auto liability, agreed value physical damage, and for-hire options from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Luxury SUV Insurance",
    heroSubheadline:
      "Luxury SUVs used for executive transport, black-car service, and premium business travel need commercial coverage that reflects both their value and their use. We write Virginia coverage for high-value SUVs in business and for-hire service.",
    semanticEntities: [
      "luxury SUV",
      "executive SUV",
      "black car service",
      "for-hire livery",
      "commercial auto liability",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Luxury SUV Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during business and for-hire operations. Physical damage coverage should be structured on an agreed value or replacement cost basis for high-value vehicles, rather than actual cash value, to avoid underinsurance after a total loss.",
          "Luxury SUVs used for for-hire passenger transport need livery coverage with limits that meet Virginia and platform requirements.",
        ],
        bullets: [
          "Commercial auto liability",
          "Agreed value or replacement cost physical damage",
          "For-hire livery coverage options",
          "Uninsured/underinsured motorist",
        ],
      },
      {
        heading: "Luxury SUV Uses We Insure",
        body: [
          "We insure Virginia corporate fleets with Escalades, Suburbans, Navigators, and similar SUVs used for executive transport; black-car and livery services using luxury SUVs; hotel and resort client transport; and government contractor fleets.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Traditional contract passenger carrier and livery operations need intrastate operating authority, for-hire vehicle registration, and minimum liability limits based on seating capacity (for example, $350,000 for vehicles designed for one to six passengers). Platform-based executive transport such as Uber Black follows Virginia's separate TNC framework instead of traditional motor carrier livery rules.",
        ],
      },
      {
        heading: "What Affects Your Luxury SUV Premium",
        body: [
          "Vehicle value, whether used for for-hire transport, operating territory, driver history, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Luxury SUV Quote",
        body: [
          "Have your vehicle details, use description, driver list, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Agreed value physical damage",
      "For-hire livery options",
      "Uninsured motorist",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "limousine-insurance",
      "commercial-suv-insurance",
      "hearse-insurance",
    ],
    relatedServiceSlugs: ["uber-black-insurance", "business-auto-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: ["fairfax-va", "arlington-va", "richmond-va"],
    relatedResourceSlugs: ["uber-black-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    image: image("luxury-suv-insurance", "Luxury SUV in front of a Virginia executive building"),
    updated: "2026-06-11",
  },

  // ─── BUSES AND MOTOR HOMES ────────────────────────────────────────────────
  {
    slug: "commercial-motorhome-insurance",
    name: "Commercial Motor Home Insurance",
    vehicleGroup: "bus-motorhome",
    shortDescription:
      "Commercial motor home insurance for Virginia businesses using RVs as mobile offices, crew accommodations, or promotional vehicles. Commercial auto liability and physical damage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Motor Home Insurance",
    heroSubheadline:
      "Motor homes used for business, including mobile command centers, crew accommodations, and promotional tours, need commercial coverage, not a personal RV policy. We write Virginia coverage for commercial motor home operations.",
    semanticEntities: [
      "commercial motor home",
      "mobile office RV",
      "business RV",
      "crew accommodation",
      "promotional vehicle",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Commercial Motor Home Insurance Covers",
        body: [
          "Commercial auto liability covers on-road travel. Physical damage covers the motor home chassis and body. When the unit is deployed as a stationary command center, mobile office, or accommodation, commercial property coverage for the contents and general liability are also needed.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage for chassis and body",
          "Commercial property coverage for contents option",
          "General liability when deployed",
        ],
      },
      {
        heading: "Commercial Motor Home Uses We Insure",
        body: [
          "We insure Virginia businesses using motor homes as disaster recovery command units, mobile medical screening vehicles, promotional tour vehicles, on-site crew accommodations for remote project work, and entertainment tour support vehicles.",
        ],
      },
      {
        heading: "Virginia Requirements",
        body: [
          "Virginia requires commercial auto liability on all business-registered vehicles. Motor homes used as for-hire passenger vehicles have additional requirements.",
        ],
      },
      {
        heading: "What Affects Your Commercial Motor Home Premium",
        body: [
          "Vehicle value, commercial modifications, operating territory, and the type of business use all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Commercial Motor Home Quote",
        body: [
          "Have your motor home details, commercial use description, driver information, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Commercial modifications coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "commercial-travel-trailer-insurance",
      "passenger-van-insurance",
      "bus-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("commercial-motorhome-insurance", "Commercial motor home at a Virginia event"),
    updated: "2026-06-11",
  },
  {
    slug: "bus-insurance",
    name: "Bus Insurance",
    vehicleGroup: "bus-motorhome",
    shortDescription:
      "Bus insurance for Virginia charter operators, transit companies, and employer shuttle services. Commercial auto liability, for-hire passenger transport coverage, and FMCSA filing from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Bus Insurance",
    heroSubheadline:
      "Buses carry more passengers than any other vehicle on the road, and the liability exposure scales with every seat. We write Virginia commercial coverage for charter buses, transit buses, and employer shuttles with limits that match the risk.",
    semanticEntities: [
      "bus insurance",
      "charter bus",
      "transit bus",
      "motor coach",
      "for-hire passenger carrier",
      "FMCSA",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Bus Insurance Covers",
        body: [
          "Commercial auto liability is the primary coverage, and the per-occurrence limits must be adequate for a bus full of passengers. FMCSA requires for-hire carriers operating buses with seating for 16 or more passengers (including the driver) to maintain a minimum of $5 million in liability.",
          "Physical damage covers the bus chassis and body. Uninsured and underinsured motorist coverage protects passengers when another driver is at fault. Medical payments provides first-party coverage for passenger injuries regardless of fault.",
        ],
        bullets: [
          "Commercial auto liability (up to $5M for large buses)",
          "Physical damage",
          "Uninsured/underinsured motorist",
          "Medical payments for passengers",
        ],
      },
      {
        heading: "Bus Types We Insure",
        body: [
          "We insure over-the-road motor coaches, smaller transit buses, minibuses (15–30 passengers), cutaway buses, double-decker charter buses, and commuter shuttle buses. Note: under Progressive's program, church-owned vehicles that transport passengers to and from home and school/daycare are not eligible.",
        ],
      },
      {
        heading: "FMCSA and Virginia Requirements for Bus Operations",
        body: [
          "For-hire bus operators in interstate commerce are regulated by FMCSA under 49 CFR 365. Buses designed for 16 or more passengers need operating authority and must maintain $5 million in liability. Buses designed for 15 or fewer passengers need $1.5 million. Virginia intrastate for-hire passenger carriers follow tiered minimums of $350,000 for one to six passengers, $1.5 million for seven to 15, and $5 million for 16 or more, plus for-hire vehicle registration.",
        ],
      },
      {
        heading: "What Affects Your Bus Premium",
        body: [
          "Seating capacity, for-hire vs. employee-only use, operating territory, driver qualifications, and prior loss history all affect pricing. Charter and tour bus operations are rated differently than fixed-route transit operations.",
        ],
      },
      {
        heading: "How to Get a Bus Insurance Quote",
        body: [
          "Have your bus details, seating capacity, driver list, use description, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability up to $5M",
      "Physical damage",
      "Uninsured motorist",
      "FMCSA filing support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "wheelchair-bus-insurance",
      "passenger-van-insurance",
      "school-bus-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("bus-insurance", "Charter bus at a Virginia transportation terminal"),
    updated: "2026-06-11",
  },
  {
    slug: "wheelchair-bus-insurance",
    name: "Wheelchair Bus Insurance",
    vehicleGroup: "bus-motorhome",
    shortDescription:
      "Wheelchair accessible bus insurance for Virginia NEMT operators, senior care facilities, and accessible transit services. Commercial auto liability, WAV endorsements, and for-hire transport coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Wheelchair Bus Insurance",
    heroSubheadline:
      "Wheelchair accessible buses combine the high-passenger-count liability of bus operations with the specialized equipment and regulatory requirements of accessible transport. We write Virginia coverage for WAB operators.",
    semanticEntities: [
      "wheelchair bus",
      "wheelchair accessible bus",
      "NEMT bus",
      "accessible transit",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Wheelchair Bus Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during passenger transport. Physical damage covers the bus body, wheelchair lift, and ramp assemblies. Uninsured and underinsured motorist coverage protects passengers. For-hire accessible transport operations need to meet FMCSA or Virginia passenger carrier requirements depending on their operation.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage including lift and ramp equipment",
          "Uninsured/underinsured motorist",
          "For-hire transport coverage",
        ],
      },
      {
        heading: "Wheelchair Bus Operations We Insure",
        body: [
          "We insure Virginia NEMT operators, adult day care providers, senior residential communities, and government-contracted accessible transit services using dedicated wheelchair-accessible buses.",
        ],
      },
      {
        heading: "Virginia and Federal Requirements",
        body: [
          "NEMT operators in Virginia may be regulated by DMAS for Medicaid transport and must carry minimum liability limits per contract. For-hire accessible bus operations need Virginia for-hire registration and FMCSA authority if operating interstate.",
        ],
      },
      {
        heading: "What Affects Your Wheelchair Bus Premium",
        body: [
          "Passenger capacity, number of wheelchair positions, Medicaid vs. private-pay operations, driver certifications, and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Wheelchair Bus Quote",
        body: [
          "Have your bus details, passenger capacity, wheelchair position count, driver list, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage with lift coverage",
      "Uninsured motorist",
      "NEMT compliance support",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "wheelchair-van-insurance",
      "bus-insurance",
      "passenger-van-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "business-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("wheelchair-bus-insurance", "Wheelchair accessible bus at a Virginia care facility"),
    updated: "2026-06-11",
  },
  {
    slug: "school-bus-insurance",
    name: "School Bus Insurance",
    vehicleGroup: "bus-motorhome",
    shortDescription:
      "School bus insurance for Virginia private schools, charter operators, and activity transport. Commercial auto liability with per-seat limits, physical damage, and FMCSA compliance from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia School Bus Insurance",
    heroSubheadline:
      "School buses carry children, and the liability implications of a serious accident are among the highest in commercial transport. We write Virginia coverage for private school buses and activity transport with limits that protect your organization.",
    semanticEntities: [
      "school bus insurance",
      "student transport",
      "private school bus",
      "activity bus",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What School Bus Insurance Covers",
        body: [
          "Commercial auto liability is the core coverage, with limits that must reflect the per-occurrence exposure of a bus carrying multiple children. Physical damage covers the bus. Uninsured and underinsured motorist coverage is critical when a third-party driver causes an accident.",
          "Note: under Progressive's commercial auto program, church-owned vehicles that transport passengers exclusively to and from home and school or daycare are not eligible. Private school buses operating regular routes and activity buses are covered.",
        ],
        bullets: [
          "Commercial auto liability with per-student limits",
          "Physical damage",
          "Uninsured/underinsured motorist",
          "Activity transport coverage",
        ],
      },
      {
        heading: "School Bus Types We Insure",
        body: [
          "We insure Type A, B, C, and D school buses for private schools; activity and sports buses used for field trips and athletic events; preschool and daycare transport buses for private organizations; and church activity buses for events (not home-to-school routes).",
        ],
      },
      {
        heading: "Virginia Requirements for School Bus Operations",
        body: [
          "Virginia has specific vehicle inspection and driver requirements for school buses under VDOE pupil transportation regulations. Private school operators must meet the same driver qualification standards as public school bus operators. Federal regulations can apply to interstate for-hire school transport, but school-sponsored extracurricular trips organized, sponsored, and paid for by a school district are excepted from FMCSA financial responsibility minimums. Contact our advisors to confirm which rules apply to your specific operation.",
        ],
      },
      {
        heading: "What Affects Your School Bus Premium",
        body: [
          "Bus age and capacity, driver training and MVR records, whether buses run fixed routes or activity-only, operating territory, and prior loss history all affect pricing.",
        ],
      },
      {
        heading: "How to Get a School Bus Quote",
        body: [
          "Have your bus details, capacity, driver list and training records, route description, and prior insurance history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage",
      "Uninsured motorist",
      "Activity transport coverage",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "bus-insurance",
      "wheelchair-bus-insurance",
      "passenger-van-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: NOVA,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("school-bus-insurance", "School bus at a Virginia private school"),
    updated: "2026-06-11",
  },

  // ─── DEBRIS REMOVAL ───────────────────────────────────────────────────────
  {
    slug: "front-loader-truck-insurance",
    name: "Front Loader Truck Insurance",
    vehicleGroup: "debris",
    shortDescription:
      "Front loader garbage truck insurance for Virginia waste haulers, municipal contractors, and recycling services. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Front Loader Truck Insurance",
    heroSubheadline:
      "Front loader garbage trucks navigate tight residential and commercial routes, picking up containers with automated arms. We write Virginia coverage for front-load waste haulers with limits built for debris removal operations.",
    semanticEntities: [
      "front loader truck",
      "garbage truck",
      "waste hauler",
      "refuse truck",
      "debris removal",
      "Virginia DMV",
      "municipal waste",
    ],
    sections: [
      {
        heading: "What Front Loader Truck Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during waste collection routes. Front loaders operate in congested areas with frequent stops and backup maneuvers, creating significant liability exposure from pedestrian and property damage incidents.",
          "Physical damage covers the truck, compactor body, and automated arm assembly. Pollution liability may be needed for operations handling hazardous waste or contaminated materials.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: truck and compactor",
          "Motor truck cargo for waste materials",
          "Pollution liability options",
        ],
      },
      {
        heading: "Front Loader Operations We Insure",
        body: [
          "We insure Virginia commercial waste haulers serving industrial parks, shopping centers, and multi-family housing; government contractors providing municipal collection services; and recycling services using front-load containers.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire waste haulers operating interstate in commerce with vehicles over 10,000 pounds GVWR typically need FMCSA authority and $750,000 minimum liability for general freight. Intrastate for-hire haulers over 10,000 pounds GVWR face a $750,000 Virginia motor carrier minimum. Virginia Department of Environmental Quality regulates waste transport and may impose specific insurance requirements for hazardous waste haulers. Municipal contracts typically specify minimum liability limits.",
        ],
      },
      {
        heading: "What Affects Your Front Loader Premium",
        body: [
          "Route density and operating territory, type of waste (commercial vs. residential vs. hazardous), truck age and GVW, driver history, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Front Loader Truck Quote",
        body: [
          "Have your truck details, a description of waste types and routes, driver list, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage with compactor",
      "Motor truck cargo",
      "Pollution liability options",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "garbage-truck-insurance",
      "roll-off-truck-insurance",
      "dump-truck-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: RICHMOND,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("front-loader-truck-insurance", "Front loader garbage truck on a Virginia commercial route"),
    updated: "2026-06-11",
  },
  {
    slug: "garbage-truck-insurance",
    name: "Garbage Truck Insurance",
    vehicleGroup: "debris",
    shortDescription:
      "Garbage truck insurance for Virginia residential haulers, rear loaders, roll-on/roll-off vehicles, and waste contractors. Commercial auto liability, physical damage, and debris removal coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Garbage Truck Insurance",
    heroSubheadline:
      "Garbage trucks and rear loaders run some of the most hazard-dense routes on Virginia roads, with workers outside the truck and constant traffic interaction. We write coverage built for residential and commercial waste hauling.",
    semanticEntities: [
      "garbage truck",
      "rear loader truck",
      "roll-on roll-off",
      "waste hauler",
      "refuse collection",
      "debris removal",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Garbage Truck Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during collection routes. Rear-load garbage trucks have significant workers-comp adjacent exposure from helpers working outside the vehicle, but the commercial auto policy covers the vehicle's liability during operation.",
          "Physical damage covers the truck, packer body, and hydraulic systems. Pollution liability is worth considering for operations handling materials that may leach or spill. Roll-on/roll-off vehicles used for container transport are covered under the same commercial auto structure.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: truck and packer body",
          "Motor truck cargo for waste materials",
          "Pollution liability options",
        ],
      },
      {
        heading: "Garbage Truck Types We Insure",
        body: [
          "We insure rear-load garbage trucks for residential collection, side-load automated trucks, roll-on/roll-off container vehicles, compactor trucks for commercial routes, recycling trucks, and yard waste collection trucks. Both owner-operated units and municipal contractor fleets are covered.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire Virginia waste haulers operating interstate in commerce with vehicles over 10,000 pounds GVWR typically need FMCSA authority. Intrastate for-hire haulers over 10,000 pounds GVWR face a $750,000 Virginia motor carrier minimum. Regulated hazardous waste may trigger additional DEQ and federal financial responsibility requirements beyond standard commercial auto minimums.",
        ],
      },
      {
        heading: "What Affects Your Garbage Truck Premium",
        body: [
          "Route type (residential vs. commercial vs. roll-off), waste type (MSW vs. recyclables vs. hazardous), truck age and GVW, driver history, and fleet size all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Garbage Truck Quote",
        body: [
          "Have your truck schedule, route description, waste types, driver list, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage with packer body",
      "Motor truck cargo",
      "Pollution liability options",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "front-loader-truck-insurance",
      "roll-off-truck-insurance",
      "dump-truck-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: LOUDOUN,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("garbage-truck-insurance", "Rear-load garbage truck on a Virginia residential street"),
    updated: "2026-06-11",
  },
  {
    slug: "roll-off-truck-insurance",
    name: "Roll-Off Truck Insurance",
    vehicleGroup: "debris",
    shortDescription:
      "Roll-off truck insurance for Virginia debris haulers, dumpster rental companies, and construction waste contractors. Commercial auto liability, physical damage, and debris removal coverage from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Roll-Off Truck Insurance",
    heroSubheadline:
      "Roll-off trucks move the dumpsters Virginia construction crews, demolition contractors, and recyclers depend on. We write coverage for roll-off operations built around debris removal risk.",
    semanticEntities: [
      "roll-off truck",
      "dumpster rental",
      "debris hauling",
      "construction waste",
      "demolition debris",
      "Virginia DMV",
      "FMCSA",
    ],
    sections: [
      {
        heading: "What Roll-Off Truck Insurance Covers",
        body: [
          "Commercial auto liability covers bodily injury and property damage during roll-off container delivery and pickup. Placing and retrieving dumpsters in traffic, on job sites, and in tight residential driveways creates frequent liability exposure.",
          "Physical damage covers the truck, cable system, and hydraulics. Motor truck cargo covers the debris in the containers. Pollution liability may be needed if you accept regulated materials or C&D waste with hazmat content.",
        ],
        bullets: [
          "Commercial auto liability",
          "Physical damage: truck and roll-off system",
          "Motor truck cargo for debris",
          "Pollution liability options",
        ],
      },
      {
        heading: "Roll-Off Operations We Insure",
        body: [
          "We insure Virginia dumpster rental companies serving residential remodels, construction waste contractors, demolition debris haulers, recycling and scrap metal transporters, and soil and excavation debris haulers.",
        ],
      },
      {
        heading: "Virginia and FMCSA Requirements",
        body: [
          "For-hire roll-off trucks operating interstate in commerce with vehicles over 10,000 pounds GVWR typically need FMCSA authority. Virginia solid waste regulations and local ordinances govern debris disposal and transport. Regulated hazardous or medical wastes carry separate documentation and compliance requirements.",
        ],
      },
      {
        heading: "What Affects Your Roll-Off Truck Premium",
        body: [
          "Debris type (C&D vs. MSW vs. regulated materials), number of trucks, operating territory, driver history, and prior loss experience all affect pricing.",
        ],
      },
      {
        heading: "How to Get a Roll-Off Truck Quote",
        body: [
          "Have your truck schedule, debris types accepted, operating territory, driver list, and prior loss history ready. Call (703) 551-2000 or request a quote online.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage with roll-off system",
      "Motor truck cargo",
      "Pollution liability options",
    ],
    faqIds: ["general-requirements", "general-cost"],
    relatedVehicleSlugs: [
      "garbage-truck-insurance",
      "front-loader-truck-insurance",
      "dump-truck-insurance",
    ],
    relatedServiceSlugs: ["commercial-auto-insurance", "construction-vehicle-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: CORRIDOR,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    image: image("roll-off-truck-insurance", "Roll-off truck delivering dumpster at a Virginia construction site"),
    updated: "2026-06-11",
  },
];

const vehicleMap = new Map(vehicles.map((v) => [v.slug, v]));

export function getVehicle(slug: string): VehicleType | undefined {
  return vehicleMap.get(slug);
}

export function getVehicles(slugs: string[]): VehicleType[] {
  return slugs.map((s) => vehicleMap.get(s)).filter((v): v is VehicleType => Boolean(v));
}

export const vehiclesByGroup = {
  truck: vehicles.filter((v) => v.vehicleGroup === "truck"),
  trailer: vehicles.filter((v) => v.vehicleGroup === "trailer"),
  "car-van": vehicles.filter((v) => v.vehicleGroup === "car-van"),
  "bus-motorhome": vehicles.filter((v) => v.vehicleGroup === "bus-motorhome"),
  debris: vehicles.filter((v) => v.vehicleGroup === "debris"),
};
