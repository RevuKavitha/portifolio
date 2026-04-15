export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  text: string;
};

const botKnowledge = {
  projects:
    "I have built 8+ AI-based and full-stack projects including RAG Knowledge Assistant, Multi-Model AI Orchestrator, MCP AI Assistant, and Intelligent Resume Screening Platform. You can view code on GitHub and live previews in the Projects section.",
  skills:
    "Core skills include Python, FastAPI, Next.js, TypeScript, LLMs, RAG, embeddings, vector databases, NLP, and machine learning with Scikit-learn and TensorFlow.",
  timeline:
    "Academic journey: 10th (2018, GPA 9.2), 12th (2020, GPA 8.0), B.Tech (2024, CGPA 8.13), and currently M.Tech with first semester CGPA 9.58.",
  contact:
    "You can reach me at revukavitha789@gmail.com. GitHub: github.com/RevuKavitha, LinkedIn: linkedin.com/in/revu-kavitha/.",
  certifications:
    "I hold professional and technical certifications in web development, backend, frontend, Hadoop, SQL, LLMs & Agentic AI, and Linux, along with extra achievements.",
  fallback:
    "I can help with projects, skills, certifications, academic timeline, and contact details. Try asking: 'What AI projects did you build?'"
};

export function getPortfolioFallbackReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("project") || text.includes("github") || text.includes("work")) {
    return botKnowledge.projects;
  }
  if (
    text.includes("skill") ||
    text.includes("tech stack") ||
    text.includes("technology") ||
    text.includes("tools")
  ) {
    return botKnowledge.skills;
  }
  if (
    text.includes("timeline") ||
    text.includes("academic") ||
    text.includes("education") ||
    text.includes("gpa") ||
    text.includes("cgpa")
  ) {
    return botKnowledge.timeline;
  }
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("linkedin") ||
    text.includes("hire")
  ) {
    return botKnowledge.contact;
  }
  if (
    text.includes("certificate") ||
    text.includes("certification") ||
    text.includes("achievement")
  ) {
    return botKnowledge.certifications;
  }

  return botKnowledge.fallback;
}

export const portfolioAssistantSystemPrompt = `You are a portfolio assistant for Revu Kavitha.

Primary goals:
- Answer only using the provided portfolio context.
- Keep answers concise, confident, and professional.
- If user asks something outside scope, politely redirect to portfolio topics.

Portfolio context:
- Name: Revu Kavitha
- Focus: AI and product-focused builds
- Contact:
  - Email: revukavitha789@gmail.com
  - GitHub: https://github.com/RevuKavitha
  - LinkedIn: https://www.linkedin.com/in/revu-kavitha/
- Academic timeline:
  - 10th: 2018, Dr. K. R. Narayanan Govt High School, Yanam, GPA 9.2
  - 12th: 2020, Sri Sai Junior College, Yanam, GPA 8.0
  - B.Tech: 2024, Puducherry Technological University, CGPA 8.13
  - M.Tech: Present, Puducherry Technological University, 1st semester CGPA 9.58
- Key projects include:
  - Data Analysis Toolkit
  - Multi-Model AI Orchestrator
  - MCP AI Assistant
  - Deep Learning Model Lab
  - ML Stock Forecasting Engine
  - Intelligent Resume Screening Platform
  - RAG Knowledge Assistant
  - Smart Notes Knowledge Workspace
- Technical stack:
  - Python, FastAPI, Next.js, TypeScript
  - LLMs, RAG, embeddings, vector DB, semantic search
  - NLP, Scikit-learn, TensorFlow, Streamlit
- Certifications:
  - Web Development, Backend/Frontend Web Development
  - Hadoop, SQL, LLMs & Agentic AI, Linux
  - Extra achievements and volunteering records

Tone:
- Friendly and recruiter-ready.
- Avoid long paragraphs.
- Use bullet points when listing items.`;
