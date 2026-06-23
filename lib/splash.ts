export const SPLASH_SESSION_KEY = "cascade-splash-seen";

export const SPLASH_HOLD_MS = 400;
export const SPLASH_FADE_MS = 450;

const SPLASH_OVERLAY_CSS =
  "#splash-boot{display:block!important;position:fixed;inset:0;z-index:100;pointer-events:auto}#splash-boot .splash-boot-curtain{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:#3c4969;opacity:1}";

const SPLASH_BODY_LOCK = "body{overflow:hidden!important}";

export const SPLASH_BOOT_SCRIPT = `(function(){try{if(sessionStorage.getItem("${SPLASH_SESSION_KEY}"))return;if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){sessionStorage.setItem("${SPLASH_SESSION_KEY}","1");return}}catch(e){return}var s=document.createElement("style");s.id="splash-critical";s.textContent="${SPLASH_OVERLAY_CSS}${SPLASH_BODY_LOCK}";document.head.appendChild(s)})();`;

/** Idempotent — safe to call multiple times. */
export function hideSplash() {
  sessionStorage.setItem(SPLASH_SESSION_KEY, "1");

  const boot = document.getElementById("splash-boot");
  const curtain = boot?.querySelector<HTMLElement>(".splash-boot-curtain");

  curtain?.style.setProperty("opacity", "0");
  curtain?.style.setProperty("visibility", "hidden");
  boot?.classList.add("splash-done", "splash-exiting");
  boot?.classList.remove("splash-animate");
  boot?.style.setProperty("pointer-events", "none");

  document.getElementById("splash-critical")?.remove();
  document.body.style.removeProperty("overflow");
}

export function unlockBodyScroll() {
  const critical = document.getElementById("splash-critical");
  if (critical) {
    critical.textContent = SPLASH_OVERLAY_CSS;
  }
}

export function startSplashExit(boot: HTMLElement, fadeMs: number, onDone: () => void) {
  unlockBodyScroll();
  boot.classList.add("splash-exiting");
  window.setTimeout(onDone, fadeMs + 80);
}
