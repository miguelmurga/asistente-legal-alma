"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Search, ImageIcon } from 'lucide-react';

interface Advertisement {
    title: string;
    description: string;
    image: string;
    alt: string;
    keywords: string[];
}

const adsData: Advertisement[] = [
    {
        title: "Divorcios en Colima: Solución Legal Efectiva",
        description: "Asesoría especializada en divorcios incausados y voluntarios. Agilizamos su proceso legal con absoluta seriedad y profesionalismo.",
        image: "/images/publi/tramite-de-divorcio-incausado-y-voluntario.png",
        alt: "Abogada en Colima especialista en trámites de divorcio incausado y voluntario",
        keywords: ["divorcio colima", "abogado familiar colima", "tramite de divorcio"]
    },
    {
        title: "Pensiones Alimenticias: Protección del Menor",
        description: "Garantizamos el sustento y bienestar de sus hijos mediante juicios de pensión alimenticia con rigor técnico.",
        image: "/images/publi/servicios-pensiones-alimenticias.png",
        alt: "Juicio de pensión alimenticia en Colima - Representación legal profesional",
        keywords: ["pension alimenticia colima", "demanda de alimentos", "derecho familiar"]
    },
    {
        title: "Juicios Sucesorios y Testamentos",
        description: "Especialistas en sucesiones testamentarias e intestamentarias para la adjudicación correcta de bienes y patrimonio.",
        image: "/images/publi/juicio-sucesorio-testamentario-intestamentario.png",
        alt: "Abogado sucesorio en Colima - Testamentos y herencias",
        keywords: ["juicio sucesorio colima", "testamentos", "herencias", "intestados"]
    },
    {
        title: "Recuperación de Deuda: Cobro de Pagarés",
        description: "Ejecución técnica de títulos de crédito y juicios mercantiles para la recuperación efectiva de su capital.",
        image: "/images/publi/cobro-pagares-juicios-mercantiles.png",
        alt: "Cobro de pagarés y juicios mercantiles en Colima",
        keywords: ["cobro de pagares colima", "abogado mercantil", "juicio ejecutivo mercantil"]
    },
    {
        title: "Contratos Civiles y Mercantiles",
        description: "Elaboración y revisión técnica de instrumentos legales para blindar sus operaciones y prevenir conflictos futuros.",
        image: "/images/publi/elaboracion-contratos-civiles-mercantiles.png",
        alt: "Redacción de contratos civiles y mercantiles profesionales en Colima",
        keywords: ["elaboracion de contratos", "contratos mercantiles", "seguridad juridica"]
    },
    {
        title: "Juicios de Paternidad y ADN",
        description: "Procesos legales precisos para el reconocimiento de filiación con validez jurídica plena.",
        image: "/images/publi/juicio-de-paternidad-adn-mexico.png",
        alt: "Juicio de paternidad y pruebas de ADN con validez legal en México",
        keywords: ["juicio de paternidad colima", "reconocimiento de hijos", "prueba de adn legal"]
    },
    {
        title: "Concubinato y Unión Libre",
        description: "Reconocimiento jurídico de la unión de hecho para garantizar derechos sucesorios y de seguridad social.",
        image: "/images/publi/reconocimiento-de-concubinato-y-union-libre.png",
        alt: "Reconocimiento legal de concubinato en Colima",
        keywords: ["concubinato colima", "union libre derechos", "reconocimiento legal"]
    },
    {
        title: "Convivencias y Régimen de Visitas",
        description: "Establecimiento de regímenes de convivencia familiar priorizando siempre el interés superior de los menores.",
        image: "/images/publi/regimen-visitas-convivencia-familiar-menores.png",
        alt: "Abogado para régimen de visitas y convivencia familiar en Colima",
        keywords: ["regimen de visitas colima", "convivencia familiar", "derecho de menores"]
    },
    {
        title: "Órdenes de Protección Inmediata",
        description: "Gestión urgente de medidas legales para salvaguardar la integridad física y emocional de las personas.",
        image: "/images/publi/orden-de-proteccion-medidas-legales.png",
        alt: "Solicitud de órdenes de protección y medidas de seguridad legal en Colima",
        keywords: ["orden de proteccion colima", "violencia familiar ayuda legal", "medidas cautelares"]
    }
];

const PromoGallery: React.FC = () => {
    return (
        <section className="py-24 bg-white" aria-labelledby="promo-heading">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-xs font-black uppercase tracking-widest mb-6">
                            <ImageIcon size={14} /> Galería Legal Colima
                        </span>
                        <h1 id="promo-heading" className="text-4xl md:text-6xl font-serif font-bold text-[#062C30] mb-6">
                            Abogados en Colima
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans font-medium">
                            Nuestra representación legal en imágenes. Especialistas en Derecho Civil, Familiar y Mercantil con enfoque profesional.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adsData.map((ad, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src={ad.image}
                                    alt={ad.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#062C30]/90 via-[#062C30]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="text-white">
                                        <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-2">Consulta Profesional</p>
                                        <p className="text-base font-medium leading-relaxed mb-4">{ad.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {ad.keywords.map((kw, idx) => (
                                                <span key={idx} className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full border border-white/20">#{kw.replace(/\s+/g, '')}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8 bg-white border-t border-slate-50">
                                <h3 className="text-2xl font-bold font-serif text-[#062C30] group-hover:text-[#C5A059] transition-colors flex justify-between items-center">
                                    {ad.title}
                                    <ExternalLink size={20} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-500 mt-3 font-medium text-lg leading-relaxed">
                                    {ad.description}
                                </p>
                            </div>

                            {/* Semantic metadata for Google Indexing */}
                            <div className="sr-only">
                                <h2>Abogado Colima - {ad.title}</h2>
                                <p>{ad.alt}</p>
                                <p>Especialidad en derecho en Colima México por Lic. Alma Liset.</p>
                                <ul>
                                    {ad.keywords.map((k, i) => <li key={i}>{k}</li>)}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoGallery;
