import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    lowerCase:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    lowerCase:true,
    unique:true
  },password:{
    type:String,
    required:true,
  }
},{timeStamps:true});
export const User=monngoose.model('User',userSchema);