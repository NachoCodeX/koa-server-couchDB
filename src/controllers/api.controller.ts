import { Context } from "koa";

import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'
import { StudentController } from "./student.controller";

@autobind
class ApiController {
    @Inject public studentCtrl: StudentController
}


//
export default Container.get(ApiController) as ApiController

