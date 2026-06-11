"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { mainNav, ctaNav, type MainNavEntry } from "@/data/navigation";
import { site } from "@/data/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavEntry({ entry, pathname }: { entry: MainNavEntry; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!entry.menu) {
    const active = isActivePath(pathname, entry.href);
    return (
      <Link
        href={entry.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          active ? "bg-white/10 text-white" : "text-brand-100 hover:bg-white/10 hover:text-white",
        )}
      >
        {entry.label}
      </Link>
    );
  }

  const active = isActivePath(pathname, entry.href);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }
  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          active || open ? "bg-white/10 text-white" : "text-brand-100 hover:bg-white/10 hover:text-white",
        )}
      >
        {entry.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          className="animate-menu-in absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-line bg-white p-2 text-ink shadow-elevated"
        >
          <Link
            href={entry.menu.overview.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-xl bg-brand-50 px-3 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-100"
          >
            {entry.menu.overview.label}
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <ul className="mt-1.5">
            {entry.menu.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-brand-50 font-semibold text-brand-700"
                      : "text-muted hover:bg-brand-50 hover:text-brand-800",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-t-2 border-accent-500 bg-brand-800 text-white transition-shadow duration-200",
        scrolled ? "shadow-lg shadow-brand-950/30 supports-[backdrop-filter]:bg-brand-800/90 supports-[backdrop-filter]:backdrop-blur" : "shadow-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((entry) => (
              <li key={entry.href}>
                <NavEntry entry={entry} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-accent-400 transition-colors hover:bg-white/10 hover:text-accent-300"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button href={ctaNav.href} size="sm">
            {ctaNav.label}
          </Button>
        </div>

        <MobileNav pathname={pathname} />
      </Container>
    </header>
  );
}
