"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import onsite from "@/public/how1.webp";
import communitydrn from "@/public/how2.webp";
import projectbased from "@/public/how3.webp";
import built from "@/public/how4.webp";

type Feature = {
  image: typeof onsite;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  reverse: boolean;
};

const features: Feature[] = [
  {
    image: onsite,
    alt: "Onsite, hands-on learning environment",
    eyebrow: "01 — Onsite",
    title:
      "Onsite and hands-on, you learn in a focused, supportive, in-person environment.",
    description:
      "The setting is structured to keep distractions away, so your attention stays on the material. Instructors and peers are physically present to guide, encourage, and help you whenever you need it.",
    reverse: false,
  },
  {
    image: projectbased,
    alt: "Project-based portfolio work",
    eyebrow: "02 — Project-based",
    title:
      "Project-based, you finish the program with a real project in your portfolio.",
    description:
      "By the time you finish, you'll have completed a real, working project from start to end. That project becomes part of your portfolio, giving you tangible proof of your skills to show employers.",
    reverse: true,
  },
  {
    image: communitydrn,
    alt: "Community-driven cohort",
    eyebrow: "03 — Community-driven",
    title:
      "Community-driven, you grow alongside a cohort of people who push you forward.",
    description:
      "You're learning as part of a group, not on your own, surrounded by people working toward similar goals. That shared journey keeps you motivated and accountable, as the people around you challenge you to keep improving.",
    reverse: false,
  },
  {
    image: built,
    alt: "Trainees landing real job opportunities",
    eyebrow: "04 — Built for outcomes",
    title:
      "Built for outcomes, our top-performing trainees are considered for real job opportunities.",
    description:
      "The program is designed with a clear end goal: helping you actually land a job, not just complete training. If you perform well, you stand a real chance of being considered for genuine job openings connected to the program.",
    reverse: true,
  },
];

const imageVariant = (reverse: boolean) => ({
  hidden: { opacity: 0, x: reverse ? 40 : -40, scale: 1.05 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
});

const textVariant = (reverse: boolean) => ({
  hidden: { opacity: 0, x: reverse ? -30 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 },
  },
});

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Section3Array = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-6 sm:gap-8 mt-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
              group relative rounded-2xl sm:rounded-3xl overflow-hidden
              bg-white border border-gray-100
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]
              transition-shadow duration-500 ease-out
              grid grid-cols-1 md:grid-cols-2
            `}
          >
            {/* Image */}
            <motion.div
              variants={imageVariant(feature.reverse)}
              className={`
                relative overflow-hidden aspect-[4/3] md:aspect-auto
                ${feature.reverse ? "md:order-2" : "md:order-1"}
              `}
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent md:bg-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={textVariant(feature.reverse)}
              className={`
                flex flex-col justify-center gap-4
                px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12
                ${feature.reverse ? "md:order-1" : "md:order-2"}
              `}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B08D57]">
                {feature.eyebrow}
              </span>

              <h1 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold leading-snug text-[#031F4F]">
                {feature.title}
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-[#7a7a7a]">
                {feature.description}
              </p>

              <motion.div
                className="h-[2px] bg-gradient-to-r from-[#B08D57] to-transparent mt-1"
                initial={{ width: 40 }}
                whileHover={{ width: 64 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section3Array;