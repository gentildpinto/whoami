<script>
	import { onMount } from 'svelte';

	let ls = null;
	let theme = '';
	let svg = '';

	let moonSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;

	let sunSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    `;

	const readLocalStorage = () => !!ls && ls.getItem('theme');

	const update = () => {
		theme = readLocalStorage();

		if (theme === 'light') {
			svg = sunSVG;
			!!ls && ls.setItem('theme', 'dark');
			document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark');
		} else {
			svg = moonSVG;
			!!ls && ls.setItem('theme', 'light');
			document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');
		}
	};

	onMount(() => {
		typeof localStorage !== 'undefined' && (ls = localStorage);
		theme = readLocalStorage();

		if (theme === 'light') {
			svg = moonSVG;
		} else {
			svg = sunSVG;
		}
	});
</script>

<div class="navbar mb-16 {theme !== 'light' ? 'text-neutral-focus' : 'text-neutral-content'} sticky top-0 z-10">
	<div class="flex-1 px-2 mx-2">
		<a class="text-lg font-bold" href="/"> Gentil Pinto </a>
		&nbsp;
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
			/>
		</svg>
	</div>

	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<div class="px-4">
				<button on:click={update}>
					{@html svg}
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
</style>
