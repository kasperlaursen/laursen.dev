<script lang="ts">
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import { themeColor } from '$lib/themeStore';
</script>

<div class={$themeColor}>
	<Nav />
	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-100;
	}
	main {
		@apply max-w-5xl mx-auto p-4;
	}
</style>
