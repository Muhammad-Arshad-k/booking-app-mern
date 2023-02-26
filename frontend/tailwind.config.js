/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,88%,59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(228,39%,23%)',
        darkGrayishBlue:'hsl(227,`12%,61%)',
        veryDarkBlue:'hsl(227,`12%,13%)',
        veryPaleRed:'hsl(13,100%,96%)',
        veryLightGray:'hsl(0,0%,98%)',
        lightDarkBlue:'#86198f',
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubblegum: '#ff77e9',
        bermuda: '#78dcca',
      }
    },
  }, 
  plugins: [],
}
