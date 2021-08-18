const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		post: './src/routes/_postLayout.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
