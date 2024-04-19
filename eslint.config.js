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
        "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "semi": ["error", "always"],
            "@typescript-eslint/no-unused-vars": "error",
            // to enforce using type for object type definitions, can be type or interface 
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        }
    }
];