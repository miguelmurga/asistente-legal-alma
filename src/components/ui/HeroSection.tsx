import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowDown, Scale } from "lucide-react";

const HeroSection: React.FC = () => {
    // Variantes de animación más sofisticadas (escalonadas)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#F5F5F7] overflow-hidden">

            {/* 1. IMAGEN DE FONDO (El Lienzo) */}
            {/* Usamos un redondeado grande y suave (rounded-[3rem]) para evocar modernidad */}
            <div className="absolute inset-4 md:inset-6 z-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="/images/oficina-legal.png"
                    alt="Oficina Legal Premium"
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradiente para asegurar que la parte inferior no compita con el scroll */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
            </div>

            {/* 2. EL COMPONENTE PRINCIPAL (La Tarjeta de Cristal) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start lg:px-12">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    // Estilo inline para forzar el Glassmorphism perfecto (respetando compatibilidad)
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.75)", // Blanco translúcido al 75%
                        backdropFilter: "blur(20px)",                // Desenfoque potente
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)", // Sombra suave para elevación
                    }}
                    className="
                        w-full max-w-2xl
                        p-8 md:p-12 lg:p-16
                        rounded-[2rem]
                        border border-white/60
                        flex flex-col items-center md:items-start text-center md:text-left
                        mx-auto md:mx-0
                    "
                >
                    {/* Badge / Etiqueta Superior */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="
                            inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-[#062C30]/10 border border-[#062C30]/10
                            text-[#062C30] text-xs font-bold tracking-widest uppercase
                        ">
                            <Scale size={14} className="text-[#C5A059]" /> {/* Icono balanza */}
                            Asesoría Legal en Colima
                        </span>
                    </motion.div>

                    {/* Título Principal - Tipografía Serif con alto impacto */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#062C30] leading-[1.1] mb-6 tracking-tight"
                    >
                        Justicia y <span className="text-[#C5A059]">Compromiso</span> en Cada Caso.
                    </motion.h1>

                    {/* Línea decorativa separadora */}
                    <motion.div
                        variants={itemVariants}
                        className="w-24 h-1 bg-[#C5A059] mb-8 rounded-full"
                    />

                    {/* Subtítulo - Legible y con buen interlineado */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-[#062C30]/80 font-medium leading-relaxed mb-10 max-w-lg"
                    >
                        Representación legal experta, ética y personalizada.
                        Protegemos su patrimonio y recuperamos su tranquilidad con estrategias jurídicas sólidas.
                    </motion.p>

                    {/* Botones de Acción */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="
                                bg-[#062C30] text-white font-semibold text-base rounded-xl px-8 py-6
                                shadow-lg hover:bg-[#093d42] hover:shadow-xl hover:-translate-y-1
                                transition-all duration-300 w-full sm:w-auto
                            "
                            onPress={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Agendar Cita
                        </Button>

                        <Button
                            size="lg"
                            variant="bordered"
                            className="
                                border-2 border-[#062C30] text-[#062C30] font-semibold text-base rounded-xl px-8 py-6
                                hover:bg-[#062C30]/5 w-full sm:w-auto
                            "
                        >
                            Ver Servicios
                        </Button>
                    </motion.div>

                </motion.div>
            </div>

            {/* Indicador de Scroll (Fuera de la tarjeta para no saturar) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
                <ArrowDown className="text-white w-6 h-6 animate-bounce" />
            </motion.div>

        </section>
    );
};

export default HeroSection;