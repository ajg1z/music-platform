module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/function-component-definition': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-indent': [2, 4],
        'import/no-unresolved': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'react/jsx-indent-props': ['error', 4],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/jsx-no-bind': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__IS_DEV__', '__API__', '__ENVIRONMENT__'],
            },
        ],
        'object-curly-newline': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'aria-label',
                    'to',
                    'name',
                    'theme',
                    'size',
                    'alt',
                ],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 100,
            },
        ],
        'react/prop-types': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-debugger': 'warn',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __ENVIRONMENT__: true,
    },
};
