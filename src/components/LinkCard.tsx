"use client";

import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playTapSound } from "@/lib/sound";
import {
  Sparkles,
  ShoppingBag,
  Video,
  MessageCircle,
  Flame,
  ArrowUpRight,
} from "lucide-react";

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  highlight?: boolean;
  tags?: string[];
  iconType: "catalog" | "channel" | "whatsapp" | "tiktok";
  buttonColor?: string;
  accentColor?: string;
}

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Sound micro-feedback
    playTapSound();

    // Trigger sweet confetti burst from click coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: link.highlight ? 45 : 30,
      spread: 60,
      origin: { x, y },
      colors: ["#FDE2E8", "#FCE4EC", "#5C7A3E", "#1E1E1E", "#D4AF37", "#FFFFFF"],
      ticks: 180,
      gravity: 1.1,
      scalar: 0.85,
    });
  };

  const renderIcon = () => {
    switch (link.iconType) {
      case "catalog":
        return <ShoppingBag className="w-5 h-5 text-brand-charcoal" />;
      case "channel":
        return <Video className="w-5 h-5 text-brand-charcoal" />;
      case "whatsapp":
        return <MessageCircle className="w-5 h-5 text-brand-charcoal" />;
      case "tiktok":
        return (
          <svg
            className="w-5 h-5 text-brand-charcoal fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.49V8.58a8.28 8.28 0 0 0 4.84 1.55v-3.44a4.85 4.85 0 0 1-.94 0z" />
          </svg>
        );
      default:
        return <Sparkles className="w-5 h-5 text-brand-charcoal" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15 + index * 0.09,
        duration: 0.45,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative w-full"
    >
      {/* Top Floating Badge if highlighted */}
      {link.badge && (
        <div className="absolute -top-3.5 left-6 z-20">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-sans font-black tracking-widest uppercase border-[1.5px] border-brand-charcoal shadow-[0_2px_0_#1E1E1E] ${
              link.highlight
                ? "bg-brand-foliage text-white"
                : link.iconType === "whatsapp"
                ? "bg-emerald-400 text-brand-charcoal"
                : "bg-brand-charcoal text-white"
            }`}
          >
            {link.highlight ? (
              <Flame className="w-3 h-3 text-amber-300 fill-amber-300 animate-bounce" />
            ) : link.iconType === "whatsapp" ? (
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-ping inline-block" />
            ) : (
              <Sparkles className="w-3 h-3 text-pink-300 fill-pink-300" />
            )}
            <span>{link.badge}</span>
          </motion.div>
        </div>
      )}

      {/* Main Link Button Pill with spacious padding and cutie typography */}
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative block w-full rounded-[26px] p-5 sm:p-6 border-2 border-brand-charcoal transition-all duration-200 overflow-hidden ${
          link.highlight
            ? "bg-white shadow-[0_6px_0_#1E1E1E] hover:shadow-[0_8px_0_#1E1E1E] active:shadow-[0_2px_0_#1E1E1E] active:translate-y-1"
            : "bg-white/95 backdrop-blur-sm shadow-[0_5px_0_#1E1E1E] hover:shadow-[0_7px_0_#1E1E1E] active:shadow-[0_2px_0_#1E1E1E] active:translate-y-1"
        }`}
      >
        {/* Subtle sliding shine animation */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent pointer-events-none" />

        {/* Highlight ribbon corner glow */}
        {link.highlight && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-pinkSoft/60 to-transparent rounded-bl-full pointer-events-none" />
        )}

        <div className="relative flex items-center gap-4 sm:gap-5">
          {/* Icon Box with styled border */}
          <div
            className={`flex-shrink-0 w-13 h-13 sm:w-14 sm:h-14 p-3 rounded-2xl flex items-center justify-center border-2 border-brand-charcoal shadow-[0_3px_0_#1E1E1E] transition-transform duration-300 group-hover:rotate-6 ${
              link.highlight
                ? "bg-brand-pink"
                : link.iconType === "whatsapp"
                ? "bg-emerald-100"
                : link.iconType === "channel"
                ? "bg-rose-100"
                : "bg-brand-neutral"
            }`}
          >
            {renderIcon()}
          </div>

          {/* Text Content with sweet cutie font */}
          <div className="flex-1 min-w-0 text-left">
            <h2 className="font-cutie text-lg sm:text-[20px] font-bold tracking-tight text-brand-charcoal leading-snug group-hover:text-brand-foliage transition-colors">
              {link.title}
            </h2>

            <p className="font-sans text-xs text-brand-charcoal/75 line-clamp-1 mt-1 font-semibold tracking-wide">
              {link.subtitle}
            </p>

            {/* Micro Tags */}
            {link.tags && link.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2.5">
                {link.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-2.5 py-0.5 rounded-full bg-brand-pinkSoft text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal border border-brand-charcoal/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Arrow Icon */}
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-neutral border border-brand-charcoal flex items-center justify-center shadow-[0_2px_0_#1E1E1E] group-hover:bg-brand-charcoal group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
