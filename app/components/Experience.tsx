"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/certificates/academy.jpeg" alt="Experience" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Experience</h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-400">
          Professional experience focused on building and improving web applications.
        </p>

        <motion.article
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="tilt-card mt-10 rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-6 shadow-[0_0_26px_rgba(34,211,238,0.12)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-cyan-200">Web Developer Intern</h3>
              <p className="mt-1 text-sm font-medium text-slate-300">HCL Technologies</p>
            </div>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-cyan-200">
              6 Weeks
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Worked on frontend and backend web development tasks, collaborated with team members,
            and contributed to building responsive, user-focused features aligned with project
            requirements.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "JavaScript",
              "React"
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
