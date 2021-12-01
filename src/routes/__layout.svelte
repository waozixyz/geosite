<script>
	import Header from '$lib/layout/header.svelte';
	import Footer from '$lib/layout/footer.svelte';

	import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>

<Footer/>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}


</style>
