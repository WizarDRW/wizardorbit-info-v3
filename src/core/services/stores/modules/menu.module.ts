import { defineStore } from "pinia";
import { Menu } from "../../../../models/menu.model";
import { MenuQuery } from "../../../../queries/menu.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useMenuStore = defineStore({
    id: "menu",
    state: () => ({
        menus: [] as Array<Menu>,
        menu: {} as Menu,
    }),
    getters: {
        getMenus(): Array<Menu> {
            return this.menus;
        },
        getMenu(): Menu {
            return this.menu;
        }
    },
    actions: {
        async actionMenus(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${MenuQuery}`
            });
            this.menus = (await result.json()).data.menus;
        },
        async actionMenu(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${MenuQuery}`
            });
            this.menu = (await result.json()).data.menu;
        }
    }
})