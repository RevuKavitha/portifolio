"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const tiltX = useTransform(my, [0, 100], [6, -6]);
  const tiltY = useTransform(mx, [0, 100], [-6, 6]);

  const rx = useSpring(tiltX, {
    stiffness: 180,
    damping: 18
  });
  const ry = useSpring(tiltY, {
    stiffness: 180,
    damping: 18
  });

  const glow = useMotionTemplate`radial-gradient(240px circle at ${mx}% ${my}%, rgba(125,211,252,0.2), transparent 55%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    mx.set(Math.max(0, Math.min(100, x)));
    my.set(Math.max(0, Math.min(100, y)));
  };

  const onLeave = () => {
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
