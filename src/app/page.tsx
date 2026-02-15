import React from "react";
import { Metadata } from "next";

// Importación de componentes de UI
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/ui/ServicesSection";
import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import FooterSection from "@/components/ui/FooterSection";

// Importación de iconos
import {
    HeartCrack, Baby, ScrollText, HeartHandshake, Banknote,
    FileSignature, ShieldAlert, Fingerprint, CalendarClock
} from "lucide-react";

// SEO: Metadatos específicos para la página de inicio
export const metadata: Metadata = {
  title: "Abogados en Colima | Asesoría Legal Familiar, Civil y Mercantil - Alma Liset",
  description: "Despacho legal en Colima: Divorcios, Pensiones Alimenticias, Testamentos, Contratos y más. Abogadas expertas en derecho Familiar, Civil y Mercantil. ¡Protegemos tus derechos!",
  // El resto de los metadatos (openGraph, twitter) se heredan del layout.tsx
};

export default function Home() {
    const servicesData = [
        { id: 1, title: "Divorcios", description: "Disolución del vínculo matrimonial, ya sea de mutuo acuerdo o contencioso, protegiendo sus derechos.", icon: 'HeartCrack' },
        { id: 2, title: "Pensiones Alimenticias", description: "Aseguramiento del sustento para hijos o cónyuges, cálculo justo y ejecución de pagos.", icon: 'Baby' },
        { id: 3, title: "Sucesiones (Testamentos)", description: "Juicios sucesorios intestamentarios y testamentarios para la correcta transmisión de bienes y patrimonio.", icon: 'ScrollText' },
        { id: 4, title: "Concubinatos", description: "Reconocimiento legal de la unión libre para garantizar derechos de pareja y familia.", icon: 'HeartHandshake' },
        { id: 5, title: "Cobro de Pagarés", description: "Recuperación de deuda y cartera vencida mediante juicios mercantiles ejecutivos.", icon: 'Banknote' },
        { id: 6, title: "Contratos", description: "Elaboración y revisión de contratos civiles y mercantiles para prevenir conflictos futuros.", icon: 'FileSignature' },
        { id: 7, title: "Órdenes de Protección", description: "Medidas legales urgentes para garantizar la seguridad física y emocional de las personas.", icon: 'ShieldAlert' },
        { id: 8, title: "Juicios de Paternidad", description: "Procesos de reconocimiento o desconocimiento de paternidad (ADN) y filiación.", icon: 'Fingerprint' },
        { id: 9, title: "Convivencias", description: "Regulación de regímenes de visitas y convivencias familiares velando por el interés superior del menor.", icon: 'CalendarClock' }
    ];

    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <ServicesSection services={servicesData} />
                <AboutSection />
                <ContactSection />
            </main>
            <FooterSection />
        </>
    );
}