import { Mongo } from "./mongo.type";

export interface Option extends Mongo {
    json_social: Object;
    ico: String;
    header_logo: String;
    main_logo: String;
    title: String;
    main_title: String;
    codedby: String;
    startus: String;
}
