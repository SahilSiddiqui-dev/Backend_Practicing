import js from '@eslint/js'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [js.configs.recommended]
  }
]
