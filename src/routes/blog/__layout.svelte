<script lang="ts">
	import Theme from '$lib/theme.svelte';
	import BoxedLayout from '../_layouts/_boxed.svelte';
</script>

<Theme color="green" header="large" />
<BoxedLayout>
	<slot />
</BoxedLayout>
