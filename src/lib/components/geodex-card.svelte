<script>
    export let title;
    export let src;
    if (!src) {
        src = title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '_');
    }
</script>


<div class="row">
    <div>
        <img alt="{title}" src="/geodex/{src}.gif" />
    </div>
    <div>
        <h1>{title}</h1>
        <slot/>
    </div>
</div>


<style>
	.row {
        display: flex;
        justify-content: space-around;
        align-items: top;
        align-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin: auto; 
        padding-top: 1rem;
	}

	.row div {
        min-width: 14rem;
        text-align: left;
	}

	.row div:first-of-type {
		width: 35%;
	}

	.row div:last-of-type {
		width: 65%;
		border-bottom: 1px solid var(--accent-color);
;
	}

	.row img {
        width: 13rem;
		margin-top: 1rem;
	}

	.row div h1 {
		margin: 0;
		text-align: left;
		color: white;
		font-size: 2rem;
	}


</style>