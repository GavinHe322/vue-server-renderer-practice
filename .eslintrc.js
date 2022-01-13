module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    indent: ['warn', 2],
    'comma-dangle': ['warn', 'never'],
    semi: ['warn', 'never']
  }
}
