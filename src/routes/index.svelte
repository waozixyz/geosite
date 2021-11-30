<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Geocats - Home</title>
</svelte:head>

<section>
	<header>
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
		<img class="logo" width="128px" alt="logo" src="/logo.png"/>
	</header>
	<div>
		<div>
			<p>Geocats leverages blockchain technology by allowing players to swap non-fungible tokens with one another in a Geocache virtual world.</p>
			<p>NFT rewards and treasures encourage players to work together to solve puzzles as well as allowing each player to own whatever they find for themselves.</p>
		</div>
		<center class="icons">
			<a href="mailto:geocats@protonmail.com">@</a>
			<a href="https://twitter.com/GeoCatsNFT"><img alt="twitter logo" src="/icons/twitter.png"/></a>
			<a href="https://gitlab.com/nonaco/geosite"><img alt="gitlab logo" src="/icons/gitlab.png"/></a>
			<a href="https://t.me/GeocatsOfficial"><img alt="telegram logo" src="/icons/telegram.png"/></a>
			<a href="https://discord.gg/jsNtEb4Pj2"><img alt="discord logo" src="/icons/discord.png"/></a>

		</center>
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
	.icons {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32px;

	}
	.icons a {
		margin: .2rem;
	}
	.icon {
	}
	.icons img {
		width: 32px;
	}
</style>
