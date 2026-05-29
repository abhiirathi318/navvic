"use client";

import { motion } from "framer-motion";

/* Layered animated ocean wave bands. */
export default function OceanScene() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
      <Wave className="text-ocean-300/40" duration={11} delay={0} bottom="0" />
      <Wave className="text-ocean-400/50" duration={9} delay={-2} bottom="-6px" />
      <Wave className="text-ocean-500/70" duration={7} delay={-4} bottom="-14px" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ocean-600/80 to-transparent" />
    </div>
  );
}

function Wave({
  className,
  duration,
  delay,
  bottom,
}: {
  className: string;
  duration: number;
  delay: number;
  bottom: string;
}) {
  return (
    <motion.div
      className={`absolute inset-x-0 ${className}`}
      style={{ bottom }}
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 1440 120" className="h-28 w-[200%]" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" />
        <path
          d="M1440,64 C1680,120 1920,0 2160,48 C2400,96 2640,32 2880,64 L2880,120 L1440,120 Z"
          transform="translate(0,0)"
        />
      </svg>
    </motion.div>
  );
}
