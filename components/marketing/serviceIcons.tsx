import {
  Boxes,
  Briefcase,
  Car,
  CarFront,
  Droplets,
  HardHat,
  Shield,
  Trees,
  Truck,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconBySlug: Record<string, LucideIcon> = {
  "dump-truck-insurance": Truck,
  "tow-truck-insurance": Truck,
  "contractor-vehicle-insurance": Wrench,
  "plumbing-vehicle-insurance": Droplets,
  "hvac-vehicle-insurance": Wind,
  "landscaping-vehicle-insurance": Trees,
  "construction-vehicle-insurance": HardHat,
  "commercial-fleet-insurance": Boxes,
  "uber-black-insurance": CarFront,
  "commercial-auto-insurance": Car,
  "business-auto-insurance": Briefcase,
};

export function getServiceIcon(slug: string): LucideIcon {
  return iconBySlug[slug] ?? Shield;
}
