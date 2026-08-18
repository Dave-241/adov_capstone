"use client";

import { motion } from "framer-motion";

const services = [
  {
    letter: "W",
    title: "Website services",
    description:
      "Full, end-to-end website builds, frontend and backend, designed to convert and built to last.",
    video: "/service_1.mp4",
  },
  {
    letter: "U",
    title: "UI/UX design",
    description:
      "Research-led interface design that makes complex products feel obvious to use.",
    video: "/service_2.mp4",
  },
  {
    letter: "B",
    title: "Branding",
    description:
      "Create a visual identity that communicates clarity, builds recognition, and leaves a lasting impression after the first interaction.",
    video: "/service_3.mp4",
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto bg-[#fffff0] px-15 md:px-0">
      <div className="max-w-2xl mx-auto py-12">
        <h3 className="text-3xl uppercase font-bold text-center py-3 mb-3 mt-5 text-[#07152f]">
          what we do
        </h3>
        <p className="text-center text-balance ">
          Adov is a full-service digital company. Whether you are launching a
          new business, upgrading an old website, or building a brand from
          scratch, we bring the skill, care, and consistency to get it done
          right. Here is what we offer:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden h-[420px] group"
          >
            <video
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* Fixed height so every card's overlay box matches, regardless
                of description length. White by default, brand blue on hover. */}
            <div
              className="absolute bottom-3 left-3 right-3 h-[150px] rounded-xl p-4 flex flex-col justify-center overflow-hidden
                bg-white text-slate-900
                transition-colors duration-300
                group-hover:bg-[#031F4F] group-hover:text-white
                group-hover:-translate-y-1"
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center text-xl font-semibold mb-2
                  bg-[#10A4EA]/10 text-[#10A4EA]
                  transition-colors duration-300
                  group-hover:bg-white/15 group-hover:text-white"
              >
                {service.letter}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-xs font-bold mt-1 text-slate-500 transition-colors duration-300 group-hover:text-white/70">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
