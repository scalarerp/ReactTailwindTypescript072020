// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui'],
        // display: ["Noto Sans", sans-serif],
        sans: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
      },
      boxShadow: {
        raised: '0 20px 50px rgba(0,0,0, 0.075)',
      },
      colors: {
        mmagenta: '#FF00FF',
        ccyan: '#00FFFF',
        yyellow: '#FFFF00',
        diarioazul: '#0F62AC',
        diariolaranja: '#f68f33',
        roxoTre: '#6415ff',
        amarelo: '#FFDE1E',

        //https://www.colorhexa.com/0f62ac
        primary: {
          100: '#C0DFFA',
          200: '#78B9F3F',
          300: '#3094ED',
          400: '#1481E2',
          500: '#0F62AC',
          600: '#0C4D88',
          700: '#093964',
          800: '#062440',
          900: '#02101C',
        },
        // //RHINO
        secondary: {
          100: '#7c8ba1',
          200: '#667892',
          300: '#506582',
          400: '#3a5173',
          500: '#243E63',
          600: '#203859',
          700: '#1d324f',
          800: '#192b45',
          900: '#16253b',
        },

        'table-row': 'var(--color-theme-table-row)',
        'theme-page-background': 'var(--color-theme-page-background-primary)',
        'theme-content-background':
          'var(--color-theme-content-background-primary)',
        'theme-feature-background': 'var(--color-theme-feature-background)',
        'theme-text-primary': 'var(--color-theme-text-primary)',
        'theme-text-secondary': 'var(--color-theme-text-secondary)',
        'theme-text-content': 'var(--color-theme-text-content)',
        'theme-border': 'var(--theme-border)',
        'theme-border-secondary': 'var(--theme-border-secondary)',
        'theme-nav-background': 'var(--nav-background)',
        'theme-nav-border': 'var(--nav-border)',
        'stat-background': 'var(--stat-background)',
        'theme-text-tertiary': 'var(--theme-text-tertiary)',
        'theme-button': 'var(--theme-button)',
        'theme-button-active': 'var(--theme-button-active)',
        'theme-button-text': 'var(--theme-button-text)',
        'theme-button-close': 'var(--theme-button-close)',
        'theme-switch-button': 'var(--theme-switch-button)',
        'theme-switch-button-circle': 'var(--theme-switch-button-circle)',
        'settings-icon': 'var(--settings-icon)',
        'theme-accents': 'var(--color-theme-accents)',
        'theme-transaction-icon': 'var(--color-theme-transaction-icon)',
        'theme-resigned-label': 'var(--theme-resigned-label)',
        'theme-input-field-border': 'var(--theme-input-field-border)',
        'theme-input-field-border-focus':
          'var(--theme-input-field-border-focus)',
        'theme-input-field-border-hover':
          'var(--theme-input-field-border-hover)',
        'theme-line-separator': 'var(--theme-line-separator)',

        'theme-text-thead': 'var(--color-theme-text-thead)',

        'link-color': '#3790ff',
      },
      cursor: {
        'col-resize': 'col-resize',
      },
      height: {
        // '1/2': '50%',
        '1/3': '33.333333%',
        // '2/3': '66.666667%',
        // '1/4': '25%',
        // '2/4': '50%',
        // '3/4': '75%',
        '1/6': '16.666667%',
        // '2/6': '33.333333%',
        // '3/6': '50%',
        // '4/6': '66.666667%',
        // '5/6': '83.333333%',
        // '1/12': '8.333333%',
        // '2/12': '16.666667%',
        // '3/12': '25%',
        // '4/12': '33.333333%',
        // '5/12': '41.666667%',
        // '6/12': '50%',
        // '7/12': '58.333333%',
        // '8/12': '66.666667%',
        // '9/12': '75%',
        // '10/12': '83.333333%',
        // '11/12': '91.666667%',
      },
      inset: {
        '1/2': '50%',
      },
      maxWidth: (theme, { breakpoints }) => ({
        ...theme('spacing'),
        ...breakpoints(theme('screens')),
      }),
      minHeight: (theme) => ({
        // '0': '0',
        // full: '100%',
        // screen: '100vh',
        ...theme('spacing'),
      }),
      opacity: {
        '5': '.05',
        '10': '.1',
        '15': '.15',
      },
      screens: {
        '2xl': '1440px',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
      },
      strokeWidth: {
        '3': '3',
        //'4': '4'
      },
      translate: {
        '-2/3': '-66.67%',
        '2/3': '66.67%',
      },
      zIndex: {
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./public/index.html', './src/**/*.ts', './src/**/*.tsx'],
  },
}

//teste
// function generateColorProps(name) {
//   let props = {}
//   for (let i = 1; i <= 9; i++) {
//     props[`${i}00`] = `var(--color-${name}-${i}00)`
//   }
//   return props
// }
