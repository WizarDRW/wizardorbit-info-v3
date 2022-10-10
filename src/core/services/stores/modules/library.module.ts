import { defineStore } from "pinia";
import { Library } from "../../../../models/library.model";
import { LibraryQuery } from "../../../../queries/library.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useLibraryStore = defineStore({
    id: "library",
    state: () => ({
        libraries: [] as Array<Library>,
        library: {} as Library,
    }),
    getters: {
        getLibraries(): Array<Library> {
            return this.libraries;
        },
        getLibrary(): Library {
            return this.library;
        }
    },
    actions: {
        async actionLibraries(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${LibraryQuery}`
            });
            this.libraries = (await result.json()).data.libraries;
        },
        async actionLibrary(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${LibraryQuery}`
            });
            this.library = (await result.json()).data.library;
        }
    }
})