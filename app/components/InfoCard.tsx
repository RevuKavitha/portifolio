"use client";

import { motion } from "framer-motion";

type InfoCardProps = {
  year: string;
  title: string;
  subtitle: string;
  institution?: string;
  details: string;
  tags: string[];
  top: string;
};

export default function InfoCard({
  year,
  title,
  subtitle,
  institution,
  details,
  tags,
  top
}: InfoCardProps) {
  return (
    <>
      <motion.article
        initial={{ opacity: 0, x: 24, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 18, y: -4 }}
        transition={{ duration: 0.32 }}
        className="absolute left-1/2 z-30 hidden w-[410px] md:block"
        style={{ top, marginLeft: "132px" }}
      >
        <div className="rounded-3xl border border-cyan-200/30 bg-[linear-gradient(160deg,rgba(8,12,20,0.97),rgba(10,20,34,0.96))] p-6 shadow-[0_14px_34px_rgba(2,6,23,0.5),0_0_22px_rgba(34,211,238,0.12)] backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-emerald-200/45 bg-emerald-300 px-3 py-2 text-lg font-bold tracking-wide text-slate-900 shadow-[0_8px_18px_rgba(16,185,129,0.28)]">
              {year}
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-slate-50">{title}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-cyan-100/85">{subtitle}</p>
              {institution ? (
                <p className="mt-2 text-sm font-medium text-slate-200/90">{institution}</p>
              ) : null}
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{details}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-200/35 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-4 left-1/2 z-30 w-[min(92vw,360px)] -translate-x-1/2 md:hidden"
      >
        <div className="rounded-2xl border border-cyan-200/30 bg-[linear-gradient(160deg,rgba(8,12,20,0.97),rgba(10,20,34,0.96))] p-4 shadow-[0_0_16px_rgba(34,211,238,0.1)] backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">{year}</p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{title}</h3>
          <p className="text-sm uppercase tracking-[0.06em] text-cyan-100/70">{subtitle}</p>
          {institution ? (
            <p className="mt-1 text-sm font-medium text-slate-200/90">{institution}</p>
          ) : null}
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{details}</p>
        </div>
      </motion.article>
    </>
  );
}
