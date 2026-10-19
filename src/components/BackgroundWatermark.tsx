"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundWatermark() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate soft floating luxury gold/rose sparkles
    const generated: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Warm champagne / blush background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5F2] via-[#FAF3EF] to-[#F5E7E2]" />

      {/* Top Left: Authentic Pink Silk Drapery from target design */}
      <div className="absolute top-0 left-0 w-44 sm:w-56 h-64 sm:h-72 pointer-events-none z-0 opacity-90">
        <Image
          src="/silk-left.png"
          alt=""
          fill
          priority
          className="object-top object-left object-contain"
        />
      </div>

      {/* Top Right: Gypsophila baby's breath flowers & golden needle */}
      <div className="absolute top-0 right-0 w-40 sm:w-52 h-64 sm:h-72 pointer-events-none z-0 opacity-95">
        <Image
          src="/flowers-right-clean.png"
          alt=""
          fill
          priority
          className="object-top object-right object-contain"
        />
      </div>

      {/* Bottom: Silk draping waves from target design */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 sm:h-28 pointer-events-none z-0 opacity-80">
        <Image
          src="/bottom-silk.png"
          alt=""
          fill
          className="object-bottom object-cover"
        />
      </div>

      {/* Soft ambient warm radial glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#FFF2ED] opacity-60 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FCE5DF] opacity-40 blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-[#F3E2DB] opacity-40 blur-3xl" />

      {/* Subtle floating gold/rose shimmer specks */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor:
              p.id % 2 === 0
                ? "rgba(255, 255, 255, 0.75)"
                : "rgba(197, 160, 89, 0.35)",
            boxShadow:
              p.id % 3 === 0 ? "0 0 8px rgba(255, 245, 235, 0.9)" : "none",
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.65, 0.2],
            scale: [0.85, 1.2, 0.85],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
