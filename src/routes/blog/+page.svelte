<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import Post from "$lib/ui/post.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { posts } = data;

  const tagKeys: string[] = [
    ...new Set(posts.map(({ meta }) => meta.categories).flat()),
  ];

  const options = tagKeys.map((value) => ({
    value,
    label: value.replace("_", " "),
  }));

  let selectedTag: string;

  $: filteredPosts = posts.filter(({ meta }) => {
    console.log(
      meta.categories,
      selectedTag,
      meta.categories.includes(selectedTag)
    );
    return selectedTag ? meta.categories.includes(selectedTag) : true;
  });
</script>

<svelte:head>
  <title>Blog | Kasper Laursen</title>
</svelte:head>

<Card class="grid gap-6">
  <div class="flex justify-between">
    <h3>Posts</h3>
    <select
      class="uppercase bg-surface-3"
      bind:value="{selectedTag}"
      placeholder="Category"
    >
      <option value="">ALL categories</option>
      {#each options as option}
        <option value="{option.value}">{option.label}</option>
      {/each}
    </select>
  </div>

  {#each filteredPosts as post}
    <Post post="{post}" />
  {/each}
</Card>
