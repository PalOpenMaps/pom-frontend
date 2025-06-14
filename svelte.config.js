/** @type {import('@sveltejs/kit').Config} */
// import adapter_static from '@sveltejs/adapter-static';
// import adapter_node from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-cloudflare';

// const production = process.env.NODE_ENV === 'production';
// const node = process.env.APP_ENV === 'node';

const config = {
	kit: {
    adapter: adapter(),
    paths: {
      base: ''
		}
	}
};

// const config = node ? 
// {
// 	kit: {
//     adapter: adapter_node(),
//     paths: {
//       base: ''
// 		}
// 	}
// } :
// {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		adapter: adapter_static({
// 			// Options below are defaults
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: '404.html'
// 		}),
// 		prerender: {
// 			handleHttpError: 'warn'
// 		},
// 		paths: {
// 			base: production ? '/pom-frontend' : ''
// 		}
// 	}
// };

export default config;