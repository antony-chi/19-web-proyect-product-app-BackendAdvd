//importamos el model
import Product from "../models/Product.js"

export const createProduct = async (req, res) => {
    //console.log(req.body)
    const {name, category, price, imgURL } = req.body

    const newProduct = new Product({
        name,
        category,
        price,
        imgURL
    });
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
    console.log('product create')
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