"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "AI-Based Projects", value: 8, suffix: "+" },
  { label: "Certificates", value: 13, suffix: "+" },
  { label: "CGPA", value: 9.58 }
];

export default function StatsCounters() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const started = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const elapsed = now - started;
      const next = Math.min(1, elapsed / duration);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const values = useMemo(
    () =>
      stats.map((item) => {
        const raw = item.value * progress;
        return item.label === "CGPA" ? raw.toFixed(2) : Math.floor(raw).toString();
      }),
    [progress]
  );

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 + index * 0.08, duration: 0.4 }}
          className="tilt-card rounded-2xl border border-cyan-300/30 bg-slate-900/65 px-4 py-3 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
        >
          <p className="text-2xl font-bold text-cyan-200">
            {values[index]}
            {stat.suffix ?? ""}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
