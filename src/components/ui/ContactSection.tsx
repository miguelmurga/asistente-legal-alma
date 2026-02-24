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
        <section id="contacto" className="bg-[#062C30] text-white font-sans p-8 md:p-12 mt-12 rounded-t-3xl shadow-2xl relative pb-40">
            <div className="max-w-5xl mx-auto space-y-16">
                
                {/* Encabezado */}
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 id="contact-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-4">
                        Inicie su Consulta
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto text-lg mt-4 leading-relaxed font-sans">
                      Contáctenos directamente por WhatsApp o visite nuestro despacho. Estamos listos para escuchar su caso y ofrecerle la mejor solución.
                    </p>
                  </motion.div>
                </div>

                {/* Grid a 2 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                  
                  {/* Columna 1: Canales Directos */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-serif font-bold text-[#C5A059]">Canales Directos</h3>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="text-[#C5A059] shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-bold text-white text-lg font-sans">Teléfono y WhatsApp</p>
                        <a href="https://api.whatsapp.com/send?phone=%2B523122251010" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#C5A059] transition-colors no-underline block mt-1 font-sans">
                            +52 312 225 1010
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="text-[#C5A059] shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-bold text-white text-lg font-sans">Despacho</p>
                        <a href="https://maps.app.goo.gl/KAQQRcT8i2HFGXWb6" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#C5A059] transition-colors no-underline block mt-1 leading-relaxed font-sans">
                          Av. San Fernando #533, Int. 12,<br />Plaza Roma, Colima.
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Columna 2: Pago de Asesoría */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-serif font-bold text-[#C5A059]">Pago de Asesoría</h3>
                    
                    <div className="space-y-4 text-white font-sans text-lg">
                      <p><span className="font-bold text-[#C5A059]">Titular:</span> Alma Liset Encarnacion Anaya</p>
                      <p><span className="font-bold text-[#C5A059]">Costo Inicial:</span> $700.00 MXN</p>
                      
                      <div className="pt-4">
                        <p className="font-bold text-[#C5A059] mb-3 uppercase text-sm tracking-widest">Cuenta de Débito (BBVA)</p>
                        {/* Tarjeta de copiado de alta visibilidad */}
                        <div className="flex items-center justify-between bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                          <code className="font-mono tracking-widest text-xl font-bold text-white">{accountNumber}</code>
                          <Button 
                            isIconOnly
                            className="bg-[#C5A059]/20 text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all rounded-lg ml-4"
                            aria-label="Copiar número de cuenta"
                            onPress={handleCopy}
                          >
                            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nota Importante */}
                <div className="pt-10 border-t border-white/10">
                  <p className="text-white/60 text-sm italic text-center max-w-3xl mx-auto font-sans leading-relaxed">
                    *Nota Importante: Para acudir al despacho es con previa cita y con el comprobante de pago enviado vía WhatsApp.
                  </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
