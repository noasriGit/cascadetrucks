"use client";

import { useLayoutEffect, useState } from "react";
import { cn } from "@/lib/cn";

const SESSION_KEY = "cascade-splash-seen";

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setFadeOut(true), 750);
    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 1150);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-brand-800",
        fadeOut && "animate-splash-out pointer-events-none",
      )}
    >
      <img
        src="/images/cascadelogo.png"
        alt=""
        width={240}
        height={104}
        className="w-[min(72vw,240px)] animate-splash-logo object-contain"
      />
    </div>
  );
}
