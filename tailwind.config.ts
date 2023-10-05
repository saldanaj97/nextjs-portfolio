import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#4273a8',
            ...colors,
          },
        },
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#4273a8',
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
