import React from "react";
import LegalAssistantChat from "@/components/ui/LegalAssistantChat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asistente Legal Virtual | Alma Liset - Abogada Colima",
  description: "Orientación inicial gratuita sobre divorcios, pensiones, sucesiones, contratos y más en Colima. Asistente legal de la Lic. Alma.",
};

export default function AsistentePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center md:p-4">
      <LegalAssistantChat />
    </div>
  );
}
