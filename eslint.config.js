import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  
  {
    ...pluginCypress.configs.recommended,
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}'
    ],
    rules: {
      'comma-dangle': ["error", "never"],
      'eqeqeq': ["error", "always"],
      'indent': ["error", 2],
      'no-eval': ["error"],
      'no-trailing-spaces': ["error"],
      'no-unused-vars': ["error"],
      'no-var': ["error"],
      'prefer-const': ["error"],
      'quotes': ["error", "double"],
      'semi': ["error", "always"],
    },
  },
]
