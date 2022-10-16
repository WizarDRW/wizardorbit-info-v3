import { defineStore } from "pinia";
import { Log } from "../../../../models/log.model";
import { LogQuery } from "../../../../queries/log.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useLogStore = defineStore({
    id: "log",
    state: () => ({
        logs: [] as Array<Log>,
        log: {} as Log,
    }),
    getters: {
        getLogs(): Array<Log> {
            return this.logs;
        },
        getLog(): Log {
            return this.log;
        }
    },
    actions: {
        async actionLogs(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${LogQuery}`
            });
            this.logs = (await result.json()).data.logs;
        },
        async actionLog(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${LogQuery}`
            });
            this.log = (await result.json()).data.log;
        }
    }
})