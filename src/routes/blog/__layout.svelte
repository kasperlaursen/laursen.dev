<script lang="ts">
	import { themeColor, headerSize } from '$lib/themeStore';

	export let title;

	themeColor.set('green');
	headerSize.set('large');
</script>

<svelte:head>
	<title>{title} | ProgrammingTIL</title>
</svelte:head>

<article>
	<slot />
</article>

<style>
	article {
		background-color: var(--bg-color-2);
		border-radius: 0.5em;
		margin-top: -2.5em;
		position: relative;
		padding: 3em;
	}
</style>
