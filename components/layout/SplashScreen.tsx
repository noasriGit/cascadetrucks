"use client";

import { useLayoutEffect } from "react";
import {
  SPLASH_FADE_MS,
  SPLASH_HOLD_MS,
  SPLASH_SESSION_KEY,
  hideSplash,
  startSplashExit,
} from "@/lib/splash";

export function SplashScreen() {
  useLayoutEffect(() => {
    const boot = document.getElementById("splash-boot");
    const curtain = boot?.querySelector<HTMLElement>(".splash-boot-curtain");

    if (sessionStorage.getItem(SPLASH_SESSION_KEY)) {
      hideSplash();
      return;
    }

    if (!boot || !curtain) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fadeMs = reducedMotion ? 180 : SPLASH_FADE_MS;
    const holdMs = reducedMotion ? 180 : SPLASH_HOLD_MS;
    const failsafeMs = holdMs + fadeMs + 400;

    boot.classList.add("splash-animate");

    const failsafe = window.setTimeout(hideSplash, failsafeMs);

    const holdTimer = window.setTimeout(() => {
      startSplashExit(boot, fadeMs, () => {
        window.clearTimeout(failsafe);
        hideSplash();
      });
    }, holdMs);

    // No cleanup — React Strict Mode remount must not cancel these timers.
    void holdTimer;
    void failsafe;
  }, []);

  return null;
}
