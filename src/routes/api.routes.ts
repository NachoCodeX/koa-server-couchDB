import _ from "../controllers/api.controller";
import * as KoaRouter from 'koa-router'
import { isAuth } from "../middlewares/auth.middleware";


const router = new KoaRouter({ prefix: '/api' })
//STUDENT CONTROLLERS
router.post('/students/', isAuth, _.studentCtrl.create)
router.put('/students/:_id', isAuth, _.studentCtrl.update)
router.delete('/students/:_id', isAuth, _.studentCtrl.remove)

export default router