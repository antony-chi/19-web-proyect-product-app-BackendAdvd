import { Router } from "express";
const router = Router()

//importamos controller
import * as productsCtrl from '../controllers/products.controller.js'

router.get('/', productsCtrl.getProducts)

export default router;