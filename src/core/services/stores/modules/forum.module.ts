import { defineStore } from "pinia";
import { Forum } from "../../../../models/forum.model";
import { ForumQuery } from "../../../../queries/forum.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useForumStore = defineStore({
    id: "forum",
    state: () => ({
        forums: [] as Array<Forum>,
        forum: {} as Forum,
    }),
    getters: {
        getForums(): Array<Forum> {
            return this.forums;
        },
        getForum(): Forum {
            return this.forum;
        }
    },
    actions: {
        async actionForums(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ForumQuery}`
            });
            this.forums = (await result.json()).data.forums;
        },
        async actionForum(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ForumQuery}`
            });
            this.forum = (await result.json()).data.forum;
        }
    }
})