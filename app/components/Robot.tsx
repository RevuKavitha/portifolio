"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";

type TrainProps = {
  y: MotionValue<string>;
  x: MotionValue<number>;
  active: boolean;
};

export default function Train({ y, x, active }: TrainProps) {
  return (
    <motion.div
      style={{ top: y, x }}
      animate={{
        scale: active ? 1.04 : 1,
        rotate: active ? [0, -1, 1, 0] : 0,
        y: active ? [0, -2, 0] : 0
      }}
      transition={{ duration: 0.55 }}
      className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative h-24 w-20">
        <div className="absolute left-1/2 top-1 h-2 w-1 -translate-x-1/2 rounded bg-slate-300" />
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-200" />

        <div className="absolute left-1 top-5 h-10 w-[72px] rounded-xl border border-slate-300/50 bg-gradient-to-b from-slate-100 to-slate-300 shadow-[0_6px_14px_rgba(0,0,0,0.45)]" />
        <div className="absolute left-3 top-7 h-5 w-10 rounded-md border border-slate-700/40 bg-slate-900" />
        <div className="absolute left-[10px] top-[30px] h-2 w-2 rounded-full bg-cyan-300/90" />
        <div className="absolute left-[19px] top-[30px] h-2 w-2 rounded-full bg-cyan-300/90" />
        <div className="absolute left-[28px] top-[30px] h-2 w-2 rounded-full bg-cyan-300/90" />

        <div className="absolute left-4 top-[46px] h-4 w-10 rounded-b-lg bg-yellow-400/90" />
        <div className="absolute left-0 top-[39px] h-5 w-3 rounded-l-full bg-slate-300" />
        <div className="absolute right-0 top-[39px] h-5 w-3 rounded-r-full bg-slate-300" />

        <div className="absolute bottom-1 left-2 h-3 w-3 rounded-full border border-slate-500 bg-slate-900" />
        <div className="absolute bottom-1 left-8 h-3 w-3 rounded-full border border-slate-500 bg-slate-900" />
        <div className="absolute bottom-1 left-14 h-3 w-3 rounded-full border border-slate-500 bg-slate-900" />
      </div>
    </motion.div>
  );
}
