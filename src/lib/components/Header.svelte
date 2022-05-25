<script>
	import { config } from '../config/settings.json';

	export let title;
</script>

<svelte:head>
	{#if title}
		<title>{title} - {config.sitename}</title>
	{/if}
</svelte:head>

<header>
	<div id="site-title">
		<img src="{config.siteicon}" alt="" class="site-icon">
		<a href="/">
			<h1>{config.sitename}</h1>
			<span id="site-subtitle">{config.sitedesc}</span>
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

		background: linear-gradient(15deg, #3d74c5, #c0589d);
		color: white;

		box-shadow: 0 0 10px #0000008a;
	}

	header h1 {
		margin: 0;
		font-size: 1em;
		text-transform: initial;
		/* font-variant: small-caps; */
	} 

	#site-title {
		display: flex;
		align-items: center;
		margin-left: 1em;
	}

	#site-title a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		line-height: 1;
	}

	#site-title a:hover {
		text-decoration: none;
	}

	#site-title #site-subtitle {
		font-size: 0.65em;
		letter-spacing: .08em;
		opacity: 0.8;
	}

	#site-title .site-icon {
		height: 2em;
		margin-right: 0.3em;
	}

	#links {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		margin-right: 3em;
	}

	header * {
		color: white;
		font-family: "OPTIVagRound-Bold";
	}
</style>
