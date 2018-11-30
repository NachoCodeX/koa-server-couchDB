import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'
import { isAuth } from "../middlewares/auth.middleware";


const router = new KoaRouter({ prefix: '/api' })
router.get('/test', ApiController.test)

//TEACHER CONTROLLERS
router.post('/teacher', ApiController.teacherCtrl.createTeacher)
router.put('/teacher/:uuid', ApiController.teacherCtrl.updateTeacher)
router.delete('/teacher/:uuid', ApiController.teacherCtrl.deleteTeacher)

//STUDENT CONTROLLERS
router.put('/student/:_id', isAuth, ApiController.studentCtrl.update)
router.delete('/student/:_id', isAuth, ApiController.studentCtrl.delete)

export default router