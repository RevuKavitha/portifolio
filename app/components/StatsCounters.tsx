"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Stat = {
  label: string;
  shortLabel: string;
  value: number;
  suffix?: string;
  targetId: string;
};

const stats: Stat[] = [
  { label: "Projects (AI + Systems)", shortLabel: "Projects", value: 10, suffix: "+", targetId: "projects" },
  { label: "Networking & Backend Focus", shortLabel: "Skills", value: 1, targetId: "skills" },
  { label: "CGPA", shortLabel: "Journey", value: 9.58, targetId: "journey" }
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
        if (item.label === "CGPA") return raw.toFixed(2);
        if (item.label === "Networking & Backend Focus") return "Core";
        return Math.floor(raw).toString();
      }),
    [progress]
  );

  const scrollToSection = (targetId: string) => {
    if (typeof document === "undefined") return;
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 + index * 0.08, duration: 0.4 }}
          className="tilt-card"
        >
          <button
            type="button"
            onClick={() => scrollToSection(stat.targetId)}
            className="w-full rounded-2xl border border-cyan-300/30 bg-slate-900/65 px-4 py-3 text-left shadow-[0_0_18px_rgba(34,211,238,0.12)] transition hover:-translate-y-0.5 hover:border-cyan-300/55 hover:shadow-[0_0_22px_rgba(34,211,238,0.2)]"
            aria-label={`Go to ${stat.label} section`}
          >
            <p className="text-2xl font-bold text-cyan-200">
              {values[index]}
              {stat.suffix ?? ""}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{stat.shortLabel}</p>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
