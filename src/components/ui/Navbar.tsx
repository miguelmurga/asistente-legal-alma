"use client";

import React from "react";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@heroui/react";
import Link from "next/link"; // Importar Link de Next.js para mejor navegación
import { Scale } from "lucide-react";

export default function Navbar() {
    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "#servicios" },
        { name: "Sobre Mí", href: "#sobre-mi" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <HeroNavbar
            shouldHideOnScroll
            maxWidth="xl"
            // Requisito: Fondo blanco translúcido, desenfoque y borde inferior dorado fino
            className="bg-white/80 backdrop-blur-md border-b-[1px] border-brand-gold/50"
            classNames={{
                wrapper: "px-6 sm:px-8",
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:bg-brand-gold",
                ],
            }}
        >
            {/* --- LOGO Y MARCA --- */}
            <NavbarBrand className="gap-3 cursor-pointer" as={Link} href="/">
                {/* Requisito: Icono de balanza en color 'brand-gold' */}
                <div className="p-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
                    <Scale size={22} strokeWidth={1.5} />
                </div>

                <div className="flex flex-col leading-tight">
                    {/* Requisito: Nombre con fuente serif elegante */}
                    <p className="font-serif font-bold text-lg sm:text-xl text-brand-dark-text tracking-wide">
                        Alma Liset Encarnacion
                    </p>
                    {/* Requisito: Cargo con fuente sans-serif más pequeña */}
                    <p className="font-sans text-[10px] sm:text-xs text-brand-green uppercase tracking-[0.2em] font-medium">
                        Asesoría Legal
                    </p>
                </div>
            </NavbarBrand>

            {/* --- ENLACES DE NAVEGACIÓN (Centro) --- */}
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name}>
                        <Link
                            href={item.href}
                            className="text-sm font-medium text-brand-dark-text hover:text-brand-green transition-colors duration-300 relative group"
                        >
                            {item.name}
                            {/* Animación sutil de subrayado dorado al pasar el cursor */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* --- BOTÓN DE ACCIÓN (Derecha) --- */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#agendar"
                        // Requisito: Fondo brand-green, texto blanco, efecto de crecimiento
                        className="bg-brand-green text-white font-medium shadow-md shadow-brand-green/20
                       hover:scale-105 hover:shadow-lg transition-transform duration-300 rounded-lg px-6"
                        variant="flat"
                    >
                        Agendar Cita
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </HeroNavbar>
    );
}