import Signinmodel from "../Schema/SigninModel.js";

 export const signinentry= async(reqdata)=>{
   console.log( "from signin controller",reqdata)
    const sign = new Signinmodel({
        Name:reqdata.Name,
        Password:reqdata.Password
    })
    try{
        const sdata = await sign.save()
    }
    
    catch(error)
    {
        console.log("Signing error",error)
    }
    
}

