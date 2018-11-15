import { IUserModel } from "../user/user.interface";


export interface IStudentModel extends IUserModel {
    career: number,
    isStudent: boolean,
    specialty: number,
    semester: number

}