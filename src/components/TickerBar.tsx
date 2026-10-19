"use client";

import React from "react";

export default function TickerBar() {
  const tickerText = "RIB PREMIUM 100% SUAVE  ·  ENVÍOS A TODO EL PAÍS";

  return (
    <div className="w-full bg-[#5C6B55] text-[#ECE7DB] py-2.5 overflow-hidden select-none border-y border-[#52604C] shadow-sm">
      <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 mx-5 text-[11px] font-sans font-medium tracking-[0.24em] uppercase"
          >
            <span className="text-[#C5A059] text-xs">✦</span>
            <span>{tickerText}</span>
            <span className="text-[#C5A059] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
