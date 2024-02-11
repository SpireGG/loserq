module.exports = {
	extends: 'stylelint-config-standard',
	customSyntax: 'postcss-html',
	rules: {
		'at-rule-empty-line-before': ['always', { except: ['after-same-name', 'inside-block', 'blockless-after-same-name-blockless', 'blockless-after-blockless', 'first-nested'] }],
		'declaration-block-single-line-max-declarations': 3,
		'no-descending-specificity': [true, { severity: 'warning' }],
		'rule-empty-line-before': 'never',
		'selector-class-pattern': null,
	},
}
