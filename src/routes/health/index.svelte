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

<svelte:head>
	<title>Health</title>
</svelte:head>

<h2>Health Posts</h2>
<ul>
	{#each posts as {path,metadata}}
		<li>
			<a href={path}>{metadata.title}</a>
		</li>
	{/each}
</ul>
