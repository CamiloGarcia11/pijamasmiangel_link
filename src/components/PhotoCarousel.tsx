"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  hasEmbeddedText?: boolean;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/carousel/carousel-sweet-dreams.jpg",
    badge: "CONJUNTO 2 PIEZAS",
    title: "Top Corto Manga",
    subtitle: "Estampado botánico pastel, lazo decorativo y terminaciones onduladas.",
    hasEmbeddedText: true,
  },
  {
    id: 2,
    image: "/carousel/pijama-2.webp",
    badge: "TELA RIB ACANALADA",
    title: "Detalle de Confección & Lazos",
    subtitle: "Estampado de corazones blancos y textura rib acanalada suave.",
    hasEmbeddedText: false,
  },
  {
    id: 3,
    image: "/carousel/pijama-1.webp",
    badge: "CONJUNTO 2 PIEZAS",
    title: "Top Corto Manga Corta & Short",
    subtitle: "Estampado botánico pastel con lazo y terminaciones onduladas.",
    hasEmbeddedText: false,
  },
  {
    id: 4,
    image: "/carousel/pijama-3.webp",
    badge: "CONJUNTO 2 PIEZAS",
    title: "Camiseta Manga Corta & Short",
    subtitle: "Estampado de ositos pastel con lazo decorativo en pretina.",
    hasEmbeddedText: false,
  },
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = SLIDES[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Outer Luxury Card Frame */}
      <div className="relative w-full h-[300px] sm:h-[330px] rounded-[28px] bg-white border border-[#EFE5E0] shadow-[0_8px_24px_-6px_rgba(160,120,120,0.14)] overflow-hidden group">
        {/* Animated Slide Content */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center"
            />

            {/* If slide does not have embedded text, render luxury gradient and text */}
            {!currentSlide.hasEmbeddedText && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent pointer-events-none" />

                {/* Top-left Pill Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#FCE3E7]/95 backdrop-blur-sm border border-[#F3CDD5] text-[#332225] font-sans font-semibold text-[10.5px] uppercase tracking-wider shadow-sm">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#241D1E] leading-tight mb-1">
                    {currentSlide.title}
                  </h3>
                  <p className="font-sans text-xs text-[#524649] font-normal leading-relaxed max-w-[270px]">
                    {currentSlide.subtitle}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows: Translucent White Circles */}
        <button
          onClick={prevSlide}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-[#2A2426] backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 text-[#2A2426]" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente foto"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/85 hover:bg-white text-[#2A2426] backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4 text-[#2A2426]" />
        </button>

        {/* Carousel Indicator Dots at Bottom Center */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Ir a foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-2.5 bg-[#A74D5E]"
                  : "w-2 bg-white/80 hover:bg-white shadow-sm"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
