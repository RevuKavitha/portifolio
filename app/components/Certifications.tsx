"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

type Category = "technical" | "professional" | "achievements";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: Category;
};

const certificates: Certificate[] = [
  {
    title: "Web Development",
    issuer: "Industry Program",
    date: "2023",
    image: "/certificates/img1.jpeg",
    category: "technical"
  },
  {
    title: "Backend Web Development",
    issuer: "Professional Academy",
    date: "2023",
    image: "/certificates/img2.jpeg",
    category: "technical"
  },
  {
    title: "Backend Web Development",
    issuer: "Learning Platform",
    date: "2023",
    image: "/certificates/img3.jpeg",
    category: "technical"
  },
  {
    title: "Frontend Web Development",
    issuer: "Technical Program",
    date: "2022",
    image: "/certificates/img4.jpeg",
    category: "technical"
  },
  {
    title: "Frontend Web Development",
    issuer: "Technical Program",
    date: "2022",
    image: "/certificates/img5.jpeg",
    category: "technical"
  },
  {
    title: "Diploma in Computer Applications",
    issuer: "Technical Program",
    date: "2020",
    image: "/certificates/img6.jpeg",
    category: "technical"
  },
  {
    title: "Hadoop",
    issuer: "Udemy",
    date: "2026",
    image: "/certificates/photo_udemy1.jpg",
    category: "professional"
  },
  {
    title: "SQL",
    issuer: "Udemy",
    date: "2026",
    image: "/certificates/udemy_certificate2.jpg",
    category: "professional"
  },
  {
    title: "LLMs & Agentic AI",
    issuer: "Udemy",
    date: "2026",
    image: "/certificates/udemy_certificate3.jpg",
    category: "professional"
  },
  {
    title: "Linux",
    issuer: "Udemy",
    date: "2026",
    image: "/certificates/udemy_certificate4.jpg",
    category: "professional"
  },
  {
    title: "Student Team Volunteer",
    issuer: "Puducherry Technological University",
    date: "2022",
    image: "/certificates/himg1.jpeg",
    category: "achievements"
  },
  {
    title: "Painting Competition",
    issuer: "Event",
    date: "2014",
    image: "/certificates/himg2.jpeg",
    category: "achievements"
  },
  {
    title: "Regional Level Science Exhibition",
    issuer: "Govt of Puducherry",
    date: "2017",
    image: "/certificates/himg3.jpeg",
    category: "achievements"
  }
];

const tabs: { id: Category; label: string; icon: string }[] = [
  { id: "technical", label: "Professional Certifications", icon: "</>" },
  { id: "professional", label: "Technical Certifications", icon: "◈" },
  { id: "achievements", label: "Extra Achievements", icon: "✦" }
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<Category>("technical");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () => certificates.filter((item) => item.category === activeTab),
    [activeTab]
  );

  return (
    <section id="certifications" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/certificates/certifications.jpeg"
                alt="Certifications"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Certifications</h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-400">
          A categorized view of technical learning, professional credentials, and extra achievements.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-cyan-300/70 bg-cyan-400/15 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.25)]"
                    : "border-slate-600/70 bg-slate-900/70 text-slate-300 hover:border-cyan-300/50"
                }`}
              >
                <span className="mr-2 text-xs">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => (
              <motion.article
                key={`${cert.title}-${cert.image}`}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="group relative"
              >
                <TiltCard className="group">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="rounded-[18px] bg-gradient-to-br from-cyan-400/45 via-blue-400/35 to-purple-500/45 p-[1px]"
                  >
                    <div className="rounded-[17px] border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      </div>

                      <h3 className="mt-4 text-base font-semibold text-cyan-200">{cert.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">Issuer: {cert.issuer}</p>
                      <p className="mt-1 text-sm text-violet-300">Date: {cert.date}</p>

                      <motion.button
                        onClick={() => setSelected(cert)}
                        initial={{ opacity: 0.82 }}
                        whileHover={{ opacity: 1 }}
                        className="mt-4 w-full rounded-xl border border-cyan-300/55 bg-cyan-400/15 px-3 py-2 text-sm font-semibold text-cyan-100 transition group-hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]"
                      >
                        View Certificate
                      </motion.button>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl rounded-2xl border border-cyan-300/45 bg-slate-950/95 p-4 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200">{selected.title}</h3>
                  <p className="text-sm text-slate-300">{selected.issuer} • {selected.date}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-300 hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Close
                </button>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-700">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain bg-slate-900"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
