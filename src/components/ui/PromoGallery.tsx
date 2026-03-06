"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Scale, ShieldCheck, Info, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';

interface WikiService {
    title: string;
    description: string;
    legalBasis: string;
    image: string;
    alt: string;
    details: string[];
    keywords: string[];
}

const wikiData: WikiService[] = [
    {
        title: "Divorcio Incausado y Voluntario",
        description: "De acuerdo al Código Civil del Estado de Colima, el divorcio disuelve el vínculo matrimonial y deja a los cónyuges en aptitud de contraer otro.",
        legalBasis: "Artículos 266, 267 y 268 del Código Civil de Colima.",
        image: "/images/publi/tramite-de-divorcio-incausado-y-voluntario.png",
        alt: "Trámite de divorcio en Colima - Información jurídica Wiki",
        details: [
            "Divorcio Incausado: No requiere señalar una causa específica.",
            "Convenio de regularización de situación de hijos y bienes.",
            "Disolución de la sociedad conyugal."
        ],
        keywords: ["divorcio colima", "abogado familiar", "codigo civil colima art 266"]
    },
    {
        title: "Pensión Alimenticia y Sustento",
        description: "La obligación de dar alimentos es recíproca. El que los da tiene a su vez el derecho de pedirlos.",
        legalBasis: "Artículos 301 al 323 del Código Civil de Colima.",
        image: "/images/publi/servicios-pensiones-alimenticias.png",
        alt: "Derecho a pensión alimenticia en Colima - Guía Wiki",
        details: [
            "Comprende: Comida, vestido, habitación, atención médica y educación.",
            "Aseguramiento del pago mediante hipoteca, prenda o fianza.",
            "Registro de Deudores Alimentarios Morosos."
        ],
        keywords: ["pension alimenticia colima", "demanda de alimentos", "derechos de los hijos"]
    },
    {
        title: "Sucesiones y Testamentos",
        description: "La herencia es la sucesión en todos los bienes del difunto y en todos sus derechos y obligaciones que no se extinguen por la muerte.",
        legalBasis: "Artículos 1177 al 1280 del Código Civil de Colima.",
        image: "/images/publi/juicio-sucesorio-testamentario-intestamentario.png",
        alt: "Juicios sucesorios y herencias en Colima - Wiki Legal",
        details: [
            "Sucesión Testamentaria (con voluntad del finado).",
            "Sucesión Legítima o Intestamentaria.",
            "Derecho a la cuarta parte de la herencia para el cónyuge supérstite."
        ],
        keywords: ["testamentos colima", "juicio sucesorio", "herencias colima"]
    },
    {
        title: "Reconocimiento de Concubinato",
        description: "Se presumen hijos del concubinario y de la concubina los nacidos después de ciento ochenta días contados desde que comenzó el concubinato.",
        legalBasis: "Artículo 383 del Código Civil de Colima.",
        image: "/images/publi/reconocimiento-de-concubinato-y-union-libre.png",
        alt: "Reconocimiento legal de concubinato en Colima - Wiki",
        details: [
            "Derechos sucesorios equiparables al matrimonio.",
            "Obligaciones de asistencia y alimentos.",
            "Protección del patrimonio familiar."
        ],
        keywords: ["concubinato colima", "union libre ley", "derechos concubina"]
    },
    {
        title: "Contratos Civiles y Mercantiles",
        description: "El contrato es el acuerdo de dos o más personas para crear, transferir, modificar o extinguir obligaciones.",
        legalBasis: "Artículo 1683 del Código Civil de Colima.",
        image: "/images/publi/elaboracion-contratos-civiles-mercantiles.png",
        alt: "Redacción de contratos en Colima - Información técnica Wiki",
        details: [
            "Validez por consentimiento y objeto.",
            "Instrumentos notariales y privados.",
            "Garantía de seguridad jurídica patrimonial."
        ],
        keywords: ["contratos colima", "seguridad juridica", "elaboracion de contratos"]
    }
];

const WikiGallery: React.FC = () => {
    return (
        <section className="bg-slate-50 min-h-screen pb-24" aria-labelledby="wiki-title">
            {/* SEO Header - Hidden but readable by Google */}
            <div className="sr-only">
                <h1 id="wiki-title">Wiki Legal Colima: Guía del Código Civil y Servicios Jurídicos</h1>
                <p>Información detallada sobre el Código Civil de Colima reformado en 2023. Especialidades en divorcios, pensiones, sucesiones y contratos por la Lic. Alma Liset en Colima, México.</p>
            </div>

            {/* Hero Wiki Section */}
            <div className="bg-[#062C30] text-white py-20 px-6 mb-16">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <span className="inline-flex items-center gap-2 text-[#C5A059] font-black uppercase tracking-widest text-xs mb-4">
                            <BookOpen size={16} /> Enciclopedia Jurídica Colima
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Wiki del Código Civil</h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-sans">
                            Base de conocimiento legal actualizada al 2024. Encuentre información técnica y representación profesional para sus asuntos jurídicos en el Estado de Colima.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-32">
                {wikiData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Vertical Image Column - Clickable to Assistant */}
                        <motion.a 
                            href="/asistente"
                            whileHover={{ scale: 1.01 }}
                            className="w-full lg:w-5/12 relative group aspect-[3/4] md:h-[700px] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer"
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl text-[#062C30] flex items-center gap-2 font-bold">
                                    <ImageIcon size={20} /> Consultar con IA
                                </div>
                            </div>
                        </motion.a>

                        {/* Informative Wiki Column */}
                        <div className="w-full lg:w-7/12 space-y-8 p-4">
                            <div className="inline-flex items-center gap-3 text-[#C5A059] font-sans font-black uppercase tracking-[0.2em] text-[10px]">
                                <div className="h-[1px] w-8 bg-[#C5A059]"></div>
                                Información Jurídica Especializada
                            </div>
                            
                            <h4 className="text-4xl font-serif font-bold text-[#062C30] leading-tight">
                                {item.title}
                            </h4>

                            <p className="text-xl text-slate-600 leading-relaxed font-sans font-medium">
                                {item.description}
                            </p>

                            <div className="bg-white p-8 rounded-3xl border-l-8 border-[#C5A059] shadow-sm space-y-6">
                                <div className="flex items-center gap-3 text-[#062C30] font-black text-base uppercase tracking-tighter">
                                    <FileText size={22} className="text-[#C5A059]" />
                                    <span>Fundamento: {item.legalBasis}</span>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-3 text-slate-500 text-base">
                                            <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {item.keywords.map((kw, kIdx) => (
                                    <span key={kIdx} className="text-[11px] text-slate-400 font-black uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-lg border border-slate-200">
                                        #{kw.replace(/\s+/g, '_')}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-8">
                                <a 
                                    href="/#contacto" 
                                    className="inline-flex items-center gap-4 bg-[#C5A059] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#062C30] transition-all shadow-xl shadow-[#C5A059]/20 group active:scale-95"
                                >
                                    Agendar Cita en Despacho
                                    <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* General SEO Wiki Block at the bottom */}
            <div className="container mx-auto px-6 mt-32 pt-20 border-t border-slate-200">
                <div className="max-w-4xl mx-auto prose prose-slate">
                    <h2 className="text-3xl font-serif font-bold text-[#062C30] mb-8">Información sobre el Código Civil para el Estado de Colima</h2>
                    <p className="text-slate-600 leading-loose">
                        El <strong>Código Civil del Estado de Colima</strong> es el cuerpo normativo que regula las relaciones civiles entre las personas en nuestra entidad. Reformado recientemente para incluir disposiciones sobre el Registro de Deudores Alimentarios y procedimientos de divorcio más ágiles, representa la base jurídica para la protección de la familia y el patrimonio. Como <strong>abogada en Colima</strong>, la Lic. Alma Liset utiliza estos fundamentos para garantizar que cada proceso legal se lleve a cabo con estricto apego a la ley vigente, brindando seguridad y resultados a sus clientes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="flex items-start gap-4">
                            <Scale className="text-[#C5A059] shrink-0" size={24} />
                            <div>
                                <h5 className="font-bold text-[#062C30]">Justicia Efectiva</h5>
                                <p className="text-sm text-slate-500">Aplicación técnica de los artículos del código para resoluciones favorables.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="text-[#C5A059] shrink-0" size={24} />
                            <div>
                                <h5 className="font-bold text-[#062C30]">Protección Patrimonial</h5>
                                <p className="text-sm text-slate-500">Defensa legal basada en los títulos de propiedad y sucesiones establecidos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WikiGallery;
