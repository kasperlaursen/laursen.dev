<script lang="ts">
	import Theme from '$lib/theme.svelte';
	import BoxedLayout from '../_layouts/_boxed.svelte';
</script>

<Theme color="green" header="large" />
<BoxedLayout>
	<slot />
</BoxedLayout>


<style>
	:global(pre) {
		padding: .5rem;
		background-color: #ebebeb;
		border-radius: .2rem;
	}

	:global(code) {
		padding: .1rem;
		background-color: rgba(200, 50, 50, 0.1);
		border: 1px solid rgba(200, 150, 150, 0.5);
		color: rgba(200, 50, 50, 1);
		border-radius: .3rem;
	}


	:global(pre code) {
		padding: 0;
		background-color: transparent;
		border: none;
		color: initial;
		border-radius: 0;
	}
</style>