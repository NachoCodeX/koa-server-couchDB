
import { Context } from "koa";
import { Inject } from "typescript-ioc";
import autobind from "autobind-decorator";
import { TeacherHelpers } from "../helpers/teacher.helpers";
import { ITeacherModel } from "../models/teacher/teacher.interface";
import { IUserModel } from "../models/user/user.interface";
import { handleError } from "../utils";
import { ID } from "../types";


@autobind
export class TeacherController {
    @Inject private _: TeacherHelpers

    constructor() { }

    async createTeacher(ctx: Context) {
        const data: ITeacherModel = ctx.request.body as ITeacherModel
        try {
            await this._.createTeacher(data)
            ctx.status = 200
        } catch (error) {
            const status = error.status || 500
            ctx.status = status
            ctx.body = error
        }
    }

    async deleteTeacher(ctx: Context) {
        const uuid: ID = ctx.params.uuid
        try {
            // console.log("AQUI");
            await this._.deleteTeacher(uuid)

            ctx.body = "OK"
            // console.log(isDeleted);
        } catch (error) {
            // console.log(error);
            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message


        }
    }

    async updateTeacher(ctx: Context) {
        const data: Partial<ITeacherModel> = ctx.request.body,
            uuid: ID = ctx.params.uuid
        // console.log(data);

        try {
            await this._.updateTeacher(uuid, data)
            ctx.status = 200
        } catch (error) {
            console.log(error);

            const { status, message } = handleError(error)
            // console.log(message);

            ctx.status = status

            ctx.body = message

        }

    }
}