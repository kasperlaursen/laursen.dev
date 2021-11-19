<script lang="ts" context="module">
	import type { Post, ResponseBody } from './blog/posts.json';

	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`);
		const { posts }: ResponseBody = await res.json();
		return {
			props: { posts }
		};
	}
</script>

<script lang="ts">
	import PostItem from '$lib/PostItem.svelte';
	import HomeAutomationCard from '$lib/homeautomation/HomeAutomationCard.svelte';
	import Theme from '$lib/theme.svelte';
	import LinkButton from '$lib/ui-components/LinkButton.svelte';
	export let posts: Post[];
	const postLimit = 3;
</script>

<svelte:head>
	<title>Home | Kasper Laursen</title>
</svelte:head>

<Theme color="red" header="large" />

<section class="posts">
	<h3 class="heading">Recent Posts:</h3>
	{#each posts.slice(0, postLimit) as post}
		<PostItem {post} />
	{/each}
	<br />
	<LinkButton href="/blog" color="ACCENT">All Posts ({posts.length})</LinkButton>
</section>

<section class="subpages">
	<HomeAutomationCard />
</section>

<style lang="postcss">
	h3 {
		margin-top: 0;
		@apply mb-4;
	}
	section.posts {
		@apply bg-gray-50 rounded -mt-8 relative p-9;
	}
	section.subpages {
		@apply grid grid-cols-2 gap-8 my-16;
	}
</style>
