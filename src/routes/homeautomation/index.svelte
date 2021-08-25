<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/homeautomation/structure.json`);
		console.log(res);
		const data = await res.json();
		console.log(data);
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
	Thanks for visiting. <br />
	Unfortunately this page is still a work in progress, check back later!
</p>
<Diagram {data} />

<style>
</style>
