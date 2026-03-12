"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from "@heroui/react";
import Link from 'next/link';

const AIQuickActionSection: React.FC = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-[#062C30] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl -ml-32 -mb-32" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 bg-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                            >
                                <Sparkles size={14} /> Asistente de Inteligencia Artificial
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight"
                            >
                                ¿Necesitas ayuda con un <span className="text-[#C5A059]">Juicio de Pérdida de Patria Potestad</span>?
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-white/70 mb-10 font-sans"
                            >
                                Nuestro asistente virtual puede ayudarte a redactar la solicitud inicial o explicarte los requisitos legales en Colima de forma inmediata.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    as={Link}
                                    href="/asistente"
                                    size="lg"
                                    className="bg-[#C5A059] text-white font-black uppercase tracking-widest px-8 py-7 rounded-2xl shadow-xl shadow-[#C5A059]/20 hover:bg-white hover:text-[#062C30] transition-all group"
                                >
                                    Consultar con Asistente Virtual
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3 flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-32 h-32 md:w-48 md:h-48 bg-[#C5A059] rounded-full flex items-center justify-center shadow-2xl">
                                    <MessageSquare size={64} className="text-[#062C30]" strokeWidth={1.5} />
                                </div>
                                {/* Animated pulse rings */}
                                <div className="absolute inset-0 border-4 border-[#C5A059] rounded-full animate-ping opacity-20" />
                                <div className="absolute inset-0 border-4 border-[#C5A059] rounded-full animate-ping opacity-10 [animation-delay:1s]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIQuickActionSection;
