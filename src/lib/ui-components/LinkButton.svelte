<script lang="ts">
	export let href: string;
	export let color: 'DEFAULT' | 'ACCENT' | 'LIGHT' = 'DEFAULT';
	const accent = color == 'ACCENT';
	const light = color == 'LIGHT';
</script>

<a {href} class:accent class:light><slot /></a>

<style lang="postcss">
	a {
		@apply no-underline bg-transparent p-3 rounded transition duration-300 ease-in-out;
	}

	a:hover {
		@apply bg-gray-900 bg-opacity-10;
	}

	a.light {
		@apply text-gray-50;
	}

	a.accent {
		@apply bg-blue-500 text-white;
	}

	a.accent:hover {
		@apply opacity-80;
	}
</style>
