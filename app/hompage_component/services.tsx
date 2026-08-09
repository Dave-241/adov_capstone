"use client";

// import { motion } from "framer-motion";

const services = [
  {
    letter: "W",
    title: "Website services",
    description:
      "Full, end-to-end website builds, frontend and backend, designed to convert and built to last.",
    video: "/service_1.mp4",
    active: true,
  },
  {
    letter: "U",
    title: "UI/UX design",
    description:
      "Research-led interface design that makes complex products feel obvious to use.",
    video: "/service_2.mp4",
    active: false,
  },
  {
    letter: "B",
    title: "Branding",
    description:
      "Create a visual identity that communicates clarity, builds recognition, and leaves a lasting impression after the first interaction.",
    video: "/service_3.mp4",
    active: false,
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto pt-16 bg-[#fffff0]">
      <h2 className="text-3xl font-semibold text-slate-900 text-center mx-auto md:text-left">
        Three services. One studio.
      </h2>

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

            {/* <div
              className={`absolute bottom-3 left-3 right-3 rounded-xl p-4 transition-transform duration-300 group-hover:-translate-y-1 ${
                service.active
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center text-1xl font-semibold mb-2 ${
                  service.active
                    ? "bg-white/10 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              > */}
            <div
              className={`absolute bottom-3 left-3 right-3 rounded-xl p-4 min-h-[130px] flex flex-col justify-center transition-transform duration-300 group-hover:-translate-y-1 ${
                service.active
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xl font-semibold mb-2 ${
                  service.active
                    ? "bg-white/10 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {service.letter}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p
                className={`text-xs font-bold mt-1 ${
                  service.active ? "text-white/70" : "text-slate-500"
                }`}
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
