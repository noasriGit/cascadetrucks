import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft" | "brand";
  as?: "section" | "div";
  ariaLabelledby?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-surface text-ink",
  soft: "bg-surface-soft text-ink",
  brand: "relative overflow-hidden bg-brand-800 text-white",
};

export function Section({
  children,
  className = "",
  tone = "default",
  as: Tag = "section",
  ariaLabelledby,
}: SectionProps) {
  return (
    <Tag aria-labelledby={ariaLabelledby} className={cn("py-16 sm:py-22", toneClasses[tone], className)}>
      {tone === "brand" ? (
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50" />
      ) : null}
      <Container className={tone === "brand" ? "relative" : undefined}>{children}</Container>
    </Tag>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            align === "center" && "mx-auto",
            invert ? "text-brand-100" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
