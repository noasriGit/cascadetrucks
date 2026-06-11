import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds hover lift + border emphasis for interactive (linked) cards. */
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 shadow-card",
        interactive &&
          "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
