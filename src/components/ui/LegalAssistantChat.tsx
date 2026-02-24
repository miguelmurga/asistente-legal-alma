'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Loader2, AlertTriangle, Phone, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@heroui/react";

// Usamos una ruta relativa (Next.js API Proxy) para evitar bloqueos de CORS
const API_BASE_URL = '/api/proxy';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  status?: 'processing' | 'completed' | 'error';
  isUrgent?: boolean;
  contactInfo?: {
    phone?: string;
    whatsapp?: string;
    lawyer_name?: string;
  };
}

export default function LegalAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `¡Hola! Soy el asistente virtual de la Lic. Alma Encarnación. Te brindaré orientación inicial sin costo en Colima sobre:

⚖️ **Divorcios y Pensiones.**

📜 **Sucesiones y Herencias.**

🤝 **Concubinato y Paternidad.**

🖋️ **Contratos y Pagarés.**

🏠 **Convivencia y Protección.**

Chat inicial: **Gratis**. ¿Cuál es tu duda legal?`,
      status: 'completed',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    setInput('');

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: currentInput,
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
          message: currentInput,
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
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg mt-1 ${
                  message.role === 'user' ? 'bg-[#062C30] text-white shadow-[#062C30]/20' : 'bg-white text-[#C5A059] shadow-slate-200'
                }`}>
                  {message.role === 'user' ? <User size={20} strokeWidth={2.5} /> : <Bot size={20} strokeWidth={2.5} />}
                </div>

                {/* Bubble with Whitespace and Typography */}
                <div className={`p-6 md:p-8 rounded-3xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-[#062C30] to-[#0a4d54] text-white rounded-tr-none shadow-xl shadow-[#062C30]/10'
                    : `bg-white border border-slate-100 text-slate-800 rounded-tl-none shadow-xl shadow-slate-200/50`
                }`}>
                  
                  {message.status === 'processing' ? (
                    <div className="flex items-center gap-4 py-2">
                      <Loader2 className="w-5 h-5 animate-spin text-[#C5A059]" />
                      <span className="text-sm font-black text-slate-400 uppercase tracking-widest">{message.content}</span>
                    </div>
                  ) : (
                    <div className={`prose prose-sm md:prose-base max-w-none font-sans font-medium leading-relaxed ${message.role === 'user' ? 'prose-invert text-white/90' : 'text-slate-600'}`}>
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  )}

                  {/* Quick Action Grid with HeroUI Buttons */}
                  {message.role === 'assistant' && message.status === 'completed' && (
                    <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-3 gap-3">
                      <Button
                        as="a"
                        href={`tel:${message.contactInfo?.phone?.replace(/\s+/g, '') || '3122251010'}`}
                        variant="flat"
                        size="sm"
                        className="bg-slate-50 text-[#062C30] font-black uppercase text-[10px] tracking-widest h-14"
                        startContent={<Phone size={16} className="text-[#C5A059]" />}
                      >
                        Llamar
                      </Button>
                      <Button
                        as="a"
                        href={`https://wa.me/${(message.contactInfo?.whatsapp || '523122251010').replace(/\+/g, '').replace(/\s+/g, '')}`}
                        target="_blank"
                        variant="flat"
                        size="sm"
                        className="bg-slate-50 text-green-700 font-black uppercase text-[10px] tracking-widest h-14"
                        startContent={<MessageSquare size={16} className="text-green-500" />}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        as={Link}
                        href="/#contacto"
                        variant="flat"
                        size="sm"
                        className="bg-slate-50 text-[#C5A059] font-black uppercase text-[10px] tracking-widest h-14"
                        startContent={<Calendar size={16} />}
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

      {/* Input Section - Capsule Design */}
      <div className="p-6 md:p-8 bg-white border-t border-slate-100 shrink-0">
        <form onSubmit={handleSend} className="flex items-center max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-1.5 focus-within:ring-4 focus-within:ring-[#C5A059]/10 transition-all shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿Qué duda legal tienes hoy?"
            disabled={isLoading || !!connectionError}
            className="flex-1 bg-transparent outline-none px-6 py-4 text-[#062C30] font-sans font-medium placeholder:text-slate-300 disabled:opacity-50"
          />
          <Button
            type="submit"
            isIconOnly
            radius="2xl"
            disabled={isLoading || !input.trim() || !!connectionError}
            className="bg-[#062C30] text-[#C5A059] h-14 w-14 shadow-xl shadow-[#062C30]/20 hover:scale-105 active:scale-95 transition-all"
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send size={24} strokeWidth={2.5} />}
          </Button>
        </form>
        <p className="text-[10px] text-center text-slate-300 mt-6 uppercase font-black tracking-[0.3em]">
          ASESORÍA LEGAL COLIMA • CONFIDENCIAL Y SEGURA
        </p>
      </div>
    </div>
  );
}
