"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const workItems = [
  {
    title: "Anzza",
    image: "/anzaa.webp",
    url: "https://snackanzza.com/",
  },
  {
    title: "Gow hasting",
    image: "/gow.webp",
    url: "https://gowhastings.com//",
  },
  {
    title: "gus",
    image: "/gus.webp",
    url: "https://guscooney.com/",
  },
  {
    title: "Brala's Best",
    image: "/brala_food.webp",
    url: "https://www.bralasbest.com/",
  },
];

const AUTOPLAY_TIME = 2200;

export default function GlimpseOfWork() {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Start on the FIRST copy of item 0 (Anzza) in the middle block
  const [current, setCurrent] = useState(workItems.length);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const infiniteItems = [
    ...workItems,
    ...workItems,
    ...workItems,
    ...workItems,
    ...workItems,
  ];

  const updatePosition = () => {
    const stage = stageRef.current;
    const track = trackRef.current;

    if (!stage || !track) return;

    const slide = track.children[current] as HTMLElement;

    if (!slide) return;

    const stageWidth = stage.clientWidth;
    const slideWidth = slide.clientWidth;

    const slidePosition = slide.offsetLeft;

    const newOffset = slidePosition - (stageWidth - slideWidth) / 2;

    setOffset(newOffset);
  };

  useEffect(() => {
    updatePosition();
  }, [current]);

  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const previousSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_TIME);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (current >= workItems.length * 2) {
      const timer = setTimeout(() => {
        setCurrent(workItems.length);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (current < workItems.length) {
      const timer = setTimeout(() => {
        setCurrent(workItems.length * 2 - 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [current]);

  // Any wraparound frame gets the fast "loop" easing, not just one exact value
  const isLoopTransition =
    current >= workItems.length * 2 || current < workItems.length;

  // Positive-safe modulo so the active dot never mismatches
  const activeIndex =
    ((current % workItems.length) + workItems.length) % workItems.length;

  return (
    <section className="w-full overflow-hidden bg-[#fffff0] py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl uppercase font-bold text-[#0f172b] text-center py-3">
          A glimpse of our work.
        </h2>
      </div>

      <div
        ref={stageRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#fffff0] to-transparent sm:w-24 md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#fffff0] to-transparent sm:w-24 md:w-32" />

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
                <button
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      window.open(item.url, "_blank", "noopener,noreferrer");
                    } else {
                      setCurrent(
                        workItems.length + (index % workItems.length)
                      );
                    }
                  }}
                  className="group relative block h-[300px] w-full overflow-hidden rounded-[24px] bg-neutral-200 text-left outline-none sm:h-[380px] md:h-[470px] lg:h-[520px]"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} website preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="rounded-full bg-white/90 px-5 py-3 backdrop-blur-md sm:px-6">
                      <p className="text-sm font-medium text-black sm:text-base">
                        {item.title}
                      </p>
                    </div>

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

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-4 px-6">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {workItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                setCurrent(workItems.length + index);
              }}
              aria-label={`Go to ${item.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-black" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          →
        </button>

        <Link
          href="/works"
          className="bg-[#031F4F] text-white text-sm font-medium px-6 py-3 rounded-full transition hover:bg-slate-800"
        >
          See more
        </Link>
      </div>
    </section>
  );
}