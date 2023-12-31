import mongoose from "mongoose";


const medicalRecords_sch= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    spcializedIn:[{
        type:String,
        required:true
    }],

},{timestamps:true})

export const Hospital_schema= mongoose.model('Hospital_schema',medicalRecords_sch)