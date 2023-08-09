module.exports = {
  settings:{
    'react':{
      "createClass": "createReactClass",
      "pragma": "React",
      "frangment": "detect",
      "flowVersion": "0.53",
    },  
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended','plugin:react/recommended','standard-with-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: 'react',
  rules: {
    'react/jsx-uses-react':'error',
    'react/jsx-uses-vars':'error',
  }
}}
