import { User } from "../user/user.model";
import * as Nano from 'nano'
import { IStudentModel } from "./student.interface";

export class Student implements User, IStudentModel {
    career: number;
    specialty: number;
    semester: number;
    isStudent: boolean;
    avatar?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    isActive?: boolean;
    createdAt: string;
    updatedAt: string;
    _id?: string;
    _rev?: string;

    constructor({ updatedAt, createdAt, avatar, firstName, lastName, email, gender, isActive, isStudent, career, password, semester, specialty }: IStudentModel) {

        this.avatar = avatar
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
        this.isActive = isActive
        this.isStudent = isStudent
        this.career = career
        this.password = password
        this.semester = semester
        this.specialty = specialty

        this.updatedAt = updatedAt
        this.createdAt = createdAt
    }


    process({ ok, id, rev }: Nano.DocumentInsertResponse): void {
        if (ok) {
            this._id = id
            this._rev = rev
        }
        // throw new Error("Method not implemented.");
    }



}