interface Stat {
  value: string;
  label: string;
}

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block text-3xl font-extrabold tracking-tight text-accent-400 sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1.5 block text-sm text-brand-100">{stat.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
