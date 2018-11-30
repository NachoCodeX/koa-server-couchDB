import { Context, Request } from "koa";
import { UserHelpers } from "../helpers/user.helpers";
// import { IUserDocument, IUserModel } from "../models/user/user.interface";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { StudentHelpers } from "../helpers/student.helpers";
import { IStudentModel } from "../models/student/student.interface";
import { HTTP_201_CREATED } from ".";
import { handleError } from "../utils";

@autobind
class AuthController {
    @Inject private _: StudentHelpers
    @Inject private securityService: SecurityService

    constructor() { }


    async signIn(ctx: Context) {
        console.log(ctx.request.body);
        ctx.body = 'AUTH CONTROLLER2'
    }


    async signUp(ctx: Context) {
        try {
            const data: IStudentModel = ctx.request.body as IStudentModel
            await this._.create(data)
            ctx.status = HTTP_201_CREATED
        } catch (error) {
            const { status, message } = handleError(error)
            ctx.status = status
            ctx.body = message
        }
    }
}


//
export default Container.get(AuthController) as AuthController

