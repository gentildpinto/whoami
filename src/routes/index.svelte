<script context="module">
    import Hero from '$lib/components/hero.svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery, socialQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const [authorReq, projectsReq, socialReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery),
            client.request(socialQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;
        const { socials } = socialReq;

		return {
			props: {
				projects,
				authors,
                socials
			}
		};
	};
</script>

<script>
	export let projects;
	export let authors;
    export let socials;
</script>

<svelte:head>
	<title>Gentil Pinto</title>
</svelte:head>
<section class="h-full w-full">
    {#each authors as { name, intro }}
        <Hero {name} {intro} {socials} />
    {/each}

    <div class="grid grid-cols-6 gap-10 p-80">
        {#each projects as { name, slug, description, image }}
            <ProjectCard {name} {description} src={image[0].url} {slug} />
        {/each}
    </div>
</section>
