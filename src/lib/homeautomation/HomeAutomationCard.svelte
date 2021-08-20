<script>
	import AnimatedHomeAutomationBackground from './AnimatedHomeAutomationBackground.svelte';
</script>

<a href="/homeautomation">
	<h3>My Home Automation Setup</h3>
	<AnimatedHomeAutomationBackground />
</a>

<style>
	a {
		text-decoration: none;

		background-color: var(--blue);
		color: var(--accent-bg-text-color);
		border-radius: 0.5em;
		margin-top: -2.5em;
		position: relative;
		padding: 2em;

		height: 200px;
	}

	h3 {
		margin: 0;
	}
</style>
