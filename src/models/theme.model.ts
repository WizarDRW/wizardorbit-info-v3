import { Mongo } from "./mongo.type";

export interface Theme extends Mongo {
    name: String;
    mode: String;
    base_colors: any[];
    color_scss: Object;
}
