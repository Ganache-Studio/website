import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { dirname } from 'path';
import { config as tseslintConfig, configs as tseslintConfigs } from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslintConfig(
  eslint.configs.recommended,
  tseslintConfigs.strict,
  tseslintConfigs.recommended,
  tseslintConfigs.stylistic,

  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
        node: { extensions: ['.ts', '.tsx'] },
      },
    },
  },

  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('plugin:import/recommended'),
  ...compat.extends('plugin:import/typescript'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:react/jsx-runtime'),
  ...compat.extends('plugin:react-hooks/recommended'),

  prettierPluginRecommended,

  {
    ignores: ['node_modules/', '.next/', 'out/', 'next-env.d.ts'],
  },
);
