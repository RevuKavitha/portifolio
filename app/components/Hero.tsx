"use client";

import Image from "next/image";

import { openResumePrintDialog, RESUME_FILENAME } from "@/lib/resume";
import StatsCounters from "./StatsCounters";

type Bubble = {
  id: string;
  size: number;
  axis: "x" | "y";
  lane: string;
  delay: number;
  duration: number;
  direction: 1 | -1;
};

const desktopBubbles: Bubble[] = [
  { id: "d1", axis: "x", lane: "14%", size: 8, delay: 0.1, duration: 4.5, direction: 1 },
  { id: "d2", axis: "x", lane: "22%", size: 10, delay: 0.55, duration: 3.8, direction: -1 },
  { id: "d3", axis: "x", lane: "30%", size: 7, delay: 0.2, duration: 4.9, direction: 1 },
  { id: "d4", axis: "x", lane: "38%", size: 9, delay: 0.7, duration: 3.4, direction: -1 },
  { id: "d5", axis: "y", lane: "16%", size: 8, delay: 0.25, duration: 4.2, direction: 1 },
  { id: "d6", axis: "y", lane: "31%", size: 10, delay: 0.45, duration: 3.6, direction: -1 },
  { id: "d7", axis: "y", lane: "68%", size: 7, delay: 0.8, duration: 4.7, direction: 1 },
  { id: "d8", axis: "y", lane: "82%", size: 9, delay: 0.35, duration: 3.9, direction: -1 }
];

const mobileBubbles: Bubble[] = [
  { id: "m1", axis: "x", lane: "18%", size: 6, delay: 0.1, duration: 4.2, direction: 1 },
  { id: "m2", axis: "x", lane: "30%", size: 7, delay: 0.5, duration: 3.7, direction: -1 },
  { id: "m3", axis: "y", lane: "20%", size: 6, delay: 0.35, duration: 4.3, direction: 1 },
  { id: "m4", axis: "y", lane: "78%", size: 7, delay: 0.8, duration: 3.8, direction: -1 }
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-aurora hero-aurora-cyan hero-aurora-animate-cyan" />
        <div className="hero-aurora hero-aurora-violet hero-aurora-animate-violet" />
        <div className="hero-aurora hero-aurora-orange hero-aurora-animate-orange" />
        <div className="hero-top-shimmer hero-top-shimmer-animate" />
      </div>

      <div className="pointer-events-none absolute inset-0 road-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 sm:hidden">
        {mobileBubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="absolute rounded-full bg-cyan-100/80 hero-bubble-lane"
            style={{
              left: bubble.axis === "x" ? "50%" : bubble.lane,
              top: bubble.axis === "x" ? bubble.lane : "50%",
              width: bubble.size,
              height: bubble.size,
              boxShadow: "0 0 14px rgba(148, 214, 255, 0.45), 0 0 22px rgba(59, 130, 246, 0.18)",
              animationDuration: `${bubble.duration}s`,
              animationDelay: `-${bubble.delay}s`,
              animationName: bubble.axis === "x" ? "hero-bubble-move-x" : "hero-bubble-move-y",
              animationDirection: bubble.direction === 1 ? "normal" : "reverse"
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {desktopBubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="absolute rounded-full bg-cyan-100/90 hero-bubble-lane"
            style={{
              left: bubble.axis === "x" ? "50%" : bubble.lane,
              top: bubble.axis === "x" ? bubble.lane : "50%",
              width: bubble.size,
              height: bubble.size,
              boxShadow: "0 0 22px rgba(148, 214, 255, 0.65), 0 0 42px rgba(59, 130, 246, 0.25)",
              animationDuration: `${bubble.duration}s`,
              animationDelay: `-${bubble.delay}s`,
              animationName: bubble.axis === "x" ? "hero-bubble-move-x" : "hero-bubble-move-y",
              animationDirection: bubble.direction === 1 ? "normal" : "reverse"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-5">
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
          </div>

          <div className="flex flex-wrap items-center gap-4">
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
          </div>

          <StatsCounters />
        </div>

        <div className="mx-auto w-full max-w-md">
          <div
            className="rounded-3xl border border-cyan-200/25 bg-slate-900/70 p-3 shadow-[0_30px_80px_rgba(14,116,144,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/header-photo.png"
                alt="Kavitha profile photo"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-[1.045]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_78%_80%,rgba(168,85,247,0.18),transparent_48%)]" />
            </div>
            <p className="px-2 pb-2 pt-4 text-center text-sm text-slate-300">
              AI Developer | Full-Stack Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
