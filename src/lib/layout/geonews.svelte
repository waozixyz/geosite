
<script>
    export let title;
    export let date;
    if (date) {
        date = new Date(date)
        date = date.toJSON().split("T")[0];
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
    <slot/>
</section>
