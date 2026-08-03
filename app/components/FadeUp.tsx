"use client";

import { motion } from "motion/react";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeUp({
  children,
  delay = 0,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}