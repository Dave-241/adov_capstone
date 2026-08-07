"use client";

import { useEffect, useRef, useState } from "react";

const programWeeks = [
  {
    week: "WEEK 1",
    title: "Foundations",
    description: "Foundations & Digital Mindset",
  },
  {
    week: "WEEK 2",
    title: "Core Skills",
    description: "Core Skills & Practical Learning",
  },
  { week: "WEEK 3", title: "Projects", description: "Collaborative Projects" },
  {
    week: "WEEK 4",
    title: "Advanced Topics",
    description: "Advanced Topics & Specialization",
  },
  {
    week: "WEEK 5",
    title: "Capstone",
    description: "Capstone Project & Portfolio Presentation",
  },
];

const Section3Array = () => {
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
    <div className=" ">
      <div
        ref={containerRef}
        className="grid  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3  mx-auto "
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
            <p className="font-medium text-sm sm:text-[16px] text-[#10A4EA]">
              {item.week}
            </p>
            <h3 className="text-sm sm:text-[16px] font-semibold text-[#031F4F]">
              {item.title}
            </h3>
            <p className="text-[#7B899A] font-medium text-xs sm:text-[10px] max-w-md">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3Array;
