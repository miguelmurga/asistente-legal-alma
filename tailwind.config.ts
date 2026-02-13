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
        // Paleta Refinada para Asesoría Legal
        'brand-green': '#103A24',       // Verde profundo (Autoridad)
        'brand-gold': '#C5A059',        // Dorado mate (Elegancia)
        'brand-silver': '#E5E7EB',      // Plata/Gris claro (Modernidad)
        'brand-light': '#F9F7F2',       // Blanco roto/Crema (Fondo suave)
        'brand-dark-text': '#1F2937',   // Texto principal (Legibilidad)
        'brand-light-text': '#F3F4F6',  // Texto sobre fondos oscuros

        // Mantenemos compatibilidad si heredas componentes previos
        "green-primary": "#103A24",
        "gold-primary": "#C5A059",
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
            background: "#F9F7F2", // Usando brand-light por defecto
            foreground: "#1F2937", // Usando brand-dark-text
            primary: {
              DEFAULT: "#103A24",
              foreground: "#F9F7F2",
            },
            focus: "#C5A059",
          },
        },
      },
    }),
  ],
};

export default config;