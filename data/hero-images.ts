export interface HeroImage {
  src: string;
  alt: string;
}

/** Per-slug hero background photos (Unsplash / Pexels, royalty-free). */
export const heroImages: Record<string, HeroImage> = {
  // ─── Coverage ─────────────────────────────────────────────────────────────
  "dump-truck-insurance": {
    src: "https://images.unsplash.com/photo-1778066994998-97f74a5bf901?w=1920&q=80&auto=format&fit=crop",
    alt: "Yellow excavator loading dirt into a dump truck at a construction job site",
  },
  "tow-truck-insurance": {
    src: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1920&q=80&auto=format&fit=crop",
    alt: "Flatbed tow truck carrying a vehicle on the roadside",
  },
  "semi-truck-insurance": {
    src: "https://images.unsplash.com/photo-1778016187983-c3a44eee1f46?w=1920&q=80&auto=format&fit=crop",
    alt: "Semi truck tractor on a Virginia interstate",
  },
  "contractor-vehicle-insurance": {
    src: "https://images.unsplash.com/photo-1776493929304-dfe4d50ae96b?w=1920&q=80&auto=format&fit=crop",
    alt: "Contractor work van and forklift at a construction supply yard",
  },
  "plumbing-vehicle-insurance": {
    src: "https://images.unsplash.com/photo-1768400554801-2002b63e0591?w=1920&q=80&auto=format&fit=crop",
    alt: "White commercial cargo van used as a plumbing service vehicle",
  },
  "hvac-vehicle-insurance": {
    src: "https://images.unsplash.com/photo-1764743259058-a27178710a09?w=1920&q=80&auto=format&fit=crop",
    alt: "White HVAC service van parked outside a commercial building",
  },
  "landscaping-vehicle-insurance": {
    src: "https://images.unsplash.com/photo-1628211904781-3c54d77a5585?w=1920&q=80&auto=format&fit=crop",
    alt: "Landscaping excavator loaded on a truck trailer for transport",
  },
  "construction-vehicle-insurance": {
    src: "https://images.unsplash.com/photo-1597974380476-fbf652dfe188?auto=format&fit=crop&w=2400&q=80",
    alt: "Construction site with dump trucks and heavy equipment at a Virginia work zone",
  },
  "commercial-fleet-insurance": {
    src: "https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?auto=format&fit=crop&w=2400&q=80",
    alt: "Row of semi trucks parked in a commercial fleet lot",
  },
  "uber-black-insurance": {
    src: "https://images.unsplash.com/photo-1764090317825-9b76e437c8d8?auto=format&fit=crop&w=2400&q=80",
    alt: "Black luxury sedan parked roadside for executive rideshare service",
  },
  "business-auto-insurance": {
    src: "https://images.unsplash.com/photo-1599747645972-73c841de6e9e?auto=format&fit=crop&w=2400&q=80",
    alt: "Company vehicles parked in an office building parking lot during the day",
  },
  "commercial-auto-insurance": {
    src: "https://images.unsplash.com/photo-1779583074717-e60fa13131ce?auto=format&fit=crop&w=2400&q=80",
    alt: "Commercial semi truck driving on an open highway",
  },

  // ─── Vehicles: Trucks ─────────────────────────────────────────────────────
  "box-truck-insurance": {
    src: "https://images.unsplash.com/photo-1577899563868-2213568933a5?auto=format&fit=crop&w=1920&q=80",
    alt: "White box truck driving on a city road",
  },
  "bucket-truck-insurance": {
    src: "https://images.unsplash.com/photo-1699551240178-31650f0a2caa?auto=format&fit=crop&w=1920&q=80",
    alt: "Bucket truck with lineman working on a utility power line",
  },
  "car-carrier-insurance": {
    src: "https://images.unsplash.com/photo-1730514785075-b065c757b653?auto=format&fit=crop&w=1920&q=80",
    alt: "Rollback flatbed tow truck carrying a car on the flatbed",
  },
  "catering-truck-insurance": {
    src: "https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?auto=format&fit=crop&w=1920&q=80",
    alt: "Food truck parked on the side of the road",
  },
  "cement-mixer-truck-insurance": {
    src: "https://images.unsplash.com/photo-1751221703362-4cc62ecb2f8f?auto=format&fit=crop&w=1920&q=80",
    alt: "Cement mixer truck on a construction site",
  },
  "delivery-van-insurance": {
    src: "https://images.unsplash.com/photo-1535655685871-dc8158ff167e?auto=format&fit=crop&w=1920&q=80",
    alt: "White Mercedes-Benz Sprinter cargo delivery van parked at sunset",
  },
  "flatbed-truck-insurance": {
    src: "https://images.unsplash.com/photo-1763515188616-b72e33065350?auto=format&fit=crop&w=1920&q=80",
    alt: "Flatbed truck loaded with lumber logs on a dirt road",
  },
  "hotshot-truck-insurance": {
    src: "https://images.unsplash.com/photo-1722300556137-7491dd09c8ce?auto=format&fit=crop&w=1920&q=80",
    alt: "White pickup truck parked beside a trailer in a wooded setting",
  },
  "pump-truck-insurance": {
    src: "https://images.unsplash.com/photo-1759686411148-d74caf422386?auto=format&fit=crop&w=1920&q=80",
    alt: "Concrete pump truck with extended boom pouring cement at a construction site",
  },
  "refrigerated-truck-insurance": {
    src: "https://images.unsplash.com/photo-1711942179703-fce59b6afac6?auto=format&fit=crop&w=1920&q=80",
    alt: "Semi truck with refrigerated trailer unit driving down a street",
  },
  "stake-body-truck-insurance": {
    src: "https://images.unsplash.com/photo-1548401412-2883ad45d223?auto=format&fit=crop&w=1920&q=80",
    alt: "Blue and orange stake body truck with side stakes in a field",
  },
  "tank-truck-insurance": {
    src: "https://images.unsplash.com/photo-1708577790138-39dd3228ab72?auto=format&fit=crop&w=1920&q=80",
    alt: "Large tanker truck parked on the side of the road",
  },
  "truck-tractor-insurance": {
    src: "https://images.unsplash.com/photo-1778016187983-c3a44eee1f46?auto=format&fit=crop&w=1920&q=80",
    alt: "Red semi truck tractor cab without trailer in a yard",
  },
  "front-loader-truck-insurance": {
    src: "https://images.unsplash.com/photo-1759240808758-97556b89e6e2?auto=format&fit=crop&w=1920&q=80",
    alt: "Garbage truck lifting a dumpster with its front loader arms on a city street",
  },
  "garbage-truck-insurance": {
    src: "https://images.pexels.com/photos/33834437/pexels-photo-33834437.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "White refuse collection garbage truck parked on an urban street",
  },
  "roll-off-truck-insurance": {
    src: "https://images.unsplash.com/photo-1759240808758-97556b89e6e2?auto=format&fit=crop&w=1920&q=80",
    alt: "Roll-off truck lifting a dumpster container on a city street",
  },

  // ─── Vehicles: Trailers ───────────────────────────────────────────────────
  "auto-hauler-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1720014432727-3ec661c27568?fm=jpg&q=80&w=1920",
    alt: "Car hauler trailer loaded with vehicles on a highway",
  },
  "dump-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1761479132901-45bdd8823b3e?fm=jpg&q=80&w=1920",
    alt: "White semi-truck with dump trailer parked at a construction site",
  },
  "bulk-commodity-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1763067036683-00e8491af467?fm=jpg&q=80&w=1920",
    alt: "Semi trucks parked at a grain silo for bulk commodity hauling",
  },
  "concession-trailer-insurance": {
    src: "https://images.pexels.com/photos/28872446/pexels-photo-28872446.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Food concession trailer parked at a roadside location",
  },
  "dry-freight-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f?fm=jpg&q=80&w=1920",
    alt: "Semi truck with dry van freight trailer on an interstate highway",
  },
  "transfer-dump-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1637781478045-20456aacfba4?fm=jpg&q=80&w=1920",
    alt: "Corn being transferred from a grain dump trailer into a semi trailer",
  },
  "pole-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1763515188616-b72e33065350?fm=jpg&q=80&w=1920",
    alt: "Flatbed trailer loaded with long logs on a dirt road",
  },
  "refrigerated-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1711942179703-fce59b6afac6?fm=jpg&q=80&w=1920",
    alt: "Refrigerated reefer semi trailer with Thermo King unit",
  },
  "tank-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1776855273016-1b6d93bba280?fm=jpg&q=80&w=1920",
    alt: "White and green tanker trailer truck parked outdoors",
  },
  "rag-top-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1703130931625-832a67f5ed99?fm=jpg&q=80&w=1920",
    alt: "Semi truck with open flatbed trailer driving on a highway",
  },
  "flatbed-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1703130931625-832a67f5ed99?auto=format&fit=crop&w=1920&q=80",
    alt: "Semi truck with flatbed trailer driving on a highway",
  },
  "gooseneck-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1772852336286-933f5b460e33?auto=format&fit=crop&w=1920&q=80",
    alt: "Yellow dump truck towing a gooseneck-style trailer",
  },
  "horse-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1736542320629-185c7c33c8dd?auto=format&fit=crop&w=1920&q=80",
    alt: "Horse trailer parked in the snow",
  },
  "livestock-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1648837606835-0005a6e97410?auto=format&fit=crop&w=1920&q=80",
    alt: "Cattle livestock transport truck with cow in trailer",
  },
  "logging-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1763515188616-b72e33065350?auto=format&fit=crop&w=1920&q=80",
    alt: "Flatbed logging truck loaded with timber on a dirt road",
  },
  "lowboy-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1709735133497-bbead76953a9?auto=format&fit=crop&w=1920&q=80",
    alt: "Lowboy trailer hauling heavy construction equipment on a highway",
  },
  "tilt-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1698392125709-f0f6d0873b37?auto=format&fit=crop&w=1920&q=80",
    alt: "Red sports car loaded on a tilt deck trailer for transport",
  },
  "commercial-travel-trailer-insurance": {
    src: "https://images.pexels.com/photos/28580421/pexels-photo-28580421.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Illuminated commercial RV travel trailer at a night camping scene",
  },
  "utility-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1722300556137-7491dd09c8ce?auto=format&fit=crop&w=1920&q=80",
    alt: "White pickup truck with utility trailer in a commercial setting",
  },
  "large-utility-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1756888218644-aeb9c044e1df?auto=format&fit=crop&w=1920&q=80",
    alt: "Long multi-axle flatbed utility trailer with multiple wheels",
  },
  "wedge-trailer-insurance": {
    src: "https://images.unsplash.com/photo-1761993600321-757e086491c0?auto=format&fit=crop&w=1920&q=80",
    alt: "Two cars loaded on a car hauler trailer truck",
  },

  // ─── Vehicles: Cars & Vans ────────────────────────────────────────────────
  "business-passenger-car-insurance": {
    src: "https://images.unsplash.com/photo-1780296269675-169390638617?auto=format&fit=crop&w=1920&q=80",
    alt: "Black luxury business sedan parked in an urban setting",
  },
  "cargo-van-insurance": {
    src: "https://images.unsplash.com/photo-1768389533475-edc8b2bb9c7d?auto=format&fit=crop&w=1920&q=80",
    alt: "Silver cargo van parked outdoors",
  },
  "hearse-insurance": {
    src: "https://images.unsplash.com/photo-1638964534679-f48761cb7765?auto=format&fit=crop&w=1920&q=80",
    alt: "Black Mercedes-Benz hearse funeral vehicle",
  },
  "limousine-insurance": {
    src: "https://images.unsplash.com/photo-1749318398976-5a9b45307aae?auto=format&fit=crop&w=1920&q=80",
    alt: "Black limousine parked on a city street",
  },
  "commercial-minivan-insurance": {
    src: "https://images.unsplash.com/photo-1776774853502-11e7a46252d8?auto=format&fit=crop&w=1920&q=80",
    alt: "White minivan parked in a commercial lot",
  },
  "passenger-van-insurance": {
    src: "https://images.unsplash.com/photo-1770180902343-955630d9f678?auto=format&fit=crop&w=1920&q=80",
    alt: "White passenger van driving on a city street",
  },
  "commercial-pickup-insurance": {
    src: "https://images.unsplash.com/photo-1561200717-b7afef4de874?auto=format&fit=crop&w=1920&q=80",
    alt: "White crew cab commercial pickup truck",
  },
  "commercial-suv-insurance": {
    src: "https://images.unsplash.com/photo-1771211441450-431272859016?auto=format&fit=crop&w=1920&q=80",
    alt: "White commercial SUV with business branding parked by a wall",
  },
  "wheelchair-van-insurance": {
    src: "https://images.unsplash.com/photo-1633466154054-399bf16156a2?auto=format&fit=crop&w=1920&q=80",
    alt: "Wheelchair user next to an accessible adapted vehicle",
  },
  "luxury-suv-insurance": {
    src: "https://images.unsplash.com/photo-1767749995462-9fe0890d5960?auto=format&fit=crop&w=1920&q=80",
    alt: "Black Cadillac Escalade luxury SUV parked in a lot",
  },
  "commercial-motorhome-insurance": {
    src: "https://images.unsplash.com/photo-1572368834884-8f400ca7d147?auto=format&fit=crop&w=1920&q=80",
    alt: "White Class C motorhome driving on a scenic road",
  },

  // ─── Vehicles: Buses ────────────────────────────────────────────────────────
  "bus-insurance": {
    src: "https://images.unsplash.com/photo-1759882608768-168d4c3a91c2?auto=format&fit=crop&w=1920&q=80",
    alt: "Gray charter tour bus parked on a road",
  },
  "wheelchair-bus-insurance": {
    src: "https://images.unsplash.com/photo-1772910100558-cdd945d4b042?auto=format&fit=crop&w=1920&q=80",
    alt: "Green public transit bus with wheelchair accessible entrance sign",
  },
  "school-bus-insurance": {
    src: "https://images.unsplash.com/photo-1602248406547-bda7af9fb7e9?auto=format&fit=crop&w=1920&q=80",
    alt: "Yellow school bus on a road during daytime",
  },

  // ─── Locations ──────────────────────────────────────────────────────────────
  "fairfax-va": {
    src: "https://images.unsplash.com/photo-1656918418546-a14236806c09?auto=format&fit=crop&w=1920&q=80",
    alt: "Great Falls Park river and forest in Fairfax County, Virginia",
  },
  "arlington-va": {
    src: "https://images.unsplash.com/photo-1762460099595-8b49a090dd9f?auto=format&fit=crop&w=1920&q=80",
    alt: "Washington DC skyline and Potomac River viewed from Arlington area",
  },
  "chantilly-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Aerial view of suburban Northern Virginia neighborhood with tree-lined streets",
  },
  "stafford-va": {
    src: "https://images.unsplash.com/photo-1571800325137-ab3dddb48308?auto=format&fit=crop&w=1920&q=80",
    alt: "Scenic Virginia river valley with autumn trees near Stafford County",
  },
  "fredericksburg-va": {
    src: "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?auto=format&fit=crop&w=1920&q=80",
    alt: "Historic brick storefronts along a charming downtown main street",
  },
  "winchester-va": {
    src: "https://images.unsplash.com/photo-1697028262529-74efa0627a02?auto=format&fit=crop&w=1920&q=80",
    alt: "Shenandoah Valley mountain vista with rolling hills near Winchester, Virginia",
  },
  "richmond-va": {
    src: "https://images.unsplash.com/photo-1575474007145-7bc306677fa4?auto=format&fit=crop&w=1920&q=80",
    alt: "Richmond, Virginia downtown skyline along the James River waterfront",
  },
  "alexandria-va": {
    src: "https://images.unsplash.com/photo-1762460099595-8b49a090dd9f?auto=format&fit=crop&w=1920&q=80",
    alt: "Potomac River waterfront and urban skyline near Alexandria, Virginia",
  },
  "reston-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban Northern Virginia neighborhood with tree-lined streets near Reston",
  },
  "ashburn-va": {
    src: "https://images.unsplash.com/photo-1597974380476-fbf652dfe188?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction site with commercial trucks near Ashburn, Virginia",
  },
  "leesburg-va": {
    src: "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?auto=format&fit=crop&w=1920&q=80",
    alt: "Historic downtown main street in Leesburg, Loudoun County, Virginia",
  },
  "manassas-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban commercial corridor in Manassas, Prince William County, Virginia",
  },
  "woodbridge-va": {
    src: "https://images.unsplash.com/photo-1571800325137-ab3dddb48308?auto=format&fit=crop&w=1920&q=80",
    alt: "Scenic river valley landscape near Woodbridge, Prince William County, Virginia",
  },
  "henrico-va": {
    src: "https://images.unsplash.com/photo-1575474007145-7bc306677fa4?auto=format&fit=crop&w=1920&q=80",
    alt: "Richmond metro skyline visible from Henrico County, Virginia",
  },
  "glen-allen-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban neighborhood in Glen Allen, Henrico County, Virginia",
  },
  "short-pump-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial retail corridor in Short Pump, Richmond West End, Virginia",
  },
  "mechanicsville-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban residential area in Mechanicsville, Hanover County, Virginia",
  },
  "spotsylvania-va": {
    src: "https://images.unsplash.com/photo-1571800325137-ab3dddb48308?auto=format&fit=crop&w=1920&q=80",
    alt: "Rolling countryside along the I-95 corridor in Spotsylvania County, Virginia",
  },
  "ashland-va": {
    src: "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?auto=format&fit=crop&w=1920&q=80",
    alt: "Small town main street in Ashland, Hanover County, Virginia",
  },
  "herndon-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban office park in Herndon along the Dulles Tech Corridor, Virginia",
  },
  "sterling-va": {
    src: "https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial fleet vehicles parked near Sterling, Loudoun County, Virginia",
  },
  "tysons-va": {
    src: "https://images.unsplash.com/photo-1762460099595-8b49a090dd9f?auto=format&fit=crop&w=1920&q=80",
    alt: "Urban commercial skyline in Tysons Corner, Fairfax County, Virginia",
  },
  "mclean-va": {
    src: "https://images.unsplash.com/photo-1656918418546-a14236806c09?auto=format&fit=crop&w=1920&q=80",
    alt: "Tree-lined suburban road in McLean, Fairfax County, Virginia",
  },
  "springfield-va": {
    src: "https://images.unsplash.com/photo-1779583074717-e60fa13131ce?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial truck on a Virginia highway near the Springfield interchange",
  },
  "centreville-va": {
    src: "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?auto=format&fit=crop&w=1920&q=80",
    alt: "Suburban neighborhood in Centreville, western Fairfax County, Virginia",
  },

  // ─── Resources ──────────────────────────────────────────────────────────────
  "virginia-commercial-auto-insurance-guide": {
    src: "https://images.unsplash.com/photo-1779583074717-e60fa13131ce?auto=format&fit=crop&w=2400&q=80",
    alt: "Commercial semi truck driving on an open highway",
  },
  "how-dump-truck-insurance-works": {
    src: "https://images.unsplash.com/photo-1778066994998-97f74a5bf901?w=1920&q=80&auto=format&fit=crop",
    alt: "Yellow excavator loading dirt into a dump truck at a construction job site",
  },
  "tow-truck-insurance-requirements": {
    src: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1920&q=80&auto=format&fit=crop",
    alt: "Flatbed tow truck carrying a vehicle on the roadside",
  },
  "commercial-fleet-insurance-guide": {
    src: "https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?auto=format&fit=crop&w=2400&q=80",
    alt: "Row of semi trucks parked in a commercial fleet lot",
  },
  "uber-black-insurance-requirements": {
    src: "https://images.unsplash.com/photo-1764090317825-9b76e437c8d8?auto=format&fit=crop&w=2400&q=80",
    alt: "Black luxury sedan parked roadside for executive rideshare service",
  },
};

const FALLBACK: HeroImage = {
  src: "/images/hero-banner.png",
  alt: "Commercial truck on a Virginia highway",
};

export function getHeroImage(slug: string): HeroImage {
  return heroImages[slug] ?? FALLBACK;
}
