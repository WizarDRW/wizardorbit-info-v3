import { defineStore } from "pinia";
import { About } from "../../../../models/about.model";
import { AboutQuery } from "../../../../queries/about.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useAboutStore = defineStore({
    id: "about",
    state: () => ({
        abouts: [] as Array<About>,
        about: {} as About,
    }),
    getters: {
        getAbouts(): Array<About> {
            return this.abouts;
        },
        getAbout(): About {
            return this.about;
        }
    },
    actions: {
        async actionAbouts(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${AboutQuery}`
            });
            this.abouts = (await result.json()).data.abouts;
        },
        async actionAbout(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${AboutQuery}`
            });
            this.about = (await result.json()).data.about;
        }
    }
})