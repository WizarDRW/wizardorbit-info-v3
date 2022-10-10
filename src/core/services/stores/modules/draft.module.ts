import { defineStore } from "pinia";
import { Draft } from "../../../../models/draft.model";
import { DraftQuery } from "../../../../queries/draft.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useDraftStore = defineStore({
    id: "draft",
    state: () => ({
        drafts: [] as Array<Draft>,
        draft: {} as Draft,
    }),
    getters: {
        getDrafts(): Array<Draft> {
            return this.drafts;
        },
        getDraft(): Draft {
            return this.draft;
        }
    },
    actions: {
        async actionDrafts(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${DraftQuery}`
            });
            this.drafts = (await result.json()).data.drafts;
        },
        async actionDraft(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${DraftQuery}`
            });
            this.draft = (await result.json()).data.draft;
        }
    }
})