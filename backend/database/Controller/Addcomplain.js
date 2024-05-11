
import { Long } from "mongodb"
import adddataModel from "../Schema/Mapschema.js"

 const add = async(reqdata)=>{
    // const {complain}=reqdata
    console.log("im resdata", reqdata)
    
    const adddata =  new adddataModel({
        Complain : reqdata.complain,
        Latitude:reqdata.latitude,
        Longitude:reqdata.longitude
    })

    try{
        await adddata.save()
        console.log("complain added")
    }
    catch(e)
    {
        console.log("complain not added",e)
    }
}
export default add;