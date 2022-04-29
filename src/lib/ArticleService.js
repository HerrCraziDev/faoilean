import { hrtime } from 'process';
import { services } from './config/settings.json';

class ArticleService {
    articles = [];
    _lastRefresh = Date.now();

    async list() {
        let delta = Date.now() - this._lastRefresh;
        console.log(delta)
        if (this.articles.length < 1 || ( services.article.useCache && delta > services.article.cacheTimeout )) {
            await this.refresh();
            this._lastRefresh = Date.now();
        } else {
            console.log("cached")
        }
        return this.articles;
    }

    async refresh() {
        const begin_hrt = hrtime.bigint(); // this line wants to transition to C++ (pronouns: head/ache)
        const cArticles = import.meta.glob('../routes/articles/*.md');
        this.articles = [];

        for (const path in cArticles) {
            const begin_art = hrtime.bigint();
            console.log(path);

            let art = await cArticles[path]();
            this.articles.push({ ...art.metadata, path: path.replace(/.*?([^\/]*?)\.md$/, "articles/$1") });

            const end_art = hrtime.bigint();
            console.log(`loaded article ${art.metadata?.title} (${end_art - begin_art}ns)`);
        }

        const end_hrt = hrtime.bigint(); // I've had many regrets in life, this terrible gender pun is not one of them
        console.log(`Article loading took ${end_hrt - begin_hrt}ns`);

        return this.articles;
    }
}

export let Articles = new ArticleService();