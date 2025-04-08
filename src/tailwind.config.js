/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            border: "hsl(var(--border))",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          pastel: {
            green: '#F2FCE2',
            yellow: '#FEF7CD', 
            orange: '#FEC6A1',
            purple: '#E5DEFF',
            pink: '#FFDEE2',
            peach: '#FDE1D3',
            blue: '#D3E4FD',
            gray: '#F1F0FB',
          }
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          "fade-in": {
            "0%": {
              opacity: "0",
              transform: "translateY(10px)"
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)"
            }
          },
          "bounce-slow": {
            "0%, 100%": {
              transform: "translateY(0)"
            },
            "50%": {
              transform: "translateY(-10px)"
            }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "fade-in": "fade-in 0.5s ease-out",
          "bounce-slow": "bounce-slow 3s infinite ease-in-out"
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  