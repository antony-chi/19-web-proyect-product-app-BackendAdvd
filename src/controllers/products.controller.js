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
    console.log('product create')
    return res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const productsLista = await Product.find();
    console.log("view produc")
    return res.json(productsLista)
}

export const getProductsById = async (req, res) => {
    const productporID = await Product.findById(req.params.productId);
    //console.log(productporID)
    if ( productporID === null) {
        return res.status(404).json('no se encontro ID')
    } else {
        return res.status(200).json(productporID)
    }
}

export const updateProductById = async(req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId,req.body,{
        new: true
    })
    console.log("product UPDATE complete")
    return res.status(200).json(updateProduct)
}
export const deletetProductById = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId)
    console.log('deleted product successfully'+productId)
    return res.status(204).json()
}