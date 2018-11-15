import { ITeacherModel } from "../models/teacher/teacher.interface";
import { ID } from "../types";
import { Teacher } from "../models/teacher/teacher.model";
import { db } from "../models";



export class TeacherHelpers {


    async createTeacher(data: ITeacherModel) {
        const teacher: Teacher = new Teacher(data)
        try {
            await db.insert(teacher).then(response => teacher.process(response))
        } catch (error) {
            throw { message: 'Server error :(', status: 500 }

        }

    }

    async deleteTeacher(uuid: ID) {
        try {
            // await db.
        } catch (error) {

        }
    }

    async updateTeacher(uuid: ID, data: Partial<ITeacherModel>) {

    }

}   