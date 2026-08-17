import { Calendar, Clock, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Calendar,
      title: "One team, start to finish",
      desc: "Design, branding and build happen under one roof, so nothing gets lost in handoff.",
    },
    {
      icon: Clock,
      title: "Fast, disciplined timelines",
      desc: "Every project runs on a clear schedule, so you always know what ships and when.",
    },
    {
      icon: ShieldCheck,
      title: "Built to a client standard",
      desc: "Every deliverable, however small, is treated like it's going in front of a paying client.",
    },
  ];

  return (
    <section className="  py-6 max-w-7xl mx-auto px-4 md:px-12">
      <div className="">
        {/* Heading */}
        <h3 className="text-3xl uppercase font-bold text-[#0f172b] text-center py-3 mb-3">
          Why Businesses Choose Adov
        </h3>
        <p className="text-slate-500 mx-auto max-w-4xl mb-8 text-balance text-center">
          Most business owners simply want a website that works, looks
          professional,
          <br /> and is built by people who know what they are doing, without
          chasing five different freelancers to get there. That is exactly what
          Adov delivers. Because we handle design, development, and branding
          under one roof, your project stays consistent, on-brand, and
          stress-free from the first idea to the final launch.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((f) => (
            <div key={f.title} className="border-t border-slate-300 pt-4">
              <f.icon
                className="w-5 h-5 text-sky-500 mb-3"
                strokeWidth={1.75}
              />
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
