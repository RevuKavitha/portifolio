"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";

type TrackProps = {
  glow: MotionValue<number>;
};

export default function Track({ glow }: TrackProps) {
  return (
    <>
      <motion.div
        style={{ opacity: glow }}
        className="absolute left-1/2 top-[4%] h-[84%] w-24 -translate-x-1/2 rounded-2xl bg-gradient-to-b from-slate-800/40 via-slate-900/65 to-slate-950/90"
      />

      <motion.div
        style={{ opacity: glow }}
        className="absolute left-1/2 top-[4%] h-[84%] w-[6px] -ml-[12px] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-[0_0_12px_rgba(148,163,184,0.45)]"
      />
      <motion.div
        style={{ opacity: glow }}
        className="absolute left-1/2 top-[4%] h-[84%] w-[6px] ml-[12px] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-[0_0_12px_rgba(148,163,184,0.45)]"
      />

      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`track-sleeper-${i}`}
          style={{ opacity: glow, top: `${4 + i * 1.68}%` }}
          className="absolute left-1/2 h-[6px] w-[56px] -translate-x-1/2 rounded-[2px] bg-gradient-to-b from-amber-900/80 to-amber-950"
        />
      ))}

      <motion.div
        style={{ opacity: glow }}
        className="absolute left-1/2 top-[4%] h-[84%] w-24 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.11),transparent)]"
      />
    </>
  );
}
