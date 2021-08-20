<script>
	import AnimatedBackground from '$lib/AnimatedBackground.svelte';
	import LinkButton from '$lib/ui-components/LinkButton.svelte';
	import { headerSize } from '$lib/themeStore';
</script>

<header class={$headerSize}>
	<AnimatedBackground />
	<nav>
		<a href="/">Kasper Laursen</a>
		<div>
			<LinkButton href="/blog" color="LIGHT">Blog</LinkButton>
			<LinkButton href="/about" color="LIGHT">About</LinkButton>
		</div>
	</nav>
</header>

<style>
	a {
		text-decoration: none;
		color: var(--accent-bg-text-color);
	}

	nav a:first-of-type {
		font-size: 1.2em;
		letter-spacing: -0.5px;
		font-family: 'Courier New', Courier, monospace;
	}

	nav {
		position: absolute;

		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 2em 0;
		width: var(--content-width);
		max-width: calc(100% - 2em);
		flex-grow: 1;
	}

	header.small {
		height: 5.3em;
	}

	header.large {
		height: 150px;
	}

	header {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: flex-start;

		background-color: var(--accent-bg-color);
		transition: all 0.3s;
	}
</style>
