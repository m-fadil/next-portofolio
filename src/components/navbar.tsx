"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      animate={{
        top: isScrolled ? 16 : 0,
        backgroundColor: isScrolled 
        ? "rgba(15, 23, 42, 0.9)" 
        : "rgba(15, 23, 42, 0.0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled
          ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
          : "0px 0px 0px rgba(0, 0, 0, 0)",
        borderRadius: isScrolled ? "16px" : "0px",
        width: isScrolled ? "90%" : "100%",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed flex left-1/2 -translate-x-1/2 w-full max-w-full items-center justify-between p-4"
    >
      <p className="text-white">Mukhammad Fadhila Ikhsani</p>
      <nav>
        <ul className="flex items-center justify-between gap-4 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}