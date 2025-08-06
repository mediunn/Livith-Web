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
        Title: ["26px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Head1-sm": ["22px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Head1-re": ["22px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body1-sm": ["18px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body2-sm": ["16px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body2-md": ["16px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body2-re": ["16px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body3-sm": ["15px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body3-md": ["15px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body3-re": ["15px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body4-sm": ["14px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body4-md": ["14px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Body4-re": ["14px", { lineHeight: "1.4", letterSpacing: "-0.05em" }],
        "Caption1-Bold": [
          "12px",
          { lineHeight: "1.3", letterSpacing: "-0.05em" },
        ],
        "Caption1-sm": [
          "12px",
          { lineHeight: "1.3", letterSpacing: "-0.05em" },
        ],
        "Caption1-re": [
          "12px",
          { lineHeight: "1.2", letterSpacing: "-0.05em" },
        ],
        "Caption2-sm": [
          "10px",
          { lineHeight: "1.2", letterSpacing: "-0.05em" },
        ],
        "Caption2-re": [
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
          "50%": { transform: "scale(1.15)" },
        },
      },
    },
  },
  plugins: [],
});
