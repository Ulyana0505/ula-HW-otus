module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {},
  overrides: [
    {
      files: [
        ".eslintrc.js",
        "babel.config.js",
        "jest.config.js",
        "hw-1.js",
        "hw-2.js",
        "hw-3.js",
        "hw-4.js",
        "hw-5.js",
        "hw-6.js",
        "hw-7.js",
        "hw-8.js",
        "hw-9.js",
        "hw-10.js",
      ],
      env: {
        node: true, // Apply Node environment specifically for ESLint config
      },
    },
  ],
};
