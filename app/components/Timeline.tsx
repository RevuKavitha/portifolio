"use client";

import { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import Image from "next/image";
import { academicMilestones as milestones } from "@/lib/academic-milestones";
import InfoCard from "./InfoCard";
import Station from "./Station";
import Track from "./Track";
import Train from "./Train";

function stationTop(point: number) {
  return 7 + point * 67;
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [activeStation, setActiveStation] = useState(0);
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);
  const [isStopped, setIsStopped] = useState(true);
  const [speed, setSpeed] = useState(0);
  const prevRef = useRef(0);

  const stationPoints = useMemo(
    () => milestones.map((_, i) => (milestones.length === 1 ? 0 : i / (milestones.length - 1))),
    []
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const keyboardProgress = useTransform(() => {
    return Math.min(1, Math.max(0, scrollYProgress.get() + keyboardOffset));
  });

  const smoothProgress = useSpring(keyboardProgress, {
    stiffness: 42,
    damping: 42,
    mass: 1.1
  });

  const trainY = useTransform(
    smoothProgress,
    stationPoints,
    stationPoints.map((point) => `${stationTop(point)}%`)
  );
  const trackGlow = useTransform(smoothProgress, [0, 1], [0.55, 1]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const nearest = stationPoints.reduce(
      (best, point, index) => {
        const distance = Math.abs(point - value);
        if (distance < best.distance) {
          return { index, distance };
        }
        return best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    setActiveStation(nearest.index);
    setIsStopped(nearest.distance < 0.045);

    const delta = Math.abs(value - prevRef.current);
    setSpeed(Math.min(1, delta * 10));
    prevRef.current = value;
  });

  const cardStationIndex = hoveredStation ?? activeStation;
  const activeMilestone = milestones[cardStationIndex];
  const activePoint = milestones.length === 1 ? 0 : cardStationIndex / (milestones.length - 1);
  const activeTop = `${Math.min(stationTop(activePoint), 61)}%`;
  const showBackdropYear = activePoint < 0.9;

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative h-[118vh] bg-gradient-to-b from-[#020611] via-[#040912] to-[#020611]"
      onKeyDown={(event) => {
        if (event.key === "ArrowDown") {
          setKeyboardOffset((prev) => Math.min(0.14, prev + 0.006));
        }
        if (event.key === "ArrowUp") {
          setKeyboardOffset((prev) => Math.max(-0.14, prev - 0.006));
        }
      }}
      tabIndex={0}
    >
      <div className="sticky top-0 h-screen overflow-visible px-4 sm:px-8 lg:px-16">
        <div className="relative mx-auto h-full w-full max-w-7xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.08),transparent_20%),radial-gradient(circle_at_84%_36%,rgba(34,211,238,0.08),transparent_20%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1.3px)] [background-size:120px_120px] opacity-25" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-[34%] w-[28%] bg-slate-900/80 [clip-path:polygon(0_100%,100%_55%,100%_100%)]" />
          <div className="pointer-events-none absolute bottom-0 left-[14%] h-[40%] w-[30%] bg-slate-900/70 [clip-path:polygon(0_100%,55%_45%,100%_100%)]" />
          <div className="pointer-events-none absolute bottom-0 right-[18%] h-[42%] w-[32%] bg-slate-900/65 [clip-path:polygon(0_100%,44%_38%,100%_100%)]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[32%] w-[26%] bg-slate-900/80 [clip-path:polygon(0_100%,100%_62%,100%_100%)]" />

          <div className="relative z-10 py-8 sm:py-10">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/certificates/acdemicjourney.png"
                    alt="Academic Journey"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="bg-gradient-to-r from-slate-100 via-cyan-100 to-emerald-100 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Academic Journey
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/95 sm:text-base">
              Scroll to move the train station by station through my academic timeline.
            </p>
          </div>

          <div className="relative z-10 h-[calc(100%-140px)]">
            <Track glow={trackGlow} />

            {showBackdropYear ? (
              <div className="pointer-events-none absolute bottom-[8%] left-1/2 -translate-x-[4%] text-[88px] font-black leading-none tracking-tight text-cyan-100/10 sm:text-[104px]">
                {activeMilestone.year}
              </div>
            ) : null}

            {milestones.map((milestone, index) => {
              const point = milestones.length === 1 ? 0 : index / (milestones.length - 1);
              const top = `${stationTop(point)}%`;
              const isActive = index === cardStationIndex;

              return (
                <Station
                  key={`${milestone.station}-${index}`}
                  label={milestone.station}
                  shortTitle={milestone.title}
                  top={top}
                  active={isActive}
                  reached={index <= activeStation}
                  onHoverStart={() => setHoveredStation(index)}
                  onHoverEnd={() => setHoveredStation(null)}
                />
              );
            })}

            <Train y={trainY} speed={speed} stopped={isStopped} />

            <AnimatePresence mode="wait">
              <InfoCard
                key={`${activeMilestone.station}-${cardStationIndex}`}
                year={activeMilestone.year}
                title={activeMilestone.title}
                subtitle={activeMilestone.subtitle}
                institution={activeMilestone.institution}
                details={activeMilestone.details}
                tags={activeMilestone.tags}
                top={activeTop}
              />
            </AnimatePresence>

            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 md:flex">
              {milestones.map((milestone, index) => {
                const isActive = index === cardStationIndex;
                return (
                  <motion.div
                    key={`dot-${milestone.station}`}
                    animate={{ scale: isActive ? 1.2 : 1, opacity: isActive ? 1 : 0.45 }}
                    className={`h-3.5 w-3.5 rounded-full ${
                      isActive
                        ? "bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]"
                        : "bg-slate-500/90"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
