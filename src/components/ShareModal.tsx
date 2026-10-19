"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Share2, QrCode } from "lucide-react";
import Image from "next/image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : "https://pijamasmiangel.com";
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Pijamas Mi Ángel PR",
          text: "¡Descubre la nueva colección Sweet Dreams de Pijamas Mi Ángel y catálogo mayorista! ✨",
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      handleCopy();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm rounded-[28px] bg-[#FCF6F2] border border-[#EFE5E0] p-6 shadow-[0_16px_40px_rgba(140,100,100,0.2)] z-10 text-[#241D1E]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 p-2 rounded-full border border-[#E8DDD4] hover:bg-white text-[#7A6C66] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-center mt-1 mb-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF3EE] border border-[#E8DDD4] mb-2 shadow-sm text-brand-wine">
                <QrCode className="w-6 h-6 text-[#813544]" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#813544] tracking-tight">
                Compartir Perfil
              </h3>
              <p className="text-[10.5px] uppercase font-sans tracking-[0.2em] text-[#786D70] mt-1 font-semibold">
                Pijamas Mi Ángel PR
              </p>
            </div>

            {/* QR Code Graphic Box */}
            <div className="flex flex-col items-center justify-center p-4 rounded-[20px] bg-[#FAF3EE] border border-[#E8DDD4] mb-4">
              <div className="relative w-40 h-40 bg-white p-3 rounded-2xl border border-[#E8DDD4] flex items-center justify-center shadow-sm">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#382D30]"
                  fill="currentColor"
                >
                  <rect x="10" y="10" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <rect x="16" y="16" width="12" height="12" rx="1.5" />
                  <rect x="66" y="10" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <rect x="72" y="16" width="12" height="12" rx="1.5" />
                  <rect x="10" y="66" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <rect x="16" y="72" width="12" height="12" rx="1.5" />
                  <rect x="42" y="12" width="5" height="10" />
                  <rect x="52" y="15" width="6" height="5" />
                  <rect x="42" y="26" width="10" height="5" />
                  <rect x="12" y="42" width="8" height="5" />
                  <rect x="25" y="45" width="6" height="8" />
                  <rect x="36" y="38" width="5" height="12" />
                  <rect x="48" y="45" width="14" height="6" />
                  <rect x="68" y="40" width="8" height="6" />
                  <rect x="80" y="45" width="10" height="8" />
                  <rect x="45" y="60" width="8" height="8" />
                  <rect x="60" y="62" width="10" height="5" />
                  <rect x="75" y="60" width="6" height="12" />
                  <rect x="40" y="78" width="12" height="6" />
                  <rect x="60" y="75" width="8" height="10" />
                  <rect x="75" y="80" width="12" height="6" />
                </svg>

                {/* Central mini logo emblem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E8DDD4] flex items-center justify-center shadow-md overflow-hidden p-1">
                    <Image
                      src="/luxury-logo.png"
                      alt="Logo A"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-sans uppercase font-medium tracking-wider text-[#8A7B74] mt-2">
                Escanea para abrir en el celular 📱
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#813544] hover:bg-[#6D2B38] text-white font-sans text-xs uppercase font-medium tracking-wider transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>¡Enlace Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Enlace</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNativeShare}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF3EE] border border-[#E8DDD4] text-[#3B2F2A] font-sans text-xs uppercase font-medium tracking-wider transition-colors shadow-sm"
              >
                <Share2 className="w-4 h-4 text-brand-wine" />
                <span>Compartir</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
