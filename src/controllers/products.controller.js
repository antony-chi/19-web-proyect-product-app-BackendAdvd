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

export const getProducts = async (req, res) => {
    const productsLista = await Product.find();
    console.log("view produc")
    res.json(productsLista)
}

export const getProductsById = async (req, res) => {

}

export const updateProductById = async(req, res) => {
    
}
export const deletetProductById = async (req, res) => {
    
}