<script context="module">
    import { config } from '$lib/config/settings.json'
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>{config.sitename}</title>
</svelte:head>

<section>
	<h1>Welcome !</h1>
	wait what this shit really works?

	<br>
	<a href="articles" sveltekit:prefetch>All articles</a><br>
	<a href="articles/test" sveltekit:prefetch>Test article</a>
</section>

<style>
	
</style>
