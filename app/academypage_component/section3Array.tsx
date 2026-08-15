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
    <div className="bg-[#FFFFF0] py-10 ">
      <div
        ref={containerRef}
<<<<<<< Updated upstream
        className="grid  md:mt-0 mt-2
         text-left grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3  mx-auto "
      >
        {programWeeks.map((item, index) => (
          <div
            key={item.week}
            className={`border md:aspect-[1/0.5]  bg-white p-4 rounded-2xl transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
          >
            <p className="font-medium text-lg md:text-xl text-[#10A4EA]">
              {item.week}
            </p>
            <h3 className="text-base  font-semibold text-[#031F4F]">
              {item.title}
            </h3>
            <p className="text-[#7B899A] font-medium text-sm ] max-w-md">
              {item.description}
            </p>
          </div>
        ))}
=======
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default FeatureBadges;