
<script>
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    export let title;
    export let date;
    if (date) {
        date = new Date(date)
        date = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
</script>
  

<svelte:head>
	<title>Geocats - {title}</title>
</svelte:head>


<section >
    <a href="/geonews">⇽ return to overview</a> 
    {#if title}
        <h1>{title}</h1>
    {/if}
    {#if date}
        <p>{date}</p>
    {/if}
    <slot/>
    <a href="/geonews">⇽ return to overview</a> 
</section>
