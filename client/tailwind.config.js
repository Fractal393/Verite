module.exports = {
  purge: ['./src/*{.js}', './public/index.html'],
  darkMode: 'class' , // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        verite_color: 'bg-cyan-700',
        verite_main:'bg-cyan-700',
        verite_light: {
          DEFAULT: '#d1d5db',
          brighter: '#E5E7EB',
        
          brightest:'#F3FFF6',
        },
        verite_dark: {
          DEFAULT: '#1f2937',
          brighter: '#374151',
        
          brightest: '#4b5563',
        },
      
        verite_border: {
          DEFAULT: '#374151',
        },
        verite_text: {
          DEFAULT: 'rgb(215, 218, 220)',
          darker: '#818384',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
