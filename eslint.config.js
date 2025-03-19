const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const react = require("eslint-plugin-react");
const globals = require("globals");
const airbnb = require("eslint-config-airbnb");
const airbnbHooks = require("eslint-config-airbnb/hooks");
const prettier = require("eslint-config-prettier");
const pluginPrettier = require("eslint-plugin-prettier");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  airbnb,
  airbnbHooks,
  prettier, // Prettier 설정 추가
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser, // TypeScript 파서 설정
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js 사용 시 필요
      "prettier/prettier": "error", // Prettier 규칙을 ESLint 오류로 표시
    },
    plugins: {
      prettier: pluginPrettier, // Prettier 플러그인 추가
    },
  },
];
