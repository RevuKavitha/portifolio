"use client";

import { motion } from "framer-motion";

/** Canonical profile — avoid older / duplicate vanity URLs. */
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/revu-kavitha/";

const VERCEL_PROFILE = "https://vercel.com/revukavithas-projects";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-20 pt-16 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [24, 0] }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
        >
          <h2 className="text-3xl font-bold text-slate-50">Contact</h2>
          <p className="mt-4 text-slate-300">Let&apos;s collaborate on AI and product-focused builds.</p>
          <div className="mt-5 space-y-3 text-sm">
            <p>
              Email:{" "}
              <a className="text-cyan-300" href="mailto:revukavitha789@gmail.com">
                revukavitha789@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                className="text-cyan-300"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RevuKavitha"
              >
                github.com/RevuKavitha
              </a>
            </p>
            <p>
              Deployments:{" "}
              <a
                className="text-cyan-300"
                target="_blank"
                rel="noreferrer"
                href={VERCEL_PROFILE}
              >
                vercel.com/revukavithas-projects
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="break-all text-cyan-300 underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
                href={LINKEDIN_PROFILE}
              >
                {LINKEDIN_PROFILE}
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [24, 0] }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
        >
          <h3 className="text-xl font-semibold text-cyan-200">Chatbot (Preview)</h3>
          <p className="mt-2 text-sm text-slate-400">
            Placeholder assistant UI for future integration.
          </p>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-slate-800 p-3 text-sm text-slate-200">
              Hi! Ask me about projects, skills, or timeline milestones.
            </div>
            <div className="flex items-center gap-2">
              <input
                disabled
                placeholder="Type your message..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-400 outline-none"
              />
              <button className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
