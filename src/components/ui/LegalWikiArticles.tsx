"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Landmark, Users, Home, Gavel, Shield, ScrollText, Scale, Briefcase, Clock, Map } from 'lucide-react';

const wikiArticles = [
    {
        icon: <Users className="text-[#C5A059]" size={24} />,
        title: "Institución del Registro Civil en Colima",
        content: "El Registro Civil en el Estado de Colima es una institución de orden público e interés social. Según el Artículo 34 BIS del Código Civil, su función es autorizar los actos del estado civil y extender las actas relativas a nacimiento, reconocimiento de hijos, adopción, matrimonio, divorcio y fallecimiento de los colimenses. La base de datos es resguardada electrónicamente para garantizar la identidad jurídica de cada ciudadano.",
        tags: ["Actas de Nacimiento Colima", "Trámites Registro Civil", "Identidad Jurídica"]
    },
    {
        icon: <Landmark className="text-[#C5A059]" size={24} />,
        title: "Requisitos y Solemnidades del Matrimonio",
        content: "El matrimonio en Colima es la unión libre de dos personas para realizar la comunidad de vida. El Artículo 145 establece que debe celebrarse ante los funcionarios que establece la ley y con las formalidades correspondientes. Los pretendientes deben presentar una solicitud ante el Oficial del Registro Civil que incluya nombres, edades, ocupaciones y domicilio, además de cumplir con pláticas prematrimoniales obligatorias sobre violencia familiar y salud reproductiva.",
        tags: ["Matrimonio Civil Colima", "Requisitos Boda Civil", "Sociedad Conyugal"]
    },
    {
        icon: <Gavel className="text-[#C5A059]" size={24} />,
        title: "La Patria Potestad y Custodia de Menores",
        content: "Conforme al Artículo 411, la patria potestad sobre los hijos menores se ejerce por ambos progenitores. En caso de separación, el Juez de lo Familiar en Colima decidirá lo relativo a la guarda y custodia, priorizando siempre el interés superior del menor. La ley protege a los menores contra la alienación parental y garantiza su derecho a un ambiente libre de violencia, permitiendo incluso medidas de apremio para asegurar las convivencias.",
        tags: ["Custodia de hijos Colima", "Patria Potestad Ley", "Derechos del Menor"]
    },
    {
        icon: <Home className="text-[#C5A059]" size={24} />,
        title: "Clasificación de Bienes y Propiedad",
        content: "El Código Civil del Estado de Colima clasifica los bienes en inmuebles y muebles (Art. 747). Son bienes inmuebles el suelo, las construcciones adheridas a él y las plantas mientras estén unidas a la tierra. El derecho de propiedad permite gozar y disponer de una cosa con las limitaciones que fijen las leyes. En Colima, la propiedad privada es fundamental para la seguridad patrimonial de las familias y empresas.",
        tags: ["Derecho de Propiedad", "Bienes Inmuebles Colima", "Seguridad Patrimonial"]
    },
    {
        icon: <FileText className="text-[#C5A059]" size={24} />,
        title: "Sucesiones Testamentarias e Intestamentarias",
        content: "La sucesión se abre en el momento en que muere el autor de la herencia (Art. 1177). En Colima existen dos vías: la testamentaria (basada en la voluntad del difunto) y la legítima (cuando no hay testamento). Los herederos legítimos son los descendientes, cónyuges, ascendientes y parientes colaterales hasta el cuarto grado. Es vital contar con un abogado para el proceso de inventario, avalúo y adjudicación de bienes.",
        tags: ["Intestados Colima", "Herencias", "Testamentos Jurídicos"]
    },
    {
        icon: <Book className="text-[#C5A059]" size={24} />,
        title: "Obligaciones y Contratos Civiles",
        content: "Un contrato es el acuerdo de voluntades para crear o transferir derechos y obligaciones (Art. 1683). Para su validez se requiere el consentimiento y un objeto que pueda ser materia del contrato. En el estado de Colima, los contratos de compraventa, arrendamiento, donación y mutuo deben cumplir con formalidades específicas, como la escritura pública en bienes raíz, para tener validez ante terceros y el Registro Público.",
        tags: ["Contratos Legales", "Arrendamiento Colima", "Validez de Contratos"]
    },
    {
        icon: <Shield className="text-[#C5A059]" size={24} />,
        title: "La Adopción y sus Efectos Legales",
        content: "La adopción en Colima es un acto jurídico mediante el cual una persona asume un vínculo de filiación con el adoptado, recíprocamente, con los derechos y obligaciones inherentes a la relación paterno-filial (Art. 390). La adopción plena extingue la filiación preexistente con la familia biológica, otorgando al menor adoptado los mismos derechos que un hijo consanguíneo, asegurando su integración total al nuevo núcleo familiar.",
        tags: ["Adopción Colima", "Filiación Legal", "Derecho Familiar"]
    },
    {
        icon: <ScrollText className="text-[#C5A059]" size={24} />,
        title: "Institución de la Tutela",
        content: "El objeto de la tutela es la guarda de la persona y bienes de los que no estando sujetos a patria potestad tienen incapacidad natural y legal (Art. 449). En Colima, el Juez de lo Familiar interviene para nombrar tutores testamentarios, legítimos o dativos, asegurando que los menores o personas con discapacidad reciban educación, alimentos y una correcta administración de su patrimonio bajo estricta supervisión judicial.",
        tags: ["Tutela Legal Colima", "Incapacidad Jurídica", "Juicio de Interdicción"]
    },
    {
        icon: <Scale className="text-[#C5A059]" size={24} />,
        title: "El Usufructo y la Habitación",
        content: "El usufructo es el derecho real y temporal de disfrutar de los bienes ajenos (Art. 976). El usufructuario en Colima tiene derecho de percibir todos los frutos, sean naturales, industriales o civiles. Es una figura comúnmente utilizada en donaciones de padres a hijos, donde los padres se reservan el usufructo vitalicio de una propiedad para garantizar su vivienda e ingresos durante su vejez.",
        tags: ["Usufructo Vitalicio", "Donación de Inmuebles", "Derechos Reales"]
    },
    {
        icon: <Clock className="text-[#C5A059]" size={24} />,
        title: "La Prescripción Adquisitiva (Usucapión)",
        content: "La prescripción es un medio de adquirir bienes o de librarse de obligaciones (Art. 1131). En Colima, la adquisición de bienes inmuebles en virtud de la posesión requiere que esta sea en concepto de propietario, pacífica, continua y pública. Los plazos varían: cinco años si la posesión es de buena fe, y diez años si es de mala fe. Es la base de los juicios de usucapión o prescripción positiva.",
        tags: ["Juicio de Usucapión", "Prescripción Positiva", "Posesión de Terrenos"]
    },
    {
        icon: <Briefcase className="text-[#C5A059]" size={24} />,
        title: "Fuentes de las Obligaciones",
        content: "Además de los contratos, el Código Civil regula otras fuentes de obligaciones como la declaración unilateral de la voluntad, el enriquecimiento ilegítimo, la gestión de negocios y los actos ilícitos (responsabilidad civil). Aquel que obrando ilícitamente o contra las buenas costumbres cause daño a otro, está obligado a repararlo (Art. 1801), lo que fundamenta las demandas por daño moral o daños y perjuicios en el Estado.",
        tags: ["Responsabilidad Civil", "Daño Moral Colima", "Gestión de Negocios"]
    },
    {
        icon: <Map className="text-[#C5A059]" size={24} />,
        title: "Servidumbres Legales y Voluntarias",
        content: "La servidumbre es un gravamen real impuesto sobre un inmueble en beneficio de otro perteneciente a distinto dueño (Art. 1053). En zonas rústicas y urbanas de Colima, son comunes las servidumbres legales de desagüe y de paso. El propietario de una finca enclavada sin salida a la vía pública tiene derecho de exigir paso por las heredades vecinas, pagando la indemnización correspondiente.",
        tags: ["Servidumbre de Paso", "Conflictos de Linderos", "Derecho Inmobiliario"]
    }
];

const LegalWikiArticles: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-slate-100" id="wiki-colima">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-black text-[#C5A059] uppercase tracking-[0.3em] mb-4">Base de Conocimiento</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#062C30]">
                            Consultoría Jurídica del Estado de Colima
                        </h3>
                        <p className="text-slate-500 mt-4 font-sans leading-relaxed">
                            Wiki informativa gratuita con fundamentos en el Código Civil de Colima actualizado al 2024. Encuentre respuestas técnicas a sus dudas legales más comunes.
                        </p>
                    </div>
                    <div className="hidden lg:block text-right">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Fuente Oficial</p>
                        <p className="text-xs text-[#062C30] font-black uppercase tracking-tighter">Código Civil Colima 2023</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {wikiArticles.map((article, index) => (
                        <motion.article 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col h-full bg-slate-50/50 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-[#C5A059]/5 transition-all duration-500 border border-transparent hover:border-slate-100"
                        >
                            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                                {article.icon}
                            </div>
                            <h4 className="text-xl font-bold font-serif text-[#062C30] mb-4 group-hover:text-[#C5A059] transition-colors">
                                {article.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6 flex-1">
                                {article.content}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-slate-100">
                                        #{tag.replace(/\s+/g, '')}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Aggressive hidden SEO block for long-tail keywords */}
                <div className="sr-only">
                    <h4>Servicios Legales en todos los municipios de Colima</h4>
                    <p>Atención jurídica profesional en Colima capital, Villa de Álvarez, Manzanillo, Tecomán, Armería, Comala, Coquimatlán, Cuauhtémoc, Ixtlahuacán y Minatitlán. Busco abogado en Colima, despacho jurídico cerca de mi, lic alma liset colima, abogada de divorcios, pensiones alimenticias baratas colima, como tramitar un testamento en colima, juicio sucesorio rapido, abogado mercantil ejecutivo, cobranza judicial colima, asesoria legal gratuita en linea mexico colima.</p>
                    <p>Especialistas en demandas civiles, contestación de demandas, embargos, cancelación de embargos, juicios reivindicatorios, juicios de usucapión, prescripción positiva, prescripción negativa, nulidad de matrimonio, divorcio incausado express, divorcio voluntario administrativo, pensión alimenticia retroactiva, reducción de pensión alimenticia, pérdida de patria potestad, guarda y custodia compartida, régimen de visitas y convivencias, restitución internacional de menores, adopción plena civil, reconocimiento de paternidad ADN, desconocimiento de paternidad, rectificación de actas de nacimiento registro civil, aclaración de actas, cambio de nombre legal, jurisdicción voluntaria, diligencias de información ad perpetuam, contratos de arrendamiento de casas locales comerciales, elaboración de pagarés, cobro de cheques vencidos, endoso en procuración, daños y perjuicios, daño moral accidentes, responsabilidad civil objetiva y subjetiva, interdicción, nommramiento de tutor legal, albacea testamentario, sucesión legítima intestado de bienes, avalúo e inventario, partición de herencia familiar, cesión de derechos hereditarios, copropiedad, división de la cosa común, usufructo vitalicio para padres, servidumbre de paso predios rústicos urbanos, hipotecas y cancelación de hipotecas en el registro público de la propiedad Colima.</p>
                </div>
            </div>
        </section>
    );
};

export default LegalWikiArticles;
