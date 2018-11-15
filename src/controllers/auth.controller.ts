import { Context, Request } from "koa";
import { UserHelpers } from "../helpers/user.helpers";
// import { IUserDocument, IUserModel } from "../models/user/user.interface";
import { SecurityService } from "../security";
import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { IUserModel } from "../models/user/user.interface";
import { StudentHelpers } from "../helpers/student.helpers";
import { IStudentModel } from "../models/student/student.interface";

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

            console.log(data);
            await this._.create(data)
            ctx.status = 200
        } catch (error) {
            console.log(error);
            ctx.throw(500)
        }
    }
}


//
export default Container.get(AuthController) as AuthController

