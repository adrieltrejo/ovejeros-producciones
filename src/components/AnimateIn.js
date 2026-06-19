"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VARIANTS = {
  "fade-up": { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  "fade": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  "scale": { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) {
  const v = VARIANTS[variant] || VARIANTS["fade-up"];
  const [forceVisible, setForceVisible] = useState(false);

  // Fallback de seguridad: Si el navegador del celular bloquea el IntersectionObserver,
  // forzamos a que aparezcan los elementos después de 800ms para evitar la pantalla negra.
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={forceVisible ? "visible" : undefined}
      whileInView={!forceVisible ? "visible" : undefined}
      viewport={{ once, amount: 0, margin: "200px" }}
      variants={v}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
