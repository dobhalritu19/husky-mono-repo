// import js from "@eslint/js";

// export default [
//   js.configs.recommended,

//   {
//     rules: {
//       "no-unused-vars": "warn",
//       "no-undef": "warn",
//       semi: ["error", "always"],
//     },
//   },
// ];

// eslint.config.js

import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      semi: ["warn", "always"],
    },
    // ...other config
  },
];
