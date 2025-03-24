"use client";

import { motion, useScroll, useMotionValueEvent, HTMLMotionProps } from "framer-motion";
import React, { useState } from "react";

const LinkToSection = React.forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<"button"> & { href: string }
>(({ href, children, ...props }, ref) => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const element = document.getElementById(href);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };
  
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleScroll}
      {...props}
    >
      {children}
    </motion.button>
  )
})
LinkToSection.displayName = "LinkToSection";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLink = [
    { name: "Home", href: "welcome" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
  ]

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
      className="fixed flex left-1/2 -translate-x-1/2 w-full max-w-full items-center justify-between p-4 z-50"
    >
      <p className="text-white">Mukhammad Fadhila Ikhsani</p>
      <nav>
        <ul className="flex items-center justify-between gap-4 text-white">
          {navLink.map((link) => (
            <li key={link.name}>
              <LinkToSection href={link.href}>{link.name}</LinkToSection>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}