<script lang="ts">
	import Theme from '$lib/theme.svelte';
	import BoxedLayout from '../_layouts/_boxed.svelte';

	export let title;
</script>

<svelte:head>
	<title>{title} | Kasper Laursen</title>
</svelte:head>
<Theme color="green" header="large" />
<BoxedLayout>
	<slot />
</BoxedLayout>

<style>
	article {
		background-color: var(--bg-color-2);
		border-radius: 0.5em;
		margin-top: -2.5em;
		position: relative;
		padding: 3em;
	}
</style>
