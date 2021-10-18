<style>
	:global(body) {
		font-family: "Roboto Mono", Arial, sans-serif;
	}
	h1, nav {
		text-align: center;
	}
	h1 {
		font-weight: normal;
	}
	nav > a{
		padding-right: 30px;
		text-decoration: none;
		font-size: 1.25rem;
	}
	nav > a:last-child{
		padding-right: 0;
	}
	@font-face {
		font-family: "Roboto Mono";
		src: url("../static/fonts/RobotoMono-VariableFont_wght.ttf") format("truetype");
		font-style: normal;
	}
</style>

<h1>Wholesome Hacker Blog</h1>
<nav>
	<a href="/">Home</a>
	<a href="/health">Health</a>
	<a href="/tech">Tech</a>
</nav>

<slot></slot>
