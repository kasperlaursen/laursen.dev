<script>
  import "../app.css";
  import Header from "../lib/ui/header.svelte";
</script>

<Header />
<section class="container mx-auto sm:-mt-4 max-w-screen-lg">
  <slot />
</section>
