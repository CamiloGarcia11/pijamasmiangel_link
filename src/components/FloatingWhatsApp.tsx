"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import { playTapSound } from "@/lib/sound";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting message after 2.5s
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playTapSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 28,
      spread: 50,
      origin: { x, y },
      colors: ["#7D8F74", "#FAF3EF", "#FFFFFF", "#813544"],
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            className="mb-2 relative bg-[#FCF6F2] border border-[#E8DDD4] py-1.5 px-3 rounded-2xl shadow-[0_6px_20px_rgba(140,110,110,0.15)] flex items-center gap-2 max-w-[210px]"
          >
            <span className="w-2 h-2 rounded-full bg-[#6B7B64] animate-ping" />
            <p className="text-[10.5px] font-sans font-bold text-[#3B2F2A] uppercase tracking-wider leading-tight">
              ¿Dudas? ¡Escríbenos ya!
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#8A7B74] hover:text-[#3B2F2A] p-0.5"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Small triangle arrow pointer */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#FCF6F2] border-b border-r border-[#E8DDD4] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/message/RLFHV672HSZ3D1"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-[#64765E] hover:bg-[#586953] flex items-center justify-center text-white shadow-[0_6px_20px_rgba(90,115,85,0.4)] border border-[#7D8F76] transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.45 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.2-.31a8.18 8.18 0 0 1-1.26-4.45c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.58c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29z" />
        </svg>
      </motion.a>
    </div>
  );
}
