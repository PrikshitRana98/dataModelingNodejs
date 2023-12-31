import mongoose from "mongoose";


const doctor_sch= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Salary:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    experienceInYears:{
        type:Number,
        default:0,
    },
    workInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital_schema"
        },
    ],

},{timestamps:true})

export const Doctor_schema= mongoose.model('Doctor_schema',doctor_sch)