"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import { Button } from "@heroui/react";

const AboutSection: React.FC = () => {
    return (
        <section id="sobre-mi" className="font-sans py-24 sm:py-32 bg-white overflow-hidden relative" aria-labelledby="about-heading">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Image with Depth */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full lg:w-5/12"
                    >
                        <div className="relative group aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                            <Image
                                src="/images/AlmaLiset.png"
                                alt="Lic. Alma Liset, abogada profesional"
                                fill
                                sizes="(max-width: 1024px) 80vw, 30vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content and Premium Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full lg:w-7/12"
                    >
                        <p className="text-sm font-black text-[#C5A059] uppercase tracking-[0.25em] mb-6">
                            Perfil Profesional
                        </p>
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#062C30] mb-8 leading-tight tracking-tight">
                            Lic. Alma Liset <br /> Encarnación Anaya
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-10 font-sans font-medium">
                            Especialista en Derecho Familiar, Civil y Mercantil. La Lic. Alma Liset brinda representación legal bajo principios de rigor técnico y ética profesional, enfocada en la protección del patrimonio y la resolución efectiva de conflictos jurídicos.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                "Atención personalizada y directa",
                                "Asesoría con transparencia técnica y legal",
                                "Protección de intereses y derechos patrimoniales"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-[#C5A059]/10 transition-colors">
                                        <CheckCircle2 className="text-[#C5A059] w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-lg text-slate-700 font-sans font-medium">{item}</span>
                                 </div>
                            ))}
                        </div>

                        {/* Professional Information & Premium HeroUI Button */}
                        <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-10">
                            <div className="flex-1 space-y-2 text-center sm:text-left">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400">Información Profesional</h3>
                                <div className="flex flex-col gap-1 mt-3">
                                    <p className="text-slate-800 font-bold font-sans">
                                        <span className="text-slate-400 font-medium mr-2">Cédula:</span> 11236067
                                    </p>
                                    <p className="text-slate-800 font-bold font-sans">
                                        <span className="text-slate-400 font-medium mr-2">Carrera:</span> Derecho
                                    </p>
                                </div>
                            </div>
                            
                            <Button
                                as="a"
                                href="/CONSTANCIA_ALMA LISET ENCARNACION.pdf"
                                download="Cedula_Profesional_Alma_Liset.pdf"
                                variant="shadow"
                                radius="md"
                                className="bg-[#C5A059] text-white font-bold h-16 px-10 shadow-lg shadow-[#C5A059]/30 hover:scale-[1.02] active:scale-95 transition-all text-base tracking-wide"
                                startContent={<Download size={22} className="mr-1" strokeWidth={2.5} />}
                            >
                                Descargar Cédula Profesional
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Added Whitespace between sections */}
            <div className="h-32"></div>
        </section>
    );
};

export default AboutSection;
