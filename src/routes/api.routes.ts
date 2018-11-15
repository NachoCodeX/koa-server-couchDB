import ApiController from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'


const router = new KoaRouter({ prefix: '/api' })
router.get('/test', ApiController.test)

//TEACHER CONTROLLERS
router.post('/teacher', ApiController.teacherCtrl.createTeacher)
router.put('/teacher/:uuid', ApiController.teacherCtrl.updateTeacher)
router.delete('/teacher/:uuid', ApiController.teacherCtrl.deleteTeacher)

//STUDENT CONTROLLERS
router.put('/student/:_id', ApiController.studentCtrl.update)
router.delete('/student/:_id', ApiController.studentCtrl.delete)

export default router