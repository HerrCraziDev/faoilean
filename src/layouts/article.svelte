<script>
    import Tag from '$lib/components/Tag.svelte';

    export let title;
    export let author;
    export let subtitle;
    export let id;
    export let tags;
</script>


<svelte:head>
    <title>{title} - Faoilean</title>
</svelte:head>

<div id="article-head">
    <div id="article-header">
        {#if id}
            <code id="docid">{id}</code>
        {/if}
        
        {#if tags?.length > 0}    
            <ul id="taglist" class="nolist">
                {#each tags as tag}
                <Tag name={tag}/>
                {/each}
            </ul>
        {/if}
    </div>

    <h1 id="title">{title}</h1>

    {#if subtitle}
        <span id="subtitle">{subtitle}</span>
    {/if}

    <i id="author">~ {author} ~</i>

    <img src="/triskel.svg" alt="" id="triskel">
</div>

<article>
    <slot />
</article>


<style global>
    article {
        max-width: 80em;
    }

    article h1 {
        text-align: left;
        margin-bottom: .5rem;
        font-size: 2rem;
    }

    article p {
        text-indent: 1rem;
        text-align: justify;
    }

    #article-head {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #article-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    #taglist {
        display: inline-block;
    }

    #taglist * {
        margin-left: .5em;
    }

    #docid {
        color: var(--text-color);
        font-size: .8em;
    }

    #triskel {
        margin-top: 5rem;
        height: 2rem;
        color: gray;
    }

    #title, #subtitle {
        text-align: center;
    }

    #title {
        margin-top: 4rem;
        margin-bottom: .5rem;
    }
    
    #subtitle {
        font-variant: small-caps;
        font-size: 1.5rem;
    }
    
    #author {
        text-align: center;
    }
    
    #subtitle, #author {
        color: #666;
    }

    #title, article h1, article h2 {
        font-family: "Alegreya";
    }
    
</style>