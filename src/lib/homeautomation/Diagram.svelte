<script>
	import { onMount } from 'svelte';
  import * as d3 from 'd3';
	import { drag } from 'd3-drag';

export let data = {
  name: "Home Assistant",
  children: [{}]
  };

let svg;
let width = 500;
let height = 600;

// onMount(()=> {
    const root = d3.hierarchy(data);
    const links = root.links();
    const nodes = root.descendants();

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(50).strength(1))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

    const link = d3.select(svg).append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    const node = d3.select(svg).append("g")
        .attr("fill", "#fff")
        .attr("stroke", "#000")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("fill", d => d.children ? null : "#000")
        .attr("stroke", d => d.children ? null : "#fff")
        .attr("r", 10)
        .call(drag(simulation));

    node.append("title")
        .text(d => d.data.name);

    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });

    d3.invalidation.then(() => simulation.stop());
  // });
</script>
<!-- SVG was here -->
<svg bind:this={svg} {width} {height} viewBox={`${-width / 2},${-height / 2},${width},${height}`}>
  {#each links as link}
  <g stroke='#999' stroke-opacity='0.6'>
    <line x1='{link.source.x}' y1='{link.source.y}' 
          x2='{link.target.x}' y2='{link.target.y}'
          transform='translate({transform.x} {transform.y}) scale({transform.k} {transform.k})'>
          <title>{link.source.id}</title>
    </line>
  </g>
{/each}

{#each nodes as point}
  <circle class='node' r='5' fill='{colourScale(point.group)}' cx='{point.x}' cy='{point.y}'
   transform='translate({transform.x} {transform.y}) scale({transform.k} {transform.k})'>
  <title>{point.id}</title></circle>
{/each}
</svg>

<style>
	circle {
		stroke: #fff;
    stroke-width: 1.5;
	}
</style>