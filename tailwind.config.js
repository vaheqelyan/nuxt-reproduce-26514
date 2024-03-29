require('tailwindcss/colors')

export default {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.375rem', // 22px
        '3xl': '1.875rem', // 30px
        '3.5xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '4.5xl': '2.375rem', // 38px
        '5xl': '3rem', // 48px
      },

      colors: {
        system: '#22324B',
        transparent: 'transparent',
        blue: '#3B82F6',
        'blue-dark': '#1602FF',
        'grey-500': '#6B7280',
        'grey-900': '#111827',
        'grey-600': 'rgba(48, 51, 61, 0.6)',
        'grey-darkest': '#323744',
        'grey-darker': '#606f7b',
        'grey-dark': '#8795a1',
        grey: '#b8c2cc',
        'grey-light': '#dae1e7',
        'grey-lighter': '#f1f5f8',
        'grey-lightest': '#f8fafc',
        'grey-700': 'rgba(48, 51, 61, 0.7)',
        'grey-800': 'rgba(48, 51, 61, 0.8)',
        'grey-light-500': 'rgba(48, 51, 61, 0.5)',
        'grey-badge': '#F2F3F5',
        white: '#ffffff',
        current: 'currentColor',

        'red-dark': '#cc1f1a',
        red: '#dc2626',
        'red-light': '#ef5753',
        'red-lighter': '#f9acaa',
        'red-lightest': '#fee2e2',

        green: '#389E0D',
        'green-lightest': '#EDF7EE',

        linkedin: '#0a66c2',

        primary: {
          DEFAULT: '#3564FF',
          8: '#3564FF14',
          30: '#3564FF4D',
          50: 'rgba(53, 100, 255, 0.5)',
          80: 'rgba(53, 100, 255, 0.08)',
        },

        link: {
          DEFAULT: 'rgb(27, 117, 208)',
          hover: 'rgb(21, 92, 162)',
        },

        black: {
          DEFAULT: '#22292f',
          70: 'rgba(0, 0, 0, 0.7)',
          3: 'rgba(0, 0, 0, 0.03)',
        },

        standart: {
          DEFAULT: '#30333D',
          50: 'rgba(48, 51, 61, 0.5)',
          60: 'rgba(48, 51, 61, 0.6)',
          70: 'rgba(48, 51, 61, 0.7)',
          80: 'rgba(48, 51, 61, 0.8)',
        },
      },
    },
  },
  plugins: [require('./tailwind.container.js')],
}
