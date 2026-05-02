"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  usage: string[];
  verify: string[];
  featured?: boolean;
  concepts?: string;
};

const projects: Project[] = [
  {
    title: "Network Monitoring & API Performance Analyzer",
    description:
      "Designed a network monitoring system to analyze API and website performance by tracking response latency, status codes, and uptime in real time. Implemented periodic health checks and visualized system behavior through an interactive dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "HTTP",
      "Latency",
      "API Monitoring",
      "System Design"
    ],
    github: "https://github.com/RevuKavitha/Network-Monitoring-API-Performance-Analyzer",
    demo: "https://network-monitoring-api-performance.vercel.app/",
    usage: [
      "Add one or more API or website URLs for monitoring.",
      "Run periodic checks to track uptime and latency.",
      "Review performance trends and health signals in dashboard."
    ],
    verify: [
      "Status code and uptime values update for each endpoint.",
      "Latency trends change as new checks complete.",
      "Failed endpoints are highlighted with clear error state."
    ],
    featured: true,
    concepts:
      "Concepts: HTTP Lifecycle, Latency Analysis, Client-Server Architecture, API Monitoring"
  },
  {
    title: "Live HTTP Traffic Monitoring System",
    description:
      "Built a real-time HTTP traffic monitoring system to capture and analyze request flows, compute latency, and track system performance. Implemented middleware-based logging and live dashboard visualization for request insights.",
    stack: [
      "FastAPI",
      "Next.js",
      "WebSockets",
      "SQLite",
      "HTTP",
      "Latency",
      "API Monitoring",
      "System Design"
    ],
    github: "https://github.com/RevuKavitha/Live-HTTP-Traffic-Monitoring-System",
    demo: "https://live-http-traffic-monitoring-system.vercel.app/",
    usage: [
      "Start traffic stream or simulation from the dashboard.",
      "Track live request volume and latency metrics.",
      "Filter request logs to inspect endpoint-level behavior."
    ],
    verify: [
      "Live metric counters update in real time.",
      "WebSocket stream reflects incoming request flow.",
      "Request logs persist and reload from SQLite."
    ],
    featured: true,
    concepts:
      "Concepts: HTTP Lifecycle, Latency Analysis, Client-Server Architecture, API Monitoring"
  },
  {
    title: "Intelligent Resume Screening Platform",
    description:
      "Developed a resume intelligence system that extracts candidate signals, maps role relevance, and generates actionable screening insights. Focused on reliable text processing and structured evaluation for faster hiring decisions.",
    stack: ["Python", "NLP", "Streamlit", "Text Extraction", "Skill Matching", "ATS Insights"],
    github: "https://github.com/RevuKavitha/resume_analyser",
    demo: "https://ai-chatbot-ai3f.vercel.app/",
    usage: [
      "Upload resume in supported format.",
      "Run NLP-based skill and role-fit analysis.",
      "Review ATS-oriented recommendations."
    ],
    verify: [
      "Resume parsing extracts content accurately.",
      "Role-fit score appears with matched skills.",
      "Recommendations align with target role."
    ]
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Built a retrieval-powered knowledge assistant to answer user questions with grounded evidence from documents. Combined semantic retrieval and language generation for reliable, context-aware responses.",
    stack: ["Python", "RAG", "Embeddings", "Vector DB", "Semantic Search", "LangChain"],
    github: "https://github.com/RevuKavitha/RAG",
    demo: "https://rag-seven-nu.vercel.app/",
    usage: [
      "Upload documents and ask contextual questions.",
      "System retrieves relevant chunks from vector store.",
      "LLM answers using retrieved evidence."
    ],
    verify: [
      "Context retrieval maps to relevant source chunks.",
      "Responses remain grounded to uploaded content.",
      "Answer quality improves over base prompting."
    ]
  },
  {
    title: "Multi-Model AI Orchestrator",
    description:
      "Designed a model orchestration workflow to route prompts across multiple LLM providers and compare outputs. Focused on response quality, latency, and fallback reliability for production-style AI workflows.",
    stack: ["Python", "FastAPI", "LLMs", "Model Routing", "Prompt Engineering"],
    github: "https://github.com/RevuKavitha/multi_model_ai",
    demo: "https://muti-model-ai-fyjo.vercel.app/",
    usage: [
      "Enter a task prompt from the interface.",
      "Route requests to suitable model providers.",
      "Compare outputs for quality and response speed."
    ],
    verify: [
      "Routing logic dispatches to multiple providers.",
      "Fallback works when one provider fails.",
      "Comparative outputs include timing signals."
    ]
  },
  {
    title: "Data Analysis Toolkit",
    description:
      "Created a data exploration and predictive analysis toolkit to transform raw datasets into usable business insights. Emphasized clean preprocessing, feature relevance, and interpretable output visualizations.",
    stack: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    github: "https://github.com/RevuKavitha/libraries_project",
    demo: "https://libraries-project.vercel.app/",
    usage: [
      "Load datasets for analysis workflow.",
      "Run preprocessing and feature diagnostics.",
      "Generate visual summaries and predictions."
    ],
    verify: [
      "Dataset ingestion works without schema errors.",
      "Visual outputs align with selected features.",
      "Model summary metrics update correctly."
    ]
  },
  {
    title: "Deep Learning Model Lab",
    description:
      "Built a deep learning inference lab for image-driven understanding workflows. Focused on stable model execution, response consistency, and practical usage flow for multimodal experimentation.",
    stack: ["Python", "TensorFlow", "Neural Networks", "Inference", "Model Evaluation"],
    github: "https://github.com/RevuKavitha/ai_dl",
    demo: "https://ai-dl.vercel.app/",
    usage: [
      "Select or upload an image for inference.",
      "Run deep learning prediction pipeline.",
      "Inspect output response and confidence."
    ],
    verify: [
      "Image input pipeline processes valid files.",
      "Inference output appears per uploaded image.",
      "Prediction values vary with different inputs."
    ]
  },
  {
    title: "ML Stock Forecasting Engine",
    description:
      "Implemented a forecasting engine to model stock movement trends from historical market signals. Focused on time-series feature pipelines and robust visualization for interpretable prediction behavior.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Time Series", "Forecasting"],
    github: "https://github.com/RevuKavitha/ai_ml_stock",
    demo: "https://ai-ml-stock.vercel.app/",
    usage: [
      "Choose symbol and historical time window.",
      "Generate trend and forecast analysis.",
      "Inspect charted output with projected values."
    ],
    verify: [
      "Historical data retrieval succeeds.",
      "Forecast plots render with new predictions.",
      "Indicators update when input configuration changes."
    ]
  },
  {
    title: "MCP AI Assistant",
    description:
      "Designed an assistant workflow that orchestrates tool calls to complete multi-step tasks with contextual reasoning. Focused on reliable API integration, execution control, and traceable automation outputs.",
    stack: ["Python", "MCP", "AI Agents", "Tool Calling", "API Integration", "Automation"],
    github: "https://github.com/RevuKavitha/mcp_ai_assistant",
    demo: "https://mcp-ai-assistant-amber.vercel.app/",
    usage: [
      "Submit a workflow request from the assistant interface.",
      "Assistant selects and executes tools through MCP flow.",
      "Review generated output and tool execution details."
    ],
    verify: [
      "Tool calls are triggered with valid parameters.",
      "Workflow completes with contextual responses.",
      "Execution trace reflects each step correctly."
    ]
  },
  {
    title: "Smart Notes Knowledge Workspace",
    description:
      "Built a knowledge workspace for organizing notes with searchable storage and structured retrieval. Emphasized reliable persistence, fast lookup, and clean user flow for daily information management.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Search", "CRUD APIs"],
    github: "https://github.com/RevuKavitha/smart-notes-app",
    demo: "https://mongodb-nine-peach.vercel.app/",
    usage: [
      "Create and organize notes by topic.",
      "Search and retrieve notes quickly from the workspace.",
      "Update or remove entries with persistent storage."
    ],
    verify: [
      "Create/edit/delete operations reflect in UI instantly.",
      "Saved notes remain after refresh and relogin.",
      "Search returns relevant notes for keyword queries."
    ]
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="[perspective:1200px]"
    >
      <TiltCard className="group">
        <div
          className={`relative w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] ${
            project.featured ? "h-[420px]" : "h-[390px]"
          }`}
        >
          <article
            className={`absolute inset-0 flex flex-col rounded-2xl border bg-slate-900/70 p-4 shadow-lg [backface-visibility:hidden] ${
              project.featured
                ? "border-cyan-300/60 shadow-[0_0_26px_rgba(34,211,238,0.22)]"
                : "border-slate-700/80"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-cyan-200">{project.title}</h3>
              {project.featured ? (
                <span className="rounded-full border border-cyan-200/70 bg-cyan-300/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                  Featured
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
            {project.concepts ? (
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{project.concepts}</p>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 8).map((item) => (
                <span
                  key={`${project.title}-${item}`}
                  className="rounded-full border border-slate-600 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-end gap-8 pt-6 text-sm">
              <a
                className="magnetic-link text-cyan-300 hover:text-cyan-200"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  className="magnetic-link text-orange-300 hover:text-orange-200"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              ) : (
                <span className="cursor-not-allowed text-slate-500">Preview Soon</span>
              )}
            </div>
          </article>

          <article className="absolute inset-0 overflow-y-auto rounded-2xl border border-cyan-300/35 bg-slate-950/95 p-4 shadow-[0_0_24px_rgba(34,211,238,0.2)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="text-lg font-semibold text-cyan-200">How It Works</h3>
            <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-slate-300">
              {project.usage.map((step) => (
                <li key={`${project.title}-usage-${step}`}>{step}</li>
              ))}
            </ol>

            <h4 className="mt-5 text-sm font-semibold text-emerald-300">How To Verify</h4>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-300">
              {project.verify.map((check) => (
                <li key={`${project.title}-verify-${check}`}>{check}</li>
              ))}
            </ol>

            <div className="mt-6 flex gap-8 text-sm">
              <a
                className="magnetic-link text-cyan-300 hover:text-cyan-200"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  className="magnetic-link text-orange-300 hover:text-orange-200"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              ) : (
                <span className="cursor-not-allowed text-slate-500">Preview Soon</span>
              )}
            </div>
          </article>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const nonFeaturedProjects = projects.filter((project) => !project.featured);

  const rows: Project[][] = [];
  for (let i = 0; i < nonFeaturedProjects.length; i += 3) {
    rows.push(nonFeaturedProjects.slice(i, i + 3));
  }

  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-300/55 bg-slate-900/70 p-[2px] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/certificates/project.png" alt="Projects" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Projects</h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-400">
          A curated portfolio of system-driven applications, including network-aware platforms,
          backend systems, and AI-powered solutions with real-world impact.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-cyan-200/90">
          Focused on building systems that are scalable, network-aware, and performance-driven.
        </p>

        <div className="mt-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex + 1}`} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {row.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
