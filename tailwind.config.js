/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: '#fff8f9',
        surface: '#ffffff',
        border: '#fce4ec',
        accent: '#f06292',
        accentLight: '#fce4ec',
        accentDark: '#c2185b',
        muted: '#f8bbd9',
        textPrimary: '#3d1a26',
        textSecondary: '#9e6b7a',
        blush: '#fdf0f3',
        rose: '#f48fb1',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pop': 'pop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        soft: '0 4px 24px rgba(240,98,146,0.10)',
        card: '0 2px 16px rgba(240,98,146,0.08)',
        hover: '0 8px 32px rgba(240,98,146,0.18)',
      },
    },
  },
  plugins: [],
}
