"use client";

import { motion } from "framer-motion";

/* Layered animated ocean with a drifting container ship and floating containers. */
export default function OceanScene() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
      {/* Drifting container ship */}
      <motion.div
        className="absolute bottom-[34%] left-0 z-10"
        initial={{ x: "-20%" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-0.6, 0.6, -0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ContainerShip />
        </motion.div>
      </motion.div>

      {/* Stacked wave layers */}
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

function ContainerShip() {
  return (
    <svg width="220" height="120" viewBox="0 0 220 120" fill="none" className="drop-shadow-2xl">
      {/* containers stack */}
      {[
        { x: 60, y: 30, c: "#ff7a59" },
        { x: 92, y: 30, c: "#22a7c9" },
        { x: 124, y: 30, c: "#f5b942" },
        { x: 156, y: 30, c: "#e3f7fc" },
        { x: 76, y: 12, c: "#0e8bb0" },
        { x: 108, y: 12, c: "#ff9777" },
        { x: 140, y: 12, c: "#57c6e0" },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width="28" height="18" rx="2" fill={b.c} stroke="#03111f" strokeWidth="1.2" />
      ))}
      {/* bridge */}
      <rect x="40" y="20" width="18" height="28" rx="2" fill="#0a2540" />
      <rect x="44" y="24" width="10" height="5" rx="1" fill="#57c6e0" />
      {/* hull */}
      <path d="M28 50 L196 50 L182 84 L46 84 Z" fill="#0a2540" />
      <rect x="28" y="50" width="168" height="9" fill="#0e3354" />
      <path d="M196 50 L182 84 L196 76 Z" fill="#06192c" />
      {/* waterline accent */}
      <rect x="40" y="80" width="146" height="4" rx="2" fill="#0e8bb0" opacity="0.8" />
    </svg>
  );
}
