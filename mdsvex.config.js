const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		post: './src/routes/_layouts/_post.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
