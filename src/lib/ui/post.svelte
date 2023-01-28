<script lang="ts">
  import type { Post } from "$lib/types";
  export let post: Post;
</script>

<a
  href="{post.path}"
  class="grid gap-6 grid-cols-[160px,1fr] group hover:scale-95 transition rounded-lg"
>
  <img
    src="{post.meta.image}"
    alt="{post.meta.teaser}"
    class="w-40 aspect-square object-cover rounded-lg"
  />
  <div class="grid grid-rows-[auto,1fr,auto]">
    <h3>{post.meta.title}</h3>
    <p>{post.meta.teaser}</p>
    <a
      href="{post.path}"
      class="text-text-colored underline group-hover:text-primary-600"
      >Read Post</a
    >
  </div>
</a>
