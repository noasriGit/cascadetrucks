# SEO Metadata & Image Accessibility Audit Report

**Date:** 2026-07-23  
**Scope:** Cascade Truck Insurance (Next.js App Router)

## Summary

| Metric | Result |
|--------|--------|
| Routes with meta descriptions | 110+ (all had descriptions; none missing, none exact duplicates) |
| Meta descriptions rewritten to 140–160 chars | ~90 (over-length) + dedicated `metaDescription` fields added |
| Visible copy changed | No (`shortDescription` / `excerpt` / `bio` preserved for UI, sitemap HTML, JSON-LD) |
| Images with missing `alt` attributes | 0 |
| Decorative empty alts preserved | Logos, splash, heroes, parallax backgrounds |
| Author photos updated | 2 instances (`alt={author.name}`) |
| Location OG image alts improved | 25 (aligned with hero-image scene descriptions) |

## Approach

Added a dedicated `metaDescription` field on Service, VehicleType, Location, Resource, and Author types. `generateMetadata` now uses `metaDescription` so SEO length can be optimized without changing on-page copy.

## Files modified

### Types & helpers
- `lib/types.ts` — added `metaDescription` to Author, Service, VehicleType, Location, Resource
- `lib/metadata.ts` — unchanged (already accepts description)

### Data
- `data/site.ts` — shortened home `description` (metadata-only)
- `data/services.ts` — 12 `metaDescription` fields
- `data/vehicles.ts` — 51 `metaDescription` fields
- `data/locations.ts` — 25 `metaDescription` fields + `locationImageAlt()` for OG alts
- `data/resources.ts` — 5 `metaDescription` fields
- `data/authors.ts` — 1 `metaDescription` field

### App routes (metadata wiring)
- `app/coverage/[slug]/page.tsx`
- `app/vehicles/[slug]/page.tsx`
- `app/locations/[city]/page.tsx`
- `app/resources/[slug]/page.tsx`
- `app/authors/[id]/page.tsx`
- `app/about/page.tsx`
- `app/vehicles/page.tsx`

### Image accessibility
- `components/marketing/AuthorBio.tsx`
- `app/authors/[id]/page.tsx`

### Report
- `SEO-A11Y-AUDIT-REPORT.md` (this file)

## Static / hub meta descriptions

| Route | Before | After | Notes |
|-------|-------:|------:|-------|
| `/` | 181 | 150 | Updated |
| `/about` | 175 | 152 | Updated |
| `/vehicles` | 179 | 153 | Updated |
| `/authors/cascade-commercial-team` | 560 | 154 | Updated |

### Details

### `/`
- **Original** (181): Cascade Truck Insurance helps Virginia businesses insure dump trucks, tow trucks, contractor vehicles, and commercial fleets. Get fast quotes from licensed advisors in Manassas, VA.
- **Updated** (150): Cascade Truck Insurance helps Virginia businesses insure dump trucks, tow trucks, contractor vehicles, and fleets. Fast quotes from Manassas advisors.

### `/about`
- **Original** (175): Cascade Truck Insurance is the commercial vehicle insurance division of Cascade Insurance Group, serving Virginia trucking and commercial vehicle businesses from Manassas, VA.
- **Updated** (152): Cascade Truck Insurance is the commercial vehicle division of Cascade Insurance Group, serving Virginia trucking and fleet businesses from Manassas, VA.

### `/vehicles`
- **Original** (179): Browse all commercial vehicle types insured by Cascade Truck Insurance in Virginia, trucks, trailers, vans, buses, and debris removal vehicles. Get a quote from licensed advisors.
- **Updated** (153): Browse commercial vehicle types insured by Cascade Truck Insurance in Virginia: trucks, trailers, vans, buses, and debris removal. Request a quote today.

### `/authors/cascade-commercial-team`
- **Original** (560): The Cascade Truck Insurance team is the commercial lines division of Cascade Insurance Group, an independent agency based in Manassas, Virginia. Our licensed advisors place commercial auto, trucking, and fleet coverage for Virginia operators every day, working across multiple carrier partners to match dump truck, tow truck, contractor, and livery businesses with the right protection. The guides we publish reflect day-to-day experience with Virginia DMV requirements, FMCSA filings, and the coverages that keep commercial vehicles compliant and on the road.
- **Updated** (154): Meet the Cascade Truck Insurance commercial lines team in Manassas, VA. Licensed advisors placing trucking, fleet, and commercial auto coverage statewide.


## Coverage services (`/coverage/[slug]`)

| Route | Before | After | Notes |
|-------|-------:|------:|-------|
| `/coverage/dump-truck-insurance` | 171 | 142 | Updated |
| `/coverage/tow-truck-insurance` | 182 | 147 | Updated |
| `/coverage/semi-truck-insurance` | 177 | 147 | Updated |
| `/coverage/contractor-vehicle-insurance` | 175 | 145 | Updated |
| `/coverage/plumbing-vehicle-insurance` | 170 | 140 | Updated |
| `/coverage/hvac-vehicle-insurance` | 167 | 144 | Updated |
| `/coverage/landscaping-vehicle-insurance` | 170 | 140 | Updated |
| `/coverage/construction-vehicle-insurance` | 178 | 148 | Updated |
| `/coverage/commercial-fleet-insurance` | 189 | 147 | Updated |
| `/coverage/uber-black-insurance` | 153 | 153 | Preserved (already in range / new field) |
| `/coverage/business-auto-insurance` | 227 | 142 | Updated |
| `/coverage/commercial-auto-insurance` | 172 | 142 | Updated |

### Details

### `/coverage/dump-truck-insurance`
- **Original** (171): Dump truck insurance for Virginia operators covering commercial auto liability, physical damage, and motor truck cargo. Fast quotes from licensed advisors in Manassas, VA.
- **Updated** (142): Dump truck insurance for Virginia operators covering commercial auto liability, physical damage, and motor truck cargo. Fast quotes available.

### `/coverage/tow-truck-insurance`
- **Original** (182): Tow truck insurance for Virginia operators, including on-hook and garagekeepers coverage for light, medium, and heavy-duty towing. Fast quotes from licensed advisors in Manassas, VA.
- **Updated** (147): Tow truck insurance for Virginia operators, including on-hook and garagekeepers coverage for light, medium, and heavy-duty towing fleets statewide.

### `/coverage/semi-truck-insurance`
- **Original** (177): Semi truck insurance for Virginia owner-operators and motor carriers. Primary liability, physical damage, cargo, and FMCSA filing support from licensed advisors in Manassas, VA.
- **Updated** (147): Semi truck insurance for Virginia owner-operators and motor carriers. Primary liability, physical damage, cargo coverage, and FMCSA filing support.

### `/coverage/contractor-vehicle-insurance`
- **Original** (175): Contractor vehicle insurance for Virginia trades. Commercial auto liability plus tools and equipment coverage for work trucks and vans, from licensed advisors in Manassas, VA.
- **Updated** (145): Contractor vehicle insurance for Virginia trades. Commercial auto liability plus tools and equipment coverage for work trucks and vans statewide.

### `/coverage/plumbing-vehicle-insurance`
- **Original** (170): Plumbing van insurance for Virginia contractors. Commercial auto liability plus tools and equipment coverage for service vehicles, from licensed advisors in Manassas, VA.
- **Updated** (140): Plumbing van insurance for Virginia contractors. Commercial auto liability plus tools and equipment coverage for service vehicles statewide.

### `/coverage/hvac-vehicle-insurance`
- **Original** (167): HVAC vehicle insurance for Virginia contractors. Commercial auto liability plus equipment coverage for service trucks and vans, from licensed advisors in Manassas, VA.
- **Updated** (144): HVAC vehicle insurance for Virginia contractors. Commercial auto liability plus equipment coverage for service trucks and vans across the state.

### `/coverage/landscaping-vehicle-insurance`
- **Original** (170): Landscaping vehicle insurance for Virginia businesses. Truck, trailer, and equipment coverage for lawn care and landscaping crews, from licensed advisors in Manassas, VA.
- **Updated** (140): Landscaping vehicle insurance for Virginia businesses. Truck, trailer, and equipment coverage for lawn care and landscaping crews statewide.

### `/coverage/construction-vehicle-insurance`
- **Original** (178): Construction vehicle insurance for Virginia firms. Liability, physical damage, mobile equipment, and cargo coverage for job-site vehicles, from licensed advisors in Manassas, VA.
- **Updated** (148): Construction vehicle insurance for Virginia firms. Liability, physical damage, mobile equipment, and cargo coverage for job-site vehicles statewide.

### `/coverage/commercial-fleet-insurance`
- **Original** (189): Commercial fleet insurance for Virginia businesses running two or more vehicles. Combined coverage, multi-vehicle pricing, and safety program support from licensed advisors in Manassas, VA.
- **Updated** (147): Commercial fleet insurance for Virginia businesses with two or more vehicles. Combined coverage, multi-vehicle pricing, and safety program support.

### `/coverage/uber-black-insurance`
- **Status:** Preserved (already 153 chars)
- **Meta:** Uber Black insurance for Virginia TNC drivers. Commercial coverage that meets Virginia and platform requirements, from licensed advisors in Manassas, VA.

### `/coverage/business-auto-insurance`
- **Original** (227): Business auto insurance for Virginia companies using cars, vans, pickups, SUVs, and box trucks for everyday operations. Coverage for owned vehicles, hired autos, and employee-driven units from licensed advisors in Manassas, VA.
- **Updated** (142): Business auto insurance for Virginia companies using cars, vans, pickups, and trucks. Coverage for owned, hired, and employee-driven vehicles.

### `/coverage/commercial-auto-insurance`
- **Original** (172): Commercial auto insurance for Virginia businesses. Liability, physical damage, and hired and non-owned coverage for trucks and vans, from licensed advisors in Manassas, VA.
- **Updated** (142): Commercial auto insurance for Virginia businesses. Liability, physical damage, and hired and non-owned coverage for trucks and vans statewide.


## Vehicles (`/vehicles/[slug]`)

| Route | Before | After | Notes |
|-------|-------:|------:|-------|
| `/vehicles/box-truck-insurance` | 213 | 149 | Updated |
| `/vehicles/bucket-truck-insurance` | 199 | 149 | Updated |
| `/vehicles/car-carrier-insurance` | 224 | 140 | Updated |
| `/vehicles/catering-truck-insurance` | 195 | 140 | Updated |
| `/vehicles/cement-mixer-truck-insurance` | 200 | 143 | Updated |
| `/vehicles/delivery-van-insurance` | 220 | 149 | Updated |
| `/vehicles/flatbed-truck-insurance` | 208 | 149 | Updated |
| `/vehicles/hotshot-truck-insurance` | 241 | 142 | Updated |
| `/vehicles/pump-truck-insurance` | 213 | 141 | Updated |
| `/vehicles/refrigerated-truck-insurance` | 221 | 149 | Updated |
| `/vehicles/stake-body-truck-insurance` | 204 | 143 | Updated |
| `/vehicles/tank-truck-insurance` | 207 | 145 | Updated |
| `/vehicles/truck-tractor-insurance` | 196 | 145 | Updated |
| `/vehicles/auto-hauler-trailer-insurance` | 176 | 147 | Updated |
| `/vehicles/dump-trailer-insurance` | 222 | 142 | Updated |
| `/vehicles/bulk-commodity-trailer-insurance` | 230 | 145 | Updated |
| `/vehicles/concession-trailer-insurance` | 246 | 146 | Updated |
| `/vehicles/dry-freight-trailer-insurance` | 238 | 142 | Updated |
| `/vehicles/transfer-dump-trailer-insurance` | 211 | 149 | Updated |
| `/vehicles/pole-trailer-insurance` | 211 | 146 | Updated |
| `/vehicles/refrigerated-trailer-insurance` | 252 | 146 | Updated |
| `/vehicles/tank-trailer-insurance` | 195 | 145 | Updated |
| `/vehicles/rag-top-trailer-insurance` | 213 | 147 | Updated |
| `/vehicles/flatbed-trailer-insurance` | 218 | 150 | Updated |
| `/vehicles/gooseneck-trailer-insurance` | 209 | 142 | Updated |
| `/vehicles/horse-trailer-insurance` | 231 | 148 | Updated |
| `/vehicles/livestock-trailer-insurance` | 190 | 145 | Updated |
| `/vehicles/logging-trailer-insurance` | 195 | 147 | Updated |
| `/vehicles/lowboy-trailer-insurance` | 225 | 144 | Updated |
| `/vehicles/tilt-trailer-insurance` | 236 | 143 | Updated |
| `/vehicles/commercial-travel-trailer-insurance` | 222 | 140 | Updated |
| `/vehicles/utility-trailer-insurance` | 214 | 147 | Updated |
| `/vehicles/large-utility-trailer-insurance` | 248 | 146 | Updated |
| `/vehicles/wedge-trailer-insurance` | 218 | 148 | Updated |
| `/vehicles/business-passenger-car-insurance` | 226 | 145 | Updated |
| `/vehicles/cargo-van-insurance` | 194 | 148 | Updated |
| `/vehicles/hearse-insurance` | 211 | 148 | Updated |
| `/vehicles/limousine-insurance` | 209 | 142 | Updated |
| `/vehicles/commercial-minivan-insurance` | 235 | 149 | Updated |
| `/vehicles/passenger-van-insurance` | 230 | 144 | Updated |
| `/vehicles/commercial-pickup-insurance` | 215 | 144 | Updated |
| `/vehicles/commercial-suv-insurance` | 235 | 144 | Updated |
| `/vehicles/wheelchair-van-insurance` | 255 | 145 | Updated |
| `/vehicles/luxury-suv-insurance` | 233 | 147 | Updated |
| `/vehicles/commercial-motorhome-insurance` | 216 | 140 | Updated |
| `/vehicles/bus-insurance` | 218 | 146 | Updated |
| `/vehicles/wheelchair-bus-insurance` | 238 | 148 | Updated |
| `/vehicles/school-bus-insurance` | 219 | 140 | Updated |
| `/vehicles/front-loader-truck-insurance` | 217 | 145 | Updated |
| `/vehicles/garbage-truck-insurance` | 233 | 146 | Updated |
| `/vehicles/roll-off-truck-insurance` | 228 | 140 | Updated |

### Details

### `/vehicles/box-truck-insurance`
- **Original** (213): Box truck insurance for Virginia businesses hauling goods, making deliveries, or moving equipment. Commercial auto liability, physical damage, and motor truck cargo coverage from licensed advisors in Manassas, VA.
- **Updated** (149): Box truck insurance for Virginia businesses hauling goods or making deliveries. Liability, physical damage, and motor truck cargo coverage statewide.

### `/vehicles/bucket-truck-insurance`
- **Original** (199): Bucket truck insurance for Virginia utility, tree service, and telecom operators. Commercial auto liability, aerial work platform coverage, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (149): Bucket truck insurance for Virginia utility, tree service, and telecom operators. Liability, aerial platform, and physical damage coverage statewide.

### `/vehicles/car-carrier-insurance`
- **Original** (224): Car carrier and rollback insurance for Virginia auto haulers, towing companies, and dealership transport. Commercial auto liability, on-hook coverage, and garagekeepers legal liability from licensed advisors in Manassas, VA.
- **Updated** (140): Car carrier and rollback insurance for Virginia auto haulers and towing companies. Liability, on-hook, and garagekeepers coverage available.

### `/vehicles/catering-truck-insurance`
- **Original** (195): Catering truck and food truck insurance for Virginia food service operators. Commercial auto liability, equipment breakdown, and product liability coverage from licensed advisors in Manassas, VA.
- **Updated** (140): Catering and food truck insurance for Virginia food service operators. Commercial auto, equipment breakdown, and product liability coverage.

### `/vehicles/cement-mixer-truck-insurance`
- **Original** (200): Cement mixer truck insurance for Virginia concrete contractors and ready-mix haulers. Commercial auto liability, physical damage, and motor truck cargo coverage from licensed advisors in Manassas, VA.
- **Updated** (143): Cement mixer truck insurance for Virginia concrete contractors and ready-mix haulers. Liability, physical damage, and cargo coverage statewide.

### `/vehicles/delivery-van-insurance`
- **Original** (220): Delivery van and step van insurance for Virginia last-mile carriers, route drivers, and service technicians. Commercial auto liability, cargo coverage, and hired and non-owned auto from licensed advisors in Manassas, VA.
- **Updated** (149): Delivery and step van insurance for Virginia last-mile carriers and route drivers. Liability, cargo, and hired and non-owned auto coverage statewide.

### `/vehicles/flatbed-truck-insurance`
- **Original** (208): Flatbed truck insurance for Virginia carriers hauling steel, lumber, machinery, and oversized freight. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (149): Flatbed truck insurance for Virginia carriers hauling steel, lumber, and oversized freight. Liability, cargo, and physical damage coverage statewide.

### `/vehicles/hotshot-truck-insurance`
- **Original** (241): Hotshot truck insurance for Virginia owner-operators using a pickup with a fifth wheel or gooseneck trailer for expedited freight. Commercial auto liability, motor truck cargo, and FMCSA filing support from licensed advisors in Manassas, VA.
- **Updated** (142): Hotshot truck insurance for Virginia owner-operators running pickup and trailer expedited freight. Liability, cargo, and FMCSA filing support.

### `/vehicles/pump-truck-insurance`
- **Original** (213): Pump truck insurance for Virginia concrete pump operators and grout pump contractors. Commercial auto liability, equipment coverage, and third-party property damage coverage from licensed advisors in Manassas, VA.
- **Updated** (141): Pump truck insurance for Virginia concrete and grout pump contractors. Commercial auto liability, equipment, and third-party damage coverage.

### `/vehicles/refrigerated-truck-insurance`
- **Original** (221): Refrigerated truck insurance for Virginia food, pharmaceutical, and temperature-sensitive cargo carriers. Commercial auto liability, reefer breakdown coverage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (149): Refrigerated truck insurance for Virginia food and pharma carriers. Liability, reefer breakdown coverage, and motor truck cargo protection statewide.

### `/vehicles/stake-body-truck-insurance`
- **Original** (204): Stake body truck insurance for Virginia landscapers, nurseries, contractors, and material haulers. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (143): Stake body truck insurance for Virginia landscapers, nurseries, and material haulers. Liability, physical damage, and cargo coverage statewide.

### `/vehicles/tank-truck-insurance`
- **Original** (207): Tank truck insurance for Virginia fuel haulers, liquid waste carriers, and water transport operators. Commercial auto liability, FMCSA filings, and hazmat endorsements from licensed advisors in Manassas, VA.
- **Updated** (145): Tank truck insurance for Virginia fuel, liquid waste, and water transport operators. Liability, FMCSA filings, and hazmat endorsements available.

### `/vehicles/truck-tractor-insurance`
- **Original** (196): Truck tractor and semi-truck insurance for Virginia owner-operators and motor carriers. Commercial auto liability, physical damage, and FMCSA filing support from licensed advisors in Manassas, VA.
- **Updated** (145): Truck tractor and semi insurance for Virginia owner-operators and motor carriers. Liability, physical damage, and FMCSA filing support statewide.

### `/vehicles/auto-hauler-trailer-insurance`
- **Original** (176): Auto hauler trailer insurance for Virginia multi-car transport operators. On-hook coverage, trailer physical damage, and FMCSA liability from licensed advisors in Manassas, VA.
- **Updated** (147): Auto hauler trailer insurance for Virginia multi-car transport operators. On-hook coverage, trailer physical damage, and FMCSA liability statewide.

### `/vehicles/dump-trailer-insurance`
- **Original** (222): Dump trailer insurance for Virginia operators hauling dirt, gravel, and aggregate with bottom or side dump trailers. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (142): Dump trailer insurance for Virginia operators hauling dirt, gravel, and aggregate. Liability, physical damage, and motor truck cargo coverage.

### `/vehicles/bulk-commodity-trailer-insurance`
- **Original** (230): Bulk commodity trailer insurance for Virginia carriers hauling grain, feed, plastic pellets, cement, and dry bulk materials. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (145): Bulk commodity trailer insurance for Virginia carriers hauling grain, feed, cement, and dry bulk. Liability, cargo, and physical damage coverage.

### `/vehicles/concession-trailer-insurance`
- **Original** (246): Concession trailer insurance for Virginia food vendors, fair operators, and mobile catering businesses. Commercial auto liability for the tow vehicle, trailer physical damage, and product liability coverage from licensed advisors in Manassas, VA.
- **Updated** (146): Concession trailer insurance for Virginia food vendors and mobile catering. Tow vehicle liability, trailer damage, and product liability coverage.

### `/vehicles/dry-freight-trailer-insurance`
- **Original** (238): Dry freight trailer insurance for Virginia van trailer operators hauling general merchandise, packaged goods, and palletized freight. Trailer physical damage, motor truck cargo, and FMCSA compliance from licensed advisors in Manassas, VA.
- **Updated** (142): Dry freight trailer insurance for Virginia van trailer operators hauling merchandise and palletized freight. Damage, cargo, and FMCSA support.

### `/vehicles/transfer-dump-trailer-insurance`
- **Original** (211): Transfer dump and dump body trailer insurance for Virginia aggregate haulers and earth-moving operations. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (149): Transfer dump trailer insurance for Virginia aggregate haulers and earth-moving operations. Liability, physical damage, and cargo coverage statewide.

### `/vehicles/pole-trailer-insurance`
- **Original** (211): Pole trailer insurance for Virginia log, pipe, and structural steel haulers. Commercial auto liability, motor truck cargo, and physical damage for long-load configurations from licensed advisors in Manassas, VA.
- **Updated** (146): Pole trailer insurance for Virginia log, pipe, and structural steel haulers. Liability, cargo, and physical damage for long-load setups statewide.

### `/vehicles/refrigerated-trailer-insurance`
- **Original** (252): Refrigerated trailer insurance for Virginia reefer carriers hauling food, pharmaceuticals, and temperature-sensitive freight. Trailer physical damage, motor truck cargo with reefer breakdown, and FMCSA compliance from licensed advisors in Manassas, VA.
- **Updated** (146): Refrigerated trailer insurance for Virginia reefer carriers hauling food and pharmaceuticals. Damage, cargo with reefer breakdown, and FMCSA help.

### `/vehicles/tank-trailer-insurance`
- **Original** (195): Tank trailer insurance for Virginia liquid and dry bulk carriers. Trailer physical damage, motor truck cargo, hazmat endorsements, and FMCSA filing support from licensed advisors in Manassas, VA.
- **Updated** (145): Tank trailer insurance for Virginia liquid and dry bulk carriers. Trailer damage, cargo, hazmat endorsements, and FMCSA filing support statewide.

### `/vehicles/rag-top-trailer-insurance`
- **Original** (213): Rag top trailer insurance for Virginia carriers hauling oversized or tall cargo requiring a roll-open roof. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (147): Rag top trailer insurance for Virginia carriers hauling tall cargo with a roll-open roof. Liability, cargo, and physical damage coverage statewide.

### `/vehicles/flatbed-trailer-insurance`
- **Original** (218): Flatbed trailer insurance for Virginia carriers hauling steel, lumber, equipment, and open-deck freight. Trailer physical damage, motor truck cargo, and commercial auto liability from licensed advisors in Manassas, VA.
- **Updated** (150): Flatbed trailer insurance for Virginia carriers hauling steel, lumber, and open-deck freight. Trailer damage, cargo, and liability coverage statewide.

### `/vehicles/gooseneck-trailer-insurance`
- **Original** (209): Gooseneck trailer insurance for Virginia contractors, equipment dealers, and machinery haulers. Trailer physical damage, motor truck cargo, and commercial auto liability from licensed advisors in Manassas, VA.
- **Updated** (142): Gooseneck trailer insurance for Virginia contractors, equipment dealers, and machinery haulers. Trailer damage, cargo, and liability coverage.

### `/vehicles/horse-trailer-insurance`
- **Original** (231): Horse trailer insurance for Virginia equine operations, trainers, and show competitors. Trailer physical damage, livestock mortality options, and commercial auto liability for the tow vehicle from licensed advisors in Manassas, VA.
- **Updated** (148): Horse trailer insurance for Virginia equine operations and trainers. Trailer physical damage, livestock options, and tow vehicle liability coverage.

### `/vehicles/livestock-trailer-insurance`
- **Original** (190): Livestock trailer insurance for Virginia cattle, hog, and poultry haulers. Commercial auto liability, animal mortality coverage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (145): Livestock trailer insurance for Virginia cattle, hog, and poultry haulers. Liability, animal mortality coverage, and motor truck cargo statewide.

### `/vehicles/logging-trailer-insurance`
- **Original** (195): Logging trailer insurance for Virginia timber haulers and forestry operations. Commercial auto liability, motor truck cargo for timber, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (147): Logging trailer insurance for Virginia timber haulers and forestry operations. Liability, cargo for timber, and physical damage coverage statewide.

### `/vehicles/lowboy-trailer-insurance`
- **Original** (225): Lowboy trailer insurance for Virginia heavy equipment transporters and construction operations. Commercial auto liability, physical damage for the trailer, and high-value cargo coverage from licensed advisors in Manassas, VA.
- **Updated** (144): Lowboy trailer insurance for Virginia heavy equipment transporters. Liability, trailer physical damage, and high-value cargo coverage statewide.

### `/vehicles/tilt-trailer-insurance`
- **Original** (236): Tilt trailer insurance for Virginia equipment dealers, contractors, and landscapers hauling skid steers, mini excavators, and small equipment. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.
- **Updated** (143): Tilt trailer insurance for Virginia contractors and landscapers hauling skid steers and mini excavators. Trailer damage and liability coverage.

### `/vehicles/commercial-travel-trailer-insurance`
- **Original** (222): Commercial travel trailer insurance for Virginia businesses using trailers as mobile offices, command units, or project support. Commercial auto liability and trailer physical damage from licensed advisors in Manassas, VA.
- **Updated** (140): Commercial travel trailer insurance for Virginia businesses using trailers as mobile offices or command units. Liability and trailer damage.

### `/vehicles/utility-trailer-insurance`
- **Original** (214): Small utility trailer insurance for Virginia contractors, landscapers, and tradespeople hauling equipment and materials. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.
- **Updated** (147): Utility trailer insurance for Virginia contractors and landscapers hauling equipment and materials. Trailer physical damage and liability coverage.

### `/vehicles/large-utility-trailer-insurance`
- **Original** (248): Large utility trailer insurance for Virginia contractors, equipment operators, and material haulers needing heavier capacity than a small utility trailer. Trailer physical damage and commercial auto liability from licensed advisors in Manassas, VA.
- **Updated** (146): Large utility trailer insurance for Virginia contractors needing heavier capacity. Trailer physical damage and commercial auto liability coverage.

### `/vehicles/wedge-trailer-insurance`
- **Original** (218): Wedge trailer insurance for Virginia carriers hauling light bulk materials, landscaping supplies, and aggregate. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (148): Wedge trailer insurance for Virginia carriers hauling light bulk materials and landscaping supplies. Liability, cargo, and physical damage coverage.

### `/vehicles/business-passenger-car-insurance`
- **Original** (226): Business use passenger car insurance for Virginia companies with sedans, coupes, and standard cars used for work. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.
- **Updated** (145): Business passenger car insurance for Virginia companies using sedans for work. Liability, physical damage, and hired and non-owned auto coverage.

### `/vehicles/cargo-van-insurance`
- **Original** (194): Cargo van insurance for Virginia service companies, contractors, and delivery operators. Commercial auto liability, motor truck cargo, and physical damage from licensed advisors in Manassas, VA.
- **Updated** (148): Cargo van insurance for Virginia service companies, contractors, and delivery operators. Liability, motor truck cargo, and physical damage coverage.

### `/vehicles/hearse-insurance`
- **Original** (211): Hearse and funeral vehicle insurance for Virginia funeral homes and mortuary services. Commercial auto liability, physical damage, and specialized limousine-class coverage from licensed advisors in Manassas, VA.
- **Updated** (148): Hearse and funeral vehicle insurance for Virginia funeral homes. Commercial auto liability, physical damage, and limousine-class coverage statewide.

### `/vehicles/limousine-insurance`
- **Original** (209): Limousine insurance for Virginia livery operators, limo companies, and black-car services. Commercial livery liability, physical damage, and for-hire compliance coverage from licensed advisors in Manassas, VA.
- **Updated** (142): Limousine insurance for Virginia livery operators and black-car services. Commercial livery liability, physical damage, and for-hire coverage.

### `/vehicles/commercial-minivan-insurance`
- **Original** (235): Commercial minivan insurance for Virginia businesses using minivans for service calls, transportation, and light delivery. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.
- **Updated** (149): Commercial minivan insurance for Virginia businesses using vans for service calls and light delivery. Liability, damage, and HNOA coverage statewide.

### `/vehicles/passenger-van-insurance`
- **Original** (230): Passenger van insurance for Virginia shuttle operators, group transportation services, and businesses transporting employees. Commercial auto liability, physical damage, and for-hire options from licensed advisors in Manassas, VA.
- **Updated** (144): Passenger van insurance for Virginia shuttle operators and employee transport. Commercial auto liability, physical damage, and for-hire options.

### `/vehicles/commercial-pickup-insurance`
- **Original** (215): Commercial pickup truck insurance for Virginia contractors, tradespeople, and businesses using pickups for work. Commercial auto liability, physical damage, and tools coverage from licensed advisors in Manassas, VA.
- **Updated** (144): Commercial pickup insurance for Virginia contractors and tradespeople. Liability, physical damage, and tools coverage for work trucks statewide.

### `/vehicles/commercial-suv-insurance`
- **Original** (235): Commercial SUV insurance for Virginia businesses using sport utility vehicles for client transport, sales, and field work. Commercial auto liability, physical damage, and hired and non-owned auto from licensed advisors in Manassas, VA.
- **Updated** (144): Commercial SUV insurance for Virginia businesses using SUVs for client transport and field work. Liability, damage, and HNOA coverage statewide.

### `/vehicles/wheelchair-van-insurance`
- **Original** (255): Wheelchair van insurance for Virginia NEMT providers, home health agencies, and care facilities transporting mobility-impaired passengers. Commercial auto liability, WAV endorsements, and for-hire transport coverage from licensed advisors in Manassas, VA.
- **Updated** (145): Wheelchair van insurance for Virginia NEMT providers and care facilities. Liability, WAV endorsements, and for-hire transport coverage statewide.

### `/vehicles/luxury-suv-insurance`
- **Original** (233): Commercial luxury SUV insurance for Virginia executive transport, livery services, and high-value company vehicles. Commercial auto liability, agreed value physical damage, and for-hire options from licensed advisors in Manassas, VA.
- **Updated** (147): Luxury SUV insurance for Virginia executive transport and livery services. Liability, agreed value physical damage, and for-hire options statewide.

### `/vehicles/commercial-motorhome-insurance`
- **Original** (216): Commercial motor home insurance for Virginia businesses using RVs as mobile offices, crew accommodations, or promotional vehicles. Commercial auto liability and physical damage from licensed advisors in Manassas, VA.
- **Updated** (140): Commercial motor home insurance for Virginia businesses using RVs as offices or crew housing. Commercial auto liability and physical damage.

### `/vehicles/bus-insurance`
- **Original** (218): Bus insurance for Virginia charter operators, transit companies, and employer shuttle services. Commercial auto liability, for-hire passenger transport coverage, and FMCSA filing from licensed advisors in Manassas, VA.
- **Updated** (146): Bus insurance for Virginia charter operators, transit companies, and employer shuttles. Liability, for-hire passenger coverage, and FMCSA filings.

### `/vehicles/wheelchair-bus-insurance`
- **Original** (238): Wheelchair accessible bus insurance for Virginia NEMT operators, senior care facilities, and accessible transit services. Commercial auto liability, WAV endorsements, and for-hire transport coverage from licensed advisors in Manassas, VA.
- **Updated** (148): Wheelchair bus insurance for Virginia NEMT operators and accessible transit. Liability, WAV endorsements, and for-hire transport coverage statewide.

### `/vehicles/school-bus-insurance`
- **Original** (219): School bus insurance for Virginia private schools, charter operators, and activity transport. Commercial auto liability with per-seat limits, physical damage, and FMCSA compliance from licensed advisors in Manassas, VA.
- **Updated** (140): School bus insurance for Virginia private schools and charter operators. Liability with per-seat limits, physical damage, and FMCSA support.

### `/vehicles/front-loader-truck-insurance`
- **Original** (217): Front loader garbage truck insurance for Virginia waste haulers, municipal contractors, and recycling services. Commercial auto liability, physical damage, and motor truck cargo from licensed advisors in Manassas, VA.
- **Updated** (145): Front loader garbage truck insurance for Virginia waste haulers and recycling services. Liability, physical damage, and cargo coverage statewide.

### `/vehicles/garbage-truck-insurance`
- **Original** (233): Garbage truck insurance for Virginia residential haulers, rear loaders, roll-on/roll-off vehicles, and waste contractors. Commercial auto liability, physical damage, and debris removal coverage from licensed advisors in Manassas, VA.
- **Updated** (146): Garbage truck insurance for Virginia residential haulers and waste contractors. Liability, physical damage, and debris removal coverage statewide.

### `/vehicles/roll-off-truck-insurance`
- **Original** (228): Roll-off truck insurance for Virginia debris haulers, dumpster rental companies, and construction waste contractors. Commercial auto liability, physical damage, and debris removal coverage from licensed advisors in Manassas, VA.
- **Updated** (140): Roll-off truck insurance for Virginia debris haulers and dumpster rental companies. Liability, physical damage, and debris removal coverage.


## Locations (`/locations/[city]`)

| Route | Before | After | Notes |
|-------|-------:|------:|-------|
| `/locations/fairfax-va` | 178 | 145 | Updated |
| `/locations/arlington-va` | 181 | 146 | Updated |
| `/locations/chantilly-va` | 172 | 140 | Updated |
| `/locations/stafford-va` | 177 | 144 | Updated |
| `/locations/fredericksburg-va` | 169 | 142 | Updated |
| `/locations/winchester-va` | 173 | 140 | Updated |
| `/locations/richmond-va` | 164 | 140 | Updated |
| `/locations/alexandria-va` | 168 | 144 | Updated |
| `/locations/reston-va` | 168 | 140 | Updated |
| `/locations/ashburn-va` | 154 | 147 | Updated |
| `/locations/leesburg-va` | 165 | 145 | Updated |
| `/locations/manassas-va` | 167 | 142 | Updated |
| `/locations/woodbridge-va` | 164 | 144 | Updated |
| `/locations/henrico-va` | 160 | 145 | Updated |
| `/locations/glen-allen-va` | 173 | 144 | Updated |
| `/locations/short-pump-va` | 156 | 149 | Updated |
| `/locations/mechanicsville-va` | 154 | 154 | Preserved (already in range / new field) |
| `/locations/spotsylvania-va` | 157 | 144 | Updated |
| `/locations/ashland-va` | 154 | 154 | Preserved (already in range / new field) |
| `/locations/herndon-va` | 140 | 148 | Updated |
| `/locations/sterling-va` | 138 | 149 | Updated |
| `/locations/tysons-va` | 165 | 145 | Updated |
| `/locations/mclean-va` | 166 | 145 | Updated |
| `/locations/springfield-va` | 160 | 142 | Updated |
| `/locations/centreville-va` | 170 | 151 | Updated |

### Details

### `/locations/fairfax-va`
- **Original** (178): Commercial truck and vehicle insurance in Fairfax, VA. Coverage for contractors, fleets, and trucking businesses across Fairfax County, from licensed advisors in nearby Manassas.
- **Updated** (145): Commercial truck and vehicle insurance in Fairfax, VA. Coverage for contractors, fleets, and trucking businesses across Fairfax County statewide.

### `/locations/arlington-va`
- **Original** (181): Commercial vehicle and livery insurance in Arlington, VA. Coverage for Uber Black operators, corporate fleets, and work trucks near Reagan National, from licensed Virginia advisors.
- **Updated** (146): Commercial vehicle and livery insurance in Arlington, VA. Coverage for Uber Black, corporate fleets, and work trucks near Reagan National Airport.

### `/locations/chantilly-va`
- **Original** (172): Commercial vehicle insurance in Chantilly, VA. Coverage for logistics, warehouse, and construction fleets in the Dulles corridor, from licensed advisors in nearby Manassas.
- **Updated** (140): Commercial vehicle insurance in Chantilly, VA. Coverage for logistics, warehouse, and construction fleets working the Dulles corridor daily.

### `/locations/stafford-va`
- **Original** (177): Commercial truck and vehicle insurance in Stafford, VA. Coverage for contractors, construction, and trucking businesses along the I-95 corridor, from licensed Virginia advisors.
- **Updated** (144): Commercial truck and vehicle insurance in Stafford, VA. Coverage for contractors, construction, and trucking businesses along the I-95 corridor.

### `/locations/fredericksburg-va`
- **Original** (169): Commercial vehicle insurance in Fredericksburg, VA. Coverage for contractors, haulers, and fleets working the I-95 and Route 1 corridor, from licensed Virginia advisors.
- **Updated** (142): Commercial vehicle insurance in Fredericksburg, VA. Coverage for contractors, haulers, and fleets working the I-95 and Route 1 corridor daily.

### `/locations/winchester-va`
- **Original** (173): Commercial truck and vehicle insurance in Winchester, VA. Coverage for Shenandoah Valley haulers, fleets, and trades along I-81 and Route 7, from licensed Virginia advisors.
- **Updated** (140): Commercial truck and vehicle insurance in Winchester, VA. Coverage for Shenandoah Valley haulers, fleets, and trades along I-81 and Route 7.

### `/locations/richmond-va`
- **Original** (164): Commercial truck and vehicle insurance in Richmond, VA. Coverage for haulers, contractors, and fleets in the I-95 distribution hub, from licensed Virginia advisors.
- **Updated** (140): Commercial truck and vehicle insurance in Richmond, VA. Coverage for haulers, contractors, and fleets across the busy I-95 distribution hub.

### `/locations/alexandria-va`
- **Original** (168): Commercial vehicle and livery insurance in Alexandria, VA. Coverage for Uber Black operators, delivery fleets, and contractor vans in Old Town and the Potomac corridor.
- **Updated** (144): Commercial vehicle and livery insurance in Alexandria, VA. Coverage for Uber Black, delivery fleets, and contractor vans in Old Town and beyond.

### `/locations/reston-va`
- **Original** (168): Commercial vehicle insurance in Reston, VA. Coverage for tech corridor fleets, contractor vans, and logistics operators near Dulles, from licensed advisors in Manassas.
- **Updated** (140): Commercial vehicle insurance in Reston, VA. Coverage for tech corridor fleets, contractor vans, and logistics operators near Dulles Airport.

### `/locations/ashburn-va`
- **Original** (154): Commercial truck and vehicle insurance in Ashburn, VA. Coverage for logistics, construction, and fleet operators in Loudoun County's data center corridor.
- **Updated** (147): Commercial truck and vehicle insurance in Ashburn, VA. Coverage for logistics, construction, and fleet operators in Loudoun's data center corridor.

### `/locations/leesburg-va`
- **Original** (165): Commercial vehicle insurance in Leesburg, VA. Coverage for contractors, haulers, and fleets in western Loudoun County along Route 7, from licensed Virginia advisors.
- **Updated** (145): Commercial vehicle insurance in Leesburg, VA. Coverage for contractors, haulers, and fleets in western Loudoun County along the Route 7 corridor.

### `/locations/manassas-va`
- **Original** (167): Commercial truck and vehicle insurance in Manassas, VA. Local coverage for Prince William County contractors, fleets, and trucking businesses from our Manassas office.
- **Updated** (142): Commercial truck and vehicle insurance in Manassas, VA. Local coverage for Prince William County contractors, fleets, and trucking businesses.

### `/locations/woodbridge-va`
- **Original** (164): Commercial vehicle insurance in Woodbridge, VA. Coverage for contractors, delivery fleets, and trucking businesses along the I-95 corridor in Prince William County.
- **Updated** (144): Commercial vehicle insurance in Woodbridge, VA. Coverage for contractors, delivery fleets, and trucking businesses along the busy I-95 corridor.

### `/locations/henrico-va`
- **Original** (160): Commercial truck and vehicle insurance in Henrico, VA. Coverage for contractors, fleets, and delivery operators across Henrico County and the Richmond West End.
- **Updated** (145): Commercial truck and vehicle insurance in Henrico, VA. Coverage for contractors, fleets, and delivery operators across Henrico County and beyond.

### `/locations/glen-allen-va`
- **Original** (173): Commercial vehicle insurance in Glen Allen, VA. Coverage for contractors, service fleets, and delivery operators in northern Henrico County, from licensed Virginia advisors.
- **Updated** (144): Commercial vehicle insurance in Glen Allen, VA. Coverage for contractors, service fleets, and delivery operators across northern Henrico County.

### `/locations/short-pump-va`
- **Original** (156): Commercial vehicle insurance in Short Pump, VA. Coverage for contractor vans, delivery fleets, and commercial trucks in Richmond's West End retail corridor.
- **Updated** (149): Commercial vehicle insurance in Short Pump, VA. Coverage for contractor vans, delivery fleets, and commercial trucks in Richmond's West End corridor.

### `/locations/mechanicsville-va`
- **Status:** Preserved (already 154 chars)
- **Meta:** Commercial truck and vehicle insurance in Mechanicsville, VA. Coverage for contractors, builders, and fleet operators in Hanover County north of Richmond.

### `/locations/spotsylvania-va`
- **Original** (157): Commercial vehicle insurance in Spotsylvania, VA. Coverage for contractors, construction fleets, and haulers along the I-95 corridor south of Fredericksburg.
- **Updated** (144): Commercial vehicle insurance in Spotsylvania, VA. Coverage for contractors, construction fleets, and haulers along I-95 south of Fredericksburg.

### `/locations/ashland-va`
- **Status:** Preserved (already 154 chars)
- **Meta:** Commercial vehicle insurance in Ashland, VA. Coverage for contractors, haulers, and small fleets at the I-95 midpoint between Richmond and Fredericksburg.

### `/locations/herndon-va`
- **Original** (140): Commercial vehicle insurance in Herndon, VA. Coverage for contractor vans, logistics fleets, and service trucks in the Dulles Tech Corridor.
- **Updated** (148): Commercial vehicle insurance in Herndon, VA. Coverage for contractor vans, logistics fleets, and service trucks throughout the Dulles Tech Corridor.

### `/locations/sterling-va`
- **Original** (138): Commercial truck and vehicle insurance in Sterling, VA. Coverage for logistics, warehouse, and construction fleets in the Dulles corridor.
- **Updated** (149): Commercial truck and vehicle insurance in Sterling, VA. Coverage for logistics, warehouse, and construction fleets working the Dulles corridor daily.

### `/locations/tysons-va`
- **Original** (165): Commercial vehicle insurance in Tysons, VA. Coverage for corporate fleets, contractor vehicles, and delivery operators in Fairfax County's largest business district.
- **Updated** (145): Commercial vehicle insurance in Tysons, VA. Coverage for corporate fleets, contractor vehicles, and delivery operators in Fairfax's business hub.

### `/locations/mclean-va`
- **Original** (166): Commercial vehicle insurance in McLean, VA. Coverage for corporate fleets, contractor vans, and service vehicles along the Georgetown Pike and Chain Bridge corridors.
- **Updated** (145): Commercial vehicle insurance in McLean, VA. Coverage for corporate fleets, contractor vans, and service vehicles along the Chain Bridge corridor.

### `/locations/springfield-va`
- **Original** (160): Commercial vehicle insurance in Springfield, VA. Coverage for delivery fleets, contractor vans, and commercial trucks at the I-95, I-395, and I-495 interchange.
- **Updated** (142): Commercial vehicle insurance in Springfield, VA. Coverage for delivery fleets, contractor vans, and commercial trucks at the I-95 interchange.

### `/locations/centreville-va`
- **Original** (170): Commercial vehicle insurance in Centreville, VA. Coverage for contractors, logistics fleets, and commercial trucks at the Route 28 and I-66 crossroads in western Fairfax.
- **Updated** (151): Commercial vehicle insurance in Centreville, VA. Coverage for contractors, logistics fleets, and commercial trucks at the Route 28 and I-66 crossroads.


## Resources (`/resources/[slug]`)

| Route | Before | After | Notes |
|-------|-------:|------:|-------|
| `/resources/virginia-commercial-auto-insurance-guide` | 174 | 147 | Updated |
| `/resources/how-dump-truck-insurance-works` | 181 | 143 | Updated |
| `/resources/tow-truck-insurance-requirements` | 176 | 144 | Updated |
| `/resources/commercial-fleet-insurance-guide` | 180 | 142 | Updated |
| `/resources/uber-black-insurance-requirements` | 176 | 143 | Updated |

### Details

### `/resources/virginia-commercial-auto-insurance-guide`
- **Original** (174): A plain-language guide to commercial auto insurance in Virginia, covering minimum liability limits, business-use rules, federal filings, and how to choose the right coverage.
- **Updated** (147): A plain-language guide to Virginia commercial auto insurance: minimum liability limits, business-use rules, federal filings, and choosing coverage.

### `/resources/how-dump-truck-insurance-works`
- **Original** (181): A breakdown of how dump truck insurance works, including the coverage types in a policy, how physical damage and motor truck cargo respond, and what drives your premium in Virginia.
- **Updated** (143): How dump truck insurance works in Virginia, including policy coverages, physical damage, motor truck cargo, and what drives your premium costs.

### `/resources/tow-truck-insurance-requirements`
- **Original** (176): What tow operators in Virginia need to carry, from on-hook and garagekeepers coverage to DMV registration and the additional-insured filings municipal towing contracts require.
- **Updated** (144): Virginia tow truck insurance requirements: on-hook and garagekeepers coverage, DMV registration, and the filings municipal contracts often need.

### `/resources/commercial-fleet-insurance-guide`
- **Original** (180): How commercial fleet insurance works in Virginia, why combining vehicles can lower cost, and the safety programs, telematics, and experience-rating factors that shape your premium.
- **Updated** (142): How commercial fleet insurance works in Virginia, why combining vehicles can lower cost, and the safety factors that shape your premium rates.

### `/resources/uber-black-insurance-requirements`
- **Original** (176): What Uber Black drivers in Virginia need to know about insurance: TNC rules, personal vehicle registration, and the $1,000,000 liability requirement while carrying a passenger.
- **Updated** (143): Uber Black insurance in Virginia: TNC rules, personal vehicle registration, and the $1,000,000 liability requirement while carrying passengers.


## Static pages left unchanged (already unique; not overly long)

These were under or near the target range and were left as-is per “preserve metadata that already meets best practices”:

| Route | Chars | Notes |
|-------|------:|-------|
| `/coverage` | 127 | Under 140; unique; left unchanged |
| `/industries` | 131 | Under 140; left unchanged |
| `/locations` | 124 | Under 140; left unchanged |
| `/resources` | 127 | Under 140; left unchanged |
| `/quote` | 112 | Under 140; left unchanged |
| `/quote/confirmation` | 91 | noindex; left unchanged |
| `/contact` | 127 | Under 140; left unchanged |
| `/privacy` | 125 | Under 140; left unchanged |
| `/terms` | 89 | Under 140; left unchanged |
| `/editorial-standards` | 121 | Under 140; left unchanged |
| `/accessibility` | 141 | In range; left unchanged |
| `/sitemap` | 125 | Under 140; left unchanged |
| 404 (`not-found`) | 143 | In range; left unchanged |

## Image accessibility changes

| File | Image | Original alt | Updated alt |
|------|-------|--------------|-------------|
| `components/marketing/AuthorBio.tsx` | Author avatar | `""` | `{author.name}` (e.g. “Cascade Commercial Lines Team”) |
| `app/authors/[id]/page.tsx` | Author header photo | `""` | `{author.name}` |

### Location Open Graph image alts

Previously all location OG alts used the template `${city}, Virginia commercial vehicles`. They now use scene-specific copy aligned with `data/hero-images.ts` (e.g. Fairfax → “Great Falls Park river and forest in Fairfax County, Virginia”).

### Decorative images preserved (`alt=""`)

Intentionally left empty with `aria-hidden` parents where applicable:

- Header / footer / splash logos (`components/layout/Logo.tsx`, `app/layout.tsx`)
- `Hero` / `DetailHero` full-bleed backgrounds (meaningful photos treated as decorative behind H1; rich alts in `data/hero-images.ts` remain unused in the DOM by design)
- `ParallaxQuote` background image

### Images already compliant (no change)

- Home / about team photo: `Cascade Insurance Group commercial lines team in Manassas, Virginia`
- About / contact office photo: `Cascade Insurance Group office building at 9815 Godwin Drive, Manassas, VA`

## Manual review still recommended

| Item | Reason |
|------|--------|
| Hero background photos | Product decision: keep decorative (`alt=""` + `aria-hidden`) vs expose `getHeroImage().alt` as informative. Current treatment is WCAG-valid for backgrounds behind headlines. |
| Static hub metas under 140 chars | Unique and not “overly long”; expanding them is optional polish, not a defect. |
| Public SVG `aria-label` values | Filename-style labels on OG-only SVGs under `public/images/`; not rendered as page images today. Humanize if ever inlined. |
| Carrier logo assets | Unused in UI (`CarrierLogos` is text-only). Add `alt={carrier.name}` if logos are rendered later. |

## Verification

- `npx tsc --noEmit` passed after changes
- All new `metaDescription` values are unique
- All rewritten metas fall within 140–160 characters
- Visible `shortDescription` / `excerpt` / `bio` strings unchanged for UI consumers
