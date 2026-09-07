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
          navy: '#081726',
          navyDark: '#040b13',
          navyCard: '#0f2238',
          navyLight: '#16314f',
          amber: '#d9821e',
          amberLight: '#f5a623',
          amberDark: '#b5670e',
          taupe: '#b5ab9e',
          taupeLight: '#d6cec4',
          whatsapp: '#25d366',
          whatsappHover: '#1eb857',
          warmBg: '#f8f7f4',
          warmCard: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
