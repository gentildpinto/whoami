<script context="module">
	import { client } from '$lib/graphql-client';
	import { socialQuery } from '$lib/graphql-queries';

	export const load = async () => {
        const [socialReq] = await Promise.all([
			await client.request(socialQuery)
		]);
        
		const { socials } = socialReq;

		return {
			props: {
				socials
			}
		};
	};
</script>

<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
    import Sidebar from '$lib/components/sidebar.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.scss';

	onMount(async () => {
		themeChange(false);
	});

    export let socials;
</script>

<Navbar />
<Sidebar {socials} />
<main class="">
    <slot />
</main>
<Footer />
