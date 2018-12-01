import { Student } from "../models/student/student.model";
import { db } from "../models";
import { IStudentModel } from "../models/student/student.interface";
import { ID } from "../types";
import { DocumentViewResponse, DocumentGetResponse } from "nano";
import { HTTP_500_INTERNAL_SERVER_ERROR } from "../controllers";




export class StudentHelpers {

    constructor() { }

    private async _findByUuid(_id: ID) {
        const [id, _rev] = await db.view('findUuidView', 'findbyuuid', { key: _id, include_docs: true }).then((body: DocumentViewResponse<any, IStudentModel>) => body.rows.length > 0 ? [body.rows[0].id, body.rows[0].doc._rev] : null)
        return { id, _rev }
    }

    async create(data: IStudentModel) {
        console.log(data);

        const user = new Student(data);
        try {
            await db.insert(user, data._id).then(response => user.process(response))
        } catch (error) {
            throw { message: 'Server error :(', status: HTTP_500_INTERNAL_SERVER_ERROR }
        }
    }

    async delete(_id: ID) {
        try {
            await db.get(_id).then(doc => {
                return db.destroy(_id, doc._rev)
            })
        } catch (error) {
            throw { message: 'Server error ', status: HTTP_500_INTERNAL_SERVER_ERROR }
        }
    }

    async update(_id: ID, data: Partial<IStudentModel | any>) {
        try {
            const doc = await db.get(_id).then((doc: DocumentGetResponse & IStudentModel & any) => doc)

            Object.keys(data).forEach((key: string) => doc[key] = data[key])

            await db.insert(doc)
        } catch (error) {
            throw { message: 'Server error ', status: HTTP_500_INTERNAL_SERVER_ERROR }
        }
    }
}