import { Context } from "koa";

import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { TeacherController } from "./teacher.controller";
import { StudentController } from "./student.controller";

@autobind
class ApiController {
    @Inject public teacherCtrl: TeacherController
    @Inject public studentCtrl: StudentController
    constructor() { }


    async test(ctx: Context) {
        // console.log(ctx.request.body);
        ctx.body = 'API TEST'
    }



}


//
export default Container.get(ApiController) as ApiController

