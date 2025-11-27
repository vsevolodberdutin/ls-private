import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '1024px',
        // Custom breakpoint for 1024x782 and similar tablet resolutions
        'desktop': '1280px',
        // Desktop breakpoint for larger screens
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: 'class',
}
export default config
