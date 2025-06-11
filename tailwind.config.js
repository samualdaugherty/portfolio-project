/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#F32929',
        'black': '#100417',
        'white': '#F7F4F3',
        'blue': '#186184',
      },
      fontFamily: {
        'alumni': ['"Alumni Sans"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        // Headers
        'xl-header': ['8rem', { lineHeight: '72%', letterSpacing: '-5px' }],
        'xl-header-sm': ['13.75rem', { lineHeight: '72%', letterSpacing: '-5px' }],
        'lg-header': ['6rem', { lineHeight: '100%', letterSpacing: '-2px' }],
        'md-header': ['2.25rem', { lineHeight: '56px', letterSpacing: '-1px' }],
        'md-header-sm': ['3rem', { lineHeight: '56px', letterSpacing: '-1px' }],
        'sm-header': ['1.75rem', { lineHeight: '36px', letterSpacing: '0%' }],
        'sm-header-sm': ['2rem', { lineHeight: '36px', letterSpacing: '0%' }],
        'nav-link': ['2.25rem', { lineHeight: '36px', letterSpacing: '0%' }],
        
        // Body Text
        'body': ['1.25rem', { lineHeight: '125%', fontFamily: 'Lato', fontWeight: '300' }],
        'body-large': ['1.5rem', { lineHeight: '32px' }],
        
        // Other Styles
        'background-text': ['13.75rem', { lineHeight: '127px', letterSpacing: '-2%' }],
        'eyebrow': ['2rem', { lineHeight: '36px', letterSpacing: '-2%' }],
        'button': ['2.75rem', { lineHeight: '44px', letterSpacing: '-2%' }],
      },
      fontWeight: {
        'light': 300,
        'bold': 700,
      },
      boxShadow: {
        'less-subtle': '15.999px 32.249px 75px 0px rgba(0,0,0,0.15), 10.37px 20.902px 43.924px 0px rgba(0,0,0,0.11), 6.163px 12.422px 23.889px 0px rgba(0,0,0,0.09), 3.2px 6.45px 12.188px 0px rgba(0,0,0,0.08), 1.304px 2.628px 6.111px 0px rgba(0,0,0,0.06), 0.296px 0.597px 2.951px 0px rgba(0,0,0,0.04)'
      },
    },
  },
  plugins: [],
}
