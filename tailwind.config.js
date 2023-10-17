/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'blue-gray': '0 10px 20px rgba(21, 26, 33, 0.7)',
      },
      boxShadow: {
        'light-emerald': '0px 0px 16px rgba(82, 255, 168, 0.6)',
      },
      animation: {
        'changed-color': 'changedColor .4s linear infinite',
      },
      keyframes: {
        changedColor: {
          '0%': {
            background: '#52FFA8',
            boxShadow: 'rgba(82, 255, 168, 0.6) 0px 0px 16px'
          },
          '100%': {
            background: '#1CCEFF',
            boxShadow: 'rgba(28, 206, 255, .6) 0px 0px 16px'
          },
        }
      },
    },
  },
  plugins: [],
}

