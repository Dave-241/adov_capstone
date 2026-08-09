export default function WhyUs() {
  const features = [
    {
      title: "One team, start to finish",
      desc: "Design, branding and build happen under one roof, so nothing gets lost in handoff.",
    },
    {
      title: "Fast, disciplined timelines",
      desc: "Every project runs on a clear schedule, so you always know what ships and when.",
    },
    {
      title: "Built to a client standard",
      desc: "Every deliverable, however small, is treated like it's going in front of a paying client.",
    },
  ];

  return (
    <section className="  py-6 max-w-7xl mx-auto px-4 md:px-12">
      <div className="">
        {/* Heading */}
        <p className="text-sky-500 text-sm font-semibold tracking-wide uppercase mb-3">
          Why Adov
        </p>
        <p className="text-slate-500 max-w-xl mb-8">
          Every decision we make begins with understanding your goals. By
          combining research, creativity, and technology, we deliver solutions
          designed to create meaningful impact.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((f) => (
            <div key={f.title} className="border-t px-3 border-slate-300 pt-4 ">
              <h3 className="font-semibold text-slate-900 mb-2  ">{f.title}</h3>
              <p className="text-sm text-slate-500 ">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
