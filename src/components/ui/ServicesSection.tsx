"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, HeartCrack, Baby, ScrollText, HeartHandshake, 
    Banknote, FileSignature, ShieldAlert, Fingerprint, CalendarClock 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
    HeartCrack, Baby, ScrollText, HeartHandshake, Banknote, 
    FileSignature, ShieldAlert, Fingerprint, CalendarClock
};

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface ServicesSectionProps {
    services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden" id="servicios" aria-labelledby="services-heading">
            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header with Premium Spacing */}
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-black text-[#C5A059] uppercase tracking-[0.3em] mb-6">Áreas de Especialización</p>
                        <h2 id="services-heading" className="text-4xl md:text-6xl font-serif font-bold text-[#062C30] mb-8 tracking-tight leading-tight">
                            Áreas de Práctica Jurídica
                        </h2>
                        <div className="w-24 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-8"></div>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
                            Familiar, Civil y Mercantil.
                        </p>
                    </motion.div>
                </div>

                {/* Service Grid with Clean Alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#C5A059]/20 hover:shadow-2xl hover:shadow-[#C5A059]/10 transition-all duration-500"
                            >
                                {/* Icon Capsule with Flexbox Centering */}
                                <div className="mb-10 inline-flex items-center justify-center p-5 rounded-2xl bg-slate-50 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                                    {IconComponent && (
                                        <IconComponent 
                                            aria-hidden="true" 
                                            size={32} 
                                            strokeWidth={1.5} 
                                        />
                                    )}
                                </div>

                                {/* Title with Elegant Serif Font */}
                                <h3 className="text-2xl font-bold font-serif text-[#062C30] mb-6 tracking-tight leading-snug group-hover:text-[#C5A059] transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description with Sans-serif Font for Legibility */}
                                <p className="text-lg text-slate-500 leading-relaxed font-sans font-medium mb-8">
                                    {service.description}
                                </p>
                                
                                <div className="flex items-center gap-2 text-[#C5A059] font-sans font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                                    Consultar <ArrowRight size={14} strokeWidth={3} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Secondary Call to Action with Luxury Spacing */}
                <div className="mt-32 text-center">
                    <motion.a
                        href="#contacto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 text-lg font-sans font-black text-[#062C30] hover:text-[#C5A059] group tracking-[0.1em] uppercase transition-all"
                    >
                        <span>Solicitar Asesoría Especializada</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={3} />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
