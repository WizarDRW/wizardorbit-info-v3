import { defineStore } from "pinia";
import { Theme } from "../../../../models/theme.model";
import { ThemeQuery } from "../../../../queries/theme.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useThemeStore = defineStore({
    id: "theme",
    state: () => ({
        themes: [] as Array<Theme>,
        theme: {} as Theme,
    }),
    getters: {
        getThemes(): Array<Theme> {
            return this.themes;
        },
        getTheme(): Theme {
            return this.theme;
        }
    },
    actions: {
        async actionThemes(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ThemeQuery}`
            });
            this.themes = (await result.json()).data.themes;
        },
        async actionTheme(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${ThemeQuery}`
            });
            this.theme = (await result.json()).data.theme;
        }
    }
})