<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Geocats - Home</title>
	<meta name="description" content="The Geodex is a compendium of all known Geocats NFTs. This page is a work in progress, and functionality will be improved as time goes on. Geocats can be found in game, won during contests, or bought in the Vulcan Forged Marketplace. Geocats-V3 will make all cats unique and playable characters in game." />
</svelte:head>

<section>
	<div class="center">
		<h1 class="title">
			Geocats
		</h1>
		<h2>
			A Retro-style 2D Action Platformer
		</h2>
		<!--img class="logo" width="128px" alt="logo" src="/logo.png"/-->
	</div>
	<div>
		<div>
			<p>Our adventure story takes the player through the world of GeoTerra, a place of both breathtaking beauty and chilling dystopian environments. Players can collect NFT cats which are unique and playable characters in game. There are plenty of stories, quests, and unique environments waiting to be explored.</p>
			<p>We're a small international team with a big interest in capturing the fun of games from the past, while embracing the technologies of the future in positive ways.</p>
		</div>
		<br/>
		<div class="row">
			<a class="button" href="https://en.wikipedia.org/wiki/Non-fungible_token" target="_blank">
				What's an NFT?
			</a>
			<a class="button" href="/geodex">
				What's a Geocat?
			</a>
		</div>
		<br/>

	</div>
</section>

<style>
	h1 {
		width: 100%;
	}
	.row {
		margin: auto;
		width: 100%;
		display: flex;
		justify-content: space-around;
		
	}
	.center {
		text-align: center;
	}
	.title {
		text-transform: uppercase;
		font-size: 4rem;
		color: var(--accent-color);
		line-height: 0;
	}
</style>
