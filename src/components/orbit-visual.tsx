"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OrbitVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="orbit-visual">
      <div className="orbit-glow" />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        className="orbit-spin orbit-spin-one"
        transition={{ duration: 72, ease: "linear", repeat: Infinity }}
      >
        <div className="orbit orbit-one" />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        className="orbit-spin orbit-spin-two"
        transition={{ duration: 84, ease: "linear", repeat: Infinity }}
      >
        <div className="orbit orbit-two" />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        className="orbit-spin orbit-spin-three"
        transition={{ duration: 66, ease: "linear", repeat: Infinity }}
      >
        <div className="orbit orbit-three" />
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        className="orbit-dot-path"
        transition={{ duration: 72, ease: "linear", repeat: Infinity }}
      >
        <span className="orbit-point" />
      </motion.div>
      <span className="orbit-core" />
    </div>
  );
}
