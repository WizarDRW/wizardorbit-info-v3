import { Mongo } from "./mongo.type";

export interface Forum extends Mongo {
    name: String;
    impressions: any[];
    categories: any[];
    description: String;
    status: Boolean;
    create_date: Date;
    update_date: Date;
    comments: any[];
    short_description: String;
    tags: any[];
    connects: any[];
    user_id: String;
}
