<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Geocats - Game</title>
</svelte:head>

<div id="content" class="black">
	<div class="content">
		<iframe src="/game/index.html" title="Geocats">
	</div>
</div>

<style>
	.black {
		background-color: black;
		height: 100vh;
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

	}
	.content {
		background-color: black;
		width: 100%;
		margin: auto;
		text-align: center;
		max-width: 760px;
		max-height: 570px;

	}
	.content iframe {
		width: 90vw;
		height: 67.5vw;
		border: none;
		max-width: 760px;
		max-height: 570px;
	}

</style>
