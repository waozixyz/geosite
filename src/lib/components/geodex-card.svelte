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
        justify-content: left;
        align-items: top;
        flex-wrap: wrap;
        width: 100%;
        margin: auto;
		width: 100%;
		padding: 0;
	}

	.row div {
        min-width: 200px;
        margin: 0;
        text-align: left;
		padding: 30px 0 30px 0;
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
        width: 200px;
		margin-top: 10px;
	}

	.row div h1 {
		margin: 0;
		text-align: left;
		color: white;
		font-size: 30px;
	}


</style>