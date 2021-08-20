<script lang="ts" context="module">
	import type { PostMetadata } from './posts.json';
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`);
		const { posts }: { posts: PostMetadata[] } = await res.json();
		return {
			props: { posts }
		};
	}
</script>

<script lang="ts">
	import PostItem from '$lib/PostItem.svelte';
	export let posts: PostMetadata[];
</script>

<h2 class="heading">Blog</h2>
{#each posts as post}
	<PostItem {post} />
{/each}

<style>
	h2 {
		margin-top: 0;
	}
</style>
