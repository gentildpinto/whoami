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

<div class="navbar text-sm top-0 px-32 py-5 flex justify-end">
	<div class="hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<div class="px-4">
				<button on:click={update}>
					{@html svg}
				</button>
			</div>
		</div>
	</div>
</div>
