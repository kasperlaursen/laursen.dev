<script lang="ts">
	import { themeColor, headerSize } from '$lib/themeStore';
	export let color;
	export let header;

	themeColor.set(color);
	headerSize.set(header);
</script>
