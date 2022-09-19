import { Mongo } from "./mongo.type";

export interface News extends Mongo {
    name: String;
    impressions: any[];
    categories: any[];
    description: String;
    descriptions: any[];
    status: String;
    image_path: String;
    short_description: String;
    create_date: Date;
    showcases: any[];
    tags: any[];
    connects: any[];
    user_id: String;
}
