const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    // enabled: false,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whatsapp: "#1bd741",
        instagram: "#622e1b",
        background: "#815226"
      },
      fontFamily: {
        'sans': [
          'Mohave',
          ...defaultTheme.fontFamily.sans,
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
