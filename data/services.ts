import type { Service } from "@/lib/types";

const DEFAULT_LOCATIONS = [
  "fairfax-va",
  "arlington-va",
  "chantilly-va",
  "stafford-va",
  "fredericksburg-va",
  "winchester-va",
  "richmond-va",
];

function image(slug: string, alt: string) {
  return { src: `/images/services/${slug}.svg`, alt, width: 1200, height: 800 };
}

export const services: Service[] = [
  {
    slug: "dump-truck-insurance",
    name: "Dump Truck Insurance",
    category: "industry",
    navLabel: "Dump Truck Insurance",
    shortDescription:
      "Dump truck insurance for Virginia operators covering commercial auto liability, physical damage, and motor truck cargo. Fast quotes from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Dump Truck Insurance",
    heroSubheadline:
      "We insure single-axle through tri-axle and articulated dump trucks across Virginia, with coverage built around your haul radius, cargo, and gross vehicle weight. Independent advisors, multiple carrier options.",
    semanticEntities: [
      "dump truck",
      "physical damage coverage",
      "motor truck cargo",
      "gross vehicle weight",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Dump Truck Insurance Covers in Virginia",
        body: [
          "A dump truck policy starts with commercial auto liability, which pays for bodily injury and property damage you cause to others while operating your truck on Virginia roads. For most operators, that liability coverage is the foundation that contracts, job sites, and the DMV expect you to carry.",
          "From there, we build out the package to match how you run. Physical damage coverage protects the truck itself from collision and comprehensive losses, while motor truck cargo covers the dirt, gravel, stone, and fill you haul. Operators who rent units or send drivers in their own vehicles often add hired and non-owned auto as well.",
        ],
        bullets: [
          "Commercial auto liability for on-road bodily injury and property damage",
          "Physical damage (collision and comprehensive) for your truck",
          "Motor truck cargo for the materials you haul",
          "Hired and non-owned auto for rented and borrowed units",
        ],
      },
      {
        heading: "Dump Truck Classes and Vehicle Types We Insure",
        body: [
          "We write coverage across the full range of dump trucks Virginia operators run, from single-axle and tandem-axle trucks to tri-axle and quad configurations, transfer dumps, and articulated off-road haulers.",
          "We also insure dump trailers pulled behind tractors, including end dumps and side dumps. Whether you run a single truck hauling for local job sites or a mixed construction fleet moving between projects, we match your coverage to your gross vehicle weight and the work you do.",
        ],
      },
      {
        heading: "Virginia Requirements for Dump Truck Operators",
        body: [
          "Every dump truck registered in Virginia must carry liability coverage, and as of January 1, 2025 the state minimum is 50/100/25. In practice, most dump truck operators carry significantly higher limits because a loaded truck can cause serious damage, and general contractors frequently require proof of higher limits before you set foot on a job site.",
          "If you haul for hire or cross state lines, you may also need federal filings such as an MCS-90 endorsement and FMCSA operating authority. Our advisors confirm exactly what your operation and your contracts require so your coverage holds up when it matters.",
        ],
      },
      {
        heading: "What Affects Your Dump Truck Insurance Premium",
        body: [
          "Premiums reflect the real risk of your operation. Gross vehicle weight, the radius you operate in, the type of material you haul, your years in business, and the driving records of your operators all factor into pricing.",
          "Because Cascade is an independent agency, we compare your operation across multiple carriers rather than quoting a single rate. That lets us find competitive pricing for newer ventures and seasoned fleets alike. Our guide on how dump truck insurance works walks through these factors in more detail.",
        ],
        bullets: [
          "Gross vehicle weight and number of axles",
          "Radius of operation and typical haul routes",
          "Cargo type and load value",
          "Driver experience and motor vehicle records",
        ],
      },
      {
        heading: "How to Get a Dump Truck Insurance Quote",
        body: [
          "Getting started is straightforward. Have your truck details ready (year, make, model, VIN, and gross vehicle weight), your operators' license information, your radius of operation, and any prior insurance or loss history.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will review your operation and walk you through your options. Many dump truck policies can be quoted the same day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
      "Motor truck cargo",
      "Hired & non-owned auto",
    ],
    faqIds: ["dump-truck-coverage", "dump-truck-classes", "general-cost", "general-requirements"],
    relatedServiceSlugs: ["construction-vehicle-insurance", "commercial-fleet-insurance", "commercial-auto-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["how-dump-truck-insurance-works", "virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["dump-trailer-insurance", "transfer-dump-trailer-insurance", "bulk-commodity-trailer-insurance", "truck-tractor-insurance"],
    image: image("dump-truck-insurance", "Dump truck on a Virginia job site"),
    updated: "2026-06-11",
  },
  {
    slug: "tow-truck-insurance",
    name: "Tow Truck Insurance",
    category: "industry",
    navLabel: "Tow Truck Insurance",
    shortDescription:
      "Tow truck insurance for Virginia operators, including on-hook and garagekeepers coverage for light, medium, and heavy-duty towing. Fast quotes from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Tow Truck Insurance",
    heroSubheadline:
      "We cover wreckers, flatbeds, and recovery units across Virginia with the on-hook and garagekeepers protection towing businesses depend on, plus the filings your municipal contracts require.",
    semanticEntities: [
      "on-hook coverage",
      "garagekeepers",
      "wrecker",
      "repossession",
      "towing operations",
    ],
    sections: [
      {
        heading: "Tow Truck Insurance Coverages in Virginia",
        body: [
          "Towing is one of the higher-risk commercial vehicle operations on the road, and a tow truck policy reflects that. It centers on commercial auto liability for the bodily injury and property damage you could cause while driving, hooking up, or recovering a vehicle.",
          "Most operators round out that foundation with physical damage coverage for their own wreckers and flatbeds, plus the two coverages that set towing apart: on-hook and garagekeepers legal liability. Together these protect both the vehicles you are moving and the vehicles parked on your lot.",
        ],
        bullets: [
          "Commercial auto liability for on-road exposure",
          "Physical damage for your wreckers and flatbeds",
          "On-hook legal liability for vehicles in transit",
          "Garagekeepers legal liability for stored vehicles",
        ],
      },
      {
        heading: "On-Hook Coverage and Garagekeepers Explained",
        body: [
          "On-hook coverage pays for damage to a customer's vehicle while it is connected to your truck during a tow, hookup, or recovery. Without it, you could be personally responsible if a vehicle is damaged in your care, even when the accident was not your fault.",
          "Garagekeepers legal liability covers vehicles stored on your lot or in your impound yard. If a stored vehicle is damaged by fire, theft, vandalism, or weather, this coverage responds. We help you set both limits based on the value of the vehicles you typically handle, from everyday sedans to high-value trucks and equipment.",
        ],
      },
      {
        heading: "Towing Operations We Cover",
        body: [
          "We write coverage across the towing industry, from light-duty operators running flatbeds and wheel-lifts to medium- and heavy-duty recovery businesses handling commercial trucks and equipment.",
          "We also cover specialized work including private-property and consensual towing, police-rotation and municipal towing, repossession, and roadside assistance fleets. Whether you run one truck or a yard full of wreckers, we tailor coverage to your services.",
        ],
      },
      {
        heading: "Virginia Filing and Compliance Requirements",
        body: [
          "Tow businesses in Virginia generally register with the DMV, and operators who perform police-ordered or municipal towing are usually required by the locality to carry specific liability limits and to name the city or county as an additional insured on a certificate of insurance.",
          "Operators who tow across state lines or for hire may also need federal filings. We structure your policy and issue the certificates your contracts and jurisdictions require, so you can stay on rotation lists and keep working. Our tow truck insurance requirements guide covers these filings in detail.",
        ],
      },
      {
        heading: "How to Get a Tow Truck Insurance Quote",
        body: [
          "Have your truck details (year, make, model, VIN, and class), your operators' license information, your service area, and a description of the towing you do ready when you reach out.",
          "Call (703) 551-2000 or request a quote online and a licensed advisor will build a program around your operation, including the on-hook and garagekeepers limits that fit the vehicles you handle.",
        ],
      },
    ],
    coverageHighlights: [
      "On-hook legal liability",
      "Garagekeepers legal liability",
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
    ],
    faqIds: ["tow-truck-onhook", "tow-truck-filings", "general-cost", "general-requirements"],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["tow-truck-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["car-carrier-insurance", "flatbed-truck-insurance", "auto-hauler-trailer-insurance"],
    image: image("tow-truck-insurance", "Tow truck recovering a vehicle in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "contractor-vehicle-insurance",
    name: "Contractor Vehicle Insurance",
    category: "industry",
    navLabel: "Contractor Vehicle Insurance",
    shortDescription:
      "Contractor vehicle insurance for Virginia trades. Commercial auto liability plus tools and equipment coverage for work trucks and vans, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Contractor Vehicle Insurance",
    heroSubheadline:
      "Your truck and the tools inside it are how you earn a living. We cover work trucks and vans for Virginia contractors and trades, with the equipment protection job sites demand.",
    semanticEntities: ["work truck", "tools and equipment", "inland marine", "general contractor"],
    sections: [
      {
        heading: "Coverage for Contractor Trucks and Vans",
        body: [
          "Contractor vehicle insurance starts with commercial auto liability and physical damage for the trucks and vans your crews drive between job sites. That protects you on the road and keeps your vehicles working.",
          "Just as important is what you carry. Adding tools and equipment coverage (an inland marine policy) protects the hand tools, power tools, ladders, and gear that travel in your vehicle and move onto the job site, against theft and damage. For most contractors, pairing commercial auto with a tools and equipment floater is the right combination.",
        ],
        bullets: [
          "Commercial auto liability for work trucks and vans",
          "Physical damage (collision and comprehensive)",
          "Tools and equipment (inland marine) coverage",
          "Hired and non-owned auto for rented and employee vehicles",
        ],
      },
      {
        heading: "How Tools and Equipment Coverage Works",
        body: [
          "Your auto policy covers the vehicle, but not the thousands of dollars in tools inside it. Tools and equipment coverage, written as inland marine, fills that gap by protecting your gear whether it is in the truck, on the job site, or temporarily stored.",
          "Coverage can extend to leased and rented equipment as well, which matters when a project calls for a piece of machinery you do not own. We help you set a limit that reflects the real replacement value of everything you carry.",
        ],
      },
      {
        heading: "Trades We Serve",
        body: [
          "We insure work vehicles across the building and service trades, including general contractors, remodelers, electricians, plumbers, HVAC technicians, landscapers, roofers, painters, and handymen.",
          "Some trades have specific needs, so we also maintain dedicated pages for plumbing vehicles, HVAC vehicles, and landscaping vehicles. Whatever you do, we match your coverage to the vehicles and equipment your work requires.",
        ],
      },
      {
        heading: "How to Get a Contractor Vehicle Quote",
        body: [
          "Have your vehicle details (year, make, model, VIN), a sense of the tools and equipment value you carry, your driver information, and your service area ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will build a package that covers both your trucks and the tools that make them productive.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Tools & equipment (inland marine)",
      "Physical damage: collision & comprehensive",
      "Hired & non-owned auto",
    ],
    faqIds: ["contractor-tools", "general-cost", "general-multi-vehicle", "general-requirements"],
    relatedServiceSlugs: ["plumbing-vehicle-insurance", "hvac-vehicle-insurance", "construction-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["bucket-truck-insurance", "stake-body-truck-insurance", "cement-mixer-truck-insurance", "cargo-van-insurance", "commercial-pickup-insurance"],
    image: image("contractor-vehicle-insurance", "Contractor work truck in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "plumbing-vehicle-insurance",
    name: "Plumbing Vehicle Insurance",
    category: "industry",
    navLabel: "Plumbing Vehicle Insurance",
    shortDescription:
      "Plumbing van insurance for Virginia contractors. Commercial auto liability plus tools and equipment coverage for service vehicles, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Plumbing Vehicle Insurance",
    heroSubheadline:
      "From a single service van to a small fleet, we cover Virginia plumbing businesses with road protection and coverage for the tools, fixtures, and parts you carry.",
    semanticEntities: ["plumbing van", "service vehicle", "equipment coverage"],
    sections: [
      {
        heading: "Coverage for Plumbing Service Vans",
        body: [
          "A plumbing vehicle policy combines commercial auto liability with physical damage coverage for the van or truck itself. That keeps you protected on the road and gets your vehicle repaired or replaced after a covered loss.",
          "Because plumbers carry valuable tools, fixtures, and parts inventory, a tools and equipment (inland marine) add-on is strongly recommended. It protects that gear against theft and damage whether it is in the van or at a customer's home or job site.",
        ],
        bullets: [
          "Commercial auto liability for your service vehicles",
          "Physical damage (collision and comprehensive)",
          "Tools and equipment coverage for tools, fixtures, and parts",
        ],
      },
      {
        heading: "Why Plumbing Businesses Choose Cascade",
        body: [
          "We understand how plumbing crews operate, from emergency calls at all hours to new-construction rough-ins, and we build coverage that fits that schedule. As an independent agency, we compare carriers to find competitive pricing for owner-operators and growing shops alike.",
          "If you run more than one van or also operate service trucks, we can combine everything on a single commercial policy. For the full picture on protecting your gear, see our contractor vehicle insurance page.",
        ],
      },
      {
        heading: "How to Get a Plumbing Vehicle Quote",
        body: [
          "Have your van or truck details, the approximate value of the tools and inventory you carry, your driver information, and your service area ready when you reach out.",
          "Call (703) 551-2000 or request a quote online and a licensed advisor will tailor coverage to your plumbing operation.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Tools & equipment (inland marine)",
      "Physical damage: collision & comprehensive",
    ],
    faqIds: ["plumbing-van", "contractor-tools", "general-cost", "general-requirements"],
    relatedServiceSlugs: ["hvac-vehicle-insurance", "contractor-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["cargo-van-insurance", "commercial-pickup-insurance", "utility-trailer-insurance", "delivery-van-insurance"],
    image: image("plumbing-vehicle-insurance", "Plumbing service van in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "hvac-vehicle-insurance",
    name: "HVAC Vehicle Insurance",
    category: "industry",
    navLabel: "HVAC Vehicle Insurance",
    shortDescription:
      "HVAC vehicle insurance for Virginia contractors. Commercial auto liability plus equipment coverage for service trucks and vans, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia HVAC Vehicle Insurance",
    heroSubheadline:
      "We insure HVAC service trucks and vans across Virginia, covering both the vehicle on the road and the compressors, recovery machines, and units your crews transport.",
    semanticEntities: ["HVAC truck", "service van", "equipment coverage"],
    sections: [
      {
        heading: "Coverage for HVAC Trucks and Vans",
        body: [
          "An HVAC vehicle policy pairs commercial auto liability with physical damage coverage for the truck or van itself, keeping you protected on the road and your vehicle in service.",
          "HVAC crews carry expensive gear, from gauges and recovery machines to replacement compressors and full units. Tools and equipment (inland marine) coverage protects that equipment against theft and damage, and can extend to larger components while they are in transit to a job.",
        ],
        bullets: [
          "Commercial auto liability for service vehicles",
          "Physical damage (collision and comprehensive)",
          "Tools and equipment coverage for HVAC gear and parts",
        ],
      },
      {
        heading: "Built for Seasonal HVAC Operations",
        body: [
          "HVAC demand swings hard with Virginia's summers and winters, and your fleet often expands during peak season. We structure coverage that can flex with added vehicles and drivers when the calls pile up.",
          "Whether you handle residential service, new-construction installs, or commercial maintenance contracts, we match coverage to your work. For the full rundown on protecting your equipment, see our contractor vehicle insurance page.",
        ],
      },
      {
        heading: "How to Get an HVAC Vehicle Quote",
        body: [
          "Have your vehicle details, the approximate value of the equipment and parts you carry, your driver information, and your service area ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will build coverage around your HVAC operation.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Tools & equipment (inland marine)",
      "Physical damage: collision & comprehensive",
    ],
    faqIds: ["hvac-equipment", "contractor-tools", "general-cost", "general-requirements"],
    relatedServiceSlugs: ["plumbing-vehicle-insurance", "contractor-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["cargo-van-insurance", "commercial-pickup-insurance", "delivery-van-insurance", "large-utility-trailer-insurance"],
    image: image("hvac-vehicle-insurance", "HVAC service truck in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "landscaping-vehicle-insurance",
    name: "Landscaping Vehicle Insurance",
    category: "industry",
    navLabel: "Landscaping Vehicle Insurance",
    shortDescription:
      "Landscaping vehicle insurance for Virginia businesses. Truck, trailer, and equipment coverage for lawn care and landscaping crews, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Landscaping Vehicle Insurance",
    heroSubheadline:
      "We cover landscaping trucks, the trailers behind them, and the mowers and equipment they haul, with coverage that flexes for Virginia's busy and off-season months.",
    semanticEntities: ["landscaping truck", "trailer coverage", "towed equipment"],
    sections: [
      {
        heading: "Truck, Trailer, and Equipment Coverage",
        body: [
          "A landscaping policy starts with commercial auto liability and physical damage for the trucks your crews drive. Each trailer you pull should also be listed on the policy so it carries liability and, if you choose, physical damage coverage of its own.",
          "The mowers, blowers, trimmers, and other equipment hauled on those trailers are protected separately under a tools and equipment (inland marine) add-on rather than the auto policy. Listing your trucks, trailers, and equipment correctly is what keeps a claim from falling through the cracks.",
        ],
        bullets: [
          "Commercial auto liability for landscaping trucks",
          "Trailer liability and physical damage",
          "Tools and equipment coverage for mowers and gear",
          "Hired and non-owned auto for seasonal help",
        ],
      },
      {
        heading: "Built for Seasonal Landscaping Operations",
        body: [
          "Landscaping work in Virginia peaks in spring and summer and slows in winter, and many crews shift to leaf removal or snow plowing in the off-season. We build coverage that accounts for those changes, including added trucks and seasonal drivers.",
          "If your crews plow snow in winter, let us know, because that work carries its own liability considerations we can address. We tailor the policy to the full range of services you offer across the year.",
        ],
      },
      {
        heading: "How to Get a Landscaping Vehicle Quote",
        body: [
          "Have your truck and trailer details, the approximate value of the equipment you haul, your driver information, and your service area ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will build a program covering your trucks, trailers, and equipment together.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Trailer liability & physical damage",
      "Tools & equipment (inland marine)",
      "Physical damage: collision & comprehensive",
    ],
    faqIds: ["landscaping-trailer", "general-cost", "general-multi-vehicle", "general-requirements"],
    relatedServiceSlugs: ["contractor-vehicle-insurance", "construction-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["stake-body-truck-insurance", "utility-trailer-insurance", "tilt-trailer-insurance", "commercial-pickup-insurance", "wedge-trailer-insurance"],
    image: image("landscaping-vehicle-insurance", "Landscaping truck and trailer in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "construction-vehicle-insurance",
    name: "Construction Vehicle Insurance",
    category: "industry",
    navLabel: "Construction Vehicle Insurance",
    shortDescription:
      "Construction vehicle insurance for Virginia firms. Liability, physical damage, mobile equipment, and cargo coverage for job-site vehicles, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Construction Vehicle Insurance",
    heroSubheadline:
      "From pickups to dump trucks to off-road machinery, we insure the vehicles and equipment that keep Virginia construction projects moving, on the road and on the site.",
    semanticEntities: ["construction vehicle", "mobile equipment", "physical damage coverage"],
    sections: [
      {
        heading: "Coverage for Construction Vehicles",
        body: [
          "Construction operations run a wide mix of vehicles, and the policy reflects that. It centers on commercial auto liability and physical damage for the trucks that travel public roads between your yard and the job site.",
          "Beyond the road, many construction operators add motor truck cargo for materials in transit and hired and non-owned auto for rented units and employee vehicles used on the project. We build the auto side of your program to match the trucks you actually run.",
        ],
        bullets: [
          "Commercial auto liability for road-going vehicles",
          "Physical damage (collision and comprehensive)",
          "Motor truck cargo for materials in transit",
          "Hired and non-owned auto for rented units",
        ],
      },
      {
        heading: "Mobile Equipment and Job-Site Machinery",
        body: [
          "Not everything on a construction site is registered for the road. Excavators, skid steers, loaders, and similar machinery are typically covered as mobile equipment rather than under the auto policy.",
          "Getting the line between road vehicles and mobile equipment right is what keeps your claims clean. We coordinate your commercial auto coverage with the equipment coverage your operation needs so there are no gaps when something goes wrong.",
        ],
      },
      {
        heading: "Project-Ready Protection in Virginia",
        body: [
          "General contractors and project owners frequently require proof of specific liability limits and additional-insured status before you can work on a site. We issue the certificates and structure the limits your contracts call for.",
          "If your fleet includes dump trucks, our dump truck insurance page covers that vehicle class in depth, and operators running several units often benefit from a combined fleet policy.",
        ],
      },
      {
        heading: "How to Get a Construction Vehicle Quote",
        body: [
          "Have a list of your vehicles and equipment, your driver information, your typical project locations, and any contract insurance requirements ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will assemble coverage for the vehicles and machinery your projects depend on.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
      "Mobile equipment coverage",
      "Motor truck cargo",
    ],
    faqIds: ["construction-coverage", "general-cost", "general-multi-vehicle", "general-requirements"],
    relatedServiceSlugs: ["dump-truck-insurance", "contractor-vehicle-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide", "how-dump-truck-insurance-works"],
    relatedVehicleSlugs: ["cement-mixer-truck-insurance", "pump-truck-insurance", "lowboy-trailer-insurance", "gooseneck-trailer-insurance", "dump-trailer-insurance"],
    image: image("construction-vehicle-insurance", "Construction vehicles at a Virginia site"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-fleet-insurance",
    name: "Commercial Fleet Insurance",
    category: "coverage",
    navLabel: "Commercial Fleet Insurance",
    shortDescription:
      "Commercial fleet insurance for Virginia businesses running two or more vehicles. Combined coverage, multi-vehicle pricing, and safety program support from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Fleet Insurance",
    heroSubheadline:
      "Once you run two or more trucks or vans, a fleet policy simplifies coverage and can lower your cost. We insure mixed fleets of dump trucks, work vans, and trailers across Virginia.",
    semanticEntities: ["fleet policy", "telematics", "experience modification", "multi-vehicle"],
    sections: [
      {
        heading: "How Commercial Fleet Coverage Works",
        body: [
          "A fleet policy brings all of your vehicles under a single program instead of separate policies for each unit. That means one renewal date, one place to add or remove vehicles, and coverage that scales as your operation grows.",
          "Fleet policies carry the same core coverages as individual commercial auto policies, including liability, physical damage, and hired and non-owned auto, but they are structured to handle multiple vehicles and drivers efficiently. We write fleets of every mix, from a pair of work trucks to combinations of dump trucks, service vans, and trailers.",
        ],
        bullets: [
          "Combined commercial auto liability across all units",
          "Physical damage for owned trucks, vans, and trailers",
          "Hired and non-owned auto for rented and employee vehicles",
          "Easy mid-term vehicle and driver changes",
        ],
      },
      {
        heading: "Fleet Pricing and Discounts",
        body: [
          "Insuring vehicles together often prices better than covering each one separately, and carriers reward operations that manage risk well. A clean loss history, driver screening, and a documented safety program can all improve your rates.",
          "Larger fleets may also be evaluated on an experience modification basis, where your own loss record directly shapes your premium. As an independent agency, we shop your fleet across multiple carriers and help you build the practices that earn the best pricing over time.",
        ],
      },
      {
        heading: "Managing Fleet Risk and Telematics",
        body: [
          "Telematics and dash-cam programs give fleet owners visibility into how their vehicles are driven and can reduce premiums with carriers that offer usage-based discounts. They also help you coach drivers and defend against fraudulent claims.",
          "We help you weigh these programs against your operation and connect the safety steps you take to the rates you pay. Our commercial fleet insurance guide goes deeper on lowering fleet costs.",
        ],
      },
      {
        heading: "How to Get a Fleet Insurance Quote",
        body: [
          "To quote a fleet, we need a schedule of your vehicles (year, make, model, VIN, and use), your driver list with license details, your radius of operation, and your prior insurance and loss history.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will assemble a program that covers your whole operation under one policy.",
        ],
      },
    ],
    coverageHighlights: [
      "Combined fleet liability",
      "Physical damage across all units",
      "Hired & non-owned auto",
      "Safety program & telematics support",
    ],
    faqIds: ["fleet-discounts", "general-multi-vehicle", "general-cost", "general-requirements"],
    relatedServiceSlugs: ["commercial-auto-insurance", "dump-truck-insurance", "construction-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["box-truck-insurance", "delivery-van-insurance", "cargo-van-insurance", "refrigerated-truck-insurance", "flatbed-truck-insurance"],
    image: image("commercial-fleet-insurance", "Commercial fleet of trucks in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "uber-black-insurance",
    name: "Uber Black Insurance",
    category: "coverage",
    navLabel: "Uber Black Insurance",
    shortDescription:
      "Uber Black and livery insurance for Virginia for-hire drivers. Commercial livery liability that meets DMV and platform requirements, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Uber Black Insurance",
    heroSubheadline:
      "Uber Black is for-hire livery work, not standard rideshare, and it needs commercial coverage to match. We write livery and black-car policies that keep Virginia drivers compliant and earning.",
    semanticEntities: ["livery", "TNC", "black car", "for-hire transportation"],
    sections: [
      {
        heading: "Uber Black and Livery Coverage in Virginia",
        body: [
          "Uber Black and other black-car work is classified as for-hire livery transportation in Virginia, which is different from rideshare driving on a personal vehicle. A personal auto policy will not cover it, and a standard rideshare endorsement is not enough.",
          "Livery coverage provides the commercial liability limits this work requires, along with physical damage for your vehicle and uninsured/underinsured motorist protection. We build the policy to satisfy both Virginia requirements and the limits Uber expects while you carry a passenger.",
        ],
        bullets: [
          "Commercial livery liability",
          "Physical damage (collision and comprehensive)",
          "Uninsured and underinsured motorist coverage",
          "Limits that meet platform and DMV requirements",
        ],
      },
      {
        heading: "Livery vs. Rideshare: Why It Matters",
        body: [
          "Rideshare and livery are not the same in the eyes of Virginia regulators or insurers. Transportation Network Company (TNC) rideshare relies on the platform's coverage layered over a personal policy, but pre-arranged black-car and limousine service is for-hire livery that requires its own commercial coverage.",
          "Driving Uber Black on a personal or rideshare policy can leave you uninsured at exactly the wrong moment. We make sure you are written correctly as a livery operator so your coverage actually responds to a claim.",
        ],
      },
      {
        heading: "Staying Compliant and on the Road",
        body: [
          "For-hire operators in Virginia generally need a for-hire vehicle registration and commercial liability limits high enough to satisfy the platform, often $1,000,000 while a passenger is in the vehicle.",
          "We help you carry the right limits and documentation so you stay eligible to drive. Our Uber Black insurance requirements guide explains the rules in plain language.",
        ],
      },
      {
        heading: "How to Get an Uber Black Insurance Quote",
        body: [
          "Have your vehicle details, your driving record, the platforms you drive for, and any prior commercial or livery coverage ready when you reach out.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will set up livery coverage that keeps you compliant and driving.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial livery liability",
      "Physical damage: collision & comprehensive",
      "Uninsured & underinsured motorist",
      "For-hire / livery compliance",
    ],
    faqIds: ["uber-black-requirements", "general-cost", "general-requirements", "general-quote-speed"],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance"],
    relatedLocationSlugs: ["fairfax-va", "arlington-va", "richmond-va"],
    relatedResourceSlugs: ["uber-black-insurance-requirements", "virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: ["limousine-insurance", "luxury-suv-insurance", "hearse-insurance", "passenger-van-insurance"],
    image: image("uber-black-insurance", "Black car service vehicle in Virginia"),
    updated: "2026-06-11",
  },
  {
    slug: "business-auto-insurance",
    name: "Business Auto Insurance",
    category: "industry",
    navLabel: "Business Auto Insurance",
    shortDescription:
      "Business auto insurance for Virginia companies using cars, vans, pickups, SUVs, and box trucks for everyday operations. Coverage for owned vehicles, hired autos, and employee-driven units from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Business Auto Insurance",
    heroSubheadline:
      "Whether your team drives sedans to client meetings, cargo vans on service calls, or pickups between job sites, business auto insurance covers the gap a personal policy leaves behind. We write business auto coverage for Virginia companies of every size.",
    semanticEntities: [
      "business auto",
      "commercial auto liability",
      "hired and non-owned auto",
      "business use",
      "Virginia DMV",
    ],
    sections: [
      {
        heading: "What Business Auto Insurance Covers in Virginia",
        body: [
          "Business auto insurance protects vehicles used for work, from a single owner-operated sedan to a fleet of service vans. The core coverage is commercial auto liability, which pays for bodily injury and property damage your vehicle causes to others. Without it, a personal policy's business-use exclusion can leave you holding the bill after an at-fault accident on the way to a client.",
          "Most businesses add physical damage (collision and comprehensive) to repair or replace their own vehicles, and hired and non-owned auto to cover rented vehicles and employees' personal cars used on the job. Together these three coverages handle the most common gaps Virginia business owners face.",
        ],
        bullets: [
          "Commercial auto liability for bodily injury and property damage",
          "Physical damage: collision and comprehensive for owned vehicles",
          "Hired auto for rentals and borrowed vehicles",
          "Non-owned auto for employees driving personal cars on company business",
        ],
      },
      {
        heading: "Vehicles We Insure Under Business Auto",
        body: [
          "Business auto policies are built for the wide range of vehicles Virginia businesses actually drive: passenger cars and luxury sedans for executives and sales teams, cargo vans and minivans for service technicians, pickups for field crews, SUVs for property management and real estate, delivery and step vans for last-mile operations, and box trucks for light hauling.",
          "If your business owns or regularly uses a vehicle that isn't a specialized heavy truck, tow rig, or dump truck, a business auto policy is almost certainly the right structure. We'll confirm the fit and flag if a more specialized policy is the better match.",
        ],
      },
      {
        heading: "Virginia Requirements for Business Vehicles",
        body: [
          "Every vehicle registered in Virginia must carry liability coverage. As of January 1, 2025, the state minimum is 50/100/25: $50,000 bodily injury per person, $100,000 per accident, and $25,000 property damage. For business vehicles, these minimums are rarely enough, since a commercial claim can easily exceed them and expose the business to direct liability.",
          "Most Virginia businesses carry $500,000 to $1,000,000 in liability limits, and many contracts, leases, and client agreements require proof of higher limits. Our advisors review your specific exposures to recommend the right limits.",
        ],
      },
      {
        heading: "What Affects Your Business Auto Premium",
        body: [
          "Premiums reflect the vehicles you drive, how you use them, where you operate, and who is behind the wheel. A company with a clean driver roster, newer vehicles, and local routes will price better than one with a history of losses or high-risk drivers.",
          "Adding drivers to a policy, expanding the radius of operation, or changing vehicle types can all affect your rate. As an independent agency, we monitor your program across multiple carriers to make sure you stay well priced as your business grows.",
        ],
        bullets: [
          "Vehicle type, age, and value",
          "Driver motor vehicle records and experience",
          "Annual mileage and radius of operation",
          "Prior insurance and loss history",
        ],
      },
      {
        heading: "How to Get a Business Auto Quote",
        body: [
          "Have your vehicle schedule (year, make, model, VIN), your driver list with license numbers, your annual mileage estimate, and any prior insurance history ready when you reach out.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will review your operation and build the right coverage. Most business auto policies can be quoted the same day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
      "Hired auto coverage",
      "Non-owned auto for employee vehicles",
    ],
    faqIds: ["general-requirements", "general-cost", "general-multi-vehicle", "general-quote-speed"],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance", "contractor-vehicle-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    relatedVehicleSlugs: [
      "cargo-van-insurance",
      "delivery-van-insurance",
      "commercial-pickup-insurance",
      "commercial-suv-insurance",
      "passenger-van-insurance",
      "box-truck-insurance",
      "luxury-suv-insurance",
      "commercial-minivan-insurance",
    ],
    image: image("business-auto-insurance", "Business vehicles parked at a Virginia office"),
    updated: "2026-06-11",
  },
  {
    slug: "commercial-auto-insurance",
    name: "Commercial Auto Insurance",
    category: "coverage",
    navLabel: "Commercial Auto Insurance",
    shortDescription:
      "Commercial auto insurance for Virginia businesses. Liability, physical damage, and hired and non-owned coverage for trucks and vans, from licensed advisors in Manassas, VA.",
    heroHeadline: "Virginia Commercial Auto Insurance",
    heroSubheadline:
      "If you use a vehicle for business, you need commercial auto coverage built for that risk. We insure work trucks, vans, and business vehicles of every kind across Virginia.",
    semanticEntities: ["commercial auto liability", "business use", "hired and non-owned auto"],
    sections: [
      {
        heading: "What Commercial Auto Insurance Covers",
        body: [
          "Commercial auto insurance protects the vehicles your business depends on and the liability that comes with operating them. The core of every policy is commercial auto liability, which pays for bodily injury and property damage you cause to others on the road.",
          "Most businesses add physical damage coverage to repair or replace their own vehicles after a collision, theft, or weather loss. Medical payments, uninsured and underinsured motorist coverage, and hired and non-owned auto round out a policy so both your vehicles and your people are protected.",
        ],
        bullets: [
          "Commercial auto liability for bodily injury and property damage",
          "Physical damage (collision and comprehensive)",
          "Medical payments and uninsured/underinsured motorist",
          "Hired and non-owned auto for rented and employee vehicles",
        ],
      },
      {
        heading: "When Your Business Vehicles Need Commercial Coverage",
        body: [
          "A personal auto policy is not built for business use and often excludes it. If you carry tools or equipment, transport goods or people for a fee, haul materials, or have employees driving on your behalf, you almost certainly need commercial auto coverage.",
          "This applies to a wide range of operations, from a single contractor van to a service truck, a box truck making deliveries, or a vehicle registered to your company. When in doubt, our advisors can tell you whether your use crosses into commercial territory.",
        ],
      },
      {
        heading: "Virginia Minimum Limits and Filing Requirements",
        body: [
          "Every vehicle registered in Virginia must carry liability coverage, and as of January 1, 2025 the state minimum is 50/100/25 ($50,000 bodily injury per person, $100,000 per accident, $25,000 property damage). Commercial operators typically carry higher limits to satisfy contracts and protect business assets.",
          "Businesses that haul for hire or operate in interstate commerce may need additional federal filings such as the MCS-90 endorsement. Our full Virginia commercial auto insurance guide explains these requirements in plain language.",
        ],
      },
      {
        heading: "Coverage Options and Add-Ons",
        body: [
          "Beyond the basics, we tailor your policy to your industry. Contractors add tools and equipment coverage, haulers add motor truck cargo, and operators with multiple vehicles move to a fleet policy for combined coverage and better pricing.",
          "Because Cascade is an independent agency, we match your operation to the right carrier and coverage package rather than forcing it into a single product.",
        ],
      },
      {
        heading: "How to Get a Commercial Auto Quote in Virginia",
        body: [
          "Have your vehicle details (year, make, model, VIN, and use), driver license information, radius of operation, and prior insurance history ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will review how you operate and recommend the right coverage. Many policies can be quoted the same day.",
        ],
      },
    ],
    coverageHighlights: [
      "Commercial auto liability",
      "Physical damage: collision & comprehensive",
      "Hired & non-owned auto",
      "Medical payments & uninsured motorist",
    ],
    faqIds: ["general-requirements", "general-cost", "general-multi-vehicle", "general-quote-speed"],
    relatedServiceSlugs: ["commercial-fleet-insurance", "contractor-vehicle-insurance", "tow-truck-insurance"],
    relatedLocationSlugs: DEFAULT_LOCATIONS,
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide", "commercial-fleet-insurance-guide"],
    relatedVehicleSlugs: ["box-truck-insurance", "cargo-van-insurance", "delivery-van-insurance", "commercial-pickup-insurance", "flatbed-truck-insurance"],
    image: image("commercial-auto-insurance", "Commercial vehicles in Virginia"),
    updated: "2026-06-11",
  },
];

const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceMap.get(slug);
}

export function getServices(slugs: string[]): Service[] {
  return slugs.map((s) => serviceMap.get(s)).filter((s): s is Service => Boolean(s));
}

export const coverageServices = services.filter((s) => s.category === "coverage");
export const industryServices = services.filter((s) => s.category === "industry");
