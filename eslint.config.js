import js from "@eslint/js";
import eslintplugin from "@typescript-eslint/eslint-plugin";
import eslintparser from "@typescript-eslint/parser";
import globals from "globals";
export default [
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: eslintparser,
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                myCustomGlobal: "readonly"
            }
        },
        plugins: {
            eslintplugin: eslintplugin
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "semi": ["error", "always"],
            "eslintplugin/no-unused-vars": "error",
            // to enforce using type for object type definitions, can be type or interface 
            "eslintplugin/consistent-type-definitions": ["error", "type"],
        }
    }
];