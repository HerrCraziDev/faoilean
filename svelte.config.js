import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				articles: "src/layouts/article.svelte"
			}
		}),
		preprocess()
	]
};

export default config;
