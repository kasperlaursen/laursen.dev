<script lang="ts">
  import { theme } from "$lib/stores/theme";
  $: toggleTheme = () => {
    theme.update((value) => (value === "dark" ? "light" : "dark"));
  };
</script>

<header class="p-6 sm:pb-10 bg-primary-500 text-center sm:text-start">
  <div
    class="container max-w-screen-lg mx-auto flex justify-between flex-wrap gap-6 "
  >
    <a href="/" class=" w-full sm:w-auto">
      <h1 class="!text-white !font-mono !font-light !text-xl">
        Kasper Laursen
      </h1>
    </a>
    <nav
      class="text-white font-medium flex gap-4 uppercase group w-full justify-center sm:w-auto"
    >
      <a
        href="/blog"
        class="hover:scale-110 transition font-medium group-hover:opacity-50 hover:!opacity-100 p-1 px-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-60"
      >
        Blog
      </a>
      <a
        href="/about"
        class="hover:scale-110 transition font-medium group-hover:opacity-50 hover:!opacity-100 p-1 px-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-60"
      >
        About
      </a>
      <button
        on:click="{toggleTheme}"
        class="hover:scale-110 transition font-medium group-hover:opacity-50 hover:!opacity-100 p-1 px-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-60"
      >
        {#if $theme === "dark"}
          ☀️
        {:else}
          🌛
        {/if}
      </button>
    </nav>
  </div>
</header>

<style>
  header {
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
</style>
