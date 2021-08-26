<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/homeautomation/structure.json`);
		const data = await res.json();
		return {
			props: { data }
		};
	}
</script>

<script>
	import Diagram from '$lib//homeautomation/Diagram.svelte';
	export let data;
</script>

<h1>Home Automation</h1>
<p>
	Thanks for visiting.  <br />
	This page is still a <b>work in progress</b>, but below you see a diagram of my Home Automation setup!  <br />
	Check back later for more!
</p>
<Diagram {data} />

<style>
</style>
