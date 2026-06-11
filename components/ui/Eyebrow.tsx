import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  invert = false,
  className,
}: {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        invert ? "bg-white/10 text-accent-300" : "bg-brand-50 text-brand-600",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", invert ? "bg-accent-400" : "bg-accent-500")} />
      {children}
    </span>
  );
}
