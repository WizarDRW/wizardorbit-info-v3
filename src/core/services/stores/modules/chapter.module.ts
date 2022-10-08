import { defineStore } from "pinia";
import { Chapter } from "../../../../models/chapter.model";
import { ChapterQuery } from "../../../../queries/chapter.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useChapterStore = defineStore({
    id: "chapter",
    state: () => ({
        chapters: [] as Array<Chapter>,
        chapter: {} as Chapter,
    }),
    getters: {
        getChapters(): Array<Chapter> {
            return this.chapters;
        },
        getChapter(): Chapter {
            return this.chapter;
        }
    },
    actions: {
        async actionChapters(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ChapterQuery}`
            });
            this.chapters = (await result.json()).data.chapters;
        },
        async actionChapter(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ChapterQuery}`
            });
            this.chapter = (await result.json()).data.chapter;
        }
    }
})