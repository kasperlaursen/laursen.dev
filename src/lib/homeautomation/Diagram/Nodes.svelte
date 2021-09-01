<script>
	export let nodes;
	export let nodeSize;
	export let onMouseEnter;
	export let onMouseLeave;
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
		class="circle"
		class:highlight={node.data.highlight}
		style={`--element-bg-color: var(${node.data.color ?? '--gray'})`}
	>
		<div>
			<a href={node.data.url}>
				{node.data.name}{node.data.count ? ' (' + node.data.count + ')' : ''}
			</a>
		</div>
	</foreignObject>
{/each}

<style>
	.circle {
		border: 2px solid #fff;
		background-color: var(--element-bg-color);
		border-radius: 50%;
		cursor: grab;
		transition: all 0.2s;
	}
	.circle:hover,
	.circle.highlight {
		border: 2px solid var(--dark-gray);
	}

	.circle > div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;

		text-align: center;
		color: #fff;
		font-size: 0.7em;
	}

	a {
		text-decoration: none;
		color: #fff;
		transition: all 0.2s;
	}

    a[href]{
		cursor: pointer;
    }

	a[href]:hover {
		text-decoration: underline;
		font-weight: bold;
	}
</style>