import React from "react";
import { Metadata } from "next";

// Importación de componentes de UI
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import ServicesSection, { Service } from "@/components/ui/ServicesSection";
import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import FooterSection from "@/components/ui/FooterSection";

// SEO: Metadatos específicos para la página de inicio
export const metadata: Metadata = {
  title: "Despacho Jurídico Lic. Alma Liset | Derecho Civil, Familiar y Mercantil",
  description: "Servicios legales especializados en materia Civil, Familiar y Mercantil en Colima. Representación jurídica profesional y resultados técnicos para la protección de sus derechos.",
};

export default function Home() {
    const servicesData: Service[] = [
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
        <div className="flex flex-col min-h-screen bg-slate-50 pb-32 md:pb-40">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Massive Spacing between Hero and Services */}
                <div className="h-24 md:h-48 bg-slate-50" />

                <ServicesSection services={servicesData} />

                {/* Massive Spacing between Services and About */}
                <div className="h-24 md:h-48 bg-white" />

                <AboutSection />

                {/* Contact Section starts with its own top radius and margin */}
                <ContactSection />
            </main>
            <FooterSection />
        </div>
    );
}