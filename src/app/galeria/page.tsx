import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import WikiGallery from "@/components/ui/PromoGallery";
import FooterSection from "@/components/ui/FooterSection";

export const metadata: Metadata = {
  title: "Wiki Legal Colima | Código Civil y Servicios Jurídicos Especializados",
  description: "Consulte nuestra Wiki informativa sobre el Código Civil de Colima. Información detallada sobre divorcios, pensión alimenticia, sucesiones y contratos. Asesoría legal profesional en el Estado de Colima.",
  keywords: "abogado colima, abogada colima, codigo civil colima 2024, divorcio incausado colima, pension alimenticia colima, sucesiones colima, ley colima, despacho juridico colima",
  openGraph: {
    title: "Wiki Legal Colima - Guía de Derechos y Obligaciones Civiles",
    description: "Todo lo que necesita saber sobre la legislación civil en Colima y servicios de representación legal profesional.",
    images: ["/images/logo.png"],
  }
};

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-1">
        {/* The component itself handles the internal padding and Hero style */}
        <WikiGallery />
      </main>
      <FooterSection />
    </div>
  );
}
