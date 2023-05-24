import { Router } from "express";
const router = Router()

//importamos el controlador auth.controller
import * as authCtrl from '../controllers/auth.controller.js'
import { verifySignup } from "../middlewares/index.js";

router.post('/signup',[verifySignup.checkDuplicatedUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router;