import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import PromoGallery from "@/components/ui/PromoGallery";
import FooterSection from "@/components/ui/FooterSection";

export const metadata: Metadata = {
  title: "Galería de Servicios Legales | Abogados en Colima - Lic. Alma Liset",
  description: "Explore nuestras áreas de especialidad en Derecho Civil, Familiar y Mercantil en Colima a través de nuestra galería visual. Servicios legales profesionales con resultados garantizados.",
  keywords: "abogado colima, abogada colima, servicios legales, divorcios colima, pension alimenticia, derecho mercantil",
};

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <PromoGallery />
      </main>
      <FooterSection />
    </div>
  );
}
