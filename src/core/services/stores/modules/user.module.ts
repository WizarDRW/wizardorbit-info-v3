import { defineStore } from "pinia";
import { User } from "../../../../models/user.model";
import { UserQuery } from "../../../../queries/user.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        users: [] as Array<User>,
        user: {} as User,
    }),
    getters: {
        getUsers(): Array<User> {
            return this.users;
        },
        getUser(): User {
            return this.user;
        }
    },
    actions: {
        async actionUsers(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${UserQuery}`
            });
            this.users = (await result.json()).data.users;
        },
        async actionUser(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${UserQuery}`
            });
            this.user = (await result.json()).data.user;
        }
    }
})