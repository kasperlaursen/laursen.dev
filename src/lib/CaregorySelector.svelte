<script lang="ts">
	import type { Category, PostCategory } from 'src/routes/blog/posts.json';

	export let categories: Category[] = [];
	export let selectedCategory: PostCategory | null;
</script>

<div>
	<select bind:value={selectedCategory}>
		<option value={null}> All Categories </option>
		{#each categories as category}
			<option value={category.category}>
				{category.category} ({category.count})
			</option>
		{/each}
	</select>
</div>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	div {
		font-size: 0.9em;
	}

	select {
		appearance: none;

		background-color: transparent;
		border: none;
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;

		color: var(--accent-bg-text-color);
		background-color: var(--accent-bg-color);

		padding: 0.75em;
		border-radius: 0.25em;
		transition: all 0.3s ease-in-out;

		cursor: pointer;
	}

	option {
		text-transform: capitalize;
	}

	select:hover,
	select:focus {
		outline: none;
		opacity: 0.8;
	}
</style>
