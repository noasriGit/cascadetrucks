"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/layout/PhoneLink";
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
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!entry.menu) {
    const active = isActivePath(pathname, entry.href);
    return (
      <Link
        href={entry.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors xl:px-2.5",
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

  function closeMenu(returnFocus = true) {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  function focusFirstLink() {
    requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    });
  }

  function onButtonKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        closeMenu();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        focusFirstLink();
      } else {
        focusFirstLink();
      }
      return;
    }
    if (e.key === "Tab" && open && !e.shiftKey) {
      e.preventDefault();
      focusFirstLink();
    }
  }

  function onMenuKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }

    const links = menuRef.current ? Array.from(menuRef.current.querySelectorAll<HTMLAnchorElement>("a")) : [];
    if (links.length === 0) return;

    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      links[(currentIndex + 1) % links.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      links[(currentIndex <= 0 ? links.length : currentIndex) - 1]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      links[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      links[links.length - 1]?.focus();
    }
  }

  function onContainerBlur(e: React.FocusEvent<HTMLDivElement>) {
    const next = e.relatedTarget as Node | null;
    if (!containerRef.current?.contains(next)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
      onBlur={onContainerBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        aria-label={`${entry.label} submenu`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className={cn(
          "inline-flex items-center gap-0.5 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors xl:gap-1 xl:px-2.5",
          active || open ? "bg-white/10 text-white" : "text-brand-100 hover:bg-white/10 hover:text-white",
        )}
      >
        {entry.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={menuId}
          ref={menuRef}
          onKeyDown={onMenuKeyDown}
          className="animate-menu-in absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-line bg-white p-2 text-ink shadow-elevated"
        >
          <Link
            href={entry.menu.overview.href}
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
      <Container className="flex h-16 max-w-7xl items-center justify-between gap-3 lg:h-20 lg:gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex flex-nowrap items-center justify-center gap-0">
            {mainNav
              .filter((entry) => entry.href !== "/")
              .map((entry) => (
              <li key={entry.href} className="shrink-0">
                <NavEntry entry={entry} pathname={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-2">
          <PhoneLink
            aria-label={`Call ${site.brandName} at ${site.phoneDisplay}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-semibold text-accent-400 transition-colors hover:bg-white/10 hover:text-accent-300 xl:px-3"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </PhoneLink>
          <Button href={ctaNav.href} size="sm">
            {ctaNav.label}
          </Button>
        </div>

        <MobileNav pathname={pathname} />
      </Container>
    </header>
  );
}
