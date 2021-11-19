<script lang="ts">
	export let spacing: 'none' | 'small' | 'medium' | 'large' = 'large';
	const spacingMap = {
		none: '0',
		small: '1em',
		medium: '2em',
		large: '3em'
	};
</script>

<div style={`--spacing: ${spacingMap[spacing]}`}>
	<slot />
</div>

<style lang="postcss">
	div {
		@apply bg-gray-50 rounded;
		padding: var(--spacing);
	}
</style>
