/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10 px",
      },

      colors: {
        yellow: "#d1b75f",
        black: "#11111",
      },

      backgroundImage: {
        "radial-gradient": "url('/home-bg.svg')",
        "radial-gradient-md": "url('/sub-bg.svg')",
        "footer-bg":"url('/footer-bg.svg')"
      },

      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(0.95)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 1 },
        },
        pulseOnce:{
          '0%,100%' :{opacity:1},
          '50%' : {opacity:0.5},
        }
      },
      animation: {
        grow: 'grow 1.1s ease-in-out',
        pulseOnce:'pulse 1.1s ease-in-out'
      },
    },
  },
  plugins: [],
};
