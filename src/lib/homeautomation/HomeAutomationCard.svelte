<script>
	import AnimatedHomeAutomationBackground from './AnimatedHomeAutomationBackground.svelte';
</script>

<a href="/homeautomation">
	<h3>My Home Automation Setup</h3>
	<AnimatedHomeAutomationBackground />
</a>

<style lang="postcss">
	a {
		@apply no-underline bg-blue-500 text-white rounded p-8 h-48 overflow-hidden relative;
	}

	h3 {
		@apply mt-0;
	}
</style>
