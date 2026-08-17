"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    // avatar: "/avatar-1.jpg",
    title: "WEBSITE DESIGN AND DEVELOPMENT",
    description:
      "We build complete websites from frontend to backend, tailored to your business needs. Fast, responsive, secure, and built to perform.",
    items: [
      { label: "Custom, responsive websites that work on every device" },
      { label: "Full frontend and backend development" },
      { label: "Fast loading, secure, and built for search engines" },
    ],
  },
  {
    number: "02",
    // avatar: "/avatar-2.jpg",
    title: "UI/UX DESIGN",
    description:
      "Our designs create clean, intuitive, and beautiful interfaces that guide your users effortlessly and keep them coming back. From research and wireframes to polished, pixel-perfect screens.",
    items: [
      { label: "User research and wireframing" },
      { label: "Intuitive, conversion-focused interfaces" },
      { label: "Beautiful, modern and consistent design" },
    ],
  },
  {
    number: "03",
    // avatar: "/avatar-4.jpg",
    title: "BRANDING AND VISUAL IDENTITY",
    description:
      "We create complete brand identities including color palettes, typography, visual style, and the supporting assets that hold everything together, so your business looks consistent, professional, and unforgettable everywhere it appears, online and offline.",
    items: [
      { label: "Full brand identity and style guides" },
      { label: "Color, typography and visual systems" },
      { label: "Consistent assets for web and social media" },
    ],
  },
];

// Background used behind the logo during the intro/zoom phase.
const HERO_BACKGROUND_IMAGE = "/background_no_logo.png";

export default function ServicesIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [showLogo, setShowLogo] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowLogo(latest < 0.3);
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 6]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.22, 0.3], [1, 1, 0]);

  // Fade the hero background image out as the services layer takes over,
  // so the black services panel isn't fighting the image underneath it.
  const heroBgOpacity = useTransform(scrollYProgress, [0.22, 0.35], [1, 0]);

  const servicesOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const servicesScale = useTransform(scrollYProgress, [0.3, 0.45], [0.9, 1]);

  return (
    <div ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Hero background image layer — sits behind the logo, fades out on scroll */}
        <motion.div
          style={{
            opacity: heroBgOpacity,
            backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0"
        />


        {/* Services layer — solid black panel so text stays readable
            once it fades in over the hero background */}
        <motion.div
          style={{ opacity: servicesOpacity, scale: servicesScale }}
          className="absolute inset-0 overflow-y-auto py-16 px-6 bg-black"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="relative bg-neutral-100 rounded-tl-[48px] rounded-tr-2xl rounded-b-2xl p-6 pt-8 flex flex-col"
              >
                {/* Number badge - top right, overlapping the card edge */}
                <div className="absolute -top-4 right-6 w-14 h-14 rounded-full bg-white border border-black flex items-center justify-center text-sm font-medium z-10">
                  {service.number}
                </div>

                {/* Avatar circle - top left */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={service.avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-700 mb-6">
                  {service.description}
                </p>

                {/* Pill list items */}
                <div className="flex flex-col gap-3 flex-1">
                  {service.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-full px-4 py-3 text-sm bg-white text-slate-900"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Learn more link - pinned to bottom */}
                {/* <button className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900 self-start">
                  See more
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                    ↗
                  </span>
                </button> */}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo layer */}
        {showLogo && (
          <motion.div
            style={{ scale: logoScale, opacity: logoOpacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <img
              src="/adov-logo-mark.jpeg"
              alt="Adov logo"
              className="w-40 sm:w-56"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
