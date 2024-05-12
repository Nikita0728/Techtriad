import mongoose from "mongoose";
const Signinschema=new mongoose.Schema({
    Name: String,
    Password:String,
    Email:String,
    Phone:Number,
    Address:String,
 })
 const Signinmodel= mongoose.model("signin",Signinschema)
 export default  Signinmodel;