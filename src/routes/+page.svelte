<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import Link from "$lib/components/link.svelte";
  import Post from "$lib/ui/post.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { posts, total } = data;
</script>

<main class="grid gap-6">
  <Card class="grid gap-6">
    <h3>Latest posts</h3>
    {#each posts as post}
      <Post post="{post}" />
    {/each}
    <Link href="/blog">
      All Posts ({total})
    </Link>
  </Card>

  <h2>🔗 Links</h2>
  <Card class="flex gap-4 flex-wrap">
    <Link class="no-underline" href="https://www.strømpris.dk" target="_blank">
      ⚡️ Strømpris
    </Link>
    <Link class="no-underline" href="https://www.kaspers.pizza" target="_blank">
      🍕 Pizza making
    </Link>
    <Link
      class="no-underline"
      href="https://www.linkedin.com/in/habber/"
      target="_blank"
    >
      💼 LinkedIn
    </Link>
    <Link
      class="no-underline"
      href="https://github.com/kasperlaursen"
      target="_blank"
    >
      👨‍💻 Github
    </Link>
    <Link
      class="no-underline"
      href="https://www.printables.com/social/46395-habber/models"
      target="_blank"
    >
      🖨️ Printables
    </Link>
    <Link
      class="no-underline"
      href="https://twitter.com/habberlabber"
      target="_blank"
    >
      🐦 Twitter
    </Link>
  </Card>
</main>
