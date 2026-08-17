'use client';

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageCarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const loopImages = [...images, ...images];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const updateDuration = () => {
      setDuration(window.innerWidth < 768 ? 15 : 25);
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl md:max-w-7xl md:mx-auto overflow-hidden mt-2"
    >
      <motion.div
        className="flex gap-[16px]"
        animate={isInView ? { x: ["-70%", "0%"] } : {}}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[380px] h-[200px] md:h-[280px] rounded-3xl overflow-hidden relative"
          >
            <Image
              src={img}
              alt={`Project image ${(index % images.length) + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;