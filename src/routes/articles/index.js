import { Articles } from "$lib/ArticleService";


export async function get({params}) {
    const articles = await Articles.list();
    
    return {
        body: { articles }
    };
}