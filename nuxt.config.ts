// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	telemetry: false,
	css: [
		'reset-css',
		'~/assets/app.css',
	],
	modules: [
		['@nuxt/devtools', {}],
		['@nuxtjs/eslint-module', { cache: true, fix: true, lintOnStart: false }],
		['@nuxtjs/stylelint-module', { cache: true, lintOnStart: false }],
		['nuxt-gtag', { id: 'G-XXXXXXXXXX', initialConsent: false }],
		'@vite-pwa/nuxt',
	],
	postcss: {
		plugins: {
			'postcss-import': {},
			'postcss-nested': {},
		},
	},
})
