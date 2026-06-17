import { site } from "@/data/site";
import type { MouseEvent } from "react";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function getTelHref() {
  return `tel:${site.phoneHref}`;
}

export function handleClickToCall(event: MouseEvent<HTMLAnchorElement>, url = getTelHref()) {
  event.preventDefault();

  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(url);
    return;
  }

  window.location.href = url;
}
