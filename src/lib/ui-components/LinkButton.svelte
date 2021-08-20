<script lang="ts">
	export let href: string;
	export let color: 'DEFAULT' | 'ACCENT' | 'LIGHT' = 'DEFAULT';
	const accent = color == 'ACCENT';
	const light = color == 'LIGHT';
</script>

<a {href} class:accent class:light><slot /></a>

<style>
	a {
		text-decoration: none;
		color: var(--accent-color);

		padding: 0.75em;
		border-radius: 0.25em;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	a.light {
		color: var(--accent-bg-text-color);
	}

	a.accent {
		color: var(--accent-bg-text-color);
		background-color: var(--accent-bg-color);
	}

	a.accent:hover {
		opacity: 0.8;
	}
</style>
