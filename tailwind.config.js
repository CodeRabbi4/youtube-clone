/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Robo:'"Roboto", sans-serif'
    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '1rem',
      },
    },
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
      "2xl":"1550px"
    },
    extend: {},
  },
  plugins: [],
}

