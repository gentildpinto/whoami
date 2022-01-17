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
</script>

<Navbar />
<Sidebar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
    <slot />
</main>
<Footer />
