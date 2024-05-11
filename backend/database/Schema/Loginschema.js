
import mongoose from "mongoose"

const loginschema= new mongoose.Schema( {
    Name:String,
   Password:String,
   
}
)
 const Loginmodel= mongoose.model("login",loginschema)
 export default Loginmodel

