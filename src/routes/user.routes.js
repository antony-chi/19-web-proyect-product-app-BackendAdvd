import { Router } from "express";
const router = Router()

import * as useContrl from "../controllers/user.controller.js";
import { authJwt } from "../middlewares/index.js";

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin
] , useContrl.createUser);

export default router;