<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<header>
		<img class="logo" alt="logo" src="/logo.png" width="256px"/>
		<h1 class="title">
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
		<br/>
		<img width="128px" alt="ergot" src="/ergot.png"/>
	</header>
	<div>
		<div>
			<p>Geocats intends to leverage blockchain technology by allowing players to swap non-fungible tokens with one another in a Geocache virtual world.</p>
			<p>NFT rewards and treasures encourage players to work together to solve puzzles as well as allowing each player to own whatever they find for themselves.</p>
		</div>
	</div>
</section>

<style>
	h1 {
		width: 100%;
	}
	.row {
		margin: auto;
		max-width: 512px;
		display: flex;
		justify-content: space-around;
	}
	header {
		text-align: center;
	}
	.logo {
		padding-top: 1rem;
	}
	.title {
		text-transform: uppercase;
		font-weight: bold;
		color: black;
	}
</style>
