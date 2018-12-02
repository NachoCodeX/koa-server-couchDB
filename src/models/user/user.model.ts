import { IUserModel } from "./user.interface";
import * as Nano from 'nano'

export class User implements IUserModel {
    avatar?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    isActive?: boolean;
    role:string;
    _id?: string;
    _rev?: string;


    process(response: Nano.DocumentInsertResponse) {
        if (response.ok) {
            this._id = response.id
            this._rev = response.rev
        }
    }



}
