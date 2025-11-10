"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingcards";
import { testimonials } from "@/data";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🎇 Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-purple-900/20 blur-3xl pointer-events-none"></div>

      {/* ✨ Animated heading */}
      <motion.h1
        className="heading text-center relative z-10 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </motion.h1>

      {/* 🌈 Moving testimonial cards only */}
      <motion.div
        className="relative w-full max-w-6xl flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </motion.div>
    </section>
  );
};

export default Clients;
