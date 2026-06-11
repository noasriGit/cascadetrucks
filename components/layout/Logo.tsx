import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/** Compact brand mark: a stylized truck inside a rounded badge. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-500 text-brand-950 shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h11v9H3z" />
        <path d="M14 9h4l3 3v3h-7z" />
        <circle cx="7" cy="17.5" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="17.5" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center", className)}
      aria-label={`${site.brandName} home`}
    >
      {/* Native img avoids next/image width/height conflicts with w-auto on logos. */}
      <img
        src="/images/cascadelogo.png"
        alt=""
        width={160}
        height={69}
        className="h-9 w-auto max-w-[180px] object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:h-10"
      />
    </Link>
  );
}

/** Large decorative logo for dark hero sections (About, etc.). */
export function HeroBrandLogo({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center lg:justify-end", className)}
    >
      <div className="rounded-2xl bg-white p-4 shadow-elevated ring-1 ring-white/10 sm:p-6 lg:p-8">
        <img
          src="/images/cascadelogo.png"
          alt=""
          width={480}
          height={207}
          className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px]"
        />
      </div>
    </div>
  );
}
