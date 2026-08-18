"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({
  target,
  duration = 1500, // milliseconds the count-up animation takes
  prefix = "",
  suffix = "",
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false); // prevents re-triggering the animation

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting is true once the element is visible
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = performance.now();

            const animate = (now: number) => {
              const elapsed = now - startTime;
              // progress goes from 0 (just started) to 1 (finished)
              const progress = Math.min(elapsed / duration, 1);

              // easeOutQuad: starts fast, slows down near the end —
              // feels more natural than a straight linear count
              const eased = 1 - (1 - progress) * (1 - progress);

              setCount(Math.round(eased * target));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);

            // Stop watching this element — we only want this once
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }, // fires when 30% of the element is visible
    );

    observer.observe(element);

    // Cleanup: stop observing if the component unmounts early
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <p ref={ref} className="text-2xl font-bold text-slate-900">
      {prefix}
      {count}
      {suffix}
    </p>
  );
}

export default function Founders() {
  const stats = [
    { value: "55+", label: "Websites shipped" },
    { value: "3", label: "Core services" },
    { value: "1", label: "Academy cohort live" },
    { value: "5 weeks", label: "Training program" },
  ];

  return (
    <section className=" max-w-7xl mx-auto px-12 py-4 bg-[#fffff0]">
      <div className="">
        <p className="text-center text-slate-500 text-[20px] mb-10 px-16">
          Proven Through Projects and Practice
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                {s.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
