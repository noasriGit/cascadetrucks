/** Regional location slug sets for rotating related-location links. */

export const NOVA_LOCATIONS = [
  "manassas-va",
  "fairfax-va",
  "arlington-va",
  "alexandria-va",
  "chantilly-va",
  "tysons-va",
  "woodbridge-va",
] as const;

export const RICHMOND_LOCATIONS = [
  "richmond-va",
  "henrico-va",
  "short-pump-va",
  "glen-allen-va",
  "mechanicsville-va",
  "ashland-va",
  "fredericksburg-va",
] as const;

export const STATEWIDE_CORE = [
  "manassas-va",
  "fairfax-va",
  "arlington-va",
  "richmond-va",
  "henrico-va",
  "fredericksburg-va",
  "winchester-va",
] as const;

export const LOUDOUN_LOCATIONS = [
  "leesburg-va",
  "ashburn-va",
  "sterling-va",
  "herndon-va",
  "reston-va",
  "fairfax-va",
  "manassas-va",
] as const;

export const CENTRAL_CORRIDOR = [
  "stafford-va",
  "fredericksburg-va",
  "spotsylvania-va",
  "woodbridge-va",
  "manassas-va",
  "richmond-va",
  "ashland-va",
] as const;

export type LocationSlugSet = readonly string[];
