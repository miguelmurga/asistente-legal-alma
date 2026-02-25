"use client";

import React, { useState, useEffect } from 'react';
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link as HeroLink
} from "@heroui/react";
import { Scale, Phone } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "Asistente Virtual", href: "/asistente" },
        { name: "Áreas de Práctica", href: "/#servicios" },
        { name: "La Firma", href: "/#perfil" },
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <HeroNavbar 
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            height="5rem"
            className={`fixed top-0 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100' : 'bg-transparent'}`}
        >
            {/* Mobile: Toggle on the left */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    className="text-[#062C30]"
                />
            </NavbarContent>

            {/* Logo/Brand: Centered on mobile, Start on desktop */}
            <NavbarContent justify="center" className="sm:justify-start">
                <NavbarBrand>
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group no-underline">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <Image 
                                src="/images/logo.png" 
                                alt="Logo Alma Encarnación & Asociados" 
                                width={48} 
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-serif font-bold text-base sm:text-xl text-[#062C30] whitespace-nowrap">
                                Alma Encarnación <span className="font-sans text-[#C5A059]">&</span> Asociados
                            </span>
                            <span className="hidden md:block font-sans text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                                Firma Legal
                            </span>
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-12" justify="center">
                {menuItems.slice(0, 4).map((item) => (
                    <NavbarItem key={item.name}>
                        <Link 
                            href={item.href}
                            className="font-sans text-sm font-black text-[#062C30]/70 hover:text-[#C5A059] uppercase tracking-[0.15em] no-underline transition-all relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button 
                        as={Link}
                        href="tel:3122251010"
                        variant="shadow"
                        className="bg-[#062C30] text-white font-bold px-6 shadow-xl shadow-[#062C30]/20 hover:scale-[1.05] active:scale-95 transition-all hidden md:flex gap-2"
                        startContent={<Phone size={18} strokeWidth={2.5} className="text-[#C5A059]" />}
                    >
                        312 225 1010
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white/95 backdrop-blur-xl pt-10">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            className="w-full font-serif font-bold text-3xl text-[#062C30] py-4 no-underline"
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <div className="mt-10 pt-10 border-t border-slate-100">
                    <p className="text-[#C5A059] font-black text-xs uppercase tracking-[0.2em] mb-4">Atención Inmediata</p>
                    <a href="tel:3122251010" className="text-2xl font-sans font-black text-[#062C30] no-underline tracking-tighter">
                        312 225 1010
                    </a>
                </div>
            </NavbarMenu>
        </HeroNavbar>
    );
}
