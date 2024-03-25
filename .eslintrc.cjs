module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	settings: { react: { version: '18.2' } },
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'react/prop-types': 0, // It means we can write any function/component without PropTypes. (A good practice is to use PropTypes)
		"indent": ['error', 4], // It rule makes the indentation of 4 spaces, for more readability of the code.
		'linebreak-style': ["error", "windows"], // It rule makes the linebreaks consistent across operating systems.
		"quotes": ['error', 'double'], // This rule enforces the use of double quotes for string literals.
		"semi": ["error", "always"],
		'react/jsx-max-props-per-line': [
			'error',
			{ maximum: 1, when: 'multiline' }, // This rule limits the number of props per line in JSX elements
		],
		'@typescript-eslint/no-unsafe-call': 'off', // It disables the warning for unsafe function calls in TypeScript code.
	},
}
