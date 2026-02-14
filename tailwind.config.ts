import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Corporativa Premium para Firma Legal
        'primary': '#062C30',      // Verde Profundo (Autoridad, Fondo Oscuro)
        'accent': '#C5A059',       // Dorado/Bronce (Detalles, Botones, Bordes)
        'light': '#F5F5F7',        // Gris muy tenue (Fondos Claros)
        'dark-text': '#1F2937',   // Texto principal (Legibilidad)
        'light-text': '#F3F4F6',  // Texto sobre fondos oscuros
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // Fondo principal ahora es blanco
            foreground: "#062C30", // Texto principal es el Verde Profundo
            primary: {
              DEFAULT: "#062C30",
              foreground: "#FFFFFF",
            },
            focus: "#C5A059", // El foco de atención es el acento Dorado
          },
        },
      },
    }),
  ],
};

export default config;