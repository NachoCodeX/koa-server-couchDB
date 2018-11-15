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
    // uuid: string;
    _id?: string;
    _rev?: string;

    constructor({ avatar, email, firstName, gender, isActive, lastName, password }: IUserModel) {
        this._id = undefined
        this._rev = undefined
        this.avatar = avatar
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.isActive = isActive
        this.password = password
        // this.uuid = uuid
    }

    process(response: Nano.DocumentInsertResponse) {
        if (response.ok) {
            this._id = response.id
            this._rev = response.rev
        }
    }



}