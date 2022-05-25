<script>
	import { config } from '../config/settings.json';

	export let title;
</script>

<svelte:head>
	{#if title}
		<title>{title} - {config.sitename}</title>
    {:else}
		<title>{config.sitename}</title>
	{/if}
</svelte:head>