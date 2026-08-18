// import Link from "next/link";

// const workItems = [
//   { title: "Anzza",
//     image: "/anzza_1.png",
//     url: "https://snackanzza.com/" },
//   {
//     title: "Pawp Water",
//     image: "/pawpwater_2.png",
//     url: "https://www.pawpwater.com/",
//   },
//   {
//     title: "Brala's Best",
//     image: "/bralla_3.png",
//     url: "https://www.bralasbest.com/",
//   },
// ];

// export default function GlimpseOfWork() {
//   return (
//     <div className="max-w-6xl mx-auto pt-16 pb-10 bg-[#fffff0]">
//       <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">
//         A glimpse of the work
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5">
//         <ImageCard
//           item={workItems[0]}
//           className="aspect-[3/2] md:aspect-[3/4.1] sm:row-span-2"
//         />
//         <ImageCard item={workItems[1]} className="aspect-[3/2] " />
//         <ImageCard item={workItems[2]} className="aspect-[3/2]" />
//       </div>
//     </div>
//   );
// }

// function ImageCard({item, className = "" }) {
//   return (
//     <Link
//       href={item.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`relative rounded-2xl overflow-hidden block group ${className}`}
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//       />
//       <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
//       <span className="absolute bottom-4 left-4 text-white font-semibold text-lg">
//         {item.title}
//       </span>
//     </Link>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const workItems = [
  {
    title: "Anzza",
    image: "/Nanzza.webp",
    url: "https://snackanzza.com/",
  },
  {
    title: "Pawp Water",
    image: "/pawpwater (2).webp",
    url: "https://www.pawpwater.com/",
  },
  {
    title: "West",
    image: "/west.webp",
    url: "#",
  },
  {
    title: "Brala's Best",
    image: "/Nbrala.webp",
    url: "https://www.bralasbest.com/",
  },
];

const AUTOPLAY_TIME = 2200;

export default function GlimpseOfWork() {
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  const [current, setCurrent] = useState(3);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Repeat the projects several times.
   *
   * This gives the carousel enough content
   * to continuously move without reaching
   * an empty area.
   */

  const infiniteItems = [
    ...workItems,
    ...workItems,
    ...workItems,
    ...workItems,
    ...workItems,
  ];

  /*
   * Find the position of the active card
   * and center it inside the viewport.
   */

  const updatePosition = () => {
    const stage = stageRef.current;
    const track = trackRef.current;

    if (!stage || !track) return;

    const slide = track.children[current];

    if (!slide) return;

    const stageWidth = stage.clientWidth;
    const slideWidth = slide.clientWidth;

    const slidePosition = slide.offsetLeft;

    const newOffset = slidePosition - (stageWidth - slideWidth) / 2;

    setOffset(newOffset);
  };

  /*
   * Recalculate whenever the active card changes.
   */

  useEffect(() => {
    updatePosition();
  }, [current]);

  /*
   * Recalculate when the screen size changes.
   */

  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [current]);

  /*
   * NEXT
   */

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  /*
   * PREVIOUS
   */

  const previousSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  /*
   * AUTOPLAY
   */

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_TIME);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
   * Keep the carousel inside the middle
   * copies of the projects.
   *
   * This happens AFTER the user sees
   * the next Anzza card.
   */

  useEffect(() => {
    if (current >= 6) {
      const timer = setTimeout(() => {
        setCurrent(3);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (current <= 2) {
      const timer = setTimeout(() => {
        setCurrent(5);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [current]);

  /*
   * Determine whether we're doing
   * the special last → first transition.
   */

  const isLoopTransition = current === 6;

  return (
    <section className="w-full overflow-hidden bg-[#fdfbe9] py-20">
      {/* =====================================
          HEADER
      ====================================== */}

      <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl uppercase font-bold text-[#0f172b] text-center py-3">
          A glimpse of our work.
        </h2>
      </div>

      {/* =====================================
          CAROUSEL
      ====================================== */}

      <div
        ref={stageRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* LEFT FADE */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#fffff0] to-transparent sm:w-24 md:w-32" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#fffff0] to-transparent sm:w-24 md:w-32" />

        {/* =====================================
            TRACK
        ====================================== */}

        <motion.div
          ref={trackRef}
          className="flex items-center"
          animate={{
            x: -offset,
          }}
          transition={{
            duration: isLoopTransition ? 0.28 : 0.55,

            ease: isLoopTransition ? [0.7, 0, 1, 1] : [0.65, 0, 0.35, 1],
          }}
        >
          {infiniteItems.map((item, index) => {
            const isActive = index === current;

            return (
              <motion.div
                key={`${item.title}-${index}`}
                animate={{
                  scale: isActive ? 1 : 0.88,

                  opacity: isActive ? 1 : 0.38,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="relative mr-5 shrink-0 sm:mr-6"
                style={{
                  width: "78vw",
                  maxWidth: "1080px",
                  minWidth: "280px",
                }}
              >
                {/* =================================
                    PROJECT
                ================================== */}

                <button
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      window.open(item.url, "_blank", "noopener,noreferrer");
                    } else {
                      setCurrent(3 + (index % workItems.length));
                    }
                  }}
                  className="group relative block h-[300px] w-full overflow-hidden rounded-[24px] bg-neutral-200 text-left outline-none sm:h-[380px] md:h-[470px] lg:h-[520px]"
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={`${item.title} website preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* GRADIENT */}

                  <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* PROJECT NAME */}

                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="rounded-full bg-white/90 px-5 py-3 backdrop-blur-md sm:px-6">
                      <p className="text-sm font-medium text-black sm:text-base">
                        {item.title}
                      </p>
                    </div>

                    {/* OPEN */}

                    {isActive && (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                        <span className="text-lg sm:text-xl">↗</span>
                      </div>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* =====================================
          CONTROLS
      ====================================== */}

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-4 px-6">
        {/* PREVIOUS */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          ←
        </button>

        {/* DOTS */}

        <div className="flex items-center gap-2">
          {workItems.map((item, index) => {
            const activeIndex = current % workItems.length;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setCurrent(3 + index);
                }}
                aria-label={`Go to ${item.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-black" : "w-2 bg-black/20"
                }`}
              />
            );
          })}
        </div>

        {/* NEXT */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          →
        </button>

        <button className="bg-[#031F4F] text-white text-sm font-medium px-6 py-3 rounded-full transition">
          See more
        </button>
      </div>
    </section>
  );
}
