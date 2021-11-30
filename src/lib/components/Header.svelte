<script>
	import { page } from '$app/stores';
</script>

<header>

	<nav>

		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/geonews'}><a sveltekit:prefetch href="/geonews">GeoNews</a></li>
			<li class:active={$page.path === '/geodex'}><a sveltekit:prefetch href="/geodex">GeoDex</a></li>
			<li class:active={$page.path === '/play'}><a sveltekit:prefetch href="/play#game">Play</a></li>
			<!--li class:active={$page.path === '/farm'}><a sveltekit:prefetch href="/farm">Farm</a></li-->
		</ul>
	
	</nav>

</header>

<style>
	header {
		max-width: var(--column-width);
		text-align: center;
		margin: auto;
		width: 100%;
	}


	nav {
		--background: var(--background);
		border: 3px solid var(--accent-color);
		box-sizing: border-box;
		border-radius: 0px 0px 10px 10px;
		border-top: none;
		width: 100%;

	}


	ul {
		display: flex;
		justify-content: space-around;
		width: 100%;
		padding: 0;
		margin: 0;
		height: 3em;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		margin: 0 1rem;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
