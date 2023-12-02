/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0076EB',
        secondary: '#8639F9',
        tertiary: '#6fe3db',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      // animation: {
      //   scroll: 'scroll 40s linear infinite',
      // },
      // keyframes: {
      //   scroll: {
      //     '0%': { transform: 'translateX(0)' },
      //     // '0%': { transform: 'translateX(calc(250px * 6))' },
      //     '100%': { transform: 'translateX(calc(-250px * 10))' },
      //   },
      // },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-500px * 5))",
          },
        },
      },
    },
  },
  plugins: [
  ],
}