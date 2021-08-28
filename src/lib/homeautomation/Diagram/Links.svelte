<script>
    export let links;
</script>

{#each links as link}
	<g stroke="#999" stroke-opacity="0.6">
		<line x1={link.source.x} y1={link.source.y} x2={link.target.x} y2={link.target.y} />
	</g>
{/each}
