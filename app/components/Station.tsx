"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type StationProps = {
  label: string;
  shortTitle: string;
  top: string;
  active: boolean;
  reached: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export default function Station({
  label,
  shortTitle,
  top,
  active,
  reached,
  onHoverStart,
  onHoverEnd
}: StationProps) {
  return (
    <div className="absolute left-1/2 z-20 -translate-x-1/2" style={{ top }}>
      <motion.div onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className="relative">
        <div className="absolute -left-[212px] top-0 hidden md:block">
          <motion.div
            animate={{ opacity: active ? 1 : reached ? 0.82 : 0.52, scale: active ? 1.05 : 1 }}
            className="relative h-[76px] w-[76px]"
            title={label}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-[-3px] rounded-full border border-dashed border-cyan-200/35"
            />
            <motion.div
              animate={{ opacity: active ? [0.25, 0.55, 0.25] : 0.2, scale: active ? [1, 1.08, 1] : 1 }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-[-5px] rounded-full bg-cyan-300/10 blur-[2px]"
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-cyan-200/45 bg-slate-900/90 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
              <Image
                src="/station-house.png"
                alt={`${shortTitle} station house`}
                fill
                className="object-contain p-1 brightness-[1.18] contrast-[1.06] saturate-[1.02] drop-shadow-[0_8px_12px_rgba(0,0,0,0.36)]"
              />
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-screen" />
            </div>
            <div className="absolute left-1/2 bottom-[-3px] h-[2px] w-10 -translate-x-1/2 rounded-full bg-emerald-300/60 blur-[1px]" />
          </motion.div>
          <div className="ml-[38px] mt-1.5 h-4 w-[1px] bg-cyan-100/40" />
          <div className="mt-2 flex justify-center">
            <div className="min-w-[64px] rounded-md border border-cyan-300/40 bg-slate-900/95 px-2 py-1 text-center text-[10px] font-semibold tracking-[0.08em] text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.15)]">
              {shortTitle}
            </div>
          </div>
        </div>

        {active ? (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-[34px] top-[82px] hidden items-center gap-2 rounded-lg border border-emerald-300/55 bg-slate-950/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200 shadow-[0_0_14px_rgba(52,211,153,0.24)] md:flex"
          >
            {label}
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
