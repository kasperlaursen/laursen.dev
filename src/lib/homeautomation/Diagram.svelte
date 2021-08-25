<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	export let data = {
		name: 'Home Assistant',
		children: [{}]
	};

	let svg;
	let width = 1000 - 16 * 2;
	let height = 800;
  const nodeSize = 80;
	const nodeRadius = nodeSize/2;

	const root = d3.hierarchy(data);

	$: links = root.links();
	$: nodes = root.descendants();

	let transform = d3.zoomIdentity;
	let simulation;

	onMount(() => {
		simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance(0)
					.strength(1)
			)
			.force('charge', d3.forceManyBody().strength(-2500))
			.force('center', d3.forceCenter(width / 2, height / 2))
			.on('tick', simulationUpdate);

		d3.select(svg)
			.call(
				d3
					.drag()
					.container(svg)
					.subject(dragsubject)
					.on('start', dragstarted)
					.on('drag', dragged)
					.on('end', dragended)
			)
			.call(
				d3
					.zoom()
					.scaleExtent([1 / 10, 8])
					.on('zoom', zoomed)
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
	function resize() {
		({ width, height } = svg.getBoundingClientRect());
	}
</script>

<!-- SVG was here --><svg bind:this={svg} {width} {height}>
	{#each links as link}
		<g stroke="#999" stroke-opacity="0.6">
			<line x1={link.source.x} y1={link.source.y} x2={link.target.x} y2={link.target.y} />
		</g>
	{/each}

	{#each nodes as node}
		<foreignObject
			x={node.x - nodeSize/2}
			y={node.y - nodeSize/2}
			height={nodeSize}
			width={nodeSize}
			class="circle"
			style={`background: var(${node.data.color ?? '--red'})`}
		>
			<div>{node.data.name}</div>
		</foreignObject>
	{/each}
</svg>

<style>
	.circle {
		border: 2px solid #fff;
		background-color: var(--red);
		border-radius: 50%;
	}

	.circle > div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;

		text-align: center;
		color: #fff;
    font-size: .8em;
	}
</style>
