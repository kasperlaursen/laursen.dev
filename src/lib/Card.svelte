<script lang="ts">
	export let spacing: 'none' | 'small' | 'medium' | 'large' = 'large';
    const spacingMap = {
        none: "0",
        small: "1em",
        medium: "2em",
        large: "3em",
    }
</script>

<div style={`--spacing: ${spacingMap[spacing]}`}>
	<slot />
</div>

<style>
	div {
		background-color: var(--bg-color-2);
		border-radius: 0.5em;
		padding: var(--spacing);
	}
</style>
