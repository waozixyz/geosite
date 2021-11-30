
<script>
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    export let title;
    export let date;
    export let caption;
    export let image;
    if (date) {
        date = new Date(date)
        date = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
</script>
  

<svelte:head>
	<title>Geocats - {title}</title>
</svelte:head>


<section >


    {#if title}
        <h1>{title}</h1>
    {/if}
    {#if date}
        <p>{date}</p>
    {/if}
    {#if image}
        <img alt="header" src="/geonews/{image}"/>
    {/if}
    {#if caption}
        <center>
            <i>{caption}</i>
        </center>
    {/if}
    <slot/>
    <a href="/geonews">⇽ return to overview</a> 
</section>

<style>
    section img {
        width: 100%;
        border-radius: 2%;
    }
</style>