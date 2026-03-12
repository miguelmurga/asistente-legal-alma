'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Loader2, AlertTriangle, Phone, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@heroui/react";

// Usamos una ruta relativa (Next.js API Proxy) para evitar bloqueos de CORS
const API_BASE_URL = '/api/proxy';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  status?: 'processing' | 'completed' | 'error';
  isUrgent?: boolean;
  options?: { label: string; value: string }[];
  contactInfo?: {
    phone?: string;
    whatsapp?: string;
    lawyer_name?: string;
  };
}

const ASSISTANCE_OPTIONS = [
  { label: '⚖️ Divorcios y Pensiones', value: 'Divorcios y Pensiones' },
  { label: '📜 Sucesiones y Herencias', value: 'Sucesiones y Herencias' },
  { label: '🤝 Concubinato y Paternidad', value: 'Concubinato y Paternidad' },
  { label: '🖋️ Contratos y Pagarés', value: 'Contratos y Pagarés' },
  { label: '🏠 Convivencia y Protección', value: 'Convivencia y Protección' },
];

const LEGAL_TIPS_COLIMA: Record<string, string[]> = {
  'Divorcios y Pensiones': [
    "¿El papá dice que no trabaja para no dar pensión? ¡No te preocupes! Podemos solicitar que se fije con base al salario mínimo ($315.04 diarios en Colima).",
    "¿No te da para los gastos de tu hij@? Demandamos Pensión Alimenticia. Recuerda que es un derecho irrenunciable y prioritario.",
    "Si el deudor alimentario oculta sus ingresos, el juez tiene la facultad de investigar sus cuentas bancarias y bienes ante el SAT.",
    "¿Te dicen que no te darán nada porque no están casados? Falso. El derecho a la pensión nace del parentesco, no del matrimonio.",
    "La pensión alimenticia en Colima incluye: comida, vestido, habitación, atención médica, gastos de educación y sano esparcimiento.",
    "Si el padre tiene un trabajo formal, solicitamos el descuento directo por nómina para asegurar que el dinero llegue a tiempo.",
    "¿Sabías que puedes pedir una 'Pensión Provisional' desde que presentas la demanda? Así no tienes que esperar hasta el final del juicio.",
    "En Colima, el divorcio incausado permite disolver el vínculo matrimonial sin señalar una causa específica, agilizando el proceso.",
    "Las pensiones alimenticias no solo cubren comida; incluyen educación, vestimenta, salud y recreación para los menores."
  ],
  'Sucesiones y Herencias': [
    "El testamento ológrafo en México debe ser escrito de puño y letra por el testador y depositado ante el Registro Público para ser válido.",
    "Un juicio sucesorio intestamentario se inicia cuando una persona fallece sin dejar testamento; la ley define quiénes son los herederos.",
    "Para heredar una propiedad de Infonavit o Fovissste, es necesario revisar si el crédito contaba con seguro de vida vigente.",
    "¿Sabías que puedes heredar deudas? Por eso es vital tramitar la herencia 'a beneficio de inventario' para proteger tu propio dinero.",
    "Si no hay testamento, la ley de Colima prioriza a hijos y cónyuge en la repartición de bienes de forma equitativa.",
    "El testamento ante Notario Público es la forma más segura y rápida de proteger el futuro de tu familia en México."
  ],
  'Concubinato y Paternidad': [
    "El concubinato en Colima genera derechos similares al matrimonio tras 2 años de cohabitación o al tener un hijo en común.",
    "La patria potestad no es un derecho de los padres, sino una obligación de protección y crianza en beneficio de los hijos.",
    "En México, el derecho a la identidad es fundamental; el registro de nacimiento es gratuito y obligatorio para todos los niños.",
    "El reconocimiento de un hijo es un acto irrevocable; una vez firmado el acta ante el Registro Civil, no se puede retirar.",
    "Los concubinos tienen derecho a heredarse mutuamente en Colima, cumpliendo con los requisitos de ley, igual que los esposos.",
    "Si un padre se niega a reconocer a su hijo, podemos iniciar un juicio de paternidad y solicitar la prueba pericial de ADN."
  ],
  'Contratos y Pagarés': [
    "Si firmas un pagaré en blanco, estás asumiendo un riesgo legal alto. Nunca entregues documentos firmados sin montos definidos.",
    "Los contratos de compraventa de inmuebles deben elevarse a escritura pública ante notario para que tengan plena validez legal.",
    "Si un deudor no paga, la vía ejecutiva mercantil permite embargar bienes desde el primer momento de la notificación.",
    "Los intereses moratorios en préstamos no pueden ser excesivos; un juez tiene el poder de reducirlos si son abusivos.",
    "En contratos de arrendamiento, firma siempre un inventario detallado del estado de la casa para evitar cobros injustos al final.",
    "Un contrato verbal puede ser válido, pero ante un conflicto, siempre será más fácil defenderte si tienes un documento firmado."
  ],
  'Convivencia y Protección': [
    "Colima cuenta con un Centro de Justicia para las Mujeres (CJM) que ofrece asesoría y protección inmediata en casos de violencia.",
    "En Colima, los convenios logrados en el Centro de Justicia Alternativa tienen la misma validez que una sentencia definitiva.",
    "Al comprar un terreno, solicita siempre el Certificado de Libertad de Gravamen ante el Registro Público de la Propiedad.",
    "Si sufres un accidente vial en Colima y no hay lesionados, puedes usar justicia alternativa para reparar los daños rápidamente.",
    "El 'Amparo' es la herramienta jurídica más poderosa en México para protegerte contra abusos de cualquier autoridad.",
    "Si recibes una notificación judicial, no la ignores. El tiempo para contestar es corto y el silencio puede perjudicarte mucho."
  ],
  'General': [
    "La asesoría legal a tiempo evita problemas costosos en el futuro. ¡Pregúntame tus dudas sin compromiso!",
    "En Colima, existen instituciones de defensa gratuita si no cuentas con recursos para un abogado particular.",
    "Cualquier documento legal que firmes debe ser leído con cuidado; si no entiendes algo, es mejor no firmar hasta consultar.",
    "Recuerda que los plazos legales son estrictos. Si tienes un problema legal, el tiempo es un factor determinante."
  ]
};

export default function LegalAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `¡Hola! Soy el asistente virtual de la Lic. Alma Encarnación. Te brindaré orientación inicial sin costo en Colima sobre los siguientes temas.

Chat inicial: **Gratis**. ¿Cuál es tu duda legal?`,
      options: ASSISTANCE_OPTIONS,
      status: 'completed',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const tips = LEGAL_TIPS_COLIMA[selectedCategory] || LEGAL_TIPS_COLIMA['General'];
    
    if (isLoading) {
      setCurrentTipIndex(Math.floor(Math.random() * tips.length));
      interval = setInterval(() => {
        setCurrentTipIndex((prev) => (prev + 1) % tips.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isLoading, selectedCategory]);

  useEffect(() => {
    const initChat = async () => {
      let sessionId = localStorage.getItem('user_session_id');
      
      try {
        if (!sessionId) {
          const res = await fetch(`${API_BASE_URL}/create-session/`, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          });
          if (!res.ok) throw new Error(`Error servidor: ${res.status}`);
          const data = await res.json();
          sessionId = data.token;
          if (sessionId) localStorage.setItem('user_session_id', sessionId);
        }

        if (!conversationId && sessionId) {
          const res = await fetch(`${API_BASE_URL}/conversations/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Session-ID': sessionId,
            },
            body: JSON.stringify({ service: 'legal_assistant' }),
          });
          if (!res.ok) throw new Error(`Error al crear conversación: ${res.status}`);
          const data = await res.json();
          if (data.conversation_id) {
            setConversationId(data.conversation_id.toString());
            setConnectionError(null);
          }
        }
      } catch (error) {
        console.error('Error de conexión:', error);
        setConnectionError("No se pudo conectar con el servidor legal.");
      }
    };
    initChat();
  }, [conversationId]);

  const pollMessageStatus = async (messageId: string, tempId: string) => {
    let attempts = 0;
    const maxAttempts = 45;

    while (attempts < maxAttempts) {
      try {
        const res = await fetch(`${API_BASE_URL}/message-status/${messageId}/`);
        const data = await res.json();

        if (data.status === 'completed') {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === tempId
                ? { 
                    ...msg, 
                    content: data.response, 
                    status: 'completed', 
                    isUrgent: data.is_urgent,
                    contactInfo: data.contact_info
                  }
                : msg
            )
          );
          setIsLoading(false);
          return;
        } else if (data.status === 'error') {
          throw new Error("Error en el procesamiento");
        }
      } catch (error) {
        console.error('Polling error:', error);
      }
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    const assistantTempId = (Date.now() + 1).toString();
    const assistantPlaceholder: Message = {
      id: assistantTempId,
      role: 'assistant',
      content: 'Analizando su situación legal...',
      status: 'processing',
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setIsLoading(true);

    try {
      const sessionId = localStorage.getItem('user_session_id');
      const response = await fetch(`${API_BASE_URL}/legal-assistant/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Session-ID': sessionId || '',
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          message: text,
        }),
      });

      const initialData = await response.json();
      if (initialData.message_id) {
        await pollMessageStatus(initialData.message_id, assistantTempId);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const currentInput = input;
    setInput('');
    setSelectedCategory('General');
    await sendMessage(currentInput);
  };

  const handleSelectOption = (option: string) => {
    setSelectedCategory(option);
    sendMessage(option);
  };

  return (
    <div className="flex flex-col h-[100dvh] w-full max-w-5xl mx-auto bg-slate-50 overflow-hidden shadow-2xl md:my-4 md:h-[calc(100vh-2rem)] md:rounded-3xl border border-slate-200/50">
      
      {/* Header Premium */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/80 border-b border-slate-100 px-6 py-5 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-6">
          <Link href="/" className="p-3 hover:bg-slate-100 rounded-2xl transition-all text-slate-400 hover:text-[#062C30]">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </Link>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#C5A059] rounded-full animate-pulse shadow-[0_0_12px_rgba(197,160,89,0.5)]"></div>
              <h1 className="text-xl font-serif font-black text-[#062C30] tracking-tighter leading-none uppercase">
                Alma Encarnación <span className="font-sans text-[#C5A059]">&</span> Asociados
              </h1>
            </div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1 ml-4">Firma Legal</p>
          </div>
        </div>
        
        <Button
            as="a"
            href="tel:3122251010"
            variant="shadow"
            size="sm"
            className="bg-[#062C30] text-white font-bold px-6 shadow-xl shadow-[#062C30]/20 hover:scale-[1.05] active:scale-95 transition-all hidden sm:flex gap-2"
            startContent={<Phone size={16} strokeWidth={2.5} className="text-[#C5A059]" />}
        >
            312 225 1010
        </Button>
      </header>

      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-10 bg-slate-50/50 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[90%] md:max-w-[80%] gap-4 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar with Shadow */}
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 overflow-hidden ${
                  message.role === 'user' ? 'bg-[#062C30] text-white shadow-[#062C30]/20' : 'bg-white shadow-slate-200 border border-slate-100'
                }`}>
                  {message.role === 'user' ? (
                    <User size={20} strokeWidth={2.5} />
                  ) : (
                    <Image 
                      src="/images/botico.png" 
                      alt="Asistente Alma" 
                      width={48} 
                      height={48} 
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>

                {/* Bubble with Whitespace and Typography */}
                <div className={`p-4 md:p-8 rounded-3xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-[#062C30] to-[#0a4d54] text-white rounded-tr-none shadow-xl shadow-[#062C30]/10'
                    : `bg-white border border-slate-100 text-slate-800 rounded-tl-none shadow-xl shadow-slate-200/50`
                }`}>
                  
                  {message.status === 'processing' ? (
                    <div className="flex flex-col gap-4 py-2">
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin text-[#C5A059]" />
                        <span className="text-[10px] font-black text-[#062C30] uppercase tracking-[0.2em] animate-pulse">
                          Procesando consulta...
                        </span>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={`${selectedCategory}-${currentTipIndex}`}
                        className="bg-[#C5A059]/5 border-l-2 border-[#C5A059] p-3 rounded-r-xl"
                      >
                        <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mb-1">
                          Tip Legal de la Lic. Alma:
                        </p>
                        <p className="text-xs text-slate-500 italic leading-relaxed">
                          &quot;{(LEGAL_TIPS_COLIMA[selectedCategory] || LEGAL_TIPS_COLIMA['General'])[currentTipIndex]}&quot;
                        </p>
                      </motion.div>
                    </div>
                  ) : (
                    <div className={`prose prose-sm md:prose-base max-w-none font-sans font-medium leading-relaxed ${message.role === 'user' ? 'prose-invert text-white/90' : 'text-slate-600'}`}>
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  )}

                  {/* Assistance Options Buttons */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-4 flex flex-col gap-2">
                      {message.options.map((option, idx) => (
                        <Button
                          key={idx}
                          onPress={() => handleSelectOption(option.value)}
                          variant="bordered"
                          className="justify-start text-left border-slate-200 text-[#062C30] font-bold hover:bg-slate-50 hover:border-[#C5A059] transition-all py-3 md:py-4 h-auto whitespace-normal text-xs md:text-sm shadow-sm"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Quick Action Grid - Micro-Subtle Boutique Style */}
                  {message.role === 'assistant' && message.status === 'completed' && (
                    <div className="mt-5 pt-5 border-t border-slate-50 flex flex-wrap gap-2">
                      <Button
                        as="a"
                        href={`https://wa.me/${(message.contactInfo?.whatsapp || '523122251010').replace(/\+/g, '').replace(/\s+/g, '')}`}
                        target="_blank"
                        variant="flat"
                        className="bg-green-50/50 text-green-700 font-bold h-8 px-3 text-[10px] rounded-lg min-w-0"
                        startContent={<MessageSquare size={12} strokeWidth={2.5} />}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        as="a"
                        href={`tel:${message.contactInfo?.phone?.replace(/\s+/g, '') || '3122251010'}`}
                        variant="flat"
                        className="bg-slate-50/50 text-slate-500 font-bold h-8 px-3 text-[10px] rounded-lg min-w-0"
                        startContent={<Phone size={12} strokeWidth={2} />}
                      >
                        Llamar
                      </Button>
                      <Button
                        as={Link}
                        href="/#contacto"
                        variant="flat"
                        className="bg-slate-50/50 text-slate-500 font-bold h-8 px-3 text-[10px] rounded-lg min-w-0"
                        startContent={<Calendar size={12} strokeWidth={2} />}
                      >
                        Agendar
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} className="h-10" />
      </div>

      {/* Input Section - Compact Capsule Design */}
      <div className="p-4 md:p-6 bg-white border-t border-slate-100 shrink-0">
        <form onSubmit={handleSend} className="flex items-center max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-2xl p-1 focus-within:ring-4 focus-within:ring-[#C5A059]/5 transition-all shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿Qué duda legal tienes hoy?"
            className="flex-1 bg-transparent outline-none px-5 py-2.5 text-[#062C30] font-sans text-sm font-medium placeholder:text-slate-300"
          />
          <Button
            type="submit"
            isIconOnly
            radius="full"
            disabled={isLoading || !input.trim() || !!connectionError}
            className="bg-[#062C30] text-[#C5A059] h-10 w-10 shadow-lg shadow-[#062C30]/10 hover:scale-105 active:scale-95 transition-all"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={18} strokeWidth={2.5} />}
          </Button>
        </form>
        <p className="text-[9px] text-center text-slate-300 mt-4 uppercase font-black tracking-[0.3em]">
          ASESORÍA LEGAL COLIMA • CONFIDENCIAL Y SEGURA
        </p>
      </div>
    </div>
  );
}
