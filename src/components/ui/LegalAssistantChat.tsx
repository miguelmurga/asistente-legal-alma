'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2, AlertTriangle, Phone, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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

// ─── Renderers para ReactMarkdown ────────────────────────────
// Tailwind v4 no lee tailwind.config.ts sin @config → usamos hex directos
// y evitamos el plugin prose que inyecta links azules con subrayado.

const mdAssistant: Components = {
  p:      ({ children }) => <p      style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '1.65', color: 'rgba(31,41,55,0.75)', margin: '6px 0' }}>{children}</p>,
  strong: ({ children }) => <strong style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#062C30' }}>{children}</strong>,
  ul:     ({ children }) => <ul     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', paddingLeft: '20px', margin: '8px 0', listStyleType: 'disc' }}>{children}</ul>,
  ol:     ({ children }) => <ol     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', paddingLeft: '20px', margin: '8px 0', listStyleType: 'decimal' }}>{children}</ol>,
  li:     ({ children }) => <li     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '1.65', color: 'rgba(31,41,55,0.70)', marginBottom: '4px' }}>{children}</li>,
  a:      ({ children, href }) => <a href={href} style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#062C30', textDecoration: 'none' }}>{children}</a>,
};

const mdUser: Components = {
  p:      ({ children }) => <p      style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '1.65', color: 'rgba(255,255,255,0.85)', margin: '6px 0' }}>{children}</p>,
  strong: ({ children }) => <strong style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#C5A059' }}>{children}</strong>,
  ul:     ({ children }) => <ul     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', paddingLeft: '20px', margin: '8px 0', listStyleType: 'disc' }}>{children}</ul>,
  ol:     ({ children }) => <ol     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', paddingLeft: '20px', margin: '8px 0', listStyleType: 'decimal' }}>{children}</ol>,
  li:     ({ children }) => <li     style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '1.65', color: 'rgba(255,255,255,0.80)', marginBottom: '4px' }}>{children}</li>,
  a:      ({ children, href }) => <a href={href} style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#C5A059', textDecoration: 'none' }}>{children}</a>,
};

export default function LegalAssistantChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `¡Hola! Soy el asistente virtual de la Lic. Alma. Te brindaré orientación inicial sin costo en Colima sobre:

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
            headers: { 'Content-Type': 'application/json' },
          });
          if (!res.ok) throw new Error(`Error servidor: ${res.status}`);
          const data = await res.json();
          sessionId = data.token;
          if (sessionId) localStorage.setItem('user_session_id', sessionId);
        }
        if (!conversationId && sessionId) {
          const res = await fetch(`${API_BASE_URL}/conversations/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'User-Session-ID': sessionId },
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
        setConnectionError('No se pudo conectar con el servidor legal. Verifique que el backend esté corriendo.');
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
          if (data.is_urgent) console.warn('SITUACIÓN DE URGENCIA DETECTADA');
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === tempId
                ? { ...msg, content: data.response, status: 'completed', isUrgent: data.is_urgent, contactInfo: data.contact_info }
                : msg
            )
          );
          setIsLoading(false);
          return;
        } else if (data.status === 'error') {
          throw new Error('Error en el procesamiento');
        }
      } catch (error) {
        console.error('Polling error:', error);
        if (attempts === maxAttempts - 1) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === tempId
                ? { ...msg, content: 'El análisis está tomando tiempo. Por favor, espere un momento o llame directamente.', status: 'error' }
                : msg
            )
          );
          setIsLoading(false);
          return;
        }
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
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: currentInput };
    const assistantTempId = (Date.now() + 1).toString();
    const assistantPlaceholder: Message = {
      id: assistantTempId, role: 'assistant',
      content: 'Analizando su situación legal...', status: 'processing',
    };
    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setIsLoading(true);
    if (!conversationId) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantTempId
            ? { ...msg, content: 'Error: Sesión no inicializada. Por favor recargue la página.', status: 'error' }
            : msg
        )
      );
      setIsLoading(false);
      return;
    }
    try {
      const sessionId = localStorage.getItem('user_session_id');
      const response = await fetch(`${API_BASE_URL}/legal-assistant/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Session-ID': sessionId || '' },
        body: JSON.stringify({ conversation_id: conversationId, message: currentInput }),
      });
      const initialData = await response.json();
      if (initialData.message_id) {
        await pollMessageStatus(initialData.message_id, assistantTempId);
      } else {
        throw new Error('No se recibió ID de mensaje');
      }
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantTempId
            ? { ...msg, content: 'Error de comunicación. Intente de nuevo.', status: 'error' }
            : msg
        )
      );
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col h-[100dvh] w-full max-w-2xl mx-auto overflow-hidden md:my-6 md:h-[calc(100vh-3rem)] md:rounded-2xl"
      style={{ background: '#ffffff', boxShadow: '0 4px 40px rgba(6,44,48,0.10), 0 1px 4px rgba(6,44,48,0.06)' }}
    >

      {/* ── HEADER ─────────────────────────────────── */}
      <header
        className="shrink-0 flex justify-between items-center px-5 py-3 md:px-7 md:py-3.5"
        style={{ background: '#ffffff', borderBottom: '1px solid rgba(6,44,48,0.07)' }}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all mr-3"
            style={{ color: 'rgba(6,44,48,0.30)', textDecoration: 'none' }}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </Link>

          <Link href="/" className="flex items-center" style={{ textDecoration: 'none' }}>
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden"
              style={{ boxShadow: '0 2px 8px rgba(6,44,48,0.12)' }}
            >
              <img
                src="/images/logo.png"
                alt="Logo de Alma Encarnación Abogada"
                className="object-contain"
                style={{ maxWidth: '24px', maxHeight: '24px' }}
              />
            </div>

            {/* Separadores físicos — técnica del Navbar */}
            <div style={{ width: '13px' }} />
            <div className="hidden sm:block" style={{ width: '1px', height: '24px', background: 'rgba(6,44,48,0.10)' }} />
            <div className="hidden sm:block" style={{ width: '13px' }} />

            <div className="flex flex-col">
              <span
                className="font-serif"
                style={{ fontSize: '15px', color: '#062C30', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                Alma Encarnación
              </span>
              <div className="flex items-center" style={{ gap: '6px', marginTop: '5px' }}>
                <span
                  className="animate-pulse rounded-full shrink-0"
                  style={{ width: '6px', height: '6px', background: '#C5A059', display: 'inline-block' }}
                />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', fontWeight: 700, color: '#C5A059', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  Abogada &amp; Consultora
                </span>
              </div>
            </div>
          </Link>
        </div>

        <a
          href="tel:3122251010"
          className="flex items-center rounded-lg transition-all"
          style={{
            fontFamily: 'var(--font-sans)', gap: '8px',
            background: '#062C30', color: '#C5A059',
            padding: '8px 16px', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.05em', textDecoration: 'none',
          }}
        >
          <Phone size={13} strokeWidth={1.5} />
          <span className="sm:hidden">Llamar</span>
          <span className="hidden sm:inline">312 225 1010</span>
        </a>
      </header>

      {/* ── ALERTA DE CONEXIÓN ─────────────────────── */}
      {connectionError && (
        <div
          className="shrink-0 flex items-center"
          style={{ fontFamily: 'var(--font-sans)', background: '#fffbeb', borderBottom: '1px solid #fde68a', padding: '10px 20px', fontSize: '11px', color: '#92400e', gap: '8px', fontWeight: 500 }}
        >
          <AlertTriangle size={12} strokeWidth={1.5} />
          {connectionError}
        </div>
      )}

      {/* ── MENSAJES ───────────────────────────────── */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ background: '#F7F8FA', padding: '24px 16px' }}
      >
        <div className="flex flex-col gap-4 max-w-full">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Etiqueta emisor */}
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '6px',
                  paddingLeft: message.role === 'user' ? 0 : '4px',
                  paddingRight: message.role === 'user' ? '4px' : 0,
                  color: message.role === 'user' ? 'rgba(31,41,55,0.25)' : '#C5A059',
                }}>
                  {message.role === 'user' ? 'Tú' : 'Asistente Legal'}
                </p>

                {/* Burbuja */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    maxWidth: '88%',
                    background: message.role === 'user' ? '#062C30' : message.isUrgent ? '#fef2f2' : '#ffffff',
                    borderRadius: message.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                    boxShadow: message.role === 'user'
                      ? '0 4px 16px rgba(6,44,48,0.18)'
                      : '0 1px 8px rgba(6,44,48,0.07), 0 4px 20px rgba(6,44,48,0.04)',
                    border: message.isUrgent ? '1px solid #fee2e2' : 'none',
                  }}
                >
                  <div style={{ padding: '16px 20px' }}>
                    {/* Urgencia */}
                    {message.isUrgent && (
                      <div style={{
                        fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '8px',
                        marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #fee2e2',
                        color: '#ef4444', fontSize: '9px', fontWeight: 700,
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                      }}>
                        <AlertTriangle size={11} strokeWidth={1.5} />
                        Situación urgente detectada
                      </div>
                    )}

                    {/* Procesando */}
                    {message.status === 'processing' ? (
                      <div className="flex items-center" style={{ gap: '10px', padding: '2px 0' }}>
                        <div className="flex items-center" style={{ gap: '5px' }}>
                          {[0, 160, 320].map((delay) => (
                            <span
                              key={delay}
                              className="animate-bounce rounded-full"
                              style={{ width: '6px', height: '6px', background: 'rgba(197,160,89,0.6)', display: 'inline-block', animationDelay: `${delay}ms` }}
                            />
                          ))}
                        </div>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(31,41,55,0.35)', fontStyle: 'italic' }}>
                          {message.content}
                        </span>
                      </div>
                    ) : (
                      /* Contenido: custom renderers, fuente Lato vía CSS var */
                      <div style={{ minWidth: 0 }}>
                        <ReactMarkdown components={message.role === 'user' ? mdUser : mdAssistant}>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>

                  {/* ── CTAs de contacto ── */}
                  {message.role === 'assistant' && message.status === 'completed' && (
                    <div style={{ padding: '0 12px 12px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ borderTop: '1px solid rgba(6,44,48,0.07)', marginBottom: '4px' }} />

                      {/* WhatsApp — CTA Principal */}
                      <a
                        href={`https://wa.me/${(message.contactInfo?.whatsapp || '523122251010').replace(/\+/g, '').replace(/\s+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center transition-all active:scale-[0.98]"
                        style={{
                          fontFamily: 'var(--font-sans)', gap: '8px',
                          background: '#22c55e', color: '#ffffff',
                          borderRadius: '10px', padding: '12px 16px',
                          fontSize: '12px', fontWeight: 700, textDecoration: 'none',
                        }}
                      >
                        <MessageSquare size={15} strokeWidth={1.5} />
                        <span>Escribir por WhatsApp</span>
                      </a>

                      {/* Llamar + Agendar — Secundarios */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <a
                          href={`tel:${message.contactInfo?.phone?.replace(/\s+/g, '') || '3122251010'}`}
                          className="flex items-center justify-center transition-all active:scale-[0.98]"
                          style={{
                            fontFamily: 'var(--font-sans)', gap: '6px',
                            background: 'rgba(6,44,48,0.07)', color: '#062C30',
                            borderRadius: '10px', padding: '10px 12px',
                            fontSize: '11px', fontWeight: 600, textDecoration: 'none',
                          }}
                        >
                          <Phone size={13} strokeWidth={1.5} />
                          <span>Llamar</span>
                        </a>
                        <Link
                          href="/#contacto"
                          className="flex items-center justify-center transition-all active:scale-[0.98]"
                          style={{
                            fontFamily: 'var(--font-sans)', gap: '6px',
                            background: 'rgba(197,160,89,0.12)', color: '#C5A059',
                            borderRadius: '10px', padding: '10px 12px',
                            fontSize: '11px', fontWeight: 600, textDecoration: 'none',
                          }}
                        >
                          <Calendar size={13} strokeWidth={1.5} />
                          <span>Agendar</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} style={{ height: '8px' }} />
        </div>
      </div>

      {/* ── INPUT ──────────────────────────────────── */}
      <div
        className="shrink-0"
        style={{ background: '#ffffff', borderTop: '1px solid rgba(6,44,48,0.07)', padding: '14px 16px 20px' }}
      >
        <form onSubmit={handleSend} className="flex max-w-2xl mx-auto" style={{ gap: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu consulta legal…"
            disabled={isLoading || !!connectionError}
            autoComplete="off"
            className="flex-1 outline-none transition-all"
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '14px',
              background: '#F7F8FA', border: '1px solid rgba(6,44,48,0.10)',
              borderRadius: '12px', padding: '14px 20px',
              color: '#1F2937',
            }}
            onFocus={(e) => {
              e.target.style.background = '#ffffff';
              e.target.style.borderColor = 'rgba(6,44,48,0.25)';
              e.target.style.boxShadow = '0 0 0 3px rgba(6,44,48,0.06)';
            }}
            onBlur={(e) => {
              e.target.style.background = '#F7F8FA';
              e.target.style.borderColor = 'rgba(6,44,48,0.10)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !!connectionError}
            className="shrink-0 flex items-center justify-center rounded-xl transition-all active:scale-95"
            style={{
              width: '48px', height: '48px',
              background: '#062C30', color: '#C5A059',
              opacity: (isLoading || !input.trim() || !!connectionError) ? 0.35 : 1,
              cursor: (isLoading || !input.trim() || !!connectionError) ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <Send size={15} strokeWidth={1.5} />
            }
          </button>
        </form>
        <p style={{
          fontFamily: 'var(--font-sans)', textAlign: 'center',
          fontSize: '9px', color: 'rgba(31,41,55,0.20)',
          marginTop: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          ASESORÍA LEGAL COLIMA • CONFIDENCIAL Y SEGURA
        </p>
      </div>

    </div>
  );
}
