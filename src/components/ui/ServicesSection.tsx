import React from 'react';
import { motion } from 'framer-motion';
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
    const cardVariants = {
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
        <section className="py-32 bg-brand-light" id="servicios">
            <div className="container mx-auto px-6">

                {/* Encabezado de la Sección */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-4">
                        Áreas de práctica
                    </h2>
                    <p className="text-lg text-brand-dark-text/70 max-w-2xl mx-auto">
                        Soluciones jurídicas integrales para proteger lo que más importa.
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="
                                group bg-white rounded-xl p-8 shadow-lg
                                transition-all duration-300 ease-in-out
                                hover:shadow-xl hover:-translate-y-1
                            "
                        >
                            {/* Icono */}
                            <div className="mb-6">
                                <service.icon
                                    className="w-10 h-10 text-brand-gold"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Título */}
                            <h3 className="text-2xl font-bold font-serif text-brand-green mb-4">
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-base text-brand-dark-text/80 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Llamada a la acción inferior */}
                <div className="mt-20 text-center">
                    <a
                        href="#contacto"
                        className="text-lg inline-flex items-center text-brand-green font-semibold hover:text-brand-gold group"
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