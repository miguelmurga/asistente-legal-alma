"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import { Button } from "@heroui/react";

const AboutSection: React.FC = () => {
    return (
        <section id="sobre-mi" className="font-sans py-24 sm:py-32 bg-white overflow-hidden" aria-labelledby="about-heading">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Columna de Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full lg:w-5/12"
                    >
                        <div className="relative group aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/AlmaLiset.png"
                                alt="Lic. Alma Liset, abogada profesional posando en su oficina"
                                fill
                                sizes="(max-width: 1024px) 80vw, 30vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Columna de Contenido */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full lg:w-7/12"
                    >
                        <p className="text-base font-bold text-[#C5A059] uppercase tracking-widest mb-4">
                            Sobre el Despacho
                        </p>
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#062C30] mb-6">
                            Lic. Alma Liset Encarnación Anaya
                        </h2>

                        <p className="text-lg text-[#1F2937]/80 leading-relaxed mb-8 font-medium">
                            Con una sólida trayectoria, la Lic. Alma Liset se especializa en materia familiar, civil y mercantil, ofreciendo una representación legal experta, ética y personalizada. Su misión es proteger el patrimonio y la tranquilidad de sus clientes a través de estrategias jurídicas sólidas.
                        </p>

                        <ul className="space-y-5">
                            {[
                                "Atención 100% personalizada y empática",
                                "Estrategias legales claras y transparentes",
                                "Defensa tenaz de sus intereses y derechos"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 className="text-[#C5A059] w-6 h-6 mr-4 flex-shrink-0" />
                                    <span className="text-lg text-[#1F2937] font-medium">{item}</span>
                                 </li>
                            ))}
                        </ul>

                        {/* Professional Information */}
                        <div className="mt-16 pt-12 border-t border-slate-100">
                            <h3 className="text-2xl font-serif font-bold text-[#062C30] mb-8 tracking-tight">
                                Información Profesional y Cédula
                            </h3>
                            
                            <div className="space-y-2 mb-8 text-lg font-light text-[#1F2937]/90">
                                <p><span className="font-medium text-[#062C30]">Cédula Profesional:</span> 11236067</p>
                                <p><span className="font-medium text-[#062C30]">Profesión:</span> Licenciatura en Derecho</p>
                            </div>
                            
                            <Button
                                as="a"
                                href="/CONSTANCIA_ALMA LISET ENCARNACION.pdf"
                                download="Cedula_Profesional_Alma_Liset_Encarnacion.pdf"
                                className="bg-[#C5A059] text-white font-medium px-6 py-6 rounded-md flex items-center gap-3 hover:bg-[#b08d4a] transition-all shadow-md no-underline w-fit"
                                startContent={<Download size={20} />}
                            >
                                Descargar Cédula Profesional
                            </Button>
                        </div>

                    </motion.div>

                </div>
            </div>
            {/* Espaciador para separar de la siguiente sección */}
            <div className="h-24 md:h-32"></div>
        </section>
    );
};

export default AboutSection;
