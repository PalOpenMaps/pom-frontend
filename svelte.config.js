/** @type {import('@sveltejs/kit').Config} */
import adapter_static from '@sveltejs/adapter-static';
import adapter_node from '@sveltejs/adapter-node';
import adapter_netlify from '@sveltejs/adapter-netlify';

const mode = process.env.APP_ENV ? process.env.APP_ENV : process.env.NODE_ENV === 'production' ? 'preview' : 'dev';
const base = mode === 'preview' ? '/pom-frontend' : '';

const config =
	mode === 'node'
		? { kit: { adapter: adapter_node() } }
		: mode === 'netlify'
		? { kit: { adapter: adapter_netlify() } }
		: {
				kit: {
					adapter: adapter_static({
						pages: 'build',
						assets: 'build',
						fallback: '404.html'
					}),
					prerender: { handleHttpError: 'warn' },
					paths: { base }
				}
		  };

export default config;
