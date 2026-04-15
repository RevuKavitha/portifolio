"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { openResumePrintDialog, RESUME_FILENAME } from "@/lib/resume";
import StatsCounters from "./StatsCounters";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-20">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 road-grid opacity-70"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="text-5xl font-black leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-cyan-300">Kavitha</span>
            </h1>
            <h2 className="text-2xl font-semibold text-slate-300 sm:text-3xl">AI Developer</h2>
            <div className="max-w-3xl">
              <p className="text-base text-slate-400 sm:text-lg">
                Aspiring Data Science and AI Engineer with strong foundations in Python,
                Machine Learning, and Statistics. Passionate about building intelligent,
                data-driven solutions for real-world problems and contributing to advanced AI
                applications through hands-on development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#journey"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
            >
              View Journey
            </a>
            <button
              type="button"
              onClick={() => openResumePrintDialog()}
              className="relative z-20 inline-flex cursor-pointer items-center justify-center rounded-full border border-cyan-300/50 bg-slate-900/40 px-6 py-3 font-semibold text-slate-100 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:scale-105 hover:border-cyan-300 hover:bg-slate-900/70 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              aria-label={`Print this page; in the print dialog choose Save as PDF to save as ${RESUME_FILENAME}`}
            >
              Download Resume
            </button>
          </motion.div>

          <StatsCounters />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-cyan-200/20 bg-slate-900/70 p-3 shadow-glow backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/header-photo.png"
                alt="Kavitha profile photo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p className="px-2 pb-2 pt-4 text-center text-sm text-slate-300">
              AI Developer | Full-Stack Engineer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
