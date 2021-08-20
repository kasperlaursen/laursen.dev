<script lang="ts" context="module">
	import type { Post, ResponseBody } from './posts.json';
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`);
		const { posts, categories }: ResponseBody = await res.json();
		return {
			props: { posts, categories }
		};
	}
</script>

<script lang="ts">
	import PostItem from '$lib/PostItem.svelte';
	export let posts: Post[];
</script>

<svelte:head>
	<title>Blog | Kasper Laursen</title>
</svelte:head>

<h2 class="heading">Blog</h2>
{#each posts as post}
	<PostItem {post} />
{/each}

<style>
	h2 {
		margin-top: 0;
	}
</style>
