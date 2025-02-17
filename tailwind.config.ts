import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: ["class"],
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         keyframes: {
            scroll: {
               "0%": { transform: "translateX(0)" },
               "100%": { transform: "translateX(-100%)" },
            },
            float: {
               '0%, 100%': { transform: 'translateY(0)' },
               '50%': { transform: 'translateY(-10px)' }, // Ajuste a altura do "flutuar"
            },
         },
         animation: {
            scroll: "scroll 20s linear infinite",
            float: 'float 3s ease-in-out infinite',
         },
         shadow: {
            neon: "0 0 10px 'rgb(30, 58, 138, 0.8)', 0 0 20px 'rgb(30, 58, 138, 0.8)'",
         },
         borderColor: {
            neon: "#1E3A8A78",
         },
         colors: {
            neonGreen: "#1e3a8a",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
               dark: '#1E3A8A',  // Azul-marinho
               dark_opacity: '#1E3A8A99',  // Azul-marinho
               light: '#3B82F6', // Azul-claro
            },
            neutral: {
               white: '#FFFFFF', // Branco
               light: '#F3F4F6', // Cinza-claro
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            chart: {
               1: "hsl(var(--chart-1))",
               2: "hsl(var(--chart-2))",
               3: "hsl(var(--chart-3))",
               4: "hsl(var(--chart-4))",
               5: "hsl(var(--chart-5))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
            korb: "korb",
            GreenKing: "GreenKing'sWood",
            Roseberry: "Roseberry",
         },
         dropShadow: {
            textsm: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            textmd: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            textlg: "3px 3px 6px rgba(0, 0, 0, 0.8)",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};

export default config;
