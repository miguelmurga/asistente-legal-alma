import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";

const HeroSection: React.FC = () => {
    // Animación suave del contenedor
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center p-4 bg-[#F5F5F7] overflow-hidden font-sans">

            {/* --- 1. IMAGEN DE FONDO --- */}
            <div className="absolute inset-2 md:inset-6 z-0 rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-900">
                <img
                    src="/images/oficina-legal.png"
                    alt="Fondo Legal"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* --- 2. TARJETA PRINCIPAL (El cambio clave está aquí) --- */}
            <div className="relative z-10 w-full flex justify-center lg:justify-start lg:px-20">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.94)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        boxShadow: "0 40px 60px -15px rgba(0, 0, 0, 0.2)",
                        // --- SOLUCIÓN DEFINITIVA: Padding forzado por estilo ---
                        padding: "clamp(2.5rem, 5vw, 5rem)", // Mínimo 40px, Máximo 80px
                    }}
                    // Clases de Tailwind para estructura (Width, Border, Flex)
                    className="w-full max-w-3xl rounded-[2.5rem] border border-white/60 flex flex-col gap-8 md:gap-10 text-center md:text-left mx-auto md:mx-0"
                >

                    {/* Badge / Etiqueta */}
                    <motion.div variants={itemVariants} className="w-full flex justify-center md:justify-start">
                        <div className="inline-flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
                            <Scale size={14} className="text-[#C5A059]" />
                            <span className="text-[#062C30] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                                Firma Legal Colima
                            </span>
                        </div>
                    </motion.div>

                    {/* Título Principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-serif text-[#062C30] leading-[1.15]"
                    >
                        Justicia con <br className="hidden md:block"/>
                        <span className="italic text-[#C5A059] font-serif">excelencia.</span>
                    </motion.h1>

                    {/* Texto descriptivo */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-lg mx-auto md:mx-0"
                    >
                        Estrategias jurídicas sólidas para proteger su patrimonio.
                        Representación experta donde cada detalle cuenta.
                    </motion.p>

                    {/* Botones */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full pt-2">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-[#C5A059] text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:bg-[#b08d4b]"
                            onPress={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Agendar Cita
                        </Button>

                        <Button
                            size="lg"
                            variant="light"
                            className="w-full sm:w-auto text-[#062C30] font-medium px-6 py-6 rounded-xl hover:bg-gray-100"
                            endContent={<ArrowRight className="w-4 h-4" />}
                        >
                            Nuestros Servicios
                        </Button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;