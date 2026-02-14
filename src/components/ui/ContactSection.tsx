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
        <section id="contacto" className="py-24 sm:py-32 bg-primary text-light-text">
            <div className="container mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">
                        Contacto y Asesoría
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Inicie su Consulta
                    </h3>
                    <p className="text-lg text-light-text/80 max-w-3xl mx-auto leading-relaxed">
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
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left border border-white/20"
                        >
                            <h4 className="font-serif text-2xl text-accent mb-6">Canales Directos</h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1"/>
                                    <div>
                                        <p className="font-semibold text-white text-lg">Teléfono y WhatsApp</p>
                                        <a href="https://api.whatsapp.com/send?phone=%2B523122251010" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-white transition-colors">
                                            +52 312 225 1010
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1"/>
                                    <div>
                                        <p className="font-semibold text-white text-lg">Despacho</p>
                                        <a href="https://www.google.com.mx/maps/place/Plaza+Roma" target="_blank" rel="noopener noreferrer" className="text-light-text/80 hover:text-white transition-colors">
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
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left border border-white/20"
                        >
                            <h4 className="font-serif text-2xl text-accent mb-6">Pago de Asesoría</h4>
                            <div className="space-y-4 text-light-text/80">
                                <p><strong>Titular:</strong> Alma Liset Encarnacion Anaya</p>
                                <p><strong>Costo Inicial:</strong> $700.00 MXN</p>
                                <div className="pt-4">
                                    <p className="font-semibold text-white mb-2">Cuenta de Débito (BBVA)</p>
                                    <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                                        <code className="text-lg text-accent tracking-wider">{accountNumber}</code>
                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                            className="text-gray-300 hover:text-white"
                                            onPress={handleCopy}
                                        >
                                            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                                        </Button>
                                    </div>
                                </div>
                                 <p className="text-sm text-light-text/70 pt-4">
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