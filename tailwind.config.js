/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      keyframes: {
        bounceCustom: {
          '0%, 100%': { 
            transform: 'translateY(0)', 
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' 
          },
          '50%': { 
            transform: 'translateY(-5%)', 
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' 
          },
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 5s infinite',
      },
    },
  },
  plugins: [],
}

