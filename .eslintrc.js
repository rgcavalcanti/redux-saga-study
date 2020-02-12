module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "tslint-plugin-prettier",
    "tslint-config-prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    prettier: true
  }
};
