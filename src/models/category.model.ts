import { Mongo } from "./mongo.type";

export interface Category extends Mongo {
    type: String;
    categories: any[];
}