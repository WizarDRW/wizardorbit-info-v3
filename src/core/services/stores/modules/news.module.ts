import { defineStore } from "pinia";
import { News } from "../../../../models/news.model";
import { NewsQuery } from "../../../../queries/news.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useNewsStore = defineStore({
    id: "news",
    state: () => ({
        newses: [] as Array<News>,
        news: {} as News,
    }),
    getters: {
        getNewss(): Array<News> {
            return this.newses;
        },
        getNews(): News {
            return this.news;
        }
    },
    actions: {
        async actionNewss(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${NewsQuery}`
            });
            this.newses = (await result.json()).data.newses;
        },
        async actionNews(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${NewsQuery}`
            });
            this.news = (await result.json()).data.news;
        }
    }
})