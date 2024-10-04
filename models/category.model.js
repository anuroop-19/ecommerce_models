import mongoose from "mongoose"
const categorySchema=new mongoose.Schema({
  name:{
    type:string
  }
},{timeStamps:true})
export const Category=mongoose.model("Category",categorySchema);
