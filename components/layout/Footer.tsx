import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";
import { LogoMark } from "./Logo";
import { footerNav, ctaNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="leading-tight">
                <p className="text-base font-extrabold text-white">{site.brandName}</p>
                <p className="text-xs text-brand-300">A division of {site.parentName}</p>
              </div>
            </div>
            <address className="mt-5 space-y-2.5 not-italic text-sm leading-6">
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.regionCode} {site.address.postalCode}
                </span>
              </span>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2.5 font-semibold text-accent-400 transition-colors hover:text-accent-300"
              >
                <Phone className="h-4 w-4 flex-none" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 flex-none text-brand-400" aria-hidden="true" />
                {site.email}
              </a>
            </address>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{group.heading}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-brand-200 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-brand-300">
            <p>
              &copy; {year} {site.legalName}. All rights reserved.
            </p>
            <p className="mt-2 max-w-3xl">
              Cascade Trucks Insurance is a commercial vehicle insurance brand of {site.parentName}, serving
              businesses across Northern Virginia and the Commonwealth of Virginia. Coverage is subject to policy
              terms, conditions, and underwriting approval.
            </p>
          </div>
          <div className="flex flex-none flex-wrap items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Link
              href={ctaNav.href}
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
            >
              {ctaNav.label}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
