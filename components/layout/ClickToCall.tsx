import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

interface ClickToCallProps {
  variant?: "solid" | "outline" | "inline";
  className?: string;
  label?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-150 ease-out";

const variants: Record<NonNullable<ClickToCallProps["variant"]>, string> = {
  solid: "bg-accent-500 text-brand-950 shadow-sm hover:bg-accent-400 hover:shadow-md active:scale-[0.98]",
  outline: "border-2 border-white/60 text-white hover:border-white hover:bg-white/10 active:scale-[0.98]",
  inline: "px-0 py-0 text-brand-700 underline underline-offset-2 hover:text-brand-900",
};

export function ClickToCall({ variant = "solid", className = "", label }: ClickToCallProps) {
  return (
    <a
      href={`tel:${site.phoneHref}`}
      className={cn(base, variants[variant], className)}
      aria-label={`Call ${site.brandName} at ${site.phoneDisplay}`}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span>{label ?? `Call ${site.phoneDisplay}`}</span>
    </a>
  );
}
