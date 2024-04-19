import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "script",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      semi: ["warn", "always"],
    },
    // ...other config
  },
];
