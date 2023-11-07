/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#4831D4',
      'secondary': '#f7e8d3',
      'black'   : '#0a0a0a',
      'white'  : '#fafafa',
      'gray'  : '#9ca3af',
      'purple' : '#7e22ce',
      'offwhite' : '#f3f4f6',
      'fuchsia' : '#4a044e',
      'deep-blue' : "#0F172A"
      
    },
    fontFamily : {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Rubik', 'serif' ,'Abril Fatface'],
      kenia : ['Kenia', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}

