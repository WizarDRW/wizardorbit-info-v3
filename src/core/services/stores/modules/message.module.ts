import { defineStore } from "pinia";
import { Message } from "../../../../models/message.model";
import { MessageQuery } from "../../../../queries/message.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useMessageStore = defineStore({
    id: "message",
    state: () => ({
        messages: [] as Array<Message>,
        message: {} as Message,
    }),
    getters: {
        getMessages(): Array<Message> {
            return this.messages;
        },
        getMessage(): Message {
            return this.message;
        }
    },
    actions: {
        async actionMessages(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${MessageQuery}`
            });
            this.messages = (await result.json()).data.messages;
        },
        async actionMessage(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${MessageQuery}`
            });
            this.message = (await result.json()).data.message;
        }
    }
})