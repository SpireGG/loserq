module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	globals: {
		rgea: true,
		NodeJS: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['@nuxtjs/eslint-config-typescript'],
	rules: {
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			},
		],
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/max-attributes-per-line': ['error', { singleline: { max: 6 }, multiline: { max: 1 } }],
	},
}
