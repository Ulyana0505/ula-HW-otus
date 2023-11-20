module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "overrides": [
        {
            files: [".eslintrc.js", "babel.config.js", "jest.config.js"],
            env: {
              node: true,
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "rules": {
    }
}
