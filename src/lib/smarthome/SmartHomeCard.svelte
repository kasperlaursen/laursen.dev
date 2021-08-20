<script>
	import AnimatedSmartHomeBackground from './AnimatedSmartHomeBackground.svelte';
</script>

<a href="/smarthome">
	<h3>My Smart Home Setup</h3>
	<AnimatedSmartHomeBackground />
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
