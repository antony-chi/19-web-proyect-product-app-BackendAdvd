import { Router } from "express";
const router = Router()

//importamos el controlador auth.controller
import * as authCtrl from '../controllers/auth.controller.js'

router.post('/signup')
router.post('/signin')

export default router;