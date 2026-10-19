"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, CheckCircle, Truck } from "lucide-react";

interface HeaderProfileProps {
  onOpenShare: () => void;
}

export default function HeaderProfile({ onOpenShare }: HeaderProfileProps) {
  return (
    <header className="relative w-full flex flex-col items-center text-center pt-6 pb-3 px-4 select-none">
      {/* Top action bar: Share button */}
      <div className="w-full max-w-md flex justify-end mb-2">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpenShare}
          aria-label="Compartir perfil"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-[1.5px] border-brand-charcoal text-brand-charcoal text-xs font-sans font-bold uppercase tracking-wider shadow-[0_2px_0_#1E1E1E] transition-all hover:bg-white"
        >
          <Share2 className="w-3.5 h-3.5 text-brand-charcoal" />
          <span>Compartir</span>
        </motion.button>
      </div>

      {/* Profile Avatar with double ring and sweet breathing animation */}
      <div className="relative mb-3">
        {/* Pulsing ambient halo ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-pinkMuted via-white to-brand-pinkSoft opacity-85 blur-md animate-pulse-subtle" />

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 220 }}
          whileHover={{ scale: 1.04, rotate: 1.5 }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-[2.5px] border-brand-charcoal shadow-[0_5px_0_#1E1E1E] p-1.5 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo Pijamas Mi Ángel PR"
              fill
              sizes="(max-width: 768px) 128px, 128px"
              className="object-contain p-2"
              priority
            />
          </div>
        </motion.div>

        {/* Verified Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 400 }}
          className="absolute bottom-0 right-1 bg-brand-charcoal text-white p-1 rounded-full border-2 border-white shadow-md flex items-center justify-center"
          title="Marca Verificada"
        >
          <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        </motion.div>

        {/* Floating bow badge */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1 -left-2 bg-white text-rose-500 p-1.5 rounded-full border border-brand-charcoal shadow-[0_2px_0_#1E1E1E] text-xs flex items-center justify-center"
        >
          🎀
        </motion.div>
      </div>

      {/* Main Title: Sweet & Elegant Typography */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.45 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="h-[1px] w-6 bg-brand-charcoal/30" />
          <span className="text-[10.5px] font-sans font-bold uppercase tracking-[0.22em] text-[#5B6A54]">
            Colección Sweet Dreams
          </span>
          <span className="h-[1px] w-6 bg-brand-charcoal/30" />
        </div>

        <h1 className="font-cutie text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-charcoal leading-tight mb-1.5">
          Pijamas Mi Ángel
        </h1>

        <p className="font-sans text-[11px] uppercase tracking-widest text-brand-charcoal/80 font-bold mb-3.5">
          Confección & Venta Mayorista • Colombia 🇨🇴
        </p>
      </motion.div>

      {/* Pills: Row of 3 + Centered Envíos Nacionales in Sage Green */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        className="flex flex-col items-center gap-2 max-w-sm"
      >
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
            <svg
              className="w-3.5 h-3.5 text-[#5B6A54]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span>Rib Premium</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-pinkSoft border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
            <svg
              className="w-3.5 h-3.5 text-brand-charcoal"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 6a4 4 0 0 0-8 0c0 1.5 1 2.5 2 3l-8 7h20l-8-7c1-.5 2-1.5 2-3Z" />
            </svg>
            <span>Talla U</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-brand-neutral border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
            S • M • L
          </span>
        </div>

        {/* Centered Sage Green Pill: Envíos Nacionales */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B6A54] text-white border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
          <Truck className="w-3.5 h-3.5 text-white" />
          <span>Envíos Nacionales</span>
        </span>
      </motion.div>
    </header>
  );
}
