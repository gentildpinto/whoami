<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.scss';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Navbar />
<main class="h-screen w-screen">
    <slot />
</main>
<!-- <Footer /> -->
