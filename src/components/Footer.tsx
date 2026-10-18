"use client";

import React from "react";
import { MessageCircle, Sparkles, Heart, Globe, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-md mx-auto pt-6 pb-12 px-4 text-center select-none">
      {/* Social quick pills */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <a
          href="https://wa.me/message/RLFHV672HSZ3D1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white border border-brand-charcoal text-brand-charcoal shadow-[0_2px_0_#1E1E1E] hover:bg-brand-pink transition-transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
        </a>

        <a
          href="https://www.tiktok.com/@pijamas_miangelpr?_r=1&_t=ZS-9AdWdJrSCCj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white border border-brand-charcoal text-brand-charcoal shadow-[0_2px_0_#1E1E1E] hover:bg-brand-pink transition-transform hover:scale-110"
          aria-label="TikTok"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.58a8.28 8.28 0 0 0 4.84 1.55v-3.44a4.85 4.85 0 0 1-.94 0z" />
          </svg>
        </a>

        <a
          href="https://whatsapp.com/channel/0029VbBnOwm1NCrQWyXHHl2E"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white border border-brand-charcoal text-brand-charcoal shadow-[0_2px_0_#1E1E1E] hover:bg-brand-pink transition-transform hover:scale-110"
          aria-label="Canal WhatsApp"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
        </a>
      </div>

      {/* Brand Rights */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-sans uppercase font-bold tracking-widest text-brand-charcoal/70 mb-1">
        <span>Confección & Amor</span>
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
        <span>Pijamas Mi Ángel PR</span>
      </div>

      <p className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/50 font-semibold mb-4">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>

      {/* VisionWeb Agency Signature Badge */}
      <div className="pt-3 border-t border-brand-charcoal/15 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-brand-charcoal/50">
          Creado por
        </span>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border-[1.5px] border-brand-charcoal shadow-[0_3px_0_#1E1E1E] hover:shadow-[0_4px_0_#1E1E1E] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#1E1E1E] transition-all cursor-default">
          <div className="w-2 h-2 rounded-full bg-brand-foliage animate-pulse" />
          <span className="font-serif font-black text-xs tracking-wider text-brand-charcoal">
            VisionWeb
          </span>
          <span className="text-[8px] font-sans font-extrabold uppercase px-1.5 py-0.5 rounded bg-brand-pink border border-brand-charcoal/30 text-brand-charcoal tracking-wider">
            STUDIO
          </span>
        </div>
      </div>
    </footer>
  );
}
