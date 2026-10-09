const MAX_SOURCE_PATH_LENGTH = 180;
const MAX_UTM_VALUE_LENGTH = 80;
const MAX_SLUG_LENGTH = 100;
const SAFE_UTM_VALUE = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface LeadAttribution {
  sourcePath?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  serviceSlug?: string;
  vehicleSlug?: string;
}

export interface LeadAttributionInput {
  sourcePath?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  serviceSlug?: unknown;
  vehicleSlug?: unknown;
}

export interface ValidAttributionSlugs {
  paths: ReadonlySet<string>;
  services: ReadonlySet<string>;
  vehicles: ReadonlySet<string>;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function sanitizeSourcePath(value: unknown): string | undefined {
  const raw = asTrimmedString(value);
  if (!raw || raw.length > MAX_SOURCE_PATH_LENGTH || !raw.startsWith("/") || raw.startsWith("//")) {
    return undefined;
  }

  try {
    const parsed = new URL(raw, "https://www.cascadetruckinsurance.com");
    const path = parsed.pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
    return path.length <= MAX_SOURCE_PATH_LENGTH ? path : undefined;
  } catch {
    return undefined;
  }
}

export function sanitizeUtmValue(value: unknown): string | undefined {
  const raw = asTrimmedString(value);
  if (!raw || raw.length > MAX_UTM_VALUE_LENGTH || !SAFE_UTM_VALUE.test(raw)) {
    return undefined;
  }
  return raw;
}

function sanitizeSlug(value: unknown): string | undefined {
  const raw = asTrimmedString(value).toLowerCase();
  if (!raw || raw.length > MAX_SLUG_LENGTH || !SAFE_SLUG.test(raw)) return undefined;
  return raw;
}

export function captureLeadAttribution(
  location: { pathname: string; search: string },
  context: { serviceSlug?: string; vehicleSlug?: string } = {}
): LeadAttribution {
  const params = new URLSearchParams(location.search);
  return {
    sourcePath: sanitizeSourcePath(location.pathname),
    utmSource: sanitizeUtmValue(params.get("utm_source")),
    utmMedium: sanitizeUtmValue(params.get("utm_medium")),
    utmCampaign: sanitizeUtmValue(params.get("utm_campaign")),
    serviceSlug: sanitizeSlug(context.serviceSlug),
    vehicleSlug: sanitizeSlug(context.vehicleSlug),
  };
}

export function validateLeadAttribution(
  input: LeadAttributionInput,
  validSlugs: ValidAttributionSlugs
): LeadAttribution {
  const candidateSourcePath = sanitizeSourcePath(input.sourcePath);
  const sourcePath =
    candidateSourcePath && validSlugs.paths.has(candidateSourcePath)
      ? candidateSourcePath
      : undefined;
  const candidateService = sanitizeSlug(input.serviceSlug);
  const candidateVehicle = sanitizeSlug(input.vehicleSlug);
  const serviceSlug =
    sourcePath &&
    candidateService &&
    !candidateVehicle &&
    validSlugs.services.has(candidateService) &&
    sourcePath === `/coverage/${candidateService}`
      ? candidateService
      : undefined;
  const vehicleSlug =
    sourcePath &&
    candidateVehicle &&
    !candidateService &&
    validSlugs.vehicles.has(candidateVehicle) &&
    sourcePath === `/vehicles/${candidateVehicle}`
      ? candidateVehicle
      : undefined;

  return {
    sourcePath,
    utmSource: sourcePath ? sanitizeUtmValue(input.utmSource) : undefined,
    utmMedium: sourcePath ? sanitizeUtmValue(input.utmMedium) : undefined,
    utmCampaign: sourcePath ? sanitizeUtmValue(input.utmCampaign) : undefined,
    serviceSlug,
    vehicleSlug,
  };
}
