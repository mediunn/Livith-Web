/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const pxToRem = require("tailwindcss-preset-px-to-rem");

module.exports = withMT({
  presets: [pxToRem],
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
        lyricsTranslation: "#FFBAB4",
        lyricsOriginal: "#CAD0FF",
        labelSociable100: "#FF7373",
      },
      fontFamily: {
        NotoSansKR: ["NotoSansKR", "sans-serif"],
      },
      fontSize: {
        title: ["26px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "head-lg": ["22px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "head-sm": ["22px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "body-lg": ["18px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "body-md": ["16px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "body-sm": ["14px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "body-lgs": ["14px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "caption-lg": ["12px", { lineHeight: "1.3", letterSpacing: "-0.05em" }],
        "caption-sm": ["12px", { lineHeight: "1.2", letterSpacing: "-0.05em" }],
        "caption-smd": [
          "10px",
          { lineHeight: "1.2", letterSpacing: "-0.05em" },
        ],
        "caption-ssm": [
          "10px",
          { lineHeight: "1.2", letterSpacing: "-0.05em" },
        ],
      },
      animation: {
        fadeOut: "fadeOut 1s ease-in-out",
        "scale-in-out": "scaleInOut 2s ease-in-out infinite",
      },

      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        scaleInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
});
