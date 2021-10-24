<style lang="scss">
	@import "./global-styles.scss";

	h1, nav {
		text-align: center;
	}

	h1 {
		font-weight: normal;
	}

	nav > a {
		padding-right: 30px;
		text-decoration: none;
		font-size: 1.25rem;
		&:last-child {
			padding-right: 0;
		}
	}

	@font-face {
		font-family: "Roboto Mono";
		src: url("/fonts/RobotoMono-VariableFont_wght.ttf") format("truetype");
		font-style: normal;
	}
</style>

<div class="content">

	<h1 id="title">Wholesome Hacker Blog</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/health">Health</a>
		<a href="/tech">Tech</a>
	</nav>

	<slot></slot>
</div>
