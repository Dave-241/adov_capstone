export default function Founders() {
  const stats = [
    { value: "20+", label: "Websites shipped" },
    { value: "3", label: "Core services" },
    { value: "1", label: "Academy cohort live" },
    { value: "5 weeks", label: "Training program" },
  ];

  return (
    <section className="bg-[#fdfbe9] py-4">
      <div className="max-w-5xl mx-auto px-12">
        <p className="text-center text-slate-500 text-sm mb-10 px-16">
          Built for founders, studios and teams shipping real products
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
