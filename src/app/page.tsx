"use client";

import React, { useState } from "react";
import BackgroundWatermark from "@/components/BackgroundWatermark";
import HeaderProfile from "@/components/HeaderProfile";
import TickerBar from "@/components/TickerBar";
import PhotoCarousel from "@/components/PhotoCarousel";
import LinkCard, { LinkItem } from "@/components/LinkCard";
import BrandFeatures from "@/components/BrandFeatures";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// 4 Links structured in the EXACT order marked with numbers in Image 2:
// 1. Atención por WhatsApp
// 2. Canal VIP: Fotos y Videos
// 3. Catálogo Mayorista
// 4. TikTok Oficial
const LINKS_DATA: LinkItem[] = [
  {
    id: "whatsapp-directo",
    title: "Atención por WhatsApp",
    subtitle: "Asesoría personalizada y pedidos al...",
    url: "https://wa.me/message/RLFHV672HSZ3D1",
    badge: "ASESOR EN LÍNEA",
    badgeColor: "sage",
    iconType: "whatsapp",
    texture: "/card-texture-whatsapp.png",
  },
  {
    id: "canal-vip",
    title: "Canal VIP: Fotos y Videos",
    subtitle: "Lanzamientos exclusivos, prendas...",
    url: "https://whatsapp.com/channel/0029VbBnOwm1NCrQWyXHHl2E",
    badge: "COMUNIDAD VIP",
    badgeColor: "rose",
    iconType: "vip",
    texture: "/card-texture-vip.png",
  },
  {
    id: "catalogo-mayorista",
    title: "Catálogo Mayorista",
    subtitle: "RIB PREMIUM • PRECIOS DIRECTOS DE...",
    url: "https://canva.link/at1rbmr9inloqo5",
    badge: "MÁS VISITADO",
    badgeColor: "rose",
    iconType: "catalogo",
    texture: "/card-texture-catalogo.png",
  },
  {
    id: "tiktok-oficial",
    title: "TikTok Oficial",
    subtitle: "@pijamas_miangel",
    url: "https://www.tiktok.com/@pijamas_miangelpr?_r=1&_t=ZS-9AdWdJrSCCj",
    badge: "TRENDING",
    badgeColor: "rose",
    iconType: "tiktok",
    texture: "/card-texture-tiktok.png",
    extraTag: "TENDENCIAS",
  },
];

export default function Home() {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <main className="relative min-h-screen min-h-[100dvh] bg-[#FAF3EF] overflow-x-hidden flex flex-col justify-between selection:bg-[#813544] selection:text-white">
      {/* Background silk, flowers & ambient luxury glows */}
      <BackgroundWatermark />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Profile Header */}
        <div className="w-full max-w-md mx-auto">
          <HeaderProfile onOpenShare={() => setShareOpen(true)} />
        </div>

        {/* Sage Green Luxury Ribbon Ticker */}
        <div className="w-full my-2.5">
          <TickerBar />
        </div>

        {/* Main Content Container matching Image 1 */}
        <div className="w-full max-w-md mx-auto px-4 py-3 sm:py-4 flex flex-col gap-3.5 sm:gap-4">
          {/* Sweet Dreams Photo Carousel */}
          <PhotoCarousel />

          {/* Links List in the EXACT order: WhatsApp -> VIP -> Catálogo -> TikTok */}
          <div className="flex flex-col gap-3 sm:gap-3.5 pt-1">
            {LINKS_DATA.map((link, idx) => (
              <LinkCard key={link.id} link={link} index={idx} />
            ))}
          </div>

          {/* Brand & Fabric Features Accordion */}
          <div className="pt-1">
            <BrandFeatures />
          </div>
        </div>
      </div>

      {/* Footer with Golden Flourish Heart & Silk waves */}
      <div className="relative z-10 w-full mt-2">
        <Footer />
      </div>

      {/* Sage Green Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Share & QR Code Modal */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </main>
  );
}
