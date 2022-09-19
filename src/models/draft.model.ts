import { Mongo } from "./mongo.type";

export interface Draft extends Mongo {
    user_id: String;
    create_date: Date;
    update_date: Date;
    type: String;
    data: Object;
}
