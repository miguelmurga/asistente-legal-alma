import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Link from "next/link";
import { Scale } from "lucide-react";

const FooterSection: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Instagram', href: '#', icon: Instagram },
    ];

    return (
        <footer className="bg-[#062C30] border-t-4 border-[#C5A059]">
            <div className="container mx-auto px-6 sm:px-8 py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-8">

                    {/* Branding */}
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3 group no-underline">
                             <div className="p-1.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#C5A059] group-hover:bg-[#C5A059]/20 transition-colors">
                                <Scale size={22} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <p className="font-serif font-bold text-xl text-white tracking-wide">
                                    Alma Liset Encarnacion
                                </p>
                                <p className="font-sans text-xs text-[#F3F4F6]/70 uppercase tracking-[0.2em] font-medium">
                                    Asesoría Legal
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-[#F3F4F6]/60 order-last lg:order-none">
                        &copy; {new Date().getFullYear()} Alma Liset Encarnacion. Todos los derechos reservados.
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                             <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="text-[#F3F4F6]/70 hover:text-[#C5A059] hover:scale-110 transition-all duration-300 no-underline"
                            >
                                <social.icon size={24} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
