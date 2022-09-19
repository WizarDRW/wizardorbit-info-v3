import { Mongo } from "./mongo.type";

export interface Menu extends Mongo {
    name: String;
    description: String;
    path: String;
    status: Boolean;
    sort: String;
    children: Object;
}
