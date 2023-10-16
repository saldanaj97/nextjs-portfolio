import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    colors: {
      accent: '#D33F49',
      primary: '#001524',
      secondary: '#81C14B',
      ...colors,
    },
    extend: {
      animation: {
        hello: 'wave 1.8s infinite',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(-10deg)',
          },
          '20%': {
            transform: 'rotate(12deg)',
          },
          '30%': {
            transform: 'rotate(-10deg)',
          },
          '40%': {
            transform: 'rotate(9deg)',
          },
          '50%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
  },
}

export default config
