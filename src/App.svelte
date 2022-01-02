<script>
	import Navbar from './components/navbar/Navbar.svelte';
</script>

<main>
	<header>
		<Navbar />
	</header>

	<section>
		<h1>Under Construction...</h1>
	</section>
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;

		header {
			display: flex;
			height: 10%;
		}

		section {
			height: 90%;
			display: flex;
			align-items: center;
			justify-content: center;

			h1 {
				font-size: 5em;
			}
		}
	}
</style>
