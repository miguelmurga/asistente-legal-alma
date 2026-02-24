"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Scale, Instagram, Linkedin, MessageCircle, MapPin, Mail } from 'lucide-react';

const FooterSection: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'Linkedin', icon: Linkedin, href: '#' },
        { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/523122251010' },
    ];

    const quickLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Biografía', href: '/#perfil' },
        { name: 'Contacto', href: '/#contacto' },
    ];

    return (
        <footer className="bg-slate-900 text-slate-400 font-sans py-24 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    
                    {/* Column 1: Branding */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 no-underline group">
                            <div className="relative w-12 h-12 flex items-center justify-center transition-all">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="Logo Alma Encarnación & Asociados" 
                                    width={48} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-serif font-bold text-xl text-white">
                                    Alma Encarnación <span className="font-sans text-[#C5A059]">&</span> Asociados
                                </span>
                                <span className="font-sans text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                                    Firma Legal
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mt-4">
                            Asesoría legal especializada en materia Familiar, Civil y Mercantil en Colima, México. Compromiso con la ética y la excelencia profesional.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">Explorar</h4>
                        <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm font-bold text-slate-400 hover:text-[#C5A059] no-underline transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col gap-8 lg:col-span-2">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">Oficina Central</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="text-[#C5A059] shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-bold">Dirección</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Av. San Fernando #533, Int. 12,<br />Plaza Roma, Colima.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail size={20} className="text-[#C5A059] shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-bold">Email</p>
                                    <p className="text-slate-500 text-sm">asesoria@alma-legal.mx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Social and Copyright */}
                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all"
                            >
                                <social.icon size={18} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
                        <p className="text-xs font-black text-slate-600 uppercase tracking-[0.1em]">
                            &copy; {currentYear} Alma Encarnación & Asociados
                        </p>
                        <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.05em]">
                            Firma Legal • Colima, México
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
