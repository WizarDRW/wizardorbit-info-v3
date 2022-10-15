import { defineStore } from "pinia";
import { Category } from "../../../../models/category.model";
import { CategoryQuery } from "../../../../queries/category.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useCategoryStore = defineStore({
    id: "category",
    state: () => ({
        categories: [] as Array<Category>,
        category: {} as Category,
    }),
    getters: {
        getCategories(): Array<Category> {
            return this.categories;
        },
        getCategory(): Category {
            return this.category;
        }
    },
    actions: {
        async actionCategories(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${CategoryQuery}`
            });
            this.categories = (await result.json()).data.categories;
        },
        async actionCategory(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${CategoryQuery}`
            });
            this.category = (await result.json()).data.category;
        }
    }
})