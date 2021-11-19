<script>
	export let nodes;
	export let nodeSize;
	export let onMouseEnter;
	export let onMouseLeave;

	const colorClass = {
		gray: 'bg-gray-600',
		red: 'bg-red-600',
		yellow: 'bg-yellow-600',
		green: 'bg-green-600',
		blue: 'bg-blue-600',
		indigo: 'bg-indigo-600',
		purple: 'bg-purple-600',
		pink: 'bg-pink-600'
	};
</script>

{#each nodes as node}
	<foreignObject
		id={node.data.id}
		on:mouseenter={() => onMouseEnter(node)}
		on:mouseleave={() => onMouseLeave(node)}
		x={node.x ? node.x - nodeSize / 2 : 0}
		y={node.y ? node.y - nodeSize / 2 : 0}
		height={nodeSize}
		width={nodeSize}
		class={`circle ${colorClass[node.data.color] ?? 'bg-gray-600'}`}
		class:highlight={node.data.highlight}
	>
		<div>
			<a href={node.data.url}>
				{node.data.name}{node.data.count ? ' (' + node.data.count + ')' : ''}
			</a>
		</div>
	</foreignObject>
{/each}

<style lang="postcss">
	.circle {
		cursor: grab;
		@apply border-2 border-white rounded-full transition-all duration-200;
	}
	.circle:hover,
	.circle.highlight {
		@apply border-2 border-gray-600;
	}

	.circle > div {
		@apply flex items-center justify-center w-full h-full text-center text-white text-xs;
	}

	a {
		@apply no-underline text-white transition duration-200;
	}

	a[href] {
		@apply cursor-pointer;
	}

	a[href]:hover {
		@apply underline font-bold;
	}
</style>
