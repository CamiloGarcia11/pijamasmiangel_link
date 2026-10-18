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
      desc: "Textura acanalada ultra suave, elástica y resistente al lavado sin perder color ni forma.",
    },
    {
      icon: <Scissors className="w-4 h-4 text-rose-600" />,
      title: "Tallas U & S • M • L",
      desc: "Patronaje pensado para brindar ajuste perfecto, comodidad total y siluetas favorecedoras.",
    },
    {
      icon: <Truck className="w-4 h-4 text-emerald-600" />,
      title: "Envíos a Todo el País",
      desc: "Despachos rápidos y seguros con guía de rastreo a cualquier ciudad y municipio.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-indigo-600" />,
      title: "Precios Mayoristas",
      desc: "Márgenes excepcionales para que emprendas tu propio negocio de pijamas.",
    },
  ];

  return (
    <div className="w-full mt-3 select-none">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-charcoal text-brand-charcoal shadow-[0_4px_0_#1E1E1E] transition-all hover:bg-white"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-pinkSoft border border-brand-charcoal flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-brand-charcoal" />
          </div>
          <span className="font-sans text-xs uppercase font-extrabold tracking-wider">
            ¿Por qué elegir nuestras pijamas?
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
              {features.map((feat, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-white border border-brand-charcoal/30 shadow-[0_2px_0_#1E1E1E]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 rounded-md bg-brand-neutral border border-brand-charcoal/20">
                      {feat.icon}
                    </div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-charcoal/70 leading-relaxed font-medium">
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
