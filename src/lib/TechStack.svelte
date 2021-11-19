<script lang="ts">
	import type { TechStack } from 'src/routes/techstack.json';
	export let data: TechStack[];
	const lowYear = [...data].sort((a, b) => a.from - b.from)[0].from;
	const thisYear = new Date().getFullYear();
	const fullRange = thisYear - lowYear;
	const yearInPercentage = 100 / fullRange;
	console.log(lowYear);
</script>

<section>
	<div class="labels">
		{#each Array(fullRange) as _, i}
			<div class="label" style={`margin-left: ${i > 0 ? yearInPercentage : 0}%`}>
				<span>{lowYear + i}</span>
			</div>
		{/each}
	</div>
	{#each data as { name, from, to }}
		<div class="bar">
			<div
				class="fill"
				style={`
                width: ${(to - from) * yearInPercentage}%; 
                margin-left: ${(from - lowYear) * yearInPercentage}%
                `}
			>
				{name}
			</div>
		</div>
	{/each}
</section>

<style lang="postcss">
	section {
		@apply mt-16 relative;
	}
	.labels {
		@apply absolute w-full h-full flex;
	}
	.label {
		@apply relative;
	}
	.label span {
		@apply absolute transform -rotate-45 -mt-10;
	}

	.label::after {
		content: '';
		z-index: -1;
		@apply absolute h-full border-r border-black border-opacity-10 left-2;
	}
	.bar {
		@apply w-full m-2;
	}
	.fill {
		@apply bg-gray-500 text-white rounded-md text-center;
	}
</style>
