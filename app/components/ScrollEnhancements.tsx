"use client";

import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollEnhancements() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sections.forEach((section) => section.classList.remove("is-active-section"));
            entry.target.classList.add("is-active-section");
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -35% 0px", threshold: 0.05 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.65)]"
    />
  );
}
