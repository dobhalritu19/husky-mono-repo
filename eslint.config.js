import js from "@eslint/js";
import eslintplugin from "@typescript-eslint/eslint-plugin";
import eslintparser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parser: eslintparser,
            ecmaVersion: 5,
            sourceType: "script"
        },
        "plugins": [eslintplugin],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "semi": ["error", "always"],
        }
    }
];