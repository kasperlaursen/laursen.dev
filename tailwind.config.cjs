const config = {
	// mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: 'var(--accent-bg-color)'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
