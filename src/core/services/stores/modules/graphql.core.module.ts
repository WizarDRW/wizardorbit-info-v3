import { defineStore } from "pinia";

type Payload = {
    url: RequestInfo,
    query: String,
    variables?: Object
}

export const useGraphqlCoreStore = defineStore({
    id: "graphqlCore",
    actions: {
        async QPOST(payload: Payload) {
            console.log(payload);
            
            return await fetch(payload.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: payload.query,
                    variables: payload.variables
                })
            })
        },
        async MPOST(payload: Payload) {
            return await fetch(payload.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: payload.query,
                    variables: payload.variables
                })
            })
        }
    }
})