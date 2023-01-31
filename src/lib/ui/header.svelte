<script lang="ts">
  import { theme } from "$lib/stores/theme";
  $: toggleTheme = () => {
    theme.update((value) => (value === "dark" ? "light" : "dark"));
  };
</script>

<header class="p-6 sm:pb-16 bg-transparent text-center sm:text-start">
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
