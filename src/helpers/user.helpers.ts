import { genSaltSync, hashSync } from 'bcrypt';
import { SALT_FACTOR } from '../config';
import { IUserModel } from '../models/user/user.interface';
import { Student } from '../models/student/student.model';
import { db } from '../models';
import { DocumentInsertResponse } from 'nano';

export function hashPassword(password: string): string {
    const salt: string = genSaltSync(SALT_FACTOR)
    return hashSync(password, salt)
}


export class UserHelpers {
    constructor() { }



}




// USER UTILS
// export function hashPassword(password: string): string {
//     const salt: string = genSaltSync(SALT_FACTOR)
//     return hashSync(password, salt)
// }

//USER HELPERS
// export function createUser(data?: IUserModel): Promise<IUserDocument> {
//     const user: IUserDocument = new User(data)

//     return user.save().then((res: IUserDocument) => {
//         console.log(res);

//         return res
//     })
// }