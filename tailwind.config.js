/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainYellow30: "#FFFF97",
        mainYellow60: "#FFEB56",

        caution100: "#E11936",

        grayScaleBlack100: "#14171B",
        grayScaleBlack90: "#222831",
        grayScaleBlack80: "#2F3745",
        grayScaleBlack50: "#808794",
        grayScaleBlack30: "#DBDCDF",
        grayScaleBlack5: "#F2F4F6",
        grayScaleWhite: "#FFFFFF",
      },
      fontFamily: {
        productSans: ["ProductSans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        googleSansDisplay: ["GoogleSansDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
