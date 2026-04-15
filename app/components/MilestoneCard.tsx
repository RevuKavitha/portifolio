"use client";

import { motion } from "framer-motion";

type MilestoneCardProps = {
  title: string;
  subtitle: string;
  details: string;
  side: "left" | "right";
  active: boolean;
};

export default function MilestoneCard({
  title,
  subtitle,
  details,
  side,
  active
}: MilestoneCardProps) {
  const sideClass = side === "left" ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16";

  return (
    <motion.article
      initial={{ opacity: 0, x: side === "left" ? -40 : 40, y: 20 }}
      animate={{
        opacity: active ? 1 : 0.45,
        x: 0,
        y: active ? 0 : 8,
        scale: active ? 1 : 0.97
      }}
      transition={{ duration: 0.4 }}
      className={`w-full max-w-xl ${sideClass}`}
    >
      <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-xl backdrop-blur">
        <h3 className="text-lg font-bold text-cyan-200">{title}</h3>
        <p className="mt-1 text-sm font-medium text-orange-300">{subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{details}</p>
      </div>
    </motion.article>
  );
}
