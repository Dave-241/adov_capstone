"use client";
import { useEffect, useRef, useState } from "react";
import { Layout, Braces, Palette, PenTool } from "lucide-react";

const disciplines = [
  {
    icon: Layout,
    title: "Frontend development",
    description: "Building responsive, accessible interfaces from real designs.",
    bg: "bg-[#FBEFC7]",
    iconBg: "bg-[#BBCED7]",
  },
  {
    icon: Braces,
    title: "Backend development",
    description: "Authentication, databases and working application logic.",
    bg: "bg-[#E5F2D9]",
    iconBg: "bg-[#BBCED7]",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    description: "Research, wireframing and high-fidelity interface design.",
    bg: "bg-white",
    iconBg: "bg-[#BBCED7]",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Identity systems that hold up across every touchpoint.",
    bg: "bg-[#F6EAF5]",
    iconBg: "bg-[#BBCED7]",
  },
];

const Section3 = () => {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFFFF0]">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl px-12 mx-auto"
      >
        {disciplines.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`${item.bg} rounded-2xl p-6 border border-black/5 hover:shadow-2xl transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div
                className={`${item.iconBg} w-9 h-9 rounded-lg flex items-center justify-center mb-6`}
              >
                <Icon className="w-4 h-4 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-[16px] font-semibold text-[#031F4F] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#7B899A] leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section3;