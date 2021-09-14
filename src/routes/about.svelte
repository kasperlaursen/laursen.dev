<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/techstack.json`);
		const techStack: TechStack[] = await res.json();
		return {
			props: { techStack }
		};
	}
</script>

<script lang="ts">
	import type { TechStack } from './techstack.json';
	import Theme from '$lib/theme.svelte';
	import TechStackComponent from '$lib/TechStack.svelte';
	export let techStack: TechStack[]
</script>

<Theme color="purple" header="large" />

<svelte:head>
	<title>About | Kasper Laursen</title>
</svelte:head>

<h1>Hi! I'm Kasper Laursen 👋</h1>

<p>I'm a Web Developer living in Denmark 🇩🇰 working as a Software Engineer.  <br/>
I enjoy tinkering with 3D Printers 🖨️, Home Automation 💡 and Drone Photography 🚁.</p>


<h3>Tech Timeline:</h3>
<TechStackComponent data={techStack}/>