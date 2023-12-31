import mongoose from "mongoose";


const Paitient_sch= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital_schema",
        required:true
    }

},{timestamps:true})

export const Paitient_schema= mongoose.model('Paitient_schema',Paitient_sch)