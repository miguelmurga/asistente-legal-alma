"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, DownloadCloud } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="sobre-mi" className="py-24 sm:py-32 bg-white overflow-hidden" aria-labelledby="about-heading">
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
                        <p className="text-base font-bold text-accent uppercase tracking-widest mb-4">
                            Sobre el Despacho
                        </p>
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Lic. Alma Liset Encarnación Anaya
                        </h2>

                        <p className="text-lg text-dark-text/80 leading-relaxed mb-8">
                            Con una sólida trayectoria, la Lic. Alma Liset se especializa en materia familiar, civil y mercantil, ofreciendo una representación legal experta, ética y personalizada. Su misión es proteger el patrimonio y la tranquilidad de sus clientes a través de estrategias jurídicas sólidas.
                        </p>

                        <ul className="space-y-5">
                            {[
                                "Atención 100% personalizada y empática",
                                "Estrategias legales claras y transparentes",
                                "Defensa tenaz de sus intereses y derechos"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 className="text-accent w-6 h-6 mr-4 flex-shrink-0" />
                                    <span className="text-lg text-dark-text">{item}</span>
                                 </li>
                            ))}
                        </ul>

                        {/* Professional Information */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Información Profesional y Cédula</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-dark-text/90">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-primary">Cédula Profesional:</span>
                                    <span>11236067</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-primary">Profesión:</span>
                                    <span>Licenciatura en Derecho</span>
                                </div>
                                <div className="flex flex-col">
                                </div>
                            </div>
                            <a
                                href="/CONSTANCIA_ALMA LISET ENCARNACION.pdf"
                                download="Cedula_Profesional_Alma_Liset_Encarnacion.pdf"
                                className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300 group"
                            >
                                <DownloadCloud className="w-5 h-5 mr-3 -ml-1" />
                                Descargar Cédula Profesional
                            </a>
                        </div>
                        
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;