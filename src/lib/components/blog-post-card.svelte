
<script>
	export let post;
</script>

{#if post}
<div class="post">
    <a href="/geonews/{post.slug}">
        <!--center>
            {#if showImage}
                // todo
            {/if}
        </center-->
        <div>
            <h2 class="title">{post.title}</h2>
            <div class="text">{post.excerpt}</div>
        </div>

        <!--div>
            {#if post.tags}
                <ul class="tags">
                    {#each post.tags.slice(0, 2) as tag}
                        <li>{tag}</li>
                    {/each}
                </ul>
            {/if}
        </div-->
    </a>
</div>
{/if}

<style>
    .post {
        padding-bottom: 2rem;
    }

</style>