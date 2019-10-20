module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "prettier",
    "react"
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    "react/display-name": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}