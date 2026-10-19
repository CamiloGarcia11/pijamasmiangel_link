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
    // Generate soft floating sparkles on client mount
    const generated: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 7 + 3,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Base subtle radial ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FCE4EC] opacity-80 blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#F8D7E3] opacity-60 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#EBE8E3] opacity-50 blur-3xl" />

      {/* Subtle foliage green ambient light */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-[#5B6A54]/10 blur-3xl" />
      <div className="absolute bottom-20 -right-12 w-64 h-64 rounded-full bg-[#5B6A54]/10 blur-3xl" />

      {/* Decorative botanical leaf accents in corners */}
      <div className="absolute top-2 right-2 md:top-8 md:right-8 opacity-25 text-[#5B6A54] transform rotate-45">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 90C50 90 48 55 25 35C45 35 50 65 50 90Z"
            fill="currentColor"
          />
          <path
            d="M50 90C50 90 52 50 78 30C60 38 52 68 50 90Z"
            fill="#6B7B64"
          />
          <path
            d="M50 60C50 60 30 45 15 15C32 20 45 40 50 60Z"
            fill="currentColor"
          />
          <path
            d="M50 50C50 50 65 35 85 10C72 25 58 35 50 50Z"
            fill="#6B7B64"
          />
          <path
            d="M50 95V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-6 left-2 md:bottom-12 md:left-8 opacity-20 text-[#5B6A54] transform -rotate-45">
        <svg
          width="110"
          height="110"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 90C50 90 48 55 25 35C45 35 50 65 50 90Z"
            fill="currentColor"
          />
          <path
            d="M50 90C50 90 52 50 78 30C60 38 52 68 50 90Z"
            fill="#6B7B64"
          />
          <path
            d="M50 60C50 60 30 45 15 15C32 20 45 40 50 60Z"
            fill="currentColor"
          />
          <path
            d="M50 50C50 50 65 35 85 10C72 25 58 35 50 50Z"
            fill="#6B7B64"
          />
          <path
            d="M50 95V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Brand Logo Watermark (Razor sharp, layered in background) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.045, 0.075, 0.045],
            scale: [0.98, 1.02, 0.98],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] select-none"
        >
          <Image
            src="/logo-watermark.webp"
            alt="Pijamas Mi Ángel PR Watermark"
            fill
            sizes="(max-width: 768px) 380px, 560px"
            className="object-contain filter grayscale contrast-125"
            priority
          />
        </motion.div>
      </div>

      {/* Soft floating sparkle particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor:
              p.id % 3 === 0
                ? "rgba(255, 255, 255, 0.75)"
                : p.id % 3 === 1
                ? "rgba(107, 123, 100, 0.3)"
                : "rgba(30, 30, 30, 0.12)",
            boxShadow:
              p.id % 2 === 0 ? "0 0 10px rgba(255, 255, 255, 0.9)" : "none",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.id % 2 === 0 ? 10 : -10, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.25, 0.8],
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
