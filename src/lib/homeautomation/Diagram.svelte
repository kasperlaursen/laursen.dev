<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	export let data = {
		name: 'Home Assistant',
		children: [{}]
	};
	export let width;

	let svg;
	let height = 700;
	const nodeSize = 80;
	const nodeRadius = nodeSize / 2;

	const root = d3.hierarchy(data);

	$: links = root.links();
	$: nodes = root.descendants();

	let transform = d3.zoomIdentity;
	let simulation;

	$: {
		simulation?.force('center', d3.forceCenter(width / 2, height / 2).strength(0.5));
	}

	onMount(() => {
		simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance(nodeSize)
					.strength(0.5)
			)
			.force('charge', d3.forceManyBody().strength(-300))
			.force('collide', d3.forceCollide(nodeSize / 2).strength(0.4))
			.force('center', d3.forceCenter(width / 2, height / 2).strength(0.5))
			.force('y', d3.forceY(height / 2).strength(0.06))
			.on('tick', simulationUpdate);

		d3.select(svg).call(
			d3
				.drag()
				.container(svg)
				.subject(dragsubject)
				.on('start', dragstarted)
				.on('drag', dragged)
				.on('end', dragended)
		);
	});

	function dragsubject(currentEvent) {
		const node = simulation.find(
			transform.invertX(currentEvent.x),
			transform.invertY(currentEvent.y),
			nodeRadius
		);
		if (node) {
			node.x = transform.applyX(node.x);
			node.y = transform.applyY(node.y);
		}
		return node;
	}

	function simulationUpdate() {
		simulation.tick();
		nodes = [...nodes];
		links = [...links];
	}

	function zoomed(currentEvent) {
		transform = currentEvent.transform;
		simulationUpdate();
	}

	function dragstarted(currentEvent) {
		if (!currentEvent.active) simulation.alphaTarget(0.3).restart();
		currentEvent.subject.fx = transform.invertX(currentEvent.subject.x);
		currentEvent.subject.fy = transform.invertY(currentEvent.subject.y);
	}
	function dragged(currentEvent) {
		currentEvent.subject.fx = transform.invertX(currentEvent.x);
		currentEvent.subject.fy = transform.invertY(currentEvent.y);
	}
	function dragended(currentEvent) {
		if (!currentEvent.active) simulation.alphaTarget(0);
		currentEvent.subject.fx = null;
		currentEvent.subject.fy = null;
	}

	function selectSubtree(node) {
    console.log(d3.select('#' + node.data.id))
		d3.select('#' + node.data.id).classed('highlight', true);
		if (node.children) {
			node.children.forEach(selectSubtree);
		}
	}

	function deselectSubtree(node) {
		d3.select('#' + node.data.id).classed('highlight', false);
		if (node.children) {
			node.children.forEach(deselectSubtree);
		}
	}
</script>

<svg bind:this={svg} {height} {width}>
	{#each links as link}
		<g stroke="#999" stroke-opacity="0.6">
			<line x1={link.source.x} y1={link.source.y} x2={link.target.x} y2={link.target.y} />
		</g>
	{/each}

	{#each nodes as node}
		<foreignObject
			id={node.data.id}
			on:mouseenter={() => selectSubtree(node)}
			on:mouseleave={() => deselectSubtree(node)}
			x={node.x ? node.x - nodeSize / 2 : 0}
			y={node.y ? node.y - nodeSize / 2 : 0}
			height={nodeSize}
			width={nodeSize}
			class="circle"
			class:highlight={node.data.highlight}
			style={`--element-bg-color: var(${node.data.color ?? '--gray'})`}
		>
			<div>
				<a href="/blog/">{node.data.name}{node.data.count ? ' (' + node.data.count + ')' : ''}</a>
			</div>
		</foreignObject>
	{/each}
</svg>

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
		cursor: pointer;
		text-decoration: none;
		color: #fff;
		transition: all 0.2s;
	}

	a:hover {
		text-decoration: underline;
		font-weight: bold;
	}
</style>
