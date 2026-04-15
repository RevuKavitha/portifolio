"use client";

import { FormEvent, memo, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { getPortfolioFallbackReply, type ChatTurn } from "@/lib/portfolio-chat";

/** Canonical profile — avoid older / duplicate vanity URLs. */
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/revu-kavitha/";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const SplineRobot = dynamic(() => import("./SplineRobot"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-cyan-300/80 border-t-transparent" />
    </div>
  )
});

const RobotPanel = memo(function RobotPanel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-b from-slate-900 to-slate-950">
      <SplineRobot className="h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-slate-900 bg-black px-3 py-5 text-center shadow-[0_-18px_34px_rgba(0,0,0,0.6)]">
        <span className="text-xs font-medium tracking-wide text-cyan-200">
          AI Companion
        </span>
      </div>
    </div>
  );
});

function formatAssistantText(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/\s-\s/g, "\n- ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function Contact() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "assistant-0",
      role: "assistant",
      text: "Hi! Ask me about projects, skills, certifications, timeline, or contact."
    }
  ]);

  const canSend = input.trim().length > 0 && !isTyping;

  const placeholder = useMemo(() => {
    if (isTyping) return "Assistant is typing...";
    return "Type your message...";
  }, [isTyping]);

  useEffect(() => {
    if (!chatScrollRef.current) return;
    chatScrollRef.current.scrollTo({
      top: chatScrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, isTyping]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const history: ChatTurn[] = messages
        .slice(-8)
        .map((msg) => ({ role: msg.role, text: msg.text }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history })
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as { reply?: string };
      const reply = data.reply?.trim() || getPortfolioFallbackReply(trimmed);

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: formatAssistantText(reply)
        }
      ]);
    } catch (error) {
      console.error("Chatbot request error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: formatAssistantText(getPortfolioFallbackReply(trimmed))
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="contact" className="px-6 pb-20 pt-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [24, 0] }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <RobotPanel />

          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
            <h3 className="text-xl font-semibold text-cyan-200">Portfolio Chatbot</h3>
            <p className="mt-2 text-sm text-slate-400">Ask quick questions about my profile and work.</p>
            <div className="mt-5 space-y-3">
              <div
                ref={chatScrollRef}
                className="h-[300px] space-y-2 overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/70 p-3"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[92%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "assistant"
                        ? "border border-slate-700 bg-slate-800/90 text-slate-100 shadow-[0_6px_16px_rgba(2,6,23,0.28)]"
                        : "ml-auto border border-cyan-300/30 bg-cyan-400/20 text-cyan-100"
                    }`}
                  >
                    <p className="whitespace-pre-line break-words">{message.text}</p>
                  </div>
                ))}
                {isTyping ? (
                  <div className="w-fit rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-300">
                    Typing...
                  </div>
                ) : null}
              </div>
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-400 outline-none"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.footer
          whileInView={{ opacity: [0, 1], y: [18, 0] }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70 px-6 py-5"
        >
          <div className="pointer-events-none absolute -right-12 -top-14 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-violet-400/15 blur-2xl" />
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="max-w-md text-base leading-relaxed text-slate-300">
              Let&apos;s collaborate on AI and product-focused builds.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-slate-300">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/95 px-5 py-2.5 text-cyan-300 transition hover:-translate-y-0.5 hover:border-cyan-300/65 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)]"
                href="mailto:revukavitha789@gmail.com"
              >
                <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current text-cyan-300">
                    <path
                      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
                      strokeWidth="1.8"
                    />
                    <path d="m4 8 8 6 8-6" strokeWidth="1.8" />
                  </svg>
                </span>
                <span>revukavitha789@gmail.com</span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/95 px-5 py-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/65 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RevuKavitha"
              >
                <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-slate-200">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.37-1.33-1.73-1.33-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.08 1.83 2.84 1.3 3.53 1 .11-.77.42-1.3.77-1.6-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.89 1.24 3.19 0 4.59-2.81 5.59-5.49 5.88.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/95 px-5 py-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/65 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)]"
                target="_blank"
                rel="noreferrer"
                href={LINKEDIN_PROFILE}
              >
                <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-slate-200">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.9h2.68V18H5.6V9.9Zm4.2 0h2.57v1.1h.04c.36-.68 1.23-1.4 2.54-1.4 2.72 0 3.22 1.79 3.22 4.12V18h-2.68v-3.8c0-.91-.02-2.08-1.26-2.08-1.27 0-1.46.99-1.46 2.01V18H9.8V9.9Z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
