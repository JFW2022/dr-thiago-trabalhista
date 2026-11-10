/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Azul Marinho Oficial MITA (Page 3 Manual)
          navy: '#0C192F',
          navyDark: '#070F1E',
          navyCard: '#13233F',
          navyLight: '#1C3259',
          navyBorder: 'rgba(206, 170, 123, 0.25)',

          // Cinza Grafite Oficial MITA
          graphite: '#323A45',
          graphiteLight: '#4B5563',
          graphiteDark: '#1F252D',

          // Dourado Champanhe Oficial MITA (Page 3 Manual)
          champagne: '#CEAA7B',
          champagneLight: '#DFCAA6',
          champagneDark: '#B58E5E',

          // Alias amber for complete component compatibility
          amber: '#CEAA7B',
          amberLight: '#DFCAA6',
          amberDark: '#B58E5E',

          // Neutros e Fundos
          warmBg: '#F2EFEB',
          warmCard: '#FFFFFF',
          warmBorder: '#E5DFD7',

          taupe: '#9CA3AF',
          taupeLight: '#E5E7EB',
          whatsapp: '#25D366',
          whatsappHover: '#1EB857',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Montserrat', 'Helvetica', 'sans-serif'],
        garamond: ['"EB Garamond"', 'Garamond', 'Georgia', 'serif'],
        serif: ['"EB Garamond"', 'Garamond', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
