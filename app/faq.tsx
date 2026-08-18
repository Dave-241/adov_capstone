      desc: "Design, branding and build happen under one roof, so nothing gets lost in handoff.",
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "One team, start to finish",
    description:
      "Design, branding and development work together from the first idea to launch.",
    video: "/why-adov-1.mp4",
  },
  {
    number: "02",
    title: "Fast, disciplined timelines",
    description:
      "Clear schedules, constant updates and zero guesswork on what comes next.",
    video: "/why-adov-3.mp4",
  },
  {
    number: "03",
    title: "Built to a client standard",
    description:
      "Every detail is treated like it is going in front of our own brand.",
    video: "/why-adov-2.mp4",
  },
];

export default function WhyAdov() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fffff0] pb-12 px-6 md:px-12 lg:px-20 py-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div>
          <p className="text-blue-600 font-medium mb-4">
            WHY BUSINESSES CHOOSE ADOV
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#07152f] leading-tight">
            One partner.
            <br />
            Everything your
            <br />
            <span className="text-blue-600">brand needs.</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-xl">
            We bring design, development and branding together under one roof,
            so your project stays consistent from the first idea to launch.
          </p>

          {/* REASONS */}
          <div className="mt-10 space-y-6">
            {reasons.map((reason, index) => (
              <button
                key={reason.number}
                onClick={() => setActive(index)}
                className={`w-full text-left border-t pt-5 transition-all ${
                  active === index ? "border-blue-600" : "border-gray-300"
                }`}
              >
                <div className="flex gap-5">
                  <span
                    className={`text-sm font-semibold ${
                      active === index ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {reason.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#07152f]">
                      {reason.title}
                    </h3>

                    {active === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gray-600 mt-2"
                      >
                        {reason.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — VIDEO */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.video
                key={reasons[active].video}
                src={reasons[active].video}
                autoPlay
                muted
                loop
                playsInline
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
