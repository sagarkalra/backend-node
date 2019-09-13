module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb-base',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "indent": ["error", 4],
        "no-underscore-dangle": "off",
        "import/no-dynamic-require": "off",
        "no-unused-vars": "error",
        "camelcase": ["error", {properties: "never","ignoreDestructuring": true}], 
        "key-spacing": ["error", {
            "multiLine": {
                "beforeColon": false,
                "afterColon": true
            },
            "align": {
                "beforeColon": true,
                "afterColon": true,
                "on": "colon"
            }
        }],
        "prefer-destructuring" :"off",
        "no-param-reassign" : "off",
        "no-console" : ["error"],
        "new-cap": "off"
    },
};
