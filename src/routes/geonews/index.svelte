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
  import BlogPostCard from '$lib/components/blog-post-card.svelte';

  export let posts;
</script>
<section>
  {#each posts as post}
    <BlogPostCard {post} />
  {/each}
</section>