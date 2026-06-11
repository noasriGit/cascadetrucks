import { carriers } from "@/data/carriers";

export function CarrierLogos() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {carriers.map((carrier) => (
        <li
          key={carrier.id}
          className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-line bg-surface px-3 py-4 text-center shadow-card transition-shadow hover:shadow-card-hover"
        >
          <span className="text-sm font-semibold leading-snug text-brand-700">{carrier.name}</span>
        </li>
      ))}
    </ul>
  );
}
