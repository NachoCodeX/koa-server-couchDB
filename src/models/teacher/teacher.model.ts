

import { User } from "../user/user.model";
import * as Nano from 'nano'
import { ITeacherModel } from "./teacher.interface";

export class Teacher implements User, ITeacherModel {
    avatar?: string; email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    isActive?: boolean;
    _id?: string;
    _rev?: string;

    constructor({ avatar, firstName, lastName, email, gender, isActive, password }: ITeacherModel) {
        this.avatar = avatar
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
        this.isActive = isActive
        this.password = password

    }


    process({ ok, id, rev }: Nano.DocumentInsertResponse): void {
        if (ok) {
            this._id = id
            this._rev = rev
        }
        // throw new Error("Method not implemented.");
    }



}