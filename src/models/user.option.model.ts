import { Mongo } from "./mongo.type";

export interface UserOption extends Mongo {
    user_id: String;
    isViewFirstName: Boolean;
    isViewLastName: Boolean;
    isReveseFullName: Boolean;
    isViewUserName: Boolean;
    isViewEmail: Boolean;
    isViewImagePath: Boolean;
    isViewDescription: Boolean;
    isViewRole: Boolean;
    isViewTitle: Boolean;
    isViewCreateDate: Boolean;
    dark: String;
    light: String;
    passwordOptions: PasswordOption[];
}

interface PasswordOption {
    isPrivateKey: Boolean;
    privateKey: String;
    minLength: Number;
    maxLength: Number;
    isIrregularCharracter: Boolean;
    minIrregularCharracterLength: Number;
    maxIrregularCharracterLength: Number;
    isUpperCase: Boolean;
    minUpperCaseLength: Number;
    maxUpperCaseLength: Number;
    isLowerCase: Boolean;
    minLowerCaseLength: Number;
    maxLowerCaseLength: Number;
    isNumber: Boolean;
    minNumberLength: Number;
    maxNumberLength: Number;
}