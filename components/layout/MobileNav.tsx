"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/layout/PhoneLink";
import { cn } from "@/lib/cn";
import { mainNav, ctaNav } from "@/data/navigation";
import { site } from "@/data/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      openButtonRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-50">
              <button
                type="button"
                aria-label="Close menu"
                tabIndex={-1}
                onClick={() => setOpen(false)}
                className="animate-overlay-in absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
              />
              <div
                id="mobile-menu"
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="animate-panel-in absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-brand-900 text-white shadow-elevated"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">Menu</span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
                  <ul className="space-y-1">
                    {mainNav.map((entry) => {
                      const active = isActivePath(pathname, entry.href);
                      if (!entry.menu) {
                        return (
                          <li key={entry.href}>
                            <Link
                              href={entry.href}
                              onClick={() => setOpen(false)}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block rounded-xl px-3 py-3 text-base font-medium transition-colors",
                                active ? "bg-white/10 text-white" : "text-brand-100 hover:bg-white/10 hover:text-white",
                              )}
                            >
                              {entry.label}
                            </Link>
                          </li>
                        );
                      }

                      const isExpanded = expanded === entry.href;
                      const submenuId = `mobile-submenu-${entry.href.replace(/\//g, "")}`;

                      return (
                        <li key={entry.href}>
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={submenuId}
                            onClick={() => setExpanded((cur) => (cur === entry.href ? null : entry.href))}
                            className={cn(
                              "flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors",
                              active ? "bg-white/10 text-white" : "text-brand-100 hover:bg-white/10 hover:text-white",
                            )}
                          >
                            {entry.label}
                            <ChevronDown
                              className={cn("h-5 w-5 transition-transform duration-200", isExpanded && "rotate-180")}
                              aria-hidden="true"
                            />
                          </button>
                          {isExpanded ? (
                            <ul id={submenuId} className="mt-1 space-y-0.5 border-l border-white/10 pl-3">
                              <li>
                                <Link
                                  href={entry.menu.overview.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-accent-300 hover:bg-white/10"
                                >
                                  {entry.menu.overview.label}
                                </Link>
                              </li>
                              {entry.menu.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    aria-current={pathname === item.href ? "page" : undefined}
                                    className={cn(
                                      "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                      pathname === item.href
                                        ? "bg-white/10 font-semibold text-white"
                                        : "text-brand-200 hover:bg-white/10 hover:text-white",
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="space-y-3 border-t border-white/10 px-5 py-5">
                  <Button href={ctaNav.href} className="w-full" size="lg" onClick={() => setOpen(false)}>
                    {ctaNav.label}
                  </Button>
                  <PhoneLink
                    onClick={() => setOpen(false)}
                    aria-label={`Call ${site.brandName} at ${site.phoneDisplay}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-base font-semibold text-accent-300 transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {site.phoneDisplay}
                  </PhoneLink>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
