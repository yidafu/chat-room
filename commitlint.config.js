module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 200],
    'scope-case': [1, 'always', 'lower-case'],
  },
};
