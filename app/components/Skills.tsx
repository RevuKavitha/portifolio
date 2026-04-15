"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SkillGroup = {
  category: string;
  items: { label: string; value: number }[];
};

const groups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { label: "Python", value: 90 },
      { label: "SQL", value: 84 },
      { label: "C", value: 75 },
      { label: "C++", value: 78 },
      { label: "Java", value: 80 }
    ]
  },
  {
    category: "Libraries & Tools",
    items: [
      { label: "Pandas", value: 90 },
      { label: "NumPy", value: 88 },
      { label: "Scikit-learn", value: 84 },
      { label: "Matplotlib", value: 82 },
      { label: "Seaborn", value: 80 }
    ]
  },
  {
    category: "Core Concepts",
    items: [
      { label: "Machine Learning", value: 88 },
      { label: "Data Science", value: 86 },
      { label: "Deep Learning", value: 80 },
      { label: "Data Visualization", value: 85 },
      { label: "Data Structures & Algorithms", value: 84 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/certificates/skills.jpg" alt="Skills" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Skills</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <motion.div
              key={group.category}
              whileInView={{ opacity: [0, 1], y: [22, 0] }}
              viewport={{ once: true, amount: 0.35 }}
              className="tilt-card rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex justify-between text-sm text-slate-300">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.8 }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-orange-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
