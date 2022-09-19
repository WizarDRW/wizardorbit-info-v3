import { Mongo } from "./mongo.type";

export interface About extends Mongo {
    type: String;
    create_date: Date;
    descriptions: Object;
    option: Object;
}