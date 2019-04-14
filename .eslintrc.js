module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    // 不要分号never
    'semi': ['error', 'never'],
    'import/no-unresolved': 'off',
    // 提醒将参数赋值,对于对象可能会存在副作用
    'no-param-reassign': 'warn',
    // 实际编写代码的过程中可能并不是纯的函数式风格
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    // 兼容 utils/ api/
    'consistent-return': 'warn',
    // 这是一个可选项，注意同意文件夹不要有文件名相同的文件即可，没必要打开
    'import/extensions': 'off',
    // 开发环境允许存在未使用组件
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 开发环境允许
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // airbnb 不建议使用匿名函数，关闭
    // 'func-names': 'off',
    // 允许 ~ 运算符
    'no-bitwise': 'off',
    'global-require': 'warn',
    'require-yield': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    'react/prefer-stateless-function': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
};
