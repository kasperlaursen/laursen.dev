<script lang="ts" context="module">
	import type { Post, ResponseBody, Category, PostCategory } from './posts.json';
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`);
		const { posts, categories }: ResponseBody = await res.json();
		return {
			props: { posts, categories }
		};
	}
</script>

<script lang="ts">
	import BoxedLayout from '../_layouts/_boxed.svelte';
	import CaregorySelector from '$lib/CaregorySelector.svelte';
	import PostItem from '$lib/PostItem.svelte';
	export let posts: Post[];
	export let categories: Category[];

	let selectedCategory: PostCategory | null;
	$: filteredPosts = selectedCategory
		? posts.filter((post) => post.categories.some((category) => category === selectedCategory))
		: posts;
</script>

<svelte:head>
	<title>Blog | Kasper Laursen</title>
</svelte:head>

<BoxedLayout>
	<div>
		<h3>Blog</h3>
		<CaregorySelector {categories} bind:selectedCategory />
	</div>
	{#each filteredPosts as post}
		<PostItem {post} />
	{/each}
</BoxedLayout>

<style lang="postcss">
	div {
		@apply flex justify-between mb-6;
	}
	h3 {
		@apply mt-0;
	}
</style>
