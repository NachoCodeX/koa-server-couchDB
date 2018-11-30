import { db } from "../models";
import { IStudentModel } from "../models/student/student.interface";
import { Context } from "koa";
import { handleError } from "../utils";
import { Inject } from "typescript-ioc";
import { StudentHelpers } from "../helpers/student.helpers";
import { ID } from "../types";
import autobind from "autobind-decorator";
import { HTTP_204_NO_CONTENT } from ".";


@autobind
export class StudentController {
    @Inject private _: StudentHelpers

    async delete(ctx: Context) {
        const _id: ID = ctx.params._id
        try {
            await this._.delete(_id)
            ctx.status = HTTP_204_NO_CONTENT;

        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }

    async update(ctx: Context) {
        const _id: ID = ctx.params._id

        try {
            this._.update(_id, ctx.request.body)

            ctx.status = HTTP_204_NO_CONTENT;

        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }

    }
    // async update()


}