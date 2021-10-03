const config = {
	"extensions": [".svelte.md", ".md", ".svx"],

	"smartypants": {
		"dashes": "oldschool"
	},

	"remarkPlugins": [],
	"rehypePlugins": [],
	"layout": {
		"post": "./src/lib/post_layout.svelte"
	},
};

export default config;
