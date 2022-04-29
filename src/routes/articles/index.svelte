
<script context="module">
    console.log("Here");    
</script>

<script>
    export const layout = '';
    export let articles;

    function printArticles() {
        console.log("articles: ", articles)
        for (const article of articles) {
            console.log(article);
        }
    }
</script>


Tada
<ul>
    <button on:click={printArticles}>Debug Articles</button>

    {#each articles as { title, author, path }}
        <li>
            <a href="{path}">{title}</a> by {author}
        </li>
    {/each}
</ul>

<style>

</style>