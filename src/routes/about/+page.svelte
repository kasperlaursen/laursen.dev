<script lang="ts">
  import Me from "./me.jpg?w=400&webp";
  import Card from "../../lib/components/card.svelte";
  import Job from "$lib/ui/job.svelte";
  import type { PageData } from "./$types";
  import Link from "$lib/components/link.svelte";

  export let data: PageData;
  const { jobs } = data;
</script>

<svelte:head>
  <title>CV | Kasper Laursen</title>
</svelte:head>

<main class="grid gap-6 pb-10">
  <Card
    class="flex gap-6 place-items-center justify-center flex-wrap sm:flex-nowrap w-auto"
  >
    <img
      src="{Me}"
      alt="Kasper laursen"
      class="w-40 rounded-full border-4 border-secondary-200 shadow"
    />
    <div>
      <h1>Hi! I'm Kasper Laursen 👋</h1>
      <p>
        I'm a Web Developer living in Denmark 🇩🇰 working as a Senior Software Engineer.
        <br />
        I specialize in frontend application development using modern javascript
        frameworks.
      </p>
    </div>
  </Card>
  <a id="#interests"><h1>🤓 Interests</h1></a>
  <Card class="grid gap-6">
    <div class="grid sm:grid-cols-[220px,minmax(0,1fr)] gap-6 group">
      <h3>🤖 Home Automation</h3>
      <p>
        I spend my spare time on home automation projects around the house. <Link
          class="!p-0"
          href="https://www.home-assistant.io">Home Assistant</Link
        > is my weapon of choice and if it did not require the use of a soldering
        iron, it was almost too easy!
      </p>
    </div>

    <div class="grid sm:grid-cols-[220px,1fr] gap-6 group">
      <h3>🖨️ 3D Printing</h3>
      <p>
        3D printing and modeling have been part of my toolbox for many years! I find it extremely satisfying to solve real-life problems using this tool.
      </p>
    </div>

    <div class="grid sm:grid-cols-[220px,1fr] gap-6 group">
      <h3>👨‍💻 Web development</h3>
      <p>
        To me, web development is as much a hobby as it is my job. When I am done working for the day, I often spend the evening building personal web projects. These projects enable me to explore new technologies that I might not get to use during my day job.
      </p>
    </div>
    <div class="flex gap-6 flex-wrap justify-center pt-6">
      <h3>👨‍🍳 Cooking</h3>
      <h3>🌶️ Chili Growing</h3>
      <h3>🎣 Fishing</h3>
      <h3>🥓 Smoke oven</h3>
      <h3>📷 Drone Photography</h3>
      <h3>🏚️ Home renovation</h3>
    </div>
  </Card>
  <a id="#experience">
    <h1>💼 Experience</h1>
  </a>
  <Card class="grid gap-6">
    {#each jobs as job}
      <Job {...job} />
    {/each}
  </Card>
  <a id="#education"><h1>🎓 Education</h1></a>
  <Card class="grid gap-6">
    <Job
      company="KEA - Copenhagen"
      period="2018 to 2019"
      title="Bachelor degree in Web Development"
      info="In 2019 i finished my bachelor degree in Web Development at Copenhagen school of design and techonlogies."
    />
    <Link href="https://www.linkedin.com/in/habber/" target="_blank">
      For more education history visit my Linkedin profile
    </Link>
  </Card>
</main>
