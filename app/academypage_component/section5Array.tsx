"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import frontend from "@/public/frontend.webp";
import backend from "@/public/backend.webp";
import branding from "@/public/pexels-zayed-hossain-52728970-36747234 1.webp";
import ui from "@/public/pexels-micahways-10498800 1.webp";

const disciplines = [
  {
    title: "Frontend Development",
    description:
      "Build the parts of a website that users see and interact with, using modern tools like HTML, CSS, Tailwind, and JavaScript.",

    image: { frontend },
  },
  {
    title: "Backend Development",
    description:
      "Power the systems, logic, and data that make websites and apps work.",
    image: { backend },
  },
  {
    title: "UI/UX Design",
    description:
      "Design simple, beautiful, and effective digital experiences using tools like Figma.",
    image: { ui },
  },
  {
    title: "Branding",
    description: "Create visual identities that businesses are proud to wear.",
    image: { branding },
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFFFF0] py-16 ">
      <div
        ref={containerRef}
<<<<<<< Updated upstream
        className="grid grid-cols-1 text-left sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto"
=======
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
>>>>>>> Stashed changes
      >
        {disciplines.map((item, index) => (
          <div
            key={item.title}
            className={`bg-white rounded-4xl border border-black/5 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
            }}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-semibold text-[#031F4F] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#7B899A] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
