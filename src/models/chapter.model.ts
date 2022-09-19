import { Mongo } from "./mongo.type";

export interface Chapter extends Mongo {
    name: String;
    impressions: any[];
    categories: any[];
    description: String;
    descriptions: any[];
    status: Boolean;
    image_path: String;
    short_description: String;
    create_date: Date;
    showcases: any[];
    tags: any[];
    user_id: String;
}