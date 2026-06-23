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
    const skip = document.getElementById("splash-skip");

    function dismissSkip() {
      skip?.classList.add("hidden");
    }

    skip?.addEventListener("click", () => {
      hideSplash();
      dismissSkip();
      document.getElementById("main-content")?.focus();
    });

    if (sessionStorage.getItem(SPLASH_SESSION_KEY)) {
      hideSplash();
      dismissSkip();
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hideSplash();
      dismissSkip();
      return;
    }

    if (!boot || !curtain) return;

    skip?.classList.remove("hidden");

    const fadeMs = SPLASH_FADE_MS;
    const holdMs = SPLASH_HOLD_MS;
    const failsafeMs = holdMs + fadeMs + 400;

    boot.classList.add("splash-animate");

    const failsafe = window.setTimeout(() => {
      hideSplash();
      dismissSkip();
    }, failsafeMs);

    const holdTimer = window.setTimeout(() => {
      startSplashExit(boot, fadeMs, () => {
        window.clearTimeout(failsafe);
        hideSplash();
        dismissSkip();
      });
    }, holdMs);

    // No cleanup — React Strict Mode remount must not cancel these timers.
    void holdTimer;
    void failsafe;
  }, []);

  return null;
}
