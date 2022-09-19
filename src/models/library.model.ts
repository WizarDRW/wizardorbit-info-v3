import { Mongo } from "./mongo.type";

export interface Library extends Mongo {
    user_id: String;
    name: String;
    description: String;
    private: Boolean;
    image_path: String;
    contents: any[];
}
