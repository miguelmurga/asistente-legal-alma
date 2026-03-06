import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import WikiGallery from "@/components/ui/PromoGallery";
import LegalWikiArticles from "@/components/ui/LegalWikiArticles";
import FooterSection from "@/components/ui/FooterSection";

export const metadata: Metadata = {
  title: "Abogado en Colima | Divorcios, Pensiones y Sucesiones - Lic. Alma Liset",
  description: "El mejor despacho de abogados en Colima. Especialistas en derecho familiar, civil y mercantil. Divorcios exprés, pensiones alimenticias, juicios sucesorios y cobro de pagarés. Asesoría jurídica profesional y confidencial.",
  keywords: "abogado colima, abogada colima, mejores abogados en colima, divorcio incausado colima, pension alimenticia colima, abogados familiares colima, despacho juridico colima, juicios sucesorios colima, testamentos colima, abogado civil colima, asesoria legal colima",
  authors: [{ name: "Lic. Alma Liset Encarnación Anaya" }],
  creator: "Despacho Jurídico Alma Liset",
  publisher: "Despacho Jurídico Alma Liset",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://asistente-legal-alma.vercel.app/galeria',
  },
  openGraph: {
    title: "Abogado Familiar y Civil en Colima | Consultas Legales",
    description: "Servicios jurídicos especializados en el Estado de Colima. Divorcios, pensiones, contratos y defensa patrimonial. Consulte hoy mismo a nuestros expertos legales.",
    url: 'https://asistente-legal-alma.vercel.app/galeria',
    siteName: 'Despacho Jurídico Alma Liset',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Despacho Jurídico Colima',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function GaleriaPage() {
  // Schema.org structured data for LocalBusiness and LegalService to boost Google Local Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Despacho Jurídico Lic. Alma Liset",
    "image": "https://asistente-legal-alma.vercel.app/images/logo.png",
    "@id": "https://asistente-legal-alma.vercel.app",
    "url": "https://asistente-legal-alma.vercel.app",
    "telephone": "+523122251010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. San Fernando #533, Int. 12, Plaza Roma",
      "addressLocality": "Colima",
      "addressRegion": "Col",
      "postalCode": "28000",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.24997,
      "longitude": -103.72714
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "description": "Despacho de abogados en Colima especializado en derecho familiar, civil y mercantil. Trámites de divorcio, pensiones alimenticias, contratos y juicios.",
    "areaServed": "Estado de Colima"
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <WikiGallery />
        <LegalWikiArticles />
      </main>
      <FooterSection />
    </div>
  );
}
