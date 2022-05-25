
<script>
    import { config } from '$lib/config/settings.json'

    export const layout = '';
    export let articles;

    function printArticles() {
        console.log("articles: ", articles)
        for (const article of articles) {
            console.log(article);
        }
    }
</script>

<svelte:head>
    <title>Articles - {config.sitename}</title>
</svelte:head>

<h1>All Articles</h1>
There are {articles.length} articles on this blog.

<ul>
    <!-- <button on:click={printArticles}>Debug Articles</button> -->

    {#each articles as { title, author, path }}
        <li>
            <a href="{path}">{title}</a> by {author}
        </li>
    {/each}
</ul>

<style>

</style>