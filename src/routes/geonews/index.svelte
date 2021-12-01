<!-- By using context="module", I declare that this code will run on the server 
and fetch this data before page actually loads -->
<script context="module">
	export async function load({ fetch }) {
		const url = '/geonews.json';
		const res = await fetch(url);

    	if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
<script>
  import GeonewsCard from '$lib/components/geonews-card.svelte';

  export let posts;
</script>


<svelte:head>
	<title>Geocats - Geonews</title>
</svelte:head>

<section>


  <h1>GeoNews</h1>
  {#each posts as post}
    <GeonewsCard {post} />
  {/each}
</section>

