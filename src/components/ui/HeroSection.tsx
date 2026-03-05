"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { ArrowRight, Scale, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#C5A059]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#062C30]/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Content Column */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.2 }}
                        className="w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Premium Badge */}
                        <motion.div 
                            variants={itemVariants}
                            className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 mb-8"
                        >
                            <div className="relative w-5 h-5">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="Icono" 
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#062C30] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                                Asesoría Legal Colima
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-serif font-bold text-[#062C30] mb-8 leading-[1.1] tracking-tight"
                        >
                            Representación Legal <br />
                            <span className="text-[#C5A059]">Profesional</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 font-sans font-medium mb-12 max-w-xl leading-relaxed"
                        >
                            Especialistas en Derecho Civil, Familiar y Mercantil. Brindamos soluciones jurídicas directas y representación técnica para la protección de sus intereses.
                        </motion.p>
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                radius="md"
                                variant="shadow"
                                onPress={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-[#C5A059] text-white font-bold h-16 w-full sm:px-10 shadow-xl shadow-[#C5A059]/30 hover:scale-[1.02] active:scale-95 transition-all text-base tracking-wide"
                            >
                                Agendar Consulta
                            </Button>
                            
                            <Button
                                size="lg"
                                radius="md"
                                variant="bordered"
                                onPress={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-slate-200 text-[#062C30] font-bold h-16 w-full sm:px-10 hover:bg-slate-50 transition-all text-base tracking-wide bg-white sm:bg-transparent"
                                endContent={<ArrowRight className="w-5 h-5 ml-1" />}
                            >
                                Nuestros Servicios
                            </Button>
                        </motion.div>

                        {/* Trust Indicator */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-16 flex items-center gap-4 text-slate-400 font-sans font-bold text-xs uppercase tracking-widest"
                        >
                            <div className="h-[1px] w-12 bg-slate-200" />
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-[#C5A059]" />
                                Representación Ética y Confiable
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Column - Decorative Elements */}
                    <div className="hidden lg:block w-6/12 relative h-[600px]">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-[#062C30] to-[#0a4d54] rounded-[3rem] shadow-2xl overflow-hidden"
                        >
                            {/* Decorative architectural abstraction */}
                            <div className="absolute inset-0 opacity-20 bg-[url('/images/oficina-legal.png')] bg-cover bg-center grayscale contrast-125 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#062C30] via-transparent to-transparent" />
                            
                            <div className="absolute bottom-12 left-12 right-12">
                                <p className="text-[#C5A059] font-black text-xs uppercase tracking-[0.3em] mb-3">Compromiso Legal</p>
                                <h3 className="text-white text-3xl font-serif font-bold leading-tight">Soluciones Jurídicas de Alta Fidelidad</h3>
                            </div>
                        </motion.div>
                        
                        {/* Floating Floating Detail */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 max-w-[200px]"
                        >
                            <div className="w-12 h-12 flex items-center justify-center mb-4 overflow-hidden">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="Logo Especialidad" 
                                    width={40} 
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Especialidad</p>
                            <p className="text-sm font-bold text-[#062C30] leading-snug">Derecho Familiar y Sucesiones</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
