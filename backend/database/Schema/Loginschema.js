
import mongoose from "mongoose"

const loginschema= new mongoose.Schema( {
    Name:{
        type:String,
        required:true
    },
   Password:String,
   
}
)
 const Loginmodel= mongoose.model("login",loginschema)
 export default Loginmodel

