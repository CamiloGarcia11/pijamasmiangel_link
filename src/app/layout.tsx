import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pijamasmiangel.com"),
  authors: [{ name: "VisionWeb" }],
  creator: "VisionWeb",
  title: "Pijamas Mi Ángel PR | Catálogo Mayorista y Enlaces Oficiales",
  description:
    "Descubre nuestra colección exclusiva de pijamas Rib Premium, catálogo mayorista, atención directa por WhatsApp y canal VIP.",
  keywords: [
    "pijamas",
    "pijamas mayoristas",
    "rib premium",
    "pijamas mi angel",
    "colombia",
    "moda femenina",
    "talla u",
  ],
  openGraph: {
    title: "Pijamas Mi Ángel PR | Enlaces Oficiales",
    description: "Catálogo Mayorista • Rib Premium • Atención Inmediata",
    images: ["/logo.png"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDE2E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen selection:bg-brand-charcoal selection:text-white">
        {children}
      </body>
    </html>
  );
}
