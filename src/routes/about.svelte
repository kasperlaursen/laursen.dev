<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/techstack.json`);
		const techStack: TechStack[] = await res.json();
		return {
			props: { techStack }
		};
	}
</script>

<script lang="ts">
	import type { TechStack } from './techstack.json';
	import Theme from '$lib/theme.svelte';
	import Card from '$lib/Card.svelte';
	import TechStackComponent from '$lib/TechStack.svelte';
	export let techStack: TechStack[];
</script>

<Theme color="purple" header="large" />

<svelte:head>
	<title>About | Kasper Laursen</title>
</svelte:head>
<main>
	<section class="card card--up">
		<div class="imagecontainer">
			<img src="me.png" alt="me" />
		</div>
		<div class="info">
			<h1>Hi! I'm Kasper Laursen 👋</h1>
			<p>
				I'm a Web Developer living in Denmark 🇩🇰 working as a Software Engineer. <br />
				I specialize in frontend application development using modern javascript frameworks.
			</p>
		</div>
	</section>
	<section>
		<h1>💼 Experience</h1>
		<div class="card jobs">
			<div class="job">
				<div class="company">
					<h2>Trackunit</h2>
					<p>Apr 2020 to Current</p>
				</div>
				<div class="jobinfo">
					<h2>Software Engineer (Frontend)</h2>
					<p>
						In my position at Trackunit, I have been working on developing and maintaining a large
						user facing application. Some contributions to highlight could be spearheading the
						addition of e2e testing and heavy involvement in improving coding practices.
					</p>
				</div>
			</div>

			<div class="job">
				<div class="company">
					<h2>PeopleNet</h2>
					<p>Mar 2018 to Apr 2020</p>
				</div>
				<div class="jobinfo">
					<h2>Frontend Developer & Consultant</h2>
					<p>
						I started at PeopleNet as a student worker and later became full-time. During my
						employment, I owned a lot of client interaction and problem-solving. I mainly worked
						with the development of components for MS SharePoint, using Typescript and React.
					</p>
				</div>
			</div>

			<div class="job">
				<div class="company">
					<h2>VOPU IVS</h2>
					<p>Mar 2017 to Mar 2018</p>
				</div>
				<div class="jobinfo">
					<h2>Full-time self-employed developer</h2>
					<p>
						In 2017 I quit my job at Advantage Media to start a new web development company with a
						friend. In VOPU my role was Client Communication, Sales and Frontend Development.
						Focusing on custom web applications using Typescript, Angular and Rest APIs.
					</p>
				</div>
			</div>

			<div class="job">
				<div class="company">
					<h2>Advantage Media</h2>
					<p>Aug 2015 to Mar 2017</p>
				</div>
				<div class="jobinfo">
					<h2>Development Manager</h2>
					<p>
						At Advantage media, I was in charge of frontend development of a new client-facing
						platform. Working closely with a backend developer and was in charge of 2 frontend
						developers in Brazil. Working with Typescript, Angular and REST APIs.
					</p>
				</div>
			</div>

			<div class="job">
				<div class="company">
					<h2>Habberdesign</h2>
					<p>October 2013</p>
				</div>
				<div class="jobinfo">
					<h2>Freelance Full-stack web developer</h2>
					<p>
						In 2013 I started my own company to create websites. I started by creating custom coded
						websites using HTML, CSS, JQUERY, PHP, and MYSQL for small businesses.
					</p>
				</div>
			</div>
		</div>
	</section>
	<h3>My tech skill timeline</h3>
	<TechStackComponent data={techStack} />
</main>

<style lang="postcss">
	.job h2 {
		@apply m-0 mb-1 font-medium;
	}

	main {
		@apply grid gap-4;
	}
	.card {
		@apply bg-gray-50 p-10 rounded relative mx-auto drop-shadow-md w-full;
	}
	.job {
		display: grid;
		grid-template-columns: 160px 1fr;
		@apply gap-4;
	}
	.card.jobs {
		@apply grid gap-6;
	}
	.card--up {
		@apply -mt-8 flex;
	}
	img {
		@apply w-40;
	}

	.info {
		@apply ml-4;
	}
</style>
