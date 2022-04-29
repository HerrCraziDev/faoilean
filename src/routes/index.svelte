<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>Faoilean</title>
</svelte:head>

<section>
	<h1>Look at me !</h1>
	wait what this shit really works?

	<a href="articles" sveltekit:prefetch>All articles</a>
	<a href="articles/test" sveltekit:prefetch>Test article</a>
</section>

<style>
	
</style>
