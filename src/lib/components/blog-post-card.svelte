
<script>
	export let post;
	export let showImage = true;
</script>

{#if post}
<div>
    <a href="/geonews/{post.slug}">
        <div>
            {#if showImage}
                // todo
            {/if}
        </div>
        <div>
            <div class="title">{post.title}</div>
            <div class="note">{post.readingTime}</div>
            <div class="text">{post.excerpt}</div>
        </div>
        <div>
            {#if post.tags}
                <div class="tags">
                    {#each post.tags.slice(0, 2) as tag}
                        // todo
                    {/each}
                </div>
            {/if}
        </div>
    </a>
</div>
{/if}
