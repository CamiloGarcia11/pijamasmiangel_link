"use client";

import React, { useState } from "react";
import BackgroundWatermark from "@/components/BackgroundWatermark";
import HeaderProfile from "@/components/HeaderProfile";
import TickerBar from "@/components/TickerBar";
import LinkCard, { LinkItem } from "@/components/LinkCard";
import BrandFeatures from "@/components/BrandFeatures";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

const LINKS_DATA: LinkItem[] = [
  {
    id: "catalogo-mayorista",
    title: "Catálogo Mayorista 💖",
    subtitle: "RIB PREMIUM • PRECIOS DIRECTOS DE FÁBRICA",
    url: "https://canva.link/at1rbmr9inloqo5",
    badge: "MÁS VISITADO 🔥",
    highlight: true,
    tags: ["Rib Premium", "Talla U", "S • M • L"],
    iconType: "catalog",
  },
  {
    id: "canal-vip",
    title: "Canal VIP: Fotos y Videos 💖🫶🏻",
    subtitle: "Lanzamientos exclusivos, prendas reales y novedades",
    url: "https://whatsapp.com/channel/0029VbBnOwm1NCrQWyXHHl2E",
    badge: "COMUNIDAD VIP ✨",
    highlight: false,
    tags: ["Contenido Diario", "Videos Reales"],
    iconType: "channel",
  },
  {
    id: "whatsapp-directo",
    title: "Atención por WhatsApp 💬",
    subtitle: "Asesoría personalizada y pedidos al instante",
    url: "https://wa.me/message/RLFHV672HSZ3D1",
    badge: "ASESOR EN LÍNEA 🟢",
    highlight: false,
    tags: ["Respuesta Rápida", "Despachos"],
    iconType: "whatsapp",
  },
  {
    id: "tiktok-oficial",
    title: "TikTok Oficial 🎵",
    subtitle: "@pijamas_miangelpr • Tendencias, tips y outfits",
    url: "https://www.tiktok.com/@pijamas_miangelpr?_r=1&_t=ZS-9AdWdJrSCCj",
    badge: "TRENDING 🚀",
    highlight: false,
    tags: ["@pijamas_miangelpr", "Tendencias"],
    iconType: "tiktok",
  },
];

export default function Home() {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <main className="relative min-h-screen min-h-[100dvh] bg-[#FDE2E8] overflow-x-hidden flex flex-col justify-between">
      {/* Background with watermark logo and ambient glows */}
      <BackgroundWatermark />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Profile Header */}
        <div className="w-full max-w-md mx-auto">
          <HeaderProfile onOpenShare={() => setShareOpen(true)} />
        </div>

        {/* Dynamic Continuous Luxury Ribbon Ticker */}
        <div className="w-full my-2">
          <TickerBar />
        </div>

        {/* Main Content Container: Links & Interactivity */}
        <div className="w-full max-w-md mx-auto px-4 py-4 flex flex-col gap-4">
          {/* Quick Notice Banner / Attention Grabber */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-charcoal/30 p-3 flex items-center justify-between shadow-[0_2px_0_#1E1E1E]"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <p className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal">
                ¡Nueva Colección Rib Premium Disponible!
              </p>
            </div>
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
          </motion.div>

          {/* Links List */}
          <div className="flex flex-col gap-3.5">
            {LINKS_DATA.map((link, idx) => (
              <LinkCard key={link.id} link={link} index={idx} />
            ))}
          </div>

          {/* Fabric & Brand Features Accordion */}
          <BrandFeatures />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <Footer />
      </div>

      {/* Floating WhatsApp Action for Quick Chat */}
      <FloatingWhatsApp />

      {/* Share & QR Code Modal */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </main>
  );
}
