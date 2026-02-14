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
 * LUXURY LEGAL NAVBAR COMPONENT
 * Design Language: Modern Authority / Minimalist Luxury
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
            height="5.5rem"
            isBordered={false}
            className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md backdrop-saturate-150 border-b border-white/20"
            classNames={{
                wrapper: "px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1440px] h-full gap-2 sm:gap-4",
            }}
        >
            {/* --- 1. BRAND IDENTITY (The Badge) --- */}
            <NavbarBrand className="grow-0 flex-shrink-0">
                {/* SOLUCIÓN DEFINITIVA:
                   Creamos un DIV contenedor manual 'flex items-center'.
                   Esto ignora cualquier comportamiento extraño de <NavbarBrand>.

                   'gap-6' = 24px de espacio real entre logo y texto.
                   Puedes subirlo a 'gap-8' si quieres aun más espacio.
                */}
                <div className="flex items-center gap-6 sm:gap-7">

                    {/* LOGO */}
                    <div className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#062C30] text-[#C5A059] transition-transform duration-500 hover:rotate-[360deg] shadow-xl shadow-[#062C30]/10">
                        <Scale className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.2} />
                    </div>

                    {/* TEXTO */}
                    <div className="flex flex-col leading-tight select-none justify-center">
                        <span className="font-serif italic text-medium sm:text-xl md:text-2xl text-[#062C30] tracking-tight whitespace-nowrap">
                            Alma Encarnación
                        </span>

                        <span className="hidden sm:block font-sans text-[7px] sm:text-[9px] font-bold text-[#C5A059] tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-90">
                            Firma Legal Especializada
                        </span>
                    </div>
                </div>
            </NavbarBrand>

            {/* --- 2. CENTRAL NAVIGATION (Minimalist) --- */}
            <NavbarContent className="hidden lg:flex gap-8 xl:gap-12" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            href={item.href}
                            className="text-[11px] font-bold text-[#062C30]/70 hover:text-[#062C30] tracking-[0.2em] uppercase transition-all duration-400 relative group py-2"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#C5A059] rounded-full opacity-0 -translate-x-1/2 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_8px_#C5A059]"></span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* --- 3. THE CALL TO ACTION (Refined) --- */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#contacto"
                        variant="bordered"
                        radius="sm"
                        className="
              border-[0.5px] border-[#062C30]/30
              text-[#062C30] font-sans font-bold uppercase
              text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em]
              px-3 sm:px-8
              h-9 sm:h-11
              hover:bg-[#062C30] hover:text-[#F5F5F7] hover:border-[#062C30]
              transition-all duration-500 ease-in-out
              bg-transparent backdrop-blur-sm
              min-w-fit
            "
                    >
                        <span className="block sm:hidden">Agendar</span>
                        <span className="hidden sm:block">Agendar Cita</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </HeroNavbar>
    );
}