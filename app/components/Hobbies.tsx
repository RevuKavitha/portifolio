"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hobbies = [
  {
    title: "Drawing & Sketching",
    description:
      "I enjoy drawing creative concepts and visual storytelling as a way to improve focus and imagination."
  },
  {
    title: "Shuttle Badminton",
    description:
      "Playing shuttle helps me stay active, sharpen reflexes, and maintain discipline through regular practice."
  },
  {
    title: "Reading News",
    description:
      "I follow current affairs and general news to stay aware of what is happening in the world outside of work."
  },
  {
    title: "Nature Walks",
    description:
      "I enjoy quiet outdoor walks to refresh my mind, improve consistency, and return to work with better clarity."
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/certificates/hobbies.jpeg" alt="Hobbies" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Hobbies</h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-400">
          Interests that keep me creative, consistent, and energized beyond academics and project work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <motion.article
              key={hobby.title}
              whileHover={{ y: -6, scale: 1.01 }}
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="tilt-card rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-cyan-200">{hobby.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{hobby.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
