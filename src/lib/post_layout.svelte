<script>
	export let title
	export let sub
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="content">
	<h1>{title}</h1>

	<!-- subtitle is not required, so if it doesn't exist, don't render -->
	{#if sub}<h2>{sub}</h2>{/if}

	<slot></slot>
</div>
