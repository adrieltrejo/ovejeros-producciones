"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Reusable scroll-triggered animation wrapper.
 * Uses motion.div directly to avoid re-creation on every render.
 */

const VARIANTS = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "scale": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.05,    // trigger when just 5% visible — fixes footer issue
    margin: "0px 0px -40px 0px", // start slightly before element enters viewport
  });

  const v = VARIANTS[variant] || VARIANTS["fade-up"];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
