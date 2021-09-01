<script lang="ts">
</script>

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
	article :global(p) {
		margin-bottom: 0.4em;
		line-height: 1.5;
	}
</style>
