import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from 'globals';

export default defineConfig([
    { files: [".src/*.js"] },
    {
        ignores: ['dist/**', 'node_modules/**', 'webpack.config.js', 'eslint*', 'postcss.config.js'],
    },

    {
        languageOptions: 
        { 
            globals: globals.browser, 
        }
    },
    { 
        plugins: { js }, extends: ["js/recommended"] },

    {
        rules: {
            'eqeqeq': ['error', 'always'],
            'no-empty-function': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
]);
