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

<style lang="postcss">
	a {
		@apply no-underline text-white;
	}

	nav a:first-of-type {
		font-family: 'Courier New', Courier, monospace;
		@apply text-xl tracking-tighter m-0;
	}

	nav {
		@apply max-w-5xl w-full absolute flex justify-between items-center flex-grow;
	}

	header.small {
		@apply h-20 overflow-hidden;
	}

	header.large {
		@apply h-40;
	}

	header {
		@apply relative flex justify-center items-center transition duration-300 ease-in-out bg-primary;
	}
</style>
