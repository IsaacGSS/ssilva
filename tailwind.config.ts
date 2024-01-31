import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        sansilk: ['var(--font-sansilk)']
      },
      keyframes: {
        acenando: {
          '0%, 100%': { transform: 'rotate(-50deg)' },
          '50%': { transform: 'rotate(50deg)' }
        }
      },
      animation: {
        acenando: 'acenando 2s linear infinite'
      }
    }
  },
  plugins: []
}
export default config
