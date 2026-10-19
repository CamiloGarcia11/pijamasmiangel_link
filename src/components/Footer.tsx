"use client";

import React from "react";
import { MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-md mx-auto pt-6 pb-14 px-4 text-center select-none relative z-10">
      {/* Golden Delicate Flourish Heart (Matching Image 1) */}
      <div className="flex items-center justify-center mb-6">
        <svg
          className="w-10 h-6 text-[#C5A059]"
          viewBox="0 0 44 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 14c10 0 16 1 19-3 1.2-1.5 2.2-4.5 0.5-6-1.5-1.3-3.2-.2-2.5 1.8 0.8 2.2 3.2 5.5 4.8 7.2 1.8 1.8 3.5 1.5 5.2 0.8" />
        </svg>
      </div>

      {/* Social Quick Pills (Subtle, luxury styled) */}
      <div className="flex items-center justify-center gap-2.5 mb-4">
        <a
          href="https://wa.me/message/RLFHV672HSZ3D1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/80 border border-[#E8DDD4] text-[#4A3D40] shadow-sm hover:bg-white hover:text-brand-wine hover:scale-105 transition-all"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>

        <a
          href="https://www.tiktok.com/@pijamas_miangelpr?_r=1&_t=ZS-9AdWdJrSCCj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/80 border border-[#E8DDD4] text-[#4A3D40] shadow-sm hover:bg-white hover:text-brand-wine hover:scale-105 transition-all"
          aria-label="TikTok"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.58a8.28 8.28 0 0 0 4.84 1.55v-3.44a4.85 4.85 0 0 1-.94 0z" />
          </svg>
        </a>

        <a
          href="https://whatsapp.com/channel/0029VbBnOwm1NCrQWyXHHl2E"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/80 border border-[#E8DDD4] text-[#4A3D40] shadow-sm hover:bg-white hover:text-brand-wine hover:scale-105 transition-all"
          aria-label="Canal WhatsApp"
        >
          <svg
            className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="12" x="2" y="6" rx="2" />
            <path d="m16 10 4-3v10l-4-3" />
          </svg>
        </a>
      </div>

      {/* Brand Rights */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] font-sans uppercase font-medium tracking-widest text-[#7A6C66] mb-1">
        <span>Confección & Amor</span>
        <Heart className="w-3 h-3 text-[#A54B5B] fill-[#A54B5B] inline-block" />
        <span>Pijamas Mi Ángel PR</span>
      </div>

      <p className="font-sans text-[10px] uppercase tracking-wider text-[#9E8E87] font-normal mb-3">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>

      {/* Agency Signature */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A89891]">
        <span>Diseño exclusivo por</span>
        <span className="font-serif font-semibold text-[#813544]">VisionWeb</span>
      </div>
    </footer>
  );
}
