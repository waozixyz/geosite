<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Made with lots of <b>catnip</b> <br> <b>Nonaco</b> © 2021 - <a href="/">BY-NC-SA 4.0</a></p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
	}

	footer a {
		font-weight: bold;
	}

</style>
