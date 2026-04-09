"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
// Icons hya file madhe import kar
import { Home, User, Briefcase, FolderRoot, MessageSquare, Handshake, Star } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Nav Item chya navavarun Icon tharavnyasathi function
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "about": return <User size={20} />;
      case "experience": return <Briefcase size={20} />;
      case "projects": return <FolderRoot size={20} />;
      case "services": return <Handshake size={20} />;
      case "testimonials": return <Star size={20} />;
      case "contact": return <MessageSquare size={20} />;
      default: return <Home size={20} />;
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) setVisible(true);
        else setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/50 backdrop-blur-xl shadow-2xl z-[5000] px-4 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative group flex items-center justify-center p-2 rounded-full transition-all duration-300"
          >
            {/* Background Glow */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-purple/20 blur-md rounded-full -z-10 border border-purple/30"
                />
              )}
            </AnimatePresence>

            {/* Icon (Calling our function) */}
            <span className={cn(
                "z-10 transition-colors duration-300",
                hoveredIndex === idx ? "text-purple drop-shadow-[0_0_8px_rgba(203,172,249,0.8)]" : "text-neutral-400"
            )}>
              {getIcon(navItem.name)}
            </span>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 45 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute text-[10px] font-bold bg-black-100 border border-white/10 text-purple px-2 py-1 rounded-lg shadow-2xl whitespace-nowrap z-50"
                >
                  {navItem.name}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};