"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Truck, Sparkles, Scissors, ChevronDown } from "lucide-react";

export default function BrandFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />,
      title: "Tela Rib Premium",
      desc: "Textura acanalada ultra suave, elástica y fresca que conserva su forma y color lavado tras lavado.",
    },
    {
      icon: <Scissors className="w-3.5 h-3.5 text-[#A54B5B]" />,
      title: "Tallas U & S • M • L",
      desc: "Diseños pensados para brindar ajuste perfecto, máxima comodidad y horma favorecedora.",
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-[#5E7959]" />,
      title: "Envíos a Todo el País",
      desc: "Despachos rápidos y asegurados con número de guía a cualquier rincón de Colombia.",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#7C6E67]" />,
      title: "Precios Mayoristas",
      desc: "Excelentes márgenes de ganancia para emprendedoras y boutiques desde 6 prendas.",
    },
  ];

  return (
    <div className="w-full select-none pt-2">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-[22px] bg-[#FCF6F2]/90 backdrop-blur-sm border border-[#EFE5E0] text-[#3B2F2A] shadow-sm transition-all hover:bg-white"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-sm">✨</span>
          <span className="font-serif text-[13.5px] font-medium text-[#2E2426]">
            ¿Por qué elegir nuestras pijamas?
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 rounded-full bg-white border border-[#E8DDD4] flex items-center justify-center text-[#7A6C66]"
        >
          <ChevronDown className="w-3.5 h-3.5" />
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
                  className="p-3.5 rounded-[18px] bg-white/95 border border-[#EFE5E0] shadow-sm text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-[#FAF3EE] border border-[#E8DDD4]">
                      {feat.icon}
                    </div>
                    <h4 className="font-serif text-xs font-semibold text-[#2E2426]">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-[#7A6C66] leading-relaxed">
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
