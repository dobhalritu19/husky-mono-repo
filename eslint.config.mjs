export default {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    // Add your custom rules here
    "no-unused-vars": "error",
    "no-undef": "error"
  },
};
