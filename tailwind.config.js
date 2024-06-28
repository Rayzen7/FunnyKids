/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#2AABE4',
        white: '#ffffff',
        selectionNavbar: "#404040",
        masukBtn: "#737373",
        liNavbar: "#737373",
        aboutBG: "#E7FAFF",
        value: "#7DC331",
        webBG: "#E7FAFF",
        testimoni: "#07005D",
        testColBG: "#B7EBFF",
        iconBG: "#2C2C2C",
        btnSubmit: "#FDD213",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "sans-serif"]
      },

      backgroundImage: theme => ({
        'gradient-btn': 'linear-gradient(to bottom right, #404040, #828282)',
      }),
    },
  },
  plugins: [],
}
