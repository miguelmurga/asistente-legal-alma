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
        <section id="contacto" className="pt-24 pb-48 sm:pt-32 sm:pb-56 bg-[#062C30] text-[#F3F4F6]" aria-labelledby="contact-heading">
            <div className="container mx-auto px-6 text-center">
                {/* Región ARIA-Live para notificaciones */}
                <div className="sr-only" aria-live="polite" role="status">
                    {copied ? 'Número de cuenta copiado al portapapeles' : ''}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-base font-black text-[#C5A059] uppercase tracking-[0.2em] mb-4">
                        Contacto y Asesoría
                    </p>
                    <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Inicie su Consulta
                    </h2>
                    <p className="text-lg text-[#F3F4F6]/80 max-w-3xl mx-auto leading-relaxed font-medium">
                        Contáctenos directamente por WhatsApp o visite nuestro despacho. Estamos listos para escuchar su caso y ofrecerle la mejor solución.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto mt-16">
                    {/* Bloques de Contacto y Pago */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Información de Contacto */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-6 tracking-tight">Canales Directos</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone aria-hidden="true" className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1"/>
                                    <div>
                                        <p className="font-bold text-white text-lg">Teléfono y WhatsApp</p>
                                        <a href="https://api.whatsapp.com/send?phone=%2B523122251010" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6]/80 hover:text-white transition-colors no-underline">
                                            +52 312 225 1010
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin aria-hidden="true" className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1"/>
                                    <div>
                                        <p className="font-bold text-white text-lg">Despacho</p>
                                        <a href="https://maps.app.goo.gl/KAQQRcT8i2HFGXWb6" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6]/80 hover:text-white transition-colors no-underline">
                                            Av. San Fernando #533, Int. 12, Plaza Roma, Colima.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Información de Pago */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-6 tracking-tight">Pago de Asesoría</h3>
                            <div className="space-y-4 text-[#F3F4F6]/80 font-medium">
                                <p><strong>Titular:</strong> Alma Liset Encarnacion Anaya</p>
                                <p><strong>Costo Inicial:</strong> $700.00 MXN</p>
                                <div className="pt-4">
                                    <p className="font-bold text-white mb-2" id="account-label">Cuenta de Débito (BBVA)</p>
                                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/5">
                                        <code className="text-lg text-[#C5A059] font-black tracking-widest">{accountNumber}</code>
                                        <Button
                                            isIconOnly
                                            size="md"
                                            className="bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all ml-4"
                                            onPress={handleCopy}
                                            aria-label={copied ? "Número de cuenta copiado" : "Copiar número de cuenta"}
                                            aria-describedby="account-label"
                                        >
                                            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                                        </Button>
                                    </div>
                                </div>
                                 <p className="text-sm text-[#F3F4F6]/70 pt-4 leading-relaxed italic">
                                    <strong>*Nota Importante:</strong> Para acudir al despacho es con previa cita y con el comprobante de pago enviado vía WhatsApp.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
