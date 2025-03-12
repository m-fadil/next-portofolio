"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 size-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-gray-950"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    />
  );
}