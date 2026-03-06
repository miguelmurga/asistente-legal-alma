"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Scale, ShieldCheck, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';

interface WikiService {
    title: string;
    description: string;
    legalBasis: string;
    image: string;
    alt: string;
    details: string[];
    keywords: string[];
}

const wikiData: WikiService[] = [
    {
        title: "Divorcio Incausado y Voluntario",
        description: "De acuerdo al Código Civil del Estado de Colima, el divorcio disuelve el vínculo matrimonial y deja a los cónyuges en aptitud de contraer otro.",
        legalBasis: "Artículos 266, 267 y 268 del Código Civil de Colima.",
        image: "/images/publi/tramite-de-divorcio-incausado-y-voluntario.png",
        alt: "Trámite de divorcio en Colima - Información jurídica Wiki",
        details: [
            "Divorcio Incausado: No requiere señalar una causa específica.",
            "Convenio de regularización de situación de hijos y bienes.",
            "Disolución de la sociedad conyugal."
        ],
        keywords: ["divorcio colima", "abogado familiar", "codigo civil colima art 266"]
    },
    {
        title: "Pensión Alimenticia y Sustento",
        description: "La obligación de dar alimentos es recíproca. El que los da tiene a su vez el derecho de pedirlos.",
        legalBasis: "Artículos 301 al 323 del Código Civil de Colima.",
        image: "/images/publi/servicios-pensiones-alimenticias.png",
        alt: "Derecho a pensión alimenticia en Colima - Guía Wiki",
        details: [
            "Comprende: Comida, vestido, habitación, atención médica y educación.",
            "Aseguramiento del pago mediante hipoteca, prenda o fianza.",
            "Registro de Deudores Alimentarios Morosos."
        ],
        keywords: ["pension alimenticia colima", "demanda de alimentos", "derechos de los hijos"]
    },
    {
        title: "Juicios Sucesorios y Testamentos",
        description: "La herencia es la sucesión en todos los bienes del difunto y en todos sus derechos y obligaciones que no se extinguen por la muerte.",
        legalBasis: "Artículos 1177 al 1280 del Código Civil de Colima.",
        image: "/images/publi/juicio-sucesorio-testamentario-intestamentario.png",
        alt: "Juicios sucesorios y herencias en Colima - Wiki Legal",
        details: [
            "Sucesión Testamentaria (con voluntad del finado).",
            "Sucesión Legítima o Intestamentaria.",
            "Derecho a la cuarta parte de la herencia para el cónyuge supérstite."
        ],
        keywords: ["testamentos colima", "juicio sucesorio", "herencias colima"]
    },
    {
        title: "Cobro de Pagarés y Títulos de Crédito",
        description: "La acción cambiaria contra el aceptante o sus avalistas prescribe en tres años contados desde la fecha del vencimiento.",
        legalBasis: "Ley General de Títulos y Operaciones de Crédito.",
        image: "/images/publi/cobro-pagares-juicios-mercantiles.png",
        alt: "Cobro de pagarés en Colima - Juicio Ejecutivo Mercantil",
        details: [
            "Embargo precautorio de bienes para garantizar el pago.",
            "Recuperación de capital e intereses moratorios.",
            "Ejecución de sentencias mercantiles."
        ],
        keywords: ["cobro de pagares", "abogado mercantil colima", "juicio mercantil"]
    },
    {
        title: "Reconocimiento de Concubinato",
        description: "Se presumen hijos del concubinario y de la concubina los nacidos después de ciento ochenta días contados desde que comenzó el concubinato.",
        legalBasis: "Artículo 383 del Código Civil de Colima.",
        image: "/images/publi/reconocimiento-de-concubinato-y-union-libre.png",
        alt: "Reconocimiento legal de concubinato en Colima - Wiki",
        details: [
            "Derechos sucesorios equiparables al matrimonio.",
            "Obligaciones de asistencia y alimentos.",
            "Protección del patrimonio familiar."
        ],
        keywords: ["concubinato colima", "union libre ley", "derechos concubina"]
    },
    {
        title: "Juicios de Paternidad y ADN",
        description: "El derecho a la identidad es un derecho humano. El Código Civil permite la investigación de la paternidad y la maternidad.",
        legalBasis: "Artículos 340 al 353 del Código Civil de Colima.",
        image: "/images/publi/juicio-de-paternidad-adn-mexico.png",
        alt: "Juicio de paternidad en Colima - Prueba de ADN",
        details: [
            "Reconocimiento de hijos nacidos fuera de matrimonio.",
            "Prueba pericial en genética molecular (ADN).",
            "Derechos de filiación y apellido."
        ],
        keywords: ["juicio de paternidad", "prueba adn colima", "reconocimiento hijos"]
    },
    {
        title: "Órdenes de Protección",
        description: "Las autoridades deben dictar medidas urgentes para garantizar la seguridad física y emocional de las personas en riesgo.",
        legalBasis: "Ley de Acceso de las Mujeres a una Vida Libre de Violencia para el Estado de Colima.",
        image: "/images/publi/orden-de-proteccion-medidas-legales.png",
        alt: "Órdenes de protección legal en Colima",
        details: [
            "Separación inmediata del agresor del domicilio.",
            "Prohibición de acercarse a la víctima.",
            "Protección policial y acompañamiento legal."
        ],
        keywords: ["orden de proteccion", "violencia familiar", "ayuda legal colima"]
    },
    {
        title: "Convivencias y Régimen de Visitas",
        description: "El Juez de lo Familiar fijará el régimen de convivencia velando siempre por el interés superior del menor.",
        legalBasis: "Artículo 282 del Código Civil de Colima.",
        image: "/images/publi/regimen-visitas-convivencia-familiar-menores.png",
        alt: "Régimen de convivencias en Colima - Derecho Familiar",
        details: [
            "Regulación de días y horarios de visita.",
            "Convivencias supervisadas en casos necesarios.",
            "Derecho del menor a mantener vínculos con ambos progenitores."
        ],
        keywords: ["convivencias", "regimen de visitas", "derecho familiar colima"]
    },
    {
        title: "Contratos Civiles y Mercantiles",
        description: "El contrato es el acuerdo de dos o más personas para crear, transferir, modificar o extinguir obligaciones.",
        legalBasis: "Artículo 1683 del Código Civil de Colima.",
        image: "/images/publi/elaboracion-contratos-civiles-mercantiles.png",
        alt: "Redacción de contratos en Colima - Información técnica Wiki",
        details: [
            "Validez por consentimiento y objeto.",
            "Instrumentos notariales y privados.",
            "Garantía de seguridad jurídica patrimonial."
        ],
        keywords: ["contratos colima", "seguridad juridica", "elaboracion de contratos"]
    }
];

const WikiGallery: React.FC = () => {
    return (
        <section className="bg-slate-50 min-h-screen pb-24" aria-labelledby="wiki-title">
            <div className="sr-only">
                <h1 id="wiki-title">Wiki Legal Colima: Guía del Código Civil y Servicios Jurídicos</h1>
                <p>Información detallada sobre el Código Civil de Colima reformado en 2023. Especialidades en divorcios, pensiones, sucesiones y contratos por la Lic. Alma Liset en Colima, México.</p>
            </div>

            <div className="bg-[#062C30] text-white py-20 px-6 mb-16">
                <div className="container mx-auto text-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <span className="inline-flex items-center gap-2 text-[#C5A059] font-black uppercase tracking-widest text-xs mb-4">
                            <BookOpen size={16} /> Enciclopedia Jurídica Colima
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Wiki del Código Civil</h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-sans">
                            Base de conocimiento legal actualizada al 2024. Encuentre información técnica y representación profesional para sus asuntos jurídicos en el Estado de Colima.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-32">
                {wikiData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Contenedor de Imagen Vertical Corregido */}
                        <motion.a 
                            href="/asistente"
                            whileHover={{ scale: 1.01 }}
                            className="w-full lg:w-5/12 relative group block bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer min-h-[500px] md:min-h-[700px]"
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt}
                                fill
                                unoptimized={true} // Desactivamos optimización temporal para asegurar carga de archivos pesados
                                style={{ objectFit: 'contain' }}
                                className="transition-transform duration-1000 group-hover:scale-105 p-2"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                                <div className="bg-white/95 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl text-[#062C30] flex items-center gap-2 font-bold border border-slate-100">
                                    <ImageIcon size={20} /> Consultar con Asistente Virtual
                                </div>
                            </div>
                        </motion.a>

                        <div className="w-full lg:w-7/12 space-y-8 p-4">
                            <div className="inline-flex items-center gap-3 text-[#C5A059] font-sans font-black uppercase tracking-[0.2em] text-[10px]">
                                <div className="h-[1px] w-8 bg-[#C5A059]"></div>
                                Información Jurídica Especializada
                            </div>
                            
                            <h4 className="text-4xl font-serif font-bold text-[#062C30] leading-tight">
                                {item.title}
                            </h4>

                            <p className="text-xl text-slate-600 leading-relaxed font-sans font-medium">
                                {item.description}
                            </p>

                            <div className="bg-white p-8 rounded-3xl border-l-8 border-[#C5A059] shadow-sm space-y-6">
                                <div className="flex items-center gap-3 text-[#062C30] font-black text-base uppercase tracking-tighter">
                                    <FileText size={22} className="text-[#C5A059]" />
                                    <span>Fundamento: {item.legalBasis}</span>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-3 text-slate-500 text-base">
                                            <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {item.keywords.map((kw, kIdx) => (
                                    <span key={kIdx} className="text-[11px] text-slate-400 font-black uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-lg border border-slate-200">
                                        #{kw.replace(/\s+/g, '_')}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-8">
                                <a 
                                    href="/#contacto" 
                                    className="inline-flex items-center gap-4 bg-[#C5A059] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#062C30] transition-all shadow-xl shadow-[#C5A059]/20 group active:scale-95"
                                >
                                    Agendar Cita en Despacho
                                    <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 mt-32 pt-20 border-t border-slate-200">
                <div className="max-w-4xl mx-auto prose prose-slate">
                    <h2 className="text-3xl font-serif font-bold text-[#062C30] mb-8">Información sobre el Código Civil para el Estado de Colima</h2>
                    <p className="text-slate-600 leading-loose">
                        El <strong>Código Civil del Estado de Colima</strong> es el cuerpo normativo que regula las relaciones civiles entre las personas en nuestra entidad. Reformado recientemente para incluir disposiciones sobre el Registro de Deudores Alimentarios y procedimientos de divorcio más ágiles, representa la base jurídica para la protección de la familia y el patrimonio. Como <strong>abogada en Colima</strong>, la Lic. Alma Liset utiliza estos fundamentos para garantizar que cada proceso legal se lleve a cabo con estricto apego a la ley vigente, brindando seguridad y resultados a sus clientes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="flex items-start gap-4">
                            <Scale className="text-[#C5A059] shrink-0" size={24} />
                            <div>
                                <h5 className="font-bold text-[#062C30]">Justicia Efectiva</h5>
                                <p className="text-sm text-slate-500">Aplicación técnica de los artículos del código para resoluciones favorables.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="text-[#C5A059] shrink-0" size={24} />
                            <div>
                                <h5 className="font-bold text-[#062C30]">Protección Patrimonial</h5>
                                <p className="text-sm text-slate-500">Defensa legal basada en los títulos de propiedad y sucesiones establecidos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Semantic SEO Articles - Visually hidden but accessible to screen readers and search engines */}
            <article className="sr-only">
                <header>
                    <h2>El Mejor Abogado en Colima para Trámites de Divorcio y Derecho Familiar</h2>
                    <p>Publicado por Despacho Jurídico Lic. Alma Liset</p>
                </header>
                <section>
                    <h3>¿Busca un abogado en Colima experto en derecho familiar?</h3>
                    <p>Encontrar al mejor <strong>abogado en Colima</strong> es fundamental cuando se enfrenta a procesos legales delicados como un divorcio, la exigencia de una pensión alimenticia o la regularización de la guarda y custodia de menores. En nuestro despacho jurídico, liderado por la Licenciada Alma Liset Encarnación Anaya, ofrecemos asesoría legal de primer nivel en el Estado de Colima, basando nuestras estrategias estrictamente en el Código Civil vigente.</p>
                </section>
                <section>
                    <h3>El Divorcio Incausado en el Estado de Colima</h3>
                    <p>De acuerdo con las recientes reformas al Código Civil del Estado de Colima (Artículos 266, 267 y 268), el divorcio incausado permite la disolución del vínculo matrimonial sin la necesidad de probar causales como el abandono o el adulterio. Si usted necesita tramitar un <strong>divorcio exprés en Colima</strong>, nuestro equipo de abogados se encarga de redactar la propuesta de convenio que regulará aspectos vitales como: la pensión alimenticia, la custodia de los hijos, el régimen de convivencias y la liquidación de la sociedad conyugal (bienes mancomunados). Este proceso ágil garantiza que sus derechos y su paz mental queden protegidos.</p>
                </section>
                <section>
                    <h3>Pensiones Alimenticias y el Registro de Deudores en Colima</h3>
                    <p>Garantizar el sustento de los hijos es una prioridad absoluta. Los artículos 301 al 323 del Código Civil de Colima establecen que la obligación de dar alimentos es recíproca y debe ser proporcional a las posibilidades del que los da y a la necesidad del que los recibe. Como su <strong>abogada en Colima</strong>, tramito demandas de alimentos eficaces. Además, la ley en Colima ahora contempla el Registro de Deudores Alimentarios Morosos, una herramienta legal poderosa para obligar el cumplimiento del pago mediante restricciones civiles e incluso migratorias.</p>
                </section>
                <section>
                    <h3>Testamentos y Juicios Sucesorios en Colima</h3>
                    <p>Para proteger su patrimonio y evitar conflictos familiares futuros, redactar un testamento es la decisión más inteligente. Si un familiar ha fallecido sin testamento, somos especialistas en <strong>juicios sucesorios intestamentarios en Colima</strong>, guiando a los herederos legales a través del proceso de nombramiento de albacea, inventario de bienes y adjudicación final, conforme a lo establecido desde el artículo 1177 del Código Civil.</p>
                </section>
                <footer>
                    <p>Contacte a nuestro despacho jurídico en Colima para programar una consulta. Ubicados en Plaza Roma, Avenida San Fernando. Atención especializada, ética profesional y resultados jurídicos comprobables.</p>
                    <p>Palabras clave de búsqueda: <strong>abogados en colima, mejor abogado familiar colima, trámite de divorcio colima, pensión alimenticia, despacho legal colima, asesoría jurídica, testamentos, juicios mercantiles, cobro de pagarés.</strong></p>
                </footer>
            </article>
        </section>
    );
};

export default WikiGallery;
