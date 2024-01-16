/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: colors.transparent,
      white:colors.white,
      black:colors.black,
      slate: colors.slate,
      red: colors.red,
      zinc: colors.zinc,
      wild: {
        '50': 'hsl(120, 29%, 97%)',
        '100': 'hsl(120, 26%, 93%)',
        '200': 'hsl(123, 26%, 85%)',
        '300': 'hsl(123, 26%, 73%)',
        '400': 'hsl(122, 23%, 58%)',
        '500': 'hsl(122, 24%, 45%)',
        '600': 'hsl(123, 25%, 36%)',
        '700': 'hsl(123, 24%, 30%)',
        '800': 'hsl(122, 22%, 24%)',
        '900': 'hsl(123, 20%, 20%)',
        '950': 'hsl(125, 25%, 10%)',
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.7s ease-out",
        "accordion-up": "accordion-up 0.7s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
}
