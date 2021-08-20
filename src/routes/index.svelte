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
	<h2 class="heading">Recent Posts:</h2>
	{#each posts.slice(0, postLimit) as post}
		<PostItem {post} />
	{/each}
	<br />
	<LinkButton href="/blog" color="ACCENT">All Posts ({posts.length})</LinkButton>
</section>

<section class="subpages">
	<HomeAutomationCard />
</section>

<style>
	h2 {
		margin-top: 0;
	}
	section.posts {
		background-color: var(--bg-color-2);
		border-radius: 0.5em;
		margin-top: -2.5em;
		position: relative;
		padding: 3em;
	}
	section.subpages {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2em;
		margin: 4.5em 0;
	}
</style>
