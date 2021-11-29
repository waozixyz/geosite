<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		Geocats
	</h1>
	<h2>
		An Interdimensional NFT Geocaching Experience
	</h2>
	<div class="row">
		<a href="https://en.wikipedia.org/wiki/Geocaching" target="_blank">
			What's Geocaching?
		</a>
		<a href="https://www.altcoinbuzz.io/bitcoin-and-crypto-guide/what-is-an-nft-how-do-they-work-and-how-to-acquire-them/" target="_blank">
			What's an NFT?
		</a>
	</div>
	<div>
		<img alt="ergot" src="/static/ergot.png"/>
		<p>Geocats intends to leverage blockchain technology by allowing players to swap non-fungible tokens with one another in a Geocache virtual world. NFT rewards and treasures encourage players to work together to solve puzzles as well as allowing each player to own whatever they find for themselves.</p>
	</div>
</section>

<style>
	section {
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		max-width: 700px;
	}

	h1 {
		width: 100%;
	}
	.row {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
</style>
