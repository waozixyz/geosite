<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Geocats - Home</title>
	<meta name="description" content="his game centres around the Geocats, a talented group of cats from a place called Geoterra. They rove their world in search of small treasure chests called geocaches." />
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
			<p>Geocats is a 2D action-platformer.</p>
			<p>This game centres around the Geocats, a talented group of cats from a place called Geoterra. They rove their world in search of small treasure chests called geocaches.</p>
			<p>But, not everything in Geoterra is as idyllic as it sounds. There have been weird reports of creepy monster-cats attacking the peaceful denizens. Do you have what it takes to join the Geocats and return peace to the lands?</p>

	
		</div>
		<br/>
		<div class="row">
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
