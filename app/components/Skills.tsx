"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiScatterChart } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript
} from "react-icons/si";

type SkillGroup = {
  label: string;
  Icon: IconType;
};

const skills: SkillGroup[] = [
  { label: "Python", Icon: SiPython },
  { label: "MySQL", Icon: SiMysql },
  { label: "C", Icon: SiC },
  { label: "C++", Icon: SiCplusplus },
  { label: "Java", Icon: FaJava },
  { label: "Pandas", Icon: SiPandas },
  { label: "NumPy", Icon: SiNumpy },
  { label: "Scikit-learn", Icon: SiScikitlearn },
  { label: "Seaborn", Icon: BiScatterChart },
  { label: "TensorFlow", Icon: SiTensorflow },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "React", Icon: SiReact },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Docker", Icon: SiDocker },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub }
];

const iconPalette = [
  "text-cyan-400",
  "text-sky-400",
  "text-violet-400",
  "text-fuchsia-400",
  "text-orange-400",
  "text-cyan-300"
] as const;

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
        <div className="mt-10 rounded-3xl border border-slate-700/80 bg-slate-900/65 p-5 shadow-[0_18px_48px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-6">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              whileInView={{ opacity: [0, 1], y: [22, 0] }}
              whileHover={{ y: -3, scale: 1.04 }}
              viewport={{ once: true, amount: 0.35 }}
              className="group tilt-card flex flex-col items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#111a36] p-3 shadow-[0_12px_26px_rgba(2,6,23,0.38)] transition hover:border-cyan-300/40"
            >
              <div className="flex h-10 items-center">
                <skill.Icon className={`h-7 w-7 ${iconPalette[index % iconPalette.length]}`} />
              </div>
              <span className="mt-1 text-center text-[11px] font-medium text-slate-200/95">
                {skill.label}
              </span>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
