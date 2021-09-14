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

<style>
	section {
		position: relative;
		margin-top: 70px;
	}
	.labels {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
	}
	.label {
		position: relative;
	}
	.label span {
		position: absolute;
		transform: rotate(-45deg);
		margin-top: -40px;
	}

	.label::after {
		content: '';
		position: absolute;
		height: 100%;
		border-right: 1px solid rgba(0,0,0,.1);
		left: 7px;
        z-index: -1;
	}
	.bar {
		width: 100%;
		margin: 0.5rem;
	}
	.fill {
		background-color: var(--gray);
		color: var(--accent-bg-text-color);
		text-align: center;
		border-radius: 2px;
	}
</style>
