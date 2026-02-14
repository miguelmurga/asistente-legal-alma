"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="sobre-mi" className="py-24 sm:py-32 bg-white overflow-hidden">
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
                        <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/images/AlmaLiset.png"
                                alt="Lic. Alma Liset, abogada profesional"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
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
                        <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">
                            Sobre el Despacho
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Lic. Alma Liset
                        </h3>

                        <p className="text-lg text-dark-text/80 leading-relaxed mb-8">
                            Con una sólida trayectoria, la Lic. Alma Liset se especializa en materia familiar, civil y mercantil, ofreciendo una representación legal experta, ética y personalizada. Su misión es proteger el patrimonio y la tranquilidad de sus clientes a través de estrategias jurídicas sólidas.
                        </p>

                        <div className="space-y-5">
                            {[
                                "Atención 100% personalizada y empática",
                                "Estrategias legales claras y transparentes",
                                "Defensa tenaz de sus intereses y derechos"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle2 className="text-accent w-6 h-6 mr-4 flex-shrink-0" />
                                    <span className="text-lg text-dark-text">{item}</span>
                                 </div>
                            ))}
                        </div>
                        
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;