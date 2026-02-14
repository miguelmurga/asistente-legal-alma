import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Tipos para las props del componente
interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
}

interface ServicesSectionProps {
    services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    const cardVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };

    return (
        <section className="py-24 sm:py-32 bg-light" id="servicios">
            <div className="container mx-auto px-6">

                {/* Encabezado de la Sección */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Áreas de Práctica
                    </h2>
                    <p className="text-lg text-dark-text/70 max-w-2xl mx-auto leading-relaxed">
                        Soluciones jurídicas integrales para proteger lo que más importa.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="
                                group bg-white rounded-2xl p-8
                                border border-transparent
                                transition-all duration-300 ease-in-out
                                hover:shadow-2xl hover:-translate-y-2 hover:border-accent/30
                            "
                        >
                            {/* Icono */}
                            <div className="mb-6 inline-block p-4 rounded-xl bg-accent/10">
                                <service.icon
                                    className="w-10 h-10 text-accent"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Título */}
                            <h3 className="text-2xl font-bold font-serif text-primary mb-4">
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-base text-dark-text/80 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Llamada a la acción inferior */}
                <div className="mt-20 text-center">
                    <a
                        href="#contacto"
                        className="text-lg inline-flex items-center text-primary font-semibold hover:text-accent group transition-colors duration-300"
                    >
                        <span>Consultar mi caso</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;