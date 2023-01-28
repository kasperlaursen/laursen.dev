<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, date, content: Content } = data;
</script>

<Card class="prose max-w-none prose-sm p-10 dark:prose-invert">
  <Content />
  <p class="font-bold">Published: {date}</p>
</Card>
