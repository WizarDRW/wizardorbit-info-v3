import { defineStore } from "pinia";
import { UserOption } from "../../../../models/user.option.model";
import { UserOptionQuery } from "../../../../queries/user.option.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useUserOptionStore = defineStore({
    id: "userOption",
    state: () => ({
        userOptions: [] as Array<UserOption>,
        userOption: {} as UserOption,
    }),
    getters: {
        getUserOptions(): Array<UserOption> {
            return this.userOptions;
        },
        getUserOption(): UserOption {
            return this.userOption;
        }
    },
    actions: {
        async actionUserOptions(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${UserOptionQuery}`
            });
            this.userOptions = (await result.json()).data.userOptions;
        },
        async actionUserOption(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${UserOptionQuery}`
            });
            this.userOption = (await result.json()).data.userOption;
        }
    }
})