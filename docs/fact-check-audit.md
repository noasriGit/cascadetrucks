# Fact-Check Audit Log

**Started:** 2026-06-12  
**Scope:** Regulatory and insurance-factual claims in user-facing copy across data/*.ts and hardcoded JSX  
**Out of scope:** Business info (phone, address, hours, ratings), marketing language, subjective local context

---

## Summary Counts

| Verdict | Count |
|---------|-------|
| VERIFIED | 206 |
| OUTDATED | 0 |
| INCORRECT | 64 |
| UNVERIFIABLE | 4 |
| EXEMPT | 83 |
| **Total claims reviewed** | 360 |
| **Total fixes applied** | 68 |

_Consolidated 2026-06-12 from 357 logged claim rows (360 per batch headers). Batch fixes: 58; consolidation stragglers: 10; total fixes applied: 68. Batch A and Batch B5 report sections still marked pending in the log below._

---

## Files Modified

- data/resources.ts (Batch B1; consolidation: FMCSA triggers, Uber Black guide, experience-rating entities)
- data/services.ts (Batches C1, C2, C3, C9, C10; consolidation: FMCSA triggers, experience-rating entities)
- data/vehicles.ts (Batches D1–D10; consolidation: VDOT permit semantic entity on lowboy-trailer)
- data/locations.ts (Batch E1: Arlington Uber Black TNC framing)
- data/faqs.ts (Consolidation: Uber Black answer, FMCSA haul-for-hire trigger)

_Unchanged in batch pass: hub pages (Batch F) and footer/trust/form components (Batch G, 0 fixes). Batch A and Batch B5 report sections remain pending in the log below; their fixes are reflected in consolidation where applicable._

---

## Open Items (UNVERIFIABLE — requires human review)

1. **Carrier A-ratings** (Batch G): Confirm carrier partners carry A-ratings as stated in TrustIndicators.
2. **QuoteForm "never sell your information"** (Batch G): Confirm privacy and lead-handling practices match this pledge.
3. **Municipal tow rotation lists** (B3, C2, E1): Specific locality limits are unverifiable without reviewing each ordinance; copy was softened where specific numbers were stated.
4. **Uber platform $1M requirement** (B5, C10): Softened to "contract or platform terms may require more" where applicable; platform-specific terms should be confirmed against current Uber Black agreements.

---

## Batch Reports

Each batch agent appends its report in the section below.

---

### Batch A — data/faqs.ts

_Pending_

---

### Batch B1 — data/resources.ts: virginia-commercial-auto-insurance-guide

**Status:** Complete  
**Claims reviewed:** 10  
**Fixes applied:** 1  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Every vehicle registered in Virginia must carry liability insurance | Virginia Minimum Liability Limits | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| As of January 1, 2025, minimum liability is 50/100/25 ($50k/$100k/$25k) per Code of Virginia | Virginia Minimum Liability Limits | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| Virginia requires UM/UIM coverage at matching limits | Virginia Minimum Liability Limits | INCORRECT | Va. Code § 38.2-2206(A) (law.lis.virginia.gov) | Fixed: UM/UIM PD floor is $20k for insured property damage; BI limits default to liability but may be reduced in writing per § 38.2-2202. Reworded to "generally at bodily injury limits tied to your liability coverage." |
| For-hire interstate carriers typically need operating authority and MCS-90 endorsement | Federal Filings and For-Hire Operations | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| MCS-90 is a federally mandated guarantee that the public will be compensated after a covered accident | Federal Filings and For-Hire Operations | VERIFIED | 49 CFR § 387.15; MCS-90 endorsement text (fmcsa.dot.gov) | None |
| Operations crossing state lines or transporting goods for compensation often fall under FMCSA rules | Federal Filings and For-Hire Operations | VERIFIED | 49 CFR Part 387 (ecfr.gov) | None |
| For-hire passenger operations have their own registration and limit requirements | Federal Filings and For-Hire Operations | VERIFIED | 49 CFR Part 387; MCS-90B for passenger carriers (fmcsa.dot.gov) | None |
| Personal auto policies exclude business-use claims | When You Need Commercial Auto Insurance | EXEMPT | General insurance practice, not a statutory threshold | None |
| Most commercial operators carry $500,000 or $1,000,000 liability | Virginia Minimum Liability Limits | EXEMPT | Industry recommendation, not a legal requirement | None |
| GVW 10,001 lbs FMCSA jurisdiction threshold | — | EXEMPT | Not stated in this resource | None |

---

### Batch B2 — data/resources.ts: how-dump-truck-insurance-works

**Status:** Complete  
**Claims reviewed:** 11  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability pays for injuries and property damage you cause to others | The Coverage Types in a Dump Truck Policy | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Every operator needs commercial auto liability | The Coverage Types in a Dump Truck Policy | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Contracts and the DMV expect commercial auto liability | The Coverage Types in a Dump Truck Policy | VERIFIED | Va. Code § 46.2-706; DMV motor carrier insurance requirements (dmv.virginia.gov) | None |
| Physical damage consists of collision and comprehensive | The Coverage Types in a Dump Truck Policy (bullets) | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Hired and non-owned auto covers rented and borrowed units | The Coverage Types in a Dump Truck Policy (bullets) | VERIFIED | Standard commercial auto policy extension (ISO CA 20 48) | None |
| Collision pays to repair or replace your truck after an accident, regardless of fault | Physical Damage: Collision and Comprehensive Explained | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Comprehensive covers non-collision losses (fire, theft, vandalism, falling objects, weather) | Physical Damage: Collision and Comprehensive Explained | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Financed or leased trucks are almost always required to carry physical damage | Physical Damage: Collision and Comprehensive Explained | EXEMPT | Lender/lessor contractual requirement, not statutory | None |
| Motor truck cargo covers hauled material when contract or job terms make you responsible | Motor Truck Cargo Coverage for Virginia Haulers | VERIFIED | FMCSA MCS-90 endorsement (cargo excluded from public liability); carrier legal liability principle | None |
| Motor truck cargo responds where liability and physical damage would not | Motor Truck Cargo Coverage for Virginia Haulers | VERIFIED | MCS-90 excludes cargo from liability coverage; physical damage covers the insured vehicle only | None |
| GVW, axles, radius, cargo type, and driver MVR drive premiums | What Drives Dump Truck Insurance Premiums | EXEMPT | General underwriting factors, not a statutory threshold | None |

---

### Batch B3 — data/resources.ts: tow-truck-insurance-requirements

**Status:** Complete  
**Claims reviewed:** 13  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability is required to operate tow trucks in Virginia | Required and Recommended Coverages, body | VERIFIED | Va. Code § 46.2-649.1(C) ($750,000 minimum for tow trucks registered under that section); Va. Code § 46.2-472 (general vehicle liability) | None |
| On-hook legal liability covers customer vehicles during tow, hookup, or recovery | Required and Recommended Coverages, bullets; On-Hook vs. Garagekeepers, body | VERIFIED | Virginia SCC Commercial Insurance Guide (truckers/garage policies for towing businesses); standard truckers policy coverage scope | None |
| Garagekeepers legal liability covers vehicles stored on operator lot or impound yard | Required and Recommended Coverages, bullets; On-Hook vs. Garagekeepers, body | VERIFIED | Virginia SCC Commercial Insurance Guide (garage policies for auto-related businesses) | None |
| On-hook responds when a vehicle is connected during tow and damaged in transit | On-Hook vs. Garagekeepers, body | VERIFIED | Standard on-hook / in-transit towing coverage definition (truckers policy form) | None |
| Garagekeepers responds for stored vehicles damaged by fire, theft, vandalism, or weather | On-Hook vs. Garagekeepers, body | VERIFIED | Standard garagekeepers coverage scope (direct primary form); legal liability form pays when operator is legally obligated | None |
| Tow businesses in Virginia generally register with the DMV | Virginia Filings and Municipal Compliance, body | VERIFIED | dmv.virginia.gov/vehicles/registration/tow-truck-reg (for-hire requires operating authority before registration) | None |
| Localities with police-rotation or municipal tow lists require specific liability limits | Virginia Filings and Municipal Compliance, body | VERIFIED | Va. Code § 46.2-1217 (localities may regulate police towing by ordinance or contract, including eligibility criteria) | None |
| Localities require naming the locality as additional insured on a certificate of insurance | Virginia Filings and Municipal Compliance, body; excerpt | VERIFIED | fairfaxcounty.gov/cableconsumer (trespass towing permit insurance requirements); alexandriava.gov permit guidelines (additional insured on COI) | None |
| Municipal towing insurance and filing requirements vary by jurisdiction | Virginia Filings and Municipal Compliance, body | VERIFIED | Va. Code § 46.2-1217 | None |
| Operators towing across state lines or for hire may need federal filings | Virginia Filings and Municipal Compliance, body | VERIFIED | fmcsa.dot.gov (for-hire tow trucks GVWR 10,000+ in interstate commerce: $750,000 financial responsibility; operating authority and insurance filings per 49 CFR Part 387) | None |
| Physical damage covers operator-owned wreckers and flatbeds | Required and Recommended Coverages, body and bullets | EXEMPT | Coverage product description, not a regulatory requirement | None |
| Many tow operators need both on-hook and garagekeepers coverage | On-Hook vs. Garagekeepers, body | EXEMPT | General operational advice | None |
| Skipping on-hook or letting additional-insured certificates lapse creates coverage or compliance gaps | Common Mistakes, body | EXEMPT | Agency guidance based on common industry gaps | None |

---

### Batch B4 — data/resources.ts: commercial-fleet-insurance-guide

**Status:** Complete  
**Claims reviewed:** 10  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Once a business runs two or more vehicles, separate policies become inefficient and a fleet policy can combine them | How Fleet Policies Differ from Individual Policies | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy eligibility; scc.virginia.gov); ISO fleet rating class (5+ self-propelled autos) is a pricing distinction, not a policy-availability rule | None |
| Fleet policies carry liability, physical damage, and hired and non-owned auto as core coverages | How Fleet Policies Differ from Individual Policies | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy coverages); hired/non-owned are standard optional BAP symbols, same as individual commercial auto | None |
| Fleet pricing reflects combined vehicle, driver, and operation risk (types, values, radius, cargo/work, loss history) | How Fleet Premiums Are Calculated | VERIFIED | Virginia SCC Commercial Insurance Guide ("type of vehicles driven, territory, expected mileage, usage, and loss experience") | None |
| Larger fleets may be evaluated on an experience-rating basis tied to claims record | How Fleet Premiums Are Calculated | VERIFIED | NAIC Model Rating Law (experience rating plans; content.naic.org) | None |
| A fleet policy can cover mixed vehicle types (trucks, vans, trailers) with each unit rated for its own use and value | Mixed Fleets: Trucks, Vans, and Trailers Together | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto and truckers policies; vehicle audits by use) | None |
| Combined liability and physical damage across all units | How Fleet Policies Differ (bullets) | EXEMPT | Product structure, not a statutory or coverage-definition claim | None |
| One renewal date and centralized administration | How Fleet Policies Differ (bullets) | EXEMPT | Product structure | None |
| Driver screening and MVR checks reduce fleet risk | Lowering Fleet Costs with Safety and Telematics | EXEMPT | General risk-management advice | None |
| Telematics can unlock usage-based discounts with carriers that offer them | Lowering Fleet Costs with Safety and Telematics | EXEMPT | Qualified carrier-dependent statement | None |
| Insuring each vehicle separately is often more expensive than a combined fleet program | How Fleet Policies Differ from Individual Policies | EXEMPT | Industry pricing generalization, not a legal threshold | None |

---

### Batch B5 — data/resources.ts: uber-black-insurance-requirements

_Pending_

---

### Batch C1 — data/services.ts: dump-truck-insurance

**Status:** Complete  
**Claims reviewed:** 9  
**Fixes applied:** 2  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability pays bodily injury and property damage to others on Virginia roads | What Dump Truck Insurance Covers | EXEMPT | Standard coverage definition, not a statutory threshold | None |
| Physical damage covers collision and comprehensive losses to the truck | What Dump Truck Insurance Covers | EXEMPT | Standard coverage definition | None |
| Motor truck cargo covers dirt, gravel, stone, and fill hauled in the truck | What Dump Truck Insurance Covers | EXEMPT | Standard inland marine/cargo product description | None |
| Hired and non-owned auto covers rented and borrowed units | What Dump Truck Insurance Covers | EXEMPT | Standard coverage definition | None |
| Every dump truck registered in Virginia must carry liability coverage | Virginia Requirements for Dump Truck Operators | VERIFIED | Va. Code § 46.2-706; § 46.2-435 (law.lis.virginia.gov) | None |
| As of January 1, 2025 the state minimum liability is 50/100/25 | Virginia Requirements for Dump Truck Operators | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| For-hire dump truck operators face only the 50/100/25 minimum (implied by omission) | Virginia Requirements for Dump Truck Operators | INCORRECT | Va. Code § 46.2-2143.1(B); dmv.virginia.gov property carrier guidance | Fixed: added $750,000 Virginia minimum for for-hire operators with GVWR over 10,000 pounds |
| Hauling for hire or crossing state lines triggers MCS-90 and FMCSA operating authority | Virginia Requirements for Dump Truck Operators | INCORRECT | 49 CFR § 387.9 (for-hire interstate GVWR 10,001+); FMCSA MCS-90 (fmcsa.dot.gov) | Fixed: narrowed to interstate for-hire commerce; intrastate for-hire and private interstate carriers have different rules |
| MCS-90 endorsement and FMCSA operating authority are federal filing types for qualifying motor carriers | Virginia Requirements for Dump Truck Operators | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |

---

### Batch C2 — data/services.ts: tow-truck-insurance

**Status:** Complete  
**Claims reviewed:** 9  
**Fixes applied:** 1  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| On-hook coverage pays for damage to a customer's vehicle while connected during a tow, hookup, or recovery | § On-Hook Coverage and Garagekeepers Explained | VERIFIED | scc.virginia.gov Commercial Insurance Guide (garage policies for towing/auto service businesses) | None |
| Without on-hook, operator could be personally responsible for customer vehicle damage in their care | § On-Hook Coverage and Garagekeepers Explained | EXEMPT | General bailee-exposure advice; not a specific legal threshold | None |
| Garagekeepers legal liability covers vehicles stored on lot or impound yard | § On-Hook Coverage and Garagekeepers Explained | VERIFIED | scc.virginia.gov Commercial Insurance Guide (garage policies) | None |
| Garagekeepers legal liability responds to fire, theft, vandalism, and weather regardless of fault | § On-Hook Coverage and Garagekeepers Explained | INCORRECT | Filed garagekeepers endorsements (legal liability basis pays only when insured is legally obligated; direct primary covers perils regardless of fault) | Reworded to distinguish legal liability vs. direct primary forms |
| Commercial auto liability covers bodily injury and property damage while driving, hooking up, or recovering | § Tow Truck Insurance Coverages in Virginia | VERIFIED | Virginia SCC Commercial Insurance Guide; standard commercial auto liability scope | None |
| Tow businesses in Virginia generally register with the DMV | § Virginia Filing and Compliance Requirements | VERIFIED | dmv.virginia.gov/vehicles/registration/tow-truck-reg | None |
| Police-ordered/municipal towing operators usually must carry locality-specified limits and name city/county as additional insured on COI | § Virginia Filing and Compliance Requirements | UNVERIFIABLE | Va. Code § 46.2-1217 (local ordinance/contract authority); specific limits and AI requirements vary by jurisdiction | None (language already qualified with "usually") |
| Operators who tow across state lines or for hire may need federal filings | § Virginia Filing and Compliance Requirements | VERIFIED | fmcsa.dot.gov (49 CFR Part 387; MCS-90 for for-hire tow trucks 10,000+ lbs in interstate commerce) | None |
| On-hook and garagekeepers bullets accurately name standard towing coverages | § Tow Truck Insurance Coverages bullets | VERIFIED | Standard garage/towing policy terminology | None |

---

### Batch C3 — data/services.ts: semi-truck-insurance

**Status:** Complete  
**Claims reviewed:** 12  
**Fixes applied:** 1  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| FMCSA minimum primary liability is $750,000 for general freight (interstate for-hire) | What Semi Truck Insurance Covers, body ¶1 | VERIFIED | 49 CFR § 387.9 (ecfr.gov) | None |
| Higher FMCSA minimums apply for oil, hazmat, and other regulated commodities | What Semi Truck Insurance Covers, body ¶1 | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(4) (ecfr.gov) | None |
| Interstate for-hire motor carriers need FMCSA operating authority, USDOT number, and BOC-3 process agent filing | FMCSA Filings and Compliance, body ¶1 | VERIFIED | FMCSA Insurance Filing Requirements; FMCSA Form BOC-3; 49 CFR § 366.6 | None |
| MCS-90 endorsement guarantees public liability on the policy | FMCSA Filings and Compliance, body ¶1 | VERIFIED | FMCSA Form MCS-90; 49 CFR § 387.15 | None |
| Primary liability minimums: $750,000 general freight, $1 million oil, up to $5 million certain hazmat | FMCSA Filings and Compliance, body ¶1 | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| Virginia requires liability on every registered commercial vehicle | FMCSA Filings and Compliance, body ¶2 | VERIFIED | Virginia Code § 46.2-706; dmv.virginia.gov/vehicles/insurance-requirements | None |
| Virginia state minimum is 50/100/25 as of January 1, 2025 (stated as applicable minimum for semi trucks) | FMCSA Filings and Compliance, body ¶2 | INCORRECT | dmv.virginia.gov/general-freight-oa-navigator; Virginia Code § 46.2-472 | Fixed: noted $750,000 motor carrier requirement for tractors over 10,001 lbs GVWR |
| Virginia baseline registration minimum is 50/100/25 effective January 1, 2025 | FMCSA Filings and Compliance, body ¶2 (revised) | VERIFIED | Virginia Code § 46.2-472; dmv.virginia.gov/vehicles/insurance-requirements | Incorporated into corrected copy |
| Primary auto liability meeting FMCSA minimums (bullet) | What Semi Truck Insurance Covers, bullets | VERIFIED | 49 CFR § 387.9 | None |
| Bobtail or unladen liability covers miles when not under dispatch | What Semi Truck Insurance Covers, body ¶2 | EXEMPT | — | Industry coverage term; advisory, not a regulatory definition |
| Bobtail liability for unladen travel (bullet) | What Semi Truck Insurance Covers, bullets | EXEMPT | — | Industry coverage term |
| Leased owner-operators must know which policy is primary during loaded, empty, and bobtail travel | What Semi Truck Insurance Covers, body ¶2 | EXEMPT | — | Contractual advisory, not a verifiable regulatory claim |

---

### Batch C4 — data/services.ts: contractor-vehicle-insurance

**Status:** Complete  
**Claims reviewed:** 9  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Contractor vehicle insurance starts with commercial auto liability and physical damage for work trucks and vans | § "Coverage for Contractor Trucks and Vans" body[0] | VERIFIED | Virginia SCC Commercial Insurance Guide; ISO CA 00 01 Business Auto Coverage Form | None |
| Tools and equipment coverage is written as inland marine | § "Coverage for Contractor Trucks and Vans" body[1]; bullet | VERIFIED | NAIC Nationwide Marine Definition (MO-701 §2.F(10)); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| Tools/equipment floater protects hand tools, power tools, ladders, and gear in the vehicle and on the job site against theft and damage | § "Coverage for Contractor Trucks and Vans" body[1] | VERIFIED | NAIC MO-701 §2.F(10) (mobile machinery/equipment floaters); AAIS Contractors' Equipment Coverage forms (job-site and transit coverage) | None |
| Commercial auto policy covers the vehicle but not tools carried inside it | § "How Tools and Equipment Coverage Works" body[0] | VERIFIED | ISO CA 00 01: physical damage limited to covered auto and its equipment; liability excludes property in insured's care, custody, or control | None |
| Inland marine tools coverage applies in the truck, on the job site, and in temporary storage | § "How Tools and Equipment Coverage Works" body[0] | VERIFIED | NAIC MO-701 §2.F(10); Virginia SCC Commercial Insurance Guide (inland marine for property in transit and bailee custody) | None |
| Tools and equipment coverage can extend to leased and rented equipment | § "How Tools and Equipment Coverage Works" body[1] | VERIFIED | AAIS IM 7004 Contractors' Equipment Coverage – Leased or Rented Equipment Form | None |
| Hired auto covers rented and borrowed vehicles | § bullets; coverageHighlights | VERIFIED | ISO CA 00 01 Symbol 8 (hired/borrowed autos) | None |
| Non-owned auto covers employee-owned vehicles used for business | § bullets; coverageHighlights | VERIFIED | ISO CA 00 01 Symbol 9 (non-owned autos, including employee vehicles used in business) | None |
| Pairing commercial auto with a tools and equipment floater is the right combination for most contractors | § "Coverage for Contractor Trucks and Vans" body[1] | EXEMPT | — | None (general advisory language, not a verifiable regulatory fact) |

---

### Batch C5 — data/services.ts: plumbing-vehicle-insurance

**Status:** Complete  
**Claims reviewed:** 6  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| A plumbing vehicle policy combines commercial auto liability with physical damage for the van or truck | Coverage for Plumbing Service Vans, body ¶1 | VERIFIED | Virginia SCC Auto Insurance Guide (scc.virginia.gov): collision and other-than-collision are optional physical damage coverages on auto policies | None |
| Physical damage includes collision and comprehensive | Coverage bullets; coverageHighlights | VERIFIED | Virginia SCC Auto Insurance Guide: collision covers crash damage; comprehensive (other-than-collision) covers theft, vandalism, weather, and similar perils to the insured auto | None |
| Tools and equipment coverage is written as an inland marine add-on | Coverage for Plumbing Service Vans, body ¶2; coverageHighlights | VERIFIED | NAIC Nationwide Inland Marine Definition (MDL-701, content.naic.org): commercial mobile equipment floaters classify contractor tools and gear as inland marine risks | None |
| Inland marine tools and equipment coverage protects gear against theft and damage | Coverage for Plumbing Service Vans, body ¶2; bullets | VERIFIED | NAIC MDL-701 F(10) Mobile Articles, Machinery and Equipment Floaters; NAIC PCM 09.0 Inland Marine (movable property at varying locations) | None |
| Tools and equipment coverage applies whether gear is in the van or at a customer home or job site | Coverage for Plumbing Service Vans, body ¶2 | VERIFIED | NAIC MDL-701 F(9) Installation Risks (coverage at points where work is performed); F(10) mobile commercial equipment floaters; NAIC PCM 09.0 (property at different locations, excluding licensed highway vehicles) | None |
| Multiple vans or service trucks can be combined on a single commercial policy | Why Plumbing Businesses Choose Cascade, body ¶2 | EXEMPT | Common carrier packaging practice, not a statutory threshold or coverage definition | None |

---

### Batch C6 — data/services.ts: hvac-vehicle-insurance

**Status:** Complete  
**Claims reviewed:** 9  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| HVAC vehicle policy pairs commercial auto liability with physical damage for the truck or van | Coverage for HVAC Trucks and Vans (body ¶1) | VERIFIED | Virginia SCC Auto Insurance Guide (collision/comprehensive as physical damage); standard commercial auto structure | None |
| Commercial auto liability for service vehicles | Coverage for HVAC Trucks and Vans (bullet) | VERIFIED | Va. Code § 46.2-472; Virginia SCC Auto Insurance Guide (liability pays losses you cause to others) | None |
| Physical damage includes collision and comprehensive | Coverage for HVAC Trucks and Vans (bullet) | VERIFIED | Virginia SCC Auto Insurance Guide ("Collision" and "Other Than Collision" coverages) | None |
| Tools and equipment coverage is written as inland marine | Coverage for HVAC Trucks and Vans (body ¶2); coverageHighlights | VERIFIED | NAIC Nationwide Inland Marine Definition MDL-701 F(9), F(10) | None |
| Tools and equipment coverage protects HVAC gear against theft and damage | Coverage for HVAC Trucks and Vans (body ¶2) | VERIFIED | NAIC MDL-701; AAIS Contractors' Equipment forms (direct physical loss, in transit and at jobsites) | None |
| Coverage can extend to larger components in transit to a job | Coverage for HVAC Trucks and Vans (body ¶2) | VERIFIED | NAIC MDL-701 F(9) Installation Risks (machinery/equipment in transit); AAIS contractors equipment in transit | None |
| Commercial auto liability plus equipment coverage for service trucks and vans | shortDescription | EXEMPT | Product summary, not a statutory threshold | None |
| Hero covers vehicle on the road and equipment crews transport | heroSubheadline | EXEMPT | Marketing framing aligned with verified coverages above | None |
| Seasonal fleet expansion and coverage flexibility | Built for Seasonal HVAC Operations | EXEMPT | Operational marketing, not a regulatory or coverage-definition claim | None |

**Note:** This service page does not state Virginia minimum liability limits (50/100/25) or other filing requirements; those appear only via linked `general-requirements` FAQ, outside this batch scope.

---

### Batch C7 — data/services.ts: landscaping-vehicle-insurance

**Status:** Complete  
**Claims reviewed:** 5  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Landscaping policies include commercial auto liability and physical damage for trucks | Truck, Trailer, and Equipment Coverage (body) | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 46.2-472 | None |
| Each trailer pulled should be listed on the policy for liability, with optional physical damage | Truck, Trailer, and Equipment Coverage (body); Trailer liability bullet | VERIFIED | Va. Code § 46.2-472(B)(1) (designation of covered motor vehicles); Va. Code § 46.2-100 (trailers are motor vehicles); dmv.virginia.gov/vehicles/registration/trailer | None |
| Mowers, blowers, trimmers, and hauled gear are covered via tools and equipment (inland marine), not the auto policy | Truck, Trailer, and Equipment Coverage (body); Tools and equipment bullet | VERIFIED | NAIC MDL-701 § F(10) (mobile equipment floaters exclude motor vehicles designed for highway use); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| Hired and non-owned auto covers rented or employee vehicles used for seasonal help | Hired and non-owned auto bullet | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 38.2-2204 (omnibus/permission provisions) | None |
| Trailer liability and physical damage are distinct optional coverages on the auto policy | Trailer liability and physical damage bullet | VERIFIED | dmv.virginia.gov/vehicles/registration/trailer; Va. Code § 46.2-472(B)(1) | None |

**Note:** This service page does not state Virginia minimum liability limits (50/100/25), FMCSA GVW thresholds, or filing requirements; seasonal snow-plow and GC certificate language is general advisory copy, not counted as verifiable claims.

---

### Batch C8 — data/services.ts: construction-vehicle-insurance

**Status:** Complete  
**Claims reviewed:** 5  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability and physical damage apply to trucks traveling public roads between yard and job site | Coverage for Construction Vehicles (body); Commercial auto liability and physical damage bullets | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 46.2-472 | None |
| Motor truck cargo covers materials in transit (optional add-on) | Coverage for Construction Vehicles (body); Motor truck cargo bullet | VERIFIED | Virginia SCC Commercial Insurance Guide (motor truck cargo reference); Federal Register 2010-14866 (cargo insurance context for for-hire carriers) | None |
| Hired and non-owned auto covers rented units and employee vehicles used on projects | Coverage for Construction Vehicles (body); Hired and non-owned auto bullet | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy) | None |
| Excavators, skid steers, loaders, and similar unregistered site machinery are typically covered as mobile equipment, not under the auto policy | Mobile Equipment and Job-Site Machinery (body); Mobile equipment coverage highlight | VERIFIED | NAIC MDL-701 § F(10) and § F(19)(d) (contractors' equipment and mobile equipment excluding highway motor vehicles); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| Not all construction-site machinery is registered for public roads | Mobile Equipment and Job-Site Machinery (body, lead sentence) | VERIFIED | Va. Code § 46.2-100 (trailer/motor vehicle definitions); dmv.virginia.gov/vehicles/registration/trailer | None |

**Note:** GC/project-owner certificate and additional-insured requirements are contract-driven (EXEMPT). No Virginia minimum limits or FMCSA GVW thresholds appear on this page.

---

### Batch C9 — data/services.ts: commercial-fleet-insurance

**Status:** Complete  
**Claims reviewed:** 7  
**Fixes applied:** 1  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial fleet insurance applies to businesses running two or more vehicles | shortDescription; heroSubheadline | EXEMPT | No statutory fleet-size threshold; carrier underwriting varies (Virginia SCC Commercial Insurance Guide) | None |
| Fleet policies include commercial auto liability, physical damage, and hired and non-owned auto | How Commercial Fleet Coverage Works (body + bullets) | VERIFIED | ISO Business Auto Coverage Form CA 00 01; Virginia SCC Commercial Insurance Guide (business auto / truckers policy) | None |
| Combined commercial auto liability across all fleet units | How Commercial Fleet Coverage Works (bullets) | VERIFIED | Standard fleet / business auto policy structure (Virginia SCC Commercial Insurance Guide) | None |
| Physical damage covers owned trucks, vans, and trailers | How Commercial Fleet Coverage Works (bullets) | VERIFIED | ISO CA 00 01 collision and comprehensive provisions | None |
| Hired and non-owned auto covers rented and employee vehicles | How Commercial Fleet Coverage Works (bullets) | VERIFIED | ISO CA 00 01 Symbols 8 (hired) and 9 (non-owned) | None |
| Larger fleets evaluated on experience modification basis | Fleet Pricing and Discounts | INCORRECT | Virginia SCC PC Filing Guidelines (experience rating plans, not workers comp experience modification); Va. Code § 38.2-1906 | Fixed: "experience modification basis" → "experience-rating basis" |
| Telematics and dash-cam programs can reduce premiums via usage-based discounts | Managing Fleet Risk and Telematics | EXEMPT | Carrier underwriting practice, not a statutory requirement | None |

---

### Batch C10 — data/services.ts: uber-black-insurance

**Status:** Complete  
**Claims reviewed:** 16  
**Fixes applied:** 7  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Uber Black is for-hire livery transportation in Virginia | Section 1 body | INCORRECT | Va. Code § 46.2-2000 (prearranged ride, TNC partner vehicle); DMV TNC Manual (dmv.virginia.gov) | Fixed: reframed as TNC framework using a personal vehicle, not traditional for-hire motor carrier |
| Uber Black is different from rideshare driving on a personal vehicle | Section 1 body | INCORRECT | Va. Code § 46.2-2000 (TNC partner vehicle = personal vehicle) | Fixed: removed incorrect regulatory distinction |
| A personal auto policy will not cover Uber Black platform work | Section 1 body | VERIFIED | Va. Code § 46.2-2099.52(B)(6) | None |
| A standard rideshare endorsement is not enough for Uber Black | Section 1 body | VERIFIED | DMV TNC Manual (vehicle must be insured for commercial use); Va. Code § 46.2-2099.52 | Softened to "typically not enough" |
| Livery coverage satisfies Virginia requirements and Uber limits while carrying a passenger | Section 1 body | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance, $1M during prearranged ride) | Fixed: Virginia TNC insurance requirements and platform limits |
| Limits meet platform and DMV requirements | Section 1 bullets | INCORRECT | Va. Code § 46.2-2099.52 | Fixed: "Virginia TNC and platform requirements" |
| Rideshare and livery are not the same in the eyes of Virginia regulators | Section 2 body | INCORRECT | Va. Code § 46.2-2000 (Uber Black prearranged rides are TNC) | Fixed: both fall under TNC rules; premium tier has higher standards |
| TNC rideshare relies on platform coverage layered over a personal policy | Section 2 body | VERIFIED | Va. Code § 46.2-2099.52(B)(3) (TNC insurance primary; may combine TNC and partner policies) | Reworded in context of corrected TNC framework |
| Pre-arranged black-car service is for-hire livery requiring its own commercial coverage | Section 2 body | INCORRECT | Va. Code § 46.2-2000 (prearranged ride in TNC partner vehicle) | Fixed: removed livery motor carrier classification for Uber Black |
| Driving on a personal or rideshare policy can leave you uninsured | Section 2 body | VERIFIED | Va. Code § 46.2-2099.52(B)(4)-(6) | None |
| For-hire operators in Virginia generally need a for-hire vehicle registration | Section 3 body | INCORRECT | DMV TNC Manual (TNC vehicles cannot use for-hire plates); Va. Code § 46.2-2034 (TNC partners exempt from for-hire vehicle fee) | Fixed: for-hire registration applies to independent motor carriers, not Uber Black TNC drivers |
| Commercial liability limits often $1,000,000 while a passenger is in the vehicle | Section 3 body | VERIFIED | Va. Code § 46.2-2099.52(B)(1) | Fixed attribution: Virginia TNC statutory minimum, not merely a platform expectation |
| Virginia motor carrier livery minimum is $350,000 for 1–6 passenger vehicles | — (implicit prior framing) | VERIFIED | Va. Code § 46.2-2078 | Corrected by removing livery motor carrier framing for Uber Black |
| TNC partner vehicles must be insured for commercial use | — (added context) | VERIFIED | DMV TNC Manual (Mandatory Vehicle Screening Requirements) | Incorporated in revised copy |
| Commercial livery liability / physical damage / UM-UIM as coverage types | Section 1 bullets; coverageHighlights | EXEMPT | Insurance product descriptions, not statutory thresholds | None |
| For-hire / livery compliance | coverageHighlights | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance satisfies financial responsibility) | Fixed: "Virginia TNC compliance" |

---

### Batch C11 — data/services.ts: business-auto-insurance

**Status:** Complete  
**Claims reviewed:** 9  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability pays for bodily injury and property damage your vehicle causes to others | What Business Auto Insurance Covers in Virginia | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| A personal policy's business-use exclusion can leave you uninsured after an at-fault accident while driving for work | What Business Auto Insurance Covers in Virginia | EXEMPT | General insurance practice, not a statutory threshold | None |
| Physical damage (collision and comprehensive) repairs or replaces owned vehicles | What Business Auto Insurance Covers in Virginia | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Hired auto covers rented and borrowed vehicles; non-owned auto covers employees' personal cars used on company business | What Business Auto Insurance Covers in Virginia (body and bullets) | VERIFIED | Standard commercial auto policy extensions (ISO CA 20 48) | None |
| Every vehicle registered in Virginia must carry liability coverage | Virginia Requirements for Business Vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| As of January 1, 2025, Virginia minimum liability is 50/100/25 ($50k BI per person, $100k per accident, $25k PD) | Virginia Requirements for Business Vehicles | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| Most Virginia businesses carry $500,000 to $1,000,000 in liability limits | Virginia Requirements for Business Vehicles | EXEMPT | Industry recommendation, not a legal requirement | None |
| Vehicle type, driver MVR, mileage, radius, and loss history affect premiums | What Affects Your Business Auto Premium | EXEMPT | General underwriting factors, not a statutory threshold | None |
| Most business auto policies can be quoted the same day | How to Get a Business Auto Quote | EXEMPT | Operational claim, not regulatory | None |

---

### Batch C12 — data/services.ts: commercial-auto-insurance

**Status:** Complete  
**Claims reviewed:** 10  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Commercial auto liability pays for bodily injury and property damage you cause to others on the road | What Commercial Auto Insurance Covers | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Physical damage covers collision, theft, and weather losses on owned vehicles | What Commercial Auto Insurance Covers | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Medical payments, uninsured/underinsured motorist, and hired/non-owned auto are standard policy components | What Commercial Auto Insurance Covers (bullets) | VERIFIED | Va. Code § 38.2-2206 (UM/UIM); standard commercial auto forms | None |
| Personal auto policies are not built for business use and often exclude it | When Your Business Vehicles Need Commercial Coverage | EXEMPT | General insurance practice, not a statutory threshold | None |
| Carrying tools, transporting for a fee, hauling materials, or having employees drive on your behalf indicates commercial use | When Your Business Vehicles Need Commercial Coverage | EXEMPT | General underwriting guidance, not a statutory threshold | None |
| Every vehicle registered in Virginia must carry liability coverage | Virginia Minimum Limits and Filing Requirements | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| As of January 1, 2025, Virginia minimum liability is 50/100/25 ($50k/$100k/$25k) | Virginia Minimum Limits and Filing Requirements | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| Businesses that haul for hire or operate in interstate commerce may need the MCS-90 endorsement | Virginia Minimum Limits and Filing Requirements | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| Motor truck cargo, tools/equipment, and fleet policies are industry-specific add-ons | Coverage Options and Add-Ons | EXEMPT | Product structure, not a regulatory threshold | None |
| Many commercial auto policies can be quoted the same day | How to Get a Commercial Auto Quote in Virginia | EXEMPT | Operational claim, not regulatory | None |

---

### Batch D1 — data/vehicles.ts: box-truck, bucket-truck, car-carrier, catering-truck, cement-mixer-truck

**Status:** Complete  
**Claims reviewed:** 18  
**Fixes applied:** 5  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability on every registered vehicle | box-truck-insurance | VERIFIED | Va. Code § 46.2-706, § 46.2-472 (law.lis.virginia.gov) | None |
| Box trucks span Class 3–7 from about 12,000 to 33,000 lbs GVW | box-truck-insurance | INCORRECT | FHWA vehicle weight classes (afdc.energy.gov); Class 3 begins at 10,001 lbs | Fixed: 10,001–33,000 lbs under federal GVWR classes |
| GVW over 10,001 lbs in interstate commerce triggers FMCSA jurisdiction | box-truck-insurance | VERIFIED | FMCSA USDOT registration guidance (fmcsa.dot.gov); 49 CFR Part 387 | None |
| For-hire carriers hauling regulated commodities need MCS-90 | box-truck-insurance | INCORRECT | 49 CFR § 387.15; MCS-90 applies to carriers subject to Part 387 financial responsibility | Fixed: subject to FMCSA financial responsibility rules |
| Motor truck cargo covers goods damaged, stolen, or destroyed in transit | box-truck-insurance | VERIFIED | Standard motor truck cargo coverage (ISO truckers forms) | None |
| Bucket trucks over 10,001 lbs GVW in interstate commerce subject to FMCSA / DOT number | bucket-truck-insurance | VERIFIED | fmcsa.dot.gov USDOT registration | None |
| Virginia has specific requirements for aerial work platform operations | bucket-truck-insurance | VERIFIED | 29 CFR 1910.67 adopted by VOSH; 16VAC25-73-60 (law.lis.virginia.gov) | None |
| On-hook towing coverage pays for damage to vehicles being hauled in transit | car-carrier-insurance | VERIFIED | Standard truckers on-hook coverage | None |
| Interstate auto haulers need FMCSA operating authority and liability filing | car-carrier-insurance | VERIFIED | 49 CFR Part 387; fmcsa.dot.gov insurance filing requirements | None |
| Minimum $75,000 for hauling up to 3 vehicles; $750,000 for 4+ | car-carrier-insurance | INCORRECT | FMCSA guidance on vehicles as HM (UN 3166); 49 CFR § 387.9 entry (3) $1,000,000 | Fixed: $1,000,000 for interstate auto haulers |
| Intrastate car carriers work under Virginia DMV requirements | car-carrier-insurance | VERIFIED | dmv.virginia.gov motor carrier requirements | None |
| Virginia requires commercial auto liability on catering truck | catering-truck-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Local health permit and commissary may be required for mobile food | catering-truck-insurance | VERIFIED | 12VAC5-421-10, 12VAC5-421-3660 (law.lis.virginia.gov) | None |
| Fully loaded cement mixers operate at 66,000–80,000 lbs GVW | cement-mixer-truck-insurance | INCORRECT | 23 CFR § 658.17 (80,000 lb interstate max); bridge formula limits vary by axle config | Fixed: tri/quad axle up to 80,000 lbs subject to bridge formula |
| Cement mixers subject to FMCSA when operating interstate | cement-mixer-truck-insurance | VERIFIED | 49 CFR Part 387 | None |
| Virginia enforces axle weight and permit requirements | cement-mixer-truck-insurance | VERIFIED | Va. Code weight/overweight provisions; dmv.virginia.gov | None |
| For-hire ready-mix carriers need FMCSA operating authority (unqualified) | cement-mixer-truck-insurance | INCORRECT | FMCSA authority applies to interstate for-hire operations (49 CFR Part 387) | Fixed: added interstate commerce qualifier |

---

### Batch D2 — data/vehicles.ts: delivery-van, flatbed-truck, hotshot-truck, pump-truck, refrigerated-truck

**Status:** Complete  
**Claims reviewed:** 22  
**Fixes applied:** 4  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability on every business vehicle | delivery-van-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Delivery vans operating interstate may be subject to FMCSA if GVW exceeds 10,001 lbs | delivery-van-insurance | VERIFIED | fmcsa.dot.gov/registration/do-i-need-usdot-number | None |
| Class 2 cargo vans at 6,000 lbs GVW to Class 5 at 19,500 lbs | delivery-van-insurance | INCORRECT | FMCSA vehicle weight classifications (fmcsa.dot.gov) | Fixed: Class 1 and 2 cargo vans up to Class 5 at 19,500 lbs GVWR |
| Commercial auto liability pays bodily injury and property damage during delivery runs | delivery-van-insurance | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| Motor truck cargo protects packages and goods carried | delivery-van-insurance | VERIFIED | Standard motor truck cargo coverage scope | None |
| Interstate for-hire flatbed carriers need FMCSA operating authority | flatbed-truck-insurance | VERIFIED | fmcsa.dot.gov/registration/get-mc-number-authority-operate | None |
| Must file proof of financial responsibility (MCS-90 for carriers hauling regulated commodities) | flatbed-truck-insurance | INCORRECT | 49 CFR § 387.7; Form MCS-90 (fmcsa.dot.gov) | Fixed: proof of financial responsibility, including MCS-90 endorsement on liability policy |
| Standard minimum for general freight is $750,000 | flatbed-truck-insurance | VERIFIED | 49 CFR § 387.9; fmcsa.dot.gov Insurance Filing Requirements | None |
| Oversize and overweight permits managed separately by VDOT | flatbed-truck-insurance | INCORRECT | dmv.virginia.gov hauling permits; vdot.virginia.gov/travel-traffic/freight | Fixed: oversize/overweight hauling permits issued through Virginia DMV |
| Commercial auto liability covers bodily injury and property damage on Virginia roads | flatbed-truck-insurance | VERIFIED | Va. SCC Virginia Auto Insurance Guide | None |
| Motor truck cargo covers freight on the deck | flatbed-truck-insurance | VERIFIED | Standard motor truck cargo coverage scope | None |
| GVW or combined vehicle weight over 10,001 lbs needs USDOT number | hotshot-truck-insurance | VERIFIED | fmcsa.dot.gov/registration/do-i-need-usdot-number | None |
| Carrying regulated freight for hire requires MC operating authority | hotshot-truck-insurance | VERIFIED | fmcsa.dot.gov/registration/get-mc-number-authority-operate | None |
| MCS-90 endorsement guarantees public liability up to FMCSA minimums | hotshot-truck-insurance | VERIFIED | Form MCS-90; 49 CFR § 387.15 (fmcsa.dot.gov) | None |
| BOC-3 process agent filing required | hotshot-truck-insurance | VERIFIED | fmcsa.dot.gov OP-1 instructions | None |
| Drug and alcohol testing compliance required | hotshot-truck-insurance | EXEMPT | 49 CFR Part 382 (applies when CDL required) | None |
| Pump trucks over 26,001 lbs GVW require a CDL | pump-truck-insurance | INCORRECT | fmcsa.dot.gov/registration/commercial-drivers-license/drivers | Fixed: GVWR threshold wording |
| Interstate for-hire operation triggers FMCSA requirements | pump-truck-insurance | VERIFIED | fmcsa.dot.gov/faq/how-do-i-determine-whether-i-am-subject-fmcsas-safety-regulations | None |
| Virginia permitting requirements for oversize pump trucks with extended boom assemblies | pump-truck-insurance | VERIFIED | vdot.virginia.gov/travel-traffic/freight; DMV hauling permits | Clarified as hauling permits |
| Spoilage from reefer mechanical failure typically excluded without reefer breakdown endorsement | refrigerated-truck-insurance | EXEMPT | Standard motor truck cargo policy exclusion | None |
| Interstate refrigerated carriers typically need FMCSA operating authority and MCS-90 | refrigerated-truck-insurance | VERIFIED | 49 CFR Part 387; fmcsa.dot.gov Insurance Filing Requirements | None |
| Carriers hauling FDA-regulated commodities may have FSMA documentation requirements | refrigerated-truck-insurance | VERIFIED | FDA Sanitary Transportation Rule (fda.gov/fsma) | None |

---

### Batch D3 — data/vehicles.ts: stake-body-truck, tank-truck, truck-tractor, auto-hauler-trailer, dump-trailer

**Status:** Complete  
**Claims reviewed:** 17  
**Fixes applied:** 5  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability on all business-registered vehicles | stake-body-truck-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Stake body trucks over 26,001 lbs GVW require a CDL | stake-body-truck-insurance | VERIFIED | dmv.virginia.gov/licenses-ids/cdl | None |
| Tank trucks hauling regulated hazardous materials in interstate commerce need a Hazmat Safety Permit | tank-truck-insurance | INCORRECT | 49 CFR § 385.403; FMCSA HMSP FAQ (fmcsa.dot.gov) | Fixed: narrowed to "certain high-risk hazardous materials" per § 385.403 list |
| FMCSA operating authority with financial responsibility up to $5,000,000 for certain hazardous materials | tank-truck-insurance | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(3) (ecfr.gov) | None |
| Virginia enforces VDOT hazmat routing requirements | tank-truck-insurance | INCORRECT | vdot.virginia.gov/travel-traffic/freight/hazmat | Fixed: VDOT restricts hazmat through select state-owned tunnels and designated truck routes |
| FMCSA minimum primary liability is $750,000 for general freight, higher for hazardous materials | truck-tractor-insurance | VERIFIED | 49 CFR § 387.9 (ecfr.gov) | None |
| Every interstate for-hire motor carrier needs FMCSA operating authority, USDOT number, and BOC-3 filing | truck-tractor-insurance | VERIFIED | 49 CFR § 366.6; FMCSA Form BOC-3 (fmcsa.dot.gov) | None |
| MCS-90 endorsement guarantees public liability | truck-tractor-insurance | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| Primary liability minimums: $750,000 general freight, $1 million oil, $5 million certain hazmat | truck-tractor-insurance | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| FMCSA minimum financial responsibility for hauling four or more vehicles is $750,000 | auto-hauler-trailer-insurance | INCORRECT | FMCSA Part 387 Q&A on transported vehicles (fmcsa.dot.gov); 49 CFR § 387.9 | Fixed: removed vehicle-count threshold; noted $750,000 non-hazardous or $1,000,000 for fueled vehicles |
| Auto haulers transporting four or more vehicles in interstate commerce need FMCSA operating authority | auto-hauler-trailer-insurance | INCORRECT | 49 CFR § 387.9; FMCSA operating authority requirements (fmcsa.dot.gov) | Fixed: authority based on interstate for-hire status, not vehicle count |
| Auto hauler liability minimum is $750,000 | auto-hauler-trailer-insurance | INCORRECT | FMCSA guidance: transported vehicles are HM (UN 3166), requiring $1,000,000 (fmcsa.dot.gov) | Fixed: $1,000,000 public liability when transporting fueled vehicles |
| Combination unit liability must meet FMCSA minimums for for-hire carriers (without interstate qualifier) | dump-trailer-insurance | INCORRECT | 49 CFR § 387.9; dmv.virginia.gov property carrier guidance | Fixed: narrowed to interstate for-hire carriers |
| For-hire bulk carriers operating interstate need FMCSA authority and MCS-90 endorsement | dump-trailer-insurance | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| Virginia intrastate bulk haulers must carry minimum state liability limits (unspecified) | dump-trailer-insurance | INCORRECT | dmv.virginia.gov/businesses/motor-carriers/intrastate/prop-nobulk; Va. Code § 46.2-472(B) | Fixed: $750,000 for for-hire over 10,000 lbs GVWR plus 50/100/25 registration baseline |
| Overweight operations require VDOT permits | dump-trailer-insurance | INCORRECT | vdot.virginia.gov/travel-traffic/freight/truck-restrictions (redirects to DMV hauling permits) | Fixed: overweight loads require hauling permits through Virginia DMV |
| Virginia minimum liability is 50/100/25 as of January 1, 2025 | dump-trailer-insurance | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | Incorporated into corrected dump-trailer copy |

---

### Batch D4 — data/vehicles.ts: bulk-commodity-trailer, concession-trailer, dry-freight-trailer, transfer-dump-trailer, pole-trailer

**Status:** Complete  
**Claims reviewed:** 17  
**Fixes applied:** 5  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Commercial auto liability for the combination unit must meet FMCSA minimums for for-hire carriers | bulk-commodity-trailer-insurance | INCORRECT | 49 CFR § 387.9; 49 CFR § 387.7 (ecfr.gov) | Fixed: added "interstate" qualifier; FMCSA financial responsibility applies to qualifying interstate motor carriers, not all for-hire operations |
| For-hire interstate dry bulk carriers need FMCSA authority and MCS-90 endorsement | bulk-commodity-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| Agricultural commodity haulers may have exemptions for certain intrastate operations under Virginia farm vehicle rules | bulk-commodity-trailer-insurance | VERIFIED | Va. Code § 46.2-649.3, § 46.2-649.4 (law.lis.virginia.gov) | None |
| Tow vehicle needs commercial auto liability | concession-trailer-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Trailer needs physical damage coverage | concession-trailer-insurance | EXEMPT | Contractual/prudent practice, not a statutory minimum | None |
| When deployed at events, general liability and product liability per most event contracts | concession-trailer-insurance | EXEMPT | Contractual requirement, not a regulatory threshold | None |
| Virginia Department of Health permits are required for food service | concession-trailer-insurance | VERIFIED | VDH Mobile Unit general requirements (vdh.virginia.gov) | None |
| Commercial auto liability for the combination unit must meet FMCSA minimums | dry-freight-trailer-insurance | INCORRECT | 49 CFR § 387.9 (ecfr.gov) | Fixed: added "interstate for-hire" qualifier |
| For-hire interstate dry freight carriers need FMCSA operating authority and financial responsibility at a minimum of $750,000 | dry-freight-trailer-insurance | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| Trailers used in trailer interchange must carry trailer-interchange coverage | dry-freight-trailer-insurance | EXEMPT | Carrier interchange agreements and UIIA; not a Virginia or FMCSA statutory mandate | None |
| Commercial auto liability for the tractor-trailer combination must meet regulatory minimums for for-hire carriers | transfer-dump-trailer-insurance | INCORRECT | 49 CFR § 387.9 (ecfr.gov) | Fixed: "regulatory minimums for for-hire carriers" → "FMCSA minimums for interstate for-hire carriers" |
| For-hire aggregate carriers operating interstate need FMCSA authority and MCS-90 endorsement | transfer-dump-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15 (ecfr.gov) | None |
| Overweight operations require VDOT permits | transfer-dump-trailer-insurance | INCORRECT | vdot.virginia.gov/travel-traffic/freight; Va. Code § 46.2-1140 et seq. (law.lis.virginia.gov) | Fixed: "VDOT permits" → "DMV hauling permits" (DMV issues standard oversize/overweight permits) |
| Virginia intrastate dump truck and trailer operations are regulated under state commercial vehicle rules | transfer-dump-trailer-insurance | VERIFIED | Va. Code Title 46.2, Ch. 10; dmv.virginia.gov/commercial | None |
| Pole trailers operating interstate in for-hire commerce need FMCSA authority | pole-trailer-insurance | VERIFIED | 49 CFR Part 387 (ecfr.gov) | None |
| Oversize loads require VDOT oversize/overweight permits | pole-trailer-insurance | INCORRECT | vdot.virginia.gov/travel-traffic/freight; Va. Code Art. 18, Ch. 10 (law.lis.virginia.gov) | Fixed: "VDOT oversize/overweight permits" → "DMV hauling permits" |
| Log hauling may be subject to specific Virginia forestry transport regulations | pole-trailer-insurance | VERIFIED | Va. Code § 46.2-1148.1, § 46.2-1149.2, § 46.2-1155 (law.lis.virginia.gov) | None |

---

### Batch D5 — data/vehicles.ts: refrigerated-trailer, tank-trailer, rag-top-trailer, flatbed-trailer, gooseneck-trailer

**Status:** Complete  
**Claims reviewed:** 16  
**Fixes applied:** 5  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Without reefer breakdown endorsement, refrigeration failure cargo claims are typically excluded from standard motor truck cargo | refrigerated-trailer-insurance | EXEMPT | Standard cargo policy form scope | None |
| For-hire interstate reefer carriers need FMCSA operating authority and MCS-90 endorsement | refrigerated-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Insurance Filing Requirements (fmcsa.dot.gov) | None |
| GDP regulations set coverage minimums for pharmaceutical carriers | refrigerated-trailer-insurance | INCORRECT | USP General Chapter 1083 (insurance needs as documented procedure, not statutory minimums) | Fixed: reworded to GDP-aligned carrier qualifications and contractual cargo limits |
| FMCSA financial responsibility minimums are higher for hazmat carriers | tank-trailer-insurance | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov / FMCSA Safety Planner) | None |
| Standard cargo policies typically exclude pollution cleanup costs | tank-trailer-insurance | EXEMPT | Standard cargo policy pollution exclusion | None |
| Hazmat tank carriers need FMCSA authority with $1M–$5M financial responsibility depending on hazmat class | tank-trailer-insurance | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(3) (fmcsa.dot.gov) | None |
| Hazmat Safety Permit may be required for certain high-hazard materials | tank-trailer-insurance | VERIFIED | 49 CFR § 385.403; FMCSA HMSP program (fmcsa.dot.gov) | None |
| Virginia VDOT hazmat routing regulations apply to specific corridors | tank-trailer-insurance | INCORRECT | vdot.virginia.gov/travel-traffic/freight/hazmat (DMV size/weight rules; VDOT tunnel restrictions only) | Fixed: tunnel restrictions and designated truck routes |
| Oversize cargo hauls may require VDOT oversize permits | rag-top-trailer-insurance | INCORRECT | dmv.virginia.gov/businesses/hauling; vdot.virginia.gov/travel-traffic/freight | Fixed: Virginia DMV hauling permits |
| For-hire interstate carriers need FMCSA authority and MCS-90 endorsement | rag-top-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| For-hire interstate flatbed carriers need FMCSA operating authority and MCS-90 endorsement | flatbed-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| Oversize and overweight loads require VDOT permits | flatbed-trailer-insurance | INCORRECT | dmv.virginia.gov/businesses/hauling | Fixed: Virginia DMV hauling permits |
| Load securement regulations under 49 CFR 393 apply to flatbed operations | flatbed-trailer-insurance | VERIFIED | 49 CFR § 393.100(a)–(b) (ecfr.gov) | None |
| Equipment haulers in interstate for-hire commerce need FMCSA authority and MCS-90 endorsement | gooseneck-trailer-insurance | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| Overweight and oversize loads require VDOT permits | gooseneck-trailer-insurance | INCORRECT | dmv.virginia.gov/businesses/hauling | Fixed: Virginia DMV hauling permits |
| Trailers up to 80,000 lbs GVW and beyond require oversize permits when overweight | gooseneck-trailer-insurance | VERIFIED | dmv.virginia.gov/businesses/hauling (legal weight/dimension limits; permits when exceeded) | None |

---

### Batch D6 — data/vehicles.ts: horse-trailer, livestock-trailer, logging-trailer, lowboy-trailer, tilt-trailer

**Status:** Complete  
**Claims reviewed:** 17  
**Fixes applied:** 6  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability for business-use tow vehicles | horse-trailer-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| For-hire animal transport may require USDA animal transport registration | horse-trailer-insurance | INCORRECT | 7 U.S.C. § 2132(g)(2) AWA excludes horses not used for research; APHIS AWA registration applies to regulated AWA animals only (aphis.usda.gov) | Fixed: replaced with interstate animal health entry and CVI requirements |
| Virginia Horse Center and venues require contract liability limits | horse-trailer-insurance | EXEMPT | Contractual, not statutory | None |
| Livestock transport regulated under Twenty-Eight Hour Law | livestock-trailer-insurance | VERIFIED | 49 U.S.C. § 80502; APHIS 28-Hour Law (aphis.usda.gov) | None |
| Livestock transport regulated under USDA animal welfare standards | livestock-trailer-insurance | INCORRECT | 7 U.S.C. § 2132(g) AWA excludes farm livestock from regulated animals; 9 CFR Part 89 covers 28-hour transport only | Fixed: narrowed to federal Twenty-Eight Hour Law |
| For-hire interstate livestock haulers need FMCSA authority | livestock-trailer-insurance | INCORRECT | 49 CFR § 387.7; FMCSA insurance filing requirements (fmcsa.dot.gov) | Fixed: added combined GVWR over 10,001 pounds and MCS-90 endorsement |
| Virginia has agricultural inspection requirements for animals entering the state | livestock-trailer-insurance | VERIFIED | 2VAC5-141-35 (law.lis.virginia.gov) | None |
| Agricultural vehicle exemptions apply to some intrastate farm-to-farm moves | livestock-trailer-insurance | VERIFIED | Va. Code §§ 46.2-665, 46.2-698 (law.lis.virginia.gov); dmv.virginia.gov farm registration | None |
| For-hire interstate log haulers need FMCSA authority and MCS-90 endorsement | logging-trailer-insurance | INCORRECT | 49 CFR § 387.7, § 387.15 (ecfr.gov); FMCSA insurance filing requirements (fmcsa.dot.gov) | Fixed: added combined GVWR over 10,001 pounds qualifier |
| Virginia enforces log truck load limits via forest product overweight permits | logging-trailer-insurance | VERIFIED | Va. Code § 46.2-1148.1 (law.lis.virginia.gov) | None |
| Virginia has seasonal weight restrictions on unpaved forest roads for log trucks | logging-trailer-insurance | INCORRECT | Va. Code § 46.2-1148.1; VDOT truck restrictions (vdot.virginia.gov) address posted bridge/route limits, not statewide seasonal forest-road restrictions | Fixed: replaced with forest product overweight and tree-length log permits |
| Oversize/overweight operations require VDOT permits | lowboy-trailer-insurance | INCORRECT | dmv.virginia.gov/businesses/hauling; VDOT freight page directs carriers to DMV hauling permits | Fixed: changed VDOT permits to DMV hauling permits (both sections) |
| For-hire interstate heavy haulers need FMCSA authority and MCS-90 endorsement | lowboy-trailer-insurance | INCORRECT | 49 CFR § 387.7, § 387.15 (ecfr.gov) | Fixed: added combined GVWR over 10,001 pounds qualifier |
| Loads over 100,000 lbs typically need engineered route surveys | lowboy-trailer-insurance | INCORRECT | dmv.virginia.gov/apps/vahps/weight_allowance.aspx (superload triggered when weight exceeds routine allowance for axle configuration, not a fixed 100,000 lb threshold) | Fixed: reworded to superload review when exceeding routine weight allowances |
| Virginia requires commercial auto liability for the tow vehicle | tilt-trailer-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Private owners may use personal auto; for-hire haulers need commercial coverage | horse-trailer-insurance | EXEMPT | General insurance guidance | None |
| Equipment on trailer at rest may need inland marine coverage | tilt-trailer-insurance | EXEMPT | Coverage product guidance | None |

---

### Batch D7 — data/vehicles.ts: commercial-travel-trailer, utility-trailer, large-utility-trailer, wedge-trailer, business-passenger-car

**Status:** Complete  
**Claims reviewed:** 11  
**Fixes applied:** 2  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability on the tow vehicle | commercial-travel-trailer-insurance | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| Travel trailers used commercially need commercial property coverage for contents separate from a personal RV policy | commercial-travel-trailer-insurance | EXEMPT | Insurance product distinction, not a statutory threshold | None |
| Virginia requires liability coverage on the tow vehicle | utility-trailer-insurance | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| Trailers under 10,001 lbs GVW typically do not require separate registration unless commercial | utility-trailer-insurance | INCORRECT | Va. Code § 46.2-600 (law.lis.virginia.gov); dmv.virginia.gov/vehicles/registration/trailer | Fixed: every trailer must be registered separately before highway use, regardless of weight |
| Virginia requires liability coverage on the tow vehicle | large-utility-trailer-insurance | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| Large utility trailers over 10,001 lbs GVW need separate registration as commercial trailers | large-utility-trailer-insurance | INCORRECT | Va. Code § 46.2-600; 49 CFR § 390.5 (10,001 lbs is FMCSA CMV threshold, not registration cutoff) | Fixed: all trailers need separate registration; noted FMCSA rules for interstate for-hire over 10,001 lbs GVWR |
| Virginia requires commercial auto liability on the tow vehicle | wedge-trailer-insurance | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| Wedge trailers used for commercial hauling need trailer physical damage and cargo coverage | wedge-trailer-insurance | EXEMPT | Coverage recommendation, not a statutory requirement | None |
| Virginia requires commercial auto liability on all business-registered vehicles | business-passenger-car-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| As of January 1, 2025, the state minimum liability is 50/100/25 | business-passenger-car-insurance | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| A personal auto policy will not cover employees driving company sedans for business | business-passenger-car-insurance | EXEMPT | General insurance practice (business-use exclusion), not a statutory threshold | None |

---

### Batch D8 — data/vehicles.ts: cargo-van, hearse, limousine, commercial-minivan, passenger-van

**Status:** Complete  
**Claims reviewed:** 15  
**Fixes applied:** 4  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Virginia requires commercial auto liability on all business-registered vehicles | cargo-van-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Cargo vans operating interstate over 10,001 lbs GVW may be subject to FMCSA requirements | cargo-van-insurance | VERIFIED | 49 CFR § 390.5 (fmcsa.dot.gov) | None |
| Virginia requires commercial auto liability on all business-registered vehicles | hearse-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Funeral escorts and processions are governed by Virginia Code and local ordinances | hearse-insurance | VERIFIED | Va. Code §§ 46.2-828, 46.2-828.1 (law.lis.virginia.gov) | None |
| For-hire funeral transport may require a Virginia for-hire vehicle registration | hearse-insurance | VERIFIED | dmv.virginia.gov/businesses/motor-carriers/intrastate | None (qualified with "may") |
| Virginia classifies traditional limousine service as contract passenger carrier transportation | limousine-insurance | VERIFIED | Va. Code § 46.2-2000; dmv.virginia.gov/businesses/motor-carriers/intrastate/contract-passenger | Fixed: "for-hire livery" → "contract passenger carrier" |
| Limousine operators need intrastate operating authority, seating-based liability limits, and for-hire registration | limousine-insurance | VERIFIED | Va. Code §§ 46.2-2000, 46.2-2053; dmv.virginia.gov/businesses/motor-carriers/intrastate/plate-require | Incorporated in revised copy |
| Uber Black operators are classified as for-hire livery | limousine-insurance | INCORRECT | Va. Code § 46.2-2000 (TNC partner vehicle); § 46.2-2099.52 (law.lis.virginia.gov) | Fixed: noted Uber Black follows Virginia TNC rules, not motor carrier livery |
| Virginia requires commercial auto liability on all business-registered vehicles | commercial-minivan-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Minivans used to transport passengers for compensation need for-hire coverage and for-hire vehicle registration | commercial-minivan-insurance | VERIFIED | dmv.virginia.gov/businesses/motor-carriers/intrastate; Va. Code § 46.2-2053 | None |
| Passenger vans operating for hire need for-hire registration and minimum liability limits based on seating capacity | passenger-van-insurance | VERIFIED | Va. Code § 46.2-2053 ($350k 1–6 pax, $1.5M 7–15, $5M 16+); dmv.virginia.gov/businesses/motor-carriers/intrastate | Fixed: added intrastate operating authority; replaced vague "higher" with seating-based limits |
| FMCSA regulates interstate for-hire passenger carriers under 49 CFR 365 only | passenger-van-insurance | INCORRECT | 49 CFR Parts 365, 387; fmcsa.dot.gov/registration/small-passenger-carrying-vehicles | Fixed: Parts 365 and 387; added 9–15 passenger interstate threshold |
| Church and nonprofit vans transporting members may have specific exemptions | passenger-van-insurance | VERIFIED | Va. Code §§ 46.2-2071, 46.2-2073 (Article 5 nonprofit/tax-exempt carriers) | Softened to "separate permit rules" |

---

### Batch D9 — data/vehicles.ts: commercial-pickup, commercial-suv, wheelchair-van, luxury-suv, commercial-motorhome

**Status:** Complete  
**Claims reviewed:** 12  
**Fixes applied:** 2  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Personal auto policies usually exclude business-use claims | commercial-pickup-insurance | EXEMPT | General insurance practice, not a statutory threshold | None |
| Virginia requires commercial auto liability on all business-registered vehicles | commercial-pickup-insurance | VERIFIED | Va. Code § 46.2-706; § 46.2-472 (law.lis.virginia.gov) | None |
| Combined GVW of pickup and trailer determines applicable commercial vehicle regulations | commercial-pickup-insurance | VERIFIED | dmv.virginia.gov CDL classifications (GCWR 26,001+ lbs; towed GVWR 10,000+ lbs) | None |
| Virginia requires commercial auto liability on all business-registered vehicles | commercial-suv-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| As of January 1, 2025, Virginia minimum liability is 50/100/25 | commercial-suv-insurance | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| NEMT providers under Medicaid contracts must carry minimum liability limits per DMAS requirements | wheelchair-van-insurance | VERIFIED | dmas.virginia.gov NEMT Driver, Attendant, and Vehicle Requirements (wheelchair vans: amount required by DMV) | None |
| For-hire accessible transport requires Virginia for-hire vehicle registration | wheelchair-van-insurance | VERIFIED | dmv.virginia.gov intrastate operating authority and for-hire registration | None |
| ADA compliance does not create insurance requirements | wheelchair-van-insurance | VERIFIED | ADA Title III (no insurance mandate); passenger exposure is operational risk | None |
| Luxury SUVs used for for-hire transport need for-hire registration and commercial livery liability | luxury-suv-insurance | INCORRECT | Va. Code § 46.2-2000, § 46.2-2099.52 (TNC); § 46.2-2053 (motor carrier livery) | Fixed: distinguished contract passenger/livery from Virginia TNC platform service |
| Minimum state liability limits apply to all commercial vehicles (implied 50/100/25) | luxury-suv-insurance | INCORRECT | Va. Code § 46.2-2053 ($350,000 for 1–6 passenger for-hire); dmv.virginia.gov Motor Carrier Manual | Fixed: replaced with passenger-capacity motor carrier minimums and TNC rules |
| Virginia requires commercial auto liability on all business-registered vehicles | commercial-motorhome-insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| Motor homes used as for-hire passenger vehicles have additional requirements | commercial-motorhome-insurance | VERIFIED | Va. Code § 46.2-2053; dmv.virginia.gov passenger carrier operating authority | None |

---

### Batch D10 — data/vehicles.ts: bus, wheelchair-bus, school-bus, front-loader-truck, garbage-truck, roll-off-truck

**Status:** Complete  
**Claims reviewed:** 23  
**Fixes applied:** 5  

| Claim | Vehicle slug | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| FMCSA requires for-hire interstate carriers operating buses with seating for 16 or more passengers (including the driver) to maintain $5 million liability | bus-insurance | VERIFIED | 49 CFR 387.33; fmcsa.dot.gov | None |
| Interstate for-hire bus operators regulated under 49 CFR 365 | bus-insurance | VERIFIED | 49 CFR Part 365; fmcsa.dot.gov | None |
| Buses designed for 16 or more passengers need operating authority and $5 million liability | bus-insurance | VERIFIED | 49 CFR 387.33; fmcsa.dot.gov | None |
| Smaller for-hire buses (9–15 passengers) need $1.5 million | bus-insurance | INCORRECT | 49 CFR 387.33 (15 or fewer); Va. Code 46.2-2053(B) ($350,000 for 1–6 passengers) | Fixed: FMCSA 15-or-fewer tier; added Virginia intrastate tiers |
| Virginia requires for-hire vehicle registration for passenger carriers | bus-insurance | VERIFIED | Va. Code 46.2-2053; Ch. 20 motor carriers | None |
| For-hire accessible transport must meet FMCSA or Virginia passenger carrier requirements | wheelchair-bus-insurance | VERIFIED | 49 CFR 387.33; Va. Code 46.2-2053 | None |
| NEMT operators in Virginia may be regulated by DMAS | wheelchair-bus-insurance | VERIFIED | dmas.virginia.gov NEMT driver/vehicle requirements | None |
| NEMT operators must carry minimum liability limits per contract | wheelchair-bus-insurance | VERIFIED | dmas.virginia.gov NEMT driver/vehicle requirements | None |
| For-hire accessible bus operations need Virginia for-hire registration and FMCSA authority if operating interstate | wheelchair-bus-insurance | VERIFIED | Va. Code 46.2-2053; 49 CFR Part 365 | None |
| Virginia has specific vehicle inspection and driver requirements for school buses | school-bus-insurance | VERIFIED | 8VAC20-70; Va. Code 22.1-178 | None |
| Private school operators must comply with VDOT regulations | school-bus-insurance | INCORRECT | 8VAC20-70 (VDOE); Va. Code 22.1-180 | Fixed: VDOE pupil transportation regulations |
| Federal regulations apply to for-hire operators; FMCSA requires higher liability minimums for larger buses | school-bus-insurance | INCORRECT | fmcsa.dot.gov school bus guidance; 49 CFR 387.27 | Fixed: noted school-sponsored extracurricular exemption from Part 387 |
| Waste haulers operating interstate need FMCSA authority (unqualified) | front-loader-truck-insurance | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: narrowed to for-hire interstate commerce over 10,000 lbs GVWR |
| Virginia DEQ regulates waste transport and may impose hazardous waste insurance requirements | front-loader-truck-insurance | VERIFIED | 9VAC20-60; 9VAC20-81 | None |
| Municipal contracts typically specify minimum liability limits | front-loader-truck-insurance | EXEMPT | Contractual practice | None |
| Intrastate for-hire property carriers over 10,000 lbs GVWR need $750,000 | front-loader-truck-insurance | VERIFIED | Va. Code 46.2-2143.1(B) | Incorporated in corrected copy |
| Interstate for-hire general freight over 10,001 lbs GVWR needs $750,000 FMCSA minimum | front-loader-truck-insurance | VERIFIED | 49 CFR 387.9 | Incorporated in corrected copy |
| Virginia waste haulers operating interstate or under RCRA need FMCSA authority (unqualified) | garbage-truck-insurance | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: narrowed to qualifying for-hire motor carriers |
| Regulated hazardous waste may require elevated financial responsibility | garbage-truck-insurance | VERIFIED | 49 CFR 387.9 Table 1; 9VAC20-60 | Incorporated in corrected copy |
| Virginia DEQ may impose requirements for solid waste transporters | garbage-truck-insurance | VERIFIED | 9VAC20-81 | None |
| Roll-off trucks operating interstate for-hire need FMCSA authority (unqualified) | roll-off-truck-insurance | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: added for-hire and 10,000 lbs GVWR qualification |
| Virginia solid waste regulations and local ordinances govern debris disposal and transport | roll-off-truck-insurance | VERIFIED | 9VAC20-81; local solid waste ordinances | None |
| Construction and demolition waste may require manifesting for certain materials | roll-off-truck-insurance | INCORRECT | 9VAC20-170 (manifesting applies to vessel transport on state waters, not typical highway roll-off) | Fixed: regulated hazardous/medical wastes carry separate documentation |

---

### Batch E1 — data/locations.ts: page cities (7)

**Status:** Complete  
**Claims reviewed:** 12  
**Fixes applied:** 2  

| Claim | City/Section | Verdict | Source | Action |
|-------|-------------|---------|--------|--------|
| Fairfax operators tend to carry liability limits above the Virginia minimum | Fairfax / Commercial Vehicles in Fairfax County | EXEMPT | General industry practice; no specific threshold stated | None |
| Contractors need proof of specific liability limits and additional-insured status before starting work | Fairfax / Coverage for Fairfax Contractors | EXEMPT | Contract-driven requirement, not a statutory threshold | None |
| Uber Black work is for-hire livery, not standard rideshare | Arlington / Livery and Black-Car Coverage | INCORRECT | Va. Code § 46.2-2000 (prearranged ride, TNC partner vehicle); § 46.2-2099.52 (law.lis.virginia.gov) | Fixed: reframed as TNC framework using a personal vehicle |
| Uber Black requires commercial livery coverage satisfying Virginia and platform limits | Arlington / Livery and Black-Car Coverage | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance, $1M while passenger aboard) | Fixed: Virginia TNC insurance requirements and TNC-compatible coverage |
| Logistics operators often need motor truck cargo alongside commercial auto liability | Chantilly / Coverage for Chantilly Logistics | EXEMPT | Standard coverage pairing advice, not a regulatory mandate | None |
| Construction operators frequently need higher limits and additional-insured certificates | Chantilly / Coverage for Chantilly Logistics | EXEMPT | Contract-driven requirement | None |
| Stafford contractors face contract requirements for specific liability limits and additional-insured status | Stafford / Coverage for Stafford Contractors | EXEMPT | Contract-driven requirement | None |
| Dual-market operators often need broader radius-of-operation coverage; haulers need motor truck cargo | Fredericksburg / Coverage for Fredericksburg Contractors | EXEMPT | Coverage product guidance, not a statutory threshold | None |
| Haulers running I-81 often need motor truck cargo and limits suited to long-haul work | Winchester / Coverage for Winchester Operators | EXEMPT | Operational coverage advice | None |
| Freight and haul operators often need motor truck cargo coverage | Richmond / Coverage for Richmond Trucking | EXEMPT | Standard coverage product description | None |
| For interstate work, federal filings such as the MCS-90 endorsement | Richmond / Coverage for Richmond Trucking | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None (qualified with "often need" and "such as") |
| Larger fleet policies can be experience-rated to reward a strong safety record | Richmond / Coverage for Richmond Trucking | VERIFIED | NAIC Model Rating Law; Virginia SCC PC filing guidelines (experience rating plans) | None |

---

### Batch E2 — data/locations.ts: generic template + non-page cities (7)

**Status:** Complete  
**Claims reviewed:** 4  
**Fixes applied:** 0  

| Claim | Location | Verdict | Source | Action |
|-------|----------|---------|--------|--------|
| Cascade Trucks Insurance writes commercial auto, trucking, and fleet coverage for businesses | `fallbackContent()` § "Commercial Vehicle Coverage for {city} Businesses" body[0] (Alexandria, Reston, Ashburn, Leesburg, Manassas, Woodbridge) | EXEMPT | Product/service offering, not a statutory threshold or coverage definition | None |
| Coverage tailored for dump trucks, contractor vans, and multi-vehicle fleets | `fallbackContent()` body[0] | EXEMPT | Vehicle-type marketing, not a regulatory requirement | None |
| Independent agency compares multiple carriers for competitive protection | `fallbackContent()` body[1] | EXEMPT | Business model / marketing language | None |
| Licensed Virginia advisors provide coverage | `fallbackContent()` heroSubheadline, shortDescription, body[1] | EXEMPT | Business credential; out of audit scope per project rules | None |

**Notes:** The `fallbackContent()` template (lines 302–317) is the sole body copy for all six non-page cities (`hasPage: false`). It contains no Virginia minimum liability limits (50/100/25), FMCSA filing language, MCS-90 references, or municipal tow-requirement claims. Referenced FAQ IDs (`location-local-rules`, `general-requirements`) live in `data/faqs.ts` and are outside this batch scope. No 50/100/25, FMCSA, or municipal tow claims were present to verify against primary sources.

---

### Batch F — Hub pages: app/page.tsx, app/about/page.tsx, app/quote/page.tsx + index pages

**Status:** Complete  
**Claims reviewed:** 16  
**Fixes applied:** 0  

| Claim | File | Verdict | Source | Action |
|-------|------|---------|--------|--------|
| Virginia-licensed advisors who know commercial trucking | app/page.tsx | EXEMPT | Va. Code § 38.2-1800 (producer licensing); business credential per audit scope | None |
| Independent agency based in Manassas, VA compares options across A-rated carriers | app/page.tsx | EXEMPT | Standard independent-agency and AM Best rating terminology; business info | None |
| From Northern Virginia to Richmond, we write commercial vehicle policies statewide | app/page.tsx | EXEMPT | Business service-area statement, not a statutory threshold | None |
| Licensed advisors who understand Northern Virginia and statewide operating conditions | app/page.tsx | EXEMPT | Local expertise marketing, not a verifiable regulatory fact | None |
| Independent agency with licensed advisors serving dump trucks, tow trucks, contractor vehicles, and fleets across Virginia | app/about/page.tsx | EXEMPT | Business specialty and credential statements | None |
| Serve Northern Virginia and businesses statewide from Manassas office | app/about/page.tsx | EXEMPT | Business service area | None |
| Compare options from carriers (Progressive, Erie, Cincinnati, National General, Foremost, Agency Insurance Company) | app/about/page.tsx | UNVERIFIABLE | Carrier appointments are business relationships, not regulatory facts | None |
| Virginia commercial truck and vehicle insurance specialists | app/about/page.tsx | EXEMPT | Marketing positioning | None |
| Licensed commercial lines team | app/about/page.tsx | EXEMPT | Business credential per audit scope | None |
| Office hours Monday–Friday 8am–6pm, Saturday 9am–1pm | app/about/page.tsx | EXEMPT | Business hours (out of audit scope) | None |
| A licensed Cascade advisor will follow up with competitive, no-obligation pricing | app/quote/page.tsx | EXEMPT | Operational sales process, not regulatory | None |
| Serves Northern Virginia, Richmond, and statewide (metadata) | app/locations/page.tsx | EXEMPT | Business service area | None |
| Write commercial truck and vehicle policies across Northern Virginia and the Commonwealth | app/locations/page.tsx | VERIFIED | Virginia Constitution Art. IV; official state designation as Commonwealth of Virginia | None |
| Each industry has unique exposures | app/industries/page.tsx | EXEMPT | General underwriting principle, not a statutory threshold | None |
| If you use it for business in Virginia, we can insure it | app/vehicles/page.tsx | EXEMPT | Operational sales promise, not a coverage or regulatory definition | None |
| Expert guides on Virginia commercial auto, dump truck, tow truck, fleet, and Uber Black insurance (metadata) | app/resources/page.tsx | EXEMPT | Subjective marketing descriptor | None |

**Note:** FAQ content on homepage, quote, and coverage index pages is rendered from `data/faqs.ts` (Batch A scope), not hardcoded in these hub files. Coverage and quote index pages contain no additional verifiable regulatory thresholds beyond generic product framing.

---

### Batch G — components/layout/Footer.tsx + components/marketing/TrustIndicators.tsx + components/forms/QuoteForm.tsx

**Status:** Complete  
**Claims reviewed:** 10  
**Fixes applied:** 0  

| Claim | File | Verdict | Source | Action |
|-------|------|---------|--------|--------|
| Coverage is subject to policy terms, conditions, and underwriting approval | Footer.tsx | VERIFIED | NAIC Advertisement Model Regulation (content.naic.org); standard insurance disclaimer practice | None |
| Cascade Trucks Insurance is a commercial vehicle insurance brand of Cascade Insurance Group | Footer.tsx | EXEMPT | Self-referential business structure, not a regulatory threshold | None |
| Serving businesses across Northern Virginia and the Commonwealth of Virginia | Footer.tsx | EXEMPT | Geographic service-area marketing, not a statutory claim | None |
| Independent agency | TrustIndicators.tsx | VERIFIED | Virginia SCC Insurance Agents & Agencies (scc.virginia.gov); industry usage for agencies representing multiple insurers | None |
| Backed by Cascade Insurance Group and multiple A-rated carrier partners | TrustIndicators.tsx | UNVERIFIABLE | AM Best rating scale is a recognized standard, but specific carrier appointments and ratings cannot be confirmed from primary sources in this review | None |
| Virginia specialists with local expertise in trucking and commercial vehicle coverage | TrustIndicators.tsx | EXEMPT | Subjective market-positioning language, not a licensing or coverage-definition claim | None |
| Talk to a licensed advisor | TrustIndicators.tsx | VERIFIED | Va. Code § 38.2-1800 (law.lis.virginia.gov): individuals who sell, solicit, or negotiate insurance must hold a Virginia producer license; "negotiate" includes offering advice to purchasers | None |
| Fast, no-obligation quotes | TrustIndicators.tsx | EXEMPT | Marketing language, not a regulatory threshold | None |
| No obligation to purchase after requesting a quote | QuoteForm.tsx | EXEMPT | Voluntary marketing assurance, not a statutory requirement | None |
| We never sell your information | QuoteForm.tsx | UNVERIFIABLE | Va. Code Title 38.2, Ch. 6 (insurance information privacy) restricts disclosure but permits sharing with insurers and affiliates for underwriting; absolute "never sell" claim requires human review of actual privacy and lead-handling practices | None |

---

### Consolidation Pass

**Status:** Complete  
**Stragglers found and fixed:** 10  
**Patterns checked:** garagekeepers/direct-primary, FMCSA haul-for-hire trigger, VDOT permits, experience modification, Uber Black TNC framing, MTC covered accident, trailer registration, car carrier liability, UM/UIM conflict  

| Pattern | Instances checked | Stragglers fixed | Notes |
|---------|------------------|-----------------|-------|
| garagekeepers/direct-primary | 12 | 0 | All fire/theft/vandalism/weather claims correctly tied to direct primary form in `services.ts` and `resources.ts`; `vehicles.ts` and `faqs.ts` mention garagekeepers without attributing those perils to legal liability |
| FMCSA haul-for-hire trigger | 5 | 5 | Fixed OR phrasing in `resources.ts` (2), `services.ts` (2), `faqs.ts` (1); narrowed to "interstate for-hire" |
| VDOT permits | 2 | 1 | Replaced `VDOT oversize permit` semantic entity on lowboy-trailer with `DMV hauling permit`; body copy correctly retains VDOT for superload bridge/structure review only |
| experience modification | 2 | 2 | Updated `semanticEntities` in fleet service and resource from workers comp term to `experience-rating`; body copy already correct |
| Uber Black TNC framing | 4 | 2 | Rewrote `faqs.ts` uber-black-requirements answer and full `resources.ts` uber-black-insurance-requirements guide; `services.ts` and `locations.ts` already corrected by batch agents |
| MTC covered accident | 1 | 0 | Only "covered cause of loss" phrasing found in dump-truck resource; remaining "covered accident" refers to MCS-90 liability, not motor truck cargo |
| trailer registration | 3 | 0 | D7 fixes confirmed in utility-trailer and large-utility-trailer entries; no remaining 10,001 lb registration exemption claims |
| car carrier liability | 2 | 0 | D1 fix confirmed at `car-carrier-insurance` line 228 ($1M for interstate auto haulers); `auto-hauler-trailer-insurance` also correct at line 1136 |
| UM/UIM conflict | resolved | — | Current copy uses softened BI-only wording: "generally at bodily injury limits tied to your liability coverage" (`resources.ts` virginia-commercial-auto-insurance-guide); no conflicting versions remain |

**Car-carrier straggler verification:** D1 already corrected `car-carrier-insurance` § Virginia and FMCSA Requirements (line 228 area). The prior four-vehicle/$750K claim is gone; copy now states $1,000,000 public liability for interstate auto haulers transporting fueled vehicles.

**Files modified in consolidation pass:** `data/faqs.ts`, `data/resources.ts`, `data/services.ts`, `data/vehicles.ts`

---

## Claim Log (all batches)

| File | Slug/Section | Original Claim | Verdict | Source URL | Action Taken |
|------|-------------|----------------|---------|------------|--------------|
| data/resources.ts | Virginia Minimum Liability Limits | Every vehicle registered in Virginia must carry liability insurance | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/resources.ts | Virginia Minimum Liability Limits | As of January 1, 2025, minimum liability is 50/100/25 ($50k/$100k/$25k) per Code of Virginia | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/resources.ts | Virginia Minimum Liability Limits | Virginia requires UM/UIM coverage at matching limits | INCORRECT | Va. Code § 38.2-2206(A) (law.lis.virginia.gov) | Fixed: UM/UIM PD floor is $20k for insured property damage; BI limits default to liability but may be reduced in writing per § 38.2-2202. Reworded to "generally at bodily injury limits tied to your liability coverage." |
| data/resources.ts | Federal Filings and For-Hire Operations | For-hire interstate carriers typically need operating authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/resources.ts | Federal Filings and For-Hire Operations | MCS-90 is a federally mandated guarantee that the public will be compensated after a covered accident | VERIFIED | 49 CFR § 387.15; MCS-90 endorsement text (fmcsa.dot.gov) | None |
| data/resources.ts | Federal Filings and For-Hire Operations | Operations crossing state lines or transporting goods for compensation often fall under FMCSA rules | VERIFIED | 49 CFR Part 387 (ecfr.gov) | None |
| data/resources.ts | Federal Filings and For-Hire Operations | For-hire passenger operations have their own registration and limit requirements | VERIFIED | 49 CFR Part 387; MCS-90B for passenger carriers (fmcsa.dot.gov) | None |
| data/resources.ts | When You Need Commercial Auto Insurance | Personal auto policies exclude business-use claims | EXEMPT | General insurance practice, not a statutory threshold | None |
| data/resources.ts | Virginia Minimum Liability Limits | Most commercial operators carry $500,000 or $1,000,000 liability | EXEMPT | Industry recommendation, not a legal requirement | None |
| data/resources.ts | — | GVW 10,001 lbs FMCSA jurisdiction threshold | EXEMPT | Not stated in this resource | None |
| data/resources.ts | The Coverage Types in a Dump Truck Policy | Commercial auto liability pays for injuries and property damage you cause to others | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/resources.ts | The Coverage Types in a Dump Truck Policy | Every operator needs commercial auto liability | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/resources.ts | The Coverage Types in a Dump Truck Policy | Contracts and the DMV expect commercial auto liability | VERIFIED | Va. Code § 46.2-706; DMV motor carrier insurance requirements (dmv.virginia.gov) | None |
| data/resources.ts | The Coverage Types in a Dump Truck Policy (bullets) | Physical damage consists of collision and comprehensive | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/resources.ts | The Coverage Types in a Dump Truck Policy (bullets) | Hired and non-owned auto covers rented and borrowed units | VERIFIED | Standard commercial auto policy extension (ISO CA 20 48) | None |
| data/resources.ts | Physical Damage: Collision and Comprehensive Explained | Collision pays to repair or replace your truck after an accident, regardless of fault | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/resources.ts | Physical Damage: Collision and Comprehensive Explained | Comprehensive covers non-collision losses (fire, theft, vandalism, falling objects, weather) | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/resources.ts | Physical Damage: Collision and Comprehensive Explained | Financed or leased trucks are almost always required to carry physical damage | EXEMPT | Lender/lessor contractual requirement, not statutory | None |
| data/resources.ts | Motor Truck Cargo Coverage for Virginia Haulers | Motor truck cargo covers hauled material when contract or job terms make you responsible | VERIFIED | FMCSA MCS-90 endorsement (cargo excluded from public liability); carrier legal liability principle | None |
| data/resources.ts | Motor Truck Cargo Coverage for Virginia Haulers | Motor truck cargo responds where liability and physical damage would not | VERIFIED | MCS-90 excludes cargo from liability coverage; physical damage covers the insured vehicle only | None |
| data/resources.ts | What Drives Dump Truck Insurance Premiums | GVW, axles, radius, cargo type, and driver MVR drive premiums | EXEMPT | General underwriting factors, not a statutory threshold | None |
| data/resources.ts | Required and Recommended Coverages, body | Commercial auto liability is required to operate tow trucks in Virginia | VERIFIED | Va. Code § 46.2-649.1(C) ($750,000 minimum for tow trucks registered under that section); Va. Code § 46.2-472 (general vehicle liability) | None |
| data/resources.ts | Required and Recommended Coverages, bullets; On-Hook vs. Garagekeepers, body | On-hook legal liability covers customer vehicles during tow, hookup, or recovery | VERIFIED | Virginia SCC Commercial Insurance Guide (truckers/garage policies for towing businesses); standard truckers policy coverage scope | None |
| data/resources.ts | Required and Recommended Coverages, bullets; On-Hook vs. Garagekeepers, body | Garagekeepers legal liability covers vehicles stored on operator lot or impound yard | VERIFIED | Virginia SCC Commercial Insurance Guide (garage policies for auto-related businesses) | None |
| data/resources.ts | On-Hook vs. Garagekeepers, body | On-hook responds when a vehicle is connected during tow and damaged in transit | VERIFIED | Standard on-hook / in-transit towing coverage definition (truckers policy form) | None |
| data/resources.ts | On-Hook vs. Garagekeepers, body | Garagekeepers responds for stored vehicles damaged by fire, theft, vandalism, or weather | VERIFIED | Standard garagekeepers coverage scope (direct primary form); legal liability form pays when operator is legally obligated | None |
| data/resources.ts | Virginia Filings and Municipal Compliance, body | Tow businesses in Virginia generally register with the DMV | VERIFIED | dmv.virginia.gov/vehicles/registration/tow-truck-reg (for-hire requires operating authority before registration) | None |
| data/resources.ts | Virginia Filings and Municipal Compliance, body | Localities with police-rotation or municipal tow lists require specific liability limits | VERIFIED | Va. Code § 46.2-1217 (localities may regulate police towing by ordinance or contract, including eligibility criteria) | None |
| data/resources.ts | Virginia Filings and Municipal Compliance, body; excerpt | Localities require naming the locality as additional insured on a certificate of insurance | VERIFIED | fairfaxcounty.gov/cableconsumer (trespass towing permit insurance requirements); alexandriava.gov permit guidelines (additional insured on COI) | None |
| data/resources.ts | Virginia Filings and Municipal Compliance, body | Municipal towing insurance and filing requirements vary by jurisdiction | VERIFIED | Va. Code § 46.2-1217 | None |
| data/resources.ts | Virginia Filings and Municipal Compliance, body | Operators towing across state lines or for hire may need federal filings | VERIFIED | fmcsa.dot.gov (for-hire tow trucks GVWR 10,000+ in interstate commerce: $750,000 financial responsibility; operating authority and insurance filings per 49 CFR Part 387) | None |
| data/resources.ts | Required and Recommended Coverages, body and bullets | Physical damage covers operator-owned wreckers and flatbeds | EXEMPT | Coverage product description, not a regulatory requirement | None |
| data/resources.ts | On-Hook vs. Garagekeepers, body | Many tow operators need both on-hook and garagekeepers coverage | EXEMPT | General operational advice | None |
| data/resources.ts | Common Mistakes, body | Skipping on-hook or letting additional-insured certificates lapse creates coverage or compliance gaps | EXEMPT | Agency guidance based on common industry gaps | None |
| data/resources.ts | How Fleet Policies Differ from Individual Policies | Once a business runs two or more vehicles, separate policies become inefficient and a fleet policy can combine them | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy eligibility; scc.virginia.gov); ISO fleet rating class (5+ self-propelled autos) is a pricing distinction, not a policy-availability rule | None |
| data/resources.ts | How Fleet Policies Differ from Individual Policies | Fleet policies carry liability, physical damage, and hired and non-owned auto as core coverages | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy coverages); hired/non-owned are standard optional BAP symbols, same as individual commercial auto | None |
| data/resources.ts | How Fleet Premiums Are Calculated | Fleet pricing reflects combined vehicle, driver, and operation risk (types, values, radius, cargo/work, loss history) | VERIFIED | Virginia SCC Commercial Insurance Guide ("type of vehicles driven, territory, expected mileage, usage, and loss experience") | None |
| data/resources.ts | How Fleet Premiums Are Calculated | Larger fleets may be evaluated on an experience-rating basis tied to claims record | VERIFIED | NAIC Model Rating Law (experience rating plans; content.naic.org) | None |
| data/resources.ts | Mixed Fleets: Trucks, Vans, and Trailers Together | A fleet policy can cover mixed vehicle types (trucks, vans, trailers) with each unit rated for its own use and value | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto and truckers policies; vehicle audits by use) | None |
| data/resources.ts | How Fleet Policies Differ (bullets) | Combined liability and physical damage across all units | EXEMPT | Product structure, not a statutory or coverage-definition claim | None |
| data/resources.ts | How Fleet Policies Differ (bullets) | One renewal date and centralized administration | EXEMPT | Product structure | None |
| data/resources.ts | Lowering Fleet Costs with Safety and Telematics | Driver screening and MVR checks reduce fleet risk | EXEMPT | General risk-management advice | None |
| data/resources.ts | Lowering Fleet Costs with Safety and Telematics | Telematics can unlock usage-based discounts with carriers that offer them | EXEMPT | Qualified carrier-dependent statement | None |
| data/resources.ts | How Fleet Policies Differ from Individual Policies | Insuring each vehicle separately is often more expensive than a combined fleet program | EXEMPT | Industry pricing generalization, not a legal threshold | None |
| data/services.ts | What Dump Truck Insurance Covers | Commercial auto liability pays bodily injury and property damage to others on Virginia roads | EXEMPT | Standard coverage definition, not a statutory threshold | None |
| data/services.ts | What Dump Truck Insurance Covers | Physical damage covers collision and comprehensive losses to the truck | EXEMPT | Standard coverage definition | None |
| data/services.ts | What Dump Truck Insurance Covers | Motor truck cargo covers dirt, gravel, stone, and fill hauled in the truck | EXEMPT | Standard inland marine/cargo product description | None |
| data/services.ts | What Dump Truck Insurance Covers | Hired and non-owned auto covers rented and borrowed units | EXEMPT | Standard coverage definition | None |
| data/services.ts | Virginia Requirements for Dump Truck Operators | Every dump truck registered in Virginia must carry liability coverage | VERIFIED | Va. Code § 46.2-706; § 46.2-435 (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Requirements for Dump Truck Operators | As of January 1, 2025 the state minimum liability is 50/100/25 | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Requirements for Dump Truck Operators | For-hire dump truck operators face only the 50/100/25 minimum (implied by omission) | INCORRECT | Va. Code § 46.2-2143.1(B); dmv.virginia.gov property carrier guidance | Fixed: added $750,000 Virginia minimum for for-hire operators with GVWR over 10,000 pounds |
| data/services.ts | Virginia Requirements for Dump Truck Operators | Hauling for hire or crossing state lines triggers MCS-90 and FMCSA operating authority | INCORRECT | 49 CFR § 387.9 (for-hire interstate GVWR 10,001+); FMCSA MCS-90 (fmcsa.dot.gov) | Fixed: narrowed to interstate for-hire commerce; intrastate for-hire and private interstate carriers have different rules |
| data/services.ts | Virginia Requirements for Dump Truck Operators | MCS-90 endorsement and FMCSA operating authority are federal filing types for qualifying motor carriers | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/services.ts | § On-Hook Coverage and Garagekeepers Explained | On-hook coverage pays for damage to a customer's vehicle while connected during a tow, hookup, or recovery | VERIFIED | scc.virginia.gov Commercial Insurance Guide (garage policies for towing/auto service businesses) | None |
| data/services.ts | § On-Hook Coverage and Garagekeepers Explained | Without on-hook, operator could be personally responsible for customer vehicle damage in their care | EXEMPT | General bailee-exposure advice; not a specific legal threshold | None |
| data/services.ts | § On-Hook Coverage and Garagekeepers Explained | Garagekeepers legal liability covers vehicles stored on lot or impound yard | VERIFIED | scc.virginia.gov Commercial Insurance Guide (garage policies) | None |
| data/services.ts | § On-Hook Coverage and Garagekeepers Explained | Garagekeepers legal liability responds to fire, theft, vandalism, and weather regardless of fault | INCORRECT | Filed garagekeepers endorsements (legal liability basis pays only when insured is legally obligated; direct primary covers perils regardless of fault) | Reworded to distinguish legal liability vs. direct primary forms |
| data/services.ts | § Tow Truck Insurance Coverages in Virginia | Commercial auto liability covers bodily injury and property damage while driving, hooking up, or recovering | VERIFIED | Virginia SCC Commercial Insurance Guide; standard commercial auto liability scope | None |
| data/services.ts | § Virginia Filing and Compliance Requirements | Tow businesses in Virginia generally register with the DMV | VERIFIED | dmv.virginia.gov/vehicles/registration/tow-truck-reg | None |
| data/services.ts | § Virginia Filing and Compliance Requirements | Police-ordered/municipal towing operators usually must carry locality-specified limits and name city/county as additional insured on COI | UNVERIFIABLE | Va. Code § 46.2-1217 (local ordinance/contract authority); specific limits and AI requirements vary by jurisdiction | None (language already qualified with "usually") |
| data/services.ts | § Virginia Filing and Compliance Requirements | Operators who tow across state lines or for hire may need federal filings | VERIFIED | fmcsa.dot.gov (49 CFR Part 387; MCS-90 for for-hire tow trucks 10,000+ lbs in interstate commerce) | None |
| data/services.ts | § Tow Truck Insurance Coverages bullets | On-hook and garagekeepers bullets accurately name standard towing coverages | VERIFIED | Standard garage/towing policy terminology | None |
| data/services.ts | What Semi Truck Insurance Covers, body ¶1 | FMCSA minimum primary liability is $750,000 for general freight (interstate for-hire) | VERIFIED | 49 CFR § 387.9 (ecfr.gov) | None |
| data/services.ts | What Semi Truck Insurance Covers, body ¶1 | Higher FMCSA minimums apply for oil, hazmat, and other regulated commodities | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(4) (ecfr.gov) | None |
| data/services.ts | FMCSA Filings and Compliance, body ¶1 | Interstate for-hire motor carriers need FMCSA operating authority, USDOT number, and BOC-3 process agent filing | VERIFIED | FMCSA Insurance Filing Requirements; FMCSA Form BOC-3; 49 CFR § 366.6 | None |
| data/services.ts | FMCSA Filings and Compliance, body ¶1 | MCS-90 endorsement guarantees public liability on the policy | VERIFIED | FMCSA Form MCS-90; 49 CFR § 387.15 | None |
| data/services.ts | FMCSA Filings and Compliance, body ¶1 | Primary liability minimums: $750,000 general freight, $1 million oil, up to $5 million certain hazmat | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| data/services.ts | FMCSA Filings and Compliance, body ¶2 | Virginia requires liability on every registered commercial vehicle | VERIFIED | Virginia Code § 46.2-706; dmv.virginia.gov/vehicles/insurance-requirements | None |
| data/services.ts | FMCSA Filings and Compliance, body ¶2 | Virginia state minimum is 50/100/25 as of January 1, 2025 (stated as applicable minimum for semi trucks) | INCORRECT | dmv.virginia.gov/general-freight-oa-navigator; Virginia Code § 46.2-472 | Fixed: noted $750,000 motor carrier requirement for tractors over 10,001 lbs GVWR |
| data/services.ts | FMCSA Filings and Compliance, body ¶2 (revised) | Virginia baseline registration minimum is 50/100/25 effective January 1, 2025 | VERIFIED | Virginia Code § 46.2-472; dmv.virginia.gov/vehicles/insurance-requirements | Incorporated into corrected copy |
| data/services.ts | What Semi Truck Insurance Covers, bullets | Primary auto liability meeting FMCSA minimums (bullet) | VERIFIED | 49 CFR § 387.9 | None |
| data/services.ts | What Semi Truck Insurance Covers, body ¶2 | Bobtail or unladen liability covers miles when not under dispatch | EXEMPT | — | Industry coverage term; advisory, not a regulatory definition |
| data/services.ts | What Semi Truck Insurance Covers, bullets | Bobtail liability for unladen travel (bullet) | EXEMPT | — | Industry coverage term |
| data/services.ts | What Semi Truck Insurance Covers, body ¶2 | Leased owner-operators must know which policy is primary during loaded, empty, and bobtail travel | EXEMPT | — | Contractual advisory, not a verifiable regulatory claim |
| data/services.ts | § "Coverage for Contractor Trucks and Vans" body[0] | Contractor vehicle insurance starts with commercial auto liability and physical damage for work trucks and vans | VERIFIED | Virginia SCC Commercial Insurance Guide; ISO CA 00 01 Business Auto Coverage Form | None |
| data/services.ts | § "Coverage for Contractor Trucks and Vans" body[1]; bullet | Tools and equipment coverage is written as inland marine | VERIFIED | NAIC Nationwide Marine Definition (MO-701 §2.F(10)); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| data/services.ts | § "Coverage for Contractor Trucks and Vans" body[1] | Tools/equipment floater protects hand tools, power tools, ladders, and gear in the vehicle and on the job site against theft and damage | VERIFIED | NAIC MO-701 §2.F(10) (mobile machinery/equipment floaters); AAIS Contractors' Equipment Coverage forms (job-site and transit coverage) | None |
| data/services.ts | § "How Tools and Equipment Coverage Works" body[0] | Commercial auto policy covers the vehicle but not tools carried inside it | VERIFIED | ISO CA 00 01: physical damage limited to covered auto and its equipment; liability excludes property in insured's care, custody, or control | None |
| data/services.ts | § "How Tools and Equipment Coverage Works" body[0] | Inland marine tools coverage applies in the truck, on the job site, and in temporary storage | VERIFIED | NAIC MO-701 §2.F(10); Virginia SCC Commercial Insurance Guide (inland marine for property in transit and bailee custody) | None |
| data/services.ts | § "How Tools and Equipment Coverage Works" body[1] | Tools and equipment coverage can extend to leased and rented equipment | VERIFIED | AAIS IM 7004 Contractors' Equipment Coverage – Leased or Rented Equipment Form | None |
| data/services.ts | § bullets; coverageHighlights | Hired auto covers rented and borrowed vehicles | VERIFIED | ISO CA 00 01 Symbol 8 (hired/borrowed autos) | None |
| data/services.ts | § bullets; coverageHighlights | Non-owned auto covers employee-owned vehicles used for business | VERIFIED | ISO CA 00 01 Symbol 9 (non-owned autos, including employee vehicles used in business) | None |
| data/services.ts | § "Coverage for Contractor Trucks and Vans" body[1] | Pairing commercial auto with a tools and equipment floater is the right combination for most contractors | EXEMPT | — | None (general advisory language, not a verifiable regulatory fact) |
| data/services.ts | Coverage for Plumbing Service Vans, body ¶1 | A plumbing vehicle policy combines commercial auto liability with physical damage for the van or truck | VERIFIED | Virginia SCC Auto Insurance Guide (scc.virginia.gov): collision and other-than-collision are optional physical damage coverages on auto policies | None |
| data/services.ts | Coverage bullets; coverageHighlights | Physical damage includes collision and comprehensive | VERIFIED | Virginia SCC Auto Insurance Guide: collision covers crash damage; comprehensive (other-than-collision) covers theft, vandalism, weather, and similar perils to the insured auto | None |
| data/services.ts | Coverage for Plumbing Service Vans, body ¶2; coverageHighlights | Tools and equipment coverage is written as an inland marine add-on | VERIFIED | NAIC Nationwide Inland Marine Definition (MDL-701, content.naic.org): commercial mobile equipment floaters classify contractor tools and gear as inland marine risks | None |
| data/services.ts | Coverage for Plumbing Service Vans, body ¶2; bullets | Inland marine tools and equipment coverage protects gear against theft and damage | VERIFIED | NAIC MDL-701 F(10) Mobile Articles, Machinery and Equipment Floaters; NAIC PCM 09.0 Inland Marine (movable property at varying locations) | None |
| data/services.ts | Coverage for Plumbing Service Vans, body ¶2 | Tools and equipment coverage applies whether gear is in the van or at a customer home or job site | VERIFIED | NAIC MDL-701 F(9) Installation Risks (coverage at points where work is performed); F(10) mobile commercial equipment floaters; NAIC PCM 09.0 (property at different locations, excluding licensed highway vehicles) | None |
| data/services.ts | Why Plumbing Businesses Choose Cascade, body ¶2 | Multiple vans or service trucks can be combined on a single commercial policy | EXEMPT | Common carrier packaging practice, not a statutory threshold or coverage definition | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (body ¶1) | HVAC vehicle policy pairs commercial auto liability with physical damage for the truck or van | VERIFIED | Virginia SCC Auto Insurance Guide (collision/comprehensive as physical damage); standard commercial auto structure | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (bullet) | Commercial auto liability for service vehicles | VERIFIED | Va. Code § 46.2-472; Virginia SCC Auto Insurance Guide (liability pays losses you cause to others) | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (bullet) | Physical damage includes collision and comprehensive | VERIFIED | Virginia SCC Auto Insurance Guide ("Collision" and "Other Than Collision" coverages) | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (body ¶2); coverageHighlights | Tools and equipment coverage is written as inland marine | VERIFIED | NAIC Nationwide Inland Marine Definition MDL-701 F(9), F(10) | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (body ¶2) | Tools and equipment coverage protects HVAC gear against theft and damage | VERIFIED | NAIC MDL-701; AAIS Contractors' Equipment forms (direct physical loss, in transit and at jobsites) | None |
| data/services.ts | Coverage for HVAC Trucks and Vans (body ¶2) | Coverage can extend to larger components in transit to a job | VERIFIED | NAIC MDL-701 F(9) Installation Risks (machinery/equipment in transit); AAIS contractors equipment in transit | None |
| data/services.ts | shortDescription | Commercial auto liability plus equipment coverage for service trucks and vans | EXEMPT | Product summary, not a statutory threshold | None |
| data/services.ts | heroSubheadline | Hero covers vehicle on the road and equipment crews transport | EXEMPT | Marketing framing aligned with verified coverages above | None |
| data/services.ts | Built for Seasonal HVAC Operations | Seasonal fleet expansion and coverage flexibility | EXEMPT | Operational marketing, not a regulatory or coverage-definition claim | None |
| data/services.ts | Truck, Trailer, and Equipment Coverage (body) | Landscaping policies include commercial auto liability and physical damage for trucks | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 46.2-472 | None |
| data/services.ts | Truck, Trailer, and Equipment Coverage (body); Trailer liability bullet | Each trailer pulled should be listed on the policy for liability, with optional physical damage | VERIFIED | Va. Code § 46.2-472(B)(1) (designation of covered motor vehicles); Va. Code § 46.2-100 (trailers are motor vehicles); dmv.virginia.gov/vehicles/registration/trailer | None |
| data/services.ts | Truck, Trailer, and Equipment Coverage (body); Tools and equipment bullet | Mowers, blowers, trimmers, and hauled gear are covered via tools and equipment (inland marine), not the auto policy | VERIFIED | NAIC MDL-701 § F(10) (mobile equipment floaters exclude motor vehicles designed for highway use); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| data/services.ts | Hired and non-owned auto bullet | Hired and non-owned auto covers rented or employee vehicles used for seasonal help | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 38.2-2204 (omnibus/permission provisions) | None |
| data/services.ts | Trailer liability and physical damage bullet | Trailer liability and physical damage are distinct optional coverages on the auto policy | VERIFIED | dmv.virginia.gov/vehicles/registration/trailer; Va. Code § 46.2-472(B)(1) | None |
| data/services.ts | Coverage for Construction Vehicles (body); Commercial auto liability and physical damage bullets | Commercial auto liability and physical damage apply to trucks traveling public roads between yard and job site | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy); Va. Code § 46.2-472 | None |
| data/services.ts | Coverage for Construction Vehicles (body); Motor truck cargo bullet | Motor truck cargo covers materials in transit (optional add-on) | VERIFIED | Virginia SCC Commercial Insurance Guide (motor truck cargo reference); Federal Register 2010-14866 (cargo insurance context for for-hire carriers) | None |
| data/services.ts | Coverage for Construction Vehicles (body); Hired and non-owned auto bullet | Hired and non-owned auto covers rented units and employee vehicles used on projects | VERIFIED | Virginia SCC Commercial Insurance Guide (Business Auto Policy) | None |
| data/services.ts | Mobile Equipment and Job-Site Machinery (body); Mobile equipment coverage highlight | Excavators, skid steers, loaders, and similar unregistered site machinery are typically covered as mobile equipment, not under the auto policy | VERIFIED | NAIC MDL-701 § F(10) and § F(19)(d) (contractors' equipment and mobile equipment excluding highway motor vehicles); Virginia SCC Commercial Insurance Guide (inland marine covers contractors' equipment) | None |
| data/services.ts | Mobile Equipment and Job-Site Machinery (body, lead sentence) | Not all construction-site machinery is registered for public roads | VERIFIED | Va. Code § 46.2-100 (trailer/motor vehicle definitions); dmv.virginia.gov/vehicles/registration/trailer | None |
| data/services.ts | shortDescription; heroSubheadline | Commercial fleet insurance applies to businesses running two or more vehicles | EXEMPT | No statutory fleet-size threshold; carrier underwriting varies (Virginia SCC Commercial Insurance Guide) | None |
| data/services.ts | How Commercial Fleet Coverage Works (body + bullets) | Fleet policies include commercial auto liability, physical damage, and hired and non-owned auto | VERIFIED | ISO Business Auto Coverage Form CA 00 01; Virginia SCC Commercial Insurance Guide (business auto / truckers policy) | None |
| data/services.ts | How Commercial Fleet Coverage Works (bullets) | Combined commercial auto liability across all fleet units | VERIFIED | Standard fleet / business auto policy structure (Virginia SCC Commercial Insurance Guide) | None |
| data/services.ts | How Commercial Fleet Coverage Works (bullets) | Physical damage covers owned trucks, vans, and trailers | VERIFIED | ISO CA 00 01 collision and comprehensive provisions | None |
| data/services.ts | How Commercial Fleet Coverage Works (bullets) | Hired and non-owned auto covers rented and employee vehicles | VERIFIED | ISO CA 00 01 Symbols 8 (hired) and 9 (non-owned) | None |
| data/services.ts | Fleet Pricing and Discounts | Larger fleets evaluated on experience modification basis | INCORRECT | Virginia SCC PC Filing Guidelines (experience rating plans, not workers comp experience modification); Va. Code § 38.2-1906 | Fixed: "experience modification basis" → "experience-rating basis" |
| data/services.ts | Managing Fleet Risk and Telematics | Telematics and dash-cam programs can reduce premiums via usage-based discounts | EXEMPT | Carrier underwriting practice, not a statutory requirement | None |
| data/services.ts | Section 1 body | Uber Black is for-hire livery transportation in Virginia | INCORRECT | Va. Code § 46.2-2000 (prearranged ride, TNC partner vehicle); DMV TNC Manual (dmv.virginia.gov) | Fixed: reframed as TNC framework using a personal vehicle, not traditional for-hire motor carrier |
| data/services.ts | Section 1 body | Uber Black is different from rideshare driving on a personal vehicle | INCORRECT | Va. Code § 46.2-2000 (TNC partner vehicle = personal vehicle) | Fixed: removed incorrect regulatory distinction |
| data/services.ts | Section 1 body | A personal auto policy will not cover Uber Black platform work | VERIFIED | Va. Code § 46.2-2099.52(B)(6) | None |
| data/services.ts | Section 1 body | A standard rideshare endorsement is not enough for Uber Black | VERIFIED | DMV TNC Manual (vehicle must be insured for commercial use); Va. Code § 46.2-2099.52 | Softened to "typically not enough" |
| data/services.ts | Section 1 body | Livery coverage satisfies Virginia requirements and Uber limits while carrying a passenger | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance, $1M during prearranged ride) | Fixed: Virginia TNC insurance requirements and platform limits |
| data/services.ts | Section 1 bullets | Limits meet platform and DMV requirements | INCORRECT | Va. Code § 46.2-2099.52 | Fixed: "Virginia TNC and platform requirements" |
| data/services.ts | Section 2 body | Rideshare and livery are not the same in the eyes of Virginia regulators | INCORRECT | Va. Code § 46.2-2000 (Uber Black prearranged rides are TNC) | Fixed: both fall under TNC rules; premium tier has higher standards |
| data/services.ts | Section 2 body | TNC rideshare relies on platform coverage layered over a personal policy | VERIFIED | Va. Code § 46.2-2099.52(B)(3) (TNC insurance primary; may combine TNC and partner policies) | Reworded in context of corrected TNC framework |
| data/services.ts | Section 2 body | Pre-arranged black-car service is for-hire livery requiring its own commercial coverage | INCORRECT | Va. Code § 46.2-2000 (prearranged ride in TNC partner vehicle) | Fixed: removed livery motor carrier classification for Uber Black |
| data/services.ts | Section 2 body | Driving on a personal or rideshare policy can leave you uninsured | VERIFIED | Va. Code § 46.2-2099.52(B)(4)-(6) | None |
| data/services.ts | Section 3 body | For-hire operators in Virginia generally need a for-hire vehicle registration | INCORRECT | DMV TNC Manual (TNC vehicles cannot use for-hire plates); Va. Code § 46.2-2034 (TNC partners exempt from for-hire vehicle fee) | Fixed: for-hire registration applies to independent motor carriers, not Uber Black TNC drivers |
| data/services.ts | Section 3 body | Commercial liability limits often $1,000,000 while a passenger is in the vehicle | VERIFIED | Va. Code § 46.2-2099.52(B)(1) | Fixed attribution: Virginia TNC statutory minimum, not merely a platform expectation |
| data/services.ts | — (implicit prior framing) | Virginia motor carrier livery minimum is $350,000 for 1–6 passenger vehicles | VERIFIED | Va. Code § 46.2-2078 | Corrected by removing livery motor carrier framing for Uber Black |
| data/services.ts | — (added context) | TNC partner vehicles must be insured for commercial use | VERIFIED | DMV TNC Manual (Mandatory Vehicle Screening Requirements) | Incorporated in revised copy |
| data/services.ts | Section 1 bullets; coverageHighlights | Commercial livery liability / physical damage / UM-UIM as coverage types | EXEMPT | Insurance product descriptions, not statutory thresholds | None |
| data/services.ts | coverageHighlights | For-hire / livery compliance | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance satisfies financial responsibility) | Fixed: "Virginia TNC compliance" |
| data/services.ts | What Business Auto Insurance Covers in Virginia | Commercial auto liability pays for bodily injury and property damage your vehicle causes to others | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/services.ts | What Business Auto Insurance Covers in Virginia | A personal policy's business-use exclusion can leave you uninsured after an at-fault accident while driving for work | EXEMPT | General insurance practice, not a statutory threshold | None |
| data/services.ts | What Business Auto Insurance Covers in Virginia | Physical damage (collision and comprehensive) repairs or replaces owned vehicles | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/services.ts | What Business Auto Insurance Covers in Virginia (body and bullets) | Hired auto covers rented and borrowed vehicles; non-owned auto covers employees' personal cars used on company business | VERIFIED | Standard commercial auto policy extensions (ISO CA 20 48) | None |
| data/services.ts | Virginia Requirements for Business Vehicles | Every vehicle registered in Virginia must carry liability coverage | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Requirements for Business Vehicles | As of January 1, 2025, Virginia minimum liability is 50/100/25 ($50k BI per person, $100k per accident, $25k PD) | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Requirements for Business Vehicles | Most Virginia businesses carry $500,000 to $1,000,000 in liability limits | EXEMPT | Industry recommendation, not a legal requirement | None |
| data/services.ts | What Affects Your Business Auto Premium | Vehicle type, driver MVR, mileage, radius, and loss history affect premiums | EXEMPT | General underwriting factors, not a statutory threshold | None |
| data/services.ts | How to Get a Business Auto Quote | Most business auto policies can be quoted the same day | EXEMPT | Operational claim, not regulatory | None |
| data/services.ts | What Commercial Auto Insurance Covers | Commercial auto liability pays for bodily injury and property damage you cause to others on the road | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/services.ts | What Commercial Auto Insurance Covers | Physical damage covers collision, theft, and weather losses on owned vehicles | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/services.ts | What Commercial Auto Insurance Covers (bullets) | Medical payments, uninsured/underinsured motorist, and hired/non-owned auto are standard policy components | VERIFIED | Va. Code § 38.2-2206 (UM/UIM); standard commercial auto forms | None |
| data/services.ts | When Your Business Vehicles Need Commercial Coverage | Personal auto policies are not built for business use and often exclude it | EXEMPT | General insurance practice, not a statutory threshold | None |
| data/services.ts | When Your Business Vehicles Need Commercial Coverage | Carrying tools, transporting for a fee, hauling materials, or having employees drive on your behalf indicates commercial use | EXEMPT | General underwriting guidance, not a statutory threshold | None |
| data/services.ts | Virginia Minimum Limits and Filing Requirements | Every vehicle registered in Virginia must carry liability coverage | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Minimum Limits and Filing Requirements | As of January 1, 2025, Virginia minimum liability is 50/100/25 ($50k/$100k/$25k) | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/services.ts | Virginia Minimum Limits and Filing Requirements | Businesses that haul for hire or operate in interstate commerce may need the MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/services.ts | Coverage Options and Add-Ons | Motor truck cargo, tools/equipment, and fleet policies are industry-specific add-ons | EXEMPT | Product structure, not a regulatory threshold | None |
| data/services.ts | How to Get a Commercial Auto Quote in Virginia | Many commercial auto policies can be quoted the same day | EXEMPT | Operational claim, not regulatory | None |
| data/vehicles.ts | box-truck-insurance | Virginia requires commercial auto liability on every registered vehicle | VERIFIED | Va. Code § 46.2-706, § 46.2-472 (law.lis.virginia.gov) | None |
| data/vehicles.ts | box-truck-insurance | Box trucks span Class 3–7 from about 12,000 to 33,000 lbs GVW | INCORRECT | FHWA vehicle weight classes (afdc.energy.gov); Class 3 begins at 10,001 lbs | Fixed: 10,001–33,000 lbs under federal GVWR classes |
| data/vehicles.ts | box-truck-insurance | GVW over 10,001 lbs in interstate commerce triggers FMCSA jurisdiction | VERIFIED | FMCSA USDOT registration guidance (fmcsa.dot.gov); 49 CFR Part 387 | None |
| data/vehicles.ts | box-truck-insurance | For-hire carriers hauling regulated commodities need MCS-90 | INCORRECT | 49 CFR § 387.15; MCS-90 applies to carriers subject to Part 387 financial responsibility | Fixed: subject to FMCSA financial responsibility rules |
| data/vehicles.ts | box-truck-insurance | Motor truck cargo covers goods damaged, stolen, or destroyed in transit | VERIFIED | Standard motor truck cargo coverage (ISO truckers forms) | None |
| data/vehicles.ts | bucket-truck-insurance | Bucket trucks over 10,001 lbs GVW in interstate commerce subject to FMCSA / DOT number | VERIFIED | fmcsa.dot.gov USDOT registration | None |
| data/vehicles.ts | bucket-truck-insurance | Virginia has specific requirements for aerial work platform operations | VERIFIED | 29 CFR 1910.67 adopted by VOSH; 16VAC25-73-60 (law.lis.virginia.gov) | None |
| data/vehicles.ts | car-carrier-insurance | On-hook towing coverage pays for damage to vehicles being hauled in transit | VERIFIED | Standard truckers on-hook coverage | None |
| data/vehicles.ts | car-carrier-insurance | Interstate auto haulers need FMCSA operating authority and liability filing | VERIFIED | 49 CFR Part 387; fmcsa.dot.gov insurance filing requirements | None |
| data/vehicles.ts | car-carrier-insurance | Minimum $75,000 for hauling up to 3 vehicles; $750,000 for 4+ | INCORRECT | FMCSA guidance on vehicles as HM (UN 3166); 49 CFR § 387.9 entry (3) $1,000,000 | Fixed: $1,000,000 for interstate auto haulers |
| data/vehicles.ts | car-carrier-insurance | Intrastate car carriers work under Virginia DMV requirements | VERIFIED | dmv.virginia.gov motor carrier requirements | None |
| data/vehicles.ts | catering-truck-insurance | Virginia requires commercial auto liability on catering truck | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | catering-truck-insurance | Local health permit and commissary may be required for mobile food | VERIFIED | 12VAC5-421-10, 12VAC5-421-3660 (law.lis.virginia.gov) | None |
| data/vehicles.ts | cement-mixer-truck-insurance | Fully loaded cement mixers operate at 66,000–80,000 lbs GVW | INCORRECT | 23 CFR § 658.17 (80,000 lb interstate max); bridge formula limits vary by axle config | Fixed: tri/quad axle up to 80,000 lbs subject to bridge formula |
| data/vehicles.ts | cement-mixer-truck-insurance | Cement mixers subject to FMCSA when operating interstate | VERIFIED | 49 CFR Part 387 | None |
| data/vehicles.ts | cement-mixer-truck-insurance | Virginia enforces axle weight and permit requirements | VERIFIED | Va. Code weight/overweight provisions; dmv.virginia.gov | None |
| data/vehicles.ts | cement-mixer-truck-insurance | For-hire ready-mix carriers need FMCSA operating authority (unqualified) | INCORRECT | FMCSA authority applies to interstate for-hire operations (49 CFR Part 387) | Fixed: added interstate commerce qualifier |
| data/vehicles.ts | delivery-van-insurance | Virginia requires commercial auto liability on every business vehicle | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | delivery-van-insurance | Delivery vans operating interstate may be subject to FMCSA if GVW exceeds 10,001 lbs | VERIFIED | fmcsa.dot.gov/registration/do-i-need-usdot-number | None |
| data/vehicles.ts | delivery-van-insurance | Class 2 cargo vans at 6,000 lbs GVW to Class 5 at 19,500 lbs | INCORRECT | FMCSA vehicle weight classifications (fmcsa.dot.gov) | Fixed: Class 1 and 2 cargo vans up to Class 5 at 19,500 lbs GVWR |
| data/vehicles.ts | delivery-van-insurance | Commercial auto liability pays bodily injury and property damage during delivery runs | VERIFIED | Va. SCC Virginia Auto Insurance Guide (scc.virginia.gov) | None |
| data/vehicles.ts | delivery-van-insurance | Motor truck cargo protects packages and goods carried | VERIFIED | Standard motor truck cargo coverage scope | None |
| data/vehicles.ts | flatbed-truck-insurance | Interstate for-hire flatbed carriers need FMCSA operating authority | VERIFIED | fmcsa.dot.gov/registration/get-mc-number-authority-operate | None |
| data/vehicles.ts | flatbed-truck-insurance | Must file proof of financial responsibility (MCS-90 for carriers hauling regulated commodities) | INCORRECT | 49 CFR § 387.7; Form MCS-90 (fmcsa.dot.gov) | Fixed: proof of financial responsibility, including MCS-90 endorsement on liability policy |
| data/vehicles.ts | flatbed-truck-insurance | Standard minimum for general freight is $750,000 | VERIFIED | 49 CFR § 387.9; fmcsa.dot.gov Insurance Filing Requirements | None |
| data/vehicles.ts | flatbed-truck-insurance | Oversize and overweight permits managed separately by VDOT | INCORRECT | dmv.virginia.gov hauling permits; vdot.virginia.gov/travel-traffic/freight | Fixed: oversize/overweight hauling permits issued through Virginia DMV |
| data/vehicles.ts | flatbed-truck-insurance | Commercial auto liability covers bodily injury and property damage on Virginia roads | VERIFIED | Va. SCC Virginia Auto Insurance Guide | None |
| data/vehicles.ts | flatbed-truck-insurance | Motor truck cargo covers freight on the deck | VERIFIED | Standard motor truck cargo coverage scope | None |
| data/vehicles.ts | hotshot-truck-insurance | GVW or combined vehicle weight over 10,001 lbs needs USDOT number | VERIFIED | fmcsa.dot.gov/registration/do-i-need-usdot-number | None |
| data/vehicles.ts | hotshot-truck-insurance | Carrying regulated freight for hire requires MC operating authority | VERIFIED | fmcsa.dot.gov/registration/get-mc-number-authority-operate | None |
| data/vehicles.ts | hotshot-truck-insurance | MCS-90 endorsement guarantees public liability up to FMCSA minimums | VERIFIED | Form MCS-90; 49 CFR § 387.15 (fmcsa.dot.gov) | None |
| data/vehicles.ts | hotshot-truck-insurance | BOC-3 process agent filing required | VERIFIED | fmcsa.dot.gov OP-1 instructions | None |
| data/vehicles.ts | hotshot-truck-insurance | Drug and alcohol testing compliance required | EXEMPT | 49 CFR Part 382 (applies when CDL required) | None |
| data/vehicles.ts | pump-truck-insurance | Pump trucks over 26,001 lbs GVW require a CDL | INCORRECT | fmcsa.dot.gov/registration/commercial-drivers-license/drivers | Fixed: GVWR threshold wording |
| data/vehicles.ts | pump-truck-insurance | Interstate for-hire operation triggers FMCSA requirements | VERIFIED | fmcsa.dot.gov/faq/how-do-i-determine-whether-i-am-subject-fmcsas-safety-regulations | None |
| data/vehicles.ts | pump-truck-insurance | Virginia permitting requirements for oversize pump trucks with extended boom assemblies | VERIFIED | vdot.virginia.gov/travel-traffic/freight; DMV hauling permits | Clarified as hauling permits |
| data/vehicles.ts | refrigerated-truck-insurance | Spoilage from reefer mechanical failure typically excluded without reefer breakdown endorsement | EXEMPT | Standard motor truck cargo policy exclusion | None |
| data/vehicles.ts | refrigerated-truck-insurance | Interstate refrigerated carriers typically need FMCSA operating authority and MCS-90 | VERIFIED | 49 CFR Part 387; fmcsa.dot.gov Insurance Filing Requirements | None |
| data/vehicles.ts | refrigerated-truck-insurance | Carriers hauling FDA-regulated commodities may have FSMA documentation requirements | VERIFIED | FDA Sanitary Transportation Rule (fda.gov/fsma) | None |
| data/vehicles.ts | stake-body-truck-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | stake-body-truck-insurance | Stake body trucks over 26,001 lbs GVW require a CDL | VERIFIED | dmv.virginia.gov/licenses-ids/cdl | None |
| data/vehicles.ts | tank-truck-insurance | Tank trucks hauling regulated hazardous materials in interstate commerce need a Hazmat Safety Permit | INCORRECT | 49 CFR § 385.403; FMCSA HMSP FAQ (fmcsa.dot.gov) | Fixed: narrowed to "certain high-risk hazardous materials" per § 385.403 list |
| data/vehicles.ts | tank-truck-insurance | FMCSA operating authority with financial responsibility up to $5,000,000 for certain hazardous materials | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(3) (ecfr.gov) | None |
| data/vehicles.ts | tank-truck-insurance | Virginia enforces VDOT hazmat routing requirements | INCORRECT | vdot.virginia.gov/travel-traffic/freight/hazmat | Fixed: VDOT restricts hazmat through select state-owned tunnels and designated truck routes |
| data/vehicles.ts | truck-tractor-insurance | FMCSA minimum primary liability is $750,000 for general freight, higher for hazardous materials | VERIFIED | 49 CFR § 387.9 (ecfr.gov) | None |
| data/vehicles.ts | truck-tractor-insurance | Every interstate for-hire motor carrier needs FMCSA operating authority, USDOT number, and BOC-3 filing | VERIFIED | 49 CFR § 366.6; FMCSA Form BOC-3 (fmcsa.dot.gov) | None |
| data/vehicles.ts | truck-tractor-insurance | MCS-90 endorsement guarantees public liability | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/vehicles.ts | truck-tractor-insurance | Primary liability minimums: $750,000 general freight, $1 million oil, $5 million certain hazmat | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| data/vehicles.ts | auto-hauler-trailer-insurance | FMCSA minimum financial responsibility for hauling four or more vehicles is $750,000 | INCORRECT | FMCSA Part 387 Q&A on transported vehicles (fmcsa.dot.gov); 49 CFR § 387.9 | Fixed: removed vehicle-count threshold; noted $750,000 non-hazardous or $1,000,000 for fueled vehicles |
| data/vehicles.ts | auto-hauler-trailer-insurance | Auto haulers transporting four or more vehicles in interstate commerce need FMCSA operating authority | INCORRECT | 49 CFR § 387.9; FMCSA operating authority requirements (fmcsa.dot.gov) | Fixed: authority based on interstate for-hire status, not vehicle count |
| data/vehicles.ts | auto-hauler-trailer-insurance | Auto hauler liability minimum is $750,000 | INCORRECT | FMCSA guidance: transported vehicles are HM (UN 3166), requiring $1,000,000 (fmcsa.dot.gov) | Fixed: $1,000,000 public liability when transporting fueled vehicles |
| data/vehicles.ts | dump-trailer-insurance | Combination unit liability must meet FMCSA minimums for for-hire carriers (without interstate qualifier) | INCORRECT | 49 CFR § 387.9; dmv.virginia.gov property carrier guidance | Fixed: narrowed to interstate for-hire carriers |
| data/vehicles.ts | dump-trailer-insurance | For-hire bulk carriers operating interstate need FMCSA authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/vehicles.ts | dump-trailer-insurance | Virginia intrastate bulk haulers must carry minimum state liability limits (unspecified) | INCORRECT | dmv.virginia.gov/businesses/motor-carriers/intrastate/prop-nobulk; Va. Code § 46.2-472(B) | Fixed: $750,000 for for-hire over 10,000 lbs GVWR plus 50/100/25 registration baseline |
| data/vehicles.ts | dump-trailer-insurance | Overweight operations require VDOT permits | INCORRECT | vdot.virginia.gov/travel-traffic/freight/truck-restrictions (redirects to DMV hauling permits) | Fixed: overweight loads require hauling permits through Virginia DMV |
| data/vehicles.ts | dump-trailer-insurance | Virginia minimum liability is 50/100/25 as of January 1, 2025 | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | Incorporated into corrected dump-trailer copy |
| data/vehicles.ts | bulk-commodity-trailer-insurance | Commercial auto liability for the combination unit must meet FMCSA minimums for for-hire carriers | INCORRECT | 49 CFR § 387.9; 49 CFR § 387.7 (ecfr.gov) | Fixed: added "interstate" qualifier; FMCSA financial responsibility applies to qualifying interstate motor carriers, not all for-hire operations |
| data/vehicles.ts | bulk-commodity-trailer-insurance | For-hire interstate dry bulk carriers need FMCSA authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None |
| data/vehicles.ts | bulk-commodity-trailer-insurance | Agricultural commodity haulers may have exemptions for certain intrastate operations under Virginia farm vehicle rules | VERIFIED | Va. Code § 46.2-649.3, § 46.2-649.4 (law.lis.virginia.gov) | None |
| data/vehicles.ts | concession-trailer-insurance | Tow vehicle needs commercial auto liability | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | concession-trailer-insurance | Trailer needs physical damage coverage | EXEMPT | Contractual/prudent practice, not a statutory minimum | None |
| data/vehicles.ts | concession-trailer-insurance | When deployed at events, general liability and product liability per most event contracts | EXEMPT | Contractual requirement, not a regulatory threshold | None |
| data/vehicles.ts | concession-trailer-insurance | Virginia Department of Health permits are required for food service | VERIFIED | VDH Mobile Unit general requirements (vdh.virginia.gov) | None |
| data/vehicles.ts | dry-freight-trailer-insurance | Commercial auto liability for the combination unit must meet FMCSA minimums | INCORRECT | 49 CFR § 387.9 (ecfr.gov) | Fixed: added "interstate for-hire" qualifier |
| data/vehicles.ts | dry-freight-trailer-insurance | For-hire interstate dry freight carriers need FMCSA operating authority and financial responsibility at a minimum of $750,000 | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov) | None |
| data/vehicles.ts | dry-freight-trailer-insurance | Trailers used in trailer interchange must carry trailer-interchange coverage | EXEMPT | Carrier interchange agreements and UIIA; not a Virginia or FMCSA statutory mandate | None |
| data/vehicles.ts | transfer-dump-trailer-insurance | Commercial auto liability for the tractor-trailer combination must meet regulatory minimums for for-hire carriers | INCORRECT | 49 CFR § 387.9 (ecfr.gov) | Fixed: "regulatory minimums for for-hire carriers" → "FMCSA minimums for interstate for-hire carriers" |
| data/vehicles.ts | transfer-dump-trailer-insurance | For-hire aggregate carriers operating interstate need FMCSA authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15 (ecfr.gov) | None |
| data/vehicles.ts | transfer-dump-trailer-insurance | Overweight operations require VDOT permits | INCORRECT | vdot.virginia.gov/travel-traffic/freight; Va. Code § 46.2-1140 et seq. (law.lis.virginia.gov) | Fixed: "VDOT permits" → "DMV hauling permits" (DMV issues standard oversize/overweight permits) |
| data/vehicles.ts | transfer-dump-trailer-insurance | Virginia intrastate dump truck and trailer operations are regulated under state commercial vehicle rules | VERIFIED | Va. Code Title 46.2, Ch. 10; dmv.virginia.gov/commercial | None |
| data/vehicles.ts | pole-trailer-insurance | Pole trailers operating interstate in for-hire commerce need FMCSA authority | VERIFIED | 49 CFR Part 387 (ecfr.gov) | None |
| data/vehicles.ts | pole-trailer-insurance | Oversize loads require VDOT oversize/overweight permits | INCORRECT | vdot.virginia.gov/travel-traffic/freight; Va. Code Art. 18, Ch. 10 (law.lis.virginia.gov) | Fixed: "VDOT oversize/overweight permits" → "DMV hauling permits" |
| data/vehicles.ts | pole-trailer-insurance | Log hauling may be subject to specific Virginia forestry transport regulations | VERIFIED | Va. Code § 46.2-1148.1, § 46.2-1149.2, § 46.2-1155 (law.lis.virginia.gov) | None |
| data/vehicles.ts | refrigerated-trailer-insurance | Without reefer breakdown endorsement, refrigeration failure cargo claims are typically excluded from standard motor truck cargo | EXEMPT | Standard cargo policy form scope | None |
| data/vehicles.ts | refrigerated-trailer-insurance | For-hire interstate reefer carriers need FMCSA operating authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15; FMCSA Insurance Filing Requirements (fmcsa.dot.gov) | None |
| data/vehicles.ts | refrigerated-trailer-insurance | GDP regulations set coverage minimums for pharmaceutical carriers | INCORRECT | USP General Chapter 1083 (insurance needs as documented procedure, not statutory minimums) | Fixed: reworded to GDP-aligned carrier qualifications and contractual cargo limits |
| data/vehicles.ts | tank-trailer-insurance | FMCSA financial responsibility minimums are higher for hazmat carriers | VERIFIED | 49 CFR § 387.9 Table 1 (ecfr.gov / FMCSA Safety Planner) | None |
| data/vehicles.ts | tank-trailer-insurance | Standard cargo policies typically exclude pollution cleanup costs | EXEMPT | Standard cargo policy pollution exclusion | None |
| data/vehicles.ts | tank-trailer-insurance | Hazmat tank carriers need FMCSA authority with $1M–$5M financial responsibility depending on hazmat class | VERIFIED | 49 CFR § 387.9 Table 1 entries (2)–(3) (fmcsa.dot.gov) | None |
| data/vehicles.ts | tank-trailer-insurance | Hazmat Safety Permit may be required for certain high-hazard materials | VERIFIED | 49 CFR § 385.403; FMCSA HMSP program (fmcsa.dot.gov) | None |
| data/vehicles.ts | tank-trailer-insurance | Virginia VDOT hazmat routing regulations apply to specific corridors | INCORRECT | vdot.virginia.gov/travel-traffic/freight/hazmat (DMV size/weight rules; VDOT tunnel restrictions only) | Fixed: tunnel restrictions and designated truck routes |
| data/vehicles.ts | rag-top-trailer-insurance | Oversize cargo hauls may require VDOT oversize permits | INCORRECT | dmv.virginia.gov/businesses/hauling; vdot.virginia.gov/travel-traffic/freight | Fixed: Virginia DMV hauling permits |
| data/vehicles.ts | rag-top-trailer-insurance | For-hire interstate carriers need FMCSA authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| data/vehicles.ts | flatbed-trailer-insurance | For-hire interstate flatbed carriers need FMCSA operating authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| data/vehicles.ts | flatbed-trailer-insurance | Oversize and overweight loads require VDOT permits | INCORRECT | dmv.virginia.gov/businesses/hauling | Fixed: Virginia DMV hauling permits |
| data/vehicles.ts | flatbed-trailer-insurance | Load securement regulations under 49 CFR 393 apply to flatbed operations | VERIFIED | 49 CFR § 393.100(a)–(b) (ecfr.gov) | None |
| data/vehicles.ts | gooseneck-trailer-insurance | Equipment haulers in interstate for-hire commerce need FMCSA authority and MCS-90 endorsement | VERIFIED | 49 CFR § 387.7, § 387.15 (fmcsa.dot.gov) | None |
| data/vehicles.ts | gooseneck-trailer-insurance | Overweight and oversize loads require VDOT permits | INCORRECT | dmv.virginia.gov/businesses/hauling | Fixed: Virginia DMV hauling permits |
| data/vehicles.ts | gooseneck-trailer-insurance | Trailers up to 80,000 lbs GVW and beyond require oversize permits when overweight | VERIFIED | dmv.virginia.gov/businesses/hauling (legal weight/dimension limits; permits when exceeded) | None |
| data/vehicles.ts | horse-trailer-insurance | Virginia requires commercial auto liability for business-use tow vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | horse-trailer-insurance | For-hire animal transport may require USDA animal transport registration | INCORRECT | 7 U.S.C. § 2132(g)(2) AWA excludes horses not used for research; APHIS AWA registration applies to regulated AWA animals only (aphis.usda.gov) | Fixed: replaced with interstate animal health entry and CVI requirements |
| data/vehicles.ts | horse-trailer-insurance | Virginia Horse Center and venues require contract liability limits | EXEMPT | Contractual, not statutory | None |
| data/vehicles.ts | livestock-trailer-insurance | Livestock transport regulated under Twenty-Eight Hour Law | VERIFIED | 49 U.S.C. § 80502; APHIS 28-Hour Law (aphis.usda.gov) | None |
| data/vehicles.ts | livestock-trailer-insurance | Livestock transport regulated under USDA animal welfare standards | INCORRECT | 7 U.S.C. § 2132(g) AWA excludes farm livestock from regulated animals; 9 CFR Part 89 covers 28-hour transport only | Fixed: narrowed to federal Twenty-Eight Hour Law |
| data/vehicles.ts | livestock-trailer-insurance | For-hire interstate livestock haulers need FMCSA authority | INCORRECT | 49 CFR § 387.7; FMCSA insurance filing requirements (fmcsa.dot.gov) | Fixed: added combined GVWR over 10,001 pounds and MCS-90 endorsement |
| data/vehicles.ts | livestock-trailer-insurance | Virginia has agricultural inspection requirements for animals entering the state | VERIFIED | 2VAC5-141-35 (law.lis.virginia.gov) | None |
| data/vehicles.ts | livestock-trailer-insurance | Agricultural vehicle exemptions apply to some intrastate farm-to-farm moves | VERIFIED | Va. Code §§ 46.2-665, 46.2-698 (law.lis.virginia.gov); dmv.virginia.gov farm registration | None |
| data/vehicles.ts | logging-trailer-insurance | For-hire interstate log haulers need FMCSA authority and MCS-90 endorsement | INCORRECT | 49 CFR § 387.7, § 387.15 (ecfr.gov); FMCSA insurance filing requirements (fmcsa.dot.gov) | Fixed: added combined GVWR over 10,001 pounds qualifier |
| data/vehicles.ts | logging-trailer-insurance | Virginia enforces log truck load limits via forest product overweight permits | VERIFIED | Va. Code § 46.2-1148.1 (law.lis.virginia.gov) | None |
| data/vehicles.ts | logging-trailer-insurance | Virginia has seasonal weight restrictions on unpaved forest roads for log trucks | INCORRECT | Va. Code § 46.2-1148.1; VDOT truck restrictions (vdot.virginia.gov) address posted bridge/route limits, not statewide seasonal forest-road restrictions | Fixed: replaced with forest product overweight and tree-length log permits |
| data/vehicles.ts | lowboy-trailer-insurance | Oversize/overweight operations require VDOT permits | INCORRECT | dmv.virginia.gov/businesses/hauling; VDOT freight page directs carriers to DMV hauling permits | Fixed: changed VDOT permits to DMV hauling permits (both sections) |
| data/vehicles.ts | lowboy-trailer-insurance | For-hire interstate heavy haulers need FMCSA authority and MCS-90 endorsement | INCORRECT | 49 CFR § 387.7, § 387.15 (ecfr.gov) | Fixed: added combined GVWR over 10,001 pounds qualifier |
| data/vehicles.ts | lowboy-trailer-insurance | Loads over 100,000 lbs typically need engineered route surveys | INCORRECT | dmv.virginia.gov/apps/vahps/weight_allowance.aspx (superload triggered when weight exceeds routine allowance for axle configuration, not a fixed 100,000 lb threshold) | Fixed: reworded to superload review when exceeding routine weight allowances |
| data/vehicles.ts | tilt-trailer-insurance | Virginia requires commercial auto liability for the tow vehicle | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | horse-trailer-insurance | Private owners may use personal auto; for-hire haulers need commercial coverage | EXEMPT | General insurance guidance | None |
| data/vehicles.ts | tilt-trailer-insurance | Equipment on trailer at rest may need inland marine coverage | EXEMPT | Coverage product guidance | None |
| data/vehicles.ts | commercial-travel-trailer-insurance | Virginia requires commercial auto liability on the tow vehicle | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| data/vehicles.ts | commercial-travel-trailer-insurance | Travel trailers used commercially need commercial property coverage for contents separate from a personal RV policy | EXEMPT | Insurance product distinction, not a statutory threshold | None |
| data/vehicles.ts | utility-trailer-insurance | Virginia requires liability coverage on the tow vehicle | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| data/vehicles.ts | utility-trailer-insurance | Trailers under 10,001 lbs GVW typically do not require separate registration unless commercial | INCORRECT | Va. Code § 46.2-600 (law.lis.virginia.gov); dmv.virginia.gov/vehicles/registration/trailer | Fixed: every trailer must be registered separately before highway use, regardless of weight |
| data/vehicles.ts | large-utility-trailer-insurance | Virginia requires liability coverage on the tow vehicle | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| data/vehicles.ts | large-utility-trailer-insurance | Large utility trailers over 10,001 lbs GVW need separate registration as commercial trailers | INCORRECT | Va. Code § 46.2-600; 49 CFR § 390.5 (10,001 lbs is FMCSA CMV threshold, not registration cutoff) | Fixed: all trailers need separate registration; noted FMCSA rules for interstate for-hire over 10,001 lbs GVWR |
| data/vehicles.ts | wedge-trailer-insurance | Virginia requires commercial auto liability on the tow vehicle | VERIFIED | Va. Code § 46.2-706; dmv.virginia.gov/vehicles/registration/trailer | None |
| data/vehicles.ts | wedge-trailer-insurance | Wedge trailers used for commercial hauling need trailer physical damage and cargo coverage | EXEMPT | Coverage recommendation, not a statutory requirement | None |
| data/vehicles.ts | business-passenger-car-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | business-passenger-car-insurance | As of January 1, 2025, the state minimum liability is 50/100/25 | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/vehicles.ts | business-passenger-car-insurance | A personal auto policy will not cover employees driving company sedans for business | EXEMPT | General insurance practice (business-use exclusion), not a statutory threshold | None |
| data/vehicles.ts | cargo-van-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | cargo-van-insurance | Cargo vans operating interstate over 10,001 lbs GVW may be subject to FMCSA requirements | VERIFIED | 49 CFR § 390.5 (fmcsa.dot.gov) | None |
| data/vehicles.ts | hearse-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | hearse-insurance | Funeral escorts and processions are governed by Virginia Code and local ordinances | VERIFIED | Va. Code §§ 46.2-828, 46.2-828.1 (law.lis.virginia.gov) | None |
| data/vehicles.ts | hearse-insurance | For-hire funeral transport may require a Virginia for-hire vehicle registration | VERIFIED | dmv.virginia.gov/businesses/motor-carriers/intrastate | None (qualified with "may") |
| data/vehicles.ts | limousine-insurance | Virginia classifies traditional limousine service as contract passenger carrier transportation | VERIFIED | Va. Code § 46.2-2000; dmv.virginia.gov/businesses/motor-carriers/intrastate/contract-passenger | Fixed: "for-hire livery" → "contract passenger carrier" |
| data/vehicles.ts | limousine-insurance | Limousine operators need intrastate operating authority, seating-based liability limits, and for-hire registration | VERIFIED | Va. Code §§ 46.2-2000, 46.2-2053; dmv.virginia.gov/businesses/motor-carriers/intrastate/plate-require | Incorporated in revised copy |
| data/vehicles.ts | limousine-insurance | Uber Black operators are classified as for-hire livery | INCORRECT | Va. Code § 46.2-2000 (TNC partner vehicle); § 46.2-2099.52 (law.lis.virginia.gov) | Fixed: noted Uber Black follows Virginia TNC rules, not motor carrier livery |
| data/vehicles.ts | commercial-minivan-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | commercial-minivan-insurance | Minivans used to transport passengers for compensation need for-hire coverage and for-hire vehicle registration | VERIFIED | dmv.virginia.gov/businesses/motor-carriers/intrastate; Va. Code § 46.2-2053 | None |
| data/vehicles.ts | passenger-van-insurance | Passenger vans operating for hire need for-hire registration and minimum liability limits based on seating capacity | VERIFIED | Va. Code § 46.2-2053 ($350k 1–6 pax, $1.5M 7–15, $5M 16+); dmv.virginia.gov/businesses/motor-carriers/intrastate | Fixed: added intrastate operating authority; replaced vague "higher" with seating-based limits |
| data/vehicles.ts | passenger-van-insurance | FMCSA regulates interstate for-hire passenger carriers under 49 CFR 365 only | INCORRECT | 49 CFR Parts 365, 387; fmcsa.dot.gov/registration/small-passenger-carrying-vehicles | Fixed: Parts 365 and 387; added 9–15 passenger interstate threshold |
| data/vehicles.ts | passenger-van-insurance | Church and nonprofit vans transporting members may have specific exemptions | VERIFIED | Va. Code §§ 46.2-2071, 46.2-2073 (Article 5 nonprofit/tax-exempt carriers) | Softened to "separate permit rules" |
| data/vehicles.ts | commercial-pickup-insurance | Personal auto policies usually exclude business-use claims | EXEMPT | General insurance practice, not a statutory threshold | None |
| data/vehicles.ts | commercial-pickup-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706; § 46.2-472 (law.lis.virginia.gov) | None |
| data/vehicles.ts | commercial-pickup-insurance | Combined GVW of pickup and trailer determines applicable commercial vehicle regulations | VERIFIED | dmv.virginia.gov CDL classifications (GCWR 26,001+ lbs; towed GVWR 10,000+ lbs) | None |
| data/vehicles.ts | commercial-suv-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | commercial-suv-insurance | As of January 1, 2025, Virginia minimum liability is 50/100/25 | VERIFIED | Va. Code § 46.2-472(B) (law.lis.virginia.gov) | None |
| data/vehicles.ts | wheelchair-van-insurance | NEMT providers under Medicaid contracts must carry minimum liability limits per DMAS requirements | VERIFIED | dmas.virginia.gov NEMT Driver, Attendant, and Vehicle Requirements (wheelchair vans: amount required by DMV) | None |
| data/vehicles.ts | wheelchair-van-insurance | For-hire accessible transport requires Virginia for-hire vehicle registration | VERIFIED | dmv.virginia.gov intrastate operating authority and for-hire registration | None |
| data/vehicles.ts | wheelchair-van-insurance | ADA compliance does not create insurance requirements | VERIFIED | ADA Title III (no insurance mandate); passenger exposure is operational risk | None |
| data/vehicles.ts | luxury-suv-insurance | Luxury SUVs used for for-hire transport need for-hire registration and commercial livery liability | INCORRECT | Va. Code § 46.2-2000, § 46.2-2099.52 (TNC); § 46.2-2053 (motor carrier livery) | Fixed: distinguished contract passenger/livery from Virginia TNC platform service |
| data/vehicles.ts | luxury-suv-insurance | Minimum state liability limits apply to all commercial vehicles (implied 50/100/25) | INCORRECT | Va. Code § 46.2-2053 ($350,000 for 1–6 passenger for-hire); dmv.virginia.gov Motor Carrier Manual | Fixed: replaced with passenger-capacity motor carrier minimums and TNC rules |
| data/vehicles.ts | commercial-motorhome-insurance | Virginia requires commercial auto liability on all business-registered vehicles | VERIFIED | Va. Code § 46.2-706 (law.lis.virginia.gov) | None |
| data/vehicles.ts | commercial-motorhome-insurance | Motor homes used as for-hire passenger vehicles have additional requirements | VERIFIED | Va. Code § 46.2-2053; dmv.virginia.gov passenger carrier operating authority | None |
| data/vehicles.ts | bus-insurance | FMCSA requires for-hire interstate carriers operating buses with seating for 16 or more passengers (including the driver) to maintain $5 million liability | VERIFIED | 49 CFR 387.33; fmcsa.dot.gov | None |
| data/vehicles.ts | bus-insurance | Interstate for-hire bus operators regulated under 49 CFR 365 | VERIFIED | 49 CFR Part 365; fmcsa.dot.gov | None |
| data/vehicles.ts | bus-insurance | Buses designed for 16 or more passengers need operating authority and $5 million liability | VERIFIED | 49 CFR 387.33; fmcsa.dot.gov | None |
| data/vehicles.ts | bus-insurance | Smaller for-hire buses (9–15 passengers) need $1.5 million | INCORRECT | 49 CFR 387.33 (15 or fewer); Va. Code 46.2-2053(B) ($350,000 for 1–6 passengers) | Fixed: FMCSA 15-or-fewer tier; added Virginia intrastate tiers |
| data/vehicles.ts | bus-insurance | Virginia requires for-hire vehicle registration for passenger carriers | VERIFIED | Va. Code 46.2-2053; Ch. 20 motor carriers | None |
| data/vehicles.ts | wheelchair-bus-insurance | For-hire accessible transport must meet FMCSA or Virginia passenger carrier requirements | VERIFIED | 49 CFR 387.33; Va. Code 46.2-2053 | None |
| data/vehicles.ts | wheelchair-bus-insurance | NEMT operators in Virginia may be regulated by DMAS | VERIFIED | dmas.virginia.gov NEMT driver/vehicle requirements | None |
| data/vehicles.ts | wheelchair-bus-insurance | NEMT operators must carry minimum liability limits per contract | VERIFIED | dmas.virginia.gov NEMT driver/vehicle requirements | None |
| data/vehicles.ts | wheelchair-bus-insurance | For-hire accessible bus operations need Virginia for-hire registration and FMCSA authority if operating interstate | VERIFIED | Va. Code 46.2-2053; 49 CFR Part 365 | None |
| data/vehicles.ts | school-bus-insurance | Virginia has specific vehicle inspection and driver requirements for school buses | VERIFIED | 8VAC20-70; Va. Code 22.1-178 | None |
| data/vehicles.ts | school-bus-insurance | Private school operators must comply with VDOT regulations | INCORRECT | 8VAC20-70 (VDOE); Va. Code 22.1-180 | Fixed: VDOE pupil transportation regulations |
| data/vehicles.ts | school-bus-insurance | Federal regulations apply to for-hire operators; FMCSA requires higher liability minimums for larger buses | INCORRECT | fmcsa.dot.gov school bus guidance; 49 CFR 387.27 | Fixed: noted school-sponsored extracurricular exemption from Part 387 |
| data/vehicles.ts | front-loader-truck-insurance | Waste haulers operating interstate need FMCSA authority (unqualified) | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: narrowed to for-hire interstate commerce over 10,000 lbs GVWR |
| data/vehicles.ts | front-loader-truck-insurance | Virginia DEQ regulates waste transport and may impose hazardous waste insurance requirements | VERIFIED | 9VAC20-60; 9VAC20-81 | None |
| data/vehicles.ts | front-loader-truck-insurance | Municipal contracts typically specify minimum liability limits | EXEMPT | Contractual practice | None |
| data/vehicles.ts | front-loader-truck-insurance | Intrastate for-hire property carriers over 10,000 lbs GVWR need $750,000 | VERIFIED | Va. Code 46.2-2143.1(B) | Incorporated in corrected copy |
| data/vehicles.ts | front-loader-truck-insurance | Interstate for-hire general freight over 10,001 lbs GVWR needs $750,000 FMCSA minimum | VERIFIED | 49 CFR 387.9 | Incorporated in corrected copy |
| data/vehicles.ts | garbage-truck-insurance | Virginia waste haulers operating interstate or under RCRA need FMCSA authority (unqualified) | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: narrowed to qualifying for-hire motor carriers |
| data/vehicles.ts | garbage-truck-insurance | Regulated hazardous waste may require elevated financial responsibility | VERIFIED | 49 CFR 387.9 Table 1; 9VAC20-60 | Incorporated in corrected copy |
| data/vehicles.ts | garbage-truck-insurance | Virginia DEQ may impose requirements for solid waste transporters | VERIFIED | 9VAC20-81 | None |
| data/vehicles.ts | roll-off-truck-insurance | Roll-off trucks operating interstate for-hire need FMCSA authority (unqualified) | INCORRECT | 49 CFR 387.9; Va. Code 46.2-2143.1 | Fixed: added for-hire and 10,000 lbs GVWR qualification |
| data/vehicles.ts | roll-off-truck-insurance | Virginia solid waste regulations and local ordinances govern debris disposal and transport | VERIFIED | 9VAC20-81; local solid waste ordinances | None |
| data/vehicles.ts | roll-off-truck-insurance | Construction and demolition waste may require manifesting for certain materials | INCORRECT | 9VAC20-170 (manifesting applies to vessel transport on state waters, not typical highway roll-off) | Fixed: regulated hazardous/medical wastes carry separate documentation |
| data/locations.ts | Fairfax / Commercial Vehicles in Fairfax County | Fairfax operators tend to carry liability limits above the Virginia minimum | EXEMPT | General industry practice; no specific threshold stated | None |
| data/locations.ts | Fairfax / Coverage for Fairfax Contractors | Contractors need proof of specific liability limits and additional-insured status before starting work | EXEMPT | Contract-driven requirement, not a statutory threshold | None |
| data/locations.ts | Arlington / Livery and Black-Car Coverage | Uber Black work is for-hire livery, not standard rideshare | INCORRECT | Va. Code § 46.2-2000 (prearranged ride, TNC partner vehicle); § 46.2-2099.52 (law.lis.virginia.gov) | Fixed: reframed as TNC framework using a personal vehicle |
| data/locations.ts | Arlington / Livery and Black-Car Coverage | Uber Black requires commercial livery coverage satisfying Virginia and platform limits | INCORRECT | Va. Code § 46.2-2099.52 (TNC insurance, $1M while passenger aboard) | Fixed: Virginia TNC insurance requirements and TNC-compatible coverage |
| data/locations.ts | Chantilly / Coverage for Chantilly Logistics | Logistics operators often need motor truck cargo alongside commercial auto liability | EXEMPT | Standard coverage pairing advice, not a regulatory mandate | None |
| data/locations.ts | Chantilly / Coverage for Chantilly Logistics | Construction operators frequently need higher limits and additional-insured certificates | EXEMPT | Contract-driven requirement | None |
| data/locations.ts | Stafford / Coverage for Stafford Contractors | Stafford contractors face contract requirements for specific liability limits and additional-insured status | EXEMPT | Contract-driven requirement | None |
| data/locations.ts | Fredericksburg / Coverage for Fredericksburg Contractors | Dual-market operators often need broader radius-of-operation coverage; haulers need motor truck cargo | EXEMPT | Coverage product guidance, not a statutory threshold | None |
| data/locations.ts | Winchester / Coverage for Winchester Operators | Haulers running I-81 often need motor truck cargo and limits suited to long-haul work | EXEMPT | Operational coverage advice | None |
| data/locations.ts | Richmond / Coverage for Richmond Trucking | Freight and haul operators often need motor truck cargo coverage | EXEMPT | Standard coverage product description | None |
| data/locations.ts | Richmond / Coverage for Richmond Trucking | For interstate work, federal filings such as the MCS-90 endorsement | VERIFIED | 49 CFR § 387.15; FMCSA Form MCS-90 (fmcsa.dot.gov) | None (qualified with "often need" and "such as") |
| data/locations.ts | Richmond / Coverage for Richmond Trucking | Larger fleet policies can be experience-rated to reward a strong safety record | VERIFIED | NAIC Model Rating Law; Virginia SCC PC filing guidelines (experience rating plans) | None |
| data/locations.ts | `fallbackContent()` § "Commercial Vehicle Coverage for {city} Businesses" body[0] (Alexandria, Reston, Ashburn, Leesburg, Manassas, Woodbridge) | Cascade Trucks Insurance writes commercial auto, trucking, and fleet coverage for businesses | EXEMPT | Product/service offering, not a statutory threshold or coverage definition | None |
| data/locations.ts | `fallbackContent()` body[0] | Coverage tailored for dump trucks, contractor vans, and multi-vehicle fleets | EXEMPT | Vehicle-type marketing, not a regulatory requirement | None |
| data/locations.ts | `fallbackContent()` body[1] | Independent agency compares multiple carriers for competitive protection | EXEMPT | Business model / marketing language | None |
| data/locations.ts | `fallbackContent()` heroSubheadline, shortDescription, body[1] | Licensed Virginia advisors provide coverage | EXEMPT | Business credential; out of audit scope per project rules | None |
| app/page.tsx | app/page.tsx | Virginia-licensed advisors who know commercial trucking | EXEMPT | Va. Code § 38.2-1800 (producer licensing); business credential per audit scope | None |
| app/page.tsx | app/page.tsx | Independent agency based in Manassas, VA compares options across A-rated carriers | EXEMPT | Standard independent-agency and AM Best rating terminology; business info | None |
| app/page.tsx | app/page.tsx | From Northern Virginia to Richmond, we write commercial vehicle policies statewide | EXEMPT | Business service-area statement, not a statutory threshold | None |
| app/page.tsx | app/page.tsx | Licensed advisors who understand Northern Virginia and statewide operating conditions | EXEMPT | Local expertise marketing, not a verifiable regulatory fact | None |
| app/about/page.tsx | app/about/page.tsx | Independent agency with licensed advisors serving dump trucks, tow trucks, contractor vehicles, and fleets across Virginia | EXEMPT | Business specialty and credential statements | None |
| app/about/page.tsx | app/about/page.tsx | Serve Northern Virginia and businesses statewide from Manassas office | EXEMPT | Business service area | None |
| app/about/page.tsx | app/about/page.tsx | Compare options from carriers (Progressive, Erie, Cincinnati, National General, Foremost, Agency Insurance Company) | UNVERIFIABLE | Carrier appointments are business relationships, not regulatory facts | None |
| app/about/page.tsx | app/about/page.tsx | Virginia commercial truck and vehicle insurance specialists | EXEMPT | Marketing positioning | None |
| app/about/page.tsx | app/about/page.tsx | Licensed commercial lines team | EXEMPT | Business credential per audit scope | None |
| app/about/page.tsx | app/about/page.tsx | Office hours Monday–Friday 8am–6pm, Saturday 9am–1pm | EXEMPT | Business hours (out of audit scope) | None |
| app/quote/page.tsx | app/quote/page.tsx | A licensed Cascade advisor will follow up with competitive, no-obligation pricing | EXEMPT | Operational sales process, not regulatory | None |
| app/locations/page.tsx | app/locations/page.tsx | Serves Northern Virginia, Richmond, and statewide (metadata) | EXEMPT | Business service area | None |
| app/locations/page.tsx | app/locations/page.tsx | Write commercial truck and vehicle policies across Northern Virginia and the Commonwealth | VERIFIED | Virginia Constitution Art. IV; official state designation as Commonwealth of Virginia | None |
| app/industries/page.tsx | app/industries/page.tsx | Each industry has unique exposures | EXEMPT | General underwriting principle, not a statutory threshold | None |
| app/vehicles/page.tsx | app/vehicles/page.tsx | If you use it for business in Virginia, we can insure it | EXEMPT | Operational sales promise, not a coverage or regulatory definition | None |
| app/resources/page.tsx | app/resources/page.tsx | Expert guides on Virginia commercial auto, dump truck, tow truck, fleet, and Uber Black insurance (metadata) | EXEMPT | Subjective marketing descriptor | None |
| Footer.tsx | Footer.tsx | Coverage is subject to policy terms, conditions, and underwriting approval | VERIFIED | NAIC Advertisement Model Regulation (content.naic.org); standard insurance disclaimer practice | None |
| Footer.tsx | Footer.tsx | Cascade Trucks Insurance is a commercial vehicle insurance brand of Cascade Insurance Group | EXEMPT | Self-referential business structure, not a regulatory threshold | None |
| Footer.tsx | Footer.tsx | Serving businesses across Northern Virginia and the Commonwealth of Virginia | EXEMPT | Geographic service-area marketing, not a statutory claim | None |
| TrustIndicators.tsx | TrustIndicators.tsx | Independent agency | VERIFIED | Virginia SCC Insurance Agents & Agencies (scc.virginia.gov); industry usage for agencies representing multiple insurers | None |
| TrustIndicators.tsx | TrustIndicators.tsx | Backed by Cascade Insurance Group and multiple A-rated carrier partners | UNVERIFIABLE | AM Best rating scale is a recognized standard, but specific carrier appointments and ratings cannot be confirmed from primary sources in this review | None |
| TrustIndicators.tsx | TrustIndicators.tsx | Virginia specialists with local expertise in trucking and commercial vehicle coverage | EXEMPT | Subjective market-positioning language, not a licensing or coverage-definition claim | None |
| TrustIndicators.tsx | TrustIndicators.tsx | Talk to a licensed advisor | VERIFIED | Va. Code § 38.2-1800 (law.lis.virginia.gov): individuals who sell, solicit, or negotiate insurance must hold a Virginia producer license; "negotiate" includes offering advice to purchasers | None |
| TrustIndicators.tsx | TrustIndicators.tsx | Fast, no-obligation quotes | EXEMPT | Marketing language, not a regulatory threshold | None |
| QuoteForm.tsx | QuoteForm.tsx | No obligation to purchase after requesting a quote | EXEMPT | Voluntary marketing assurance, not a statutory requirement | None |
| QuoteForm.tsx | QuoteForm.tsx | We never sell your information | UNVERIFIABLE | Va. Code Title 38.2, Ch. 6 (insurance information privacy) restricts disclosure but permits sharing with insurers and affiliates for underwriting; absolute "never sell" claim requires human review of actual privacy and lead-handling practices | None |
