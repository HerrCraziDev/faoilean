<script>
	import { config } from '../config/settings.json';
</script>

<header>
	<div id="site-title">
		<img src="/faoilean_icon_transparent.png" alt="" class="site-icon">
		<a href="/">
			<h1>{config.sitename}</h1>
		</a>
	</div>

	<ul id="links" class="nolist">
		<li><a href="/articles">Articles</a></li>
		<li><a href="/tags">Tags</a></li>
		<li><a href="/about">About</a></li>
	</ul>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: 3em;

		background: linear-gradient(15deg, #3d74c5, #d872b6);
		color: white;

		box-shadow: 0 0 10px #0000008a;
	}

	header h1 {
		margin: 0;
		color: white;
		font-size: 1.2em;
		font-family: "OPTIVagRound-Bold";
		text-transform: initial;
		font-variant: small-caps;
	}

	#site-title {
		display: flex;
		align-items: center;

		margin-left: 1em;
	}

	#site-title .site-icon {
		height: 2em;
	}

	#links {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		margin-right: 3em;
	}

	#links a {
		color: white;
		font-family: "OPTIVagRound-Bold";
	}
</style>
