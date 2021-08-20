<script lang="ts">
	import '../../static/global.css';
	import Nav from '$lib/Nav.svelte';
	import { themeColor } from '$lib/themeStore';
</script>

<div class={$themeColor}>
	<Nav />
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		margin: auto;
		max-width: var(--content-width);
		padding: 1rem;
	}
</style>
