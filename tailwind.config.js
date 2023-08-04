/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',


    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'rgb(247, 247, 247)',
        yellowcolr:'hsla(54, 96%, 53%, 1)',
        icl:'hsla(54, 100%, 45%, 1)',
        readmore:'hsla(54, 100%, 45%, 0.3)',
        Textlight:'hsla(0, 0%, 47%, 1)'
        
      },
    },
  },
  plugins: [],
}

