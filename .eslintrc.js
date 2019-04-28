// TODO: lint through emacs
module.exports = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true
            },
        ]
    }
}
