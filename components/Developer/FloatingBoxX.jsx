"use client";

import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

export default function FloatingBoxX({ position }) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ x }}
      className={`absolute flex h-32 w-32 md:h-56 md:w-56 ${position} z-20 rounded scroll-smooth transition-all duration-700`}
    ></motion.div>
  );
}
