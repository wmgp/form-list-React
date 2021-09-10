module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 0,
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/no-duplicates': 'off',
  },
};
