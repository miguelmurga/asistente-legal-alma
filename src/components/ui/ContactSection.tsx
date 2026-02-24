"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check } from 'lucide-react';
import { Button } from "@heroui/react";
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const accountNumber = "4152 3143 7844 0724";

    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contacto" className="bg-[#062C30] text-white font-sans py-24 sm:py-32 mt-12 sm:rounded-t-[4rem] shadow-2xl relative" aria-labelledby="contact-heading">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Header with Luxury Whitespace */}
                <div className="text-center space-y-6 mb-20 md:mb-32">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 id="contact-heading" className="text-4xl md:text-6xl font-serif font-bold text-[#C5A059] mb-4 tracking-tight">Inicie su Consulta</h2>
                    <p className="text-white/80 max-w-2xl mx-auto font-sans font-medium text-lg leading-relaxed">
                      Contáctenos directamente por WhatsApp para agendar su cita. La atención en despacho es exclusivamente con previa programación para brindarle la mejor solución legal.
                    </p>
                  </motion.div>
                </div>

                {/* 2-Column Responsive Grid with Subtle Dividers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start border-t border-white/10 pt-16 md:pt-24">
                  
                  {/* Column 1: Direct Channels */}
                  <div className="space-y-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#C5A059] tracking-tight">Canales Directos</h3>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-[#C5A059]/10 transition-colors">
                        <Phone className="text-[#C5A059] shrink-0" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-xl tracking-tight text-white/90">Teléfono y WhatsApp</p>
                        <a 
                          href="https://api.whatsapp.com/send?phone=%2B523122251010" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-[#C5A059] transition-all no-underline text-lg font-sans font-medium mt-1 inline-block"
                        >
                            +52 312 225 1010
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-[#C5A059]/10 transition-colors">
                        <MapPin className="text-[#C5A059] shrink-0" size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-xl tracking-tight text-white/90">Ubicación del Despacho</p>
                        <a 
                          href="https://maps.app.goo.gl/KAQQRcT8i2HFGXWb6" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-[#C5A059] transition-all no-underline text-lg font-sans font-medium mt-1 leading-relaxed inline-block"
                        >
                          Av. San Fernando #533, Int. 12,<br />Plaza Roma, Colima.
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Payment & Security Card */}
                  <div className="space-y-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#C5A059] tracking-tight">Pago de Asesoría</h3>
                    
                    <div className="space-y-6 text-white/90 text-lg font-sans font-medium">
                      <p className="flex justify-between items-center pb-3 border-b border-white/5">
                        <span className="text-[#C5A059]/60 uppercase text-xs font-black tracking-widest">Titular</span> 
                        Alma Liset Encarnacion Anaya
                      </p>
                      <p className="flex justify-between items-center pb-3 border-b border-white/5">
                        <span className="text-[#C5A059]/60 uppercase text-xs font-black tracking-widest">Costo Inicial</span> 
                        $700.00 MXN
                      </p>
                      
                      <div className="pt-6">
                        <p className="font-bold text-[#C5A059] mb-4 flex items-center gap-2">
                          <Check size={18} className="text-[#C5A059]" strokeWidth={3} />
                          Cuenta de Débito (BBVA)
                        </p>
                        {/* High-Contrast Luxury Card with HeroUI Button */}
                        <div className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl group hover:border-[#C5A059]/30 transition-all shadow-xl shadow-black/20">
                          <code className="font-mono tracking-[0.2em] text-xl font-black text-white">{accountNumber}</code>
                          <Button 
                            isIconOnly
                            variant="flat"
                            radius="lg"
                            onPress={handleCopy}
                            className="bg-[#C5A059]/10 text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all w-12 h-12 min-w-12 shadow-inner"
                            aria-label="Copiar número de cuenta"
                          >
                            {copied ? <Check size={24} className="text-green-400" /> : <Copy size={24} />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Note: Positioned to avoid floating button overlap */}
                <div className="pt-20 border-t border-white/10 pb-32">
                  <p className="text-sm text-white/40 font-sans font-medium italic text-center max-w-3xl mx-auto leading-relaxed">
                    *Nota Importante: Para acudir al despacho es con previa cita y con el comprobante de pago enviado vía WhatsApp.
                  </p>
                </div>
            </div>
            {/* Massive bottom whitespace for Floating Button security */}
            <div className="h-24"></div>
        </section>
    );
};

export default ContactSection;
