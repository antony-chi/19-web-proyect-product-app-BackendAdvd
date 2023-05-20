import { Router } from "express";
const router = Router()

//importamos controller
import * as productsCtrl from '../controllers/products.controller.js'

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductsById)

router.put('/:productId', productsCtrl.updateProductById)

router.delete('/:productId', productsCtrl.deletetProductById)


export default router;