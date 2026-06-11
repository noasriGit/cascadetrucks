import type { Resource } from "@/lib/types";

function image(src: string, alt: string) {
  return { src, alt, width: 1200, height: 800 };
}

export const resources: Resource[] = [
  {
    slug: "virginia-commercial-auto-insurance-guide",
    title: "Virginia Commercial Auto Insurance Guide",
    excerpt:
      "A plain-language guide to commercial auto insurance in Virginia, covering minimum liability limits, business-use rules, federal filings, and how to choose the right coverage.",
    authorId: "cascade-commercial-team",
    semanticEntities: ["commercial auto liability", "Virginia DMV", "minimum limits", "for-hire"],
    sections: [
      {
        heading: "When You Need Commercial Auto Insurance in Virginia",
        body: [
          "Commercial auto insurance covers vehicles used for business, and the line between personal and commercial use is more important than many owners realize. If you carry tools or equipment, haul materials or goods, transport people for a fee, or have employees driving on your behalf, a personal auto policy will usually exclude the claim.",
          "That exclusion is the single most common gap we see. A contractor who insures a work van on a personal policy may find a denied claim after an at-fault accident on the way to a job. Commercial auto coverage exists precisely for these business uses, and it is built to handle them.",
        ],
        bullets: [
          "Vehicles owned by or registered to a business",
          "Trucks and vans carrying tools, equipment, or cargo",
          "Vehicles driven by employees for work",
          "For-hire transportation of goods or passengers",
        ],
      },
      {
        heading: "Virginia Minimum Liability Limits",
        body: [
          "Every vehicle registered in Virginia must carry liability insurance. As of January 1, 2025, the Code of Virginia sets the minimum at 50/100/25: $50,000 for bodily injury to one person, $100,000 for bodily injury per accident, and $25,000 for property damage. Virginia also requires uninsured and underinsured motorist coverage at matching limits.",
          "These are minimums, not recommendations. A loaded commercial truck can cause damage that far exceeds $50,000 in seconds, and most commercial operators carry liability limits of $500,000 or $1,000,000 to protect their business. General contractors and project owners frequently require proof of higher limits before you can work on their sites.",
        ],
      },
      {
        heading: "Federal Filings and For-Hire Operations",
        body: [
          "If you operate only within Virginia and do not haul for hire, state coverage is usually all you need. But operations that cross state lines or transport goods for compensation often fall under federal rules administered by the FMCSA.",
          "For-hire interstate carriers typically need operating authority and an MCS-90 endorsement, which is a federally mandated guarantee that the public will be compensated after a covered accident. For-hire passenger operations, such as livery and black-car service, have their own registration and limit requirements. Getting these filings right keeps you legal and on the road.",
        ],
      },
      {
        heading: "Choosing the Right Coverage and Limits",
        body: [
          "Start with liability limits that protect your assets, not just the state minimum. From there, add physical damage coverage to repair or replace your own vehicles, and layer in coverages specific to your work, such as motor truck cargo for haulers or tools and equipment for contractors.",
          "Operators running more than one vehicle should look at a commercial fleet policy, which combines coverage under a single program and can lower cost. The right structure depends on your industry, your vehicles, and where you operate.",
        ],
      },
      {
        heading: "How to Get Covered",
        body: [
          "Gather your vehicle details (year, make, model, VIN, and gross vehicle weight where relevant), your driver list with license information, your radius of operation, and any prior insurance and loss history.",
          "Because Cascade is an independent agency, we compare your operation across multiple carriers to find competitive, right-sized coverage. Call (703) 551-2000 or request a quote online, and a licensed advisor will walk you through your options.",
        ],
      },
    ],
    faqIds: ["general-requirements", "general-cost", "general-multi-vehicle"],
    relatedServiceSlugs: ["commercial-auto-insurance", "commercial-fleet-insurance", "dump-truck-insurance"],
    relatedResourceSlugs: ["commercial-fleet-insurance-guide", "how-dump-truck-insurance-works"],
    published: "2026-01-05",
    updated: "2026-06-08",
    image: image("https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1920&q=80", "White commercial semi-truck driving on a highway"),
  },
  {
    slug: "how-dump-truck-insurance-works",
    title: "How Dump Truck Insurance Works",
    excerpt:
      "A breakdown of how dump truck insurance works, including the coverage types in a policy, how physical damage and motor truck cargo respond, and what drives your premium in Virginia.",
    authorId: "cascade-commercial-team",
    semanticEntities: ["dump truck", "motor truck cargo", "physical damage", "gross vehicle weight"],
    sections: [
      {
        heading: "The Coverage Types in a Dump Truck Policy",
        body: [
          "A dump truck policy is really several coverages working together. The foundation is commercial auto liability, which pays for injuries and property damage you cause to others on the road. Every operator needs it, and contracts and the DMV expect it.",
          "Layered on top are the coverages that protect your own business: physical damage for the truck, motor truck cargo for what you haul, and optional pieces like hired and non-owned auto. Understanding what each one does helps you avoid paying for coverage you do not need and, more importantly, avoid gaps you cannot afford.",
        ],
        bullets: [
          "Commercial auto liability: your on-road exposure to others",
          "Physical damage: collision and comprehensive for your truck",
          "Motor truck cargo: the dirt, gravel, and fill you haul",
          "Hired and non-owned auto: rented and borrowed units",
        ],
      },
      {
        heading: "Physical Damage: Collision and Comprehensive Explained",
        body: [
          "Physical damage coverage has two parts. Collision pays to repair or replace your truck after an accident, regardless of fault. Comprehensive covers non-collision losses such as fire, theft, vandalism, falling objects, and weather damage.",
          "For a dump truck, these losses can be expensive, and a single comprehensive claim after a storm or theft can easily justify the coverage. Operators with financed or leased trucks are almost always required to carry physical damage, and even owners of paid-off trucks usually keep it given replacement costs.",
        ],
      },
      {
        heading: "Motor Truck Cargo Coverage for Virginia Haulers",
        body: [
          "Motor truck cargo covers the material you are hauling, the dirt, stone, gravel, sand, or debris in your bed. If a load is lost or damaged in a covered accident, this coverage responds where your liability and physical damage coverage would not.",
          "Cargo limits should reflect the value of the heaviest loads you carry. We help operators set a limit that matches their typical hauls so they are neither underinsured on a big load nor overpaying for capacity they never use.",
        ],
      },
      {
        heading: "What Drives Dump Truck Insurance Premiums",
        body: [
          "Premiums are built from the real risk of your operation. Gross vehicle weight and number of axles matter because heavier trucks cause more damage. Radius of operation matters because long hauls expose you to more miles and more risk than local job-site work.",
          "Cargo type, years in business, and the motor vehicle records of your drivers all factor in as well. Clean records and experience generally lower your rate, while new ventures may pay more until they build history. As an independent agency, we shop these factors across carriers to find the best fit.",
        ],
      },
      {
        heading: "Getting a Dump Truck Quote: What to Have Ready",
        body: [
          "To move quickly, gather your truck details (year, make, model, VIN, and gross vehicle weight), your operators' license information, your radius and typical haul routes, and any prior insurance and loss history.",
          "Call (703) 551-2000 or request a quote online. For a deeper look at the coverages themselves, see our dump truck insurance page. Many policies can be quoted the same day.",
        ],
      },
    ],
    faqIds: ["dump-truck-coverage", "dump-truck-classes", "general-cost"],
    relatedServiceSlugs: ["dump-truck-insurance", "construction-vehicle-insurance"],
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide", "commercial-fleet-insurance-guide"],
    published: "2026-01-06",
    updated: "2026-06-08",
    image: image("https://images.pexels.com/photos/3356047/pexels-photo-3356047.jpeg?auto=compress&cs=tinysrgb&w=1920", "Yellow dump truck at a construction site"),
  },
  {
    slug: "tow-truck-insurance-requirements",
    title: "Tow Truck Insurance Requirements",
    excerpt:
      "What tow operators in Virginia need to carry, from on-hook and garagekeepers coverage to DMV registration and the additional-insured filings municipal towing contracts require.",
    authorId: "cascade-commercial-team",
    semanticEntities: ["on-hook coverage", "garagekeepers", "wrecker", "towing"],
    sections: [
      {
        heading: "Required and Recommended Coverages for Tow Operators",
        body: [
          "Towing carries more exposure than most commercial vehicle work, because you are responsible not only for your own truck but for every vehicle you hook, haul, and store. Coverage reflects that layered risk.",
          "Commercial auto liability is required to operate, and physical damage protects your own wreckers and flatbeds. The coverages that truly define a tow policy, though, are on-hook legal liability and garagekeepers legal liability, which protect the vehicles in your care.",
        ],
        bullets: [
          "Commercial auto liability for your trucks on the road",
          "Physical damage for wreckers and flatbeds",
          "On-hook legal liability for vehicles being towed",
          "Garagekeepers legal liability for stored vehicles",
        ],
      },
      {
        heading: "On-Hook vs. Garagekeepers Coverage",
        body: [
          "These two coverages are easy to confuse but cover different moments. On-hook responds when a customer's vehicle is damaged while connected to your truck during a tow, hookup, or recovery. It is the coverage that protects you when a vehicle is dropped or damaged in transit.",
          "Garagekeepers responds once a vehicle is on your lot or in your impound yard. If a stored vehicle is damaged by fire, theft, vandalism, or weather, garagekeepers pays. Many operators need both, and the right limits depend on the value and volume of vehicles you handle.",
        ],
      },
      {
        heading: "Virginia Filings and Municipal Compliance",
        body: [
          "Tow businesses in Virginia generally register with the DMV, and the bigger compliance hurdle is usually at the local level. Cities and counties that maintain police-rotation or municipal tow lists almost always require operators to carry specific liability limits and to name the locality as an additional insured on a certificate of insurance.",
          "These requirements vary by jurisdiction, and falling out of compliance can mean losing your spot on a rotation list. Operators who tow across state lines or for hire may also need federal filings. We track these requirements so your policy and certificates keep you eligible for the work you depend on.",
        ],
      },
      {
        heading: "Common Mistakes That Leave Tow Operators Exposed",
        body: [
          "The most frequent gap we see is an operator who carries liability and physical damage but skips or underinsures on-hook coverage, leaving them personally exposed when a customer's vehicle is damaged. Another is letting an additional-insured certificate lapse and quietly dropping off a municipal rotation list.",
          "Underestimating the value of vehicles handled is a third. A flatbed that occasionally moves high-value trucks or equipment needs limits to match. We review your actual operation to make sure your limits reflect what you really tow and store.",
        ],
      },
      {
        heading: "How to Get a Tow Truck Policy in Place",
        body: [
          "Have your truck details, your operators' license information, the towing services you provide, your storage situation, and any contract requirements ready.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will structure on-hook and garagekeepers limits and issue the filings your contracts require. For coverage details, see our tow truck insurance page.",
        ],
      },
    ],
    faqIds: ["tow-truck-onhook", "tow-truck-filings", "general-requirements"],
    relatedServiceSlugs: ["tow-truck-insurance", "commercial-auto-insurance"],
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    published: "2026-01-07",
    updated: "2026-06-08",
    image: image("https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920", "Tow truck on the roadside ready for vehicle recovery"),
  },
  {
    slug: "commercial-fleet-insurance-guide",
    title: "Commercial Fleet Insurance Guide",
    excerpt:
      "How commercial fleet insurance works in Virginia, why combining vehicles can lower cost, and the safety programs, telematics, and experience-rating factors that shape your premium.",
    authorId: "cascade-commercial-team",
    semanticEntities: ["fleet policy", "telematics", "experience modification", "safety program"],
    sections: [
      {
        heading: "How Fleet Policies Differ from Individual Policies",
        body: [
          "Once a business runs two or more vehicles, insuring each one on its own policy becomes inefficient and often more expensive. A commercial fleet policy brings every vehicle under a single program with one renewal date and one place to make changes.",
          "Fleets carry the same core coverages as individual commercial auto policies, including liability, physical damage, and hired and non-owned auto, but they are administered as a unit. That makes it simple to add a truck mid-year, swap out a van, or update drivers without juggling separate policies.",
        ],
        bullets: [
          "Combined liability and physical damage across all units",
          "One renewal date and one point of contact",
          "Easy mid-term vehicle and driver changes",
          "Coverage that scales as the fleet grows",
        ],
      },
      {
        heading: "How Fleet Premiums Are Calculated",
        body: [
          "Fleet pricing reflects the combined risk of your vehicles, drivers, and operation. Carriers look at vehicle types and values, radius of operation, the cargo or work involved, and your overall loss history.",
          "Larger fleets may be evaluated on an experience-rating basis, where your own claims record directly raises or lowers your premium over time. That means investments in safety pay off twice: fewer losses now, and a better rate later.",
        ],
      },
      {
        heading: "Lowering Fleet Costs with Safety and Telematics",
        body: [
          "The most effective way to control fleet premiums is to manage risk. Driver screening and motor vehicle record checks keep high-risk drivers out of your trucks, and a documented safety program signals to carriers that you take loss prevention seriously.",
          "Telematics and dash-cam programs add another layer. They give you visibility into how vehicles are driven, help coach drivers, and can unlock usage-based discounts with carriers that offer them. They also provide objective evidence to defend against fraudulent or exaggerated claims.",
        ],
      },
      {
        heading: "Mixed Fleets: Trucks, Vans, and Trailers Together",
        body: [
          "Many Virginia fleets are not uniform. A construction operation might run dump trucks, pickups, service vans, and trailers all on one policy. A fleet policy can cover that mix, with each unit rated for its own use and value.",
          "This is where working with an independent agency matters. We structure the schedule so every vehicle class is covered correctly, from a tri-axle dump truck to a contractor van, without forcing the whole fleet into a one-size product.",
        ],
      },
      {
        heading: "Getting a Fleet Quote",
        body: [
          "To quote a fleet, we need a schedule of your vehicles (year, make, model, VIN, and use), your driver list with license details, your radius of operation, and your prior insurance and loss history.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will assemble a program covering your whole operation. For coverage details, see our commercial fleet insurance page.",
        ],
      },
    ],
    faqIds: ["fleet-discounts", "general-multi-vehicle", "general-cost"],
    relatedServiceSlugs: ["commercial-fleet-insurance", "commercial-auto-insurance", "dump-truck-insurance"],
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    published: "2026-01-08",
    updated: "2026-06-08",
    image: image("https://images.pexels.com/photos/36124840/pexels-photo-36124840.jpeg?auto=compress&cs=tinysrgb&w=1920", "Row of commercial cargo trucks parked in an outdoor fleet lot"),
  },
  {
    slug: "uber-black-insurance-requirements",
    title: "Uber Black Insurance Requirements",
    excerpt:
      "What Uber Black drivers in Virginia need to know about insurance: why it is livery rather than rideshare, the for-hire requirements involved, and the coverage limits the platform expects.",
    authorId: "cascade-commercial-team",
    semanticEntities: ["livery", "TNC", "black car", "for-hire transportation"],
    sections: [
      {
        heading: "Why Uber Black Is Livery, Not Rideshare",
        body: [
          "Uber Black sits in a different insurance category than standard UberX rideshare. Regular rideshare is handled as Transportation Network Company (TNC) driving, where the platform's commercial policy layers over your personal auto policy. Uber Black is pre-arranged, professional black-car service, which Virginia treats as for-hire livery transportation.",
          "That distinction changes everything about your coverage. Livery work cannot be insured on a personal auto policy or a basic rideshare endorsement. It requires a commercial livery policy built for carrying passengers for hire.",
        ],
        bullets: [
          "Rideshare (TNC): platform coverage over a personal policy",
          "Uber Black: for-hire livery requiring commercial coverage",
          "Personal and rideshare policies typically exclude livery work",
        ],
      },
      {
        heading: "Coverage Uber Black Drivers Need",
        body: [
          "A livery policy provides commercial liability at the limits this work requires, along with physical damage coverage for your vehicle and uninsured/underinsured motorist protection. Because you are transporting paying passengers, the liability exposure is higher than ordinary personal driving, and the limits reflect that.",
          "Operators commonly carry $1,000,000 in liability while a passenger is in the vehicle, which is generally what the platform expects. The right structure also accounts for the periods between rides, so you are not left with a gap when you are logged in but empty.",
        ],
      },
      {
        heading: "Staying Compliant in Virginia",
        body: [
          "For-hire passenger operators in Virginia generally need a for-hire vehicle registration in addition to the right insurance. Driving Uber Black on a personal or rideshare policy risks both a denied claim and a compliance problem that can sideline you.",
          "Keeping your registration current and your commercial limits in place is what keeps you eligible to accept Uber Black trips. We help drivers line up the coverage and documentation so there are no surprises at renewal or after a claim.",
        ],
      },
      {
        heading: "How to Get Covered",
        body: [
          "Have your vehicle details, your driving record, the platforms you drive for, and any prior commercial or livery coverage ready when you reach out.",
          "Call (703) 551-2000 or request a quote online, and a licensed advisor will set up livery coverage that keeps you compliant and earning. For coverage details, see our Uber Black insurance page.",
        ],
      },
    ],
    faqIds: ["uber-black-requirements", "general-requirements", "general-cost"],
    relatedServiceSlugs: ["uber-black-insurance", "commercial-auto-insurance"],
    relatedResourceSlugs: ["virginia-commercial-auto-insurance-guide"],
    published: "2026-01-09",
    updated: "2026-06-08",
    image: image("https://images.pexels.com/photos/313779/pexels-photo-313779.jpeg?auto=compress&cs=tinysrgb&w=1920", "Black luxury sedan on city streets at twilight"),
  },
];

const resourceMap = new Map(resources.map((r) => [r.slug, r]));

export function getResource(slug: string): Resource | undefined {
  return resourceMap.get(slug);
}

export function getResources(slugs: string[]): Resource[] {
  return slugs.map((s) => resourceMap.get(s)).filter((r): r is Resource => Boolean(r));
}
