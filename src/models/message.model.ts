import { Mongo } from "./mongo.type";

export interface Message extends Mongo {
    user_id: String;
    messages: any[];
}
