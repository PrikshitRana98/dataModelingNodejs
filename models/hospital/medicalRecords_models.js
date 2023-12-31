import mongoose from "mongoose";


const medicalRecords_sch= new mongoose.Schema({

},{timestamps:true})

export const MedicalRecords_schema= mongoose.model('MedicalRecords_schema',medicalRecords_sch)