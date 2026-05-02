"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiScatterChart } from "react-icons/bi";
import { FaJava, FaNetworkWired, FaServer } from "react-icons/fa6";
import {
  SiApachecassandra,
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
  SiNeo4J,
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
  color: string;
  tag?: string;
};

type SkillCategory = {
  title: string;
  subtitle: string;
  priority?: "high" | "normal" | "low";
  skills: SkillItem[];
};

const categories: SkillCategory[] = [
  {
    title: "Networking & Systems",
    subtitle: "Core focus area for system behavior, traffic flow, and reliability",
    priority: "high",
    skills: [
      { label: "HTTP/HTTPS", Icon: FaNetworkWired, color: "text-cyan-400" },
      { label: "REST APIs", Icon: FaNetworkWired, color: "text-cyan-300" },
      { label: "Latency Analysis", Icon: FaNetworkWired, color: "text-violet-400" },
      { label: "API Monitoring", Icon: FaNetworkWired, color: "text-fuchsia-400" },
      { label: "Request Lifecycle", Icon: FaNetworkWired, color: "text-orange-400" },
      { label: "Observability", Icon: FaNetworkWired, color: "text-cyan-300", tag: "Logs + Metrics" }
    ]
  },
  {
    title: "Backend Engineering",
    subtitle: "Service development, middleware, and API architecture",
    priority: "high",
    skills: [
      { label: "Python", Icon: SiPython, color: "text-cyan-400" },
      { label: "FastAPI", Icon: SiFastapi, color: "text-orange-400" },
      { label: "Node.js", Icon: SiNodedotjs, color: "text-cyan-300" },
      { label: "Middleware", Icon: FaServer, color: "text-violet-400" }
    ]
  },
  {
    title: "Databases & Storage",
    subtitle: "Operational and distributed data modeling",
    skills: [
      { label: "MySQL", Icon: SiMysql, color: "text-sky-300" },
      { label: "MongoDB", Icon: SiMongodb, color: "text-fuchsia-400" },
      { label: "Cassandra", Icon: SiApachecassandra, color: "text-cyan-300", tag: "Distributed DB" },
      { label: "Neo4j", Icon: SiNeo4J, color: "text-violet-400", tag: "Graph / Network DB" }
    ]
  },
  {
    title: "Frontend & Visualization",
    subtitle: "Responsive interfaces and data-driven UI presentation",
    skills: [
      { label: "Next.js", Icon: SiNextdotjs, color: "text-cyan-300" },
      { label: "React", Icon: SiReact, color: "text-violet-400" },
      { label: "TypeScript", Icon: SiTypescript, color: "text-cyan-400" },
      { label: "JavaScript", Icon: SiJavascript, color: "text-sky-400" },
      { label: "Seaborn", Icon: BiScatterChart, color: "text-violet-400" }
    ]
  },
  {
    title: "AI / ML",
    subtitle: "Applied ML capabilities supporting intelligent system features",
    priority: "low",
    skills: [
      { label: "TensorFlow", Icon: SiTensorflow, color: "text-fuchsia-400" },
      { label: "Scikit-learn", Icon: SiScikitlearn, color: "text-sky-400" },
      { label: "Pandas", Icon: SiPandas, color: "text-cyan-300" },
      { label: "NumPy", Icon: SiNumpy, color: "text-cyan-400" }
    ]
  },
  {
    title: "Tools",
    subtitle: "Delivery, collaboration, and version control workflow",
    skills: [
      { label: "Docker", Icon: SiDocker, color: "text-orange-400" },
      { label: "Git", Icon: SiGit, color: "text-cyan-300" },
      { label: "GitHub", Icon: SiGithub, color: "text-cyan-400" },
      { label: "C", Icon: SiC, color: "text-violet-400" },
      { label: "C++", Icon: SiCplusplus, color: "text-fuchsia-400" },
      { label: "Java", Icon: FaJava, color: "text-orange-400" }
    ]
  }
];

function categoryClass(priority: SkillCategory["priority"]) {
  if (priority === "high") {
    return "border-cyan-300/40 bg-slate-900/70 shadow-[0_0_20px_rgba(34,211,238,0.12)]";
  }
  if (priority === "low") {
    return "border-slate-700/80 bg-slate-900/55 shadow-[0_12px_26px_rgba(2,6,23,0.28)]";
  }
  return "border-slate-700/80 bg-slate-900/65 shadow-[0_14px_28px_rgba(2,6,23,0.32)]";
}

function SkillTile({ skill }: { skill: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="group relative flex h-[88px] flex-col items-center justify-start rounded-2xl border border-cyan-300/25 bg-gradient-to-b from-slate-900/95 via-slate-900/92 to-[#111a36] px-3 pt-2.5 text-center shadow-[0_10px_20px_rgba(2,6,23,0.3)] transition hover:border-cyan-300/45 hover:shadow-[0_0_16px_rgba(34,211,238,0.16)]"
    >
      <skill.Icon className={`h-5 w-5 ${skill.color}`} />
      <p className="mt-1 flex min-h-[32px] items-center justify-center text-[15px] font-medium leading-snug text-slate-200">
        {skill.label}
      </p>
      {skill.tag ? (
        <p className="absolute inset-x-2 bottom-1.5 text-[9px] leading-tight text-cyan-200/80">{skill.tag}</p>
      ) : null}
    </motion.div>
  );
}

function CategoryBlock({ category }: { category: SkillCategory }) {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1], y: [14, 0] }}
      viewport={{ once: true, amount: 0.25 }}
      className={`rounded-2xl border p-4 sm:p-5 ${categoryClass(category.priority)}`}
    >
      <h3 className="text-base font-semibold text-cyan-200 sm:text-lg">{category.title}</h3>
      <p className="mt-1 text-xs text-slate-400 sm:text-sm">{category.subtitle}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {category.skills.map((skill) => (
          <SkillTile key={`${category.title}-${skill.label}`} skill={skill} />
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
                <CategoryBlock key={category.title} category={category} />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {secondary.map((category) => (
                <CategoryBlock key={category.title} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
