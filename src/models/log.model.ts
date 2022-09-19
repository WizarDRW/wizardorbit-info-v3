import { Mongo } from "./mongo.type";

export interface Log extends Mongo {
    user_id: String;
    create_date: Date;
    title: String;
    datas: any[];
}
