import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-brand-950 shadow-sm hover:bg-accent-400 hover:shadow-md active:scale-[0.98]",
  secondary:
    "border border-brand-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-brand-50 active:scale-[0.98]",
  ghost: "text-brand-700 hover:bg-brand-50 active:scale-[0.98]",
  outlineLight:
    "border-2 border-white/60 text-white hover:border-white hover:bg-white/10 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const classes = buttonClasses({
    variant: props.variant,
    size: props.size,
    className: props.className,
  });

  if ("href" in props && props.href !== undefined) {
    const isExternal = props.external || /^(tel:|mailto:|https?:)/.test(props.href);
    if (isExternal) {
      const openInNewTab = Boolean(props.external && /^https?:/.test(props.href));
      return (
        <a
          href={props.href}
          className={classes}
          aria-label={props["aria-label"]}
          onClick={props.onClick}
          {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} aria-label={props["aria-label"]} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  const domProps: Record<string, unknown> = { ...props };
  delete domProps.variant;
  delete domProps.size;
  delete domProps.className;
  delete domProps.children;

  return (
    <button className={classes} {...(domProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {props.children}
    </button>
  );
}
