import Link from "next/link";

export function EditorialDisclaimer() {
  return (
    <p className="rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm leading-relaxed text-muted">
      This guide is for general information only. It is not legal advice or a guarantee of coverage. Confirm
      requirements with a licensed advisor and your carrier. See our{" "}
      <Link href="/editorial-standards" className="font-medium text-brand-700 hover:underline">
        editorial standards
      </Link>
      .
    </p>
  );
}
