"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, ListChecks, Users, Award } from "lucide-react";

const features = [
  {
    icon: MapPin,
    text: "Onsite and hands-on, you learn in a focused, supportive, in-person environment.",
  },
  {
    icon: ListChecks,
    text: "Project-based, you finish the program with a real project in your portfolio.",
  },
  {
    icon: Users,
    text: "Community-driven, you grow alongside a cohort of people who push you forward.",
  },
  {
    icon: Award,
    text: "Built for outcomes, our top-performing trainees are considered for real job opportunities.",
  },
];

const FeatureBadges = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFFFF0]">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto"
      >
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className={`bg-white rounded-4xl  border-black/5 shadow-sm p-4 flex flex-col gap-2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div className="w-7 h-7 rounded-full bg-[#F3EEDD] flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-[#031F4F]" strokeWidth={2} />
              </div>
              <p className="text-[12px] text-[#7B899A] leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureBadges;