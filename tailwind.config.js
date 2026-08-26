/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00B9F2',
          'blue-dark': '#0097C7',
          'blue-light': '#E5F8FF',
          emerald: '#0B8F6A',
          'emerald-light': '#10B989',
          'emerald-soft': '#E6F6F2',
          golden: '#D9A72C',
          'golden-light': '#F5C856',
          'golden-soft': '#FDF8EC',
          navy: '#12263A',
          'navy-dark': '#0A1724',
          'soft-bg': '#F5F9FC',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 185, 242, 0.3)',
        'glow-emerald': '0 0 25px rgba(11, 143, 106, 0.25)',
        'glow-golden': '0 0 25px rgba(217, 167, 44, 0.25)',
        'premium': '0 10px 40px -10px rgba(18, 38, 58, 0.08)',
        'premium-hover': '0 20px 50px -12px rgba(0, 185, 242, 0.18)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
