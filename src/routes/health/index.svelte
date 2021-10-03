<svelte:head>
	<title>Health</title>
</svelte:head>

<script context="module">
	const allPosts = import.meta.glob("./posts/*.md")

	let body = []
	for(let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				let formattedPath = `health/${path.replace(".md","").replace("./","")}`
				return {path:formattedPath, metadata}
			})
		)
	}

export const load = async() => {
	const posts = await Promise.all(body)
	return {
		props: {
			posts
		},
	}
}
</script>

<script>
	export let posts
</script>

<ul>
	{#each posts as {path,metadata}}
		<li>
			<a href={path}>{metadata.title}</a>
		</li>
	{/each}
</ul>
