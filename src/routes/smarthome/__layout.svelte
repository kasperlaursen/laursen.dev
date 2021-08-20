<script lang="ts">
	import { themeColor, headerSize } from '$lib/themeStore';

	themeColor.set('blue');
	headerSize.set('small');
</script>

<slot />
