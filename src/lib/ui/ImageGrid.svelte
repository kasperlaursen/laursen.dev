<script lang="ts">
  export let images: string[];
</script>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 place-items-center grid-rows-[repeat(auto-fill,minmax(0,350px))]"
>
  {#each images as image, index}
    <a href="{image}" target="_blank" rel="noreferrer" class="h-min max-h-full">
      <img
        src="{image}"
        alt="{`index: ${index}`}"
        class="object-cover m-0 max-w-full max-h-full"
      />
    </a>
  {/each}
</div>
