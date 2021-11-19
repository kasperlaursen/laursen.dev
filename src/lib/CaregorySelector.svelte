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
		@apply box-border;
	}

	div {
		@apply text-sm;
	}

	select {
		@apply cursor-pointer transition-all duration-300 ease-in-out rounded p-3 bg-blue-600 text-white m-0 border-0 appearance-none;
	}

	option {
		@apply capitalize;
	}

	select:hover,
	select:focus {
		@apply opacity-80 outline-none;
	}
</style>
