import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

// SEO: Definición de metadatos base y para redes sociales
export const metadata: Metadata = {
  // URL base para resolver rutas relativas (importante para OG images)
  metadataBase: new URL("https://asistente-legal-alma.vercel.app"),

  // Plantilla de título para un branding consistente
  title: {
    template: "%s | Alma Liset - Asesoría Legal",
    default: "Alma EncarnaciónAbogada & Consultora",
  },
  description: "Alma Encarnación: Abogada y Consultora en Colima. Especialista en derecho Familiar, Civil y Mercantil, ofreciendo soluciones efectivas en divorcios, pensiones, testamentos y contratos. Tu respaldo legal.",
  // Metadatos para Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Alma Liset - Asesoría Legal en Colima",
    description: "Soluciones jurídicas integrales en materia Familiar, Civil y Mercantil.",
url: "https://asistente-legal-alma.vercel.app",
    siteName: "Alma Liset | Asesoría Legal",
    images: [
      {
        url: "/images/oficina-legal.png", // URL absoluta en producción
        width: 1200,
        height: 630,
        alt: "Oficina de Asesoría Legal - Alma Liset",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  // Metadatos para Twitter
  twitter: {
    card: "summary_large_image",
    title: "Alma Liset - Asesoría Legal en Colima",
    description: "Despacho jurídico especializado en materia Familiar, Civil y Mercantil.",
    images: ["/images/oficina-legal.png"], // URL absoluta en producción
  },
  // Favicon y otros íconos
  icons: {
    icon: "/images/logo.ico",
    apple: "/apple-touch-icon.png",
  },
  // Robots y Canonical
  robots: {
    index: true,
    follow: true,
  },
  // Referrer
  referrer: 'origin-when-cross-origin',
  // Palabras clave
  keywords: ['abogado Colima', 'despacho jurídico', 'derecho familiar', 'divorcios', 'pensión alimenticia', 'derecho civil', 'derecho mercantil'],
  // Autor
  authors: [{ name: 'Lic. Alma Liset', url: 'https://asistente-legal-alma.vercel.app' }],
};

// JSON-LD: Script de datos estructurados para SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alma Liset - Asesoría Legal",
  description: "Despacho jurídico especializado en materia Familiar, Civil y Mercantil en Colima.",
  telephone: "+52 312 225 1010",
  url: "https://asistente-legal-alma.vercel.app",
  image: "/images/AlmaLiset.png", // Imagen representativa
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. San Fernando #533, Int. 12, Plaza Roma",
    addressLocality: "Colima",
    addressRegion: "COL",
    postalCode: "28014",
    addressCountry: "MX",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "19.2433", // Coordenadas de Colima
      longitude: "-103.7254"
    },
    "geoRadius": "50000" // Radio de 50km
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  founder: {
    "@type": "Person",
    "name": "Alma Liset",
    "image": "/images/AlmaLiset.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Inyectar el script JSON-LD en el head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-gray-50 text-dark-text`}>
        {children}
      </body>
    </html>
  );
}