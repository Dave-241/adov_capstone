export default function Founders() {
  const stats = [
    { value: "20+", label: "Websites shipped" },
    { value: "3", label: "Core services" },
    { value: "1", label: "Academy cohort live" },
    { value: "5 weeks", label: "Training program" },
  ];

  return (
    <section className=" max-w-7xl mx-auto px-12 py-4">
      <div className="">
        <p className="text-center text-slate-500 text-sm mb-10 px-16">
          Built for founders, studios and teams shipping real products
        </p>

        <div className="grid w-full grid-cols-2 md:grid-cols-4 text-center gap-8 mb-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
