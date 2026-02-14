"use client";

import React from "react";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
} from "@heroui/react";
import { Scale } from "lucide-react";

/**
 * COMPONENTE NAVBAR - ALMA ENCARNACIÓN
 * Estilo: Luxury Minimalist
 * Técnica de espaciado: Separadores físicos (divs)
 */
export default function Navbar() {
    const menuItems = [
        { name: "Inicio", href: "#" },
        { name: "Áreas de Práctica", href: "#servicios" },
        { name: "La Firma", href: "#perfil" },
        { name: "Casos de Éxito", href: "#casos" },
    ];

    return (
        <HeroNavbar
            shouldHideOnScroll
            maxWidth="xl"
            height="5rem" // Altura más compacta y elegante
            isBordered={false}
            className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-[#062C30]/5"
            classNames={{
                wrapper: "px-6 md:px-10 lg:px-14 max-w-[1440px] h-full",
            }}
        >
            {/* --- 1. BRAND IDENTITY --- */}
            <NavbarBrand className="grow-0 flex-shrink-0">

                {/* CONTENEDOR MAESTRO */}
                <div className="flex items-center">

                    {/* A. EL LOGO */}
                    <div className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#062C30] text-[#C5A059] shadow-lg shadow-[#062C30]/10 transition-all duration-500 hover:shadow-[#C5A059]/30">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-700 ease-out group-hover:scale-110" strokeWidth={1.5} />
                    </div>

                    {/* B. SEPARADOR FÍSICO 1 (La técnica que funciona) */}
                    <div style={{ width: '15px', height: '1px' }}></div>

                    {/* C. LÍNEA DIVISORIA (Detalle estético) */}
                    <div className="hidden sm:block h-8 w-[1px] bg-[#062C30]/10"></div>

                    {/* D. SEPARADOR FÍSICO 2 (Solo en desktop para separar del divisor) */}
                    <div className="hidden sm:block" style={{ width: '15px', height: '1px' }}></div>

                    {/* E. EL TEXTO (Estilizado) */}
                    <div className="flex flex-col justify-center -space-y-0.5">
                <span className="font-serif text-lg sm:text-xl text-[#062C30] font-medium tracking-tight whitespace-nowrap leading-none">
                    Alma Encarnación
                </span>

                        <span className="text-[7px] sm:text-[8px] font-sans font-bold text-[#C5A059] tracking-[0.25em] uppercase opacity-90 pl-[1px]">
                    Abogada & Consultora
                </span>
                    </div>
                </div>
            </NavbarBrand>

            {/* --- 2. NAVEGACIÓN CENTRAL --- */}
            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            href={item.href}
                            className="text-[10px] font-bold text-[#062C30]/60 hover:text-[#062C30] tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
                        >
                            {item.name}
                            {/* Micro-interacción dorada */}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* --- 3. CALL TO ACTION --- */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#contacto"
                        variant="flat"
                        radius="none" // Botón con bordes rectos (más serio/legal)
                        className="
              bg-[#062C30]/5 hover:bg-[#062C30]
              text-[#062C30] hover:text-[#C5A059]
              font-sans font-bold uppercase
              text-[9px] sm:text-[10px] tracking-[0.15em]
              px-5 h-9 sm:h-10
              border border-[#062C30]/10 hover:border-[#062C30]
              transition-all duration-500 ease-out
            "
                    >
                        <span className="hidden sm:block">Consultar</span>
                        <span className="block sm:hidden">Cita</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </HeroNavbar>
    );
}