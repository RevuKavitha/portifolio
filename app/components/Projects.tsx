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
};

const projects: Project[] = [
  {
    title: "Data Analysis Toolkit",
    description:
      "Developed an end-to-end ML system to predict customer churn and revenue trends. Applied feature engineering, model evaluation, and interactive visualizations to generate actionable business insights.",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
      "Data Visualization"
    ],
    github: "https://github.com/RevuKavitha/libraries_project",
    demo: "https://libraries-project.vercel.app/",
    usage: [
      "Upload or load dataset files for exploration.",
      "Run preprocessing and feature analysis pipelines.",
      "Use generated charts and summaries for insights."
    ],
    verify: [
      "Dataset loads without parsing errors.",
      "Visualizations render correctly for selected features.",
      "Summary outputs match expected data patterns."
    ]
  },
  {
    title: "Multi-Model AI Orchestrator",
    description:
      "Built a benchmarking system to compare multiple LLMs (OpenAI, Claude, Gemini) based on latency, cost, and response quality. Implemented scoring mechanisms and interactive dashboards for model evaluation.",
    stack: [
      "Python",
      "FastAPI",
      "LLMs",
      "Prompt Engineering",
      "Model Routing"
    ],
    github: "https://github.com/RevuKavitha/multi_model_ai",
    demo: "https://muti-model-ai-fyjo.vercel.app/",
    usage: [
      "Enter a task prompt from the UI.",
      "System routes requests to suitable models.",
      "Compare responses and use the best output."
    ],
    verify: [
      "Model routing selects multiple providers.",
      "Responses return with low latency.",
      "Fallback behavior works when one model fails."
    ]
  },
  {
    title: "MCP AI Assistant",
    description:
      "Designed a tool-calling AI assistant using MCP principles to dynamically select and execute tools like web search and document retrieval. Enabled context-aware responses through structured LLM interaction loops.",
    stack: [
      "Python",
      "MCP",
      "AI Agents",
      "Automation",
      "Tool Calling",
      "API Integration"
    ],
    github: "https://github.com/RevuKavitha/mcp_ai_assistant",
    demo: "https://mcp-ai-assistant-amber.vercel.app/",
    usage: [
      "Ask assistant to execute a workflow task.",
      "Assistant invokes connected tools via MCP.",
      "Review generated output and action logs."
    ],
    verify: [
      "Tool calls trigger with correct parameters.",
      "Assistant returns context-aware responses.",
      "End-to-end workflow completes successfully."
    ]
  },
  {
    title: "Deep Learning Model Lab",
    description:
      "Developed a multimodal AI application using BLIP/LLaVA to answer questions about images. Integrated FastAPI with Hugging Face Transformers for efficient real-time inference.",
    stack: [
      "Python",
      "TensorFlow",
      "Neural Networks",
      "Model Training",
      "Hyperparameter Tuning"
    ],
    github: "https://github.com/RevuKavitha/ai_dl",
    demo: "https://ai-dl.vercel.app/",
    usage: [
      "Select or upload an input image.",
      "Run deep learning model inference on the image.",
      "Review predicted output and confidence score."
    ],
    verify: [
      "Image upload/selection works without errors.",
      "Prediction result appears for each selected image.",
      "Model output changes correctly for different images."
    ]
  },
  {
    title: "ML Stock Forecasting Engine",
    description:
      "Built a machine learning system using Pandas, NumPy, and Scikit-learn to forecast stock trends. Engineered time-series features and visualized predictions with interactive dashboards and trend analysis.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Time Series",
      "Feature Engineering",
      "Forecasting"
    ],
    github: "https://github.com/RevuKavitha/ai_ml_stock",
    demo: "https://ai-ml-stock.vercel.app/",
    usage: [
      "Choose stock symbol and date range.",
      "Generate trend analysis and predictions.",
      "Inspect charts and forecast indicators."
    ],
    verify: [
      "Historical data fetch succeeds.",
      "Forecast graph renders with predicted values.",
      "Key indicators update when inputs change."
    ]
  },
  {
    title: "Intelligent Resume Screening Platform",
    description:
      "Developed an AI-powered platform to analyze resumes and generate structured insights including strengths, weaknesses, and ATS scores. Implemented role-based interview question generation using prompt-engineered LLM pipelines.",
    stack: [
      "Python",
      "NLP",
      "Streamlit",
      "Text Extraction",
      "Skill Matching",
      "Recommendation Engine"
    ],
    github: "https://github.com/RevuKavitha/resume_analyser",
    demo: "https://ai-chatbot-ai3f.vercel.app/",
    usage: [
      "Upload resume in supported format.",
      "Run NLP analysis for skills and gaps.",
      "Review role-fit suggestions and improvements."
    ],
    verify: [
      "Resume text extraction completes accurately.",
      "Skill match score appears with suggestions.",
      "Recommendations align with target role keywords."
    ]
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Built a full-stack RAG system using FastAPI, Next.js, and Ollama to enable context-aware Q&A over custom documents. Implemented PDF ingestion, embedding generation with ChromaDB, and a LangChain-based retrieval pipeline to combine semantic search with LLM reasoning.",
    stack: [
      "Python",
      "RAG",
      "LLM",
      "Embeddings",
      "Vector DB",
      "Semantic Search",
      "Context Retrieval"
    ],
    github: "https://github.com/RevuKavitha/RAG",
    demo: "https://rag-seven-nu.vercel.app/",
    usage: [
      "Ask a question in the chat interface.",
      "System retrieves relevant context chunks.",
      "LLM answers using retrieved evidence."
    ],
    verify: [
      "Retrieved context is shown or traceable.",
      "Answers remain grounded in source content.",
      "Response quality improves over base LLM output."
    ]
  },
  {
    title: "Smart Notes Knowledge Workspace",
    description:
      "MongoDB-powered AI note management workspace with intelligent organization, rapid retrieval, and contextual summaries.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "AI Summarization",
      "Search",
      "CRUD APIs"
    ],
    github: "https://github.com/RevuKavitha/smart-notes-app",
    demo: "https://mongodb-nine-peach.vercel.app/",
    usage: [
      "Create, edit, and organize notes by topic.",
      "Use search and AI summarization on notes.",
      "Persist and retrieve notes from MongoDB."
    ],
    verify: [
      "CRUD actions reflect instantly in UI.",
      "Search returns relevant notes quickly.",
      "Saved notes remain available after refresh."
    ]
  }
];

export default function Projects() {
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
          A curated portfolio of AI and full-stack solutions, including deployed production-ready projects with live previews and measurable real-world impact.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="[perspective:1200px]"
            >
              <TiltCard className="group">
                <div className="relative h-[390px] w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                  <article className="absolute inset-0 grid grid-rows-[44px_156px_78px_20px_24px] content-start rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-lg font-semibold text-cyan-200">
                      {project.title}
                    </h3>
                    <p className="mt-2 overflow-y-auto pr-1 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-3 overflow-hidden content-start flex flex-wrap gap-2 pr-1">
                      {project.stack.slice(0, 6).map((item) => (
                        <span
                          key={`${project.title}-${item}`}
                          className="rounded-full border border-slate-600 px-2.5 py-1 text-[11px] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Hover card to view usage and testing instructions.
                    </p>
                    <div className="mt-10 flex items-end gap-8 text-sm">
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
          ))}

          <motion.article
            whileHover={{ y: -8, scale: 1.01 }}
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative flex h-[390px] flex-col justify-between overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-[#0a1020] via-[#0a1424] to-[#03202a] p-4 shadow-[0_0_34px_rgba(34,211,238,0.2)]"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.5, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"
            />

            <div>
              <h3 className="mt-3 text-2xl font-black leading-tight text-slate-100">
                Additional Projects
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Explore additional repositories and production-oriented work from my GitHub profile.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/RevuKavitha"
                target="_blank"
                rel="noreferrer"
                className="magnetic-link inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/20"
              >
                View GitHub Projects
                <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
