"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Truck, Sparkles, Scissors, ChevronDown } from "lucide-react";

export default function BrandFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: <Sparkles className="w-4 h-4 text-amber-600" />,
      title: "Tela Rib Premium",
      desc: "Textura acanalada ultra suave, elástica y fresca que conserva su forma y color lavado tras lavado.",
    },
    {
      icon: <Scissors className="w-4 h-4 text-rose-600" />,
      title: "Tallas U & S • M • L",
      desc: "Diseños pensados para brindar ajuste perfecto, máxima libertad de movimiento y horma hermosa.",
    },
    {
      icon: <Truck className="w-4 h-4 text-emerald-600" />,
      title: "Envíos a Todo el País",
      desc: "Despachos rápidos y protegidos con número de guía a cualquier rincón de Colombia.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-indigo-600" />,
      title: "Precios de Fábrica Mayoristas",
      desc: "Excelentes márgenes de ganancia para emprendedoras y boutiques desde 6 prendas.",
    },
  ];

  return (
    <div className="w-full mt-4 select-none">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between p-4 sm:p-5 rounded-[24px] bg-white/90 backdrop-blur-sm border-2 border-brand-charcoal text-brand-charcoal shadow-[0_4px_0_#1E1E1E] transition-all hover:bg-white"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-pink border border-brand-charcoal flex items-center justify-center text-sm shadow-[0_2px_0_#1E1E1E]">
            🎀
          </div>
          <span className="font-cutie text-sm font-bold tracking-tight text-brand-charcoal">
            ¿Por qué amar nuestras pijamitas?
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-7 h-7 rounded-full bg-brand-neutral border border-brand-charcoal flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-brand-charcoal" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5">
              {features.map((feat, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-white border border-brand-charcoal/30 shadow-[0_2px_0_#1E1E1E]"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-brand-pinkSoft border border-brand-charcoal/20">
                      {feat.icon}
                    </div>
                    <h4 className="font-cutie text-xs font-bold text-brand-charcoal">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-charcoal/75 leading-relaxed font-semibold">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
