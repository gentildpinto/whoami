<script context="module">
    import Hero from '$lib/components/hero.svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				projects,
				authors
			}
		};
	};
</script>

<script>
	export let projects;
	export let authors;
</script>

<svelte:head>
	<title>Gentil Pinto</title>
</svelte:head>
<section class="h-full w-full">
    {#each authors as { name, intro }}
        <Hero {name} {intro} />
    {/each}

    <div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
        {#each projects as { name, slug, description, image }}
            <ProjectCard {name} {description} src={image[0].url} {slug} />
        {/each}
    </div>
</section>
