import mongoose from "mongoose";

const categorySch= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }

},{timestamps:true})

export const categorySchema = mongoose.model("categorySchema",categorySch)