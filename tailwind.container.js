const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.container': {
      marginInline: 'auto',
      paddingInline: theme('padding.4'),
      width: '100%',

      '@screen sm': {
        maxWidth: '36rem',
      },

      '@screen md': {
        maxWidth: '48rem',
      },

      '@screen lg': {
        maxWidth: '62rem',
      },

      '@screen xl': {
        maxWidth: '75rem',
      },
    },
  })
})
