import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    rating:{
        type:Number,
        required:true,
        
    },
    comment:{
        type:String,
        required:true,
        
    }
},{
    timestamps:true
})

const productSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    review:[reviewSchema],
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})

const Product = mongoose.model('products',productSchema)
export default Product

