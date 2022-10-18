import { defineStore } from "pinia";
import { Option } from "../../../../models/option.model";
import { OptionQuery } from "../../../../queries/option.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useOptionStore = defineStore({
    id: "option",
    state: () => ({
        options: [] as Array<Option>,
        option: {} as Option,
    }),
    getters: {
        getOptions(): Array<Option> {
            return this.options;
        },
        getOption(): Option {
            return this.option;
        }
    },
    actions: {
        async actionOptions(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${OptionQuery}`
            });
            this.options = (await result.json()).data.options;
        },
        async actionOption(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${OptionQuery}`
            });
            this.option = (await result.json()).data.option;
        }
    }
})