import { defineStore } from "pinia";
import { Task } from "../../../../models/task.model";
import { TaskQuery } from "../../../../queries/task.query";
import { useGraphqlCoreStore } from "./graphql.core.module";

export const useTaskStore = defineStore({
    id: "task",
    state: () => ({
        tasks: [] as Array<Task>,
        task: {} as Task,
    }),
    getters: {
        getTasks(): Array<Task> {
            return this.tasks;
        },
        getTask(): Task {
            return this.task;
        }
    },
    actions: {
        async actionTasks(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${TaskQuery}`
            });
            this.tasks = (await result.json()).data.tasks;
        },
        async actionTask(): Promise<void> {
            let result = await useGraphqlCoreStore().QPOST({
                url: 'http://localhost:3000/graphql',
                query: `${TaskQuery}`
            });
            this.task = (await result.json()).data.task;
        }
    }
})