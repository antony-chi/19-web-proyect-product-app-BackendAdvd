//importamos el model
import Product from "../models/Product.js"
export const createProduct = (req, res) => {
    console.log(req.body)
    res.json('creating product')
}

export const getProducts = (req, res) => {
    res.json({code:200, message: 'get products'})
}

export const getProductsById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}
export const deletetProductById = (req, res) => {
    
}