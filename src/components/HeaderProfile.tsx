"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, Truck } from "lucide-react";

interface HeaderProfileProps {
  onOpenShare: () => void;
}

export default function HeaderProfile({ onOpenShare }: HeaderProfileProps) {
  return (
    <header className="relative w-full flex flex-col items-center text-center pt-5 pb-3 px-4 select-none">
      {/* Top action bar: Discreet Share button to preserve full functionality */}
      <div className="w-full flex justify-end mb-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenShare}
          aria-label="Compartir perfil"
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E8DDD4] text-[#7A6A64] text-[10.5px] font-sans font-medium uppercase tracking-wider shadow-sm transition-all hover:bg-white hover:text-brand-wine"
        >
          <Share2 className="w-3 h-3 text-brand-wine" />
          <span>Compartir</span>
        </motion.button>
      </div>

      {/* Luxury Monogram Logo Badge with Bow & Leaves from target design */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 200 }}
        whileHover={{ scale: 1.04 }}
        className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3"
      >
        <div className="relative w-full h-full drop-shadow-[0_4px_12px_rgba(180,140,140,0.18)]">
          <Image
            src="/luxury-logo.png"
            alt="Logo Pijamas Mi Ángel"
            fill
            sizes="(max-width: 768px) 112px, 112px"
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Collection Subtitle with Horizontal Dividing Lines */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="w-full flex items-center justify-center gap-2 mb-1"
      >
        <span className="h-[1px] w-8 sm:w-12 bg-[#D8C7BE]" />
        <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-[#7C6E67]">
          Colección Sweet Dreams
        </span>
        <span className="h-[1px] w-8 sm:w-12 bg-[#D8C7BE]" />
      </motion.div>

      {/* Main Luxury Brand Serif Title */}
      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.45 }}
        className="font-serif text-3xl sm:text-[40px] font-normal tracking-tight text-[#813544] leading-tight mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
      >
        Pijamas Mi Ángel
      </motion.h1>

      {/* Origin / Subtitle */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.24, duration: 0.45 }}
        className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#554944] font-semibold mb-4"
      >
        Confección & Venta Mayorista · Colombia 🇨🇴
      </motion.p>

      {/* 4 Brand Pills: Row of 3 + 1 centered Sage Green */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.45 }}
        className="w-full flex flex-col items-center gap-2"
      >
        {/* Row of 3 Cream Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {/* Rib Premium */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF3EE]/95 border border-[#E8DDD4] text-[#4A3E39] text-[10.5px] font-sans font-semibold tracking-wider shadow-sm">
            <svg
              className="w-3.5 h-3.5 text-[#8A6F5B]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span>RIB PREMIUM</span>
          </span>

          {/* Talla U */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF3EE]/95 border border-[#E8DDD4] text-[#4A3E39] text-[10.5px] font-sans font-semibold tracking-wider shadow-sm">
            <svg
              className="w-3.5 h-3.5 text-[#8A6F5B]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 6a4 4 0 0 0-8 0c0 1.5 1 2.5 2 3l-8 7h20l-8-7c1-.5 2-1.5 2-3Z" />
            </svg>
            <span>TALLA U</span>
          </span>

          {/* S · M · L */}
          <span className="px-4 py-1.5 rounded-full bg-[#FAF3EE]/95 border border-[#E8DDD4] text-[#4A3E39] text-[10.5px] font-sans font-semibold tracking-widest shadow-sm">
            S · M · L
          </span>
        </div>

        {/* Centered Sage Green Pill: Envíos Nacionales */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B7B64] text-white text-[10.5px] font-sans font-medium tracking-[0.18em] uppercase shadow-sm">
          <Truck className="w-3.5 h-3.5 text-white" />
          <span>ENVÍOS NACIONALES</span>
        </span>
      </motion.div>
    </header>
  );
}
