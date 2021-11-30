
<script>
	export let post;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date
    if (post.date) {
        date = post.date
        if (date) {
            date = new Date(date)
            date = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        }
    }
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
            <br/>
            <a href="/geonews/{post.slug}">continue reading ⇾</a> 
        </div>
        <br/>
        <!--div>
            {#if post.tags}
                <ul class="tags">
                    {#each post.tags.slice(0, 2) as tag}
                        <li>{tag}</li>
                    {/each}
                </ul>
            {/if}
        </div-->
        {#if date}
            <p>{date}</p>
        {/if}

    </a>
</div>
{/if}

<style>
    .post {
        padding-bottom: 2rem;
    }

</style>