'use client';

import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function FloatingChatButton() {
  const pathname = usePathname();

  // No mostrar el botón flotante si ya estamos en la página del asistente
  if (pathname === '/asistente') {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/asistente"
        className="flex items-center gap-3 bg-[#062C30] hover:bg-[#051f23] text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 group overflow-hidden no-underline"
      >
        <div className="relative">
          <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#062C30] rounded-full"></span>
        </div>
        <div className="flex flex-col items-start leading-none pr-2">
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Asistente</span>
          <span className="text-sm font-bold">ALMA 24/7</span>
        </div>
      </Link>

      {/* Tooltip hint */}
      <div className="absolute bottom-full right-0 mb-3 w-48 bg-white p-3 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-300">
        <p className="text-xs text-gray-600 font-medium leading-relaxed">
          ¿Dudas legales en Colima? <span className="text-[#062C30] font-bold">Pregúntame ahora.</span>
        </p>
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
      </div>
    </motion.div>
  );
}
