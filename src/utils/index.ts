import { db, SIIDB } from "../models";
import { IError } from "../interfaces";

export async function checkEmailExists(email: string) {
    // const c= 
    // const count: number = await User.count({ email }).then((res: number) => res)
    const count: number = 0;
    // db.get('users')
    return count >= 1 ? true : false
}


export function handleError(error: any): IError {
    // console.log(error);

    const status = error.status || 500
    // ctx.status = status
    // console.log("ERROR");
    if (status === 500) return { status, message: 'Server error :(' }
    return { status, message: error.message }
    // console.log(error);
    // ctx.body = error
}