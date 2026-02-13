import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const FooterSection: React.FC = () => {
    return (
        <footer className="bg-brand-green text-brand-light-text border-t border-brand-gold/20">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* Branding */}
                    <div className="text-center md:text-left order-1">
                        <h3 className="text-lg font-serif font-bold text-white">Alma Liset Encarnacion Anaya</h3>
                        <p className="text-xs text-brand-silver/80">Asesoría Legal Profesional</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-5 order-2">
                        <a href="#" aria-label="LinkedIn" className="text-brand-silver hover:text-brand-gold transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" aria-label="Facebook" className="text-brand-silver hover:text-brand-gold transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-brand-silver hover:text-brand-gold transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                    
                    {/* Copyright (Mobile Separator) */}
                    <hr className="w-full border-brand-silver/10 md:hidden order-3 mt-4" />

                    {/* Copyright */}
                    <div className="text-sm text-brand-silver/70 order-4 md:order-3">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterSection;