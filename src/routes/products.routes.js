import { Router } from "express";
const router = Router()

//importamos controller
import * as productsCtrl from '../controllers/products.controller.js'
import {authJwt} from '../middlewares/index.js'
//import middleware


router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductsById)

router.put('/:productId', [authJwt.verifyToken], productsCtrl.updateProductById)

router.delete('/:productId', [authJwt.verifyToken], productsCtrl.deletetProductById)


export default router;