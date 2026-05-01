"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import { BiScatterChart } from "react-icons/bi";
import { FaDatabase, FaJava, FaNetworkWired, FaServer, FaToolbox } from "react-icons/fa6";
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
    return "border-cyan-300/45 bg-gradient-to-br from-slate-900/95 via-slate-900/88 to-[#0f1b34] shadow-[0_0_30px_rgba(34,211,238,0.18)]";
  }
  if (priority === "low") {
    return "border-slate-700/80 bg-slate-900/50 shadow-[0_16px_32px_rgba(2,6,23,0.3)]";
  }
  return "border-slate-700/80 bg-slate-900/65 shadow-[0_16px_32px_rgba(2,6,23,0.35)]";
}

function SkillChip({ skill }: { skill: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      className="group relative overflow-hidden rounded-xl border border-slate-600/80 bg-slate-950/80 px-3 py-2 transition hover:border-cyan-300/60 hover:shadow-[0_0_14px_rgba(34,211,238,0.18)]"
    >
      <div className="flex items-center gap-2">
        <skill.Icon className="h-4 w-4 text-cyan-300" />
        <p className="text-sm font-medium text-slate-200">{skill.label}</p>
      </div>
      {skill.tag ? (
        <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-cyan-200/90">{skill.tag}</p>
      ) : null}
      {skill.usedIn ? (
        <p className="pointer-events-none absolute inset-x-2 bottom-1 translate-y-3 text-[10px] text-emerald-300/0 transition duration-200 group-hover:translate-y-0 group-hover:text-emerald-300/90">
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
      className={`rounded-2xl border p-5 backdrop-blur-xl sm:p-6 ${getCategoryClass(category.priority)}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-cyan-200 sm:text-xl">{category.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{category.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {primary.map((category) => (
              <SkillCategoryCard key={category.title} category={category} />
            ))}
          </div>
          <div className="grid gap-6">
            {secondary.map((category) => (
              <SkillCategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
