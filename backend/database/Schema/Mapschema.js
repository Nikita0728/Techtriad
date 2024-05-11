import mongoose from "mongoose";


    const complainSchema = new mongoose.Schema({
        Complain:String,
        Latitude:Number,
        Longitude:Number
    })

const adddataModel =mongoose.model('complain',complainSchema)
export default adddataModel;