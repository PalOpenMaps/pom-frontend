/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// Options below are defaults
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		prerender: {
			enabled: production,
			onError: 'continue'
		},
		paths: {
			base: production ? '/pom-next' : ''
		},
		trailingSlash: 'always'
	}
};

export default config;