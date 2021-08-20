const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		boxed: './src/routes/_layouts/_boxed.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
