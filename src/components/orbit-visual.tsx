"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OrbitVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="orbit-visual">
      <div className="orbit-glow" />
      <div className="orbit orbit-one" />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        className="orbit orbit-two"
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      />
      <div className="orbit orbit-three" />
      <motion.span
        animate={reduceMotion ? undefined : { rotate: -360 }}
        className="orbit-point"
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <span className="orbit-core" />
    </div>
  );
}
