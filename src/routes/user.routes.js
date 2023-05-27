import { Router } from "express";
const router = Router()

import * as useContrl from "../controllers/user.controller.js";
import { authJwt, verifySignup } from "../middlewares/index.js";

router.post('/createUser',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicatedUsernameOrEmail
] , useContrl.createUser);

router.get('/',authJwt.verifyToken,useContrl.getUsers);
router.get('/:userId',[authJwt.verifyToken,authJwt.isAdmin],useContrl.getUserById);

router.put('/updateUser/:userId',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted,],
    useContrl.updateUserById);

router.delete('/deleteUser/:userId',useContrl.deleteUserById)

export default router;