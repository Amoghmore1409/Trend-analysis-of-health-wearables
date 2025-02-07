/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
    colors:{
    
    green:{
      dark:'#133923',
      light:'#88B196',
      blue:'#255889',
    },

    ecra: {
      dark:'#c2b280',
      light:'#e6e0cc',
      darkest:'#776d4d',
    },
    primary: {
      light: '#FF7F50', // Light orange
      DEFAULT: '#ADD8E6', // Default orange
      dark: '#C2410C', // Dark orange
    },
    secondary: {
      light: '#4CAF50', // Light green
      DEFAULT: '#8F3975' , // Medium green
      dark: '#FFD1DC', // Dark geen
    },
    
    },
   
  },
},
  plugins: [],
}

