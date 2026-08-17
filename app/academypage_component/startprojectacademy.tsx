"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Startyourtech() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={
        "bg-[#FFFFF0] px-3 md:px-12 py-16 section-fade" +
        (isVisible ? " visible" : "")
      }
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-fade {
          opacity: 0;
        }
        .section-fade.visible {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto bg-[#031F4F] py-7 md:py-12  rounded-3xl text-center px-12  ">
        <h2 className="text-white text-xl md:text-2xl md:text-3xl font-bold mb-4">
          Start Your Tech Career With Adov Academy
        </h2>
        <p className="text-slate-300 text-xs md:text-sm max-w-md mx-auto mb-8">
          Spaces are limited and cohorts fill up fast. If you are ready to build
          a future in tech and design, this is your moment to take the first
          step.
        </p>
        <div className="flex gap-5 justify-center">
          <Link
            href="/contact"
            className="bg-[#ffff]  hover:bg-[#618bd4] text-[#042a6b] items-center flex justify-center hover:text-white text-sm font-medium px-6 py-3 rounded-full transition"
          >
            Register now
          </Link>
          <Link
            href="/contact"
            className="border hover:bg-[#042a6b] text-white text-sm font-medium px-6 py-3 items-center flex justify-center rounded-full transition"
          >
            Login to dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}