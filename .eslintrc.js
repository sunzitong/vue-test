module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'global-require': 0,
    'max-len': 0,
    'prefer-template': 0,
    'no-multi-assign': 0,
    'no-param-assign': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
  },
};
