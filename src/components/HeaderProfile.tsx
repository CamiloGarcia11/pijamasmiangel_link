"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Share2, CheckCircle, Heart } from "lucide-react";

interface HeaderProfileProps {
  onOpenShare: () => void;
}

export default function HeaderProfile({ onOpenShare }: HeaderProfileProps) {
  return (
    <header className="relative w-full flex flex-col items-center text-center pt-8 pb-4 px-5 select-none">
      {/* Top action bar: Share button */}
      <div className="w-full max-w-md flex justify-end mb-3">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpenShare}
          aria-label="Compartir perfil"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-[1.5px] border-brand-charcoal text-brand-charcoal text-xs font-sans font-bold uppercase tracking-wider shadow-[0_2px_0_#1E1E1E] transition-all hover:bg-white"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Compartir</span>
        </motion.button>
      </div>

      {/* Profile Avatar with double ring and sweet breathing animation */}
      <div className="relative mb-4">
        {/* Pulsing ambient halo ring */}
        <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-brand-pinkMuted via-white to-brand-pinkSoft opacity-85 blur-md animate-pulse-subtle" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 220 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-[2.5px] border-brand-charcoal shadow-[0_6px_0_#1E1E1E] p-1.5 flex items-center justify-center overflow-hidden"
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
          className="absolute bottom-0 right-1 bg-brand-charcoal text-white p-1.5 rounded-full border-2 border-white shadow-md flex items-center justify-center"
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

      {/* Main Title: Sweet & Cutie Typography */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="h-[1px] w-5 bg-brand-charcoal/30" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-brand-foliage">
            Colección Sweet Dreams
          </span>
          <span className="h-[1px] w-5 bg-brand-charcoal/30" />
        </div>

        <h1 className="font-cutie text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-charcoal leading-tight mb-2">
          Pijamas Mi Ángel
        </h1>

        <p className="font-sans text-xs uppercase tracking-widest text-brand-charcoal/80 font-bold mb-4">
          Confección & Venta Mayorista • Colombia 🇨🇴
        </p>
      </motion.div>

      {/* Sweet Pill Badges with spacious gaps */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2.5 max-w-sm"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          Rib Premium
        </span>

        <span className="px-3.5 py-1.5 rounded-full bg-brand-pinkSoft border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
          Talla U
        </span>

        <span className="px-3.5 py-1.5 rounded-full bg-brand-neutral border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase shadow-[0_2px_0_#1E1E1E]">
          S • M • L
        </span>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-brand-charcoal text-[11px] font-sans font-extrabold tracking-wider uppercase text-emerald-900 shadow-[0_2px_0_#1E1E1E]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          Envíos Nacionales
        </span>
      </motion.div>
    </header>
  );
}
