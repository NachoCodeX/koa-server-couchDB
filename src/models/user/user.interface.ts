import { MaybeDocument } from 'nano'

export interface IUserModel extends MaybeDocument {
    avatar?: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    role:string,
    isActive?: boolean,
    createdAt?: string,
    updatedAt?: string
}

