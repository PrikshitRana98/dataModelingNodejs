import mongoose from "mongoose";


const productSch= new mongoose.Schema({
    description:{
        required:true,
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema",
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CategorySchema",
        required:true
    }
},{timestamps:true})

export const ProductSchema= mongoose.model("ProductSchema",productSch)