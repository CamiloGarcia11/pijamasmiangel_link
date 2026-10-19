"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playTapSound } from "@/lib/sound";
import {
  ShoppingBag,
  Video,
  ChevronRight,
} from "lucide-react";

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge: string;
  badgeColor: "sage" | "rose";
  iconType: "whatsapp" | "vip" | "catalogo" | "tiktok";
  texture: string;
  extraTag?: string;
}

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Sound micro-feedback
    playTapSound();

    // Soft luxury confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 32,
      spread: 55,
      origin: { x, y },
      colors: ["#FAF3EF", "#FBE4E2", "#7D8F74", "#C5A059", "#813544", "#FFFFFF"],
      ticks: 160,
      gravity: 1.1,
      scalar: 0.8,
    });
  };

  const renderIcon = () => {
    switch (link.iconType) {
      case "whatsapp":
        return (
          <div className="w-12 h-12 rounded-full bg-[#DDE7DA] flex items-center justify-center flex-shrink-0 text-[#4D6749]">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.45 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.2-.31a8.18 8.18 0 0 1-1.26-4.45c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.58c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29z" />
            </svg>
          </div>
        );
      case "vip":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FBE4E2] flex items-center justify-center flex-shrink-0 text-[#8E3E4B]">
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="12" x="2" y="6" rx="2" />
              <path d="m16 10 4-3v10l-4-3" />
            </svg>
          </div>
        );
      case "catalogo":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FBE7E3] flex items-center justify-center flex-shrink-0 text-[#8E3E4B]">
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
        );
      case "tiktok":
        return (
          <div className="w-12 h-12 rounded-full bg-[#FDE5E8] flex items-center justify-center flex-shrink-0 text-[#221C1E]">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.58a8.28 8.28 0 0 0 4.84 1.55v-3.44a4.85 4.85 0 0 1-.94 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.12 + index * 0.08,
        duration: 0.45,
        ease: "easeOut",
      }}
      className="relative w-full"
    >
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="group relative block w-full rounded-[24px] bg-[#FCF6F2] border border-[#EFE5E0] shadow-[0_6px_22px_-6px_rgba(160,120,120,0.12)] hover:shadow-[0_10px_28px_-6px_rgba(160,120,120,0.2)] hover:border-[#DFD2CB] transition-all duration-200 overflow-hidden min-h-[82px] p-3.5 sm:p-4"
      >
        {/* Right side pajama fabric texture preview seamlessly faded */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none overflow-hidden rounded-r-[24px]">
          <Image
            src={link.texture}
            alt=""
            fill
            sizes="180px"
            className="object-cover object-right"
          />
        </div>

        {/* Content layout: Left Icon + Center Text + Right Arrow */}
        <div className="relative z-10 flex items-center pr-10">
          {/* Left Round Pastel Icon */}
          <div className="mr-3.5 flex-shrink-0">
            {renderIcon()}
          </div>

          {/* Text Area */}
          <div className="flex-1 min-w-0 text-left">
            {/* Category / Status Badge */}
            <p
              className={`text-[10px] sm:text-[10.5px] font-sans font-bold uppercase tracking-[0.16em] mb-0.5 ${
                link.badgeColor === "sage"
                  ? "text-[#5E7959]"
                  : "text-[#A54B5B]"
              }`}
            >
              {link.badge}
            </p>

            {/* Title in High-Contrast Luxury Serif */}
            <h2 className="font-serif text-[17.5px] sm:text-[19px] font-normal tracking-tight text-[#1E1919] leading-snug truncate group-hover:text-[#813544] transition-colors">
              {link.title}
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[11px] sm:text-[11.5px] text-[#7A6E71] font-normal tracking-wide truncate mt-0.5">
              {link.subtitle}
            </p>

            {/* Optional Extra Tag (like TENDENCIAS on TikTok) */}
            {link.extraTag && (
              <div className="mt-1.5">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#FCE3E7] text-[#8E3E4B] text-[9.5px] font-sans font-bold uppercase tracking-wider shadow-sm">
                  {link.extraTag}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Circular Arrow Button */}
        <div className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#4A3D40] group-hover:scale-110 group-hover:text-brand-wine transition-all">
          <ChevronRight className="w-4 h-4" />
        </div>
      </motion.a>
    </motion.div>
  );
}
