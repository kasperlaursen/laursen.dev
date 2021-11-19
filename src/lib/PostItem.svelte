<script lang="ts">
	import type { Post } from '../routes/blog/posts.json';
	export let post: Post;
</script>

<div>
	<a href="/blog/{post.slug}">
		<div>
			<h2>{post.title}</h2>
			<p>{post.teaser}</p>
			<p class="cta">Read full post</p>
		</div>
		{#if post.image}
			<img src={post.image} alt={post.title} />
		{/if}
	</a>
</div>

<style lang="postcss">
	a {
		@apply no-underline transition duration-200 ease-in-out flex justify-between gap-4;
	}

	img {
		max-width: 200px;
		max-height: 100px;
	}

	div {
		@apply mb-6;
	}

	p,
	h2 {
		@apply my-2;
	}
	a:hover {
		@apply text-blue-600;
	}

	.cta {
		@apply text-blue-600 italic;
	}
</style>
