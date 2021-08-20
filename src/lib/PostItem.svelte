<script lang="ts">
	import type { Post } from '../routes/blog/posts.json';
	export let post: Post;
</script>

<div>
	<a href="/blog/{post.slug}">
		<h3>{post.title}</h3>
		<p>{post.teaser}</p>
		<p class="cta">Read full post</p>
	</a>
</div>

<style>
	a {
		text-decoration: none;
		color: var(--text-color);
		transition: color 0.2s ease-in-out;
	}

	div {
		margin-bottom: 1.5em;
	}

	p,
	h3 {
		margin: 0.5em 0;
	}
	a:hover {
		color: var(--accent-color);
	}

	.cta {
		color: var(--accent-color);
		font-style: italic;
	}
</style>
