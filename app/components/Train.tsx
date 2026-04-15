"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";

type TrainProps = {
  y: MotionValue<string>;
  speed: number;
  stopped: boolean;
};

export default function Train({ y, speed, stopped }: TrainProps) {
  return (
    <motion.div
      style={{ top: y, x: "-50%", y: "-50%" }}
      animate={{ scale: stopped ? 1 : 1.003 }}
      transition={{ duration: 0.45 }}
      className="absolute left-1/2 z-30"
    >
      <motion.div
        animate={{ opacity: stopped ? 0.22 : Math.min(0.5, speed + 0.2) }}
        className="absolute left-1/2 top-1/2 h-28 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/25 blur-2xl"
      />

      <div className="relative h-44 w-16 overflow-hidden rounded-[20px] border border-amber-100/40 bg-gradient-to-b from-[#7a3a2f] via-[#592920] to-[#2e1715] shadow-[0_12px_24px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_35%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute left-1/2 top-1 h-6 w-5 -translate-x-1/2 rounded-t-md border border-slate-300/45 bg-gradient-to-b from-slate-600 to-slate-900" />
        <motion.div
          animate={{ opacity: stopped ? 0.2 : [0.2, 0.44, 0.2], y: stopped ? 0 : [-1, -7, -12] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
          className="absolute left-1/2 top-0 h-7 w-7 -translate-x-1/2 rounded-full bg-slate-200/50 blur-[2px]"
        />
        <motion.div
          animate={{ opacity: stopped ? 0.16 : [0.16, 0.36, 0.16], y: stopped ? 0 : [-1, -6, -11] }}
          transition={{ duration: 1.7, delay: 0.2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
          className="absolute left-[58%] top-1 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-100/35 blur-[2px]"
        />

        <div className="absolute left-1/2 top-10 h-14 w-10 -translate-x-1/2 rounded-lg border border-amber-100/30 bg-slate-900/85" />
        <div className="absolute left-1/2 top-[66px] h-[2px] w-12 -translate-x-1/2 bg-amber-200/45" />
        <div className="absolute left-1/2 top-[53px] h-[2px] w-12 -translate-x-1/2 bg-amber-200/30" />

        <div className="absolute left-1/2 bottom-[16px] h-9 w-9 -translate-x-1/2 rounded-full border-2 border-slate-200/70 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_0_10px_rgba(15,23,42,0.9)]">
          <div className="absolute inset-[5px] rounded-full border border-slate-300/45" />
          <div className="absolute inset-[10px] rounded-full border border-slate-400/45" />
          <div className="absolute left-1/2 top-[42%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 shadow-[0_0_10px_rgba(254,240,138,0.95)]" />
          <div className="absolute left-1/2 bottom-[3px] -translate-x-1/2 rounded-sm bg-slate-100/80 px-1 py-[1px] text-[7px] font-bold leading-none text-slate-900">
            4523
          </div>
        </div>
        <div className="absolute bottom-[10px] left-[10px] h-2 w-2 rounded-full bg-slate-500 shadow-[0_0_4px_rgba(0,0,0,0.65)]" />
        <div className="absolute bottom-[10px] right-[10px] h-2 w-2 rounded-full bg-slate-500 shadow-[0_0_4px_rgba(0,0,0,0.65)]" />
        <div className="absolute left-1/2 bottom-[8px] h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#391c18]" />
        <div className="absolute left-1/2 bottom-[2px] h-[3px] w-5 -translate-x-1/2 rounded-full bg-amber-300/95" />
        <div className="absolute left-1/2 bottom-[38px] h-2 w-11 -translate-x-1/2 rounded-full bg-[#2a1613]" />
        <div className="absolute left-1/2 bottom-[34px] h-[2px] w-12 -translate-x-1/2 bg-amber-200/35" />

        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`bolt-left-${i}`}
            className="absolute left-[-7px] h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-700"
            style={{ top: `${28 + i * 24}px` }}
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`bolt-right-${i}`}
            className="absolute right-[-7px] h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-700"
            style={{ top: `${28 + i * 24}px` }}
          />
        ))}

        <motion.div
          animate={{ opacity: stopped ? 0.3 : 0.75 }}
          className="absolute inset-0 rounded-[22px] border border-amber-100/35"
        />
      </div>
    </motion.div>
  );
}
