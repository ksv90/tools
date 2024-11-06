import eslintRules from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { config as tsConfig, configs as tsRules } from 'typescript-eslint';

export default tsConfig(
  { ignores: ['dist/*'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/extensions': ['.js', '.ts'],
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
  },
  {
    extends: [
      eslintRules.configs.recommended,
      ...tsRules.strictTypeChecked,
      ...tsRules.stylisticTypeChecked,
      importPlugin.flatConfigs.recommended,
      prettierPlugin,
    ],
    files: ['**/*.{js,ts}'],
    rules: {
      'no-console': 'warn',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.js'],
    ...tsRules.disableTypeChecked,
  },
);
