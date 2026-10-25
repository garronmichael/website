import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  // Ignores indended to block eslint going through pnpm symlinks 
  {
    ignores: [
      '**/node_modules/**',  // Blocks ESLint from following pnpm's symlink web
      'dist/**',             // Excludes build outputs
      'build/**',
      '.next/**',            // If using Next.js
      '*.config.*'           // Prevents linting configuration files themselves
    ],
  },
  // Detect react version to suppress eslint warning
  {
    settings: {
      react: {
        version: '19.3.1'
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, "@stylistic": stylistic },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Enable semicolon enforcement
      "@stylistic/semi": ["error", "always"],
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime']
]);