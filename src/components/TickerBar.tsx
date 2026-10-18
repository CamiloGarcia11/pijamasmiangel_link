"use client";

import React from "react";

const tickerItems = [
  "💖 RIB PREMIUM 100% SUAVE",
  "📦 ENVÍOS A TODO EL PAÍS",
  "✨ PRECIOS MAYORISTAS & DETAL",
  "🧵 TALLAS U • S • M • L",
  "⭐ CONFECCIÓN COLOMBIANA",
  "💬 ATENCIÓN DIRECTA POR WHATSAPP",
];

export default function TickerBar() {
  return (
    <div className="w-full bg-brand-charcoal text-white py-2 overflow-hidden border-y-2 border-brand-charcoal select-none shadow-sm">
      <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <span
            key={idx}
            className="mx-4 text-[11px] font-sans font-bold tracking-[0.2em] uppercase flex items-center gap-2"
          >
            <span>{item}</span>
            <span className="text-brand-pink text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
