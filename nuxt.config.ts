import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	ssr: true,
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			titleTemplate: '%s · NovaCRM',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				}
			]
		}
	},
	fonts: {
		families: [{ name: 'Roboto', provider: 'google' }]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	modules: ['@nuxt/fonts']
})
