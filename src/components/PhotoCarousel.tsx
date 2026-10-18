"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  badgeEmoji: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/carousel/pijama-2.webp",
    tag: "Rib Premium",
    title: "Detalles & Lazos Satinados",
    subtitle: "Textura acanalada 100% suave y fresca",
    badgeEmoji: "🎀",
  },
  {
    id: 2,
    image: "/carousel/pijama-1.webp",
    tag: "Colección Floral",
    title: "Conjunto Sweet Lavender",
    subtitle: "Corte crop y short con ondulado delicado",
    badgeEmoji: "🌸",
  },
  {
    id: 3,
    image: "/carousel/pijama-3.webp",
    tag: "Edición Especial",
    title: "Pijama Ositos Teddy",
    subtitle: "Comodidad absoluta para tus noches y descansos",
    badgeEmoji: "🧸",
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
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = SLIDES[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
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
      {/* Outer Aesthetic Frame */}
      <div className="relative w-full h-[290px] sm:h-[320px] rounded-3xl bg-white border-2 border-brand-charcoal shadow-[0_8px_0_#1E1E1E] overflow-hidden group">
        {/* Animated Slide Content */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center"
            />

            {/* Aesthetic Gradient Shadow at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/15 to-transparent pointer-events-none" />

            {/* Top Cutie Ribbon Badge */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border-[1.5px] border-brand-charcoal text-[11px] font-sans font-extrabold uppercase tracking-wider text-brand-charcoal shadow-[0_2px_0_#1E1E1E]">
                <span>{currentSlide.badgeEmoji}</span>
                <span>{currentSlide.tag}</span>
              </span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-brand-pink/90 border border-brand-charcoal/30 text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                <span>Prenda Real</span>
              </div>
              <h3 className="font-cutie text-lg sm:text-xl font-bold text-white drop-shadow-md leading-tight">
                {currentSlide.title}
              </h3>
              <p className="font-sans text-xs text-white/90 drop-shadow font-medium tracking-wide">
                {currentSlide.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Discreet, Cute & Clean) */}
        <button
          onClick={prevSlide}
          aria-label="Foto anterior"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 border border-brand-charcoal text-brand-charcoal flex items-center justify-center opacity-85 hover:opacity-100 shadow-[0_2px_0_#1E1E1E] transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente foto"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 border border-brand-charcoal text-brand-charcoal flex items-center justify-center opacity-85 hover:opacity-100 shadow-[0_2px_0_#1E1E1E] transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Cute Navigation Dots / Pill Indicators */}
        <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 bg-brand-charcoal/50 backdrop-blur-md py-1 px-2 rounded-full border border-white/30">
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
                  ? "w-5 bg-brand-pink border border-white"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
