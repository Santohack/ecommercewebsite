import Product from "../models/productModel/index.js";
import asyncHandler from "./asyncHandler.js";

const getAllProduct = asyncHandler(async(req,res)=>{
    const products = await Product.find({})
    res.json(products)
})

const getSingleProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    res.status(404).json({message: 'Product not  found'})
})
 
export   {getAllProduct,getSingleProduct}