"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiScatterChart } from "react-icons/bi";
import { FaDatabase, FaJava, FaNetworkWired, FaServer } from "react-icons/fa6";
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
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript
} from "react-icons/si";

type SkillItem = {
  label: string;
  Icon: IconType;
  tag?: string;
  usedIn?: string;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  priority: "high" | "normal" | "low";
  skills: SkillItem[];
};

const categories: SkillCategory[] = [
  {
    title: "Networking & Systems",
    subtitle: "Core focus area for system behavior, traffic flow, and reliability",
    priority: "high",
    skills: [
      { label: "HTTP/HTTPS", Icon: FaNetworkWired, usedIn: "Used in NetPulse" },
      { label: "REST APIs", Icon: FaNetworkWired, usedIn: "Used in NetScope" },
      { label: "Latency Analysis", Icon: FaNetworkWired, usedIn: "Used in NetPulse" },
      { label: "API Monitoring", Icon: FaNetworkWired, usedIn: "Used in NetScope" },
      { label: "Request Lifecycle", Icon: FaNetworkWired, usedIn: "Used in NetPulse" },
      { label: "Observability", Icon: FaNetworkWired, tag: "Logs + Metrics", usedIn: "Used in NetScope" }
    ]
  },
  {
    title: "Backend Engineering",
    subtitle: "Service development, middleware, and API architecture",
    priority: "high",
    skills: [
      { label: "Python", Icon: SiPython },
      { label: "FastAPI", Icon: SiFastapi, usedIn: "Used in NetPulse" },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Middleware Systems", Icon: FaServer, usedIn: "Used in NetPulse" }
    ]
  },
  {
    title: "Databases & Storage",
    subtitle: "Operational and distributed data modeling",
    priority: "normal",
    skills: [
      { label: "MySQL", Icon: SiMysql },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Cassandra", Icon: FaDatabase, tag: "Distributed DB" },
      { label: "Neo4j", Icon: FaDatabase, tag: "Graph / Network DB" }
    ]
  },
  {
    title: "Frontend & Visualization",
    subtitle: "Responsive interfaces and data-driven UI presentation",
    priority: "normal",
    skills: [
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "React", Icon: SiReact },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "Seaborn", Icon: BiScatterChart }
    ]
  },
  {
    title: "AI / ML",
    subtitle: "Applied ML capabilities supporting intelligent system features",
    priority: "low",
    skills: [
      { label: "TensorFlow", Icon: SiTensorflow },
      { label: "Scikit-learn", Icon: SiScikitlearn },
      { label: "Pandas", Icon: SiPandas },
      { label: "NumPy", Icon: SiNumpy }
    ]
  },
  {
    title: "Tools",
    subtitle: "Delivery, collaboration, and version control workflow",
    priority: "normal",
    skills: [
      { label: "Docker", Icon: SiDocker },
      { label: "Git", Icon: SiGit },
      { label: "GitHub", Icon: SiGithub },
      { label: "C", Icon: SiC },
      { label: "C++", Icon: SiCplusplus },
      { label: "Java", Icon: FaJava }
    ]
  }
];

function getCategoryClass(priority: SkillCategory["priority"]) {
  if (priority === "high") {
    return "border-cyan-300/35 bg-slate-900/72 shadow-[0_0_22px_rgba(34,211,238,0.14)]";
  }
  if (priority === "low") {
    return "border-slate-700/80 bg-slate-900/56 shadow-[0_14px_28px_rgba(2,6,23,0.28)]";
  }
  return "border-slate-700/80 bg-slate-900/66 shadow-[0_14px_28px_rgba(2,6,23,0.32)]";
}

function SkillChip({ skill }: { skill: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-cyan-300/25 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#111a36] px-3 py-2.5 transition hover:border-cyan-300/45 hover:shadow-[0_0_14px_rgba(34,211,238,0.16)]"
    >
      <div className="flex items-center gap-2">
        <skill.Icon className="h-3.5 w-3.5 text-cyan-300" />
        <p className="text-[13px] font-medium leading-snug text-slate-200">{skill.label}</p>
      </div>
      {skill.tag ? (
        <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-cyan-200/90">{skill.tag}</p>
      ) : null}
      {skill.usedIn ? (
        <p className="pointer-events-none absolute inset-x-2 bottom-1 translate-y-3 text-[10px] text-cyan-200/0 transition duration-200 group-hover:translate-y-0 group-hover:text-cyan-200/85">
          {skill.usedIn}
        </p>
      ) : null}
    </motion.div>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.25 }}
      className={`rounded-2xl border p-4 backdrop-blur-xl sm:p-5 ${getCategoryClass(category.priority)}`}
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-cyan-200 sm:text-lg">{category.title}</h3>
        <p className="mt-1 text-xs text-slate-400 sm:text-sm">{category.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillChip key={`${category.title}-${skill.label}`} skill={skill} />
        ))}
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const primary = categories.filter((item) => item.priority === "high");
  const secondary = categories.filter((item) => item.priority !== "high");

  return (
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/certificates/skills.jpg" alt="Skills" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Skills &amp; Expertise</h2>
        </div>
        <p className="mt-3 max-w-3xl text-slate-400">
          Focused on building network-aware backend systems and observability tools.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-700/80 bg-slate-900/65 p-5 shadow-[0_18px_48px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-6">
          <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {primary.map((category) => (
              <SkillCategoryCard key={category.title} category={category} />
            ))}
          </div>
          <div className="grid gap-5">
            {secondary.map((category) => (
              <SkillCategoryCard key={category.title} category={category} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
